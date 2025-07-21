import React from 'react';
import { Server, Shield, Zap, Globe, Database, Code, Cpu, Cloud } from 'lucide-react';

const TechSpecs = () => {
  const specs = [
    {
      category: 'Infraestructura',
      icon: Server,
      gradient: 'from-blue-500 to-cyan-500',
      items: [
        { label: 'Uptime garantizado', value: '99.9%' },
        { label: 'Tiempo de respuesta', value: '<500ms' },
        { label: 'Servidores', value: 'AWS Europa' },
        { label: 'CDN global', value: 'CloudFlare' }
      ]
    },
    {
      category: 'Seguridad',
      icon: Shield,
      gradient: 'from-green-500 to-emerald-500',
      items: [
        { label: 'Encriptación', value: 'AES-256' },
        { label: 'Certificaciones', value: 'ISO 27001, SOC 2' },
        { label: 'Cumplimiento', value: 'GDPR, LOPD' },
        { label: 'Backups', value: 'Cada 6 horas' }
      ]
    },
    {
      category: 'IA y Procesamiento',
      icon: Cpu,
      gradient: 'from-purple-500 to-pink-500',
      items: [
        { label: 'Modelo de IA', value: 'GPT-4 Turbo' },
        { label: 'Idiomas', value: '15+ soportados' },
        { label: 'Precisión', value: '>95%' },
        { label: 'Aprendizaje', value: 'Continuo' }
      ]
    },
    {
      category: 'Integraciones',
      icon: Code,
      gradient: 'from-orange-500 to-red-500',
      items: [
        { label: 'API REST', value: 'Disponible' },
        { label: 'Webhooks', value: 'Tiempo real' },
        { label: 'CRMs', value: '50+ compatibles' },
        { label: 'Formatos', value: 'JSON, XML' }
      ]
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-500/20 to-blue-500/20 backdrop-blur-sm border border-gray-500/30 rounded-full px-6 py-3 mb-8">
            <Zap className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300 font-medium">Especificaciones Técnicas</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-blue-200 mb-6">
            Tecnología de nivel empresarial
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Infraestructura robusta y segura que garantiza máximo rendimiento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {specs.map((spec, index) => (
            <div key={index} className="group">
              <div className={`absolute -inset-2 bg-gradient-to-r ${spec.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                <div className={`bg-gradient-to-r ${spec.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <spec.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-6">
                  {spec.category}
                </h3>
                
                <div className="space-y-4">
                  {spec.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{item.label}</span>
                      <span className="text-white font-semibold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Info */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Database, title: 'Base de Datos', description: 'PostgreSQL con replicación automática', color: 'text-blue-400' },
            { icon: Cloud, title: 'Escalabilidad', description: 'Auto-scaling según demanda', color: 'text-green-400' },
            { icon: Globe, title: 'Disponibilidad', description: 'Multi-región con failover automático', color: 'text-purple-400' }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;