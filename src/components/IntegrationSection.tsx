import React from 'react';
import { Zap, Link, Smartphone, Calendar, Database, Settings } from 'lucide-react';

const IntegrationSection = () => {
  const integrations = [
    {
      category: 'CRM y Gestión',
      icon: Database,
      gradient: 'from-blue-500 to-cyan-500',
      systems: ['Clinic Cloud', 'Doctoralia', 'Medigest', 'Gesden', 'ClinicSoft', 'MedicalSoft']
    },
    {
      category: 'Comunicación',
      icon: Smartphone,
      gradient: 'from-green-500 to-emerald-500',
      systems: ['WhatsApp Business', 'Telegram', 'SMS Gateway', 'Email Marketing', 'VoIP Systems']
    },
    {
      category: 'Agenda y Citas',
      icon: Calendar,
      gradient: 'from-purple-500 to-pink-500',
      systems: ['Google Calendar', 'Outlook', 'Calendly', 'Acuity', 'Agenda Propia', 'TimeTree']
    },
    {
      category: 'Pagos y Facturación',
      icon: Settings,
      gradient: 'from-orange-500 to-red-500',
      systems: ['Stripe', 'PayPal', 'Redsys', 'Bizum', 'Factusol', 'ContaPlus']
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8">
            <Link className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Integraciones</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-blue-200 mb-6">
            Se conecta con todo tu ecosistema
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            IAFY se integra perfectamente con los sistemas que ya usas en tu clínica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <div key={index} className="group">
              <div className={`absolute -inset-2 bg-gradient-to-r ${integration.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                <div className={`bg-gradient-to-r ${integration.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4">
                  {integration.category}
                </h3>
                
                <div className="space-y-2">
                  {integration.systems.map((system, systemIndex) => (
                    <div key={systemIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {system}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Process */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Proceso de Integración</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Análisis de Sistemas',
                description: 'Evaluamos tu infraestructura actual y identificamos puntos de integración',
                icon: Database
              },
              {
                step: '02',
                title: 'Configuración API',
                description: 'Conectamos IAFY con tus sistemas mediante APIs seguras y estables',
                icon: Zap
              },
              {
                step: '03',
                title: 'Pruebas y Validación',
                description: 'Verificamos que todas las integraciones funcionen perfectamente',
                icon: Settings
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                  {step.step}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Integration CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Usas un sistema específico?
            </h3>
            <p className="text-gray-300 mb-6">
              Nuestro equipo técnico puede crear integraciones personalizadas para tu clínica
            </p>
            <a
              href="https://calendly.com/iafyagency/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Consultar integración personalizada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;