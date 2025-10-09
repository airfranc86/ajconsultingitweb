/**
 * Script para generar Refresh Token de Gmail OAuth2
 * A&J Consulting IT - Business Intelligence Solutions
 */

const { google } = require('googleapis');
const readline = require('readline');

// Configuración OAuth2
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];
const TOKEN_PATH = 'token.json';

async function generateRefreshToken() {
    console.log('🔐 GENERADOR DE REFRESH TOKEN PARA GMAIL OAUTH2');
    console.log('================================================');
    console.log('');

    // Crear cliente OAuth2
    const oauth2Client = new google.auth.OAuth2(
        '23165983105-2kt8lhaj21vi3ilvgli3okmoti0n7uo8.apps.googleusercontent.com', // Tu Client ID real
        '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', // Tu Client Secret real
        'urn:ietf:wg:oauth:2.0:oob' // Redirect URI para aplicaciones de escritorio
    );

    // Generar URL de autorización
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });

    console.log('📋 PASOS PARA CONFIGURAR GMAIL OAUTH2:');
    console.log('');
    console.log('1. Ve a Google Cloud Console:');
    console.log('   https://console.cloud.google.com/');
    console.log('');
    console.log('2. Crea un nuevo proyecto o selecciona uno existente');
    console.log('');
    console.log('3. Habilita Gmail API:');
    console.log('   - Ve a "APIs & Services" → "Library"');
    console.log('   - Busca "Gmail API" y habilítala');
    console.log('');
    console.log('4. Crea credenciales OAuth2:');
    console.log('   - Ve a "APIs & Services" → "Credentials"');
    console.log('   - Click "Create Credentials" → "OAuth 2.0 Client ID"');
    console.log('   - Tipo: "Desktop application"');
    console.log('   - Nombre: "A&J Consulting Email"');
    console.log('');
    console.log('5. Copia Client ID y Client Secret');
    console.log('');
    console.log('6. Reemplaza en este script:');
    console.log('   - TU_CLIENT_ID_AQUI');
    console.log('   - TU_CLIENT_SECRET_AQUI');
    console.log('');
    console.log('7. Ejecuta este script nuevamente');
    console.log('');
    console.log('🔗 URL DE AUTORIZACIÓN:');
    console.log(authUrl);
    console.log('');
    console.log('📝 INSTRUCCIONES:');
    console.log('1. Abre la URL de arriba en tu navegador');
    console.log('2. Inicia sesión con franciscoaucar@ajconsultingit.com');
    console.log('3. Autoriza la aplicación');
    console.log('4. Copia el código de autorización');
    console.log('5. Pégalo aquí abajo');
    console.log('');

    // Crear interfaz de lectura
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Ingresa el código de autorización: ', async (code) => {
        try {
            // Intercambiar código por tokens
            const { tokens } = await oauth2Client.getToken(code);
            oauth2Client.setCredentials(tokens);

            console.log('');
            console.log('✅ TOKENS GENERADOS EXITOSAMENTE');
            console.log('================================');
            console.log('');
            console.log('📋 VARIABLES DE ENTORNO PARA VERCEL:');
            console.log('');
            console.log(`GMAIL_USER = franciscoaucar@ajconsultingit.com`);
            console.log(`GMAIL_CLIENT_ID = ${oauth2Client._clientId}`);
            console.log(`GMAIL_CLIENT_SECRET = ${oauth2Client._clientSecret}`);
            console.log(`GMAIL_REFRESH_TOKEN = ${tokens.refresh_token}`);
            console.log(`GMAIL_ACCESS_TOKEN = ${tokens.access_token}`);
            console.log('');
            console.log('⚠️  IMPORTANTE:');
            console.log('- Guarda estos valores en un lugar seguro');
            console.log('- El refresh_token no expira');
            console.log('- El access_token expira en 1 hora (se renueva automáticamente)');
            console.log('');
            console.log('🚀 PRÓXIMOS PASOS:');
            console.log('1. Agrega estas variables en Vercel Dashboard');
            console.log('2. Deploy tu proyecto: vercel --prod');
            console.log('3. Prueba el formulario');

            rl.close();
        } catch (error) {
            console.error('❌ Error generando tokens:', error.message);
            rl.close();
        }
    });
}

// Verificar si ya hay tokens guardados
if (require('fs').existsSync(TOKEN_PATH)) {
    console.log('✅ Tokens ya existen en token.json');
    console.log('Si necesitas regenerar, elimina el archivo token.json');
} else {
    generateRefreshToken();
}
