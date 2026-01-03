// Script para copiar assets a dist después del build
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'assets');
const distAssetsDir = path.join(__dirname, '..', 'dist', 'assets');

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

if (fs.existsSync(assetsDir)) {
  console.log('Copiando assets a dist/assets...');
  copyRecursiveSync(assetsDir, distAssetsDir);
  console.log('Assets copiados correctamente.');
} else {
  console.warn('Directorio assets no encontrado.');
}

