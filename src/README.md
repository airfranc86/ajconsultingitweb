# A&J Consulting IT - React Components

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/              # Componentes UI base reutilizables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── Modal.tsx
│   │   └── Notification.tsx
│   ├── layout/          # Componentes de layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── GlowMenu.tsx
│   ├── sections/        # Secciones principales
│   │   ├── HeroSection.tsx
│   │   ├── MethodologySection.tsx
│   │   └── ContactSection.tsx
│   └── forms/           # Formularios
│       ├── DemoForm.tsx
│       └── DemoModal.tsx
├── hooks/               # Custom hooks
│   ├── useActiveSection.ts
│   ├── useDemoModal.ts
│   ├── useGlowMenu.ts
│   ├── useScrollReveal.ts
│   ├── useSmoothScroll.ts
│   └── useTypingAnimation.ts
├── styles/              # Estilos globales
│   └── globals.css
└── utils/               # Utilidades
    └── constants.ts
```

## Componentes Principales

### Layout
- **Header**: Navegación fija con detección de sección activa
- **Footer**: Pie de página con información de copyright
- **GlowMenu**: Menú móvil con animaciones

### Secciones
- **HeroSection**: Sección principal con animación typing simplificada
- **MethodologySection**: Grid de pasos del proceso de trabajo
- **ContactSection**: Información de contacto y botón de demo

### UI Base
- **Button**: Botón reutilizable con variantes
- **Card**: Tarjeta base con variantes
- **FeatureCard**: Tarjeta de características
- **Modal**: Modal reutilizable con portal
- **Notification**: Sistema de notificaciones

## Hooks Personalizados

- `useActiveSection`: Detecta la sección activa al hacer scroll
- `useDemoModal`: Maneja el estado del modal de demo
- `useGlowMenu`: Maneja el estado del menú móvil
- `useScrollReveal`: Animaciones al hacer scroll
- `useSmoothScroll`: Scroll suave entre secciones
- `useTypingAnimation`: Animación de typing simplificada

## Code Splitting

Las secciones principales están configuradas con `React.lazy()` para code splitting automático:
- HeroSection
- MethodologySection
- ContactSection

## Compatibilidad

Los componentes React coexisten con el código vanilla existente. Las funciones globales están expuestas para mantener compatibilidad:
- `window.showDemoModal()` - Abre el modal de demo
- `window.closeDemoModal()` - Cierra el modal de demo

