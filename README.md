# A&J Consulting IT — v3

Landing page comercial de A&J Consulting IT. Reemplazo de la v2 con foco en SEO real, performance y mantenibilidad. **100% estático, sin backend.**

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · shadcn/ui · Vercel

## Por qué v3

La v2 era HTML/CSS/JS estático con render del lado cliente vía Particles.js y Swiper. Funcionaba, pero tenía limitaciones:

1. **No indexable por crawlers**: el contenido se inyectaba con JS, lo que penalizaba SEO. Resuelto con SSG de Next.js.
2. **Dependencias muertas**: `nodemailer`, `googleapis`, `@supabase/supabase-js` declaradas pero sin runtime real.
3. **Sin sistema de diseño**: cada sección estilada a mano. Reemplazado por shadcn/ui + tokens en CSS.

## Filosofía v3

**Sitio público sin formularios, sin captura de datos, sin backend.** Todo CTA va a WhatsApp directo. Justificación:

- PyMEs locales prefieren WhatsApp por amplio margen sobre formularios web
- Sin formulario → sin necesidad de DB, sin RLS, sin endpoints, sin rate limit
- Conversión más alta: el usuario ya está acostumbrado a chatear, no a llenar inputs
- Cero costo operativo, cero superficie de ataque

Si en el futuro aparece la necesidad de capturar leads vía form, ver `docs/REINTEGRATION.md` con el camino para reincorporar Supabase.

## Setup local

```bash
git clone https://github.com/airfranc86/ajconsultingit-v3.git
cd ajconsultingit-v3
pnpm install
pnpm dev
```

Abrir `http://localhost:3000`. **No hay variables de entorno necesarias.**

## Estructura

```
src/
├── app/
│   ├── globals.css          # Tokens shadcn dark
│   ├── layout.tsx           # Metadata, fonts, dark mode forzado
│   └── page.tsx             # Composición de secciones
├── components/
│   ├── sections/            # Hero, Rubros, Proyectos, FAQ, Contacto, etc.
│   └── ui/                  # shadcn primitives
├── data/
│   ├── content.ts           # Datos tipados (rubros, proyectos, FAQs)
│   └── contact.ts           # Fuente única de datos de contacto
└── lib/
    └── utils.ts             # cn() helper
docs/
├── architecture.md          # Diagrama Mermaid
├── DECISIONS.md             # Log de decisiones (ADR)
└── REINTEGRATION.md         # Cómo reincorporar Supabase si hace falta
```

## Cambiar datos de contacto

Todo está centralizado en `src/data/contact.ts`. Cambiar el número de WhatsApp o los emails ahí impacta en Hero, Navbar, Footer y sección de Contacto.

## Comandos

```bash
pnpm dev          # dev server con HMR
pnpm build        # build de producción
pnpm start        # servir el build
pnpm lint         # ESLint
pnpm type-check   # TypeScript sin emit
```

## Deploy

GitHub → Vercel automático. **No requiere variables de entorno.**

```bash
# Manual (opcional)
vercel --prod
```

## Performance

Objetivos:
- LCP < 1.5s
- CLS < 0.1
- TTI < 2s
- Lighthouse SEO ≥ 95

Optimizaciones aplicadas:
- SSG completo, sin server runtime
- Fonts via `next/font` (Geist Sans + JetBrains Mono, sin layout shift)
- `framer-motion` solo en Hero y Navbar
- Headers de seguridad en `next.config.mjs`
- Sin imágenes pesadas en above-the-fold

## Seguridad

- Cero formularios públicos → cero superficie de XSS/injection
- Cero secrets, cero API keys
- Headers HTTP seguros (X-Frame-Options, Referrer-Policy, etc.)
- Links externos con `rel="noopener noreferrer"`

## Roadmap

**v3.1** — Página de blog con MDX para contenido SEO
**v3.2** — Casos de éxito detallados por proyecto
**v3.3** — Integración con Calendly o similar para agendar (sin DB propia)

## Licencia

MIT
