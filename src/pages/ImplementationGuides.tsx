import React, { useState } from 'react';
import { BookOpen, ArrowLeft, CheckCircle, Clock, Users, Settings, Zap, Target } from 'lucide-react';

const ImplementationGuides = () => {
  const [activeGuide, setActiveGuide] = useState(0);

  const guides = [
    {
      title: 'Guía de Implementación Básica',
      duration: '7 días',
      difficulty: 'Básico',
      icon: Zap,
      steps: [
        {
          day: 'Día 1-2',
          title: 'Configuración Inicial',
          tasks: [
            'Análisis de infraestructura actual',
            'Configuración de cuentas y accesos',
            'Integración con WhatsApp Business',
            'Configuración básica de la IA'
          ]
        },
        {
          day: 'Día 3-4',
          title: 'Personalización',
          tasks: [
            'Entrenamiento de la IA con tu información',
            'Configuración de respuestas personalizadas',
            'Ajuste de tono y personalidad',
            'Configuración de horarios de atención'
          ]
        },
        {
          day: 'Día 5-6',
          title: 'Pruebas y Ajustes',
          tasks: [
            'Pruebas de conversaciones reales',
            'Ajustes basados en feedback',
            'Configuración de notificaciones',
            'Capacitación del equipo'
          ]
        },
        {
          day: 'Día 7',
          title: 'Lanzamiento',
          tasks: [
            'Activación en producción',
            'Monitoreo inicial',
            'Soporte técnico activo',
            'Documentación entregada'
          ]
        }
      ]
    },
    {
      title: 'Implementación Empresarial',
      duration: '14 días',
      difficulty: 'Avanzado',
      icon: Target,
      steps: [
        {
          day: 'Semana 1',
          title: 'Análisis y Planificación',
          tasks: [
            'Auditoría completa de sistemas',
            'Mapeo de procesos empresariales',
            'Diseño de arquitectura personalizada',
            'Plan de migración detallado'
          ]
        },
        {
          day: 'Semana 2',
          title: 'Implementación y Lanzamiento',
          tasks: [
            'Desarrollo de integraciones personalizadas',
            'Configuración avanzada de IA',
            'Pruebas exhaustivas',
            'Lanzamiento gradual por departamentos'
          ]
        }
      ]
    },
    {
      title: 'Integración con CRM',
      duration: '5 días',
      difficulty: 'Intermedio',
      icon: Settings,
      steps: [
        {
          day: 'Día 1',
          title: 'Análisis de CRM',
          tasks: [
            'Evaluación del CRM actual',
            'Identificación de campos necesarios',
            'Mapeo de flujos de datos',
            'Configuración de API'
          ]
        },
        {
          day: 'Día 2-3',
          title: 'Configuración',
          tasks: [
            'Configuración de webhooks',
            'Sincronización de contactos',
            'Configuración de campos personalizados',
            'Pruebas de integración'
          ]
        },
        {
          day: 'Día 4-5',
          title: 'Validación',
          tasks: [
            'Pruebas de flujo completo',
            'Validación de datos',
            'Capacitación del equipo',
            'Documentación de procesos'
          ]
        }
      ]
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
                  <div className="text-white font-bold text-xl">Guías de Implementación</div>
                  <div className="text-primary-300 text-lg font-medium">Paso a Paso</div>
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
            <BookOpen className="w-6 h-6 text-success-400" />
            <span className="text-success-300 font-medium text-lg">Guías Paso a Paso</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-success-100 to-primary-200 mb-8">
            Guías de Implementación
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Instrucciones detalladas para implementar IAFY en tu empresa según tus necesidades específicas
          </p>
        </div>

        {/* Guide Selection */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guides.map((guide, index) => (
            <div
              key={index}
              onClick={() => setActiveGuide(index)}
              className={`group cursor-pointer transition-all duration-300 ${
                activeGuide === index ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              <div className={`relative ${
                activeGuide === index 
                  ? 'ring-2 ring-primary-400 ring-opacity-50' 
                  : ''
              }`}>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-success-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className={`relative card-primary p-8 rounded-3xl shadow-spectacular transform transition-all duration-300 ${
                  activeGuide === index 
                    ? 'border-primary-400/50 bg-gradient-to-br from-primary-900/30 to-neutral-900/50' 
                    : 'hover:-translate-y-2'
                }`}>
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r from-primary-500 to-success-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                      activeGuide === index ? 'scale-110' : ''
                    } transition-transform duration-300`}>
                      <guide.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{guide.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-neutral-400">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {guide.duration}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          guide.difficulty === 'Básico' ? 'bg-success-500/20 text-success-400' :
                          guide.difficulty === 'Intermedio' ? 'bg-electric-500/20 text-electric-400' :
                          'bg-danger-500/20 text-danger-400'
                        }`}>
                          {guide.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-neutral-300 text-sm">
                    {guide.steps.length} fases de implementación con seguimiento completo
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Guide Content */}
        <div className="card-primary p-8 rounded-3xl shadow-spectacular">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-primary-500 to-success-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-6">
              {React.createElement(guides[activeGuide].icon, { className: "w-8 h-8 text-white" })}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">{guides[activeGuide].title}</h2>
              <div className="flex items-center space-x-6 text-neutral-400 mt-2">
                <span className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Duración: {guides[activeGuide].duration}
                </span>
                <span className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Nivel: {guides[activeGuide].difficulty}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {guides[activeGuide].steps.map((step, stepIndex) => (
              <div key={stepIndex} className="relative">
                {stepIndex < guides[activeGuide].steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-primary-500 to-success-500 opacity-30"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-primary-500 to-success-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{stepIndex + 1}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        <span className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm font-semibold">
                          {step.day}
                        </span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {step.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-center space-x-3 text-neutral-300">
                            <CheckCircle className="w-5 h-5 text-success-400 flex-shrink-0" />
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="card-primary p-8 rounded-3xl shadow-spectacular">
            <h3 className="text-2xl font-bold text-white mb-4">¿Listo para comenzar la implementación?</h3>
            <p className="text-neutral-300 mb-6">
              Nuestro equipo te guiará paso a paso durante todo el proceso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/iafyagency/30min?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-white bg-gradient-to-r from-primary-600 to-success-600 hover:from-primary-500 hover:to-success-500 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Agendar Consulta de Implementación
              </a>
              <a
                href="mailto:implementacion@iafy.es"
                className="inline-flex items-center justify-center px-8 py-4 text-primary-400 border border-primary-400/50 hover:bg-primary-400/10 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Contactar Equipo Técnico
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImplementationGuides;