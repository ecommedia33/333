import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Optimización crítica de renderizado
const root = createRoot(document.getElementById('root')!);

// Detectar dispositivos de gama baja
const isLowEndDevice = () => {
  // Detectar por memoria disponible
  if ('deviceMemory' in navigator && (navigator as any).deviceMemory <= 2) {
    return true;
  }
  
  // Detectar por conexión lenta
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
      return true;
    }
  }
  
  // Detectar por user agent (dispositivos antiguos)
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes('android 4') || userAgent.includes('iphone os 9')) {
    return true;
  }
  
  return false;
};

// Aplicar optimizaciones para dispositivos de gama baja
if (isLowEndDevice()) {
  document.documentElement.classList.add('low-end-device');
  
  // Reducir calidad de video
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.preload = 'none';
    (video as HTMLVideoElement).poster = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWUyOTNiIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNsaWNrIHBhcmEgcmVwcm9kdWNpcjwvdGV4dD48L3N2Zz4=';
  });
}

// Preload crítico de recursos
const preloadCriticalResources = () => {
  // Solo preload en dispositivos de gama alta
  if (isLowEndDevice()) return;
  
  // Preload de fuentes críticas
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
  fontLink.as = 'style';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);

  // Preload de imágenes críticas
  const logoImg = new Image();
  logoImg.src = '/5841271165010691996-removebg.png';
  logoImg.width = 200;
  logoImg.height = 60;
  logoImg.loading = 'eager';
  logoImg.decoding = 'sync';
  
  // Preconnect a dominios externos críticos
  const preconnects = [
    'https://assets.calendly.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];
  
  preconnects.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Optimización de performance crítica
const optimizePerformance = () => {
  // Optimizaciones específicas para dispositivos de gama baja
  if (isLowEndDevice()) {
    // Reducir frecuencia de animaciones
    document.documentElement.style.setProperty('--animation-duration', '1s');
    
    // Simplificar efectos visuales
    const style = document.createElement('style');
    style.textContent = `
      .low-end-device .blur-xl,
      .low-end-device .blur-3xl {
        filter: none !important;
      }
      .low-end-device .backdrop-blur-sm,
      .low-end-device .backdrop-blur-lg {
        backdrop-filter: none !important;
        background: rgba(30, 41, 59, 0.8) !important;
      }
      .low-end-device .animate-pulse,
      .low-end-device .animate-bounce,
      .low-end-device .animate-spin {
        animation: none !important;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Optimizar scroll
  if ('scrollBehavior' in document.documentElement.style) {
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  // Optimizar rendering
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Tareas no críticas
      preloadCriticalResources();
    });
  } else {
    // Fallback para navegadores sin soporte
    setTimeout(preloadCriticalResources, 50);
  }

  // Optimizar imágenes lazy loading
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      (img as HTMLImageElement).src = (img as HTMLImageElement).dataset.src!;
    });
  }

  // Optimizar videos
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    // Optimizar preload según dispositivo
    if (isLowEndDevice()) {
      video.preload = 'none';
    } else {
      video.preload = 'metadata';
    }
    video.playsInline = true;
    
    // Añadir controles de carga inteligente
    video.addEventListener('loadstart', () => {
      console.log('Video loading started');
    });
    
    video.addEventListener('error', (e) => {
      console.log('Video error:', e);
      // Fallback para errores de video
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'w-full h-full bg-neutral-800 flex items-center justify-center rounded-2xl';
      fallbackDiv.innerHTML = `
        <div class="text-center text-white p-8">
          <div class="text-2xl mb-4">📹</div>
          <div class="text-lg font-semibold mb-2">Video no disponible</div>
          <div class="text-sm text-neutral-400">Problema de conexión</div>
        </div>
      `;
      video.parentNode?.replaceChild(fallbackDiv, video);
    });
  });
};

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
optimizePerformance();

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

// Optimización de memoria
window.addEventListener('beforeunload', () => {
  // Cleanup de recursos
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.pause();
    video.src = '';
    video.load();
  });
});

// Optimización de viewport
const viewport = document.querySelector('meta[name=viewport]');
if (viewport) {
  viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no');
}

// Optimización de DNS prefetch
const dnsPrefetch = [
  'https://wa.me',
  'https://calendly.com',
  'https://images.pexels.com'
];

dnsPrefetch.forEach(domain => {
  const link = document.createElement('link');
  link.rel = 'dns-prefetch';
  link.href = domain;
  document.head.appendChild(link);
});

// Optimización de compresión de texto
if ('CompressionStream' in window) {
  // Habilitar compresión de texto cuando esté disponible
  console.log('Compresión de texto disponible');
}