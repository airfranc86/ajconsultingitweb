/**
 * Proyectos de Venta - Showcase editorial
 * Layout: feature grande + índice numerado vertical, auto-rotate con progress bar.
 */

(function () {
    'use strict';

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

    const ROTATE_MS = 7000;
    let activeIndex = 0;
    let rotateTimer = null;
    let progressEl = null;
    let featureEl = null;
    let indexEl = null;
    let showcaseEl = null;

    function pad2(n) {
        return n < 10 ? '0' + n : '' + n;
    }

    function buildFeature(p, idx) {
        return `
            <article class="proyecto-feature" aria-label="Proyecto ${p.nombre}">
                <div class="proyecto-feature__top">
                    <span class="proyecto-feature__num">${pad2(idx + 1)}</span>
                    <span class="proyecto-feature__tipo">${p.tipo}</span>
                </div>
                <div class="proyecto-feature__body">
                    <div class="proyecto-feature__logo-wrap">
                        <img src="${p.logo}" alt="Logo ${p.nombre}" class="proyecto-feature__logo" loading="lazy" width="120" height="120">
                    </div>
                    <div class="proyecto-feature__text">
                        <h3 class="proyecto-feature__title">${p.nombre}</h3>
                        <p class="proyecto-feature__desc">${p.descripcion}</p>
                        <ul class="proyecto-feature__tags">
                            ${p.caracteristicas.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <a href="${p.url}" target="_blank" rel="noopener noreferrer"
                    class="proyecto-feature__cta"
                    onclick="if(window.gtag){gtag('event','cta_click',{event_category:'proyectos_venta',event_label:'${p.id}'});}"
                    aria-label="Ver proyecto ${p.nombre} en nueva ventana">
                    <span>Ver proyecto</span>
                    <iconify-icon icon="mdi:arrow-top-right" width="20" height="20" aria-hidden="true"></iconify-icon>
                </a>
            </article>
        `;
    }

    function buildIndex() {
        return proyectos.map((p, idx) => `
            <li class="proyecto-index__item${idx === activeIndex ? ' is-active' : ''}"
                role="tab"
                tabindex="${idx === activeIndex ? '0' : '-1'}"
                aria-selected="${idx === activeIndex ? 'true' : 'false'}"
                data-idx="${idx}">
                <span class="proyecto-index__num">${pad2(idx + 1)}</span>
                <span class="proyecto-index__meta">
                    <span class="proyecto-index__name">${p.nombre}</span>
                    <span class="proyecto-index__tipo">${p.tipo}</span>
                </span>
            </li>
        `).join('');
    }

    function renderFeature() {
        if (!featureEl) return;
        featureEl.classList.remove('is-entering');
        // force reflow para reiniciar animación
        void featureEl.offsetWidth;
        featureEl.innerHTML = buildFeature(proyectos[activeIndex], activeIndex);
        featureEl.classList.add('is-entering');
    }

    function updateIndex() {
        if (!indexEl) return;
        const items = indexEl.querySelectorAll('.proyecto-index__item');
        items.forEach((el, i) => {
            const isActive = i === activeIndex;
            el.classList.toggle('is-active', isActive);
            el.setAttribute('aria-selected', isActive ? 'true' : 'false');
            el.setAttribute('tabindex', isActive ? '0' : '-1');
        });
    }

    function restartProgress() {
        if (!progressEl) return;
        progressEl.style.animation = 'none';
        void progressEl.offsetWidth;
        progressEl.style.animation = '';
    }

    function setActive(idx, fromUser) {
        activeIndex = (idx + proyectos.length) % proyectos.length;
        renderFeature();
        updateIndex();
        restartProgress();
        if (fromUser) startRotate();
    }

    function next() {
        setActive(activeIndex + 1);
    }

    function startRotate() {
        stopRotate();
        rotateTimer = setInterval(next, ROTATE_MS);
    }

    function stopRotate() {
        if (rotateTimer) {
            clearInterval(rotateTimer);
            rotateTimer = null;
        }
    }

    function bindEvents() {
        indexEl.addEventListener('click', function (e) {
            const item = e.target.closest('.proyecto-index__item');
            if (!item) return;
            const idx = parseInt(item.getAttribute('data-idx'), 10);
            if (Number.isNaN(idx)) return;
            setActive(idx, true);
        });

        indexEl.addEventListener('keydown', function (e) {
            const item = e.target.closest('.proyecto-index__item');
            if (!item) return;
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                setActive(activeIndex + 1, true);
                indexEl.querySelector('.proyecto-index__item.is-active').focus();
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                setActive(activeIndex - 1, true);
                indexEl.querySelector('.proyecto-index__item.is-active').focus();
            } else if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const idx = parseInt(item.getAttribute('data-idx'), 10);
                setActive(idx, true);
            }
        });

        showcaseEl.addEventListener('mouseenter', stopRotate);
        showcaseEl.addEventListener('mouseleave', startRotate);
        showcaseEl.addEventListener('focusin', stopRotate);
        showcaseEl.addEventListener('focusout', startRotate);

        document.addEventListener('visibilitychange', function () {
            if (document.hidden) stopRotate(); else startRotate();
        });
    }

    function init() {
        showcaseEl = document.getElementById('proyectos-showcase');
        featureEl = document.getElementById('proyectos-feature');
        indexEl = document.getElementById('proyectos-index');
        progressEl = document.getElementById('proyectos-progress-bar');
        if (!showcaseEl || !featureEl || !indexEl) return;

        indexEl.innerHTML = buildIndex();
        renderFeature();
        bindEvents();
        startRotate();

        document.dispatchEvent(new CustomEvent('proyectos:rendered'));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.ProyectosVenta = {
        proyectos: proyectos,
        setActive: setActive,
        next: next
    };
})();
