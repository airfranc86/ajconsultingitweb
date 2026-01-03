import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.html',
      },
      // Copiar assets estáticos
      output: {
        assetFileNames: 'assets/[name].[ext]',
      },
    },
    // Permitir coexistencia con archivos estáticos
    copyPublicDir: false, // Los assets están en /assets, no en public/
  },
  publicDir: 'assets', // Usar /assets como directorio público para que Vite lo copie
  server: {
    port: 3000,
    open: true,
  },
  // Mantener compatibilidad con imports absolutos
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

