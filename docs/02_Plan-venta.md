# Plan de Implementación - Muestra de Proyectos de Venta
**Fecha:** 02/01/2026  
**Objetivo:** Integrar proyectos de venta como casos de aplicación real según necesidad de negocio  
**Basado en:** `refinamiento.md` sección "Ejemplos de implementación real" (217-368)

---

## 🎯 Objetivo Estratégico

Mostrar los proyectos desarrollados como **casos de aplicación real según necesidad de negocio**, no como portfolio estético. Los proyectos deben comunicar:

- **Diferentes enfoques** según objetivo y dominio
- **Soluciones funcionales** desplegadas en producción
- **Valor de negocio** más que estética
- **Credibilidad** a través de casos reales

---

## 📋 Proyectos a Mostrar

### 1. Web de servicios locales
- **URL:** https://santa-barba-cba.vercel.app/
- **Descripción:** Sitio comercial orientado a contacto directo y presencia local
- **Logo:** `assets/ClientesWeb/SantaBarbaCba/santabarba-logo.png`
- **Enfoque:** Servicios locales, contacto directo

### 2. Web institucional / consultoría
- **URL:** https://vinewatchconsulting.vercel.app/
- **Descripción:** Presentación profesional de servicios con foco en claridad y posicionamiento
- **Logo:** `assets/ClientesWeb/VineWatch/vinewatch-logo.png`
- **Enfoque:** Consultoría, posicionamiento profesional

### 3. Plataforma con dashboard y datos
- **URL:** https://skypulse-ar.vercel.app/dashboard
- **Descripción:** Web con visualización técnica, métricas y lectura analítica
- **Logo:** `assets/ClientesWeb/SkyPulse-ar/skypulsear-logo.png`
- **Enfoque:** Dashboard, visualización de datos, métricas

### 4. Web educativa / divulgación técnica
- **URL:** https://aerometarg.vercel.app/
- **Descripción:** Sitio de contenido especializado con estructura clara y autoridad temática
- **Logo:** `assets/ClientesWeb/aerometarg/aeromet-logo.png`
- **Enfoque:** Contenido especializado, autoridad temática

### 5. Web de sistema operativo / solución digital
- **URL:** https://fenixcba.vercel.app/
- **Descripción:** Plataforma con lógica funcional integrada al frontend
- **Logo:** `assets/ClientesWeb/fenixcba/Fenix-logo.png`
- **Enfoque:** Sistema operativo, lógica funcional

---

## 🎨 Diseño de la Sección

### Ubicación
- **Sección:** Después de "Resultados Comprobados" (casos)
- **Antes de:** Sección de Contacto
- **Nombre sugerido:** "Proyectos de Aplicación Real" o "Soluciones Implementadas"

### Estructura Visual

#### Opción 1: Grid de Cards (Recomendada)
```
┌─────────────────────────────────────────┐
│  Proyectos de Aplicación Real           │
│  Soluciones implementadas según          │
│  necesidad de negocio                   │
├─────────────────────────────────────────┤
│  [Card 1]    [Card 2]    [Card 3]      │
│  [Card 4]    [Card 5]                   │
└─────────────────────────────────────────┘
```

#### Opción 2: Swiper/Carrusel
- Similar a la sección de especialización
- Permite mostrar más proyectos sin saturar
- Navegación por swipe/touch

#### Opción 3: Lista Expandible
- Lista compacta inicial
- Expandir para ver detalles
- Menos espacio visual

**Recomendación:** Opción 1 (Grid) para desktop, adaptado a carrusel en mobile

---

## 📐 Componente Card de Proyecto

### Elementos de cada Card

1. **Logo del Cliente**
   - Tamaño: 80x80px o 100x100px
   - Posición: Superior o lateral
   - Estilo: Fondo blanco/transparente, padding

2. **Título del Proyecto**
   - Nombre del cliente o proyecto
   - Tipografía: `feature-title` o similar
   - Peso: 600-700

3. **Tipo de Solución**
   - Badge o tag indicando tipo
   - Ejemplos: "Servicios Locales", "Consultoría", "Dashboard", "Educativo", "Sistema"
   - Color: Verde secundario o gris

4. **Descripción Breve**
   - 1-2 líneas máximo
   - Enfoque en valor de negocio
   - Ejemplo: "Sitio comercial orientado a contacto directo y presencia local"

5. **Enlace/CTA**
   - Botón "Ver Proyecto" o "Explorar"
   - Link externo con `target="_blank"` y `rel="noopener noreferrer"`
   - Estilo: Botón secundario o enlace con icono

6. **Características Destacadas** (Opcional)
   - 2-3 bullets con características técnicas
   - Ejemplo: "Responsive", "Dashboard integrado", "Optimizado SEO"

---

## 🎯 Contenido por Proyecto

### Estructura de Datos Sugerida

```javascript
const proyectos = [
  {
    id: 'santa-barba',
    nombre: 'Santa Barba CBA',
    tipo: 'Servicios Locales',
    url: 'https://santa-barba-cba.vercel.app/',
    logo: 'assets/ClientesWeb/SantaBarbaCba/santabarba-logo.png',
    descripcion: 'Sitio comercial orientado a contacto directo y presencia local',
    caracteristicas: ['Responsive', 'Formulario de contacto', 'Optimizado SEO'],
    enfoque: 'contacto-directo'
  },
  // ... más proyectos
];
```

---

## 💼 Mensaje Comercial

### Título de Sección
**Opción 1:** "Proyectos de Aplicación Real"  
**Opción 2:** "Soluciones Implementadas"  
**Opción 3:** "Casos de Aplicación según Necesidad de Negocio"

### Introducción
**Texto sugerido:**
> "Estos proyectos representan distintos enfoques de creación web según objetivo y dominio. No se presentan como portfolio estético, sino como **casos de aplicación real según necesidad de negocio**. Son landings completos y funcionales, desplegadas y funcionales en producción con Vercel."

### Enfoque del Mensaje
- ✅ Enfoque en **valor de negocio**
- ✅ Diferentes **tipos de solución**
- ✅ **Funcionalidad** sobre estética
- ✅ **Producción real**, no demos
- ❌ NO mencionar "portfolio"
- ❌ NO enfatizar diseño estético
- ❌ NO comparar proyectos entre sí

---

## 🎨 Diseño Visual

### Colores y Estilos
- **Fondo de cards:** `--card-bg` (blanco con transparencia)
- **Borde:** Sutil, `rgba(39, 174, 96, 0.1)`
- **Hover:** Elevación sutil, sombra ligera
- **Badge tipo:** Verde secundario o gris claro

### Responsividad
- **Desktop:** Grid de 3 columnas
- **Tablet:** Grid de 2 columnas
- **Mobile:** 1 columna o carrusel

### Espaciado
- **Gap entre cards:** `--spacing-lg` (24px)
- **Padding interno:** `--spacing-md` (16px)
- **Margin sección:** `--spacing-3xl` (64px) desktop, `--spacing-xl` (32px) mobile

---

## 🔧 Implementación Técnica

### Opción A: HTML Estático
- Cards hardcodeadas en HTML
- Fácil de mantener si hay pocos proyectos
- Control total sobre estructura

### Opción B: JavaScript Dinámico
- Array de proyectos en JS
- Renderizado dinámico
- Fácil agregar/quitar proyectos
- Más escalable

### Opción C: JSON + Fetch
- Archivo JSON con proyectos
- Fetch al cargar
- Más flexible para actualizaciones

**Recomendación:** Opción B (JavaScript dinámico) - Balance entre flexibilidad y simplicidad

---

## 📱 Consideraciones Mobile

### Área Táctil
- Cards completas clickeables (área mínima 44x44px)
- Botón "Ver Proyecto" con área táctil adecuada

### Carga de Imágenes
- Lazy loading en logos
- `loading="lazy"` en imágenes
- Optimización de logos (WebP si es posible)

### Navegación
- Swipe en carrusel si se usa
- Scroll suave entre proyectos
- Indicadores de posición

---

## ♿ Accesibilidad

### Requisitos
- **ARIA labels:** "Ver proyecto [nombre]"
- **Alt text:** Descripción del logo
- **Focus visible:** En cards y botones
- **Navegación por teclado:** Tab order lógico
- **Screen readers:** Estructura semántica clara

### Ejemplo de HTML
```html
<article class="proyecto-card" aria-label="Proyecto Santa Barba CBA">
  <img src="..." alt="Logo Santa Barba CBA" loading="lazy">
  <h3>Santa Barba CBA</h3>
  <span class="proyecto-tipo">Servicios Locales</span>
  <p>Descripción breve...</p>
  <a href="..." target="_blank" rel="noopener noreferrer" 
     aria-label="Ver proyecto Santa Barba CBA en nueva ventana">
    Ver Proyecto
    <iconify-icon icon="mdi:open-in-new" aria-hidden="true"></iconify-icon>
  </a>
</article>
```

---

## ✅ Checklist de Implementación

### Fase 1: Estructura Base
- [ ] Crear sección HTML con título e introducción
- [ ] Definir estructura de datos de proyectos
- [ ] Crear componente card básico
- [ ] Implementar grid responsive

### Fase 2: Contenido
- [ ] Agregar los 5 proyectos con datos completos
- [ ] Verificar que todos los logos existan y estén optimizados
- [ ] Validar URLs de proyectos
- [ ] Revisar descripciones (enfoque en valor de negocio)

### Fase 3: Estilos
- [ ] Aplicar sistema de diseño (variables CSS)
- [ ] Implementar estados hover/focus
- [ ] Ajustar espaciado según design tokens
- [ ] Verificar contraste y accesibilidad

### Fase 4: Interacción
- [ ] Implementar lazy loading en imágenes
- [ ] Agregar animaciones sutiles (scroll reveal)
- [ ] Verificar navegación por teclado
- [ ] Probar en dispositivos reales

### Fase 5: Validación
- [ ] Verificar que todos los links funcionen
- [ ] Probar en diferentes breakpoints
- [ ] Validar accesibilidad (ARIA, contraste)
- [ ] Revisar performance (lazy loading, optimización)

---

## 🎯 Criterios de Aceptación

La sección se considera completa cuando:

1. ✅ Todos los proyectos están visibles y accesibles
2. ✅ Los logos se cargan correctamente (lazy loading)
3. ✅ Los enlaces funcionan y abren en nueva pestaña
4. ✅ El diseño es responsive en todos los breakpoints
5. ✅ La accesibilidad es correcta (ARIA, teclado, contraste)
6. ✅ El mensaje comercial es claro (valor de negocio, no estética)
7. ✅ La performance es aceptable (no bloquea render)
8. ✅ Las animaciones respetan `prefers-reduced-motion`

---

## 📝 Notas de Diseño

### Principios a Respetar
- **Claridad sobre estética:** Información clara, no decoración
- **Valor de negocio:** Enfoque en solución, no en diseño
- **Consistencia:** Mismo sistema de diseño que el resto del sitio
- **Profesionalismo:** Diseño sobrio, comercial

### Evitar
- ❌ Comparaciones entre proyectos
- ❌ Enfoque en diseño estético
- ❌ Sobre-diseño o efectos decorativos
- ❌ Información técnica innecesaria para el cliente

---

## 🔄 Futuras Mejoras (Opcional)

### Fase 2 (Si se necesita)
- Filtros por tipo de proyecto
- Búsqueda de proyectos
- Más detalles al hacer click (modal)
- Métricas de proyectos (si están disponibles)

### Fase 3 (Si se necesita)
- Integración con CMS para gestionar proyectos
- Admin panel para agregar proyectos
- Categorización avanzada

---

## 📌 Ubicación en el Documento

Esta sección debe integrarse en `refinamiento.md` en la sección:

**"### Ejemplos de implementación real"** (línea ~253)

O crear una nueva sección dedicada después de "Resultados Comprobados" y antes de "Contacto".

---

**Última actualización:** 02/01/2026  
**Estado:** Plan listo para implementación  
**Prioridad:** 🟡 Importante (mejora comercial y credibilidad)

