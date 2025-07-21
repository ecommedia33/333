import React from 'react';
import { TrendingUp, Users, Euro, Clock, ArrowLeft, Star, Target, BarChart3 } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      company: 'TechSolutions Madrid',
      industry: 'Consultoría IT',
      size: '50-100 empleados',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Perdían 60% de leads por no atender llamadas fuera de horario laboral',
      solution: 'Implementación de IAFY para atención 24/7 y cualificación automática de leads',
      results: [
        { icon: TrendingUp, metric: '+180%', description: 'Aumento en conversiones', color: 'success' },
        { icon: Euro, metric: '4.200€', description: 'Ahorro mensual en personal', color: 'primary' },
        { icon: Users, metric: '+250', description: 'Nuevos clientes/mes', color: 'electric' }
      ],
      quote: "IAFY transformó completamente nuestra captación de leads. Ahora capturamos oportunidades las 24 horas y nuestro equipo se enfoca en cerrar ventas, no en contestar el teléfono.",
      author: "Carlos Mendoza",
      position: "Director Comercial",
      timeframe: "Resultados en 30 días",
      roi: "320%"
    },
    {
      company: 'InnovaMarketing Barcelona',
      industry: 'Marketing Digital',
      size: '20-50 empleados',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Equipo saturado respondiendo consultas repetitivas de clientes',
      solution: 'IA conversacional para soporte técnico y gestión de proyectos',
      results: [
        { icon: Clock, metric: '6h', description: 'Tiempo ahorrado diario', color: 'success' },
        { icon: TrendingUp, metric: '+95%', description: 'Satisfacción del cliente', color: 'primary' },
        { icon: Euro, metric: '2.800€', description: 'Reducción de costes', color: 'electric' }
      ],
      quote: "La IA de IAFY entiende perfectamente nuestros servicios y sabe cómo comunicarse con nuestros clientes. Es como tener al mejor account manager trabajando sin descanso.",
      author: "Ana Rodríguez",
      position: "CEO",
      timeframe: "Implementación en 7 días",
      roi: "280%"
    },
    {
      company: 'GlobalTrade Valencia',
      industry: 'Comercio Internacional',
      size: '100+ empleados',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Atención multiidioma y gestión de consultas en diferentes zonas horarias',
      solution: 'Sistema de IA multiidioma con integración completa a CRM empresarial',
      results: [
        { icon: Users, metric: '+300%', description: 'Clientes internacionales', color: 'success' },
        { icon: TrendingUp, metric: '98%', description: 'Precisión en respuestas', color: 'primary' },
        { icon: Clock, metric: '24/7', description: 'Cobertura global', color: 'electric' }
      ],
      quote: "Implementar IAFY fue la mejor decisión estratégica que tomamos. Nuestros clientes internacionales están más satisfechos y nosotros podemos expandirnos sin preocuparnos por la barrera del idioma o los horarios.",
      author: "Miguel Fernández",
      position: "Director de Operaciones",
      timeframe: "Escalado en 14 días",
      roi: "450%"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-gradient">
      {/* Header */}
      <header className="relative z-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-primary-500 to-electric-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/30 shadow-spectacular">
                  <img 
                    src="/5841271165010691996-removebg.png" 
                    alt="IAFY Logo" 
                    className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-gradient-to-r from-primary-500/25 to-electric-500/25 backdrop-blur-sm border border-primary-400/40 rounded-2xl px-8 py-4 shadow-lg">
                  <div className="text-white font-bold text-xl">Casos de Éxito</div>
                  <div className="text-primary-300 text-lg font-medium">Resultados Reales</div>
                </div>
              </div>
            </div>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 text-white btn-primary rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver al Inicio
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 card-primary rounded-full px-8 py-4 mb-8 shadow-spectacular">
            <Star className="w-6 h-6 text-success-400" />
            <span className="text-success-300 font-medium text-lg">Casos de Éxito Verificados</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-success-100 to-primary-200 mb-8">
            Empresas que ya están triunfando con IAFY
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Resultados reales de empresas que confiaron en nuestra tecnología de automatización con IA
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Users, number: '20+', label: 'Empresas activas', color: 'success' },
            { icon: TrendingUp, number: '95%', label: 'Satisfacción promedio', color: 'primary' },
            { icon: Euro, number: '2.8M€', label: 'Ahorros generados', color: 'electric' },
            { icon: BarChart3, number: '340%', label: 'ROI promedio', color: 'gold' }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className={`card-${stat.color} p-6 rounded-3xl shadow-spectacular transform hover:-translate-y-2 transition-all duration-300`}>
                <stat.icon className={`w-8 h-8 text-${stat.color}-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <div className={`text-3xl font-black text-${stat.color}-400 mb-2`}>
                  {stat.number}
                </div>
                <div className="text-neutral-300 font-medium text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <div key={index} className="group">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-success-500 via-primary-500 to-electric-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative card-primary rounded-3xl overflow-hidden shadow-spectacular">
                  <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    {/* Content */}
                    <div className="space-y-8">
                      {/* Company Info */}
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <h3 className="text-2xl lg:text-3xl font-bold text-white">
                            {caseStudy.company}
                          </h3>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full font-medium">
                            {caseStudy.industry}
                          </span>
                          <span className="bg-success-500/20 text-success-400 px-3 py-1 rounded-full font-medium">
                            {caseStudy.size}
                          </span>
                          <span className="bg-electric-500/20 text-electric-400 px-3 py-1 rounded-full font-medium">
                            ROI: {caseStudy.roi}
                          </span>
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="space-y-6">
                        <div className="bg-danger-900/30 p-6 rounded-2xl border border-danger-500/30">
                          <h4 className="text-lg font-semibold text-danger-400 mb-3">Desafío</h4>
                          <p className="text-neutral-300">{caseStudy.challenge}</p>
                        </div>
                        
                        <div className="bg-success-900/30 p-6 rounded-2xl border border-success-500/30">
                          <h4 className="text-lg font-semibold text-success-400 mb-3">Solución IAFY</h4>
                          <p className="text-neutral-300">{caseStudy.solution}</p>
                        </div>
                      </div>

                      {/* Results Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {caseStudy.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center">
                            <div className={`bg-gradient-to-r from-${result.color}-500 to-${result.color}-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                              <result.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className={`text-2xl font-black text-${result.color}-400 mb-1`}>
                              {result.metric}
                            </div>
                            <div className="text-neutral-400 text-sm font-medium">
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                        <p className="text-lg text-neutral-300 italic leading-relaxed mb-4">
                          "{caseStudy.quote}"
                        </p>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-success-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              {caseStudy.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="text-white font-semibold">{caseStudy.author}</div>
                            <div className="text-neutral-400 text-sm">{caseStudy.position}</div>
                          </div>
                        </div>
                      </blockquote>

                      {/* Timeline */}
                      <div className="flex items-center justify-between bg-primary-900/30 p-4 rounded-xl border border-primary-500/30">
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-primary-400" />
                          <span className="text-primary-300 font-medium">{caseStudy.timeframe}</span>
                        </div>
                        <div className="bg-success-500/20 text-success-400 px-3 py-1 rounded-full text-sm font-semibold">
                          Cliente Activo
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <div className="aspect-square lg:aspect-auto lg:h-full rounded-2xl overflow-hidden">
                        <img 
                          src={caseStudy.image} 
                          alt={caseStudy.company}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      </div>
                      
                      {/* Overlay Badge */}
                      <div className="absolute top-4 right-4 bg-success-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Caso Verificado
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
          <div className="card-primary p-12 rounded-3xl shadow-spectacular">
            <Target className="w-16 h-16 text-success-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">
              ¿Quieres ser nuestro próximo caso de éxito?
            </h3>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Únete a las empresas que ya están transformando su atención al cliente con IA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/iafyagency/30min?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-success-600 via-primary-600 to-electric-600 hover:from-success-500 hover:via-primary-500 hover:to-electric-500 rounded-2xl shadow-2xl hover:shadow-success-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                Agendar Demo Personalizada
              </a>
              <a
                href="mailto:casos@iafy.es"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-primary-400 border border-primary-400/50 hover:bg-primary-400/10 rounded-2xl transform hover:scale-105 transition-all duration-300"
              >
                Solicitar Caso de Estudio
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudies;