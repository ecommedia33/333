import React, { useEffect } from 'react';
import { Calendar, Sparkles, CheckCircle, Play, Users, Clock, Zap, Activity, Target } from 'lucide-react';

const CalendlySection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="calendly-section" className="relative py-24 lg:py-32 bg-primary-gradient overflow-hidden">
      {/* Efectos de fondo espectaculares */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl animate-spectacular"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success-500/15 rounded-full blur-3xl animate-spectacular delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-electric-500/15 rounded-full blur-3xl animate-spectacular delay-500"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-30"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 card-primary rounded-full px-8 py-4 mb-8 shadow-spectacular animate-electric">
            <Calendar className="w-6 h-6 text-primary-400" />
            <span className="text-primary-300 font-medium text-lg">Demo Personalizada</span>
            <Target className="w-5 h-5 text-primary-400 opacity-60" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-100 to-success-200 mb-8">
            ¿Listo para transformar tu empresa con IA?
          </h2>
          <div className="max-w-5xl mx-auto card-primary p-8 rounded-3xl shadow-spectacular">
            <p className="text-2xl lg:text-3xl text-neutral-300 leading-relaxed">
              Agenda tu demo personalizada y descubre cómo IAFY puede automatizar tu empresa profesionalmente
            </p>
          </div>
        </div>

        {/* Grid de beneficios espectacular */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Clock, text: 'Demo de 30 minutos', color: 'primary', businessIcon: Activity },
            { icon: Users, text: 'Sin compromisos', color: 'success', businessIcon: Target },
            { icon: Play, text: 'Completamente gratuita', color: 'electric', businessIcon: Zap }
          ].map((benefit, index) => (
            <div key={index} className="group">
              <div className={`card-${benefit.color} p-8 rounded-3xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 shadow-spectacular`}>
                <div className="flex items-center justify-center space-x-4">
                  <benefit.icon className={`w-8 h-8 text-${benefit.color}-400 group-hover:scale-110 transition-transform duration-300`} />
                  <span className="font-semibold text-white text-xl">{benefit.text}</span>
                  <benefit.businessIcon className={`w-6 h-6 text-${benefit.color}-400 opacity-60`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contenedor de widget Calendly optimizado */}
        <div className="relative group">
          <div className="absolute -inset-6 bg-gradient-to-r from-primary-500 via-success-500 to-electric-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          <div className="relative card-primary rounded-3xl overflow-hidden shadow-spectacular border-2 border-primary-400/30">
            {/* Header del widget */}
            <div className="bg-gradient-to-r from-primary-600/20 to-success-600/20 p-6 border-b border-primary-400/20">
              <div className="flex items-center justify-center space-x-4">
                <Calendar className="w-8 h-8 text-primary-400" />
                <h3 className="text-2xl font-bold text-white">Agenda tu Demo Personalizada</h3>
                <Sparkles className="w-8 h-8 text-success-400" />
              </div>
              <p className="text-center text-neutral-300 mt-3 text-lg">
                Selecciona el horario que mejor te convenga
              </p>
            </div>

            {/* Widget de Calendly ajustado */}
            <div className="p-4">
              <div 
                className="calendly-inline-widget w-full" 
                data-url="https://calendly.com/iafyagency/30min?month=2025-06&background_color=1e293b&text_color=ffffff&primary_color=3b82f6"
                style={{ 
                  minWidth: '100%', 
                  height: '700px',
                  borderRadius: '1rem',
                  overflow: 'hidden'
                }}
              ></div>
            </div>

            {/* Footer del widget */}
            <div className="bg-gradient-to-r from-success-600/20 to-primary-600/20 p-6 border-t border-success-400/20">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-success-400" />
                  <span className="text-neutral-300 font-medium">30 minutos</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-400" />
                  <span className="text-neutral-300 font-medium">Sin compromisos</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-electric-400" />
                  <span className="text-neutral-300 font-medium">Completamente gratis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA de respaldo espectacular */}
        <div className="text-center mt-10">
          <a
            href="https://calendly.com/iafyagency/30min?month=2025-06"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-10 py-5 text-2xl font-bold text-white btn-primary rounded-3xl shadow-spectacular transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            Abrir Calendly en nueva ventana
          </a>
        </div>

        {/* Indicadores de confianza espectaculares */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-10 opacity-80">
          <div className="flex items-center space-x-3 text-neutral-400">
            <div className="w-4 h-4 bg-success-400 rounded-full animate-pulse"></div>
            <span className="font-medium text-lg">Seguro SSL</span>
          </div>
          <div className="flex items-center space-x-3 text-neutral-400">
            <div className="w-4 h-4 bg-primary-400 rounded-full animate-pulse delay-300"></div>
            <span className="font-medium text-lg">GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-3 text-neutral-400">
            <div className="w-4 h-4 bg-electric-400 rounded-full animate-pulse delay-600"></div>
            <span className="font-medium text-lg">Datos Protegidos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;