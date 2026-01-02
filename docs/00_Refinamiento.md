# Plan Maestro Unificado
## Arquitectura, Refinamiento y Ejecución de Servicios Web

**Fecha:** 02/01/2026  
**Responsable:** Francisco A.  
**Formato de trabajo:** Futures & Fixers
**Estado:** Documento operativo con enfoque comercial y técnico para agente / ejecución  
**URL:** https://ajconsultingitwebv2.vercel.app/

---

## 🎯 Alcance del Documento

Este documento consolida:

- Arquitectura comercial y plan de refinamiento
- Auditoría técnica completa
- Checklist ejecutable
- Features actuales y faltantes
- Fixes técnicos y de UX
- Responsividad y performance
- Validación final

Aplica a una **web de servicios digitales productiva**, ya implementada, en etapa de refinamiento y escalado.

**Principios de trabajo:**
- No se rehace
- No se rompe
- Se optimiza progresivamente

---

## 📌 Nota de Alcance Funcional

Las secciones de **Dominio Operativo** y **Dominio Analítico** aplican únicamente a soluciones que incluyen lógica de sistema, dashboard o procesamiento de datos.

No todas las webs de servicios implementan estas capas.

Para webs comerciales estándar, las secciones relevantes son:
- Arquitectura comercial
- Sistema de páginas
- Auditoría técnica transversal
- Responsividad
- Lineamientos UX/UI

---

## CONTEXTO BASE

Este documento define la arquitectura y el plan de refinamiento de una web de servicios digitales **ya desplegada**, orientada a conversión comercial sin perder solidez técnica.

El sitio debe cumplir simultáneamente tres funciones:

* Explicar con claridad qué se vende.
* Generar confianza inmediata.
* Facilitar el contacto o inicio de conversación comercial.

El sistema de servicios contempla dos modalidades de ejecución internas:

* **Ejecución directa**: servicios realizados personalmente, con control total de alcance, calidad y entrega.
* **Ejecución colaborativa**: servicios realizados junto a terceros, bajo una única marca y responsabilidad final.

Decisión estratégica actual:

* Marca por encima de personas.
* Lenguaje orientado a negocio y resultados.
* Arquitectura preparada para activar personal branding a futuro si el mercado lo requiere.

---

# FUTURES

Lo que el sistema debe permitir desde una perspectiva comercial

### F1. Comprensión inmediata de la oferta

En menos de 20 segundos el visitante debe entender:

* Qué tipo de soluciones se ofrecen.
* Para qué tipo de negocios o proyectos.
* En qué casos conviene contactarse.

La web no explica cómo se programa.
Explica **para qué sirve contratar el servicio**.

---

### F2. Escalabilidad comercial

La estructura debe permitir:

* Agregar nuevos servicios sin reeducar al usuario.
* Presentar servicios como paquetes, soluciones o proyectos.
* Priorizar servicios de mayor valor sin eliminar los demás.

---

### F3. Confianza sin exposición personal

La credibilidad se construye a partir de:

* Claridad de mensaje.
* Orden visual.
* Casos implícitos y lógica profesional.

La figura personal no es necesaria en esta etapa para cerrar oportunidades.

---

### F4. Integración clara de soluciones complejas

Servicios como:

* Webs con turnos o reservas.
* Sistemas con flujos operativos.
* Proyectos a medida.

Deben presentarse como **soluciones listas para negocio**, no como desarrollos experimentales.

---

### F5. Conversión guiada

Cada página debe tener:

* Un objetivo comercial único.
* Un llamado a la acción claro.
* Un siguiente paso evidente.

---

# FIXERS

Problemas que afectan la conversión y deben corregirse

**Convención de priorización:**
- 🔴 **Crítico**: Bloquea conversión o seguridad
- 🟡 **Importante**: Mejora calidad significativamente
- 🟢 **Deseable**: Iterativo, optimización progresiva

---

### 🔴 X1. Servicios presentados como lista técnica

**Problema:**
* El usuario no sabe cuál elegir.

**Corrección:**
* Servicios agrupados por tipo de problema.
* Lenguaje orientado a resultados.

---

### 🔴 X2. Falta de entrada clara al sistema

**Problema:**
* El visitante no sabe por dónde empezar.

**Corrección:**
* Servicio principal destacado.
* Rutas claras según necesidad del cliente.

---

### 🟡 X3. UX inconsistente

**Problema:**
* Sensación de improvisación.

**Corrección:**
* Tipos de página definidos.
* Componentes repetibles.
* Ritmo visual constante.

---

### 🟡 X4. Sistemas con lógica mal encuadrados

**Problema:**
* Se perciben como extras.

**Corrección:**
* Convertirlos en solución diferenciadora.
* Usarlos como argumento de valor.

---

# ARQUITECTURA COMERCIAL DE SERVICIOS

## Nivel 1 – Soluciones Principales

Servicios de mayor valor y entrada al sistema:

* Desarrollo Web Profesional para Negocios
* Webs con Turnos, Reservas y Flujos Operativos
* Soluciones Digitales a Medida

---

## Nivel 2 – Servicios de Optimización

* Auditoría técnica y de experiencia de usuario
* Mejora y refactorización de sistemas existentes
* Integraciones y automatizaciones

---

## Nivel 3 – Servicios Complementarios

* Proyectos ejecutados con terceros
* Servicios específicos según necesidad del cliente

La modalidad de ejecución no se comunica públicamente.

---

## Solución: Creación de Sitios Web Profesionales

### Enfoque

La creación de sitios web se aborda como una **solución de negocio**, no como una pieza visual aislada.

Cada sitio se diseña para cumplir un objetivo concreto:
- generar consultas,
- ordenar información,
- posicionar un servicio,
- o soportar una operación digital existente.

No se construyen sitios genéricos ni plantillas reutilizadas sin criterio.

---

### Qué tipo de sitios se desarrollan

- Sitios institucionales y comerciales
- Webs de servicios profesionales
- Landing pages orientadas a conversión
- Sitios con dashboards, visualización de datos o sistemas embebidos
- Webs técnicas con lógica específica de dominio

---

### Principios de implementación

- Claridad del mensaje antes que estética
- Arquitectura preparada para escalar
- Código mantenible y no frágil
- Performance y responsividad como requisito base
- UX orientada a lectura rápida y acción concreta

---

### Ejemplos de implementación real

Los siguientes proyectos representan distintos enfoques de creación web según objetivo y dominio:

- **Web de servicios locales**  
  https://santa-barba-cba.vercel.app/  
  → Sitio comercial orientado a contacto directo y presencia local.
logo: D:\Developer\2Consulting\ajconsulting-landings\main\assets\ClientesWeb\SantaBarbaCba\santabarba-logo.png

- **Web institucional / consultoría**  
  https://vinewatchconsulting.vercel.app/  
  → Presentación profesional de servicios con foco en claridad y posicionamiento.
logo: D:\Developer\2Consulting\ajconsulting-landings\main\assets\ClientesWeb\VineWatch\vinewatch-logo.png

- **Plataforma con dashboard y datos**  
  https://skypulse-ar.vercel.app/dashboard  
  → Web con visualización técnica, métricas y lectura analítica.
logo: D:\Developer\2Consulting\ajconsulting-landings\main\assets\ClientesWeb\SkyPulse-ar\skypulsear-logo.png
- **Web educativa / divulgación técnica**  
  https://aerometarg.vercel.app/  
  → Sitio de contenido especializado con estructura clara y autoridad temática.
logo: D:\Developer\2Consulting\ajconsulting-landings\main\assets\ClientesWeb\aerometarg\aeromet-logo.png

- **Web de sistema operativo / solución digital**  
  https://fenixcba.vercel.app/  
  → Plataforma con lógica funcional integrada al frontend.
logo: D:\Developer\2Consulting\ajconsulting-landings\main\assets\ClientesWeb\fenixcba\Fenix-logo.png

Estos ejemplos no se presentan como portfolio estético, sino como **casos de aplicación real según necesidad de negocio**. Son landings completos y funcionales. desplegadas y funcionales en producción con Vercel.

---

### Para quién es esta solución

- Negocios que necesitan presencia digital clara y profesional
- Proyectos que requieren algo más que una landing genérica
- Equipos que buscan una web que no se vuelva un problema a los 6 meses
- Casos donde la web debe integrarse con procesos reales

---

### Qué incluye (base)

- Definición de objetivo del sitio
- Arquitectura de páginas y flujos
- Diseño UX/UI funcional
- Desarrollo frontend optimizado
- Despliegue productivo
- Base preparada para evolución futura

---

### CTA recomendado

**Iniciar proyecto web**  
o  
**Consultar por un sitio adaptado a mi negocio**

(Regla: un solo CTA visible por vista)

---

# SISTEMA DE PÁGINAS (ESTRUCTURA)

## Tipos de página obligatorios

### Página de inicio

**Objetivo principal:** Generar interés y comprensión inmediata de la oferta

**Contenido:**
* Propuesta de valor clara
* Servicios principales
* Casos o ejemplos implícitos

**CTA esperado:** Contacto / Brief / Inicio de conversación comercial

---

### Página de solución (template reutilizable)

**Objetivo principal:** Explicar una solución específica y su valor de negocio

**Contenido:**
* Problema del cliente
* Solución propuesta
* Qué incluye
* Para quién es

**CTA esperado:** Solicitar información / Agendar consulta / Iniciar proyecto

---

### Página de soluciones complejas

**Objetivo principal:** Presentar sistemas con lógica como soluciones listas para negocio

**Contenido:**
* Enfoque en procesos y resultados
* Casos de uso
* Diferenciadores

**CTA esperado:** Consulta personalizada / Demo / Presupuesto

---

### Página de contacto / inicio de proyecto

**Objetivo principal:** Filtrar consultas y capturar información relevante

**Contenido:**
* Formulario simple
* Expectativas claras
* Filtro de consultas

**CTA esperado:** Envío de formulario / Confirmación de recepción

---

# AUDITORÍA TÉCNICA TRANSVERSAL

## 🧱 Arquitectura y Estructura

- [x] 🔴 Separación clara frontend / backend - **API en /api, frontend estático, separación clara**
- [x] 🔴 No hay lógica crítica en el cliente - **Validación en backend, credenciales en servidor**
- [x] 🟡 Uso consistente de entornos (dev / prod) - **process.env.NODE_ENV usado para logs y errores**
- [x] 🔴 Variables sensibles fuera del código - **Todas en process.env, no hardcodeadas**
- [x] 🟡 Estructura de carpetas coherente y escalable - **api/, css/, js/, assets/ organizados**
- [x] 🟢 Componentes con responsabilidad única - **Archivos separados por función (main.js, glow-menu.js, etc.)**
- [x] 🟡 Hooks y estado correctamente encapsulados - **Funciones modulares, sin estado global innecesario**

---

## 🔐 Seguridad

- [x] 🔴 No hay claves expuestas en frontend - **Verificado: todas las variables sensibles en process.env**
- [x] 🔴 Validación de inputs en backend - **Sanitización, validación de formato, límites de longitud implementados**
- [x] 🔴 Manejo correcto de errores (sin leaks) - **Detalles de error solo en desarrollo, mensajes genéricos en producción**
- [ ] 🟡 Rate limiting en endpoints críticos - **Pendiente: implementar rate limiting en Vercel**
- [x] 🔴 Autenticación consistente - **Variables de entorno para credenciales Gmail**
- [x] 🔴 Estados no confiables tratados como hostiles - **Sanitización de todos los inputs, validación de formato**

---

## ⚙️ Backend y Datos

- [x] 🟡 Endpoints documentados - **Comentarios en código, estructura clara**
- [x] 🔴 Manejo explícito de errores HTTP - **Códigos de estado específicos (400, 401, 500, 503, 504)**
- [x] 🔴 Datos validados antes de persistir - **Validación y sanitización antes de enviar email**
- [x] 🟡 Queries optimizadas - **N/A: No hay queries, solo envío de email**
- [x] 🟡 No hay llamadas redundantes - **Una sola llamada al endpoint por envío**
- [x] 🟢 Estrategia clara de caching o justificación de ausencia - **No aplica: endpoint de envío no cacheable**

---

## 📡 APIs y Fuentes Externas

- [ ] 🟡 Manejo de timeouts
- [ ] 🟡 Retry logic definido
- [ ] 🟡 Fallback ante fallo de proveedor
- [ ] 🟢 Logs claros de error externo
- [ ] 🟢 Versionado de endpoints externos controlado

---

## 📊 Observabilidad

- [x] 🟡 Logs estructurados - **Logs con contexto claro, códigos de error, timestamps**
- [x] 🔴 Errores críticos identificables - **Códigos de error específicos (EAUTH, ECONNECTION, ETIMEDOUT)**
- [x] 🟡 Métricas mínimas definidas - **Vercel Analytics configurado y operativo**
- [ ] 🟡 Alertas para caídas funcionales - **Pendiente: configurar alertas en Vercel**
- [x] 🟢 Separación logs dev / prod - **Logs detallados solo en desarrollo, genéricos en producción**

---

# BUILD Y DEPLOY

## 🏗️ Tipo de Build

- [x] SPA
- [x] Build estático
- [x] Renderizado completamente en cliente

**Resultado:** Build estático tipo SPA

---

## ☁️ Modelo de Ejecución

- [x] Serverless: **Sí**

**Resultado:** Sí, serverless

---

## 🚀 Plataforma de Despliegue

- [x] Plataforma objetivo: **Vercel**
- [x] Rollback posible - **Vercel permite rollback a deployments anteriores**
- [x] Variables de entorno configuradas en plataforma - **Variables configuradas en Vercel Dashboard**

---

## 📌 Implicancias Técnicas

- [x] Backend desacoplado - **API en /api separada del frontend estático**
- [x] Cold starts aceptables - **Serverless functions de Vercel con cold starts < 1s**
- [x] Dependencia del proveedor conocida y aceptada - **Vercel como plataforma, documentado**

---

# RESPONSIVIDAD — FEATURES Y FIXES

## 🧱 Layout

- [x] 🔴 Mobile-first real - **Verificado: overflow-x: hidden, breakpoints mobile-first**
- [x] 🔴 Sin anchos fijos críticos - **Variables --max-width-* implementadas**
- [x] 🔴 No existe scroll horizontal - **overflow-x: hidden en body**
- [x] 🟡 Jerarquía visual clara en mobile - **Tipografía optimizada: section-title 1.75rem, line-height ajustado, espaciado mejorado**
- [x] 🟡 Breakpoints coherentes - **Definidos: 320-360px, 375-414px, 768px, 1024px, ≥1280px**

---

## 🧭 Navegación

- [x] 🔴 Menú colapsable usable - **Implementado con ARIA labels, aria-expanded, cierre con ESC, área táctil 44x44px**
- [x] 🔴 Área táctil correcta - **Botones y enlaces con mínimo 44x44px en mobile**
- [x] 🟡 Estado activo visible - **Indicador visual implementado: clase .active con fondo verde y línea inferior, actualización automática al scroll**
- [x] 🔴 Navegación crítica accesible en mobile - **Menú accesible por teclado, ARIA labels completos**
- [x] 🟡 Sin opciones ocultas sin alternativa - **Todas las opciones accesibles en menú móvil**

---

## 📊 Tablas y Gráficos

- [ ] Tablas adaptadas a mobile
- [ ] Gráficos reescalables
- [ ] Leyendas legibles
- [ ] No saturación visual
- [ ] Datos clave visibles sin zoom

---

## 🧩 Formularios y Acciones

- [x] 🔴 Inputs full-width en mobile - **Formulario con inputs full-width implementado**
- [x] 🔴 Labels visibles - **Placeholders y ARIA labels en todos los inputs**
- [x] 🔴 Errores claros - **Validación en tiempo real con mensajes de error visibles**
- [x] 🔴 Sin layouts en columnas - **Formulario en columna única**
- [x] 🟡 UX usable con teclado mobile - **Navegación por teclado funcional**
- [x] 🔴 Acciones primarias claramente destacadas - **Botón de envío destacado con gradiente**

---

## 🚀 Performance Mobile

- [x] 🟡 Assets adaptativos - **srcset implementado en logo hero (1x y 2x)**
- [x] 🔴 JS no bloqueante - **Scripts con defer implementados**
- [x] 🔴 LCP aceptable - **Logo con fetchpriority="high" y preload, optimizado**
- [x] 🟡 Lazy loading aplicado - **loading="lazy" en imágenes no críticas**
- [x] 🟡 No render innecesario - **Intersection Observer con unobserve para evitar re-renders**

---

# DOMINIO OPERATIVO (INFORMACIÓN CRÍTICA)

## 🎯 UX de Alta Prioridad

- [ ] Información crítica visible primero
- [ ] Alertas destacadas
- [ ] No hay ruido visual
- [ ] Lectura rápida posible
- [ ] Uso bajo estrés considerado

---

## 📈 Features — Estado

### Implementadas
- [ ] Visualización principal
- [ ] Mapas / gráficos operativos
- [ ] Sistema de alertas
- [ ] Dashboard técnico

### Pendientes o Refinables
- [ ] Priorización dinámica
- [ ] Historial de eventos
- [ ] Exportación de datos
- [ ] Modo operación rápida
- [ ] Configuración por perfil

---

## 🛠️ Fixes Operativos

- [ ] Claridad en labels técnicos
- [ ] Reducción de densidad visual
- [ ] Mejora de contraste
- [ ] Optimización de render pesado
- [ ] Consistencia visual

---

# DOMINIO ANALÍTICO (LECTURA Y DECISIÓN)

## 📊 UX Analítica

- [ ] Lectura progresiva de datos
- [ ] Filtros comprensibles
- [ ] No sobrecarga visual
- [ ] Contexto visible
- [ ] Comparaciones claras

---

## 📈 Features Analíticas

### Implementadas
- [ ] Dashboard principal
- [ ] Métricas clave
- [ ] Filtros básicos
- [ ] Navegación funcional

### Pendientes o Refinables
- [ ] Drill-down avanzado
- [ ] Exportación
- [ ] Configuración por usuario
- [ ] Alertas configurables
- [ ] Vistas guardadas

---

## 🛠️ Fixes Analíticos

- [ ] Claridad de ejes y escalas
- [ ] Mejor jerarquía visual
- [ ] Optimización mobile
- [ ] Reducción de render pesado
- [ ] Feedback visual más claro

---

# ARQUITECTURA UX / UI — FRONTEND

## 🎨 Objetivo de la Capa UX/UI

Definir una arquitectura UX/UI clara, mantenible y escalable para una web de servicios profesionales ya desplegada. El foco está en **optimizar conversión, claridad comercial y consistencia visual**, aplicando mejoras incrementales sin romper el código existente ni alterar comportamientos actuales.

Este documento sirve como **guía operativa para agentes, developers y colaboradores**, no como pieza teórica.

**Esta capa no define diseño estético puntual, define reglas, límites y responsabilidades.**

---

## 📐 Principios Rectores

### UX

- Claridad antes que estética
- Menor carga cognitiva
- Jerarquía visual explícita
- Feedback inmediato ante interacción
- Animaciones solo si aportan comprensión

**Checklist:**
- [x] 🔴 Claridad sobre estética aplicada consistentemente - **Diseño limpio, información clara, sin sobre-diseño**
- [x] 🔴 Carga cognitiva minimizada (información dosificada) - **Secciones claras, párrafos cortos, bullets donde aplica**
- [x] 🔴 Jerarquía visual explícita y predecible - **Sistema tipográfico, espaciado consistente, contraste adecuado**
- [x] 🔴 Feedback inmediato en todas las interacciones - **Estados de botones, validación en tiempo real, animaciones sutiles**
- [x] 🟡 Animaciones con propósito claro - **Scroll reveal, hover effects, transiciones breves**

### UI

- Consistencia visual transversal
- Componentes reutilizables
- Diseño sobrio, comercial y profesional
- Evitar sobre-diseño y efectos decorativos

**Checklist:**
- [x] 🔴 Consistencia visual transversal (colores, tipografía, espaciado) - **Variables CSS, sistema de espaciado, tipografía consistente**
- [x] 🔴 Componentes reutilizables documentados - **Cards, botones, secciones reutilizables, documentado en design-tokens.md**
- [x] 🔴 Diseño sobrio y profesional aplicado - **Colores corporativos, tipografía clara, sin efectos distractivos**
- [x] 🟡 Sin sobre-diseño ni efectos decorativos innecesarios - **Animaciones sutiles, efectos con propósito**

### Técnicos

- Cambios incrementales (non-breaking)
- Respeto por estructura DOM existente
- CSS antes que JS
- JS solo para interacción puntual
- Todo componente nuevo debe ser desacoplable

**Checklist:**
- [x] 🔴 Cambios incrementales sin breaking changes - **Todos los cambios preservan funcionalidad existente**
- [x] 🔴 Estructura DOM existente respetada - **IDs y clases mantenidos, estructura HTML preservada**
- [x] 🔴 CSS como primera opción, JS solo cuando necesario - **Estilos en CSS, JS solo para interacción (menú, formulario)**
- [x] 🔴 Componentes nuevos desacoplables y reutilizables - **Scroll reveal, validación, componentes modulares**

---

## 🧱 Stack Base de Frontend

### Tecnologías

La arquitectura contempla explícitamente el uso de:

- **HTML**: Estructura semántica clara y accesible.
- **CSS**: Sistema de estilos consistente, reusable y predecible (Flexbox / Grid).
- **JavaScript**: Lógica de interacción, estado UI y comportamiento (ES6+).
- **React**: Composición de componentes, estado, render dinámico y reutilización. Aplicar mejoras UX/UI incrementales mediante componentes React aislados y animaciones controladas por scroll, priorizando claridad visual, bajo costo cognitivo y sin introducir breaking changes ni dependencias innecesarias.

### Lineamientos Técnicos

- Componentes aislados
- Estilos scopeados
- Sin CSS reset global
- Sin dependencias innecesarias
- Compatibilidad con reduced-motion

**Regla crítica:** Si algún módulo no utiliza React, debe respetar igualmente las reglas de componentes, jerarquía visual y separación de responsabilidades.

**Checklist:**
- [x] 🔴 Componentes aislados y desacoplables - **Archivos JS modulares, funciones independientes**
- [x] 🔴 Estilos scopeados (sin conflictos globales) - **Clases específicas, prefijos consistentes, sin conflictos**
- [x] 🟡 Sin CSS reset global (respetar estilos base) - **Estilos base del navegador respetados**
- [x] 🔴 Sin dependencias innecesarias - **Solo dependencias esenciales (nodemailer, swiper)**
- [x] 🔴 Compatibilidad con `prefers-reduced-motion` - **Implementado completamente, animaciones deshabilitadas si está activo**

---

## 🧩 Arquitectura de Componentes

### Principios obligatorios

- Componentes con responsabilidad única.
- Separación clara entre:
  - **Presentación (UI)**
  - **Lógica (estado / efectos)**
- Props explícitas y predecibles.
- Reutilización antes que duplicación.

### Tipos de Componentes

**Estructurales**
- Layout
- Header
- Footer
- SectionWrapper

**Comerciales**
- Hero
- ServicesGrid
- ServiceCard
- CTASection

**UX/UI**
- Button
- Badge
- Card
- Divider

**Interacción**
- ScrollReveal
- HoverFeedback
- StepIndicator

**Checklist de implementación:**
- [x] 🔴 Componentes base documentados y reutilizables - **Cards, botones, secciones reutilizables**
- [x] 🔴 Separación clara presentación/lógica - **CSS para estilos, JS para comportamiento**
- [x] 🟡 Sistema de props consistente - **N/A: HTML/CSS/JS vanilla, no React props**
- [x] 🟡 Componentes de layout estandarizados - **Section-card, content-section, features-grid estandarizados**
- [x] 🟡 Componentes comerciales implementados - **Hero, ServicesGrid (swiper), CTASection, ServiceCard**
- [x] 🟡 Componentes de interacción con propósito claro - **ScrollReveal, HoverFeedback, validación en tiempo real**
- [x] 🟢 Biblioteca de componentes documentada - **Documentado en design-tokens.md y refinamiento.md**

---

## 📐 Sistema de Layout y Espaciado

### Reglas obligatorias

- Grid consistente en desktop y mobile.
- Escala de espaciado definida (no valores arbitrarios).
- Anchos máximos controlados.
- Ritmo vertical predecible.

**Regla crítica:** No se aceptan ajustes visuales aislados sin justificar impacto global.

**Checklist de implementación:**
- [x] 🔴 Sistema de grid definido y documentado
- [x] 🔴 Escala de espaciado consistente (ej: 4px, 8px, 16px, 24px, 32px) - **Implementado: --spacing-xs a --spacing-3xl**
- [x] 🔴 Anchos máximos controlados por breakpoint - **Implementado: --max-width-* variables**
- [ ] 🟡 Ritmo vertical predecible entre secciones
- [ ] 🟢 Documentación de sistema de espaciado

---

## 🎯 Arquitectura de UX

### Reglas clave

- Un objetivo por vista.
- Un CTA principal visible.
- Jerarquía visual clara.
- Lectura escaneable.
- Estados visibles (loading, error, éxito).

### La UX prioriza

- Claridad sobre estética.
- Velocidad de comprensión.
- Reducción de fricción.

**Checklist de implementación:**
- [x] 🔴 Objetivo único definido por vista - **Definido en Sistema de Páginas**
- [x] 🔴 CTA principal visible y accesible - **Implementado con ARIA labels**
- [x] 🔴 Jerarquía visual clara (tipografía, espaciado, contraste) - **Sistema de estilos implementado**
- [x] 🟡 Lectura escaneable (bullets, párrafos cortos, whitespace) - **Hero description mejorada, secciones con estructura clara**
- [x] 🔴 Estados visibles (loading, error, éxito) implementados - **Clases .loading, .error, .success agregadas**
- [x] 🟡 Reducción de fricción en flujos críticos - **Validación en tiempo real, mensajes de error claros, formulario simplificado**

---

## 📄 Jerarquía de Página (Home Tipo)

Estructura estándar para página de inicio:

1. **Hero**
   - Propuesta de valor clara
   - CTA primario visible

2. **Servicios**
   - Cards escaneables
   - Diferenciación de tipos de servicio

3. **Metodología / Proceso**
   - Paso a paso
   - Reducción de incertidumbre

4. **Casos / Ejemplos**
   - Validación social o técnica

5. **CTA Final**
   - Acción concreta
   - Lenguaje directo

**Checklist:**
- [x] 🔴 Hero con propuesta de valor y CTA primario - **Implementado con ARIA labels**
- [x] 🔴 Sección de servicios con cards escaneables - **Swiper con cards implementado**
- [x] 🟡 Metodología/proceso explicado claramente - **Sección "Cómo Trabajamos" agregada con 4 pasos**
- [x] 🟡 Casos/ejemplos que validen credibilidad - **Sección "Resultados Comprobados" agregada con 3 casos**
- [x] 🔴 CTA final con acción concreta - **CTA en sección contacto implementado**

---

## 💼 UX Comercial

### Servicios

- Diferenciar visualmente:
  - Servicios personales
  - Servicios colaborativos
- No exponer estructura interna
- Unificar experiencia de contratación

### Conversión

- CTA visibles sin saturar
- Lenguaje orientado a acción
- Eliminar fricción innecesaria

**Checklist:**
- [x] 🔴 Diferenciación visual entre tipos de servicios - **Cards diferenciadas por rubro con iconos y colores**
- [x] 🔴 Estructura interna no expuesta al cliente - **No se menciona ejecución directa/colaborativa en frontend**
- [x] 🔴 Experiencia de contratación unificada - **Un solo formulario de contacto para todos los servicios**
- [x] 🔴 CTAs visibles sin saturación visual - **Un CTA principal por sección, botones destacados pero no saturantes**
- [x] 🔴 Lenguaje orientado a acción - **"Solicitar Demo", "Consultar", verbos de acción en CTAs**
- [x] 🟡 Fricción innecesaria eliminada - **Formulario simplificado, validación en tiempo real, mensajes claros**

---

## 🎨 Sistema de Estilos

### Tokens y variables

- Tokens de color definidos.
- Tipografía con jerarquías claras.
- Contraste suficiente.
- Estados interactivos normalizados (hover, focus, disabled).

**Regla crítica:** No se permite hardcodear estilos críticos sin pasar por el sistema.

**Checklist de implementación:**
- [x] 🔴 Tokens de color en variables CSS (CSS custom properties) - **Implementado en :root**
- [x] 🔴 Sistema tipográfico con jerarquías definidas - **Implementado**
- [x] 🔴 Contraste WCAG AA mínimo (4.5:1 texto normal, 3:1 texto grande) - **Verificado y documentado**
- [x] 🔴 Estados interactivos normalizados (hover, focus, active, disabled) - **Implementado con focus-visible mejorado**
- [x] 🟡 Sistema de sombras y efectos consistente - **Variables --shadow-* implementadas**
- [x] 🟡 Transiciones y animaciones estandarizadas - **Variable --transition implementada**
- [x] 🟢 Documentación de design tokens - **Archivo docs/design-tokens.md creado con todas las variables CSS**

---

## 📱 Responsividad desde Arquitectura

### Enfoque mobile-first

- Breakpoints definidos y limitados.
- Componentes adaptativos, no versiones duplicadas.
- Pruebas en dispositivos reales.

**Breakpoints estándar:**
- 320–360px (móvil pequeño)
- 375–414px (móvil estándar)
- 768px (tablet)
- 1024px (desktop pequeño)
- ≥1280px (desktop)

**Checklist de implementación:**
- [x] 🔴 Enfoque mobile-first aplicado - **Media queries con max-width, estilos base para mobile**
- [x] 🔴 Breakpoints definidos y documentados - **320-360px, 375-414px, 768px, 1024px, ≥1280px documentados**
- [x] 🔴 Componentes adaptativos (no duplicados) - **Mismo componente con estilos responsive, no duplicados**
- [ ] 🟡 Pruebas en dispositivos reales - **Pendiente: validación manual en dispositivos**
- [x] 🟡 Sin scroll horizontal en ningún breakpoint - **overflow-x: hidden en body verificado**
- [x] 🟢 Optimización específica por dispositivo - **Tamaños de fuente, espaciado y área táctil ajustados por breakpoint**

---

## 🎬 Animaciones y Motion

### Principios

- Motion con propósito
- Animaciones breves
- Una sola vez por scroll
- Nada continuo o distractivo

### Patrones Permitidos

- Fade + translate leve
- Scale sutil
- Threshold entre 0.2 y 0.5

### Restricciones

- No parallax global
- No timelines complejas
- No animaciones infinitas

**Checklist:**
- [x] 🔴 Animaciones con propósito claro - **Implementado en botones y transiciones**
- [x] 🔴 Animaciones breves (< 500ms) - **Transiciones de 0.3s-0.5s implementadas**
- [x] 🔴 Una sola vez por scroll (no repetitivas) - **Intersection Observer con unobserve implementado**
- [x] 🔴 Sin animaciones continuas o distractivas - **Respetado en implementación actual**
- [x] 🟡 Threshold entre 0.2 y 0.5 para scroll reveal - **Threshold 0.25 implementado en Intersection Observer**
- [x] 🔴 Compatibilidad con `prefers-reduced-motion` - **Implementado completamente, animaciones deshabilitadas si está activo**

---

## ♿ Accesibilidad

### Requisitos obligatorios

- HTML semántico
- Contraste adecuado
- Focus visible
- Soporte reduced-motion
- Navegación clara

**Checklist:**
- [x] 🔴 HTML semántico aplicado - **Secciones con roles ARIA implementados**
- [x] 🔴 Contraste WCAG AA mínimo (4.5:1 texto normal, 3:1 texto grande) - **Verificado**
- [x] 🔴 Focus visible en todos los elementos interactivos - **Mejorado con focus-visible**
- [x] 🔴 Soporte `prefers-reduced-motion` - **Implementado completamente**
- [x] 🔴 Navegación clara y predecible - **Roles y ARIA labels agregados**
- [x] 🟡 ARIA labels donde sea necesario - **Agregados en botones, secciones, navegación**
- [x] 🟡 Navegación por teclado funcional - **tabindex y roles agregados en swiper buttons**

---

## ⚙️ Performance de Frontend

### Optimizaciones obligatorias

- Componentes livianos.
- Lazy loading donde aplique.
- Evitar renders innecesarios.
- Assets optimizados.
- JS crítico minimizado.
- Evitar reflows innecesarios.
- Animaciones GPU-friendly.
- No bloquear render inicial.

**Checklist de implementación:**
- [x] 🔴 Componentes livianos (sin dependencias innecesarias) - **Verificado**
- [x] 🟡 Lazy loading en imágenes no críticas - **Implementado con loading="lazy"**
- [ ] 🟡 Lazy loading en componentes pesados - **Pendiente: revisar componentes React si se agregan**
- [ ] 🔴 Evitar renders innecesarios (memoización donde aplique) - **Pendiente: aplicar si se migra a React**
- [x] 🔴 Assets optimizados (imágenes, fuentes, CSS) - **Imágenes optimizadas, fuentes con font-display: swap**
- [x] 🔴 JS crítico minimizado y deferido - **Scripts con defer implementados**
- [ ] 🟡 Code splitting aplicado - **Pendiente: evaluar si necesario**
- [x] 🔴 Reflows innecesarios evitados - **Transform y opacity usados en animaciones**
- [x] 🟡 Animaciones GPU-friendly (transform, opacity) - **Implementado**
- [x] 🔴 Render inicial no bloqueado - **Scripts deferidos, CSS crítico inline**
- [ ] 🟢 Métricas de performance documentadas

---

## 🧪 Validación UX/UI

### Criterios mínimos

- Coherencia visual entre páginas.
- Consistencia de interacción.
- Accesibilidad básica.
- Experiencia usable sin explicación.

**Checklist de validación:**
- [x] 🔴 Coherencia visual entre todas las páginas - **Mismo sistema de estilos, colores y tipografía en toda la web**
- [x] 🔴 Consistencia de interacción (mismos gestos, mismos resultados) - **Botones con mismo comportamiento, navegación consistente**
- [x] 🔴 Accesibilidad básica (navegación por teclado, ARIA labels) - **ARIA labels completos, navegación por teclado funcional**
- [x] 🔴 Experiencia usable sin explicación - **CTAs claros, navegación intuitiva, formulario simple**
- [ ] 🟡 Pruebas con usuarios reales - **Pendiente: validación con usuarios**
- [x] 🟢 Documentación de patrones de interacción - **Documentado en design-tokens.md y refinamiento.md**

---

## 📋 LINEAMIENTOS UX / UI

### Principios generales

* Estética profesional y limpia.
* Lenguaje directo y comprensible.
* Prioridad a la lectura rápida.
* Componentes reutilizables.
* Un CTA principal por pantalla.

### Reglas de implementación

- [x] 🔴 Estética profesional y limpia aplicada consistentemente - **Diseño sobrio, colores corporativos, sin sobre-diseño**
- [x] 🔴 Lenguaje directo y comprensible (sin jerga técnica innecesaria) - **Lenguaje orientado a negocio, sin tecnicismos**
- [x] 🔴 Prioridad a la lectura rápida (escaneable, jerarquía clara) - **Párrafos cortos, bullets, whitespace adecuado**
- [x] 🔴 Componentes reutilizables documentados - **Documentado en design-tokens.md**
- [x] 🔴 Un CTA principal por pantalla (sin competencia visual) - **Un CTA principal por sección, botones secundarios menos destacados**

---

## ⚖️ Reglas de Oro (No Negociables)

**Estas reglas son absolutas y no admiten excepciones:**

- 🔴 No romper código existente
- 🔴 No cambiar naming actual
- 🔴 No introducir dependencias sin justificar
- 🔴 No alterar UX funcional
- 🔴 Todo cambio debe tener justificación UX o comercial

**Checklist de validación:**
- [ ] 🔴 Código existente funcional después del cambio
- [ ] 🔴 Naming actual respetado
- [ ] 🔴 Dependencias nuevas justificadas
- [ ] 🔴 UX funcional no alterada
- [ ] 🔴 Justificación UX o comercial documentada

---

## 🔄 Flujo de Trabajo con Agentes

Proceso estándar para mejoras UX/UI:

1. **Auditoría UX/UI**
   - Identificar oportunidades
   - Documentar estado actual

2. **Propuesta de mejoras (opciones)**
   - Múltiples alternativas
   - Impacto estimado

3. **Justificación técnica y UX**
   - Por qué esta mejora
   - Qué problema resuelve

4. **Selección manual**
   - Decisión humana
   - Priorización clara

5. **Implementación incremental**
   - Cambios pequeños
   - Validación continua

**Checklist:**
- [x] 🟡 Auditoría UX/UI completada - **Documentada en refinamiento.md**
- [x] 🟡 Propuestas de mejoras documentadas - **Plan de acción crítico creado**
- [x] 🟡 Justificación técnica y UX clara - **Cada mejora justificada en documentación**
- [x] 🟡 Selección manual realizada - **Usuario selecciona mejoras a implementar**
- [x] 🔴 Implementación incremental validada - **Todos los cambios validados sin breaking changes**

---

## ✅ Criterio de Aceptación

Una mejora se acepta **solo si** cumple todos estos criterios:

- Aporta claridad
- Mejora comprensión del servicio
- No aumenta complejidad
- No rompe comportamiento existente

**Checklist de aceptación:**
- [x] 🔴 Aporta claridad verificable - **Secciones de metodología y casos mejoran comprensión**
- [x] 🔴 Mejora comprensión del servicio - **Estructura clara, CTAs visibles, lenguaje orientado a acción**
- [x] 🔴 No aumenta complejidad técnica - **Código modular, sin dependencias innecesarias**
- [x] 🔴 No rompe comportamiento existente - **Cambios incrementales, funcionalidad preservada**

---

# TESTING Y VALIDACIÓN FINAL

## 🧪 Breakpoints

- [x] 320–360px - **Estilos específicos implementados (@media max-width: 320px)**
- [x] 375–414px - **Estilos específicos implementados (@media max-width: 480px)**
- [x] 768px - **Media query principal implementada (@media max-width: 768px)**
- [x] 1024px - **Media query implementada (@media max-width: 1024px)**
- [x] ≥1280px - **Estilos desktop implementados (estilos base)**

---

## ✅ Criterios de Aceptación

- [x] Funcional sin zoom - **Área táctil 44x44px, tipografía legible, espaciado adecuado**
- [x] Usable con una mano - **Botones accesibles, menú colapsable, navegación simple**
- [x] No hay info inaccesible - **Toda la información accesible, sin contenido oculto**
- [x] Sin regresiones desktop - **Funcionalidad desktop preservada, mejoras incrementales**
- [x] Diseño intencional - **Cada elemento con propósito claro, sin decoración innecesaria**
- [x] Performance estable - **Lazy loading, scripts defer, optimizaciones implementadas**

---

## 📌 Cierre

**Resultado final:**  
- [ ] Aprobado  
- [ ] Requiere fixes  
- [ ] Revisión crítica  

**Observaciones:**  
URL: https://ajconsultingitwebv2.vercel.app/

---

**Nota estratégica**

La arquitectura prioriza conversión y claridad comercial.
La activación de una figura personal queda habilitada a futuro sin cambios estructurales.

---

**Documento vivo**

Este documento se ajusta por iteración, no por moda.  
Las mejoras se integran basándose en resultados reales y necesidades operativas, manteniendo siempre el foco en conversión comercial y claridad técnica.