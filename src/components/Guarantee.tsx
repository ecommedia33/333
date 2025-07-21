import React from 'react';
import { Shield, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-12 lg:p-16 shadow-2xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 mb-8">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-medium">Garantía Total</span>
            </div>

            {/* Main Icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-full shadow-2xl">
                <Shield className="w-16 h-16 text-white" />
              </div>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-blue-200 mb-8">
              Garantía de Resultados
            </h2>
            
            <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-12 font-medium">
              "Sin permanencia. Si no ves resultados en 30 días, puedes cancelarlo sin coste."
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: CheckCircle, text: 'Sin permanencia', gradient: 'from-green-500 to-emerald-500' },
                { icon: CheckCircle, text: '30 días de prueba', gradient: 'from-blue-500 to-cyan-500' },
                { icon: CheckCircle, text: 'Cancelación sin coste', gradient: 'from-purple-500 to-pink-500' }
              ].map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/30 hover:border-gray-600/50 transform hover:-translate-y-1 transition-all duration-300">
                    <div className={`bg-gradient-to-r ${feature.gradient} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://calendly.com/iafyagency/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-white bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-500 hover:via-blue-500 hover:to-purple-500 rounded-2xl shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-green-400/50"
            >
              <Sparkles className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <span>Comenzar sin riesgo</span>
              <ArrowRight className="w-7 h-7 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Seguro y confiable</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Soporte 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Resultados garantizados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;