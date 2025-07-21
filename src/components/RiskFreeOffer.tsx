import React from 'react';
import { Shield, CheckCircle, ArrowRight, Sparkles, Clock, Euro, Target, AlertTriangle, Zap, Activity } from 'lucide-react';

const RiskFreeOffer = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-primary-gradient overflow-hidden">
      {/* Efectos de fondo espectaculares */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-success-500/15 to-primary-500/15 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-pattern-primary opacity-30"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative group">
          {/* Efecto de brillo espectacular */}
          <div className="absolute -inset-10 bg-gradient-to-r from-success-500 via-primary-500 to-electric-500 rounded-3xl blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          <div className="relative card-primary rounded-3xl p-16 lg:p-20 shadow-spectacular border-2 border-primary-400/30">
            {/* Badge espectacular */}
            <div className="inline-flex items-center space-x-3 card-success rounded-full px-8 py-4 mb-10 shadow-spectacular animate-electric">
              <Shield className="w-6 h-6 text-success-400" />
              <span className="text-success-300 font-medium text-lg">OFERTA SIN RIESGO</span>
            </div>

            {/* Icono principal espectacular */}
            <div className="flex justify-center mb-10">
              <div className="icon-success p-8 rounded-full shadow-spectacular">
                <Shield className="w-20 h-20 text-white" />
              </div>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-success-100 to-primary-200 mb-10">
              Prueba IAFY 30 días GRATIS
            </h2>
            
            <p className="text-3xl lg:text-4xl text-neutral-300 leading-relaxed mb-16 font-medium">
              <span className="text-success-400 font-bold text-4xl">"Si no recuperas la inversión en 30 días, te devolvemos todo el dinero."</span>
            </p>

            {/* Características de eliminación de riesgo espectaculares */}
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              {[
                { 
                  icon: CheckCircle, 
                  title: 'Sin permanencia', 
                  description: 'Cancela cuando quieras, sin penalizaciones',
                  color: 'success',
                  businessIcon: Activity
                },
                { 
                  icon: Euro, 
                  title: 'Garantía total', 
                  description: '30 días para ver resultados o dinero devuelto',
                  color: 'primary',
                  businessIcon: Target
                },
                { 
                  icon: Target, 
                  title: 'Resultados garantizados', 
                  description: 'O trabajamos gratis hasta conseguirlos',
                  color: 'electric',
                  businessIcon: Zap
                }
              ].map((feature, index) => (
                <div key={index} className="group">
                  <div className={`card-${feature.color} p-8 rounded-3xl transform hover:-translate-y-2 transition-all duration-300 shadow-spectacular`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`icon-${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <feature.businessIcon className={`w-8 h-8 text-${feature.color}-400 opacity-60`} />
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-4">{feature.title}</h3>
                    <p className="text-neutral-400 text-lg">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sección de urgencia espectacular */}
            <div className="card-danger rounded-3xl p-10 mb-10 shadow-spectacular border-2 border-danger-400/40">
              <AlertTriangle className="w-16 h-16 text-danger-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-6">
                ⚠️ CADA DÍA QUE ESPERAS PIERDES DINERO
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-black text-white mb-2 flex items-center justify-center">
                    <span className="text-danger-400">-150</span>
                    <Euro className="w-8 h-8 text-danger-400 ml-1" />
                  </div>
                  <div className="text-neutral-300 text-lg">Por cada llamada perdida</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-2 flex items-center justify-center">
                    <span className="text-gold-400">-2.500</span>
                    <Euro className="w-8 h-8 text-gold-400 ml-1" />
                  </div>
                  <div className="text-neutral-300 text-lg">Coste mensual evitable</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-2 flex items-center justify-center">
                    <span className="text-primary-400">-30.000</span>
                    <Euro className="w-8 h-8 text-primary-400 ml-1" />
                  </div>
                  <div className="text-neutral-300 text-lg">Pérdida anual estimada</div>
                </div>
              </div>
            </div>

            {/* CTA final espectacular */}
            <div className="space-y-8">
              <a
                href="https://calendly.com/iafyagency/30min?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-16 py-8 text-3xl font-bold text-white btn-primary rounded-3xl shadow-spectacular transform hover:-translate-y-3 hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-10 h-10 mr-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>EMPEZAR PRUEBA GRATUITA</span>
                <ArrowRight className="w-10 h-10 ml-4 group-hover:translate-x-2 transition-transform duration-200" />
              </a>

              <p className="text-neutral-400 text-2xl">
                <strong className="text-white">Demo en 30 minutos</strong> • <strong className="text-white">Implementación en 7 días</strong> • <strong className="text-success-400">30 días de garantía</strong>
              </p>
            </div>

            {/* Indicadores de confianza espectaculares */}
            <div className="mt-10 flex flex-wrap justify-center items-center gap-8 text-neutral-400 text-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success-400 rounded-full"></div>
                <span>Seguro y confiable</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                <span>Soporte 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gold-400 rounded-full"></div>
                <span>Resultados garantizados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskFreeOffer;