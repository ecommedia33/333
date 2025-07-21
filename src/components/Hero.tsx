import React, { useEffect, useState } from 'react';
import { ArrowRight, AlertTriangle, TrendingDown, Euro, Clock, Volume2, VolumeX, Zap, Activity, Calendar } from 'lucide-react';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const toggleMute = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#urgent-problem');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    // Intentar reproducir el video automáticamente cuando se carga
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
        // Intentar reproducir automáticamente
        video.play().catch((error) => {
          console.log('Autoplay prevented:', error);
        });
      });

      video.addEventListener('canplay', () => {
        setIsVideoLoaded(true);
        // Segundo intento de autoplay
        video.play().catch((error) => {
          console.log('Autoplay prevented on canplay:', error);
        });
      });

      // Cleanup
      return () => {
        video.removeEventListener('loadeddata', () => {});
        video.removeEventListener('canplay', () => {});
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-primary-gradient overflow-hidden">
      {/* Header optimizado para móvil */}
      <header className="relative z-50 py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Móvil: Logo y eslogan centrados */}
          <div className="flex flex-col items-center space-y-4 md:hidden">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary-500 to-electric-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm p-4 rounded-3xl border border-white/30 shadow-spectacular">
                <img 
                  src="/5841271165010691996-removebg.png" 
                  alt="IAFY Logo" 
                  className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
                  width="200"
                  height="60"
                  loading="eager"
                  decoding="sync"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary-500/25 to-electric-500/25 backdrop-blur-sm border border-primary-400/40 rounded-2xl px-6 py-3 shadow-lg">
                <div className="text-white font-bold text-lg">Automatización Empresarial</div>
                <div className="text-primary-300 text-base font-medium">Powered by AI</div>
              </div>
            </div>
          </div>

          {/* Desktop: Layout original */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-primary-500 to-electric-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/30 shadow-spectacular">
                  <img 
                    src="/5841271165010691996-removebg.png" 
                    alt="IAFY Logo" 
                    className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
                    width="250"
                    height="75"
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-gradient-to-r from-primary-500/25 to-electric-500/25 backdrop-blur-sm border border-primary-400/40 rounded-2xl px-8 py-4 shadow-lg">
                  <div className="text-white font-bold text-2xl">Automatización Empresarial</div>
                  <div className="text-primary-300 text-lg font-medium">Powered by AI</div>
                </div>
              </div>
            </div>
            
            {/* Botón Demo para desktop */}
            <div>
              <a
                href="https://calendly.com/iafyagency/30min?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="relative bg-primary-600 hover:bg-primary-500 px-8 py-4 rounded-2xl border border-primary-400/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Calendar className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-success-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-lg leading-tight">Demo Gratuita</span>
                      <span className="text-primary-200 text-sm font-medium opacity-90">30 min • Sin compromiso</span>
                    </div>
                    
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                <div className="absolute -top-2 -right-2 bg-danger-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse shadow-lg">
                  ¡HOY!
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Efectos de fondo optimizados */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-danger-500/10 rounded-full blur-3xl animate-urgent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Contenido principal optimizado para móvil */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left pt-4 md:pt-8">
            
            {/* Badge de urgencia - optimizado para móvil */}
            <div className="inline-flex items-center space-x-2 md:space-x-3 card-danger rounded-full px-4 py-2 md:px-6 md:py-3 animate-urgent text-sm md:text-base">
              <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-danger-400 animate-pulse-fast" />
              <span className="text-danger-300 font-bold">🚨 Tu negocio pierde clientes</span>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-danger-500 rounded-full animate-ping"></div>
            </div>

            {/* Título principal optimizado para móvil */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="text-white">
                  Tu empresa pierde
                </span>
                <br />
                <span className="text-gradient-danger text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  30.000€ al año
                </span>
                <br />
                <span className="text-gradient-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  por no tener IA
                </span>
              </h1>
              
              <div className="card-primary p-4 md:p-6 rounded-2xl">
                <p className="text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed">
                  <strong className="text-white">Mientras lees esto, tu competencia captura clientes con IA 24/7.</strong> 
                  <span className="text-danger-400 font-bold"> ¿Hasta cuándo vas a permitir que te roben ventas?</span>
                </p>
              </div>
            </div>

            {/* Stats de impacto - optimizado para móvil */}
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <div className="card-danger p-3 md:p-4 rounded-2xl text-center">
                <div className="text-2xl md:text-3xl font-black text-danger-400">40%</div>
                <div className="text-neutral-300 text-xs md:text-sm">Clientes perdidos</div>
              </div>
              <div className="card-primary p-3 md:p-4 rounded-2xl text-center">
                <div className="text-2xl md:text-3xl font-black text-primary-400">2.500€</div>
                <div className="text-neutral-300 text-xs md:text-sm">Pérdida mensual</div>
              </div>
              <div className="card-danger p-3 md:p-4 rounded-2xl text-center">
                <div className="text-2xl md:text-3xl font-black text-danger-400">24h</div>
                <div className="text-neutral-300 text-xs md:text-sm">Sin atención</div>
              </div>
            </div>

            {/* CTA principal - optimizado para móvil */}
            <div className="space-y-4 md:space-y-6">
              <button
                onClick={scrollToNextSection}
                className="group w-full md:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl font-bold text-white btn-danger rounded-2xl shadow-danger transform hover:-translate-y-1 hover:scale-105 transition-all duration-200"
              >
                <span className="mr-2 md:mr-3">🚨 DETÉN LAS PÉRDIDAS AHORA</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              {/* Botón Demo para móvil */}
              <div className="md:hidden">
                <a
                  href="https://calendly.com/iafyagency/30min?month=2025-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-primary-600 hover:bg-primary-500 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Demo Gratuita - 30 min</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-2 md:space-y-0 md:space-x-6 text-neutral-400 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary-400" />
                  <span>Demo en 30 min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-success-400" />
                  <span>Implementación 7 días</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Euro className="w-4 h-4 text-danger-400" />
                  <span>30 días garantía</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video optimizado - SOLUCIONADO el problema del overlay */}
          <div className="relative group pt-4 md:pt-8 order-first lg:order-last">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary-500 to-danger-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            
            <div className="relative rounded-2xl overflow-hidden card-primary">
              <div className="relative aspect-video">
                <video
                  id="hero-video"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                  onLoadedData={() => setIsVideoLoaded(true)}
                  onCanPlay={() => setIsVideoLoaded(true)}
                  onError={() => setIsVideoLoaded(false)}
                  width="800"
                  height="450"
                >
                  <source src="https://videomp46523.live-website.com/wp-content/uploads/2025/07/VIDEO-WEBINAR-PREVIO-A-DEMO-2.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>

                {/* Control de audio - único control disponible */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 z-10">
                  <button
                    onClick={toggleMute}
                    className="bg-black/60 hover:bg-black/80 text-white p-2 md:p-3 rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg"
                    title={isMuted ? 'Activar audio' : 'Silenciar audio'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 md:w-5 md:h-5" />
                    ) : (
                      <Volume2 className="w-4 h-4 md:w-5 md:h-5" />
                    )}
                  </button>
                </div>

                {/* Indicador de estado de audio */}
                <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10">
                  <div className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                    isMuted 
                      ? 'bg-danger-500/80 text-white' 
                      : 'bg-success-500/80 text-white'
                  }`}>
                    {isMuted ? '🔇 Sin audio' : '🔊 Con audio'}
                  </div>
                </div>

                {/* Overlay inferior MOVIDO PARA NO TAPAR LA CARA - Solo en desktop */}
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 hidden md:block">
                  <div className="card-danger rounded-xl p-3 md:p-4">
                    <h3 className="text-white font-bold text-base md:text-lg mb-1 flex items-center">
                      ⚠️ VE CÓMO TUS COMPETIDORES YA LO USAN
                    </h3>
                    <p className="text-danger-200 text-sm md:text-base">Mientras ves esto, pierdes clientes reales</p>
                  </div>
                </div>

                {!isVideoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 z-20">
                    <div className="text-center">
                      <div className="w-8 h-8 md:w-12 md:h-12 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin-fast mx-auto mb-4"></div>
                      <p className="text-neutral-400 text-sm md:text-base">Cargando video...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Overlay para móvil - FUERA del video para no tapar */}
        <div className="md:hidden mt-4">
          <div className="card-danger rounded-xl p-3">
            <h3 className="text-white font-bold text-base mb-1 flex items-center">
              ⚠️ VE CÓMO TUS COMPETIDORES YA LO USAN
            </h3>
            <p className="text-danger-200 text-sm">Mientras ves esto, pierdes clientes reales</p>
          </div>
        </div>
      </div>

      {/* Indicador de scroll - optimizado para móvil */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce-fast">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-gradient-to-b from-primary-400 to-danger-400 rounded-full mt-1 md:mt-2 animate-pulse-fast"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;