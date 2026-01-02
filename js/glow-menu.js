/**
 * Glow Menu Simple - Versión simplificada para A&J Consulting IT
 * Versión: 1.0.0 - Simplificada para debugging
 */

// Función para crear el menú
function createGlowMenu() {
    // Verificar que el botón trigger existe
    const trigger = document.getElementById('glow-menu-trigger');
    if (!trigger) {
        return;
    }
    
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.id = 'glow-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        z-index: 9998;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    `;
    
    // Crear menú
    const menu = document.createElement('div');
    menu.id = 'glow-menu';
    menu.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        background: linear-gradient(145deg, rgba(26, 26, 26, 0.98), rgba(0, 0, 0, 0.98));
        border: 1px solid rgba(39, 174, 96, 0.3);
        border-radius: 20px;
        padding: 2rem;
        min-width: 300px;
        max-width: 90vw;
        z-index: 9999;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    `;
    
    // Contenido del menú
    menu.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h3 style="color: #27ae60; margin: 0 0 1rem 0; font-size: 1.5rem;">A&J Consulting IT</h3>
            <button id="glow-close" 
                aria-label="Cerrar menú"
                style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                color: #666;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 50%;
                min-width: 44px;
                min-height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
            ">×</button>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
            <a href="#home" class="glow-link" 
                aria-label="Ir a sección Inicio"
                style="
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem 1rem;
                color: #ffffff;
                text-decoration: none;
                border-radius: 10px;
                transition: all 0.3s ease;
                background: rgba(39, 174, 96, 0.1);
                min-height: 44px;
            ">
                <iconify-icon icon="mdi:home-variant" width="24" height="24" style="color: #27ae60;" aria-hidden="true"></iconify-icon>
                <span>Inicio</span>
            </a>
            
            <a href="#rubros" class="glow-link" 
                aria-label="Ir a sección Rubros"
                style="
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem 1rem;
                color: #ffffff;
                text-decoration: none;
                border-radius: 10px;
                transition: all 0.3s ease;
                background: rgba(39, 174, 96, 0.1);
                min-height: 44px;
            ">
                <iconify-icon icon="mdi:briefcase-outline" width="24" height="24" style="color: #27ae60;" aria-hidden="true"></iconify-icon>
                <span>Rubros</span>
            </a>
            
            <a href="#especializacion" class="glow-link" 
                aria-label="Ir a sección Especialización"
                style="
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem 1rem;
                color: #ffffff;
                text-decoration: none;
                border-radius: 10px;
                transition: all 0.3s ease;
                background: rgba(39, 174, 96, 0.1);
                min-height: 44px;
            ">
                <iconify-icon icon="mdi:chart-line" width="24" height="24" style="color: #27ae60;" aria-hidden="true"></iconify-icon>
                <span>Especialización</span>
            </a>
            
            <a href="#proyectos-venta" class="glow-link" 
                aria-label="Ir a sección Proyectos"
                style="
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem 1rem;
                color: #ffffff;
                text-decoration: none;
                border-radius: 10px;
                transition: all 0.3s ease;
                background: rgba(39, 174, 96, 0.1);
                min-height: 44px;
            ">
                <iconify-icon icon="mdi:folder-multiple-image" width="24" height="24" style="color: #27ae60;" aria-hidden="true"></iconify-icon>
                <span>Proyectos</span>
            </a>
            
            <a href="#equipo" class="glow-link" 
                aria-label="Ir a sección Equipo"
                style="
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem 1rem;
                color: #ffffff;
                text-decoration: none;
                border-radius: 10px;
                transition: all 0.3s ease;
                background: rgba(39, 174, 96, 0.1);
                min-height: 44px;
            ">
                <iconify-icon icon="mdi:account-group" width="24" height="24" style="color: #27ae60;" aria-hidden="true"></iconify-icon>
                <span>Equipo</span>
            </a>
            
            <a href="#contacto" class="glow-link" 
                aria-label="Ir a sección Contacto"
                style="
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem 1rem;
                color: #ffffff;
                text-decoration: none;
                border-radius: 10px;
                transition: all 0.3s ease;
                background: rgba(39, 174, 96, 0.1);
                min-height: 44px;
            ">
                <iconify-icon icon="mdi:email-outline" width="24" height="24" style="color: #27ae60;" aria-hidden="true"></iconify-icon>
                <span>Contacto</span>
            </a>
            
            <button id="glow-demo" 
                aria-label="Solicitar demostración de servicios"
                style="
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                padding: 0.75rem 1rem;
                background: linear-gradient(135deg, #27ae60, #2ecc71);
                color: white;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s ease;
                min-height: 44px;
            ">
                <i class="fas fa-calendar-check" aria-hidden="true"></i>
                <span>Solicitar Demo</span>
            </button>
        </div>
    `;
    
    // Agregar al DOM
    document.body.appendChild(overlay);
    document.body.appendChild(menu);
    
    // Event listeners
    trigger.addEventListener('click', function (e) {
        e.preventDefault();
        openGlowMenu();
        trigger.setAttribute('aria-expanded', 'true');
    });
    
    // Cerrar al hacer clic en el overlay (fuera del menú)
    overlay.addEventListener('click', function (e) {
        e.stopPropagation();
        closeGlowMenu();
    });
    
    // Prevenir que los clics dentro del menú cierren el menú
    menu.addEventListener('click', function (e) {
        e.stopPropagation();
    });
    
    // Botón de cerrar
    const closeBtn = document.getElementById('glow-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            closeGlowMenu();
        });
    }
    
    // Enlaces de navegación
    menu.querySelectorAll('.glow-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const href = this.getAttribute('href');
            closeGlowMenu();
            
            // Scroll suave
            setTimeout(() => {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        });
    });
    
    // Botón demo
    const demoBtn = document.getElementById('glow-demo');
    if (demoBtn) {
        demoBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            closeGlowMenu();
            
            // Activar el botón de demo existente
            setTimeout(() => {
                const solicitarDemoBtn = document.getElementById('solicitar-demo-btn');
                if (solicitarDemoBtn) {
                    solicitarDemoBtn.click();
                }
            }, 300);
        });
    }
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const menu = document.getElementById('glow-menu');
            if (menu && menu.style.visibility === 'visible') {
                closeGlowMenu();
            }
        }
    });
}

// Funciones para abrir/cerrar
function openGlowMenu() {
    const overlay = document.getElementById('glow-overlay');
    const menu = document.getElementById('glow-menu');
    
    if (overlay && menu) {
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
        menu.style.transform = 'translate(-50%, -50%) scale(1)';
        document.body.style.overflow = 'hidden';
    }
}

function closeGlowMenu() {
    const overlay = document.getElementById('glow-overlay');
    const menu = document.getElementById('glow-menu');
    const trigger = document.getElementById('glow-menu-trigger');
    
    if (overlay && menu) {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        menu.style.transform = 'translate(-50%, -50%) scale(0.8)';
        document.body.style.overflow = '';
        
        if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
        }
    }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createGlowMenu);
} else {
    setTimeout(createGlowMenu, 100);
}

// Exportar funciones globalmente
window.GlowMenu = {
    open: openGlowMenu,
    close: closeGlowMenu,
    toggle: function() {
        const menu = document.getElementById('glow-menu');
        if (menu && menu.style.visibility === 'visible') {
            closeGlowMenu();
        } else {
            openGlowMenu();
        }
    }
};

// Glow Menu Simple cargado
