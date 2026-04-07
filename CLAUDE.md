# CLAUDE.md — A&J Consulting IT Website

This file documents the codebase structure, conventions, and workflows for AI assistants
working on this repository.

---

## Project Overview

**A&J Consulting IT** is a B2B consulting firm specializing in Business Intelligence and
data analytics for healthcare clinics (Argentina). This repository is their corporate
marketing website — a static single-page application (SPA) with anchor-based navigation
and one serverless API route for form submissions.

- **Language of content**: Spanish (es_AR)
- **Architecture**: Static HTML/CSS/JS served directly; no build step
- **Hosting**: Vercel (static hosting + serverless functions)
- **Package manager**: pnpm (v10.17.1)

---

## Development Commands

```bash
pnpm start       # Start local HTTP server on http://localhost:3000 (auto-opens browser)
pnpm serve       # Alias for pnpm start
pnpm build       # No-op (echo only — no build needed for static files)
pnpm deploy      # Deploy to Vercel production (vercel --prod)
```

There is **no build step**. Edits to HTML/CSS/JS take effect immediately when the
local server is refreshed.

---

## Repository Structure

```
ajconsultingitweb/
├── index.html                      # Entire landing page (1,194 lines)
├── css/
│   └── styles.css                  # All styles — theme system, responsive, animations (3,175 lines)
├── js/
│   ├── main.js                     # Core interactions: loader, scroll, nav, theme toggle, analytics
│   ├── glow-menu.js                # Mobile menu glow effects and toggle
│   ├── proyectos-venta.js          # Dynamic project card rendering (IIFE, window.ProyectosVenta)
│   └── particles.js                # Vendored particle animation engine — DO NOT MODIFY
├── api/
│   └── send-demo-request.js        # Vercel serverless function — email form handler
├── assets/
│   ├── AJLOGO*.png                 # Logo files in multiple sizes (22×22, 80×80, 200×200, 500×500)
│   └── ClientesWeb/                # Client project logos (SantaBarbaCba, SkyPulse-ar, etc.)
├── setup_supabase_marketing.sql    # Lead capture DB schema (Supabase — not wired to frontend yet)
├── vercel.json                     # Vercel deployment config
├── package.json                    # Scripts and dependencies
└── README.md                       # Project documentation
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic elements, ARIA) |
| Styling | CSS3 with CSS Custom Properties (no framework) |
| Scripting | Vanilla JavaScript ES6+ (no framework) |
| Animations | particles.js (vendored), CSS transitions/keyframes |
| Backend | Vercel Serverless Function (Node.js) |
| Email | nodemailer via Gmail SMTP |
| Database | Supabase (schema defined, not active in frontend) |
| Analytics | Google Analytics 4 (gtag.js) + Vercel Analytics + Speed Insights |
| Deployment | Vercel |

**Do NOT add React, Vue, Angular, or any other JS framework unless explicitly requested.**

---

## Page Sections & Routing

Navigation is anchor-based — all sections live inside `index.html`:

| Section ID | Content |
|-----------|---------|
| `#home` | Hero with CTA buttons |
| `#metodologia` | 4-step methodology cards |
| `#rubros-casos` | Industry use cases (clinics, roads, restaurants) |
| `#proyectos-venta` | Portfolio of completed projects (rendered by JS) |
| `#equipo` | Team members |
| `#diagnostico` | Interactive diagnostic form |
| `#contacto` | Contact info and demo request form |

---

## CSS Conventions

### CSS Custom Properties (Variables)
All colors, spacing, and shadows use variables defined on `:root` and overridden per theme:

```css
/* Key design tokens */
--primary-color: #000000
--secondary-color: #27ae60   /* green accent */
--theme-text-primary: #ffffff (dark) / #111111 (light)
--theme-card-bg: rgba(255,255,255,0.08)

/* Spacing scale */
--spacing-xs: 4px   --spacing-sm: 8px   --spacing-md: 16px
--spacing-lg: 24px  --spacing-xl: 32px  --spacing-2xl: 48px  --spacing-3xl: 64px
```

Always use existing variables for colors and spacing — do not hardcode values.

### Naming Convention
- **BEM-adjacent**: `.section-card`, `.feature-card`, `.stat-card`, `.feature-icon`
- **State classes**: `.active`, `.hidden`, `.header-scrolled`, `.lazy`
- **Layout helpers**: `.features-grid`, `.rubro-casos-grid`
- **Button variants**: `.btn`, `.btn-primary`, `.btn-outline-white`, `.btn-secondary`, `.btn-shimmer`

### Responsive Breakpoints
```css
@media (max-width: 1024px) { }   /* Tablet */
@media (max-width: 768px)  { }   /* Mobile landscape */
@media (max-width: 480px)  { }   /* Mobile portrait */
@media (max-width: 320px)  { }   /* Small mobile */
```

---

## Theme System

The site supports **dark** (default), **light**, and **system** themes.

- Theme is stored in `localStorage` under the key `aj-theme`
- `<html data-theme="dark|light">` drives all CSS variable switching
- An inline `<script>` in `<head>` reads localStorage before first paint to prevent FOUC
- The toggle button has three states with `aria-pressed` for accessibility
- `[data-theme="light"]` CSS block in `styles.css` overrides all dark-mode variables

When adding new styled elements, define both dark and light variants using the existing
variable system rather than hardcoded colors.

---

## JavaScript Conventions

### IIFE Pattern (encapsulation)
```javascript
(function () {
    'use strict';
    // Private scope
    function myFunction() { ... }
    // Export if needed across files
    window.MyNamespace = { myFunction };
})();
```

### Event Listeners
Use `{ passive: true }` for all scroll and resize listeners:
```javascript
window.addEventListener('scroll', handler, { passive: true });
```

### Scroll-triggered Animations
Use `IntersectionObserver` — not scroll event listeners:
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); }
    });
}, { threshold: 0.25, rootMargin: '0px 0px -50px 0px' });
```

### DOM Queries
```javascript
document.querySelectorAll('[selector]').forEach(el => { ... });  // Multiple
document.getElementById('id');                                    // Single
```

### Cross-file Communication
Expose APIs via `window.Namespace`:
```javascript
window.ProyectosVenta = { proyectos, render };  // from proyectos-venta.js
```

---

## Serverless API Route

**File**: `api/send-demo-request.js`
**Endpoint**: `POST /api/send-demo-request`
**Runtime**: Node.js (Vercel serverless, 60s max duration)

### Flow
1. Receives JSON body: `{ nombre, email, clinica, telefono, mensaje }`
2. Validates required fields (`nombre`, `email`, `clinica`)
3. Sends HTML email via Gmail SMTP using nodemailer
4. Returns `{ success: true }` or `{ error: "..." }`

### Required Environment Variables
```
GMAIL_USER=<gmail address>
GMAIL_APP_PASSWORD=<gmail app-specific password>
```

These must be set in Vercel's project settings for production. For local testing,
create a `.env` file (already in `.gitignore`).

**CORS**: configured to allow `*` (public form).

---

## HTML Conventions

- Use semantic elements: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`
- State via `data-*` attributes: `data-theme`, `data-src` (lazy img), `data-loading`
- Accessibility: `role`, `aria-label`, `aria-labelledby`, `aria-pressed`, `aria-expanded`
- Lazy-load images: add `data-src` attribute and `class="lazy"`; IntersectionObserver in `main.js` handles loading
- Preload critical assets with `<link rel="preload">`

---

## Assets

- Logo variants: 22×22 (favicon), 80×80, 200×200, 500×500 — use the smallest appropriate size
- Client logos live in `assets/ClientesWeb/<client-name>/`
- Do not commit large unoptimized images

---

## Database (Supabase)

`setup_supabase_marketing.sql` defines the `marketing.demo_requests` table for lead
capture. It is **not currently wired to the frontend** — form submissions go directly
to email. The SQL file is a reference for future integration.

---

## Critical Rules

1. **No frameworks** — this is vanilla HTML/CSS/JS. Do not introduce npm packages that
   require a bundler or build step without first setting one up explicitly.
2. **Do not modify `js/particles.js`** — it is a vendored third-party library.
3. **All changes are immediate** — there is no compile step; refresh the browser.
4. **No test suite** — verify changes manually with `pnpm start`.
5. **Content is in Spanish** — maintain `es_AR` locale in all copy additions.
6. **Do not commit secrets** — `.env` files are gitignored; use Vercel env vars for
   credentials.

---

## Git Workflow

- **Active development branch**: `claude/add-claude-documentation-wbgiy`
- Commit with clear, descriptive messages
- Push with `git push -u origin <branch-name>`
- Do not push directly to `main` without explicit approval

---

## Verification Checklist

After making changes, verify:

1. `pnpm start` — site loads at http://localhost:3000
2. Theme toggle cycles correctly: dark → light → system
3. Particle background renders in the hero section
4. Smooth scroll works for all nav anchor links
5. Mobile menu opens/closes on hamburger click
6. Demo request form shows validation errors for empty required fields
7. Page loader animation completes (min 2s, max 4s)
8. No console errors in browser devtools
