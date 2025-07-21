import React from 'react';
import { Shield, Lock, Eye, Server, FileCheck, Users } from 'lucide-react';

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Cumplimiento GDPR y LOPD',
      description: 'Certificación completa en protección de datos médicos según normativa europea y española',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lock,
      title: 'Encriptación AES-256',
      description: 'Todos los datos están encriptados con el estándar militar más avanzado disponible',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Servidores en Europa',
      description: 'Infraestructura ubicada exclusivamente en centros de datos europeos certificados',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Eye,
      title: 'Auditorías Continuas',
      description: 'Monitoreo 24/7 y auditorías de seguridad regulares por terceros independientes',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: FileCheck,
      title: 'Certificaciones ISO',
      description: 'ISO 27001, SOC 2 Type II y certificaciones específicas del sector sanitario',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Control de Acceso',
      description: 'Autenticación multifactor y control granular de permisos por rol y especialidad',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 mb-8">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">Seguridad Médica</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-blue-200 mb-6">
            Seguridad de nivel hospitalario
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Protección máxima para los datos más sensibles: la información de tus pacientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-2 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 h-full">
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Security Stats */}
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
          {[
            { number: '99.9%', label: 'Uptime garantizado', icon: Server },
            { number: '0', label: 'Brechas de seguridad', icon: Shield },
            { number: '<6h', label: 'Backups automáticos', icon: FileCheck },
            { number: '24/7', label: 'Monitoreo activo', icon: Eye }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-3xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Badges */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Certificaciones y Cumplimiento</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            {[
              'GDPR Compliant',
              'ISO 27001',
              'SOC 2 Type II',
              'LOPD España',
              'HIPAA Ready',
              'AWS Security'
            ].map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-3">
                <span className="text-gray-300 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;