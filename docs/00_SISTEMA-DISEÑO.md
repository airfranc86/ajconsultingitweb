# Sistema de Diseño - A&J Consulting IT
**Versión:** 2.0  
**Última actualización:** 06/01/2026  
**Estado:** Activo - Post-migración React

---

## 📋 Índice

1. [Design Tokens](#design-tokens)
2. [Sistema de Espaciado](#sistema-de-espaciado)
3. [Tipografía](#tipografía)
4. [Componentes](#componentes)
5. [Responsividad](#responsividad)
6. [Animaciones](#animaciones)
7. [Accesibilidad](#accesibilidad)
8. [Guía de Uso](#guía-de-uso)

---

## 🎨 Design Tokens

### Variables CSS (CSS Custom Properties)

Todas las variables están definidas en `src/styles/globals.css` y son accesibles globalmente.

#### Colores Principales
```css
--primary-color: #000000;        /* Negro principal */
--primary-hover: #333333;        /* Negro para hover */
--secondary-color: #27ae60;      /* Verde principal */
--accent-color: #2ecc71;         /* Verde claro accent */
--dark-bg: #000000;              /* Fondo oscuro */
```

#### Colores de Texto
```css
--text-dark: #000000;            /* Texto negro */
--text-light: #ffffff;           /* Texto blanco */
--text-muted: #666666;           /* Texto gris (WCAG AA: 4.5:1) */
```

#### Fondos y Efectos
```css
--card-bg: rgba(255, 255, 255, 0.95);  /* Fondo tarjetas */
--shadow-light: 0 4px 20px rgba(0, 0, 0, 0.1);
--shadow-medium: 0 8px 32px rgba(0, 0, 0, 0.15);
--border-radius: 16px;           /* Radio de bordes estándar */
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

#### Focus y Accesibilidad
```css
--focus-outline: 3px solid var(--secondary-color);
--focus-outline-offset: 2px;
```

**Uso en CSS Modules:**
```css
/* Las variables son globales, accesibles directamente */
.component {
  color: var(--text-dark);
  background: var(--card-bg);
  border-radius: var(--border-radius);
}
```

---

## 📐 Sistema de Espaciado

Escala de espaciado definida (no valores arbitrarios):

```css
--spacing-xs: 4px;      /* Espaciado extra pequeño */
--spacing-sm: 8px;      /* Espaciado pequeño */
--spacing-md: 16px;     /* Espaciado medio */
--spacing-lg: 24px;     /* Espaciado grande */
--spacing-xl: 32px;     /* Espaciado extra grande */
--spacing-2xl: 48px;    /* Espaciado 2x grande */
--spacing-3xl: 64px;    /* Espaciado 3x grande */
```

### Guía de Uso

- **xs (4px)**: Espaciado interno mínimo, gaps muy pequeños
- **sm (8px)**: Espaciado entre elementos relacionados
- **md (16px)**: Espaciado estándar entre elementos
- **lg (24px)**: Espaciado entre secciones relacionadas
- **xl (32px)**: Espaciado entre secciones principales
- **2xl (48px)**: Espaciado grande entre bloques
- **3xl (64px)**: Espaciado máximo entre secciones

### Ejemplo
```css
.card {
  padding: var(--spacing-md);        /* 16px */
  margin-bottom: var(--spacing-lg);  /* 24px */
  gap: var(--spacing-sm);            /* 8px */
}
```

---

## 📏 Anchos Máximos por Breakpoint

```css
--max-width-mobile: 100%;        /* Móvil: sin restricción */
--max-width-tablet: 768px;       /* Tablet */
--max-width-desktop: 1200px;     /* Desktop estándar */
--max-width-large: 1400px;       /* Desktop grande */
```

### Aplicación

- Contenedores principales usan `--max-width-desktop`
- Cards y componentes usan el ancho máximo según breakpoint
- Secciones full-width no aplican restricción

---

## 🔤 Tipografía

### Fuentes

- **Principal**: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
- **Secundaria**: 'Poppins' (para títulos destacados)

### Jerarquías

- **H1**: Tamaño grande, peso 800 (logo-text)
- **H2**: Tamaño mediano-grande, peso 700 (section-title)
- **H3**: Tamaño mediano, peso 600 (feature-title)
- **Body**: Tamaño base 1rem, peso 400, line-height 1.7

### Uso Responsivo

Usar `clamp()` para tipografía fluida:
```css
.title {
  font-size: clamp(2rem, 4vw, 2.5rem);
}
```

---

## 🧩 Componentes

### Componentes Estructurales

#### Header
- **Ubicación**: `src/components/layout/Header.tsx`
- **Estilos**: `src/components/layout/Header.module.css`
- **Características**: Fixed position, glass effect, navegación responsive

#### Footer
- **Ubicación**: `src/components/layout/Footer.tsx`
- **Estilos**: `src/components/layout/Footer.module.css`
- **Características**: Información de contacto, logo, copyright

### Componentes de Sección

#### HeroSection
- **Ubicación**: `src/components/sections/HeroSection.tsx`
- **Estilos**: `src/components/sections/HeroSection.module.css`
- **Características**: Full viewport height, logo animado, typing animation

#### MethodologySection
- **Ubicación**: `src/components/sections/MethodologySection.tsx`
- **Estilos**: `src/components/sections/MethodologySection.module.css`
- **Características**: Grid de features, cards con iconos

#### ContactSection
- **Ubicación**: `src/components/sections/ContactSection.tsx`
- **Estilos**: `src/components/sections/ContactSection.module.css`
- **Características**: Formulario de contacto, links sociales

### Componentes UI

#### Button
- **Ubicación**: `src/components/ui/Button.tsx`
- **Estilos**: `src/components/ui/Button.module.css`
- **Variantes**: primary, secondary, outline

#### Card
- **Ubicación**: `src/components/ui/Card.tsx`
- **Estilos**: `src/components/ui/Card.module.css`
- **Uso**: Contenedor genérico con glass effect

#### FeatureCard
- **Ubicación**: `src/components/ui/FeatureCard.tsx`
- **Estilos**: `src/components/ui/FeatureCard.module.css`
- **Uso**: Cards de características con iconos

#### Modal
- **Ubicación**: `src/components/ui/Modal.tsx`
- **Estilos**: `src/components/ui/Modal.module.css`
- **Uso**: Modales accesibles con portal

---

## 📱 Responsividad

### Breakpoints

```css
/* Móvil pequeño */
@media (max-width: 320px) { }

/* Móvil estándar */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop pequeño */
@media (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1280px) { }
```

**Nota:** Actualmente usa `max-width` (desktop-first). Se recomienda migrar a `min-width` (mobile-first) en futuras iteraciones.

### Principios

- **Mobile-first**: Diseñar primero para móvil, luego escalar
- **Fluido**: Usar unidades relativas (%, rem, em, clamp)
- **Sin scroll horizontal**: `overflow-x: hidden` en body
- **Área táctil mínima**: 44x44px en móviles (WCAG)

### Ejemplo Responsivo

```css
.component {
  padding: var(--spacing-md);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .component {
    padding: var(--spacing-sm);
    font-size: 0.9rem;
  }
}
```

---

## 🎬 Animaciones

### Principios

- Motion con propósito
- Animaciones breves (< 500ms)
- Una sola vez por scroll
- Nada continuo o distractivo

### Patrones Permitidos

- Fade + translate leve (20px máximo)
- Scale sutil (1.05 máximo)
- Threshold: 0.25 (entre 0.2 y 0.5)

### Restricciones

- No parallax global
- No timelines complejas
- No animaciones infinitas

### Compatibilidad con Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## ♿ Accesibilidad

### Requisitos Obligatorios

- **HTML semántico**: Usar elementos semánticos (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **Contraste**: WCAG AA mínimo (4.5:1 texto normal, 3:1 texto grande)
- **Focus visible**: Todos los elementos interactivos deben tener focus visible
- **ARIA labels**: Agregar donde sea necesario para screen readers
- **Navegación por teclado**: Todos los elementos interactivos deben ser accesibles por teclado

### Ejemplo de Accesibilidad

```tsx
<button
  onClick={handleClick}
  aria-label="Abrir menú de navegación"
  aria-expanded={isOpen}
  className={styles.button}
>
  <iconify-icon icon="mdi:menu" aria-hidden="true" />
</button>
```

---

## 📋 Guía de Uso

### Crear un Nuevo Componente

1. **Crear archivo TSX**: `src/components/[tipo]/[Nombre].tsx`
2. **Crear CSS Module**: `src/components/[tipo]/[Nombre].module.css`
3. **Usar variables CSS**: Siempre usar variables en lugar de valores hardcodeados
4. **Agregar responsividad**: Incluir media queries para todos los breakpoints
5. **Agregar accesibilidad**: ARIA labels, focus visible, navegación por teclado

### Ejemplo de Componente

```tsx
// Component.tsx
import React from 'react';
import styles from './Component.module.css';

interface ComponentProps {
  title: string;
  description?: string;
}

export const Component: React.FC<ComponentProps> = ({ title, description }) => {
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
```

```css
/* Component.module.css */
.component {
  padding: var(--spacing-md);
  background: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
}

.title {
  color: var(--text-dark);
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: var(--spacing-sm);
}

.description {
  color: var(--text-muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .component {
    padding: var(--spacing-sm);
  }
}
```

---

## ✅ Checklist de Implementación

Al crear o modificar componentes, verificar:

- [ ] Usa variables CSS en lugar de valores hardcodeados
- [ ] Usa sistema de espaciado (`--spacing-*`)
- [ ] Es responsive en todos los breakpoints
- [ ] Respeta `prefers-reduced-motion`
- [ ] Tiene focus visible en elementos interactivos
- [ ] Tiene ARIA labels donde sea necesario
- [ ] Es accesible por teclado
- [ ] No causa scroll horizontal
- [ ] Área táctil mínima 44x44px en móviles
- [ ] Contraste de colores cumple WCAG AA

---

**Última actualización:** 06/01/2026  
**Mantenido por:** Equipo de desarrollo A&J Consulting IT

