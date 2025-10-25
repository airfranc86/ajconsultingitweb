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
        background: linear-gradient(145deg, #1a1a1a, #000000);
        border: 1px solid rgba(39, 174, 96, 0.3);
        border-radius: 20px;
        padding: 2rem;
        min-width: 300px;
        max-width: 90vw;
        z-index: 9999;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;
    
    // Contenido del menú
    menu.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h3 style="color: #27ae60; margin: 0 0 1rem 0; font-size: 1.5rem;">A&J Consulting IT</h3>
            <button id="glow-close" style="
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
            ">×</button>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
            <a href="#home" class="glow-link" style="
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem 1rem;
                color: #ffffff;
                text-decoration: none;
                border-radius: 10px;
                transition: all 0.3s ease;
                background: rgba(39, 174, 96, 0.1);
            ">
                <i class="fas fa-home"></i>
                <span>Inicio</span>
            </a>
            
            <a href="#nosotros" class="glow-link" style="
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem 1rem;
                color: #ffffff;
                text-decoration: none;
                border-radius: 10px;
                transition: all 0.3s ease;
                background: rgba(39, 174, 96, 0.1);
            ">
                <i class="fas fa-chart-line"></i>
                <span>Business Intelligence</span>
            </a>
            
            <a href="#contacto" class="glow-link" style="
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem 1rem;
                color: #ffffff;
                text-decoration: none;
                border-radius: 10px;
                transition: all 0.3s ease;
                background: rgba(39, 174, 96, 0.1);
            ">
                <i class="fas fa-envelope"></i>
                <span>Contacto</span>
            </a>
            
            <button id="glow-demo" style="
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
            ">
                <i class="fas fa-calendar-check"></i>
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
    });
    
    overlay.addEventListener('click', function () {
        closeGlowMenu();
    });
    
    document.getElementById('glow-close').addEventListener('click', function () {
        closeGlowMenu();
    });
    
    // Enlaces de navegación
    menu.querySelectorAll('.glow-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            closeGlowMenu();
            
            // Scroll suave
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Botón demo
    document.getElementById('glow-demo').addEventListener('click', function () {
        closeGlowMenu();
        
        // Activar el botón de demo existente
        const demoBtn = document.getElementById('solicitar-demo-btn');
        if (demoBtn) {
            demoBtn.click();
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
    
    if (overlay && menu) {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        menu.style.transform = 'translate(-50%, -50%) scale(0.8)';
        document.body.style.overflow = '';
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
