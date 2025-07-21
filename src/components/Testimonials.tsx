import React from 'react';
import { Star, Quote, Users, TrendingUp, Award } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Stars */}
          <div className="inline-flex items-center justify-center space-x-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
          
          {/* Main Quote */}
          <div className="relative max-w-5xl mx-auto mb-16">
            <Quote className="absolute -top-8 -left-8 w-16 h-16 text-blue-500/20" />
            <blockquote className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 leading-tight">
              "Más de 20 clínicas privadas ya confían en IAFY para automatizar su atención al paciente con IA y recuperar ingresos perdidos."
            </blockquote>
            <Quote className="absolute -bottom-8 -right-8 w-16 h-16 text-purple-500/20 rotate-180" />
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-blue-500/50 transform hover:-translate-y-2 transition-all duration-500">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  +20
                </div>
                <div className="text-gray-300 font-semibold text-lg">Clínicas Activas</div>
                <div className="text-gray-400 text-sm mt-2">Confiando en nuestra IA</div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transform hover:-translate-y-2 transition-all duration-500">
                <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  95%
                </div>
                <div className="text-gray-300 font-semibold text-lg">Satisfacción</div>
                <div className="text-gray-400 text-sm mt-2">De nuestros clientes</div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-green-500/50 transform hover:-translate-y-2 transition-all duration-500">
                <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                  100%
                </div>
                <div className="text-gray-300 font-semibold text-lg">Automatización</div>
                <div className="text-gray-400 text-sm mt-2">Sin intervención humana</div>
              </div>
            </div>
          </div>

          {/* Social Proof Badges */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <span className="font-medium">Certificado IA</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
              <span className="font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <span className="font-medium">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;