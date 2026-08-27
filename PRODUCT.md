# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

PyMEs y profesionales que ya tienen sistemas propios (ERP, planillas, apps a medida) pero que no "conversan" entre sí — dueños/gerentes de operaciones en rubros como salud, construcción, gastronomía, deportivo y e-commerce, evaluando si vale la pena contratar una consultora de BI/IA/automatización en vez de un freelancer suelto o una consultora corporativa cara.

## Product Purpose

Landing corporativa 100% estática de A&J Consulting IT (consultora de Business Intelligence, IA y automatización para PyMEs). No vende un producto de software: vende la contratación de la consultora. Éxito = el visitante entiende la propuesta de valor en segundos y contacta por WhatsApp/LinkedIn con contexto suficiente para que la primera respuesta ya sea una propuesta concreta.

## Positioning

"I+D embebido": investigan antes de cotizar, apoyados en una base de conocimiento técnica propia con **700+ fuentes indexadas en 36 dominios** (frameworks, hosting, auth, OCR, pagos, LLMs). Entregan primera versión funcional en ~15 días en vez de meses, sin reinventar arquitectura por proyecto, y el código y los datos siempre quedan del lado del cliente. Esa base de conocimiento propia + velocidad de entrega es el mecanismo que un freelancer o una consultora genérica no puede igualar fácilmente.

## Operating Context

- Metodología en 4 pasos con duración estimada: (1) Sprint diagnóstico 3–5 días, (2) Primera versión funcional, (3)-(4) iteración/entrega — sin scope creep silencioso.
- 7+ verticales con casos reales: clínicas de salud, obras viales, gastronomía (bar/restó), fitness/deportivo, e-commerce/sitios de eventos, entre otros — con métrica concreta de impacto por rubro.
- 10 proyectos reales en el showcase (`src/data/content.ts`), cada uno con categoría fija (BI & Dashboards / Automatización & Pipelines / Sistemas de Gestión / Sitios Web & E-commerce), features y, cuando aplica, URL en producción.
- Único canal de contacto activo hoy: botón flotante de WhatsApp (persistente) + CTA a LinkedIn en la sección de contacto. Sin newsletter, sin login, sin dashboard de cliente en este sitio.

## Capabilities and Constraints

- **Sitio 100% estático** (Next.js 14 App Router, SSG) — sin backend propio, sin base de datos, sin endpoint de submit. Esto es una decisión de producto explícita (ver README), no una limitación técnica a resolver.
- **Decisión confirmada para el CTA final de este rediseño:** el "formulario simplificado" del brief se implementa como formulario de 3 campos que arma un mensaje prellenado y abre WhatsApp (deep link `wa.me`) — no hay submit a backend, no hay captura/almacenamiento de datos. Mantiene la promesa "sin formularios que guardan datos" mientras da la sensación de cierre estructurado que pedía el brief.
- Analytics: Google Analytics 4 vía `@next/third-parties`, con `trackCTA` ya instrumentado en botones (ver `src/lib/gtag.ts` y su uso en `hero.tsx`) — cualquier CTA nuevo debe trackearse igual.
- Tema dark/light con `next-themes`; todo el copy y contraste debe funcionar en ambos modos.
- Stack de UI: Tailwind + shadcn/ui + Motion (Framer Motion v12). Registry adicional disponible vía MCP: `@react-bits` (componentes animados) y `@scrollxui`, ambos declarados en `components.json` — usar solo si aportan a una sección puntual (hero / transiciones), no por defecto.

## Brand Commitments

- Nombre: A&J Consulting IT. Logo en `/aj-logo.png`.
- Tono actual: directo, técnico pero accesible, sin jerga de venta ("no vendemos paquetes genéricos"), con evidencia concreta (métricas, no adjetivos).
- Paleta/tema existentes (dark/dominante con acento primario + `gradient-text`) se toman como sistema visual incumbente a evaluar en la fase de diseño — no se define acá.

## Evidence on Hand

- Métricas reales ya publicadas: 7+ verticales con casos, 700+ fuentes técnicas indexadas, −70% tiempo de análisis de KPIs (caso clínicas), 15 días para primera versión funcional.
- 10 proyectos reales con URL en producción (Santa Barba/Web Peluquerías, VineWatch, AeroMet, Fenix CBA, App4Bar, ETL Dashboard, SkyPulse, Techcom View, KineoPass, Atelier Boda).
- No hay fotos reales del equipo ni logos de clientes/prueba social todavía — el brief pide "prueba social" pero **no hay assets de ese tipo confirmados**; el plan debe marcarlos como pendientes de aportar, no inventarlos.

## Product Principles

1. Evidencia por sobre adjetivo: cada claim de valor va acompañado de una métrica o proyecto real citable, nunca una afirmación abstracta.
2. Contacto de baja fricción, sin captura de datos: WhatsApp/LinkedIn siguen siendo el único canal real; cualquier "formulario" es un atajo hacia ese mismo canal, no un canal nuevo.
3. Menos texto, más estructura escaneable: cada sección debe poder entenderse en una pasada visual (jerarquía, viñetas, bloques) antes que en una lectura lineal.
4. El código y los datos del cliente siempre quedan del lado del cliente — este principio de la propuesta de valor debe seguir siendo explícito en el copy, no diluirse en el rediseño.

## Accessibility & Inclusion

Sin requerimiento específico confirmado más allá de los estándares ya declarados en el README (Lighthouse SEO ≥ 95, Core Web Vitals dentro de rango). Mantener contraste y tamaños de fuente accesibles en ambos temas (dark/light) al tocar jerarquía visual.
