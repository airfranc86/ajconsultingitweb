# REINTEGRATION.md — Reincorporar Supabase a la v3

Documento de referencia para el día que la v3 necesite captura automática de leads.

## Cuándo reactivar

Activar este flujo si se cumple alguno de estos:

- > 30 consultas por WhatsApp/mes y se vuelve inmanejable la administración manual
- Necesidad de medir conversión por canal (campañas LinkedIn vs orgánico vs referidos)
- Integración con CRM externo (HubSpot, Pipedrive) que requiere fuente unificada
- Cliente puntual exige formulario tradicional (poco probable pero posible)

## Pre-requisitos antes de reactivar

- [ ] Definir si se mantiene WhatsApp como CTA primario y form como secundario, o se invierte
- [ ] Confirmar que el free tier de Supabase está disponible (límite: 2 proyectos activos, 500 MB)
- [ ] Definir política de retención de leads (¿borrar a los 90 días? ¿exportar antes?)
- [ ] Plan para el dashboard de admin (¿usar Supabase Studio? ¿app Streamlit/Flet propia?)

## Pasos para reincorporar

### 1. Restaurar dependencias

```bash
pnpm add @supabase/supabase-js zod @radix-ui/react-label
```

### 2. Restaurar archivos eliminados

Estos archivos existían en el primer scaffolding y fueron removidos al adoptar el modelo estático. Recuperarlos del historial git con:

```bash
git log --oneline --all -- src/lib/supabase.ts
git log --oneline --all -- src/app/api/contact/route.ts
git log --oneline --all -- db/schema.sql
```

Y restaurar:

```bash
git checkout <commit-sha> -- src/lib/supabase.ts
git checkout <commit-sha> -- src/app/api/contact/route.ts
git checkout <commit-sha> -- db/schema.sql
git checkout <commit-sha> -- src/components/ui/input.tsx
```

### 3. Schema en Supabase

Ejecutar `db/schema.sql` (idempotente). Tabla resultante: `marketing.demo_requests` con RLS activo, política anon para inserts.

### 4. Variables de entorno

Agregar en `.env.local` y en Vercel:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

### 5. Componente de formulario

El componente original con Zod + fetch a `/api/contact` está en el historial git. Si no, se puede reconstruir en menos de una hora con la lógica documentada en `architecture.md`.

### 6. Decisión de UX

Tres opciones para reincorporar el form sin romper la conversión actual:

**Opción A — Form como alternativa al WA**
En la sección de contacto, agregar un toggle "¿Preferís email?" que muestra el form. WhatsApp sigue siendo CTA primario.

**Opción B — Form como CTA secundario en cada rubro**
Cada card de rubro abre un dialog con un form pre-poblado por industria.

**Opción C — Reemplazar WhatsApp por form**
Solo recomendado si el target cambia (ej: pasar de PyMEs a empresas medianas).

## Checklist post-reintegración

- [ ] RLS verificado: el anon key no puede leer ni actualizar, solo insert
- [ ] Rate limit configurado (en memoria para empezar, Upstash si crece)
- [ ] Logs estructurados en el route handler
- [ ] Test manual: enviar form → verificar fila en `marketing.demo_requests`
- [ ] Test de error: enviar JSON inválido → debe responder 400
- [ ] Test de spam: 6 envíos seguidos desde misma IP → 6to debe ser 429
- [ ] Email de notificación al admin cuando llega lead nuevo (opcional, vía Supabase Edge Function o Vercel cron)

## Notas de la implementación previa

El primer scaffolding tenía:
- `/api/contact` route handler con runtime nodejs y `dynamic = 'force-dynamic'`
- Validación con Zod (name 2-100, email max 200, message 10-2000)
- Rate limit en memoria (5/hora/IP) — limitación: por instancia serverless, no global
- Cliente Supabase singleton en `lib/supabase.ts` usando service role key del servidor

Esa implementación es un buen punto de partida. Recordar que **service_role bypasea RLS** — por eso el insert va a través del backend, no del cliente.
