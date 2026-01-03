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
            descripcion: 'Sitio comercial orientado a contacto directo y presencia local',
            caracteristicas: ['Responsive', 'Formulario de contacto', 'Optimizado SEO'],
            enfoque: 'contacto-directo'
        },
        {
            id: 'vinewatch',
            nombre: 'VineWatch Consulting',
            tipo: 'Consultoría',
            url: 'https://vinewatchconsulting.vercel.app/',
            logo: '/assets/ClientesWeb/VineWatch/vinewatch-logo.png',
            descripcion: 'Presentación profesional de servicios con foco en claridad y posicionamiento',
            caracteristicas: ['Diseño profesional', 'Navegación clara', 'Responsive'],
            enfoque: 'posicionamiento'
        },
        {
            id: 'skypulse',
            nombre: 'SkyPulse AR',
            tipo: 'Dashboard',
            url: 'https://skypulse-ar.vercel.app/dashboard',
            logo: '/assets/ClientesWeb/SkyPulse-ar/skypulsear-logo.png',
            descripcion: 'Web con visualización técnica, métricas y lectura analítica',
            caracteristicas: ['Dashboard integrado', 'Visualización de datos', 'Tiempo real'],
            enfoque: 'analitica'
        },
        {
            id: 'aeromet',
            nombre: 'AeroMet ARG',
            tipo: 'Educativo',
            url: 'https://aerometarg.vercel.app/',
            logo: '/assets/ClientesWeb/aerometarg/aeromet-logo.png',
            descripcion: 'Sitio de contenido especializado con estructura clara y autoridad temática',
            caracteristicas: ['Contenido especializado', 'Estructura clara', 'SEO optimizado'],
            enfoque: 'educacion'
        },
        {
            id: 'fenix',
            nombre: 'Fenix CBA',
            tipo: 'Sistema Operativo',
            url: 'https://fenixcba.vercel.app/',
            logo: '/assets/ClientesWeb/fenixcba/Fenix-logo.png',
            descripcion: 'Plataforma con lógica funcional integrada al frontend',
            caracteristicas: ['Lógica funcional', 'Sistema integrado', 'Operativo'],
            enfoque: 'sistema'
        }
    ];

    // Función para crear card de proyecto
    function createProyectoCard(proyecto) {
        return `
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
        `;
    }

    // Función para renderizar proyectos
    function renderProyectos() {
        const container = document.getElementById('proyectos-venta-grid');
        if (!container) {
            return; // Sección no existe aún
        }

        const proyectosHTML = proyectos.map(proyecto => createProyectoCard(proyecto)).join('');
        container.innerHTML = proyectosHTML;
    }

    // Inicializar cuando el DOM esté listo y React haya renderizado
    function initProyectos() {
        // Esperar a que el contenedor exista y esté visible
        const container = document.getElementById('proyectos-venta-grid');
        if (!container) {
            // Si no existe, esperar un poco más (React puede estar renderizando)
            setTimeout(initProyectos, 100);
            return;
        }
        
        // Verificar que el contenedor está en el DOM y visible
        if (container.offsetParent === null) {
            setTimeout(initProyectos, 100);
            return;
        }
        
        // Renderizar proyectos
        renderProyectos();
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            // Esperar un poco más para que React termine de renderizar
            setTimeout(initProyectos, 500);
        });
    } else {
        // DOM ya está listo, pero esperar a que React renderice
        setTimeout(initProyectos, 500);
    }

    // Exportar para uso externo si es necesario
    window.ProyectosVenta = {
        proyectos: proyectos,
        render: renderProyectos
    };
})();

