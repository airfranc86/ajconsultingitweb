# Archivos a Eliminar del Repositorio

**Fecha:** 06/01/2026  
**Estado:** Listo para eliminar

---

## 📋 Archivos Identificados para Eliminación

### ✅ Archivos Migrados a React (Eliminar)

#### 1. `js/scroll-reveal.js`
- **Estado:** Migrado completamente a React
- **Reemplazado por:** `src/hooks/useScrollReveal.ts`
- **Referencias:** Comentadas en `index.html` (línea 2687)
- **Uso actual:** Ninguno (comentado)
- **Acción:** ✅ Eliminar del repositorio

#### 2. `js/glow-menu.js`
- **Estado:** Migrado completamente a React
- **Reemplazado por:** `src/components/layout/GlowMenu.tsx` + `src/hooks/useGlowMenu.ts`
- **Referencias:** Comentadas en `index.html` (línea 2700)
- **Uso actual:** Ninguno (comentado)
- **Acción:** ✅ Eliminar del repositorio

---

## ⚠️ Archivos que NO Eliminar (Aún en Uso)

### ❌ `js/main.js`
- **Razón:** Aún contiene código necesario (particles.js, loader, etc.)
- **Acción:** Mantener (solo código duplicado está comentado)

### ❌ Otros scripts en `js/`
- **Razón:** Funcionalidades no migradas todavía
- **Acción:** Mantener hasta migrar

---

## 📊 Impacto de la Eliminación

- **Archivos a eliminar:** 2
- **Líneas de código:** ~430 líneas (scroll-reveal.js: ~85, glow-menu.js: ~344)
- **Riesgo:** Bajo (código ya migrado y funcionando en React)
- **Rollback:** Fácil (archivos en historial de git)

---

## ✅ Validación Pre-Eliminación

- [x] Archivos comentados en `index.html`
- [x] Funcionalidad migrada a React
- [x] Build funciona correctamente
- [x] No hay referencias activas
- [ ] Testing en navegador (pendiente antes de eliminar)

---

## 🎯 Plan de Eliminación

### Paso 1: Verificar que React funciona
- [ ] Probar navegación y scroll reveal
- [ ] Probar menú móvil (glow menu)
- [ ] Verificar que no hay errores

### Paso 2: Eliminar archivos
```bash
git rm js/scroll-reveal.js
git rm js/glow-menu.js
```

### Paso 3: Commit y push
```bash
git commit -m "chore: Eliminar archivos duplicados migrados a React"
git push origin main
```

---

## 📝 Notas

- Los archivos estarán disponibles en el historial de git
- Si hay problemas, se puede restaurar fácilmente
- La eliminación reduce el tamaño del repositorio
- Mejora la claridad del código (menos archivos obsoletos)

---

**Recomendación:** Eliminar después de validar que React funciona correctamente en navegador.

