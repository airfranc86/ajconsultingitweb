/**
 * Script simplificado para generar Refresh Token de Gmail OAuth2
 * A&J Consulting IT - Business Intelligence Solutions
 */

const { google } = require('googleapis');
const readline = require('readline');

// Configuración OAuth2
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

async function generateRefreshToken() {
    console.log('🔐 GENERADOR DE REFRESH TOKEN PARA GMAIL OAUTH2');
    console.log('================================================');
    console.log('');

    // Crear cliente OAuth2 con tus credenciales reales
    const oauth2Client = new google.auth.OAuth2(
        '23165983105-2kt8lhaj21vi3ilvgli3okmoti0n7uo8.apps.googleusercontent.com',
        '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',
        'urn:ietf:wg:oauth:2.0:oob'
    );

    // Generar URL de autorización
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });

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
            console.log(`GMAIL_CLIENT_ID = 23165983105-2kt8lhaj21vi3ilvgli3okmoti0n7uo8.apps.googleusercontent.com`);
            console.log(`GMAIL_CLIENT_SECRET = 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`);
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

generateRefreshToken();
