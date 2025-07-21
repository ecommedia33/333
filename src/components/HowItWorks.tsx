import React from 'react';
import { Calendar, Bot, Zap, ArrowRight, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Agenda una demo personalizada',
    description: 'Reserva 30 minutos para conocer cómo IAFY puede transformar tu clínica específica',
    gradient: 'from-blue-500 to-cyan-500',
    delay: '0s'
  },
  {
    number: '02',
    icon: Bot,
    title: 'Creamos tu asistente IA con tu estilo de atención',
    description: 'Entrenamos la IA con tu voz, protocolos y forma única de atender pacientes',
    gradient: 'from-purple-500 to-pink-500',
    delay: '0.2s'
  },
  {
    number: '03',
    icon: Zap,
    title: 'Automatiza WhatsApp, llamadas y agendas en tu clínica',
    description: 'Tu asistente IA comienza a trabajar 24/7 sin interrumpir tus operaciones actuales',
    gradient: 'from-green-500 to-emerald-500',
    delay: '0.4s'
  }
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Proceso Simple</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6">
            Cómo funciona
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            En solo 3 pasos simples, tu clínica estará operando con IA avanzada
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
              style={{ animationDelay: step.delay }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 transform translate-x-6 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
              )}
              
              {/* Glow Effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${step.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 z-10">
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${step.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Progress Indicator */}
                <div className="mt-6 w-full bg-gray-700 rounded-full h-1">
                  <div 
                    className={`bg-gradient-to-r ${step.gradient} h-1 rounded-full transition-all duration-1000 group-hover:w-full`}
                    style={{ width: `${(index + 1) * 33.33}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/iafyagency/30min?month=2025-06"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-blue-400/50"
          >
            <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            <span>Empezar ahora - Demo gratuita</span>
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;