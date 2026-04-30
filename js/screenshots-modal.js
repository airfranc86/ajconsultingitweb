/**
 * Screenshots Modal - Lightbox accesible para galerías de capturas
 * Patrón: data-screenshots-trigger="<gallery-id>" en cualquier botón
 * Uso: agregá tu galería al objeto GALLERIES y un botón con el data-attribute.
 */

(function () {
    'use strict';

    const GALLERIES = {
        app4bar: [
            { src: '/assets/ClientesWeb/app4bar/screenshots/01-login.png', caption: 'Login multi-tenant' },
            { src: '/assets/ClientesWeb/app4bar/screenshots/02-stock-alertas.png', caption: 'Alertas de stock mínimo' },
            { src: '/assets/ClientesWeb/app4bar/screenshots/03-finanzas-ocr.png', caption: 'OCR de tickets financieros' },
            { src: '/assets/ClientesWeb/app4bar/screenshots/04-finanzas-graficos.png', caption: 'Gráficos de finanzas' },
            { src: '/assets/ClientesWeb/app4bar/screenshots/05-recetas.png', caption: 'Gestión de recetas y costos' },
            { src: '/assets/ClientesWeb/app4bar/screenshots/06-sectores.png', caption: 'Gestión por sectores' },
            { src: '/assets/ClientesWeb/app4bar/screenshots/07-reportes.png', caption: 'Reportes ejecutivos' },
            { src: '/assets/ClientesWeb/app4bar/screenshots/08-seguridad.png', caption: 'Seguridad y permisos' }
        ]
    };

    let currentSlides = [];
    let currentIndex = 0;
    let lastTrigger = null;
    let modal = null;
    let imageEl = null;
    let titleEl = null;
    let counterEl = null;

    function buildModal() {
        const wrapper = document.createElement('div');
        wrapper.id = 'screenshots-modal';
        wrapper.className = 'screenshots-modal';
        wrapper.setAttribute('role', 'dialog');
        wrapper.setAttribute('aria-modal', 'true');
        wrapper.setAttribute('aria-labelledby', 'screenshots-modal-title');
        wrapper.hidden = true;

        wrapper.innerHTML = `
            <div class="screenshots-modal__backdrop" data-close></div>
            <div class="screenshots-modal__content" role="document">
                <button type="button" class="screenshots-modal__close" data-close aria-label="Cerrar galería">
                    <iconify-icon icon="mdi:close" width="24" height="24" aria-hidden="true"></iconify-icon>
                </button>
                <h3 id="screenshots-modal-title" class="screenshots-modal__title" aria-live="polite"></h3>
                <div class="screenshots-modal__image-wrapper">
                    <img class="screenshots-modal__image" alt="" loading="lazy" />
                </div>
                <div class="screenshots-modal__nav">
                    <button type="button" class="screenshots-modal__btn" data-prev aria-label="Captura anterior">
                        <iconify-icon icon="mdi:chevron-left" width="28" height="28" aria-hidden="true"></iconify-icon>
                    </button>
                    <span class="screenshots-modal__counter" aria-live="polite"></span>
                    <button type="button" class="screenshots-modal__btn" data-next aria-label="Captura siguiente">
                        <iconify-icon icon="mdi:chevron-right" width="28" height="28" aria-hidden="true"></iconify-icon>
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(wrapper);
        return wrapper;
    }

    function render() {
        if (!currentSlides.length) return;
        const slide = currentSlides[currentIndex];
        imageEl.src = slide.src;
        imageEl.alt = slide.caption;
        titleEl.textContent = slide.caption;
        counterEl.textContent = `${currentIndex + 1} / ${currentSlides.length}`;
    }

    function open(galleryId, trigger) {
        const slides = GALLERIES[galleryId];
        if (!slides || !slides.length) return;

        currentSlides = slides;
        currentIndex = 0;
        lastTrigger = trigger;

        modal.hidden = false;
        document.body.style.overflow = 'hidden';
        render();

        const closeBtn = modal.querySelector('.screenshots-modal__close');
        if (closeBtn) closeBtn.focus();
    }

    function close() {
        modal.hidden = true;
        document.body.style.overflow = '';
        currentSlides = [];
        if (lastTrigger && typeof lastTrigger.focus === 'function') {
            lastTrigger.focus();
        }
        lastTrigger = null;
    }

    function next() {
        if (!currentSlides.length) return;
        currentIndex = (currentIndex + 1) % currentSlides.length;
        render();
    }

    function prev() {
        if (!currentSlides.length) return;
        currentIndex = (currentIndex - 1 + currentSlides.length) % currentSlides.length;
        render();
    }

    function bindTriggers() {
        document.querySelectorAll('[data-screenshots-trigger]').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                const galleryId = this.getAttribute('data-screenshots-trigger');
                open(galleryId, this);
            });
        });
    }

    function bindModalEvents() {
        modal.addEventListener('click', function (e) {
            if (e.target.matches('[data-close]') || e.target.closest('[data-close]')) {
                close();
                return;
            }
            if (e.target.matches('[data-prev]') || e.target.closest('[data-prev]')) {
                prev();
                return;
            }
            if (e.target.matches('[data-next]') || e.target.closest('[data-next]')) {
                next();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (modal.hidden) return;
            if (e.key === 'Escape') {
                close();
                return;
            }
            if (e.key === 'ArrowRight') {
                next();
                return;
            }
            if (e.key === 'ArrowLeft') {
                prev();
                return;
            }
            if (e.key === 'Tab') {
                trapFocus(e);
            }
        });
    }

    function trapFocus(e) {
        const focusable = modal.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (e.shiftKey && active === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && active === last) {
            e.preventDefault();
            first.focus();
        }
    }

    function init() {
        modal = buildModal();
        imageEl = modal.querySelector('.screenshots-modal__image');
        titleEl = modal.querySelector('.screenshots-modal__title');
        counterEl = modal.querySelector('.screenshots-modal__counter');

        bindTriggers();
        bindModalEvents();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.ScreenshotsModal = {
        open: open,
        close: close,
        registerGallery: function (id, slides) {
            GALLERIES[id] = slides;
        }
    };
})();
