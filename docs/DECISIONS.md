# Architecture Decision Log — v3

## ADR-001 — Migrar de HTML estático a Next.js 14
**Fecha:** 2026-05-02
**Estado:** Aceptada

### Contexto
La v2 era HTML+CSS+JS vanilla servida estáticamente desde Vercel. El contenido se inyectaba con JS en cliente (Particles.js, Swiper), lo que penalizaba SEO. Además había dependencias declaradas (`nodemailer`, `googleapis`) sin runtime de servidor que pudiera ejecutarlas.

### Decisión
Migrar a Next.js 14 (App Router) con SSG por defecto.

### Alternativas consideradas
- **Mantener HTML estático y agregar SSR con un build script**: descartado por complejidad. Reinventar lo que Next.js ya hace.
- **Astro**: buena opción, pero el ecosistema de shadcn/ui es de primera clase en React/Next.

### Consecuencias
- Positivas: SEO real con SSG, ecosistema shadcn/ui directo.
- Negativas: el bundle de Next agrega ~80kB vs HTML puro. Aceptable para una landing.

---

## ADR-002 — shadcn/ui en lugar de un framework UI completo
**Fecha:** 2026-05-02
**Estado:** Aceptada

### Contexto
Necesitamos un sistema de diseño consistente, accesible y mantenible para reemplazar los estilos ad-hoc de la v2.

### Decisión
shadcn/ui (Radix Primitives + Tailwind) por copia local, no como dependencia.

### Alternativas consideradas
- **Material UI / Chakra UI**: bundle muy grande, estilos opinionados, difícil personalizar.
- **Headless UI**: menos componentes que Radix, comunidad más chica.

### Consecuencias
- Positivas: control total del código, accesibilidad de Radix, sin bloat.
- Negativas: hay que mantener los componentes manualmente. Aceptable para un proyecto de este tamaño.

---

## ADR-003 — Sitio 100% estático sin backend
**Fecha:** 2026-05-02
**Estado:** Aceptada

### Contexto
La v2 tenía un schema de Supabase configurado para capturar leads desde un formulario. Sin embargo, la conversión real para PyMEs locales en Argentina es mucho mayor por WhatsApp que por formulario web.

### Decisión
Eliminar el formulario y el backend completo. Toda CTA va a `wa.me` con número directo. Mantener emails y LinkedIn como canales secundarios.

### Alternativas consideradas
- **Mantener el formulario con Supabase**: agrega 1 servicio más para mantener, requiere dashboard custom para leer leads, agrega secrets que rotar, expone superficie de ataque. La conversión adicional sobre WhatsApp es marginal en este target.
- **Formulario que envía directo a email vía Resend/SendGrid**: descartado por mismo argumento más el costo de un servicio externo.

### Consecuencias
- Positivas:
  - Cero infra (no DB, no env vars, no secrets, no rate limit, no admin)
  - Conversión más alta (WhatsApp tiene tasa de respuesta significativamente mayor en este segmento)
  - El cliente ve nuestro número y avatar antes de escribir → señal de confianza
  - El historial queda en su WhatsApp, no en una DB que tenemos que cuidar
- Negativas:
  - Sin captura automática de leads en CRM. Si el volumen crece, se va a notar.
  - Si el número de WhatsApp cambia, requiere redeploy (mitigado por la centralización en `data/contact.ts`).

### Trigger de revisión
Si llegan > 30 consultas/mes y la administración manual de WhatsApp se vuelve un cuello de botella → reincorporar Supabase + form (ver `REINTEGRATION.md`).

---

## ADR-004 — Forzar dark mode en lugar de toggle
**Fecha:** 2026-05-02
**Estado:** Aceptada

### Contexto
shadcn/ui soporta dark/light toggle out of the box. ¿Lo agregamos?

### Decisión
Solo dark mode. La paleta y el branding están diseñados para fondo oscuro.

### Alternativas consideradas
- **Toggle dark/light**: descartada. Doblar el QA visual no aporta a la audiencia objetivo (PyMEs que entran desde búsqueda directa, no desarrolladores que esperan toggle).

### Consecuencias
- Positivas: menos superficie de testing, identidad visual más fuerte.
- Negativas: usuarios con strong preference por light mode pueden incomodarse. Riesgo bajo.

---

## ADR-005 — Centralización de datos de contacto en módulo único
**Fecha:** 2026-05-02
**Estado:** Aceptada

### Contexto
El número de WhatsApp, emails y URL de LinkedIn aparecen en Hero, Navbar, Footer y sección de Contacto. Hardcodearlos en cada componente genera deuda apenas algo cambie.

### Decisión
Todo dato de contacto vive en `src/data/contact.ts`. Función helper `contact.whatsapp.link(message?)` para generar links con mensaje pre-cargado opcional por sección.

### Consecuencias
- Positivas: cambiar un número impacta toda la app con un solo edit.
- Negativas: ninguna relevante.
