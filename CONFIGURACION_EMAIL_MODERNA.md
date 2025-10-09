# 📧 Configuración de Email Moderna - Sin App Passwords

## 🚨 Problema Identificado

Google ha cambiado su política y **ya no recomienda App Passwords**. La solución es usar servicios de email modernos como **Resend** o **SendGrid**.

## 🎯 Solución Recomendada: Resend

**Resend** es un servicio de email moderno, confiable y fácil de configurar:

- ✅ **Sin App Passwords** necesarios
- ✅ **API simple** y moderna
- ✅ **Gratuito** hasta 3,000 emails/mes
- ✅ **Excelente deliverability**
- ✅ **Configuración en 5 minutos**

---

## 🚀 Configuración de Resend

### 1. Crear Cuenta en Resend

1. Ve a [Resend.com](https://resend.com)
2. Click **"Sign Up"**
3. Crea cuenta con tu email: `franciscoaucar@ajconsultingit.com`
4. Verifica tu email

### 2. Configurar Dominio

1. En el dashboard, ve a **"Domains"**
2. Click **"Add Domain"**
3. Agrega: `ajconsultingit.com`
4. Sigue las instrucciones de DNS

### 3. Obtener API Key

1. Ve a **"API Keys"**
2. Click **"Create API Key"**
3. Nombre: `ajconsulting-demo-requests`
4. Copia la API key generada

### 4. Configurar en Vercel

En Vercel Dashboard → **Environment Variables**:

```
Name: RESEND_API_KEY
Value: re_xxxxxxxxxxxxxxxxxxxxxxxxx
Environment: Production, Preview, Development
```

---

## 🔄 Actualizar Código

### Opción 1: Usar Resend (Recomendado)

Reemplaza el archivo `api/demo-request.js` con `api/demo-request-emailjs.js`:

```bash
# Renombrar archivos
mv api/demo-request.js api/demo-request-backup.js
mv api/demo-request-emailjs.js api/demo-request.js
```

### Opción 2: Configurar OAuth2 con Gmail

Si prefieres seguir usando Gmail, necesitas configurar OAuth2:

#### 2.1 Crear Proyecto en Google Cloud

1. Ve a [Google Cloud Console](https://console.cloud.google.com)
2. Crear nuevo proyecto: `ajconsulting-email`
3. Habilitar **Gmail API**

#### 2.2 Configurar OAuth2

1. Ve a **"Credentials"**
2. Click **"Create Credentials"** → **"OAuth 2.0 Client ID"**
3. Tipo: **"Web application"**
4. URIs autorizados: `https://tu-dominio.vercel.app`
5. Copia **Client ID** y **Client Secret**

#### 2.3 Generar Refresh Token

```bash
# Instalar googleapis
npm install googleapis

# Crear script para generar refresh token
node generate-refresh-token.js
```

#### 2.4 Variables de Entorno para OAuth2

```
GMAIL_CLIENT_ID = tu_client_id
GMAIL_CLIENT_SECRET = tu_client_secret
GMAIL_REFRESH_TOKEN = tu_refresh_token
GMAIL_ACCESS_TOKEN = (se genera automáticamente)
```

---

## 📊 Comparación de Opciones

| Característica | Resend | Gmail OAuth2 | App Passwords |
|----------------|--------|--------------|---------------|
| **Facilidad** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ❌ (Deprecated) |
| **Confiabilidad** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Costo** | Gratis (3K/mes) | Gratis | Gratis |
| **Setup** | 5 minutos | 30 minutos | ❌ No disponible |
| **Deliverability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## 🎯 Recomendación Final

**Usa Resend** porque:

1. **Más fácil** de configurar
2. **Más confiable** para deliverability
3. **Sin dependencias** de Google
4. **API moderna** y bien documentada
5. **Gratuito** para tu volumen de emails

---

## 🚀 Pasos para Implementar Resend

### 1. Configurar Resend (5 minutos)
```bash
# 1. Crear cuenta en resend.com
# 2. Agregar dominio ajconsultingit.com
# 3. Copiar API key
```

### 2. Actualizar Vercel (2 minutos)
```bash
# Agregar variable de entorno
RESEND_API_KEY = re_xxxxxxxxxxxxxxxxxxxxxxxxx
```

### 3. Actualizar Código (1 minuto)
```bash
# Usar el archivo api/demo-request-emailjs.js
# Ya está configurado para Resend
```

### 4. Deploy (1 minuto)
```bash
vercel --prod
```

---

## 🧪 Probar Configuración

### 1. Probar Formulario
1. Ve a tu sitio web
2. Completa el formulario "Solicitar Demo"
3. Verifica que no hay errores

### 2. Verificar Emails
1. Revisa las bandejas de:
   - `franciscoaucar@ajconsultingit.com`
   - `anj11@ajconsultingit.com`
2. Deberías recibir el email de notificación

### 3. Verificar Logs
1. En Vercel → Functions → `api/demo-request`
2. Verifica que dice: "Email enviado exitosamente via Resend"

---

## 🔧 Comandos de Verificación

```bash
# Verificar variables de entorno
vercel env ls

# Ver logs en tiempo real
vercel logs

# Probar endpoint
curl -X POST https://tu-dominio.vercel.app/api/demo-request \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test","email":"test@empresa.com","clinica":"Test Clinic"}'
```

---

## 📞 Soporte

Si tienes problemas:

1. **Resend**: [docs.resend.com](https://docs.resend.com)
2. **Vercel**: [vercel.com/docs](https://vercel.com/docs)
3. **Email**: franciscoaucar@ajconsultingit.com

---

**A&J Consulting IT** - Email Moderno 📧
