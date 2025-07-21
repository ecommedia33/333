import React from 'react';
import { TrendingUp, Users, Euro, Clock, ArrowRight, Star } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      name: 'Clínica Dental Premium Madrid',
      specialty: 'Odontología Estética',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { icon: TrendingUp, metric: '+85%', description: 'Aumento en conversiones' },
        { icon: Euro, metric: '3.200€', description: 'Ahorro mensual en personal' },
        { icon: Users, metric: '+150', description: 'Nuevos pacientes/mes' }
      ],
      quote: "IAFY transformó completamente nuestra atención al paciente. Ahora capturamos leads las 24 horas y nuestro equipo se enfoca en lo que realmente importa: la atención médica.",
      author: "Dr. Carmen Rodríguez",
      position: "Directora Médica"
    },
    {
      name: 'Centro Estético Barcelona',
      specialty: 'Medicina Estética',
      image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { icon: Clock, metric: '24/7', description: 'Atención automatizada' },
        { icon: TrendingUp, metric: '+120%', description: 'Incremento en citas' },
        { icon: Euro, metric: '2.800€', description: 'Reducción de costes' }
      ],
      quote: "La IA de IAFY entiende perfectamente nuestros tratamientos y sabe cómo hablar con nuestros pacientes. Es como tener a la mejor recepcionista trabajando sin descanso.",
      author: "Dra. Ana Martínez",
      position: "CEO"
    },
    {
      name: 'Clínica Multidisciplinar Valencia',
      specialty: 'Medicina General',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { icon: Users, metric: '+200%', description: 'Pacientes atendidos' },
        { icon: TrendingUp, metric: '95%', description: 'Satisfacción pacientes' },
        { icon: Clock, metric: '4h', description: 'Tiempo ahorrado/día' }
      ],
      quote: "Implementar IAFY fue la mejor decisión que tomamos. Nuestros pacientes están más satisfechos y nosotros podemos dedicar más tiempo a la medicina, no a la administración.",
      author: "Dr. Miguel Fernández",
      position: "Director Médico"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">Casos de Éxito Reales</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-blue-200 mb-6">
            Clínicas que ya están triunfando con IAFY
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Resultados reales de clínicas que confiaron en nuestra tecnología
          </p>
        </div>

        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <div key={index} className="group">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    {/* Content */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                          {caseStudy.name}
                        </h3>
                        <p className="text-blue-400 font-medium text-lg">
                          {caseStudy.specialty}
                        </p>
                      </div>

                      {/* Results Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {caseStudy.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center">
                            <result.icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                              {result.metric}
                            </div>
                            <div className="text-gray-400 text-sm font-medium">
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg text-gray-300 italic leading-relaxed">
                        "{caseStudy.quote}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {caseStudy.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">{caseStudy.author}</div>
                          <div className="text-gray-400 text-sm">{caseStudy.position}</div>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden">
                        <img 
                          src={caseStudy.image} 
                          alt={caseStudy.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      </div>
                      
                      {/* Overlay Badge */}
                      <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Cliente Activo
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://calendly.com/iafyagency/30min?month=2025-06"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-500 hover:via-blue-500 hover:to-purple-500 rounded-2xl shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-green-400/50"
          >
            <span>Únete a estas clínicas exitosas</span>
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;