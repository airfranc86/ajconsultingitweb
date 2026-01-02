// ===== ANIMACIONES CON ANIME.JS: Mejoras UX/UI con animaciones fluidas =====
(function () {
    'use strict';

    // Verificar si reduced-motion está activo
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Si reduced-motion está activo, no ejecutar animaciones
    if (prefersReducedMotion) {
        return;
    }

    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
        initAnimations();
    }

    function initAnimations() {
        // Verificar que anime esté disponible
        if (typeof anime === 'undefined') {
            console.warn('Anime.js no está disponible. Las animaciones avanzadas no se ejecutarán.');
            return;
        }

        // Animación de entrada para hero section
        animateHeroSection();
        
        // Animación de cards al hacer scroll
        animateCardsOnScroll();
        
        // Mejoras de hover en cards
        enhanceCardHovers();
        
        // Mejoras de botones
        enhanceButtons();
    }

    // ===== ANIMACIÓN HERO SECTION: Entrada suave del contenido =====
    function animateHeroSection() {
        const heroContent = document.querySelector('.hero-content');
        if (!heroContent) return;

        // Ocultar inicialmente
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';

        // Animación de entrada con timeline
        anime.timeline({
            easing: 'easeOutExpo',
            duration: 1000
        })
        .add({
            targets: heroContent,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            delay: 300
        })
        .add({
            targets: '.floating-logo',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 600,
            delay: 200
        }, '-=400')
        .add({
            targets: '.logo-text',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600
        }, '-=400')
        .add({
            targets: '.hero-tagline',
            opacity: [0, 1],
            translateY: [15, 0],
            duration: 500
        }, '-=300')
        .add({
            targets: '.hero-description',
            opacity: [0, 1],
            translateY: [10, 0],
            duration: 500
        }, '-=200')
        .add({
            targets: '.hero-buttons',
            opacity: [0, 1],
            scale: [0.95, 1],
            duration: 500
        }, '-=200');
    }

    // ===== ANIMACIÓN DE CARDS AL SCROLL: Efecto escalonado =====
    function animateCardsOnScroll() {
        const cards = document.querySelectorAll('.section-card, .feature-card');
        if (cards.length === 0) return;

        // Crear Intersection Observer para animar cuando entran en viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Animación escalonada (stagger)
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        scale: [0.95, 1],
                        duration: 600,
                        delay: index * 100, // Efecto escalonado
                        easing: 'easeOutExpo'
                    });
                    
                    // Dejar de observar después de animar
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observar todas las cards
        cards.forEach(card => {
            // Ocultar inicialmente
            card.style.opacity = '0';
            observer.observe(card);
        });
    }

    // ===== MEJORAS DE HOVER EN CARDS: Animación suave al pasar el mouse =====
    function enhanceCardHovers() {
        const cards = document.querySelectorAll('.section-card, .feature-card');
        
        cards.forEach(card => {
            // Prevenir animación si ya está animándose
            let isAnimating = false;

            card.addEventListener('mouseenter', function() {
                if (isAnimating) return;
                isAnimating = true;

                anime({
                    targets: card,
                    scale: 1.02,
                    translateY: -8,
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                    duration: 300,
                    easing: 'easeOutQuad',
                    complete: () => {
                        isAnimating = false;
                    }
                });
            });

            card.addEventListener('mouseleave', function() {
                if (isAnimating) return;
                isAnimating = true;

                anime({
                    targets: card,
                    scale: 1,
                    translateY: 0,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    duration: 300,
                    easing: 'easeOutQuad',
                    complete: () => {
                        isAnimating = false;
                    }
                });
            });
        });
    }

    // ===== MEJORAS DE BOTONES: Feedback visual mejorado =====
    function enhanceButtons() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-shimmer');
        
        buttons.forEach(button => {
            // Efecto de ripple al hacer click
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple-effect');
                
                button.appendChild(ripple);
                
                // Animar ripple
                anime({
                    targets: ripple,
                    scale: [0, 4],
                    opacity: [0.6, 0],
                    duration: 600,
                    easing: 'easeOutQuad',
                    complete: () => {
                        ripple.remove();
                    }
                });
            });

            // Animación sutil al hover
            button.addEventListener('mouseenter', function() {
                anime({
                    targets: button,
                    scale: 1.05,
                    duration: 200,
                    easing: 'easeOutQuad'
                });
            });

            button.addEventListener('mouseleave', function() {
                anime({
                    targets: button,
                    scale: 1,
                    duration: 200,
                    easing: 'easeOutQuad'
                });
            });
        });
    }
})();

