import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración ultra-optimizada para velocidad máxima
export default defineConfig({
  plugins: [
    react({
      // Optimizaciones de React
      fastRefresh: true,
      babel: {
        plugins: [
          // Eliminar propTypes en producción
          ['babel-plugin-transform-remove-console', { exclude: ['error', 'warn'] }]
        ]
      }
    })
  ],
  build: {
    // Optimizaciones de build para velocidad máxima
    minify: 'terser',
    // Optimizar para dispositivos de gama baja
    target: 'es2018',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2, // Reducir passes para build más rápido
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true
      },
      mangle: {
        safari10: true,
        toplevel: true
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
        // Optimizar nombres de archivos
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name!.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `img/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false
      }
    },
    // Compresión máxima
    cssCodeSplit: true,
    sourcemap: false,
    // Optimizar tamaño de chunks
    chunkSizeWarningLimit: 300, // Chunks más pequeños para mejor carga
    // Preload de módulos críticos
    modulePreload: {
      polyfill: false
    },
    // Optimizaciones adicionales
    reportCompressedSize: false,
    assetsInlineLimit: 2048 // Reducir límite para assets inline
  },
  css: {
    postcss: './postcss.config.js',
    // Optimizaciones CSS
    devSourcemap: false,
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  },
  optimizeDeps: {
    // Pre-bundling de dependencias críticas
    include: [
      'react', 
      'react-dom', 
      'react-router-dom'
    ],
    exclude: ['lucide-react'],
    // Forzar re-optimización
    force: false,
    esbuildOptions: {
      target: 'es2020'
    }
  },
  // Configuraciones de rendimiento
  server: {
    hmr: {
      overlay: false,
    },
    // Precompresión
    middlewareMode: false
  },
  // Optimizaciones experimentales
  esbuild: {
    // Optimizaciones de esbuild
    legalComments: 'none',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    treeShaking: true,
    target: 'es2020',
    drop: ['console', 'debugger']
  },
  // Configuración de assets
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
  // Configuración de resolución
  resolve: {
    // Alias para imports más rápidos
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages'
    }
  },
  // Configuraciones adicionales de performance
  define: {
    __DEV__: false
  }
});