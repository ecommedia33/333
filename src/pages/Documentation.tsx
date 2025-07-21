import React from 'react';
import { Book, Code, Download, ExternalLink, ArrowLeft, FileText, Zap, Settings, Users } from 'lucide-react';

const Documentation = () => {
  const sections = [
    {
      title: 'Guía de Inicio Rápido',
      icon: Zap,
      items: [
        'Configuración inicial en 5 minutos',
        'Primera conversación con IA',
        'Integración básica con WhatsApp',
        'Dashboard principal'
      ]
    },
    {
      title: 'Configuración Avanzada',
      icon: Settings,
      items: [
        'Personalización de respuestas',
        'Configuración de horarios',
        'Integración con CRM',
        'Configuración de notificaciones'
      ]
    },
    {
      title: 'Gestión de Usuarios',
      icon: Users,
      items: [
        'Roles y permisos',
        'Gestión de equipos',
        'Configuración de accesos',
        'Auditoría de actividad'
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
                  <div className="text-white font-bold text-xl">Documentación</div>
                  <div className="text-primary-300 text-lg font-medium">Centro de Ayuda</div>
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
            <Book className="w-6 h-6 text-primary-400" />
            <span className="text-primary-300 font-medium text-lg">Documentación Completa</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-100 to-success-200 mb-8">
            Centro de Documentación IAFY
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Todo lo que necesitas saber para implementar y usar IAFY en tu empresa
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <div key={index} className="group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-success-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative card-primary p-8 rounded-3xl shadow-spectacular transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-primary-500 to-success-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-neutral-300 hover:text-white transition-colors duration-200 cursor-pointer">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Documentation Content */}
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-primary p-6 rounded-3xl shadow-spectacular sticky top-8">
              <h3 className="text-lg font-bold text-white mb-6">Navegación</h3>
              <nav className="space-y-3">
                {[
                  'Introducción',
                  'Instalación',
                  'Configuración',
                  'API Reference',
                  'Integraciones',
                  'Troubleshooting',
                  'FAQ',
                  'Soporte'
                ].map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="block text-neutral-400 hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-primary-500/20"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction */}
            <section id="introduccion" className="card-primary p-8 rounded-3xl shadow-spectacular">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-8 h-8 text-primary-400 mr-3" />
                Introducción a IAFY
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  IAFY es una plataforma de automatización empresarial basada en inteligencia artificial que revoluciona 
                  la forma en que las empresas interactúan con sus clientes. Nuestra solución permite automatizar 
                  completamente la atención al cliente a través de WhatsApp, llamadas telefónicas y gestión de citas.
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-4">Características Principales</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-success-400 rounded-full mt-2 mr-3"></div>
                    <span><strong className="text-white">IA Conversacional Avanzada:</strong> Procesamiento de lenguaje natural con GPT-4</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-success-400 rounded-full mt-2 mr-3"></div>
                    <span><strong className="text-white">Integración WhatsApp Business:</strong> API oficial para máxima compatibilidad</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-success-400 rounded-full mt-2 mr-3"></div>
                    <span><strong className="text-white">Llamadas Automatizadas:</strong> Voz sintética indistinguible de humanos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-success-400 rounded-full mt-2 mr-3"></div>
                    <span><strong className="text-white">Agenda Inteligente:</strong> Gestión automática de citas 24/7</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Installation */}
            <section id="instalacion" className="card-primary p-8 rounded-3xl shadow-spectacular">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Download className="w-8 h-8 text-success-400 mr-3" />
                Proceso de Instalación
              </h2>
              <div className="space-y-6">
                <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                  <h4 className="text-lg font-semibold text-white mb-3">Paso 1: Configuración Inicial</h4>
                  <p className="text-neutral-300 mb-4">
                    Nuestro equipo técnico se encarga de toda la configuración inicial. El proceso incluye:
                  </p>
                  <ul className="space-y-2 text-neutral-400">
                    <li>• Análisis de tu infraestructura actual</li>
                    <li>• Configuración de cuentas y accesos</li>
                    <li>• Integración con tus sistemas existentes</li>
                    <li>• Configuración de la IA con tu información específica</li>
                  </ul>
                </div>

                <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                  <h4 className="text-lg font-semibold text-white mb-3">Paso 2: Entrenamiento de la IA</h4>
                  <p className="text-neutral-300 mb-4">
                    Personalizamos la IA para que refleje la personalidad y estilo de tu empresa:
                  </p>
                  <ul className="space-y-2 text-neutral-400">
                    <li>• Entrenamiento con tu base de conocimiento</li>
                    <li>• Configuración de respuestas personalizadas</li>
                    <li>• Ajuste de tono y personalidad</li>
                    <li>• Pruebas y validación</li>
                  </ul>
                </div>

                <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                  <h4 className="text-lg font-semibold text-white mb-3">Paso 3: Lanzamiento</h4>
                  <p className="text-neutral-300 mb-4">
                    Activación completa del sistema con monitoreo continuo:
                  </p>
                  <ul className="space-y-2 text-neutral-400">
                    <li>• Lanzamiento en producción</li>
                    <li>• Capacitación de tu equipo</li>
                    <li>• Monitoreo en tiempo real</li>
                    <li>• Soporte técnico 24/7</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* API Reference */}
            <section id="api-reference" className="card-primary p-8 rounded-3xl shadow-spectacular">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Code className="w-8 h-8 text-electric-400 mr-3" />
                API Reference
              </h2>
              <div className="space-y-6">
                <p className="text-neutral-300 text-lg">
                  IAFY proporciona una API REST completa para integraciones personalizadas y acceso programático 
                  a todas las funcionalidades de la plataforma.
                </p>

                <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-700/50">
                  <h4 className="text-lg font-semibold text-white mb-4">Endpoints Principales</h4>
                  <div className="space-y-4">
                    <div className="bg-neutral-800/50 p-4 rounded-xl">
                      <code className="text-success-400 font-mono">POST /api/v1/conversations</code>
                      <p className="text-neutral-400 mt-2">Iniciar una nueva conversación con la IA</p>
                    </div>
                    <div className="bg-neutral-800/50 p-4 rounded-xl">
                      <code className="text-success-400 font-mono">GET /api/v1/appointments</code>
                      <p className="text-neutral-400 mt-2">Obtener lista de citas programadas</p>
                    </div>
                    <div className="bg-neutral-800/50 p-4 rounded-xl">
                      <code className="text-success-400 font-mono">POST /api/v1/webhooks</code>
                      <p className="text-neutral-400 mt-2">Configurar webhooks para eventos en tiempo real</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-900/30 p-6 rounded-2xl border border-primary-500/30">
                  <h4 className="text-lg font-semibold text-white mb-3">Documentación Completa</h4>
                  <p className="text-neutral-300 mb-4">
                    Accede a la documentación completa de la API con ejemplos de código, 
                    esquemas de datos y guías de integración.
                  </p>
                  <a
                    href="https://docs.iafy.es/api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-200"
                  >
                    Ver Documentación API
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </section>

            {/* Support */}
            <section id="soporte" className="card-primary p-8 rounded-3xl shadow-spectacular">
              <h2 className="text-3xl font-bold text-white mb-6">Soporte Técnico</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Canales de Soporte</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-neutral-300">
                      <div className="w-3 h-3 bg-success-400 rounded-full mr-3"></div>
                      <span>Email: soporte@iafy.es</span>
                    </div>
                    <div className="flex items-center text-neutral-300">
                      <div className="w-3 h-3 bg-primary-400 rounded-full mr-3"></div>
                      <span>WhatsApp: +34 621 482 256</span>
                    </div>
                    <div className="flex items-center text-neutral-300">
                      <div className="w-3 h-3 bg-electric-400 rounded-full mr-3"></div>
                      <span>Chat en vivo: 24/7</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Horarios de Atención</h4>
                  <div className="space-y-3 text-neutral-300">
                    <p><strong className="text-white">Soporte Técnico:</strong> 24/7</p>
                    <p><strong className="text-white">Consultas Comerciales:</strong> L-V 9:00-18:00</p>
                    <p><strong className="text-white">Emergencias:</strong> 24/7</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Documentation;