// ===== LOADER INICIAL =====
(function () {
    'use strict';
    const isMobile = /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth <= 768;
    if (isMobile) {
        const loader = document.getElementById('page-loader');
        if (loader) { loader.style.display = 'none'; loader.remove(); }
        document.body && document.body.removeAttribute('data-loading');
        return;
    }
    const MIN_LOAD_TIME_MS = 2000, MAX_LOAD_TIME_MS = 4000, IMAGE_TIMEOUT_MS = 3000;
    const CIRCUMFERENCE = 2 * Math.PI * 90;
    const body = document.body, loader = document.getElementById('page-loader');
    const progressCircle = document.getElementById('loader-progress');
    const loaderImg = document.getElementById('loader-logo-img');
    if (!body || !loader || !progressCircle) return;
    let simulatedProgress = 0, progressTimerId, minTimeElapsed = false, resourcesReady = false, imageLoaded = false, finalizeCalled = false;
    progressCircle.style.strokeDasharray = `${CIRCUMFERENCE}`;
    progressCircle.style.strokeDashoffset = `${CIRCUMFERENCE}`;
    function setProgress(v) { progressCircle.style.strokeDashoffset = `${CIRCUMFERENCE - (Math.max(0,Math.min(100,v)) / 100) * CIRCUMFERENCE}`; }
    function markImageLoaded() { if (imageLoaded) return; imageLoaded = true; checkFinalize(); }
    function markResourceReady() { if (resourcesReady) return; resourcesReady = true; checkFinalize(); }
    function checkFinalize() { if (resourcesReady && minTimeElapsed && imageLoaded && !finalizeCalled) finalizeLoader(); }
    function finalizeLoader() {
        if (finalizeCalled) return; finalizeCalled = true; clearInterval(progressTimerId); setProgress(100);
        window.setTimeout(() => {
            loader.classList.add('hidden'); body.removeAttribute('data-loading');
            window.setTimeout(() => { if (loader.parentNode) loader.remove(); }, 600);
        }, 50);
    }
    function simulateProgress() {
        progressTimerId = window.setInterval(() => {
            simulatedProgress = Math.min(simulatedProgress + Math.random() * 12, 92); setProgress(simulatedProgress);
        }, 220);
    }
    if (loaderImg) {
        if (loaderImg.complete && loaderImg.naturalHeight !== 0) markImageLoaded();
        else { loaderImg.addEventListener('load', markImageLoaded); loaderImg.addEventListener('error', markImageLoaded); window.setTimeout(() => { if (!imageLoaded) markImageLoaded(); }, IMAGE_TIMEOUT_MS); }
    } else { imageLoaded = true; }
    simulateProgress();
    if (document.readyState === 'complete' || document.readyState === 'interactive') markResourceReady();
    else { window.addEventListener('load', markResourceReady); document.addEventListener('DOMContentLoaded', markResourceReady); }
    window.setTimeout(() => { minTimeElapsed = true; checkFinalize(); }, MIN_LOAD_TIME_MS);
    window.setTimeout(() => { if (!finalizeCalled) { resourcesReady = imageLoaded = minTimeElapsed = true; finalizeLoader(); } }, MAX_LOAD_TIME_MS);
    window.setTimeout(() => { const s = document.getElementById('page-loader'); if (s && !s.classList.contains('hidden')) { s.remove(); body.removeAttribute('data-loading'); } }, 5000);
})();

// ===== BARRA DE PROGRESO DE SCROLL =====
function updateProgressBar() {
    const sh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const bar = document.getElementById('progressBar');
    if (bar) bar.style.width = (sh > 0 ? (document.documentElement.scrollTop / sh) * 100 : 0) + '%';
}
window.addEventListener('scroll', updateProgressBar, { passive: true });

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href').substring(1);
        const target = document.getElementById(id);
        if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); updateActiveNavLink(id); }
    });
});

// ===== NAVEGACION ACTIVA =====
function updateActiveNavLink(sectionId) {
    document.querySelectorAll('.nav-menu a').forEach(l => l.classList.remove('active'));
    const link = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
    if (link) link.classList.add('active');
}
function updateActiveSectionOnScroll() {
    let current = '';
    document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY + 150 >= s.offsetTop && window.scrollY + 150 < s.offsetTop + s.clientHeight) current = s.id;
    });
    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('href').substring(1) === current) l.classList.add('active');
    });
}
let scrollTimeout;
window.addEventListener('scroll', () => { clearTimeout(scrollTimeout); scrollTimeout = setTimeout(updateActiveSectionOnScroll, 100); }, { passive: true });
document.addEventListener('DOMContentLoaded', () => { updateActiveSectionOnScroll(); if (window.scrollY < 100) updateActiveNavLink('home'); });

// ===== LOGO CLICKEABLE =====
document.addEventListener('DOMContentLoaded', function () {
    const logoWrapper = document.querySelector('.logo-wrapper');
    if (!logoWrapper) return;
    function scrollToHome(e) { e.preventDefault(); e.stopPropagation(); const s = document.getElementById('home'); if (s) s.scrollIntoView({ behavior: 'smooth', block: 'start' }); else window.scrollTo({ top: 0, behavior: 'smooth' }); }
    logoWrapper.addEventListener('click', scrollToHome);
    const logoNav = logoWrapper.querySelector('.logo-nav'); if (logoNav) logoNav.addEventListener('click', scrollToHome);
});

// ===== EFECTO HEADER AL SCROLL =====
// IMPORTANTE: Solo se agrega/quita la clase CSS .header-scrolled
// NUNCA se escribe header.style.background — eso pisaria el tema activo.
// El CSS en index.html define [data-theme="dark/light"] .header.header-scrolled
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (header) header.classList.toggle('header-scrolled', window.scrollY > 50);
}, { passive: true });

// ===== ANIMACION FADE-IN =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion && window.IntersectionObserver) {
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; fadeObserver.unobserve(entry.target); }
        });
    }, { threshold: 0.25, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.section-card,.feature-card,.rubro-caso-card,.stat-card,.contact-card,.hero-buttons').forEach(el => {
        el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out'; fadeObserver.observe(el);
    });
} else {
    document.querySelectorAll('.section-card,.feature-card,.rubro-caso-card,.stat-card,.contact-card,.hero-buttons').forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
}

// ===== LAZY LOADING =====
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.classList.remove('lazy'); obs.unobserve(img); } });
    });
    document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
}
document.addEventListener('DOMContentLoaded', () => {
    ['assets/AJLOGO.png'].forEach(src => { const l = document.createElement('link'); l.rel = 'preload'; l.as = 'image'; l.href = src; document.head.appendChild(l); });
});

// ===== ACCESIBILIDAD =====
document.addEventListener('keydown', e => { if (e.key === 'Escape') { const m = document.getElementById('demo-modal'); if (m) m.style.display = 'none'; } });

// ===== TYPING ANIMATION =====
document.addEventListener('DOMContentLoaded', function () {
    const heroTagline = document.querySelector('.hero-tagline');
    if (!heroTagline) return;
    const texts = ['Transformando datos en decisiones inteligentes', 'Animate a pegar el salto al mundo digital', 'Potencia tu negocio con inteligencia artificial'];
    const fonts = ['Inter, sans-serif', 'Poppins, sans-serif', 'Raleway, sans-serif'];
    let ti = 0, fi = 0, ci = 0, t = null;
    function typeText() { const txt = texts[ti]; if (ci < txt.length) { heroTagline.textContent = txt.substring(0, ++ci); t = setTimeout(typeText, 70); } else { t = setTimeout(deleteText, 3000); } }
    function deleteText() { if (ci > 0) { heroTagline.textContent = texts[ti].substring(0, --ci); t = setTimeout(deleteText, 40); } else { ti = (ti + 1) % texts.length; fi = (fi + 1) % fonts.length; heroTagline.style.fontFamily = fonts[fi]; t = setTimeout(typeText, 500); } }
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { heroTagline.textContent = ''; ci = 0; heroTagline.style.fontFamily = fonts[0]; typeText(); obs.disconnect(); } }); }, { threshold: 0.1 });
    obs.observe(heroTagline);
    window.addEventListener('beforeunload', () => { if (t) clearTimeout(t); });
});

// ===== BOTON FLOTANTE DE CONTACTO =====
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('floating-contact-btn'); if (!btn) return;
    btn.addEventListener('click', e => { e.preventDefault(); const s = document.getElementById('contacto'); if (s) { s.scrollIntoView({ behavior: 'smooth', block: 'start' }); s.classList.add('highlight-section'); setTimeout(() => s.classList.remove('highlight-section'), 2000); } });
    window.addEventListener('scroll', () => {
        const s = document.getElementById('contacto'); if (!s) return;
        const st = window.pageYOffset; const near = st >= s.offsetTop - 100 && st <= s.offsetTop + s.offsetHeight;
        btn.style.opacity = near ? '0.5' : '1'; btn.style.pointerEvents = near ? 'none' : 'auto';
    }, { passive: true });
});

/* =============================================================
   THEME TOGGLE — Light / Dark / System
   -------------------------------------------------------------
   El THEME INIT en <head> ya aplico data-theme antes del
   primer paint. Este bloque solo sincroniza los botones
   y escucha clics para cambiar el tema.
============================================================= */
(function () {
    'use strict';
    var STORAGE_KEY = 'aj-theme';
    var html = document.documentElement;

    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    function resolveTheme(mode) { return mode === 'system' ? getSystemTheme() : mode; }
    function applyTheme(mode) {
        html.setAttribute('data-theme', resolveTheme(mode));
        localStorage.setItem(STORAGE_KEY, mode);
        updateButtons(mode);
    }
    function updateButtons(activeMode) {
        document.querySelectorAll('.theme-toggle-btn').forEach(function (btn) {
            var isActive = btn.getAttribute('data-mode') === activeMode;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
    }
    function init() {
        var toggle = document.getElementById('theme-toggle');
        if (!toggle) return;
        // data-theme ya esta en <html> desde el head. Solo reflejar en botones:
        updateButtons(localStorage.getItem(STORAGE_KEY) || 'dark');
        toggle.addEventListener('click', function (e) {
            var btn = e.target.closest('.theme-toggle-btn');
            if (!btn) return;
            var mode = btn.getAttribute('data-mode');
            if (mode) applyTheme(mode);
        });
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function () {
            if ((localStorage.getItem(STORAGE_KEY) || 'dark') === 'system') applyTheme('system');
        });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
