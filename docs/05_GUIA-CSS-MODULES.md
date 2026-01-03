# Guía de CSS Modules - A&J Consulting IT
**Versión:** 1.0  
**Última actualización:** 06/01/2026  
**Estado:** Activo - Post-migración React

---

## 📋 Índice

1. [Introducción](#introducción)
2. [Estructura de Archivos](#estructura-de-archivos)
3. [Variables CSS Globales](#variables-css-globales)
4. [Estilos Compartidos](#estilos-compartidos)
5. [Media Queries](#media-queries)
6. [Accesibilidad](#accesibilidad)
7. [Mejores Prácticas](#mejores-prácticas)
8. [Ejemplos](#ejemplos)

---

## 🎯 Introducción

Este proyecto usa **CSS Modules** para estilos de componentes React. Los CSS Modules proporcionan:

- **Scoping automático**: Los estilos están limitados al componente
- **Type safety**: TypeScript reconoce las clases CSS
- **Sin conflictos**: No hay colisiones de nombres de clases
- **Optimización**: Vite optimiza y minifica automáticamente

---

## 📁 Estructura de Archivos

```
src/
├── styles/
│   ├── globals.css              # Variables CSS globales
│   └── components/
│       └── section-common.module.css  # Estilos compartidos
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Header.module.css    # Estilos del Header
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   └── HeroSection.module.css
│   └── ui/
│       ├── Button.tsx
│       └── Button.module.css
```

**Regla:** Cada componente tiene su propio archivo `.module.css` en la misma carpeta.

---

## 🎨 Variables CSS Globales

Todas las variables están definidas en `src/styles/globals.css` y son accesibles globalmente.

### Uso en CSS Modules

```css
/* No necesitas importar, las variables son globales */
.component {
  color: var(--text-dark);
  padding: var(--spacing-md);
  background: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
  transition: var(--transition);
}
```

### Variables Disponibles

#### Colores
- `--primary-color`: #000000
- `--secondary-color`: #27ae60
- `--accent-color`: #2ecc71
- `--text-dark`: #000000
- `--text-light`: #ffffff
- `--text-muted`: #666666
- `--card-bg`: rgba(255, 255, 255, 0.95)

#### Espaciado
- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-2xl`: 48px
- `--spacing-3xl`: 64px

#### Efectos
- `--shadow-light`: 0 4px 20px rgba(0, 0, 0, 0.1)
- `--shadow-medium`: 0 8px 32px rgba(0, 0, 0, 0.15)
- `--border-radius`: 16px
- `--transition`: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

#### Accesibilidad
- `--focus-outline`: 3px solid var(--secondary-color)
- `--focus-outline-offset`: 2px

---

## 🔗 Estilos Compartidos

Para estilos que se repiten en múltiples componentes, usar `src/styles/components/section-common.module.css`.

### Ejemplo: Secciones Comunes

```css
/* section-common.module.css */
.sectionCard {
  max-width: var(--max-width-desktop);
  margin: 0 auto;
  background: var(--card-bg);
  padding: var(--spacing-xl) var(--spacing-md);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
}
```

### Uso en Componentes

```tsx
// MethodologySection.tsx
import sectionStyles from '../../styles/components/section-common.module.css';
import styles from './MethodologySection.module.css';

export const MethodologySection: React.FC = () => {
  return (
    <section className={styles.methodologySection}>
      <div className={sectionStyles.sectionCard}>
        {/* Contenido */}
      </div>
    </section>
  );
};
```

---

## 📱 Media Queries

### Breakpoints Estándar

```css
/* Tablet */
@media (max-width: 1024px) {
  .component {
    /* Estilos para tablet */
  }
}

/* Mobile */
@media (max-width: 768px) {
  .component {
    /* Estilos para mobile */
  }
}

/* Mobile pequeño */
@media (max-width: 480px) {
  .component {
    /* Estilos para mobile pequeño */
  }
}
```

### Prefers Reduced Motion

Siempre respetar la preferencia del usuario:

```css
@media (prefers-reduced-motion: reduce) {
  .component {
    transition: none;
    animation: none;
  }

  .component:hover {
    transform: none;
  }
}
```

---

## ♿ Accesibilidad

### Focus Visible

Todos los elementos interactivos deben tener focus visible:

```css
.button:focus {
  outline: var(--focus-outline);
  outline-offset: var(--focus-outline-offset);
}
```

### Área Táctil Mínima

En móviles, asegurar área táctil mínima de 44x44px:

```css
.button {
  min-width: 44px;
  min-height: 44px;
}

@media (max-width: 768px) {
  .button {
    min-width: 44px;
    min-height: 44px;
  }
}
```

---

## ✅ Mejores Prácticas

### 1. Usar Variables CSS

✅ **Bien:**
```css
.component {
  padding: var(--spacing-md);
  color: var(--text-dark);
}
```

❌ **Mal:**
```css
.component {
  padding: 16px;
  color: #000000;
}
```

### 2. Nombres Descriptivos

✅ **Bien:**
```css
.heroContent { }
.contactCard { }
```

❌ **Mal:**
```css
.content { }
.card { }
```

### 3. Organizar Media Queries

✅ **Bien:**
```css
.component {
  padding: var(--spacing-md);
}

@media (max-width: 768px) {
  .component {
    padding: var(--spacing-sm);
  }
}
```

❌ **Mal:**
```css
.component {
  padding: var(--spacing-md);
}

@media (max-width: 768px) {
  .component {
    padding: var(--spacing-sm);
  }
}

/* Más estilos aquí... */

@media (max-width: 768px) {
  .component {
    /* Más estilos duplicados */
  }
}
```

### 4. Respetar Prefers Reduced Motion

Siempre agregar soporte para `prefers-reduced-motion`:

```css
.component {
  transition: var(--transition);
}

@media (prefers-reduced-motion: reduce) {
  .component {
    transition: none;
  }
}
```

---

## 📝 Ejemplos

### Ejemplo 1: Componente Simple

```tsx
// Button.tsx
import styles from './Button.module.css';

export const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
};
```

```css
/* Button.module.css */
.button {
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: var(--transition);
  min-height: 44px;
}

.button:focus {
  outline: var(--focus-outline);
  outline-offset: var(--focus-outline-offset);
}

@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }
}

@media (max-width: 768px) {
  .button {
    min-width: 44px;
    padding: var(--spacing-sm) var(--spacing-md);
  }
}
```

### Ejemplo 2: Componente con Estilos Compartidos

```tsx
// MethodologySection.tsx
import sectionStyles from '../../styles/components/section-common.module.css';
import styles from './MethodologySection.module.css';

export const MethodologySection: React.FC = () => {
  return (
    <section className={styles.methodologySection}>
      <div className={sectionStyles.sectionCard}>
        <h2 className={sectionStyles.sectionTitle}>Título</h2>
        <p className={sectionStyles.sectionIntro}>Introducción</p>
        <div className={styles.featuresGrid}>
          {/* Contenido específico */}
        </div>
      </div>
    </section>
  );
};
```

---

## 🔍 Checklist de Implementación

Al crear o modificar un CSS Module, verificar:

- [ ] Usa variables CSS en lugar de valores hardcodeados
- [ ] Usa sistema de espaciado (`--spacing-*`)
- [ ] Es responsive en todos los breakpoints
- [ ] Respeta `prefers-reduced-motion`
- [ ] Tiene focus visible en elementos interactivos
- [ ] Área táctil mínima 44x44px en móviles
- [ ] No hay duplicación de estilos (usar estilos compartidos si es necesario)
- [ ] Media queries están organizadas y no duplicadas

---

## 📚 Referencias

- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [Vite CSS Modules](https://vitejs.dev/guide/features.html#css-modules)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Design Tokens](docs/00_SISTEMA-DISEÑO.md)

---

**Última actualización:** 06/01/2026  
**Mantenido por:** Equipo de desarrollo A&J Consulting IT

