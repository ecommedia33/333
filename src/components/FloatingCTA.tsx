import React, { useState, useEffect } from 'react';
import { Calendar, X, Sparkles, ArrowRight, AlertTriangle, Zap, Target } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 md:hidden" style={{ right: '5.5rem' }}>
      <div className={`relative group transition-all duration-300 ${
        isMinimized ? 'p-2' : 'p-3'
      }`}>
        {/* Efecto de brillo espectacular mejorado */}
        <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 via-success-500 to-electric-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
        
        <div className="relative bg-gradient-to-br from-neutral-900/95 to-neutral-800/95 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-primary-400/40">
          {isMinimized ? (
            <button
              onClick={() => setIsMinimized(false)}
              className="flex items-center justify-center w-full py-4 px-6 text-white bg-gradient-to-r from-danger-600 to-primary-600 hover:from-danger-500 hover:to-primary-500 rounded-3xl font-bold text-base transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <AlertTriangle className="w-5 h-5 mr-2 animate-pulse" />
              <span className="text-sm">DEMO URGENTE</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          ) : (
            <div className="space-y-4 p-4">
              {/* Header mejorado */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-success-500 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm leading-tight">
                      🚨 ¿Listo para automatizar?
                    </h3>
                    <p className="text-xs text-primary-300">Recupera 30.000€/año</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsMinimized(true)}
                  className="text-neutral-400 hover:text-white transition-colors duration-200 p-1 rounded-full hover:bg-neutral-700/50"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Botón principal mejorado */}
              <a
                href="https://calendly.com/iafyagency/30min?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-full py-4 px-4 text-white bg-gradient-to-r from-success-600 via-primary-600 to-electric-600 hover:from-success-500 hover:via-primary-500 hover:to-electric-500 rounded-2xl font-bold text-base transition-all duration-200 transform hover:scale-105 shadow-xl border border-success-400/30"
              >
                <Calendar className="w-5 h-5 mr-2" />
                <span>DEMO GRATUITA</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              
              {/* Beneficios rápidos */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-neutral-800/50 p-2 rounded-xl border border-neutral-700/30">
                  <div className="text-success-400 font-bold text-xs">30 min</div>
                  <div className="text-neutral-400 text-xs">Demo</div>
                </div>
                <div className="bg-neutral-800/50 p-2 rounded-xl border border-neutral-700/30">
                  <div className="text-primary-400 font-bold text-xs">7 días</div>
                  <div className="text-neutral-400 text-xs">Setup</div>
                </div>
                <div className="bg-neutral-800/50 p-2 rounded-xl border border-neutral-700/30">
                  <div className="text-electric-400 font-bold text-xs">30 días</div>
                  <div className="text-neutral-400 text-xs">Garantía</div>
                </div>
              </div>
              
              {/* Footer con urgencia */}
              <div className="text-center">
                <p className="text-xs text-neutral-400">
                  <span className="text-danger-400 font-semibold">⚠️ Cada día pierdes 83€</span> • Sin compromisos
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;