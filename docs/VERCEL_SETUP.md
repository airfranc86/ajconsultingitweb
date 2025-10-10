# Configuración para Vercel - A&J Consulting IT

## Variables de Entorno Requeridas

Configura las siguientes variables de entorno en tu proyecto de Vercel:

### 1. Acceder a la Configuración de Vercel
1. Ve a tu dashboard de Vercel
2. Selecciona tu proyecto `ajconsultingitweb`
3. Ve a la pestaña "Settings"
4. Selecciona "Environment Variables"

### 2. Configurar Variables de Entorno

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `GMAIL_USER` | `tu-email@gmail.com` | Tu dirección de Gmail |
| `GMAIL_APP_PASSWORD` | `tu-app-password` | Contraseña de aplicación de Gmail |
| `NODE_ENV` | `production` | Entorno de producción |

### 3. Configuración de Gmail

#### Paso 1: Habilitar Verificación en 2 Pasos
1. Ve a tu cuenta de Google
2. Seguridad → Verificación en 2 pasos
3. Actívala si no está activada

#### Paso 2: Generar Contraseña de Aplicación
1. Ve a Seguridad → Contraseñas de aplicaciones
2. Selecciona "Correo" como aplicación
3. Selecciona "Otro" como dispositivo
4. Escribe "A&J Consulting IT" como nombre
5. Copia la contraseña generada (16 caracteres)

#### Paso 3: Configurar en Vercel
- `GMAIL_USER`: Tu email completo (ej: `franciscoaucar@ajconsultingit.com`)
- `GMAIL_APP_PASSWORD`: La contraseña de 16 caracteres generada

## Configuración de la Función

### Timeout
- Configurado para 60 segundos en `vercel.json`
- Suficiente para el envío de emails

### CORS
- Configurado para permitir requests desde cualquier origen
- Headers apropiados para formularios web

## Verificación de la Configuración

### 1. Verificar Variables de Entorno
```bash
# En el dashboard de Vercel, verifica que las variables estén configuradas
# Deberías ver:
# GMAIL_USER: franciscoaucar@ajconsultingit.com
# GMAIL_APP_PASSWORD: [16 caracteres]
# NODE_ENV: production
```

### 2. Probar la Función
1. Ve a tu sitio web desplegado
2. Abre el formulario "Solicitar Demo"
3. Completa y envía el formulario
4. Revisa los logs en Vercel para ver el proceso

### 3. Revisar Logs
1. Ve a Vercel Dashboard
2. Selecciona tu proyecto
3. Ve a "Functions"
4. Selecciona `api/send-demo-request.js`
5. Revisa los logs para errores

## Solución de Problemas Comunes

### Error 500 - Variables de Entorno
- Verifica que las variables estén configuradas correctamente
- Asegúrate de que los nombres coincidan exactamente
- Verifica que no haya espacios extra

### Error EAUTH - Autenticación
- Verifica que la contraseña de aplicación sea correcta
- Asegúrate de que la verificación en 2 pasos esté activada
- Verifica que el email sea correcto

### Error ECONNECTION - Conexión
- Verifica tu conexión a internet
- Gmail puede estar bloqueando la conexión
- Considera usar un servicio de email alternativo

### Timeout
- La función tiene 60 segundos de timeout
- Si persiste, considera usar un servicio de email más rápido

## Servicios Alternativos Recomendados

Si Gmail no funciona, considera:

1. **SendGrid** (Recomendado por Vercel)
2. **Mailgun**
3. **Postmark**
4. **Resend**

Estos servicios están optimizados para Vercel y ofrecen mejor confiabilidad.

## Monitoreo

- Revisa los logs regularmente
- Configura alertas para errores
- Monitorea el rendimiento de la función

---

**Nota**: Esta configuración está optimizada específicamente para Vercel serverless functions y Gmail SMTP.
