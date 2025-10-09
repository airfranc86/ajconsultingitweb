/**
 * Script para generar clave de encriptación segura
 * A&J Consulting IT - Business Intelligence Solutions
 */

const crypto = require('crypto');

// Generar clave de 32 bytes (256 bits) para AES-256
const encryptionKey = crypto.randomBytes(32).toString('hex');

console.log('🔐 CLAVE DE ENCRIPTACIÓN GENERADA');
console.log('=====================================');
console.log('');
console.log('Clave generada:', encryptionKey);
console.log('');
console.log('📋 INSTRUCCIONES:');
console.log('1. Copia la clave generada arriba');
console.log('2. Ve a Vercel Dashboard → Settings → Environment Variables');
console.log('3. Agrega nueva variable:');
console.log('   - Name: ENCRYPTION_KEY');
console.log('   - Value: ' + encryptionKey);
console.log('');
console.log('⚠️  IMPORTANTE:');
console.log('- Guarda esta clave en un lugar seguro');
console.log('- NO la compartas públicamente');
console.log('- Si la pierdes, no podrás desencriptar datos existentes');
console.log('');
console.log('✅ La clave tiene 64 caracteres hexadecimales (256 bits)');
console.log('✅ Es compatible con AES-256-GCM');
console.log('✅ Cumple con estándares de seguridad empresarial');
