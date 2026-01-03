# Arquitectura Comercial - A&J Consulting IT
**Versión:** 2.0  
**Última actualización:** 06/01/2026  
**Estado:** Activo - Post-migración React

---

## 🎯 Objetivo

Este documento define la arquitectura comercial y la estructura de servicios de A&J Consulting IT, orientada a conversión comercial sin perder solidez técnica.

---

## 📌 Principios Fundamentales

El sitio debe cumplir simultáneamente tres funciones:

1. **Explicar con claridad** qué se vende
2. **Generar confianza** inmediata
3. **Facilitar el contacto** o inicio de conversación comercial

### Decisión Estratégica Actual

- Marca por encima de personas
- Lenguaje orientado a negocio y resultados
- Arquitectura preparada para activar personal branding a futuro si el mercado lo requiere

---

## 🏗️ Arquitectura de Servicios

### Nivel 1 – Soluciones Principales

Servicios de mayor valor y entrada al sistema:

- **Desarrollo Web Profesional para Negocios**
- **Webs con Turnos, Reservas y Flujos Operativos**
- **Soluciones Digitales a Medida**

### Nivel 2 – Servicios de Optimización

- Auditoría técnica y de experiencia de usuario
- Mejora y refactorización de sistemas existentes
- Integraciones y automatizaciones

### Nivel 3 – Servicios Complementarios

- Proyectos ejecutados con terceros
- Servicios específicos según necesidad del cliente

**Nota:** La modalidad de ejecución no se comunica públicamente.

---

## 💼 Solución Principal: Creación de Sitios Web Profesionales

### Enfoque

La creación de sitios web se aborda como una **solución de negocio**, no como una pieza visual aislada.

Cada sitio se diseña para cumplir un objetivo concreto:
- Generar consultas
- Ordenar información
- Posicionar un servicio
- Soportar una operación digital existente

**No se construyen sitios genéricos ni plantillas reutilizadas sin criterio.**

### Tipos de Sitios Desarrollados

- Sitios institucionales y comerciales
- Webs de servicios profesionales
- Landing pages orientadas a conversión
- Sitios con dashboards, visualización de datos o sistemas embebidos
- Webs técnicas con lógica específica de dominio

### Principios de Implementación

- Claridad del mensaje antes que estética
- Arquitectura preparada para escalar
- Código mantenible y no frágil
- Performance y responsividad como requisito base
- UX orientada a lectura rápida y acción concreta

---

## 📊 Casos de Aplicación Real

Los siguientes proyectos representan distintos enfoques de creación web según objetivo y dominio:

### 1. Web de Servicios Locales
- **URL:** https://santa-barba-cba.vercel.app/
- **Descripción:** Sitio comercial orientado a contacto directo y presencia local
- **Logo:** `assets/ClientesWeb/SantaBarbaCba/santabarba-logo.png`
- **Enfoque:** Servicios locales, contacto directo

### 2. Web Institucional / Consultoría
- **URL:** https://vinewatchconsulting.vercel.app/
- **Descripción:** Presentación profesional de servicios con foco en claridad y posicionamiento
- **Logo:** `assets/ClientesWeb/VineWatch/vinewatch-logo.png`
- **Enfoque:** Consultoría, posicionamiento profesional

### 3. Plataforma con Dashboard y Datos
- **URL:** https://skypulse-ar.vercel.app/dashboard
- **Descripción:** Web con visualización técnica, métricas y lectura analítica
- **Logo:** `assets/ClientesWeb/SkyPulse-ar/skypulsear-logo.png`
- **Enfoque:** Dashboard, visualización de datos, métricas

### 4. Web Educativa / Divulgación Técnica
- **URL:** https://aerometarg.vercel.app/
- **Descripción:** Sitio de contenido especializado con estructura clara y autoridad temática
- **Logo:** `assets/ClientesWeb/aerometarg/aeromet-logo.png`
- **Enfoque:** Contenido especializado, autoridad temática

### 5. Web de Sistema Operativo / Solución Digital
- **URL:** https://fenixcba.vercel.app/
- **Descripción:** Plataforma con lógica funcional integrada al frontend
- **Logo:** `assets/ClientesWeb/fenixcba/Fenix-logo.png`
- **Enfoque:** Sistema operativo, lógica funcional

**Nota:** Estos ejemplos no se presentan como portfolio estético, sino como **casos de aplicación real según necesidad de negocio**. Son landings completos y funcionales, desplegadas y operativas en producción con Vercel.

---

## 🎯 Para Quién es Esta Solución

- Negocios que necesitan presencia digital clara y profesional
- Proyectos que requieren algo más que una landing genérica
- Equipos que buscan una web que no se vuelva un problema a los 6 meses
- Casos donde la web debe integrarse con procesos reales

---

## 📦 Qué Incluye (Base)

- Definición de objetivo del sitio
- Arquitectura de páginas y flujos
- Diseño UX/UI funcional
- Desarrollo frontend optimizado
- Despliegue productivo
- Base preparada para evolución futura

---

## 🎨 Sistema de Páginas

### Página de Inicio

**Objetivo principal:** Generar interés y comprensión inmediata de la oferta

**Contenido:**
- Propuesta de valor clara
- Servicios principales
- Casos o ejemplos implícitos

**CTA esperado:** Contacto / Brief / Inicio de conversación comercial

### Página de Solución (Template Reutilizable)

**Objetivo principal:** Explicar una solución específica y su valor de negocio

**Contenido:**
- Problema del cliente
- Solución propuesta
- Qué incluye
- Para quién es

**CTA esperado:** Solicitar información / Agendar consulta / Iniciar proyecto

### Página de Soluciones Complejas

**Objetivo principal:** Presentar sistemas con lógica como soluciones listas para negocio

**Contenido:**
- Enfoque en procesos y resultados
- Casos de uso
- Diferenciadores

**CTA esperado:** Consulta personalizada / Demo / Presupuesto

### Página de Contacto / Inicio de Proyecto

**Objetivo principal:** Filtrar consultas y capturar información relevante

**Contenido:**
- Formulario simple
- Expectativas claras
- Filtro de consultas

**CTA esperado:** Envío de formulario / Confirmación de recepción

---

## 📐 Jerarquía de Página (Home Tipo)

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

---

## 💬 UX Comercial

### Servicios

- Diferenciar visualmente tipos de servicios
- No exponer estructura interna
- Unificar experiencia de contratación

### Conversión

- CTA visibles sin saturar
- Lenguaje orientado a acción
- Eliminar fricción innecesaria

**Regla crítica:** Un solo CTA visible por vista

---

## ✅ Criterios de Aceptación

Una mejora se acepta **solo si** cumple todos estos criterios:

- Aporta claridad
- Mejora comprensión del servicio
- No aumenta complejidad
- No rompe comportamiento existente

---

**Última actualización:** 06/01/2026  
**Mantenido por:** Equipo de desarrollo A&J Consulting IT

