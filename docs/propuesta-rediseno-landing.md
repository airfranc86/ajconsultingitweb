# Propuesta de rediseño — Landing AJ Consulting IT

Plan de arquitectura de información, UX writing y jerarquía visual. **Documento de propuesta — sin tocar código.**

## Decisiones ya confirmadas con el cliente

- **Alcance:** las 6 secciones del brief son obligatorias. Metodología, Rubros y Proyectos (evidencia real hoy en secciones separadas) se **fusionan dentro** de "Propuesta de Valor" y "Servicios Clave" — no quedan como secciones aparte.
- **CTA final:** formulario de 3 campos que arma un mensaje prellenado y abre WhatsApp (`wa.me`). Cero backend, cero almacenamiento de datos — mantiene la promesa "sitio 100% estático" del README.
- **Dirección visual:** se **hereda el sistema visual actual** (dark/light vía `next-themes`, acento primario + `gradient-text`, `grid-bg` + glow radial, cards con borde `border-border/60`, Geist Sans + JetBrains Mono, componentes shadcn/ui). Los problemas que describiste — saturación, mensaje genérico, falta de apoyo visual — son de **contenido y estructura**, no de paleta/tipografía. Si en realidad querías tirar abajo también el sistema visual (otro tema, otra tipografía), avisame y lo tratamos como reemplazo de identidad completo, que es un proceso más largo.
- No hay fotos reales de equipo ni logos de clientes todavía (confirmado en `PRODUCT.md`) — el plan no los inventa, los marca como pendientes de aportar.

---

## 1. Estructura Wireframe (sección por sección)

### 1. Hero
```
[Badge kicker: "I+D embebido · BI · IA · Automatización"]

        H1 — beneficio directo (una línea, 2 en mobile)
        Subtítulo — 2 líneas máx

    [CTA primario]     [CTA secundario]

[Bloque visual: carrusel/collage de 2-3 screenshots reales de
 dashboards en producción — reemplaza el logo+glow abstracto actual]

[Tira de métricas: 7+ verticales · 700+ fuentes · −70% KPIs · 15d]
```
La tira de métricas ya existe (`metricas` en `content.ts`) — sube de posición, hace de prueba social temprana sin esperar al scroll.

### 2. Prueba Social / Confianza
No hay fotos de equipo ni logos de clientes reales todavía, así que esta sección se apoya en **evidencia verificable en vez de fotos**:
```
[Kicker: "Evidencia, no promesas"]

[Franja horizontal, 3-4 chips clickeables con proyectos reales
 en producción: "App4Bar →" "ETL ANMAT →" "KineoPass →" ...]

[1 línea: "10 proyectos reales en producción. Mirá el código y el resultado."]
→ ancla a la sección de proyectos existente (se mantiene como página/anchor,
  no se borra — solo deja de ser una sección "más" del scroll principal)
```
**Pendiente de tu lado:** 1-2 testimonios cortos de clientes (aunque sea una frase + nombre/rubro) y/o foto real del equipo/oficina subirían mucho esta sección. Sin eso, la evidencia queda en "proyectos reales" nada más — funciona, pero es más fría que una cita de un cliente.

### 3. Propuesta de Valor (Problema → Solución)
3 tarjetas, fusiona lo que hoy es la sección "Pillars":
```
[H2: "Por qué no es lo mismo que un freelancer o una consultora grande"]

┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ Ícono        │  │ Ícono        │  │ Ícono        │
│ Problema     │  │ Problema     │  │ Problema     │
│ (1 línea)    │  │ (1 línea)    │  │ (1 línea)    │
│ → Solución   │  │ → Solución   │  │ → Solución   │
│ (1 línea +   │  │ (1 línea +   │  │ (1 línea +   │
│  prueba)     │  │  prueba)     │  │  prueba)     │
└─────────────┘  └─────────────┘  └─────────────┘
```

### 4. Servicios Clave
Grid de **4 tarjetas = las 4 categorías fijas de `CategoriaProyecto`** (BI & Dashboards, Automatización & Pipelines, Sistemas de Gestión, Sitios Web & E-commerce). Cada una fusiona lo que hoy está repartido entre Rubros/Metodología/Proyectos:
```
┌───────────────────────────────┐
│ Ícono + nombre de categoría     │
│ 1 párrafo breve (qué resuelve)  │
│ · viñeta rápida                │
│ · viñeta rápida                │
│ · viñeta rápida                │
│ [métrica real] → [ver proyecto]│
└───────────────────────────────┘
```
Esto reemplaza 3 secciones separadas (Rubros, Metodología, Proyectos) por 1 grid de 4, con la metodología ("15 días, sin scope creep") como una línea dentro de cada tarjeta en vez de una timeline propia.

### 5. Sobre AJ Consulting IT
```
[Foto corporativa/humana — pendiente de aportar]

H2 corto, centrado en el cliente (no en la historia de la empresa)
2-3 líneas: qué gana el cliente al trabajar con AJ, no cuándo se fundó
[Callout: "El código y los datos siempre son tuyos"]
```

### 6. CTA Final + Formulario Simplificado
```
[H2: cierre directo]
[3 campos: Nombre · Rubro · Qué necesitás resolver]
[Botón: arma el mensaje y abre WhatsApp con todo prellenado]
[Link secundario chico: LinkedIn]
```

---

## 2. Copywriting definitivo

### Hero
- **Badge:** `I+D embebido · BI · IA · Automatización` *(sin cambios, ya es corto)*
- **H1:** **"Conectamos los sistemas que ya tenés. En días, no en meses."**
- **Subtítulo:** "I+D embebido para PyMEs: investigamos antes de cotizar y el código y los datos siempre son tuyos."
- **CTA primario:** `Ver proyectos reales` *(se mantiene, ya funciona)*
- **CTA secundario:** `Diagnóstico gratuito` *(reemplaza "Conocé la metodología", que deja de ser sección propia)*

### Prueba Social
- **Kicker:** `Evidencia, no promesas`
- **Copy:** "10 proyectos reales en producción — con código y resultado a la vista."
- Chips: nombre corto de 3-4 proyectos con link directo (ej. `App4Bar →`, `Fenix CBA →`, `KineoPass →`)

### Propuesta de Valor — 3 tarjetas
1. **"Freelancer suelto"** → *Problema:* "No sabés con qué stack vas a terminar." *Solución:* "Investigamos sobre 700+ fuentes técnicas antes de cotizar. Sin improvisar arquitectura."
2. **"Consultora corporativa"** → *Problema:* "Cobran como si fueran meses y tardan lo mismo." *Solución:* "Primera versión funcional en 15 días. Proceso claro, sin scope creep."
3. **"Plataformas cerradas"** → *Problema:* "Te dejan atado a su sistema, no podés tocar nada." *Solución:* "El código y los datos son tuyos desde el día uno."

### Servicios Clave — 4 tarjetas (por categoría)
- **BI & Dashboards** — "Paneles que convierten datos dispersos en decisiones." Viñetas: `KPIs personalizados` · `Alertas automáticas` · `Análisis predictivo`. Métrica: `−70% en tiempo de análisis de KPIs`.
- **Automatización & Pipelines** — "Procesos que hoy hacés a mano, corriendo solos." Viñetas: `ETL e integraciones` · `OCR y lectura de documentos` · `Reportes automáticos`.
- **Sistemas de Gestión** — "Turnero, caja, clientes y stock en un solo lugar." Viñetas: `Turnero online` · `Control financiero` · `Seguimiento de clientes`.
- **Sitios Web & E-commerce** — "Sitios a medida, rápidos y sin templates genéricos." Viñetas: `Diseño a medida` · `Pasarela de pagos` · `SEO técnico (Lighthouse ≥95)`.

Cada tarjeta cierra con `[métrica real] → Ver proyecto`.

### Sobre AJ Consulting IT
- **H2:** **"No vendemos horas. Vendemos que dejes de perder tiempo."**
- **Cuerpo:** "Trabajamos con vos, no para una carpeta de venta. Entendemos tu proceso antes de tocar una línea de código, y cuando terminamos, el sistema queda funcionando — y es tuyo."
- **Callout:** `El código y los datos siempre son tuyos`

### CTA Final
- **H2:** **"Contanos qué querés resolver"**
- **Subcopy:** "Sin formularios eternos. 3 datos y hablamos por WhatsApp."
- Campos: `Nombre` · `Rubro` · `¿Qué necesitás resolver?`
- **Botón:** `Enviar por WhatsApp`

---

## 3. Sugerencias de imágenes/componentes

**Imágenes reales pendientes (no inventar):**
- 2-3 screenshots reales de dashboards en producción para el hero (App4Bar, ETL, KineoPass son buenos candidatos — ya están deployados).
- Foto humana/corporativa para la sección "Sobre AJ Consulting IT".
- Si en algún momento hay testimonios o logos de clientes con permiso de uso, van en Prueba Social.

**Componentes (React Bits vía MCP shadcn, registry `@react-bits` ya configurado):**
- El MCP todavía no lo probé en vivo dentro de esta sesión — antes de instalar nada, pedime algo como *"mostrame los backgrounds de React Bits"* y elegimos un componente concreto y verificado, en vez de que yo invente nombres de componentes que capaz no existen en el registry actual.
- Candidatos por *categoría* a evaluar ahí (no nombres confirmados todavía):
  - Un background sutil y animado detrás del hero (reemplaza/complementa el `grid-bg` + glow actual).
  - Un efecto de scroll-reveal (fade/slide-in) para las tarjetas de Propuesta de Valor y el grid de Servicios — que ya usan `motion/react`, así que puede no hacer falta una librería nueva.
- Regla del propio proyecto: usar React Bits solo donde sume a una sección puntual, no por default — si `motion/react` (ya instalado) alcanza, no sumar una dependencia nueva.

---

## Qué falta para poder implementar esto

1. Confirmar o corregir el copy definitivo de arriba.
2. Aportar (o autorizar que busque) las imágenes reales del hero y de "Sobre AJ Consulting IT".
3. Decidir en vivo, con el MCP de React Bits, si algún componente concreto entra al hero — o si `motion/react` ya cubre todo.

Con eso confirmado, paso a implementación (edición de `content.ts` + componentes en `src/components/sections/`).
