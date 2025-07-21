import React from 'react';
import { Users, Award, Briefcase, GraduationCap } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Dr. Carlos Mendoza',
      role: 'Director Médico y Co-fundador',
      specialty: 'Medicina Digital',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '15+ años en medicina digital y automatización hospitalaria',
      credentials: ['MD, Universidad Complutense', 'MBA Healthcare', 'Certificado IA Médica']
    },
    {
      name: 'Ana Rodríguez',
      role: 'CTO y Arquitecta de IA',
      specialty: 'Inteligencia Artificial',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ex-Google AI, especialista en NLP para sector sanitario',
      credentials: ['PhD Computer Science', 'Google AI Certified', '10+ años en IA']
    },
    {
      name: 'Miguel Fernández',
      role: 'Director de Producto',
      specialty: 'UX/UI Médico',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Diseñador de experiencias digitales para clínicas premium',
      credentials: ['Design Thinking', 'UX Healthcare', 'Lean Startup']
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Nuestro Equipo</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6">
            Expertos en medicina e IA
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Un equipo multidisciplinar que combina experiencia médica con innovación tecnológica
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden transform hover:-translate-y-4 transition-all duration-500">
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <div className="text-blue-400 font-semibold mb-1">{member.role}</div>
                    <div className="text-gray-400 text-sm mb-4">{member.specialty}</div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {member.description}
                    </p>
                    
                    <div className="space-y-2">
                      {member.credentials.map((credential, credIndex) => (
                        <div key={credIndex} className="flex items-center text-sm text-gray-400">
                          <Award className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {credential}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Briefcase, number: '5+', label: 'Años de experiencia', color: 'text-blue-400' },
            { icon: Users, number: '20+', label: 'Clínicas atendidas', color: 'text-green-400' },
            { icon: GraduationCap, number: '50+', label: 'Certificaciones', color: 'text-purple-400' },
            { icon: Award, number: '99%', label: 'Satisfacción cliente', color: 'text-cyan-400' }
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

export default TeamSection;