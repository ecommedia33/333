import React from 'react';
import { Bot, MessageSquare, Calendar, Phone, BarChart3, Shield, Zap, Globe, Brain, Headphones, Clock, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'Asistente IA Conversacional',
      description: 'Entrenado con tu voz y protocolos específicos para mantener tu estilo único de atención',
      gradient: 'from-blue-500 to-cyan-500',
      details: ['Procesamiento de lenguaje natural', 'Respuestas contextuales', 'Aprendizaje continuo']
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Business Integrado',
      description: 'Responde automáticamente a mensajes de WhatsApp con la personalidad de tu clínica',
      gradient: 'from-green-500 to-emerald-500',
      details: ['API oficial WhatsApp', 'Multimedia automático', 'Estados de lectura']
    },
    {
      icon: Phone,
      title: 'Llamadas Telefónicas IA',
      description: 'Atiende llamadas con voz sintética indistinguible de una persona real',
      gradient: 'from-purple-500 to-pink-500',
      details: ['Voz natural', 'Múltiples idiomas', 'Transferencia inteligente']
    },
    {
      icon: Calendar,
      title: 'Agenda Inteligente 24/7',
      description: 'Reserva, modifica y cancela citas automáticamente según disponibilidad real',
      gradient: 'from-orange-500 to-red-500',
      details: ['Sincronización en tiempo real', 'Recordatorios automáticos', 'Gestión de cancelaciones']
    },
    {
      icon: BarChart3,
      title: 'Analytics Avanzado',
      description: 'Métricas detalladas de conversión, satisfacción y rendimiento de la IA',
      gradient: 'from-indigo-500 to-purple-500',
      details: ['Dashboard en tiempo real', 'Reportes personalizados', 'KPIs médicos']
    },
    {
      icon: Brain,
      title: 'Machine Learning Adaptativo',
      description: 'La IA aprende continuamente de cada interacción para mejorar respuestas',
      gradient: 'from-cyan-500 to-blue-500',
      details: ['Mejora automática', 'Patrones de comportamiento', 'Optimización continua']
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Tecnología Avanzada</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6">
            Características que revolucionan tu clínica
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Tecnología de vanguardia diseñada específicamente para el sector médico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-2 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 h-full">
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Globe, number: '15+', label: 'Idiomas soportados', color: 'text-blue-400' },
            { icon: Headphones, number: '99.9%', label: 'Uptime garantizado', color: 'text-green-400' },
            { icon: Clock, number: '<1s', label: 'Tiempo de respuesta', color: 'text-purple-400' },
            { icon: Users, number: '1000+', label: 'Pacientes/día', color: 'text-cyan-400' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <div className={`text-3xl font-black ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;