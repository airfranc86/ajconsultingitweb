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

        // Validaciones básicas
        if (!nombre || !email || !clinica) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        // Configurar transporter de Gmail
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });

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
