# Design Tokens - Sistema de Diseño
**Fecha:** 02/01/2026  
**Proyecto:** A&J Consulting IT - Web de Servicios

---

## 🎨 Variables CSS (CSS Custom Properties)

### Colores

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
--text-muted: #666666;           /* Texto gris (contraste WCAG AA: 4.5:1 sobre blanco) */
```

#### Fondos
```css
--card-bg: rgba(255, 255, 255, 0.95);  /* Fondo tarjetas */
```

### Efectos Visuales

#### Sombras
```css
--shadow-light: 0 4px 20px rgba(0, 0, 0, 0.1);
--shadow-medium: 0 8px 32px rgba(0, 0, 0, 0.15);
```

#### Bordes
```css
--border-radius: 16px;           /* Radio de bordes estándar */
```

#### Transiciones
```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);  /* Transición suave estándar */
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

### Uso Recomendado

- **xs (4px)**: Espaciado interno mínimo, gaps muy pequeños
- **sm (8px)**: Espaciado entre elementos relacionados
- **md (16px)**: Espaciado estándar entre elementos
- **lg (24px)**: Espaciado entre secciones relacionadas
- **xl (32px)**: Espaciado entre secciones principales
- **2xl (48px)**: Espaciado grande entre bloques
- **3xl (64px)**: Espaciado máximo entre secciones

---

## 📏 Anchos Máximos por Breakpoint

```css
--max-width-mobile: 100%;        /* Móvil: sin restricción */
--max-width-tablet: 768px;       /* Tablet */
--max-width-desktop: 1200px;     /* Desktop estándar */
--max-width-large: 1400px;      /* Desktop grande */
```

### Aplicación

- Contenedores principales usan `--max-width-desktop`
- Cards y componentes usan el ancho máximo según breakpoint
- Secciones full-width no aplican restricción

---

## 🎯 Focus y Accesibilidad

```css
--focus-outline: 3px solid var(--secondary-color);
--focus-outline-offset: 2px;
```

### Uso

- Aplicado automáticamente a elementos interactivos con `:focus-visible`
- Color: verde secundario para contraste
- Offset: 2px para separación visual

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

---

## 🎬 Animaciones

### Duración

- **Estándar**: 0.3s (300ms)
- **Scroll reveal**: 0.5s (500ms) - < 500ms como especificado
- **Reduced motion**: 0.01ms (deshabilitado)

### Easing

- **Estándar**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Scroll reveal**: `ease-out`

### Patrones Permitidos

- Fade + translate leve (20px máximo)
- Scale sutil (1.05 máximo)
- Threshold: 0.25 (entre 0.2 y 0.5)

---

## 📱 Breakpoints

```css
/* Móvil pequeño */
@media (max-width: 360px) { }

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

---

## 🎨 Estados de Componentes

### Botones

- **Normal**: Gradiente verde, sombra light
- **Hover**: Transform translateY(-2px), sombra medium
- **Active**: Transform translateY(0), sombra light
- **Disabled**: Opacity 0.6, cursor not-allowed
- **Loading**: Spinner animado, color transparente
- **Error**: Fondo rojo (#e74c3c), animación shake
- **Success**: Fondo verde, check mark

### Área Táctil Mínima

- **Desktop**: min-width: 180px, min-height: 44px
- **Mobile**: min-width: 44px, min-height: 44px (WCAG)

---

## 📋 Guía de Uso

### Ejemplo: Espaciado

```css
.card {
    padding: var(--spacing-md);        /* 16px */
    margin-bottom: var(--spacing-lg);  /* 24px */
    gap: var(--spacing-sm);            /* 8px */
}
```

### Ejemplo: Colores

```css
.button {
    background: var(--secondary-color);
    color: var(--text-light);
}

.button:hover {
    background: var(--accent-color);
}
```

### Ejemplo: Transiciones

```css
.element {
    transition: var(--transition);
}
```

---

## ✅ Checklist de Implementación

- [x] Tokens de color definidos
- [x] Sistema de espaciado implementado
- [x] Anchos máximos por breakpoint
- [x] Focus visible configurado
- [x] Transiciones estandarizadas
- [x] Estados de componentes documentados

---

**Última actualización:** 02/01/2026

