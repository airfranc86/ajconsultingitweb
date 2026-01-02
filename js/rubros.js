// ===== JAVASCRIPT PARA SECCIÓN RUBROS =====

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para enlaces de rubros
    const rubroLinks = document.querySelectorAll('a[href^="#sectores/"]');
    
    rubroLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').replace('#sectores/', '');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer para animaciones de cards
    // Solo aplicar a cards que NO estén dentro del Swiper (para evitar conflictos)
    const rubroCards = document.querySelectorAll('.rubro-card:not(.swiper-rubros .rubro-card)');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Usar clases en lugar de estilos inline para no interferir con hover
                entry.target.classList.add('rubro-card-visible');
            }
        });
    }, observerOptions);

    rubroCards.forEach(card => {
        card.classList.add('rubro-card-hidden');
        cardObserver.observe(card);
    });
});

