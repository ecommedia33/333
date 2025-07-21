import React from 'react';
import { Calendar, Settings, Rocket, CheckCircle, Clock, Users, ArrowRight } from 'lucide-react';

const Implementation = () => {
  const steps = [
    {
      day: 'DÍA 1-2',
      icon: Settings,
      title: 'Configuración y Entrenamiento',
      description: 'Configuramos la IA con tu información, protocolos y estilo de atención específico',
      tasks: [
        'Análisis de tu clínica y procesos',
        'Configuración de respuestas personalizadas',
        'Entrenamiento con tu base de conocimiento',
        'Integración con WhatsApp Business'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      day: 'DÍA 3-5',
      icon: CheckCircle,
      title: 'Pruebas y Ajustes',
      description: 'Realizamos pruebas exhaustivas y ajustamos la IA según tus necesidades específicas',
      tasks: [
        'Pruebas de conversaciones reales',
        'Ajustes de tono y personalidad',
        'Configuración de agenda automática',
        'Integración con tu CRM'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      day: 'DÍA 6-7',
      icon: Rocket,
      title: 'Lanzamiento Completo',
      description: 'Tu clínica ya opera 24/7 con IA. Monitoreo y soporte continuo incluido',
      tasks: [
        'Lanzamiento en producción',
        'Capacitación de tu equipo',
        'Monitoreo en tiempo real',
        'Soporte técnico 24/7'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8">
            <Calendar className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">IMPLEMENTACIÓN RÁPIDA</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-blue-200 mb-6">
            De 0 a automatización total en 7 días
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="text-purple-400 font-bold">PROCESO PROBADO.</span> Implementación rápida sin interrumpir las operaciones de tu clínica
          </p>
        </div>

        {/* Implementation Timeline */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-purple-500 to-blue-500 opacity-30"></div>
              )}
              
              <div className="flex items-start space-x-8">
                {/* Icon */}
                <div className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className={`absolute -inset-2 bg-gradient-to-r ${step.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color} mb-2`}>
                          {step.day}
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="bg-gradient-to-br from-green-900/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-green-500/30 p-12 text-center">
          <Clock className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            GARANTÍA DE IMPLEMENTACIÓN
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Si no tienes tu IA funcionando en 7 días, <span className="text-green-400 font-bold">trabajamos gratis hasta que esté lista</span>
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-lg font-bold text-white mb-1">Equipo Dedicado</div>
              <div className="text-gray-300 text-sm">Técnicos especializados en IA médica</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-lg font-bold text-white mb-1">Soporte 24/7</div>
              <div className="text-gray-300 text-sm">Durante toda la implementación</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-lg font-bold text-white mb-1">Sin Interrupciones</div>
              <div className="text-gray-300 text-sm">Tu clínica sigue operando normal</div>
            </div>
          </div>

          <a
            href="https://calendly.com/iafyagency/30min?month=2025-06"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-green-600 via-purple-600 to-blue-600 hover:from-green-500 hover:via-purple-500 hover:to-blue-500 rounded-2xl shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-green-400/50"
            >
            <span>COMENZAR IMPLEMENTACIÓN</span>
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Implementation;