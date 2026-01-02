/**
 * Scroll Reveal - Intersection Observer
 * Animaciones controladas por scroll con soporte para prefers-reduced-motion
 * Threshold: 0.2-0.5, una sola vez por scroll
 */

(function() {
    'use strict';

    // Verificar soporte de Intersection Observer
    if (!window.IntersectionObserver) {
        return; // No hacer nada si no hay soporte
    }

    // Respetar prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        return; // No aplicar animaciones si el usuario prefiere movimiento reducido
    }

    // Configuración
    const THRESHOLD = 0.25; // Entre 0.2 y 0.5 como especificado
    const ANIMATION_DURATION = 500; // < 500ms como especificado
    const ANIMATION_ONCE = true; // Una sola vez por scroll

    // Elementos a animar
    const elementsToAnimate = document.querySelectorAll('.section-card, .feature-card, .hero-content');

    // Opciones del Intersection Observer
    const observerOptions = {
        threshold: THRESHOLD,
        rootMargin: '0px 0px -50px 0px' // Empezar animación un poco antes de entrar en viewport
    };

    // Callback del observer
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Aplicar animación fade + translate leve
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = `opacity ${ANIMATION_DURATION}ms ease-out, transform ${ANIMATION_DURATION}ms ease-out`;
                
                // Trigger reflow
                void element.offsetHeight;
                
                // Aplicar animación
                requestAnimationFrame(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                });

                // Si es una sola vez, dejar de observar
                if (ANIMATION_ONCE) {
                    observer.unobserve(element);
                }
            }
        });
    };

    // Crear observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar elementos
    elementsToAnimate.forEach(element => {
        // Inicializar estado
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        // Observar
        observer.observe(element);
    });

    // Exportar para uso externo si es necesario
    window.ScrollReveal = {
        observer: observer,
        observe: (element) => observer.observe(element),
        unobserve: (element) => observer.unobserve(element)
    };
})();

