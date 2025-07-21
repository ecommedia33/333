import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración ultra-optimizada para velocidad máxima
export default defineConfig({
  plugins: [
    react({
      // Optimizaciones de React
      fastRefresh: true,
    })
  ],
  base: './',
  build: {
    // Optimizaciones de build para velocidad máxima
    minify: 'terser',
    // Optimizar para dispositivos de gama baja
    target: 'es2018',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info']
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendors para mejor caching
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'icons': ['lucide-react']
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    // Compresión máxima
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096
  },
  optimizeDeps: {
    // Pre-bundling de dependencias críticas
    include: [
      'react', 
      'react-dom', 
      'react-router-dom'
    ],
  },
  esbuild: {
    target: 'es2020',
    drop: ['console']
  },
});