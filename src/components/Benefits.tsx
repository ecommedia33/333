import React from 'react';
import { Phone, Calendar, Euro, Settings, Zap, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Phone,
    title: 'Atiende WhatsApp y llamadas sin intervención',
    description: 'Tu asistente IA responde automáticamente a consultas de pacientes las 24 horas del día',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Calendar,
    title: 'Agenda citas automáticamente, 24/7',
    description: 'Los pacientes pueden reservar citas en cualquier momento sin intervención humana',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Euro,
    title: 'Reduce hasta 2.500 €/mes en plantilla',
    description: 'Automatiza tareas repetitivas y optimiza los recursos de tu equipo',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Settings,
    title: 'Integración total con tu CRM',
    description: 'Se conecta perfectamente con tus sistemas existentes sin interrupciones',
    gradient: 'from-orange-500 to-red-500'
  }
];

const Benefits = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Automatización Completa</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6">
            Transforma tu clínica con IA
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Tecnología avanzada que trabaja mientras tú descansas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${benefit.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 group">
                <div className={`bg-gradient-to-r ${benefit.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {benefit.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-white/50 transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: '95%', label: 'Reducción en llamadas perdidas', icon: Shield },
            { number: '24/7', label: 'Atención automatizada', icon: Zap },
            { number: '30 días', label: 'Para ver resultados', icon: Calendar }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;