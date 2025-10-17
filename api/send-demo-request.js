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

        // Debug: Verificar variables de entorno
        console.log('=== INICIO DE SOLICITUD DE DEMO ===');
        console.log('Variables de entorno:', {
            GMAIL_USER: process.env.GMAIL_USER ? 'Configurado' : 'NO CONFIGURADO',
            GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? 'Configurado' : 'NO CONFIGURADO',
            NODE_ENV: process.env.NODE_ENV || 'undefined'
        });
        console.log('Datos recibidos:', { nombre, email, clinica, telefono: telefono ? 'Proporcionado' : 'No proporcionado' });

        // Validaciones básicas
        if (!nombre || !email || !clinica) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
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

        // Configurar email
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'franciscoaucar@ajconsultingit.com',
            cc: 'andresnj11@ajconsultingit.com',
            subject: `Solicitud de Demo - ${clinica}`,
            html: `
                <h2>Nueva Solicitud de Demo</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Clínica:</strong> ${clinica}</p>
                <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${mensaje || 'Sin mensaje adicional'}</p>
                <hr>
                <p><em>Enviado desde el formulario web de A&J Consulting IT</em></p>
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

        return res.status(statusCode).json({
            error: errorMessage,
            code: error.code,
            details: process.env.NODE_ENV === 'development' ? error.message : undefined,
            timestamp: new Date().toISOString()
        });
    }
}
