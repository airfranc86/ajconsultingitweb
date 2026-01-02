/**
 * Cargador de configuración - Aplica valores de CONFIG al DOM
 * Se ejecuta después de que CONFIG esté disponible
 */

(function() {
    'use strict';

    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyConfig);
    } else {
        applyConfig();
    }

    function applyConfig() {
        if (typeof CONFIG === 'undefined') {
            console.warn('CONFIG no está disponible. Asegúrate de que config.js se carga antes de este script.');
            return;
        }

        // Aplicar URLs canónicas y Open Graph
        const canonicalUrl = document.getElementById('canonical-url');
        if (canonicalUrl) {
            canonicalUrl.href = CONFIG.URLS.SITE;
        }

        const ogUrl = document.getElementById('og-url');
        if (ogUrl) {
            ogUrl.content = CONFIG.URLS.SITE;
        }

        // Actualizar Schema.org dinámicamente
        const schemaScript = document.querySelector('script[type="application/ld+json"]');
        if (schemaScript) {
            try {
                const schema = JSON.parse(schemaScript.textContent);
                schema.url = CONFIG.URLS.SITE;
                schema.contactPoint.email = CONFIG.CONTACT.EMAIL_PRIMARY;
                schema.sameAs = [CONFIG.CONTACT.LINKEDIN];
                schema.address.addressCountry = CONFIG.COMPANY.COUNTRY_CODE;
                schemaScript.textContent = JSON.stringify(schema, null, 2);
            } catch (e) {
                console.warn('No se pudo actualizar Schema.org:', e);
            }
        }

        // Aplicar URLs de aplicaciones
        const streamlitLinks = document.querySelectorAll('.streamlit-dashboard-url');
        streamlitLinks.forEach(link => {
            link.href = CONFIG.URLS.STREAMLIT_DASHBOARD;
        });

        const monitoreoLinks = document.querySelectorAll('.monitoreo-obra-vial-url');
        monitoreoLinks.forEach(link => {
            link.href = CONFIG.URLS.MONITOREO_OBRA_VIAL;
        });

        // Aplicar email de contacto
        const emailLink = document.getElementById('email-contact-link');
        if (emailLink) {
            const emailBody = encodeURIComponent('Hola, estoy interesado en conocer más sobre su aplicación web y productos de Business Intelligence para clínicas. Me gustaría agendar una demostración personalizada.\n\nSaludos cordiales');
            emailLink.href = `mailto:${CONFIG.CONTACT.EMAIL_PRIMARY}?cc=${CONFIG.CONTACT.EMAIL_SECONDARY}&subject=${encodeURIComponent('Consulta sobre Business Intelligence')}&body=${emailBody}`;
        }

        // Aplicar LinkedIn
        const linkedinLink = document.getElementById('linkedin-contact-link');
        if (linkedinLink) {
            linkedinLink.href = CONFIG.CONTACT.LINKEDIN;
        }
    }
})();

