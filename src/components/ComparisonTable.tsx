import React from 'react';
import { Check, X, Crown, Users, Zap } from 'lucide-react';

const ComparisonTable = () => {
  const features = [
    { feature: 'Atención 24/7 sin descanso', iafy: true, traditional: false, competitor: false },
    { feature: 'Respuesta instantánea (<1 segundo)', iafy: true, traditional: false, competitor: true },
    { feature: 'Múltiples conversaciones simultáneas', iafy: true, traditional: false, competitor: true },
    { feature: 'Integración WhatsApp + Llamadas', iafy: true, traditional: false, competitor: false },
    { feature: 'Voz personalizada con tu estilo', iafy: true, traditional: false, competitor: false },
    { feature: 'Agenda automática inteligente', iafy: true, traditional: false, competitor: true },
    { feature: 'Aprendizaje continuo', iafy: true, traditional: false, competitor: false },
    { feature: 'Sin errores humanos', iafy: true, traditional: false, competitor: true },
    { feature: 'Escalabilidad infinita', iafy: true, traditional: false, competitor: true },
    { feature: 'Coste fijo mensual', iafy: true, traditional: false, competitor: true },
    { feature: 'Soporte técnico 24/7', iafy: true, traditional: false, competitor: false },
    { feature: 'Cumplimiento GDPR médico', iafy: true, traditional: true, competitor: false }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Crown className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Comparativa</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6">
            ¿Por qué elegir IAFY?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comparamos IAFY con métodos tradicionales y competidores
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 p-6 border-b border-gray-700/50">
            <div className="text-white font-semibold">Características</div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl mb-2">
                <Crown className="w-6 h-6 text-white mx-auto" />
              </div>
              <div className="text-white font-bold">IAFY</div>
              <div className="text-blue-400 text-sm">IA Avanzada</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-3 rounded-xl mb-2">
                <Users className="w-6 h-6 text-white mx-auto" />
              </div>
              <div className="text-white font-bold">Tradicional</div>
              <div className="text-gray-400 text-sm">Personal humano</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl mb-2">
                <Zap className="w-6 h-6 text-white mx-auto" />
              </div>
              <div className="text-white font-bold">Competidores</div>
              <div className="text-orange-400 text-sm">Otras IAs</div>
            </div>
          </div>

          {/* Features */}
          <div className="divide-y divide-gray-700/50">
            {features.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-800/30 transition-colors duration-200">
                <div className="text-gray-300 font-medium">{item.feature}</div>
                <div className="text-center">
                  {item.iafy ? (
                    <Check className="w-6 h-6 text-green-400 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-400 mx-auto" />
                  )}
                </div>
                <div className="text-center">
                  {item.traditional ? (
                    <Check className="w-6 h-6 text-green-400 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-400 mx-auto" />
                  )}
                </div>
                <div className="text-center">
                  {item.competitor ? (
                    <Check className="w-6 h-6 text-yellow-400 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-400 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-t border-gray-700/50">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="text-white font-semibold">Puntuación total</div>
              <div>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  12/12
                </div>
                <div className="text-green-400 text-sm font-semibold">Excelente</div>
              </div>
              <div>
                <div className="text-3xl font-black text-red-400">
                  2/12
                </div>
                <div className="text-red-400 text-sm font-semibold">Limitado</div>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-400">
                  6/12
                </div>
                <div className="text-yellow-400 text-sm font-semibold">Básico</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://calendly.com/iafyagency/30min?month=2025-06"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-blue-400/50"
          >
            <Crown className="w-6 h-6 mr-3" />
            <span>Elige la mejor opción para tu clínica</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;