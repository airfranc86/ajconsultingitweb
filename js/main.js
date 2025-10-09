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

// ===== SCROLL SUAVE: Navegación suave entre secciones =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();                    // Prevenir comportamiento por defecto
        const targetId = this.getAttribute('href').substring(1); // Obtener ID destino
        const targetSection = document.getElementById(targetId);  // Encontrar sección destino
        if (targetSection) {
            targetSection.scrollIntoView({     // Scroll suave a la sección
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== EFECTO HEADER AL SCROLL: Cambiar apariencia del header =====
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {                // Si se scrolleó más de 50px
        header.style.background = 'rgba(255, 255, 255, 0.98)'; // Fondo más opaco
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)'; // Agregar sombra
    } else {                                   // Si está en la parte superior
        header.style.background = 'rgba(255, 255, 255, 0.95)'; // Fondo original
        header.style.boxShadow = 'none';       // Sin sombra
    }
});

// ===== ANIMACIÓN DE APARICIÓN: Efecto fade-in al hacer scroll =====
const observerOptions = {
    threshold: 0.1,                           // Activar cuando 10% sea visible
    rootMargin: '0px 0px -50px 0px'          // Margen para activación temprana
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {           // Si el elemento es visible
            entry.target.style.opacity = '1'; // Hacer visible
            entry.target.style.transform = 'translateY(0)'; // Posición final
        }
    });
}, observerOptions);

// APLICAR OBSERVADOR: A todos los elementos que necesitan animación
document.querySelectorAll('.section-card, .feature-card, .stat-card, .contact-card').forEach(el => {
    el.style.opacity = '0';                   // Inicialmente invisible
    el.style.transform = 'translateY(30px)';  // Posición inicial (abajo)
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; // Transición suave
    observer.observe(el);                     // Observar elemento
});

// ===== ACCESO A DEMO CLÍNICA: Abrir app Streamlit con credenciales demo =====
document.getElementById('solicitar-demo-btn').onclick = function (e) {
    e.preventDefault();

    // Mostrar modal de contacto para solicitar demo
    showDemoModal();
};

// ===== MODAL DE DEMO: Mostrar formulario de solicitud =====
function showDemoModal() {
    // Crear modal si no existe
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
    modal.querySelector('#demo-form').addEventListener('submit', function (e) {
        e.preventDefault();
        handleDemoSubmission(this);
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
function handleDemoSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Validaciones del frontend
    if (!validateFormData(data)) {
        return;
    }

    // Mostrar mensaje de confirmación
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Enviando...';
    button.disabled = true;

    // Enviar a backend Python
    submitToBackend(data, button, originalText);
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

    // Validar email (ahora permite todos los emails)
    // Comentado para permitir Gmail, Hotmail, etc. para testing
    // const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'live.com'];
    // const domain = data.email.split('@')[1].toLowerCase();
    // if (personalDomains.includes(domain)) {
    //     showError('Solo se permiten emails corporativos');
    //     return false;
    // }

    // Validar clínica
    if (!data.clinica || data.clinica.trim().length < 2) {
        showError('El nombre de la clínica es requerido');
        return false;
    }

    return true;
}

// ===== ENVÍO AL BACKEND: Comunicación con API Python =====
async function submitToBackend(data, button, originalText) {
    try {
        // URL del backend (Vercel Functions)
        const backendUrl = '/api';

        const response = await fetch(`${backendUrl}/demo-request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            // Éxito
            showSuccess(result.message);
            closeDemoModal();
            resetForm(button, originalText);

            // Tracking de evento exitoso
            if (typeof window.va === 'function') {
                window.va('track', 'Demo Request Submitted', {
                    email: data.email,
                    clinica: data.clinica
                });
            }
        } else {
            // Error del servidor
            showError(result.detail || 'Error al enviar la solicitud');
            resetButton(button, originalText);
        }

    } catch (error) {
        console.error('Error enviando formulario:', error);
        showError('Error de conexión. Por favor intenta nuevamente.');
        resetButton(button, originalText);
    }
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
