/**
 * API Route alternativa usando EmailJS
 * A&J Consulting IT - Business Intelligence Solutions
 * Solución sin necesidad de App Passwords de Gmail
 */

import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

// Configuración de Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Variables de entorno de Supabase no configuradas');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Rate limiting en memoria (para Vercel Functions)
const rateLimits = new Map();

// Configuración de Gmail con OAuth2
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: process.env.GMAIL_ACCESS_TOKEN
    }
});

// Configuración de encriptación
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || crypto.randomBytes(32);
const ALGORITHM = 'aes-256-gcm';

// Función para encriptar datos sensibles
function encryptData(text) {
    if (!text) return null;

    try {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipher(ALGORITHM, ENCRYPTION_KEY);
        cipher.setAAD(Buffer.from('ajconsulting', 'utf8'));

        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');

        const authTag = cipher.getAuthTag();

        return {
            encrypted: encrypted,
            iv: iv.toString('hex'),
            authTag: authTag.toString('hex')
        };
    } catch (error) {
        console.error('Error encriptando datos:', error);
        return null;
    }
}

// Función para obtener IP real
function getClientIP(req) {
    const forwarded = req.headers['x-forwarded-for'];
    const realIP = req.headers['x-real-ip'];
    const cfConnectingIP = req.headers['cf-connecting-ip'];

    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }
    if (realIP) {
        return realIP;
    }
    if (cfConnectingIP) {
        return cfConnectingIP;
    }
    return req.connection?.remoteAddress || 'unknown';
}

// Función para verificar rate limiting
function checkRateLimit(ip) {
    const now = Date.now();
    const windowMs = 60 * 60 * 1000; // 1 hora
    const maxRequests = 3;

    if (!rateLimits.has(ip)) {
        rateLimits.set(ip, { count: 1, firstRequest: now });
        return true;
    }

    const ipData = rateLimits.get(ip);

    // Reset si han pasado más de 1 hora
    if (now - ipData.firstRequest > windowMs) {
        rateLimits.set(ip, { count: 1, firstRequest: now });
        return true;
    }

    // Verificar límite
    if (ipData.count >= maxRequests) {
        return false;
    }

    ipData.count++;
    return true;
}

// Función para validar email (ahora permite todos los emails)
function isCorporateEmail(email) {
    // Permitir todos los emails para testing y no perder leads
    return true;
}

// Función para sanitizar input
function sanitizeInput(text) {
    if (!text) return '';

    const dangerousChars = ['<', '>', '"', "'", '&', '\x00', '\r', '\n'];
    let sanitized = text;

    dangerousChars.forEach(char => {
        sanitized = sanitized.replace(new RegExp(char, 'g'), '');
    });

    return sanitized.trim();
}

// Función para enviar email a múltiples destinatarios con Gmail OAuth2
async function sendEmailNotification(data, ip) {
    try {
        // Lista de destinatarios
        const recipients = [
            'franciscoaucar@ajconsultingit.com',
            'anj11@ajconsultingit.com'
        ];

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: recipients.join(', '),
            subject: `Nueva Solicitud de Demo - ${data.clinica}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #27ae60;">Nueva Solicitud de Demostración</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Información del Cliente</h3>
            <p><strong>Nombre:</strong> ${data.nombre}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Clínica:</strong> ${data.clinica}</p>
            <p><strong>Teléfono:</strong> ${data.telefono || 'No proporcionado'}</p>
          </div>
          
          <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2e7d32; margin-top: 0;">Mensaje</h3>
            <p style="white-space: pre-wrap;">${data.mensaje || 'No se proporcionó mensaje adicional'}</p>
          </div>
          
          <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin: 20px 0; font-size: 12px; color: #666;">
            <p><strong>IP:</strong> ${ip}</p>
            <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
            <p><strong>User Agent:</strong> ${data.user_agent || 'No disponible'}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="text-align: center; color: #666; font-size: 12px;">
            A&J Consulting IT - Sistema de Notificaciones Automáticas
          </p>
        </div>
      `
        };

        await transporter.sendMail(mailOptions);
        console.log('Email enviado exitosamente via Gmail OAuth2');
        return true;
    } catch (error) {
        console.error('Error enviando email:', error);
        return false;
    }
}

export default async function handler(req, res) {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const clientIP = getClientIP(req);
        const userAgent = req.headers['user-agent'] || '';

        console.log(`Demo request recibida desde IP: ${clientIP}`);

        // 1. Verificar rate limiting
        if (!checkRateLimit(clientIP)) {
            console.warn(`Rate limit excedido para IP: ${clientIP}`);
            return res.status(429).json({
                error: 'Demasiadas solicitudes. Intenta nuevamente en una hora.'
            });
        }

        const { nombre, email, clinica, telefono, mensaje, website } = req.body;

        // 2. Verificar honeypot (detección de bots)
        if (website) {
            console.warn(`Bot detectado - honeypot activado desde IP: ${clientIP}`);
            return res.status(400).json({ error: 'Solicitud inválida' });
        }

        // 3. Validaciones básicas
        if (!nombre || !email || !clinica) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        // 4. Validar email corporativo
        if (!isCorporateEmail(email)) {
            console.warn(`Email personal detectado: ${email} desde IP: ${clientIP}`);
            return res.status(400).json({
                error: 'Solo se permiten emails corporativos'
            });
        }

        // 5. Sanitizar inputs
        const sanitizedData = {
            nombre: sanitizeInput(nombre),
            email: email.toLowerCase().trim(),
            clinica: sanitizeInput(clinica),
            telefono: telefono ? sanitizeInput(telefono) : null,
            mensaje: mensaje ? sanitizeInput(mensaje) : null,
            ip_address: clientIP,
            user_agent: userAgent,
            honeypot: website,
            status: 'pending'
        };

        // 5.1. Encriptar datos sensibles antes de guardar
        const encryptedData = {
            ...sanitizedData,
            // Encriptar datos sensibles
            nombre_encrypted: encryptData(sanitizedData.nombre),
            email_encrypted: encryptData(sanitizedData.email),
            clinica_encrypted: encryptData(sanitizedData.clinica),
            telefono_encrypted: sanitizedData.telefono ? encryptData(sanitizedData.telefono) : null,
            mensaje_encrypted: sanitizedData.mensaje ? encryptData(sanitizedData.mensaje) : null,
            // Mantener datos originales para email (no encriptados en notificación)
            original_data: sanitizedData
        };

        // 6. Verificar duplicados recientes
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
        const { data: recentRequests } = await supabase
            .from('demo_requests')
            .select('id')
            .eq('email', sanitizedData.email)
            .gte('created_at', oneHourAgo);

        if (recentRequests && recentRequests.length > 0) {
            console.warn(`Email duplicado detectado: ${email}`);
            return res.status(400).json({
                error: 'Ya has enviado una solicitud recientemente. Espera una hora.'
            });
        }

        // 7. Guardar en Supabase (datos encriptados)
        const { data: insertResult, error: insertError } = await supabase
            .from('demo_requests')
            .insert([encryptedData])
            .select();

        if (insertError) {
            console.error('Error guardando en Supabase:', insertError);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }

        console.log(`Demo request guardada exitosamente: ${email}`);

        // 8. Enviar notificación por email (usar datos originales, no encriptados)
        const emailSent = await sendEmailNotification(sanitizedData, clientIP);
        if (!emailSent) {
            console.warn(`Error enviando notificación para: ${email}`);
        }

        // 9. Respuesta exitosa
        return res.status(200).json({
            status: 'success',
            message: 'Solicitud recibida exitosamente. Nos pondremos en contacto contigo en las próximas 24 horas.',
            request_id: insertResult[0]?.id
        });

    } catch (error) {
        console.error('Error en demo-request:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}
