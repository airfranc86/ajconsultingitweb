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
    },
    // Permitir coexistencia con archivos estáticos
    copyPublicDir: true,
  },
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

