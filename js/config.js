/**
 * Configuración centralizada para A&J Consulting IT
 * Este archivo contiene todas las constantes públicas del sitio
 * Los datos sensibles están en variables de entorno (backend)
 */

const CONFIG = {
    // Información de contacto (pública)
    CONTACT: {
        EMAIL_PRIMARY: 'franciscoaucar@ajconsultingit.com',
        EMAIL_SECONDARY: 'andresnj11@ajconsultingit.com',
        LINKEDIN: 'https://www.linkedin.com/company/a-j-consultingit-software/about/'
    },

    // URLs de aplicaciones y servicios
    URLS: {
        SITE: 'https://ajconsultingitwebv2.vercel.app',
        STREAMLIT_DASHBOARD: 'https://clinicas-dashboard.streamlit.app',
        MONITOREO_OBRA_VIAL: 'https://monitoreo-obra-vial-web.vercel.app/'
    },

    // Información de la empresa
    COMPANY: {
        NAME: 'A&J Consulting IT',
        ALTERNATE_NAME: 'A&J Consulting',
        COUNTRY: 'España',
        COUNTRY_CODE: 'ES'
    }
};

// Exportar para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

