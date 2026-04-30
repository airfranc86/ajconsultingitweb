/**
 * Swiper init - Inicializa los carruseles del sitio
 * - #rubros-swiper: effect "cards" (apilado 3D)
 * - #proyectos-swiper: slider clásico con flechas + dots
 */

(function () {
    'use strict';

    let rubrosSwiper = null;
    let proyectosSwiper = null;
    let metodologiaSwiper = null;

    function initRubros() {
        if (!window.Swiper) return;
        const el = document.getElementById('rubros-swiper');
        if (!el || rubrosSwiper) return;

        rubrosSwiper = new Swiper(el, {
            effect: 'cards',
            grabCursor: true,
            keyboard: { enabled: true },
            a11y: {
                prevSlideMessage: 'Rubro anterior',
                nextSlideMessage: 'Rubro siguiente'
            },
            cardsEffect: {
                perSlideOffset: 10,
                perSlideRotate: 3,
                rotate: true,
                slideShadows: false
            }
        });
    }

    function initProyectos() {
        if (!window.Swiper) return;
        const el = document.getElementById('proyectos-swiper');
        if (!el || proyectosSwiper) return;
        if (!el.querySelector('.swiper-slide')) return;

        proyectosSwiper = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 24,
            grabCursor: true,
            keyboard: { enabled: true },
            a11y: {
                prevSlideMessage: 'Proyecto anterior',
                nextSlideMessage: 'Proyecto siguiente'
            },
            navigation: {
                prevEl: '#proyectos-prev',
                nextEl: '#proyectos-next'
            },
            pagination: {
                el: '#proyectos-pagination',
                clickable: true,
                dynamicBullets: true
            },
            breakpoints: {
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 32 }
            }
        });
    }

    function initMetodologia() {
        if (!window.Swiper) return;
        const el = document.getElementById('metodologia-swiper');
        if (!el || metodologiaSwiper) return;

        metodologiaSwiper = new Swiper(el, {
            effect: 'cards',
            grabCursor: true,
            keyboard: { enabled: true },
            a11y: {
                prevSlideMessage: 'Paso anterior',
                nextSlideMessage: 'Paso siguiente'
            },
            cardsEffect: {
                perSlideOffset: 8,
                perSlideRotate: 2,
                rotate: true,
                slideShadows: false
            }
        });
    }

    function init() {
        initRubros();
        initProyectos();
        initMetodologia();
    }

    document.addEventListener('proyectos:rendered', initProyectos);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
