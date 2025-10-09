# 🚀 Guía Completa de Configuración - Supabase + Vercel

## 📋 Resumen de lo que vamos a configurar

- ✅ **Supabase** - Base de datos con encriptación
- ✅ **Vercel** - Deployment y variables de entorno
- ✅ **Gmail** - Envío de notificaciones
- ✅ **Encriptación** - Seguridad de datos

---

## 🔧 PASO 1: Configurar Supabase

### 1.1 Crear Proyecto en Supabase

1. Ve a [Supabase Dashboard](https://supabase.com/dashboard)
2. Click en **"New Project"**
3. Completa los datos:
   - **Name**: `ajconsulting-demo-requests`
   - **Database Password**: Genera una contraseña segura
   - **Region**: Elige la más cercana (Europa West)
4. Click **"Create new project"**
5. Espera 2-3 minutos a que se cree

### 1.2 Obtener Credenciales de Supabase

1. En tu proyecto, ve a **Settings** → **API**
2. Copia estos valores:
   ```
   Project URL: https://tu-proyecto-id.supabase.co
   service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```
3. **⚠️ IMPORTANTE**: Usa la `service_role` key, NO la `anon` key

### 1.3 Configurar Base de Datos

1. Ve a **SQL Editor** en Supabase
2. Click **"New Query"**
3. Copia y pega todo el contenido de `setup_supabase.sql`
4. Click **"Run"** para ejecutar
5. Verifica que se creó la tabla `demo_requests`

### 1.4 Verificar Configuración

En SQL Editor, ejecuta:
```sql
-- Verificar que la tabla existe
SELECT * FROM demo_requests LIMIT 1;

-- Verificar estadísticas
SELECT * FROM get_demo_stats();
```

---

## 📧 PASO 2: Configurar Gmail

### 2.1 Activar 2FA en Gmail

1. Ve a [Google Account](https://myaccount.google.com/)
2. **Seguridad** → **Verificación en 2 pasos**
3. Activar si no está activado

### 2.2 Generar App Password

1. En **Seguridad** → **Contraseñas de aplicaciones**
2. Click **"Generar contraseña"**
3. Selecciona **"Mail"** como aplicación
4. Copia la contraseña generada (formato: `abcd efgh ijkl mnop`)

### 2.3 Verificar Configuración

```bash
# Probar envío de email (opcional)
# Puedes usar un script de prueba o probar directamente en producción
```

---

## ⚙️ PASO 3: Configurar Vercel

### 3.1 Conectar Repositorio

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Conecta tu repositorio de GitHub
4. Selecciona el repositorio `ajconsultingitweb`
5. Click **"Deploy"**

### 3.2 Configurar Variables de Entorno

1. En tu proyecto de Vercel, ve a **Settings** → **Environment Variables**
2. Agrega cada variable:

```
Name: SUPABASE_URL
Value: https://tu-proyecto-id.supabase.co
Environment: Production, Preview, Development

Name: SUPABASE_SERVICE_KEY  
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (tu service_role key)
Environment: Production, Preview, Development

Name: GMAIL_USER
Value: franciscoaucar@ajconsultingit.com
Environment: Production, Preview, Development

Name: GMAIL_APP_PASSWORD
Value: abcd efgh ijkl mnop (tu app password)
Environment: Production, Preview, Development

Name: ADMIN_EMAIL
Value: franciscoaucar@ajconsultingit.com
Environment: Production, Preview, Development

Name: ENCRYPTION_KEY
Value: 5eda0e9d660d83696856eee93c7b5f89cba6c7c2c40992aa036355eece5d92f7
Environment: Production, Preview, Development
```

### 3.3 Redeploy

1. Después de agregar las variables, ve a **Deployments**
2. Click en los 3 puntos del último deployment
3. Click **"Redeploy"**
4. Espera a que termine el deployment

---

## 🧪 PASO 4: Probar el Sistema

### 4.1 Probar Formulario

1. Ve a tu sitio web desplegado
2. Click en **"Solicitar Demo"**
3. Completa el formulario con datos de prueba:
   ```
   Nombre: Dr. Juan Pérez
   Email: juan.perez@clinica-ejemplo.com
   Clínica: Clínica Ejemplo
   Teléfono: +34 123 456 789
   Mensaje: Prueba del sistema
   ```
4. Click **"Solicitar Demo"**

### 4.2 Verificar Resultados

#### En Supabase:
1. Ve a **Table Editor** → `demo_requests`
2. Verifica que se guardó el registro
3. Verifica que los campos `*_encrypted` tienen datos JSON

#### En Gmail:
1. Revisa las bandejas de:
   - `franciscoaucar@ajconsultingit.com`
   - `anj11@ajconsultingit.com`
2. Deberías recibir el email de notificación

### 4.3 Verificar Logs

1. En Vercel, ve a **Functions** → `api/demo-request`
2. Click en **"View Function Logs"**
3. Verifica que no hay errores

---

## 🔍 PASO 5: Verificación de Seguridad

### 5.1 Verificar Encriptación

En Supabase SQL Editor:
```sql
-- Verificar datos encriptados
SELECT 
  id,
  nombre,
  nombre_encrypted,
  email,
  email_encrypted,
  created_at
FROM demo_requests 
ORDER BY created_at DESC 
LIMIT 1;
```

### 5.2 Verificar Rate Limiting

1. Intenta enviar el formulario 4 veces seguidas
2. La 4ta vez debería dar error de rate limiting
3. Espera 1 hora o cambia de IP para probar nuevamente

### 5.3 Verificar Validaciones

Prueba estos casos que deberían fallar:
- Email personal (gmail.com, yahoo.com)
- Campos vacíos
- Datos malformados

---

## 🚨 Solución de Problemas

### Error: "Variables de entorno no configuradas"
**Solución:**
1. Verifica que todas las variables estén en Vercel
2. Redeploy el proyecto
3. Verifica que no hay espacios extra en los valores

### Error: "Supabase connection failed"
**Solución:**
1. Verifica la URL de Supabase
2. Verifica que usas `service_role` key, no `anon` key
3. Verifica que la tabla `demo_requests` existe

### Error: "Gmail authentication failed"
**Solución:**
1. Verifica que el App Password es correcto
2. Verifica que 2FA está activado
3. Verifica que el email es correcto

### Error: "Rate limit excedido"
**Solución:**
- Es normal, espera 1 hora o cambia de IP

### No llegan emails
**Solución:**
1. Verifica que el App Password es correcto
2. Revisa la carpeta de spam
3. Verifica los logs de Vercel Functions

---

## 📊 Monitoreo Continuo

### 5.1 Verificar Estadísticas

En Supabase SQL Editor:
```sql
-- Estadísticas diarias
SELECT * FROM get_demo_stats();

-- Solicitudes recientes
SELECT * FROM demo_requests_summary;
```

### 5.2 Logs de Vercel

1. Ve a **Functions** → `api/demo-request`
2. Monitorea logs para errores
3. Verifica rate limiting

### 5.3 Emails de Notificación

- Verifica que llegan a ambos destinatarios
- Revisa formato del email
- Verifica que incluye todos los datos

---

## ✅ Checklist Final

- [ ] Supabase proyecto creado
- [ ] Tabla `demo_requests` creada
- [ ] Variables de entorno configuradas en Vercel
- [ ] Gmail App Password generado
- [ ] Deployment exitoso en Vercel
- [ ] Formulario funciona correctamente
- [ ] Emails llegan a ambos destinatarios
- [ ] Datos se encriptan en Supabase
- [ ] Rate limiting funciona
- [ ] Validaciones funcionan

---

## 🎯 URLs Importantes

- **Supabase Dashboard**: https://supabase.com/dashboard
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Google Account**: https://myaccount.google.com/
- **Tu Sitio Web**: https://tu-proyecto.vercel.app

---

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs de Vercel Functions
2. Verifica las variables de entorno
3. Prueba con datos de ejemplo
4. Contacta: franciscoaucar@ajconsultingit.com

---

**A&J Consulting IT** - Configuración Completa 🚀
