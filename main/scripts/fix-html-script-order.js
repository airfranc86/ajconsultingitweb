// Script para mover el script de React al final del body después del build
const fs = require('fs');
const path = require('path');

const distHtmlPath = path.join(__dirname, '..', 'dist', 'index.html');

if (!fs.existsSync(distHtmlPath)) {
  console.error('❌ dist/index.html no encontrado');
  process.exit(1);
}

let html = fs.readFileSync(distHtmlPath, 'utf8');

// Buscar el script de React en el head
const scriptMatch = html.match(/<script type="module" crossorigin src="\/assets\/main-[^"]+\.js"><\/script>/);
const linkMatch = html.match(/<link rel="stylesheet" crossorigin href="\/assets\/main\.css">/);

if (scriptMatch && linkMatch) {
  const scriptTag = scriptMatch[0];
  const linkTag = linkMatch[0];
  
  // Remover del head
  html = html.replace(scriptTag, '');
  html = html.replace(linkTag, '');
  
  // Agregar antes de </body>
  const bodyEndIndex = html.lastIndexOf('</body>');
  if (bodyEndIndex > 0) {
    html = html.substring(0, bodyEndIndex) + 
           `\n  ${linkTag}\n  ${scriptTag}\n` + 
           html.substring(bodyEndIndex);
    
    fs.writeFileSync(distHtmlPath, html, 'utf8');
    console.log('✅ Script de React movido al final del body');
  } else {
    console.error('❌ No se encontró </body>');
    process.exit(1);
  }
} else {
  console.warn('⚠️  No se encontró el script de React en el head');
}

