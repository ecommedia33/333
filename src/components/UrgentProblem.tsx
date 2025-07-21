import React from 'react';
import { AlertTriangle, TrendingDown, Clock, Users, Phone, MessageSquare, Euro, Target, ArrowDown, Zap, Activity } from 'lucide-react';

const UrgentProblem = () => {
  const problems = [
    {
      icon: Phone,
      title: 'Llamadas perdidas = Dinero perdido',
      description: 'Cada llamada no contestada son 150-500€ que se van directamente a tu competencia.',
      stat: '40%',
      color: 'danger',
      impact: 'de llamadas perdidas',
      dailyLoss: '600€/día',
      businessIcon: Activity
    },
    {
      icon: Clock,
      title: 'Horario limitado = Oportunidades perdidas',
      description: 'Tu negocio "cierra" pero los clientes buscan atención 24/7. Mientras duermes, otros facturan.',
      stat: '16h',
      color: 'electric',
      impact: 'sin atención diaria',
      dailyLoss: '800€/día',
      businessIcon: Target
    },
    {
      icon: Users,
      title: 'Personal caro para tareas básicas',
      description: 'Pagas 2.000-3.000€/mes a empleados para responder lo mismo 100 veces al día.',
      stat: '2.500€',
      color: 'primary',
      impact: 'coste mensual evitable',
      dailyLoss: '83€/día',
      businessIcon: Euro
    }
  ];

  return (
    <section id="urgent-problem" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-neutral-900 via-danger-900/20 to-neutral-900 overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-danger-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header optimizado para móvil */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center space-x-2 md:space-x-4 bg-gradient-to-r from-danger-500/20 to-gold-500/20 backdrop-blur-sm border border-danger-500/30 rounded-full px-6 py-3 md:px-10 md:py-5 mb-6 md:mb-8 shadow-lg">
            <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-danger-400 animate-pulse" />
            <span className="text-danger-300 font-bold text-base md:text-xl">🚨 CRISIS SILENCIOSA EN TU EMPRESA</span>
            <div className="w-3 h-3 md:w-4 md:h-4 bg-danger-500 rounded-full animate-ping"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-danger-100 to-gold-200 mb-6 md:mb-8 leading-tight">
            Cada día que esperas,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-primary-400">
              pierdes más dinero
            </span>
          </h2>
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-neutral-700/50">
            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-300 leading-relaxed">
              <span className="text-danger-400 font-bold text-2xl md:text-3xl">REALIDAD EMPRESARIAL BRUTAL:</span> Mientras lees esto, tus competidores están capturando clientes que deberían ser tuyos
            </p>
          </div>
        </div>

        {/* Grid de problemas optimizado para móvil */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-16 md:mb-20">
          {problems.map((problem, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-2 md:-inset-3 bg-gradient-to-r from-${problem.color}-500 to-${problem.color}-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
              <div className={`relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-3xl border border-${problem.color}-500/30 transform hover:-translate-y-3 md:hover:-translate-y-6 transition-all duration-500 shadow-lg`}>
                <div className="flex items-start justify-between mb-6 md:mb-8">
                  <div className={`bg-gradient-to-r from-${problem.color}-500 to-${problem.color}-600 w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <problem.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="text-right">
                    <div className={`text-4xl md:text-5xl lg:text-6xl font-black text-${problem.color}-400`}>
                      {problem.stat}
                    </div>
                    <div className={`text-${problem.color}-400 text-sm md:text-lg font-medium`}>{problem.impact}</div>
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                  {problem.title}
                </h3>
                
                <p className="text-neutral-400 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
                  {problem.description}
                </p>

                <div className={`bg-gradient-to-br from-${problem.color}-900/30 to-neutral-900/50 rounded-2xl p-4 md:p-6 border-2 border-${problem.color}-400/30`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <problem.businessIcon className={`w-5 h-5 md:w-6 md:h-6 text-${problem.color}-400`} />
                      <div className={`w-2 h-2 md:w-3 md:h-3 bg-${problem.color}-500 rounded-full animate-ping`}></div>
                      <span className={`text-${problem.color}-400 text-base md:text-lg font-medium`}>PÉRDIDA ACTIVA</span>
                    </div>
                    <div className={`text-${problem.color}-300 font-bold text-xl md:text-2xl`}>{problem.dailyLoss}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impacto total optimizado para móvil */}
        <div className="text-center">
          <div className="relative group">
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-danger-500 via-gold-500 to-primary-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 max-w-6xl mx-auto shadow-lg border-2 border-danger-400/30">
              <Target className="w-16 h-16 md:w-20 md:h-20 text-danger-400 mx-auto mb-6 md:mb-8" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-10">
                ⚠️ DIAGNÓSTICO COMPLETO: IMPACTO TOTAL EN TU EMPRESA
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10">
                <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 md:p-8 rounded-3xl border border-neutral-700/50">
                  <div className="text-5xl md:text-6xl font-black text-white mb-3 md:mb-4 flex items-center justify-center">
                    <span className="text-danger-400">-30.000</span>
                    <Euro className="w-8 h-8 md:w-12 md:h-12 text-danger-400 ml-2" />
                  </div>
                  <div className="text-neutral-300 font-semibold text-lg md:text-xl">Pérdida anual estimada</div>
                  <div className="text-danger-400 text-base md:text-lg mt-2">Solo por llamadas perdidas</div>
                </div>
                <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 md:p-8 rounded-3xl border border-neutral-700/50">
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-electric-400 mb-3 md:mb-4">
                    -200
                  </div>
                  <div className="text-neutral-300 font-semibold text-lg md:text-xl">Clientes perdidos/año</div>
                  <div className="text-gold-400 text-base md:text-lg mt-2">Que van a tu competencia</div>
                </div>
                <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 md:p-8 rounded-3xl border border-neutral-700/50">
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-success-400 to-primary-400 mb-3 md:mb-4">
                    0h
                  </div>
                  <div className="text-neutral-300 font-semibold text-lg md:text-xl">Atención nocturna</div>
                  <div className="text-primary-400 text-base md:text-lg mt-2">Mientras competencia trabaja</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-danger-900/30 to-neutral-900/50 rounded-3xl p-6 md:p-8 border-2 border-danger-400/40">
                <p className="text-xl md:text-2xl text-danger-300 font-bold mb-3 md:mb-4">
                  ⚠️ URGENCIA EMPRESARIAL: Cada día que esperas, estas cifras aumentan
                </p>
                <p className="text-neutral-400 text-lg md:text-xl">
                  Tu competencia ya está usando IA para capturar estos clientes perdidos
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flecha de transición optimizada para móvil */}
        <div className="flex justify-center mt-16 md:mt-20">
          <div className="bg-gradient-to-r from-success-500 to-primary-500 p-4 md:p-6 rounded-full animate-bounce shadow-lg">
            <ArrowDown className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgentProblem;