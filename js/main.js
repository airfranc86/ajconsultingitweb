// ===== LOADER INICIAL: Gestor de pantalla de carga (Optimizado para Android) =====
(function () {
    'use strict';

    const LOADER_ID = 'page-loader';
    const PROGRESS_ID = 'loader-progress';
    const BODY_LOADING_ATTR = 'data-loading';
    const LOADER_IMG_ID = 'loader-logo-img';

    // Detectar móviles
    const isMobile = /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth <= 768;

    // DESHABILITAR LOADER EN MÓVILES: Ocultar inmediatamente
    if (isMobile) {
        const body = document.body;
        const loader = document.getElementById(LOADER_ID);

        // Ocultar loader inmediatamente en móviles
        if (loader) {
            loader.style.display = 'none';
            loader.remove();
        }
        if (body) {
            body.removeAttribute(BODY_LOADING_ATTR);
        }
        return; // Salir temprano - no ejecutar el resto del código del loader
    }

    // Tiempos de carga para desktop
    const MIN_LOAD_TIME_MS = 2000;
    const MAX_LOAD_TIME_MS = 4000;
    const IMAGE_TIMEOUT_MS = 3000;
    const PROGRESS_RADIUS = 90;
    const CIRCUMFERENCE = 2 * Math.PI * PROGRESS_RADIUS;

    const body = document.body;
    const loader = document.getElementById(LOADER_ID);
    const progressCircle = document.getElementById(PROGRESS_ID);
    const loaderImg = document.getElementById(LOADER_IMG_ID);

    if (!body || !loader || !progressCircle) {
        return;
    }

    let simulatedProgress = 0;
    let progressTimerId;
    let minTimeElapsed = false;
    let resourcesReady = false;
    let imageLoaded = false;
    let finalizeCalled = false;

    progressCircle.style.strokeDasharray = `${CIRCUMFERENCE}`;
    progressCircle.style.strokeDashoffset = `${CIRCUMFERENCE}`;

    function setProgress(value) {
        const boundedValue = Math.max(0, Math.min(100, value));
        const offset = CIRCUMFERENCE - (boundedValue / 100) * CIRCUMFERENCE;
        progressCircle.style.strokeDashoffset = `${offset}`;
    }

    function simulateProgress() {
        progressTimerId = window.setInterval(() => {
            simulatedProgress = Math.min(simulatedProgress + Math.random() * 12, 92);
            setProgress(simulatedProgress);
            if (resourcesReady && minTimeElapsed && imageLoaded) {
                clearInterval(progressTimerId);
            }
        }, 220);
    }

    function markImageLoaded() {
        if (imageLoaded) return;
        imageLoaded = true;
        checkFinalize();
    }

    function markResourceReady() {
        if (resourcesReady) return;
        resourcesReady = true;
        checkFinalize();
    }

    function checkFinalize() {
        if (resourcesReady && minTimeElapsed && imageLoaded && !finalizeCalled) {
            finalizeLoader();
        }
    }

    function finalizeLoader() {
        if (finalizeCalled) {
            return;
        }

        finalizeCalled = true;
        clearInterval(progressTimerId);
        setProgress(100);

        // Usar setTimeout en lugar de requestAnimationFrame para mejor compatibilidad Android
        window.setTimeout(() => {
            if (loader) {
                loader.classList.add('hidden');
            }
            if (body) {
                body.removeAttribute(BODY_LOADING_ATTR);
            }
            window.setTimeout(() => {
                if (loader && loader.parentNode) {
                    loader.remove();
                }
            }, 600);
        }, 50);
    }

    // Verificar carga de imagen del loader (solo desktop)
    if (loaderImg) {
        if (loaderImg.complete && loaderImg.naturalHeight !== 0) {
            markImageLoaded();
        } else {
            loaderImg.addEventListener('load', markImageLoaded);
            loaderImg.addEventListener('error', markImageLoaded);

            window.setTimeout(function () {
                if (!imageLoaded) {
                    markImageLoaded();
                }
            }, IMAGE_TIMEOUT_MS);
        }
    } else {
        // Si no hay imagen, marcar como cargada inmediatamente
        imageLoaded = true;
    }

    simulateProgress();

    // Estrategia múltiple para marcar recursos como listos
    function tryMarkResourceReady() {
        // Verificar estado del documento
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            markResourceReady();
            return true;
        }
        return false;
    }

    // Intentar inmediatamente
    if (!tryMarkResourceReady()) {
        // Si no está listo, agregar listeners
        window.addEventListener('load', markResourceReady);
        document.addEventListener('DOMContentLoaded', markResourceReady);
    }

    // Timeout mínimo
    window.setTimeout(() => {
        minTimeElapsed = true;
        checkFinalize();
    }, MIN_LOAD_TIME_MS);

    // Timeout máximo (fallback de seguridad) - REDUCIDO para evitar bloqueos
    window.setTimeout(() => {
        if (!finalizeCalled) {
            // Forzar todo a true y finalizar
            console.warn('Loader: Timeout máximo alcanzado, forzando cierre');
            resourcesReady = true;
            minTimeElapsed = true;
            imageLoaded = true;
            finalizeLoader();
        }
    }, MAX_LOAD_TIME_MS);

    // Fallback adicional: Si después de 5 segundos el loader sigue visible, forzar cierre
    window.setTimeout(() => {
        const loaderStillVisible = document.getElementById(LOADER_ID);
        if (loaderStillVisible && !loaderStillVisible.classList.contains('hidden')) {
            console.error('Loader: Fallback de emergencia activado');
            if (loaderStillVisible.parentNode) {
                loaderStillVisible.remove();
            }
            if (body) {
                body.removeAttribute(BODY_LOADING_ATTR);
            }
        }
    }, 5000);
})();

// ===== CONFIGURACIÓN DE PARTICLES.JS: Efecto de fondo animado =====
particlesJS('particles-js', {
    particles: {
        number: {
            value: 60,                          // Cantidad de partículas
            density: {
                enable: true,                   // Activar densidad automática
                value_area: 800                 // Área para calcular densidad
            }
        },
        color: {
            value: "#ffffff"                    // Color blanco para partículas
        },
        shape: {
            type: "circle"                      // Forma circular
        },
        opacity: {
            value: 0.3,                        // Transparencia
            random: false                       // Sin variación aleatoria
        },
        size: {
            value: 3,                          // Tamaño base
            random: true                       // Variación aleatoria de tamaño
        },
        line_linked: {
            enable: true,                      // Activar líneas conectoras
            distance: 150,                     // Distancia máxima para conectar
            color: "#ffffff",                  // Color de líneas blanco
            opacity: 0.2,                      // Transparencia de líneas
            width: 1                           // Grosor de líneas
        },
        move: {
            enable: true,                      // Activar movimiento
            speed: 2,                          // Velocidad de movimiento
            direction: "none",                 // Sin dirección específica
            random: false,                     // Sin movimiento aleatorio
            straight: false,                   // Sin movimiento recto
            out_mode: "out"                    // Comportamiento al salir del área
        }
    },
    interactivity: {
        detect_on: "canvas",                   // Detectar interacción en canvas
        events: {
            onhover: {
                enable: true,                  // Activar efecto hover
                mode: "repulse"               // Modo repulsión al pasar mouse
            },
            onclick: {
                enable: true,                  // Activar efecto click
                mode: "push"                   // Modo agregar partículas al hacer click
            },
            resize: true                       // Redimensionar automáticamente
        },
        modes: {
            repulse: {
                distance: 100                  // Distancia de repulsión
            },
            push: {
                particles_nb: 4                // Número de partículas a agregar
            }
        }
    },
    retina_detect: true                        // Detectar pantallas retina
});

// ===== BARRA DE PROGRESO DE SCROLL: Indicador visual del progreso =====
function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop;         // Posición actual de scroll
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Altura total scrolleable
    const scrolled = (scrollTop / scrollHeight) * 100;           // Porcentaje scrolleado
    document.getElementById('progressBar').style.width = scrolled + '%'; // Actualizar ancho de barra
}

// EVENTO: Actualizar barra al hacer scroll
window.addEventListener('scroll', updateProgressBar);

// ===== CÓDIGO MIGRADO A REACT - COMENTADO PARA REFERENCIA =====
// La siguiente funcionalidad está ahora manejada por React:
// - Navegación y scroll suave: src/components/layout/Header.tsx + hooks
// - Detección de sección activa: src/hooks/useActiveSection.ts
// - Logo clickeable: src/components/layout/Header.tsx
// - Efecto header al scroll: src/components/layout/Header.tsx
//
// Este código se puede eliminar después de validar que React funciona correctamente.

/*
// ===== SCROLL SUAVE: Navegación suave entre secciones =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            updateActiveNavLink(targetId);
        }
    });
});

// ===== ACTUALIZAR NAVEGACIÓN ACTIVA: Indicar sección actual =====
function updateActiveNavLink(sectionId) {
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// ===== DETECTAR SECCIÓN ACTIVA AL SCROLL: Actualizar navegación automáticamente =====
function updateActiveSectionOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY + 150;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').substring(1);
        if (href === currentSection) {
            link.classList.add('active');
        }
    });
}

let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveSectionOnScroll, 100);
});

document.addEventListener('DOMContentLoaded', function() {
    updateActiveSectionOnScroll();
    if (window.scrollY < 100) {
        updateActiveNavLink('home');
    }
});

// ===== LOGO CLICKEABLE: Retornar al inicio al hacer click en el logo =====
document.addEventListener('DOMContentLoaded', function () {
    const logoWrapper = document.querySelector('.logo-wrapper');
    if (logoWrapper) {
        logoWrapper.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
        const logoNav = logoWrapper.querySelector('.logo-nav');
        if (logoNav) {
            logoNav.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                const homeSection = document.getElementById('home');
                if (homeSection) {
                    homeSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            });
        }
    }
});

// ===== EFECTO HEADER AL SCROLL: Cambiar apariencia del header =====
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.30) 25%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.20) 75%, rgba(255, 255, 255, 0.15) 100%)';
        header.style.backdropFilter = 'none';
        header.style.webkitBackdropFilter = 'none';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        header.classList.add('header-scrolled');
    } else {
        header.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.20) 25%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.10) 75%, rgba(255, 255, 255, 0.05) 100%)';
        header.style.backdropFilter = 'none';
        header.style.webkitBackdropFilter = 'none';
        header.style.boxShadow = 'none';
        header.classList.remove('header-scrolled');
    }
});
*/

// ===== CÓDIGO MIGRADO A REACT - COMENTADO PARA REFERENCIA =====
// La animación de aparición (scroll reveal) está ahora manejada por React:
// - src/hooks/useScrollReveal.ts
// - Componentes React usan este hook para animaciones al scroll
//
// Este código se puede eliminar después de validar que React funciona correctamente.

/*
// ===== ANIMACIÓN DE APARICIÓN: Efecto fade-in al hacer scroll =====
// Respetar prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && window.IntersectionObserver) {
    const observerOptions = {
        threshold: 0.25,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-card, .feature-card, .stat-card, .contact-card, .hero-buttons').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(el);
    });
} else {
    document.querySelectorAll('.section-card, .feature-card, .stat-card, .contact-card, .hero-buttons').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
}
*/

// ===== CÓDIGO MIGRADO A REACT - COMENTADO PARA REFERENCIA =====
// Los botones de demo están ahora manejados por React:
// - src/components/sections/HeroSection.tsx (botón principal)
// - src/components/sections/ContactSection.tsx (botón en contacto)
// - React expone window.showDemoModal() para compatibilidad
//
// Este código se puede eliminar después de validar que React funciona correctamente.

/*
// ===== ACCESO A DEMO CLÍNICA: Abrir app Streamlit con credenciales demo =====
// ===== BOTÓN DEMO: Mostrar modal de solicitud de demo =====
document.addEventListener('DOMContentLoaded', function () {
    const demoButton = document.getElementById('solicitar-demo-btn');
    if (demoButton) {
        demoButton.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Botón de demo clickeado');
            // Usar función global de React si está disponible
            if (typeof window.showDemoModal === 'function') {
                window.showDemoModal();
            } else {
                showDemoModal();
            }
        });
    }

    const demoButtonContacto = document.getElementById('solicitar-demo-contacto-btn');
    if (demoButtonContacto) {
        demoButtonContacto.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Botón de demo en contacto clickeado');
            // Usar función global de React si está disponible
            if (typeof window.showDemoModal === 'function') {
                window.showDemoModal();
            } else {
                showDemoModal();
            }
        });
    }
*/

    // ===== MANEJAR ENLACES DE EMAIL: Mejorar funcionalidad mailto =====
    // NOTA: Los enlaces de email en React también manejan tracking (ContactSection.tsx)
    // Este código se mantiene para enlaces de email que puedan estar fuera de React
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        // Solo agregar listener si no está dentro de un componente React
        if (!link.closest('#root')) {
            link.addEventListener('click', function (e) {
                console.log('Enlace de email clickeado:', this.href);

                // Tracking del evento para analytics
                if (typeof window.va === 'function') {
                    window.va('track', 'Email Link Clicked', {
                        email: this.href.split('mailto:')[1].split('?')[0],
                        location: this.closest('section')?.id || 'contacto'
                    });
                }

                console.log('Abriendo cliente de email...');
            });
        }
    });
});
*/

// ===== CÓDIGO MIGRADO A REACT - COMENTADO PARA REFERENCIA =====
// El modal de demo está ahora manejado por React:
// - src/components/forms/DemoModal.tsx
// - src/components/forms/DemoForm.tsx
// - src/components/ui/Modal.tsx
// - src/hooks/useDemoModal.ts
//
// React expone window.showDemoModal() para compatibilidad.
// Este código se puede eliminar después de validar que React funciona correctamente.

/*
// ===== MODAL DE DEMO: Mostrar formulario de solicitud =====
function showDemoModal() {
    let modal = document.getElementById('demo-modal');
    if (!modal) {
        modal = createDemoModal();
        document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
}

// ===== CREAR MODAL DE DEMO: Generar HTML del modal =====
function createDemoModal() {
    const modal = document.createElement('div');
    modal.id = 'demo-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
    `;

    modal.innerHTML = `
        <div style="
            background: white;
            padding: 2rem;
            border-radius: 16px;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            position: relative;
        ">
            <button onclick="closeDemoModal()" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
            ">×</button>
            
            <h2 style="
                color: #27ae60;
                margin-bottom: 1rem;
                text-align: center;
            ">Solicitar Demo</h2>
            
            <p style="
                color: #666;
                margin-bottom: 2rem;
                text-align: center;
            ">Completa el formulario y nos pondremos en contacto contigo para agendar una demostración personalizada.</p>
            
            <form id="demo-form" style="display: flex; flex-direction: column; gap: 1rem;">
                <!-- Campo honeypot para detectar bots (oculto) -->
                <input type="text" name="website" style="display: none !important; position: absolute; left: -9999px;" tabindex="-1" autocomplete="off">
                
                <input type="text" name="nombre" placeholder="Nombre completo" required style="
                    padding: 1rem;
                    border: 2px solid #eee;
                    border-radius: 8px;
                    font-size: 1rem;
                ">
                <input type="email" name="email" placeholder="Email corporativo" required style="
                    padding: 1rem;
                    border: 2px solid #eee;
                    border-radius: 8px;
                    font-size: 1rem;
                ">
                <input type="text" name="clinica" placeholder="Nombre de la clínica" required style="
                    padding: 1rem;
                    border: 2px solid #eee;
                    border-radius: 8px;
                    font-size: 1rem;
                ">
                <input type="tel" name="telefono" placeholder="Teléfono de contacto" style="
                    padding: 1rem;
                    border: 2px solid #eee;
                    border-radius: 8px;
                    font-size: 1rem;
                ">
                <textarea name="mensaje" placeholder="Cuéntanos sobre tu clínica y necesidades específicas" rows="4" style="
                    padding: 1rem;
                    border: 2px solid #eee;
                    border-radius: 8px;
                    font-size: 1rem;
                    resize: vertical;
                "></textarea>
                
                <button type="submit" style="
                    background: linear-gradient(135deg, #27ae60, #2ecc71);
                    color: white;
                    padding: 1rem 2rem;
                    border: none;
                    border-radius: 50px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                ">Solicitar Demo</button>
            </form>
        </div>
    `;

    // Manejar envío del formulario
    const form = modal.querySelector('#demo-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        handleDemoSubmission(this);
    });
    
    // Validación en tiempo real
    const inputs = form.querySelectorAll('input[required], textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        input.addEventListener('input', function() {
            // Limpiar error al empezar a escribir
            const errorMsg = this.parentElement.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
            this.style.borderColor = '#eee';
        });
    });

    return modal;
}

// ===== CERRAR MODAL: Ocultar modal de demo =====
function closeDemoModal() {
    const modal = document.getElementById('demo-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// ===== MANEJAR ENVÍO: Procesar formulario de demo =====
async function handleDemoSubmission(form) {
    console.log('Procesando envío del formulario'); // Debug log

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log('Datos del formulario:', data); // Debug log

    // Validaciones del frontend
    if (!validateFormData(data)) {
        console.log('Validación falló'); // Debug log
        return;
    }

    console.log('Validación exitosa, enviando al backend'); // Debug log

    // Mostrar estado de envío
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Enviando...';
    button.disabled = true;

    // Enviar al backend
    try {
        console.log('Enviando datos al API:', data);
        const response = await fetch('/api/send-demo-request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            // Éxito
            showSuccess(result.message || 'Solicitud enviada exitosamente');
            closeDemoModal();
            resetForm(button, originalText);
        } else {
            // Error del servidor
            const errorMessage = result.error || 'Error al enviar la solicitud';
            console.error('Error del servidor:', result);
            showError(errorMessage);
            resetButton(button, originalText);
        }

    } catch (error) {
        console.error('Error enviando formulario:', error);
        showError('Error de conexión. Por favor intenta nuevamente.');
        resetButton(button, originalText);
    }
}

// ===== VALIDACIÓN DE FORMULARIO: Validaciones del frontend =====
function validateFormData(data) {
    // Validar nombre
    if (!data.nombre || data.nombre.trim().length < 2) {
        showError('El nombre debe tener al menos 2 caracteres');
        return false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        showError('Por favor ingresa un email válido');
        return false;
    }

    // Validar clínica
    if (!data.clinica || data.clinica.trim().length < 2) {
        showError('El nombre de la clínica es requerido');
        return false;
    }

    return true;
}

// ===== FUNCIONES AUXILIARES: Para manejo del formulario =====
function resetForm(button, originalText) {
    button.textContent = originalText;
    button.disabled = false;
    // Limpiar formulario
    const form = button.closest('form');
    if (form) {
        form.reset();
    }
}

function resetButton(button, originalText) {
    button.textContent = originalText;
    button.disabled = false;
}

// ===== MOSTRAR ERRORES: Sistema de notificaciones =====
function showError(message) {
    // Remover notificaciones anteriores
    const existingError = document.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.style.cssText = `
        background: #ffebee;
        color: #c62828;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        border-left: 4px solid #c62828;
        font-size: 0.9rem;
    `;
    errorDiv.textContent = message;

    const form = document.getElementById('demo-form');
    form.insertBefore(errorDiv, form.firstChild);

    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// ===== MOSTRAR ÉXITO: Notificación de éxito =====
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #e8f5e8;
        color: #2e7d32;
        padding: 1rem 2rem;
        border-radius: 8px;
        border-left: 4px solid #2e7d32;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10001;
        max-width: 400px;
    `;
    successDiv.textContent = message;

    document.body.appendChild(successDiv);

    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.remove();
        }
    }, 5000);
}

// ===== RESET FORMULARIO: Limpiar y resetear =====
function resetForm(button, originalText) {
    const form = document.getElementById('demo-form');
    form.reset();
    resetButton(button, originalText);
}

function resetButton(button, originalText) {
    button.textContent = originalText;
    button.disabled = false;
}

// Cerrar modal al hacer click fuera
document.addEventListener('click', function (e) {
    const modal = document.getElementById('demo-modal');
    if (e.target === modal) {
        closeDemoModal();
    }
});
*/

// ===== OPTIMIZACIONES DE RENDIMIENTO =====
// Lazy loading para imágenes
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Preload de recursos críticos
function preloadCriticalResources() {
    const criticalImages = ['assets/AJLOGO.png'];
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Ejecutar preload cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', preloadCriticalResources);

// ===== MEJORAS DE ACCESIBILIDAD =====
// Navegación por teclado mejorada
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeDemoModal();
    }
});

// Focus management para modales
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Aplicar trap focus cuando se crea el modal
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('demo-modal');
    if (modal) {
        trapFocus(modal);
    }
});

// ===== FUNCIONES DE EMAIL ELIMINADAS =====
// Se mantiene solo el enlace mailto: básico para simplicidad

// ===== CÓDIGO MIGRADO A REACT - COMENTADO PARA REFERENCIA =====
// La animación typing está ahora manejada por React:
// - src/components/sections/HeroSection.tsx
// - src/hooks/useTypingAnimation.ts
//
// Versión React simplificada (sin rotación de fuentes según auditoría).
// Este código se puede eliminar después de validar que React funciona correctamente.

/*
// ===== TYPING ANIMATION: Animación de escritura en hero tagline con loop infinito, rotación de textos y fuentes =====
document.addEventListener('DOMContentLoaded', function () {
    const heroTagline = document.querySelector('.hero-tagline');
    if (!heroTagline) return;

    const texts = [
        'Transformando datos en decisiones inteligentes',
        'Anímate a pegar el salto al mundo digital',
        'Potencia tu negocio con inteligencia artificial'
    ];

    const fonts = [
        'Inter, sans-serif',
        'Poppins, sans-serif',
        'Raleway, sans-serif'
    ];

    let currentTextIndex = 0;
    let currentFontIndex = 0;
    let currentCharIndex = 0;
    let displayedText = '';
    let isTyping = true;
    let typeSpeed = 70;
    let deleteSpeed = 40;
    let pauseAfterComplete = 3000;
    let pauseAfterDelete = 500;
    let animationTimeout = null;

    function getCurrentText() {
        return texts[currentTextIndex];
    }

    function applyCurrentFont() {
        heroTagline.style.fontFamily = fonts[currentFontIndex];
    }

    function typeText() {
        const currentText = getCurrentText();
        if (currentCharIndex < currentText.length) {
            displayedText = currentText.substring(0, currentCharIndex + 1);
            heroTagline.textContent = displayedText;
            currentCharIndex++;
            animationTimeout = setTimeout(typeText, typeSpeed);
        } else {
            animationTimeout = setTimeout(() => {
                isTyping = false;
                deleteText();
            }, pauseAfterComplete);
        }
    }

    function deleteText() {
        if (currentCharIndex > 0) {
            const currentText = getCurrentText();
            displayedText = currentText.substring(0, currentCharIndex - 1);
            heroTagline.textContent = displayedText;
            currentCharIndex--;
            animationTimeout = setTimeout(deleteText, deleteSpeed);
        } else {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            currentFontIndex = (currentFontIndex + 1) % fonts.length;
            applyCurrentFont();
            animationTimeout = setTimeout(() => {
                isTyping = true;
                typeText();
            }, pauseAfterDelete);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroTagline.textContent = '';
                currentCharIndex = 0;
                displayedText = '';
                isTyping = true;
                applyCurrentFont();
                typeText();
                observer.disconnect();
            }
        });
    }, { threshold: 0.1 });

    observer.observe(heroTagline);

    window.addEventListener('beforeunload', () => {
        if (animationTimeout) {
            clearTimeout(animationTimeout);
        }
    });
});
*/