/**
 * Proyectos de Venta - Renderizado dinámico
 * Muestra proyectos como casos de aplicación real según necesidad de negocio
 */

(function () {
    'use strict';

    // Datos de proyectos
    const proyectos = [
        {
            id: 'santa-barba',
            nombre: 'Santa Barba CBA',
            tipo: 'Servicios Locales',
            url: 'https://santa-barba-cba.vercel.app/',
            logo: '/assets/ClientesWeb/SantaBarbaCba/santabarba-logo.png',
            descripcion: 'Web comercial con contacto directo.',
            caracteristicas: ['Responsive', 'Formulario de contacto', 'Optimizado SEO'],
            enfoque: 'contacto-directo'
        },
        {
            id: 'vinewatch',
            nombre: 'VineWatch Consulting',
            tipo: 'Consultoría',
            url: 'https://vinewatchconsulting.vercel.app/',
            logo: '/assets/ClientesWeb/VineWatch/vinewatch-logo.png',
            descripcion: 'Presentación profesional de servicios.',
            caracteristicas: ['Diseño profesional', 'Navegación clara', 'Responsive'],
            enfoque: 'posicionamiento'
        },
        {
            id: 'skypulse',
            nombre: 'SkyPulse AR',
            tipo: 'Dashboard',
            url: 'https://skypulse-ar.vercel.app/dashboard',
            logo: '/assets/ClientesWeb/SkyPulse-ar/skypulsear-logo.png',
            descripcion: 'Dashboard técnico con métricas en tiempo real.',
            caracteristicas: ['Dashboard integrado', 'Visualización de datos', 'Tiempo real'],
            enfoque: 'analitica'
        },
        {
            id: 'aeromet',
            nombre: 'AeroMet ARG',
            tipo: 'Educativo',
            url: 'https://aerometarg.vercel.app/',
            logo: '/assets/ClientesWeb/aerometarg/aeromet-logo.png',
            descripcion: 'Contenido educativo especializado.',
            caracteristicas: ['Contenido especializado', 'Estructura clara', 'SEO optimizado'],
            enfoque: 'educacion'
        },
        {
            id: 'fenix',
            nombre: 'Fenix CBA',
            tipo: 'Sistema Operativo',
            url: 'https://fenixcba.vercel.app/',
            logo: '/assets/ClientesWeb/fenixcba/Fenix-logo.png',
            descripcion: 'Plataforma operativa integrada.',
            caracteristicas: ['Lógica funcional', 'Sistema integrado', 'Operativo'],
            enfoque: 'sistema'
        },
        {
            id: 'app4bar',
            nombre: 'App4Bar',
            tipo: 'Sistema de Gestión',
            url: 'https://app4bar.onrender.com/#/login',
            logo: '/assets/ClientesWeb/app4bar/app4bar-logo.jpg',
            descripcion: 'Gestión integral para bares: stock, OCR y reportes.',
            caracteristicas: ['Stock con alertas WhatsApp', 'OCR de tickets financieros', 'Reportes Excel y PDF'],
            enfoque: 'gestion-bar'
        }
    ];

    // Función para crear card de proyecto (envuelta en swiper-slide)
    function createProyectoCard(proyecto) {
        return `
            <div class="swiper-slide">
            <article class="proyecto-card" aria-label="Proyecto ${proyecto.nombre}">
                <div class="proyecto-logo-wrapper">
                    <img src="${proyecto.logo}" 
                         alt="Logo ${proyecto.nombre}" 
                         class="proyecto-logo"
                         loading="lazy"
                         width="100" 
                         height="100">
                </div>
                <div class="proyecto-content">
                    <h3 class="proyecto-title">${proyecto.nombre}</h3>
                    <span class="proyecto-tipo">${proyecto.tipo}</span>
                    <p class="proyecto-description">${proyecto.descripcion}</p>
                    <ul class="proyecto-caracteristicas" aria-label="Características del proyecto">
                        ${proyecto.caracteristicas.map(caracteristica =>
            `<li>${caracteristica}</li>`
        ).join('')}
                    </ul>
                    <a href="${proyecto.url}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="btn btn-secondary proyecto-link"
                       aria-label="Ver proyecto ${proyecto.nombre} en nueva ventana">
                        Ver Proyecto
                        <iconify-icon icon="mdi:open-in-new" width="16" height="16" aria-hidden="true"></iconify-icon>
                    </a>
                </div>
            </article>
            </div>
        `;
    }

    function notifyRendered() {
        document.dispatchEvent(new CustomEvent('proyectos:rendered'));
    }

    // Función para renderizar proyectos
    function renderProyectos() {
        const container = document.getElementById('proyectos-venta-grid');
        if (!container) {
            return; // Sección no existe aún
        }

        const proyectosHTML = proyectos.map(proyecto => createProyectoCard(proyecto)).join('');
        container.innerHTML = proyectosHTML;
        notifyRendered();
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderProyectos);
    } else {
        renderProyectos();
    }

    // Exportar para uso externo si es necesario
    window.ProyectosVenta = {
        proyectos: proyectos,
        render: renderProyectos
    };
})();

