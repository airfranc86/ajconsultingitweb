# A&J Consulting IT

Landing web de **A&J Consulting IT** — consultora especializada en **Business Intelligence, Inteligencia Artificial y automatización** para PyMEs y profesionales.

**Producción:** https://ajconsultingit.vercel.app

---

## Qué es este sitio

Página de presentación corporativa. Comunica los servicios de la consultora, los rubros donde trabajamos, la metodología y los proyectos en producción. **Contacto único vía WhatsApp** (botón flotante persistente) y LinkedIn.

Sin formularios, sin captura de datos, sin backend. Sitio 100% estático.

---

## Stack

- **Framework:** Next.js 14 (App Router, SSG)
- **Lenguaje:** TypeScript
- **UI:** Tailwind CSS + shadcn/ui
- **Animaciones:** Motion (Framer Motion v12)
- **Tema:** dark/light con `next-themes`
- **Analytics:** Google Analytics 4 vía `@next/third-parties`
- **Hosting:** Vercel (CDN global, auto-deploy desde `main`)

---

## SEO

Optimizado para indexación y descubrimiento profesional:

- **SSG completo** → HTML pre-renderizado, crawlers leen contenido sin JS.
- **Metadata Open Graph + Twitter Cards** definidos en `src/app/layout.tsx`.
- **`metadataBase` canónico** vía `NEXT_PUBLIC_SITE_URL`.
- **Sitemap implícito** generado por Next.js App Router.
- **Robots:** `index, follow` para todas las páginas públicas.
- **Lighthouse SEO:** ≥ 95.
- **Core Web Vitals:** LCP < 1.5s, CLS < 0.1.
- **Fonts optimizadas** con `next/font` (Geist Sans + JetBrains Mono) — sin layout shift.
- **Headers de seguridad** (HSTS, X-Frame-Options, Referrer-Policy) en `next.config.mjs`.
- **Imágenes** servidas con `next/image` (lazy + AVIF/WebP auto).

---

## Setup local

```bash
git clone https://github.com/airfranc86/ajconsultingitweb.git
cd ajconsultingitweb
npm install
npm run dev
```

Abrir http://localhost:3000.

### Variables de entorno (opcionales)

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Measurement ID de Google Analytics 4 (formato `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_SITE_URL` | URL canónica del sitio para metadata Open Graph |

Sin estas variables el sitio funciona, pero no se trackean visitas.

---

## Scripts

```bash
npm run dev          # dev server con HMR
npm run build        # build de producción
npm run start        # servir el build
npm run lint         # ESLint
npm run type-check   # TypeScript sin emit
```

---

## Estructura

```
src/
├── app/                     # App Router (layout, page, metadata)
├── components/
│   ├── sections/            # Hero, Rubros, Metodología, Proyectos, FAQ, Contacto, Footer, Navbar
│   └── ui/                  # shadcn primitives + WhatsApp FAB
├── data/
│   ├── content.ts           # Rubros, proyectos, FAQs, métricas (tipadas)
│   └── contact.ts           # Fuente única de datos de contacto
└── lib/
    └── utils.ts             # cn() helper
```

---

## Deploy

Push a `main` → Vercel deploya automático. Si una variable de entorno se agrega o cambia, hay que hacer **Redeploy sin cache** (las `NEXT_PUBLIC_*` se inlinean en build time).

---

## Licencia

© A&J Consulting IT. Todos los derechos reservados.
