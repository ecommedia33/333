import React from 'react';
import { Zap, Target, TrendingUp, Shield, CheckCircle, ArrowRight, Sparkles, Clock, Users, Euro, Activity, BarChart3 } from 'lucide-react';

const ImmediateSolution = () => {
  const solutions = [
    {
      icon: Target,
      title: 'CAPTURA 100% DE LEADS',
      description: 'Respuesta instantánea 24/7. Nunca más pierdas un cliente por no contestar.',
      before: 'Pierdes 40% de llamadas',
      after: 'Capturas 100% de leads',
      improvement: '+150% conversión',
      color: 'success',
      businessIcon: BarChart3
    },
    {
      icon: Zap,
      title: 'AUTOMATIZACIÓN TOTAL',
      description: 'WhatsApp, llamadas, agendas. Todo automático sin intervención humana.',
      before: '4h diarias perdidas',
      after: 'Automatización completa',
      improvement: '4h ahorradas/día',
      color: 'primary',
      businessIcon: Activity
    },
    {
      icon: TrendingUp,
      title: 'REDUCE COSTES OPERATIVOS 70%',
      description: 'Elimina personal administrativo. La IA hace el trabajo de 3 empleados.',
      before: '2.500€/mes en personal',
      after: '497€/mes todo incluido',
      improvement: '2.000€ ahorrados',
      color: 'electric',
      businessIcon: Euro
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-neutral-900 via-success-900/20 to-neutral-900 overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-success-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-success-500/20 to-primary-500/20 backdrop-blur-sm border border-success-500/30 rounded-full px-8 py-4 mb-8 shadow-lg">
            <Sparkles className="w-6 h-6 text-success-400 animate-spin" />
            <span className="text-success-300 font-medium text-lg">SOLUCIÓN INMEDIATA</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-success-100 to-primary-200 mb-8">
            IAFY: La solución para tu empresa
          </h2>
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-8 rounded-3xl border border-neutral-700/50">
            <p className="text-2xl lg:text-3xl text-neutral-300 leading-relaxed">
              <span className="text-success-400 font-bold text-3xl">IMPLEMENTACIÓN EN 7 DÍAS.</span> Tu empresa operando 24/7 con IA que nunca duerme, nunca se enferma, nunca pide vacaciones.
            </p>
          </div>
        </div>

        {/* Grid de soluciones */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {solutions.map((solution, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-3 bg-gradient-to-r from-${solution.color}-500 to-${solution.color}-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
              <div className={`relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-10 rounded-3xl border border-${solution.color}-500/30 transform hover:-translate-y-6 transition-all duration-500 h-full shadow-lg`}>
                <div className="flex items-center justify-between mb-8">
                  <div className={`bg-gradient-to-r from-${solution.color}-500 to-${solution.color}-600 w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                  <solution.businessIcon className={`w-10 h-10 text-${solution.color}-400 opacity-60`} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">
                  {solution.title}
                </h3>
                
                <p className="text-neutral-400 leading-relaxed mb-8 text-lg">
                  {solution.description}
                </p>

                {/* Antes/Después */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-lg p-4 bg-gradient-to-br from-danger-900/30 to-neutral-900/50 rounded-2xl border border-danger-500/30">
                    <span className="text-danger-400 font-medium">❌ ANTES:</span>
                    <span className="text-neutral-400">{solution.before}</span>
                  </div>
                  <div className="flex items-center justify-between text-lg p-4 bg-gradient-to-br from-success-900/30 to-neutral-900/50 rounded-2xl border border-success-500/30">
                    <span className="text-success-400 font-medium">✅ DESPUÉS:</span>
                    <span className="text-white font-semibold">{solution.after}</span>
                  </div>
                </div>

                {/* Badge de mejora */}
                <div className={`inline-block bg-gradient-to-r from-${solution.color}-500 to-${solution.color}-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg`}>
                  {solution.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA de implementación */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-3xl p-16 max-w-5xl mx-auto shadow-lg border-2 border-success-400/30">
            <Shield className="w-20 h-20 text-success-400 mx-auto mb-8" />
            <h3 className="text-4xl font-bold text-white mb-6">
              🚀 IMPLEMENTACIÓN GARANTIZADA EN 7 DÍAS
            </h3>
            <p className="text-2xl text-neutral-300 mb-10">
              No esperes más. Cada día que pasa, pierdes más dinero. 
              <span className="text-success-400 font-bold"> Tu competencia ya está usando IA.</span>
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 rounded-2xl border border-neutral-700/50">
                <div className="text-3xl font-bold text-success-400 mb-2">DÍA 1-2</div>
                <div className="text-neutral-300 text-lg">Configuración inicial</div>
                <div className="text-neutral-400 text-sm">Análisis y setup</div>
              </div>
              <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 rounded-2xl border border-neutral-700/50">
                <div className="text-3xl font-bold text-primary-400 mb-2">DÍA 3-5</div>
                <div className="text-neutral-300 text-lg">Pruebas y ajustes</div>
                <div className="text-neutral-400 text-sm">Optimización</div>
              </div>
              <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 rounded-2xl border border-neutral-700/50">
                <div className="text-3xl font-bold text-gold-400 mb-2">DÍA 6-7</div>
                <div className="text-neutral-300 text-lg">Lanzamiento</div>
                <div className="text-neutral-400 text-sm">Operación 24/7</div>
              </div>
            </div>

            <a
              href="https://calendly.com/iafyagency/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-white bg-gradient-to-r from-success-600 to-primary-600 hover:from-success-500 hover:to-primary-500 rounded-3xl shadow-lg transform hover:-translate-y-3 hover:scale-105 transition-all duration-300"
            >
              <span>IMPLEMENTAR AHORA - 7 DÍAS</span>
              <ArrowRight className="w-8 h-8 ml-4 group-hover:translate-x-2 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmediateSolution;