import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Optimización crítica de renderizado
const root = createRoot(document.getElementById('root')!);

// Eliminar skeleton loader
const removeSkeletonLoader = () => {
  const skeleton = document.querySelector('.skeleton');
  if (skeleton) {
    skeleton.remove();
  }
};

// Renderizado optimizado
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Optimizaciones post-render
removeSkeletonLoader();

// Service Worker optimizado para caching agresivo
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'imports'
    }).then(registration => {
      // Actualización automática del SW
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // Nueva versión disponible
              if (confirm('Nueva versión disponible. ¿Recargar?')) {
                window.location.reload();
              }
            }
          });
        }
      });
    }).catch(() => {
      // Service worker registration failed silently
    });
  });
}