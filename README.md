#  A&J Consulting IT - Business Intelligence para Clínicas

## 📋 Descripción del Proyecto

**A&J Consulting IT** es una empresa especializada en **Business Intelligence para clínicas médicas**. Nuestro sitio web corporativo presenta nuestras soluciones de dashboard de KPIs en tiempo real, análisis predictivo y gestión clínica inteligente.

### 🎯 Propuesta de Valor

Transformamos datos médicos en decisiones estratégicas mediante:
- **Dashboard Inteligente**: Visualización avanzada de KPIs clínicos
- **Análisis Predictivo**: IA para predecir tendencias y optimizar rentabilidad
- **Seguridad Empresarial**: Encriptación bancaria y cumplimiento normativo

## 🚀 Características Principales

### ✨ Diseño y UX
- **Diseño moderno** con efectos de partículas animadas (marca distintiva de la web)
- **Partículas activas** en todos los dispositivos (desktop y móvil)
- **Responsive design** optimizado para todos los dispositivos
- **Navegación intuitiva** con scroll suave
- **Animaciones fluidas** y transiciones elegantes
- **Header minimalista**: Solo texto, sin iconos

### 📱 Responsividad
- **4 breakpoints** optimizados: 1024px, 768px, 480px, 320px
- **Mobile-first** approach
- **Touch-friendly** para dispositivos táctiles
- **Performance optimizado** en móviles
- **Optimización específica para Android** (loader mejorado, sin cuelgues)
- **Header adaptativo**: Icono oculto en todos los tamaños, solo texto visible
- **Swiper con lazy load**: Mejora performance en móvil

### 🔍 SEO Optimizado
- **Meta tags** completos y optimizados
- **Schema.org** structured data
- **Open Graph** para redes sociales
- **Twitter Cards** configuradas
- **Keywords** relevantes para el sector salud
- **Canonical URL** configurada
- **URLs optimizadas** para mejor indexación

### ⚡ Performance Optimizado
- **Lighthouse Score Desktop**: Performance 100, Accessibility 96, Best Practices 96, SEO 92
- **Lighthouse Score Móvil**: Performance 60 (en mejora continua)
- **Imágenes optimizadas**: Redimensionadas y comprimidas manteniendo calidad PNG
  - Footer: logo-22x22.png (1.16 KB, ahorro 99.17%)
  - Hero: logo-200x200.png (27.16 KB, ahorro 80.47%)
- **Lazy loading** en imágenes no críticas
- **Preload** de recursos críticos
- **CSS diferido** para recursos no críticos (rubros.css)
- **Google Fonts optimizado**: Reducción de 3 a 2 fuentes (Inter, Poppins)
- **Swiper lazy load**: Carga solo cuando se necesita (Intersection Observer)
- **Ahorro total**: ~250 KB en carga inicial

### 📊 Analytics Integrado
- **Vercel Analytics** para métricas de uso
- **Speed Insights** para monitoreo de rendimiento
- **Event tracking** personalizado
- **Google Analytics** preparado (opcional)

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados con variables CSS
- **JavaScript ES6+** - Interactividad y animaciones
- **Particles.js** - Efectos visuales de fondo (marca distintiva)
- **Swiper.js** - Carrusel con efecto Flip (lazy load)
- **Iconify** - Iconografía moderna
- **Font Awesome** - Iconografía adicional
- **Google Fonts** - Tipografía Inter y Poppins

### Herramientas de Desarrollo
- **Vercel** - Hosting y despliegue
- **Git** - Control de versiones
- **Responsive Design** - Mobile-first approach
- **Python 3.12+** - Scripts de optimización
- **Pillow (PIL)** - Procesamiento de imágenes

## 📱 Secciones del Sitio

### 🏠 **Hero Section**
- Logo animado con efecto flotante (200x200px optimizado)
- Título principal y propuesta de valor
- Botones de llamada a la acción
- Efecto de partículas de fondo (marca distintiva, activo en todos los dispositivos)

### 💼 **Business Intelligence**
- 3 características principales
- Iconos descriptivos
- Tarjetas con hover effects

### 📊 **Resultados Comprobados**
- Diseño de tarjetas con gradientes
- Animaciones de aparición

### 📞 **Contacto**
- Información de contacto profesional
- Enlaces directos a email y LinkedIn
- Diseño centrado en conversión


### Eventos Personalizados
- Clicks en botones de demo
- Enlaces de contacto
- Tiempo en página
- Visualización de secciones

## 📈 SEO Features

- **Título optimizado**: "A&J Consulting IT - Business Intelligence para Clínicas | Dashboard KPIs Médicos"
- **Meta descripción**: 160 caracteres optimizados
- **Keywords**: business intelligence clínicas, dashboard médico, KPIs clínicos
- **Schema.org**: Datos estructurados para Google
- **Open Graph**: Compartir en redes sociales
- **Canonical URL**: Configurada correctamente
- **Structured Data**: JSON-LD implementado

## 🚀 Optimización de Imágenes

El proyecto incluye un script Python para optimizar y redimensionar imágenes PNG manteniendo la calidad:

### Script de Optimización

```bash
# Instalar dependencias
pip install -r requirements.txt

# Ejecutar optimizador
python optimize_images.py
```

### Imágenes Optimizadas

- **logo-22x22.png**: Footer (1.16 KB, ahorro 99.17%)
  - Tamaño original: 500x500px (139.1 KB)
  - Tamaño optimizado: 22x22px (1.16 KB)
- **logo-200x200.png**: Hero/Header (27.16 KB, ahorro 80.47%)
  - Tamaño original: 500x500px (139.1 KB)
  - Tamaño optimizado: 200x200px (27.16 KB)
  - Mantiene calidad visual para marca
- **AJLOGO-80x80.png**: Loader (si aplica)

### Características del Script

- **Redimensiona** con algoritmo LANCZOS (alta calidad)
- **Comprime PNG** con nivel 9 (máxima compresión)
- **Mantiene transparencia** (RGBA)
- **Muestra estadísticas** de compresión detalladas
- **No modifica** archivos originales
- **Genera versiones optimizadas** según uso:
  - Footer: 22x22px
  - Hero: 200x200px (mantiene calidad visual)
  - Loader: 80x80px

## 📊 Métricas de Performance

### Lighthouse Scores Actuales

**Desktop:**
- **Performance**: 100/100
- **Accessibility**: 96/100
- **Best Practices**: 96/100
- **SEO**: 92/100

**Móvil:**
- **Performance**: 60/100 (en mejora continua)
- **Accessibility**: 96/100
- **Best Practices**: 92/100
- **SEO**: 60/100

### Optimizaciones Aplicadas

- **Imágenes optimizadas**: Redimensionadas a tamaños reales de uso
- **Google Fonts**: Reducción de 3 a 2 fuentes (Inter, Poppins)
- **CSS diferido**: rubros.css carga de forma no bloqueante
- **Lazy loading**: Imágenes no críticas con loading="lazy"
- **Preload**: Recursos críticos (logo del hero)
- **Swiper lazy load**: Carga solo cuando se acerca a la sección
- **Headers de seguridad**: Configurados en vercel.json
- **Cache optimizado**: Vercel con TTL de 1 año para assets
- **Canonical URL**: Configurada correctamente
- **Open Graph**: URLs optimizadas

### Ahorro de Recursos

- **Imágenes**: ~250 KB (89.8% de reducción)
  - logo-22x22.png: 1.16 KB (antes 139.1 KB)
  - logo-200x200.png: 27.16 KB (antes 139.1 KB)
- **Fuentes**: ~30% de reducción (eliminada Raleway)
- **Tiempo de carga**: Mejora significativa en LCP y FCP

## 🛠️ Instalación y Uso

### Requisitos

- **Node.js** (para scripts npm/pnpm)
- **pnpm** (gestor de paquetes recomendado)
- **Python 3.12+** (para script de optimización de imágenes)
- **pip** (gestor de paquetes Python)

### Instalación de pnpm

```bash
# Instalar pnpm globalmente
pnpm install -g pnpm

# Verificar versión
pnpm --version
```

### Instalación del Proyecto

```bash
# Clonar repositorio
git clone [url-del-repositorio]

# Instalar dependencias Python (para optimización de imágenes)
pip install -r requirements.txt

# Instalar dependencias Node con pnpm (recomendado)
pnpm install

# O con npm (si prefieres)
pnpm install
```

### Comandos con pnpm vs npm

| Acción | npm | pnpm |
|--------|-----|------|
| Instalar dependencias | `pnpm install` | `pnpm install` |
| Iniciar servidor local | `pnpm start` | `pnpm start` |
| Deploy a Vercel | `pnpm run deploy` | `pnpm run deploy` |
| Audit fix | `npm audit fix` | `pnpm audit fix` |

### Optimización de Imágenes

```bash
# Ejecutar script de optimización
python optimize_images.py
```

El script generará versiones optimizadas de las imágenes en el directorio `assets/`:
- `logo-22x22.png` para footer
- `logo-200x200.png` para hero
- `AJLOGO-80x80.png` para loader

### Desarrollo Local

```bash
# Iniciar servidor local (con pnpm)
pnpm start
# o
pnpm exec http-server . -p 3000 -o
```

### Deploy

```bash
# Deploy a Vercel (con pnpm)
pnpm run deploy
# o directamente
vercel --prod
```

### Migración desde npm

Si tienes `package-lock.json` y quieres migrar a pnpm:

```bash
# 1. Instalar pnpm (si no lo tienes)
pnpm install -g pnpm

# 2. Eliminar node_modules y package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# 3. Instalar con pnpm
pnpm install
```

### Rollback a npm (si es necesario)

```bash
# 1. Eliminar pnpm-lock.yaml
Remove-Item pnpm-lock.yaml

# 2. Restaurar package-lock.json (si existe backup)
Copy-Item package-lock.json.backup package-lock.json

# 3. Eliminar packageManager de package.json

# 4. Instalar con npm
pnpm install
```

## 🔧 Optimizaciones Específicas

### Para Móvil

- **Swiper lazy load**: Carga solo cuando se acerca a la sección (Intersection Observer)
- **Partículas activas**: Mantenidas en todos los dispositivos (marca distintiva)
- **Header minimalista**: Solo texto, sin iconos
- **Loader optimizado**: Mejoras específicas para Android (sin cuelgues)

### Para Desktop

- **Performance 100**: Optimizaciones completas aplicadas
- **Partículas completas**: Efecto visual completo
- **Navegación completa**: Menú visible siempre

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**A&J Consulting IT**
- 📧 Email: [franciscoaucar@ajconsultingit.com]
- 📧 Email: [andresnj11@ajconsultingit.com]
- 💼 LinkedIn: [A&J Consulting IT](https://www.linkedin.com/company/a-j-consultingit-software/about/)


## 🙏 Agradecimientos

- [Particles.js](https://vincentgarreau.com/particles.js/) - Efectos de partículas (marca distintiva)
- [Swiper.js](https://swiperjs.com/) - Carrusel con efecto Flip
- [Iconify](https://iconify.design/) - Iconografía moderna
- [Font Awesome](https://fontawesome.com/) - Iconografía adicional
- [Google Fonts](https://fonts.google.com/) - Tipografía Inter y Poppins
- [Vercel](https://vercel.com/) - Hosting y despliegue

---

<div align="center">

**Desarrollado con ❤️ por A&J Consulting IT**

*Transformando datos médicos en decisiones inteligentes*

</div>
