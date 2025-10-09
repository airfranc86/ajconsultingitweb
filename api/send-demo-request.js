/**
 * API Route para envío automático de emails de demo
 * A&J Consulting IT - Business Intelligence Solutions
 * Versión simplificada con envío automático
 */

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Solo permitir POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const { nombre, email, clinica, telefono, mensaje } = req.body;

        // Debug: Verificar variables de entorno
        console.log('Variables de entorno:', {
            GMAIL_USER: process.env.GMAIL_USER ? 'Configurado' : 'NO CONFIGURADO',
            GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? 'Configurado' : 'NO CONFIGURADO'
        });

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

        // Configurar transporter de Gmail
        console.log('Configurando transporter de Gmail...');
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });

        // Verificar conexión
        console.log('Verificando conexión con Gmail...');
        await transporter.verify();
        console.log('Conexión con Gmail verificada exitosamente');

        // Configurar email
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'franciscoaucar@ajconsultingit.com',
            cc: 'anj11@ajconsultingit.com',
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
        await transporter.sendMail(mailOptions);

        // Respuesta exitosa
        return res.status(200).json({
            success: true,
            message: 'Solicitud enviada exitosamente. Nos pondremos en contacto contigo en las próximas 24 horas.'
        });

    } catch (error) {
        console.error('Error enviando email:', error);
        return res.status(500).json({
            error: 'Error interno del servidor. Por favor intenta nuevamente.'
        });
    }
}
