// Service Worker ultra-optimizado para velocidad máxima
const CACHE_NAME = 'iafy-v3-ultra';
const STATIC_CACHE = 'iafy-static-v3';
const DYNAMIC_CACHE = 'iafy-dynamic-v3';
const IMAGE_CACHE = 'iafy-images-v3';

// Recursos críticos para cache inmediato
const CRITICAL_RESOURCES = [
  '/',
  '/src/main.tsx',
  '/src/index.css',
  '/5841271165010691996-removebg.png'
];

// Recursos estáticos para cache agresivo
const STATIC_RESOURCES = [
  '/src/App.tsx',
  '/src/components/Hero.tsx',
  '/src/components/UrgentProblem.tsx',
  '/src/components/ImmediateSolution.tsx',
  '/src/components/ROICalculator.tsx',
  '/src/components/RiskFreeOffer.tsx',
  '/src/components/CalendlySection.tsx',
  '/src/components/FloatingCTA.tsx',
  '/src/components/Footer.tsx',
  '/src/components/ChatBot.tsx'
];

// Estrategias de cache optimizadas
const CACHE_STRATEGIES = {
  // Cache First para recursos estáticos
  cacheFirst: [
    /\.(?:js|css|woff2?|png|jpg|jpeg|svg|gif|webp|avif)$/,
    /fonts\.googleapis\.com/,
    /fonts\.gstatic\.com/
  ],
  // Network First para contenido dinámico
  networkFirst: [
    /\/api\//,
    /calendly\.com/,
    /wa\.me/
  ],
  // Stale While Revalidate para páginas
  staleWhileRevalidate: [
    /\.(?:html)$/,
    /\/$/ // Homepage
  ]
};

// Instalación optimizada
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      // Cache crítico
      caches.open(CACHE_NAME).then(cache => 
        cache.addAll(CRITICAL_RESOURCES)
      ),
      // Cache estático
      caches.open(STATIC_CACHE).then(cache => 
        cache.addAll(STATIC_RESOURCES)
      ),
      // Cache de imágenes
      caches.open(IMAGE_CACHE)
    ]).then(() => {
      // Activar inmediatamente
      self.skipWaiting();
    })
  );
});

// Activación optimizada
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      // Limpiar caches antiguos
      caches.keys().then(cacheNames => 
        Promise.all(
          cacheNames
            .filter(cacheName => 
              cacheName !== CACHE_NAME && 
              cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE &&
              cacheName !== IMAGE_CACHE
            )
            .map(cacheName => caches.delete(cacheName))
        )
      ),
      // Tomar control inmediato
      self.clients.claim()
    ])
  );
});

// Fetch optimizado con estrategias múltiples
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo interceptar GET requests
  if (request.method !== 'GET') return;

  // Determinar estrategia de cache
  let strategy = 'networkFirst'; // Default

  for (const [strategyName, patterns] of Object.entries(CACHE_STRATEGIES)) {
    if (patterns.some(pattern => pattern.test(url.href))) {
      strategy = strategyName;
      break;
    }
  }

  event.respondWith(handleRequest(request, strategy));
});

// Manejador de requests optimizado
async function handleRequest(request, strategy) {
  const url = new URL(request.url);
  
  try {
    switch (strategy) {
      case 'cacheFirst':
        return await cacheFirst(request);
      case 'networkFirst':
        return await networkFirst(request);
      case 'staleWhileRevalidate':
        return await staleWhileRevalidate(request);
      default:
        return await networkFirst(request);
    }
  } catch (error) {
    // Fallback para errores
    return await caches.match('/') || new Response('Offline', { status: 503 });
  }
}

// Cache First Strategy
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await getCacheForRequest(request);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    return new Response('Offline', { status: 503 });
  }
}

// Network First Strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await getCacheForRequest(request);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    const cachedResponse = await caches.match(request);
    return cachedResponse || new Response('Offline', { status: 503 });
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);
  
  const networkResponsePromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      const cache = getCacheForRequest(request);
      cache.then(c => c.put(request, networkResponse.clone()));
    }
    return networkResponse;
  }).catch(() => null);

  return cachedResponse || await networkResponsePromise || new Response('Offline', { status: 503 });
}

// Obtener cache apropiado para el request
async function getCacheForRequest(request) {
  const url = new URL(request.url);
  
  if (/\.(png|jpg|jpeg|svg|gif|webp|avif)$/i.test(url.pathname)) {
    return await caches.open(IMAGE_CACHE);
  }
  
  if (/\.(js|css|woff2?)$/i.test(url.pathname)) {
    return await caches.open(STATIC_CACHE);
  }
  
  return await caches.open(DYNAMIC_CACHE);
}

// Limpieza automática de cache
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CLEAN_CACHE') {
    cleanOldCaches();
  }
});

async function cleanOldCaches() {
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter(name => 
    !name.includes('v3') && name.startsWith('iafy-')
  );
  
  await Promise.all(oldCaches.map(name => caches.delete(name)));
}

// Preload de recursos críticos
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'PRELOAD_RESOURCES') {
    preloadResources(event.data.urls);
  }
});

async function preloadResources(urls) {
  const cache = await caches.open(STATIC_CACHE);
  const requests = urls.map(url => fetch(url).then(response => {
    if (response.ok) {
      cache.put(url, response.clone());
    }
    return response;
  }).catch(() => null));
  
  await Promise.all(requests);
}

// Optimización de background sync
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Sincronización en background para datos críticos
  try {
    // Actualizar cache de recursos críticos
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CRITICAL_RESOURCES);
  } catch (error) {
    console.log('Background sync failed:', error);
  }
}

// Compresión de respuestas
self.addEventListener('fetch', event => {
  if (event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      handleRequest(event.request, 'staleWhileRevalidate').then(response => {
        // Comprimir respuesta si es posible
        if (response.headers.get('content-encoding')) {
          return response;
        }
        
        return response;
      })
    );
  }
});