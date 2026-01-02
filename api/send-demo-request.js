/**
 * API Route para envío automático de emails de demo
 * A&J Consulting IT - Business Intelligence Solutions
 * Versión simplificada con envío automático
 */

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Configurar headers para CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Manejar preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Solo permitir POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const { nombre, email, clinica, telefono, mensaje } = req.body;

        // Debug: Verificar variables de entorno (solo en desarrollo)
        if (process.env.NODE_ENV === 'development') {
            console.log('=== INICIO DE SOLICITUD DE DEMO ===');
            console.log('Variables de entorno:', {
                GMAIL_USER: process.env.GMAIL_USER ? 'Configurado' : 'NO CONFIGURADO',
                GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? 'Configurado' : 'NO CONFIGURADO',
                CONTACT_EMAIL_PRIMARY: process.env.CONTACT_EMAIL_PRIMARY ? 'Configurado' : 'NO CONFIGURADO',
                CONTACT_EMAIL_SECONDARY: process.env.CONTACT_EMAIL_SECONDARY ? 'Configurado' : 'NO CONFIGURADO',
            });
        }

        // Validaciones básicas
        if (!nombre || !email || !clinica) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        // Sanitización y validación de inputs
        const sanitizeString = (str, maxLength = 500) => {
            if (!str || typeof str !== 'string') return '';
            return str.trim().slice(0, maxLength).replace(/[<>]/g, '');
        };

        const validateEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email) && email.length <= 254;
        };

        // Sanitizar y validar datos
        const sanitizedNombre = sanitizeString(nombre, 100);
        const sanitizedEmail = email.trim().toLowerCase().slice(0, 254);
        const sanitizedClinica = sanitizeString(clinica, 200);
        const sanitizedTelefono = telefono ? sanitizeString(telefono, 20) : '';
        const sanitizedMensaje = mensaje ? sanitizeString(mensaje, 1000) : '';

        // Validaciones adicionales
        if (sanitizedNombre.length < 2) {
            return res.status(400).json({ error: 'El nombre debe tener al menos 2 caracteres' });
        }

        if (!validateEmail(sanitizedEmail)) {
            return res.status(400).json({ error: 'Email inválido' });
        }

        if (sanitizedClinica.length < 2) {
            return res.status(400).json({ error: 'El nombre de la clínica debe tener al menos 2 caracteres' });
        }

        // Validar formato de teléfono si se proporciona
        if (sanitizedTelefono && !/^[\d\s\-\+\(\)]+$/.test(sanitizedTelefono)) {
            return res.status(400).json({ error: 'Formato de teléfono inválido' });
        }

        // Verificar que las variables de entorno estén configuradas
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.error('Variables de entorno faltantes:', {
                GMAIL_USER: !!process.env.GMAIL_USER,
                GMAIL_APP_PASSWORD: !!process.env.GMAIL_APP_PASSWORD
            });
            return res.status(500).json({
                error: 'Configuración del servidor incompleta. Contacta al administrador.'
            });
        }

        // Verificar emails destinatarios
        const toEmail = process.env.CONTACT_EMAIL_PRIMARY || 'franciscoaucar@ajconsultingit.com';
        const ccEmail = process.env.CONTACT_EMAIL_SECONDARY || 'andresnj11@ajconsultingit.com';

        // Configurar transporter de Gmail para Vercel
        console.log('Configurando transporter de Gmail...');
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true para puerto 465, false para otros puertos
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            },
            // Configuración adicional para Vercel
            connectionTimeout: 60000, // 60 segundos
            greetingTimeout: 30000,  // 30 segundos
            socketTimeout: 60000     // 60 segundos
        });

        // Verificar conexión
        console.log('Verificando conexión con Gmail...');
        await transporter.verify();
        console.log('Conexión con Gmail verificada exitosamente');

        // Configurar email (usar datos sanitizados)
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: toEmail,
            cc: ccEmail,
            subject: `Solicitud de Demo - ${sanitizedClinica}`,
            html: `
                <h2>Nueva Solicitud de Demo</h2>
                <p><strong>Nombre:</strong> ${sanitizedNombre}</p>
                <p><strong>Email:</strong> ${sanitizedEmail}</p>
                <p><strong>Clínica:</strong> ${sanitizedClinica}</p>
                <p><strong>Teléfono:</strong> ${sanitizedTelefono || 'No proporcionado'}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${sanitizedMensaje || 'Sin mensaje adicional'}</p>
                <hr>
                <p><em>Enviado desde el formulario web de A&J Consulting IT</em></p>
                <p><small>Fecha: ${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}</small></p>
            `
        };

        // Enviar email
        console.log('Enviando email...');
        const info = await transporter.sendMail(mailOptions);
        console.log('Email enviado exitosamente:', info.messageId);

        // Respuesta exitosa
        return res.status(200).json({
            success: true,
            message: 'Solicitud enviada exitosamente. Nos pondremos en contacto contigo en las próximas 24 horas.',
            messageId: info.messageId
        });

    } catch (error) {
        console.error('=== ERROR EN ENVÍO DE EMAIL ===');
        console.error('Error completo:', error);
        console.error('Código de error:', error.code);
        console.error('Mensaje:', error.message);
        console.error('Stack:', error.stack);

        // Proporcionar información más específica del error
        let errorMessage = 'Error interno del servidor. Por favor intenta nuevamente.';
        let statusCode = 500;

        if (error.code === 'EAUTH') {
            errorMessage = 'Error de autenticación con Gmail. Verifica las credenciales de la aplicación.';
            statusCode = 401;
        } else if (error.code === 'ECONNECTION') {
            errorMessage = 'Error de conexión con el servidor de Gmail.';
            statusCode = 503;
        } else if (error.code === 'ETIMEDOUT') {
            errorMessage = 'Timeout de conexión. El servidor tardó demasiado en responder.';
            statusCode = 504;
        } else if (error.response) {
            errorMessage = `Error del servidor de email: ${error.response}`;
        } else if (error.message && error.message.includes('Invalid login')) {
            errorMessage = 'Credenciales de Gmail inválidas. Verifica el usuario y la contraseña de aplicación.';
            statusCode = 401;
        }

        // No exponer detalles sensibles en producción
        const response = {
            error: errorMessage,
            timestamp: new Date().toISOString()
        };

        // Solo incluir código y detalles en desarrollo
        if (process.env.NODE_ENV === 'development') {
            response.code = error.code;
            response.details = error.message;
        }

        return res.status(statusCode).json(response);
    }
}
