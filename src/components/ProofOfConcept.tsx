import React from 'react';
import { Play, Code, Database, Shield, Zap, CheckCircle } from 'lucide-react';

const ProofOfConcept = () => {
  const techProofs = [
    {
      icon: Code,
      title: 'IA GPT-4 Turbo',
      description: 'La misma tecnología que usa ChatGPT, pero entrenada específicamente para clínicas médicas',
      proof: 'Procesamiento de lenguaje natural avanzado',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Infraestructura AWS',
      description: 'Servidores de nivel empresarial con 99.9% de uptime garantizado',
      proof: 'La misma infraestructura que Netflix y Spotify',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Seguridad Médica',
      description: 'Cumplimiento GDPR, LOPD y certificaciones ISO 27001 para datos médicos',
      proof: 'Encriptación AES-256 nivel militar',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">TECNOLOGÍA PROBADA</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6">
            No es magia, es tecnología real
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="text-blue-400 font-bold">TECNOLOGÍA EMPRESARIAL</span> que ya usan las mejores empresas del mundo, adaptada específicamente para clínicas médicas
          </p>
        </div>

        {/* Tech Proof Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {techProofs.map((tech, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-2 bg-gradient-to-r ${tech.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transform hover:-translate-y-4 transition-all duration-500 h-full">
                <div className={`bg-gradient-to-r ${tech.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {tech.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {tech.description}
                </p>

                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-semibold">COMPROBADO</span>
                  </div>
                  <p className="text-gray-300 text-sm">{tech.proof}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Demo Section */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-12 text-center">
          <Play className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            VE LA TECNOLOGÍA EN ACCIÓN
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            No te quedes con dudas. Ve exactamente cómo funciona en una demo personalizada de 30 minutos.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">30min</div>
              <div className="text-gray-300">Demo completa</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300">Personalizada</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">0€</div>
              <div className="text-gray-300">Completamente gratis</div>
            </div>
          </div>

          <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/30 mb-8">
            <h4 className="text-lg font-bold text-white mb-2">LO QUE VERÁS EN LA DEMO:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">IA respondiendo WhatsApp en tiempo real</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Llamadas telefónicas automatizadas</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Agenda automática funcionando</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Integración con tu CRM actual</span>
              </div>
            </div>
          </div>

          <a
            href="https://calendly.com/iafyagency/30min?month=2025-06"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-blue-400/50"
          >
            <Play className="w-6 h-6 mr-3" />
            <span>VER DEMO EN VIVO AHORA</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProofOfConcept;