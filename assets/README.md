# Assets Directory

Este directorio contiene los recursos gráficos privados del proyecto.

## Contenido

- `AJLOGO.png` - Logo de la empresa A&J Consulting IT

## Nota de Repositorio

Este directorio **SÍ se incluye** en el repositorio Git ya que es necesario para el funcionamiento del sitio web.

## Uso en Producción

Para el despliegue en producción:
1. Los assets se suben automáticamente con el repositorio
2. Verificar que las rutas en el código apunten correctamente a `assets/`
3. El directorio se mantiene automáticamente en el servidor

## Estructura de Referencias

El logo se referencia en los siguientes archivos:
- `index.html` - Favicon, meta tags y elemento img
- `js/main.js` - Preload de recursos críticos

---

## Archivos Excluidos del Repositorio

Los siguientes archivos están configurados para ser ignorados por Git por motivos de privacidad:

### 📁 Assets Públicos
- `assets/` - Directorio con recursos gráficos de la empresa (incluido en repositorio)

### 📋 Documentación Estratégica
- `PRD.md` - Product Requirements Document (información confidencial del negocio)
- `KPIs.md` - KPIs Esenciales para Clínicas (métricas estratégicas)

### 🔒 Razones de Privacidad
- **Información Comercial**: Detalles estratégicos del negocio
- **Competencia**: Evitar exposición de estrategias y métricas clave
- **Seguridad**: Proteger información sensible del proyecto

### 🚀 Para Despliegue
- **Assets**: Se suben automáticamente con el repositorio
- **Documentación**: Subir manualmente al servidor de producción cuando sea necesario
