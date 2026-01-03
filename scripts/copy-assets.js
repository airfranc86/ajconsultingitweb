// Script para copiar assets y js a dist después del build
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'assets');
const jsDir = path.join(__dirname, '..', 'js');
const distDir = path.join(__dirname, '..', 'dist');
const distAssetsDir = path.join(__dirname, '..', 'dist', 'assets');
const distJsDir = path.join(__dirname, '..', 'dist', 'js');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
  }
}

// Copiar assets
if (fs.existsSync(assetsDir)) {
  console.log('📦 Copiando assets a dist/assets...');
  try {
    // Limpiar directorio destino si existe
    if (fs.existsSync(distAssetsDir)) {
      fs.rmSync(distAssetsDir, { recursive: true, force: true });
    }
    
    // Copiar assets
    copyRecursiveSync(assetsDir, distAssetsDir);
    
    // Verificar que se copiaron archivos
    const copiedFiles = fs.readdirSync(distAssetsDir);
    console.log(`✅ Assets copiados correctamente. ${copiedFiles.length} elementos en dist/assets`);
  } catch (error) {
    console.error('❌ Error al copiar assets:', error.message);
    process.exit(1);
  }
} else {
  console.warn('⚠️  Directorio assets no encontrado en:', assetsDir);
}

// Copiar js
if (fs.existsSync(jsDir)) {
  console.log('📦 Copiando js a dist/js...');
  try {
    // Limpiar directorio destino si existe
    if (fs.existsSync(distJsDir)) {
      fs.rmSync(distJsDir, { recursive: true, force: true });
    }
    
    // Copiar js
    copyRecursiveSync(jsDir, distJsDir);
    
    // Verificar que se copiaron archivos
    const copiedFiles = fs.readdirSync(distJsDir);
    console.log(`✅ JS copiado correctamente. ${copiedFiles.length} archivos en dist/js`);
  } catch (error) {
    console.error('❌ Error al copiar js:', error.message);
    process.exit(1);
  }
} else {
  console.warn('⚠️  Directorio js no encontrado en:', jsDir);
}

// Mover script de React al final del body
const distHtmlPath = path.join(__dirname, '..', 'dist', 'index.html');
if (fs.existsSync(distHtmlPath)) {
  try {
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
      }
    }
  } catch (error) {
    console.warn('⚠️  No se pudo mover el script de React:', error.message);
  }
}

