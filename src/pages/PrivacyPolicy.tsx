import React from 'react';
import { Shield, ArrowLeft, Lock, Eye, Database, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
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
                  <div className="text-white font-bold text-xl">Política de Privacidad</div>
                  <div className="text-primary-300 text-lg font-medium">Protección de Datos</div>
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
      <main className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 card-primary rounded-full px-8 py-4 mb-8 shadow-spectacular">
            <Shield className="w-6 h-6 text-success-400" />
            <span className="text-success-300 font-medium text-lg">Protección de Datos</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-success-100 to-primary-200 mb-8">
            Política de Privacidad
          </h1>
          <p className="text-xl text-neutral-300 leading-relaxed">
            En IAFY, la protección de tus datos personales es nuestra máxima prioridad
          </p>
          <p className="text-neutral-400 mt-4">
            Última actualización: 15 de enero de 2025
          </p>
        </div>

        {/* Content */}
        <div className="card-primary p-8 lg:p-12 rounded-3xl shadow-spectacular space-y-12">
          
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <UserCheck className="w-8 h-8 text-primary-400 mr-3" />
              1. Información General
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                IAFY, S.L. (en adelante "IAFY", "nosotros", "nuestro" o "la empresa") se compromete a proteger 
                y respetar tu privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, 
                almacenamos y protegemos tu información personal cuando utilizas nuestros servicios de 
                automatización empresarial con inteligencia artificial.
              </p>
              
              <div className="bg-primary-900/30 p-6 rounded-2xl border border-primary-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Datos de Contacto del Responsable</h4>
                <ul className="space-y-2 text-neutral-300">
                  <li><strong className="text-white">Empresa:</strong> IAFY, S.L.</li>
                  <li><strong className="text-white">Email:</strong> privacidad@iafy.es</li>
                  <li><strong className="text-white">Dirección:</strong> Madrid, España</li>
                  <li><strong className="text-white">Teléfono:</strong> +34 621 482 256</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Database className="w-8 h-8 text-success-400 mr-3" />
              2. Información que Recopilamos
            </h2>
            <div className="space-y-6">
              <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">2.1 Información que nos proporcionas directamente</h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Datos de registro: nombre, email, teléfono, empresa</li>
                  <li>• Información de configuración de tu cuenta</li>
                  <li>• Contenido de las conversaciones para entrenar la IA</li>
                  <li>• Información de facturación y pago</li>
                  <li>• Comunicaciones contigo (emails, chats, llamadas)</li>
                </ul>
              </div>

              <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">2.2 Información recopilada automáticamente</h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Datos de uso de la plataforma (logs, métricas)</li>
                  <li>• Información técnica (IP, navegador, dispositivo)</li>
                  <li>• Cookies y tecnologías similares</li>
                  <li>• Datos de rendimiento y analíticas</li>
                </ul>
              </div>

              <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">2.3 Información de terceros</h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Datos de integraciones con CRM y otras plataformas</li>
                  <li>• Información de WhatsApp Business API</li>
                  <li>• Datos de proveedores de pago</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Usage */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Eye className="w-8 h-8 text-electric-400 mr-3" />
              3. Cómo Utilizamos tu Información
            </h2>
            <div className="space-y-4">
              <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">Utilizamos tu información para:</h4>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-success-400 rounded-full mt-2 mr-3"></div>
                    <span><strong className="text-white">Proporcionar nuestros servicios:</strong> Configurar y operar tu asistente de IA personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-success-400 rounded-full mt-2 mr-3"></div>
                    <span><strong className="text-white">Mejorar la IA:</strong> Entrenar y optimizar los modelos de inteligencia artificial</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-success-400 rounded-full mt-2 mr-3"></div>
                    <span><strong className="text-white">Soporte técnico:</strong> Resolver problemas y proporcionar asistencia</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-success-400 rounded-full mt-2 mr-3"></div>
                    <span><strong className="text-white">Comunicación:</strong> Enviarte actualizaciones, notificaciones y información relevante</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-success-400 rounded-full mt-2 mr-3"></div>
                    <span><strong className="text-white">Cumplimiento legal:</strong> Cumplir con obligaciones legales y regulatorias</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Lock className="w-8 h-8 text-danger-400 mr-3" />
              4. Seguridad de los Datos
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-300 text-lg leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                  <h4 className="text-lg font-semibold text-white mb-3">Medidas Técnicas</h4>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• Encriptación AES-256</li>
                    <li>• Servidores en Europa (AWS)</li>
                    <li>• Certificaciones ISO 27001</li>
                    <li>• Backups automáticos</li>
                    <li>• Monitoreo 24/7</li>
                  </ul>
                </div>

                <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                  <h4 className="text-lg font-semibold text-white mb-3">Medidas Organizativas</h4>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• Acceso limitado por roles</li>
                    <li>• Formación en privacidad</li>
                    <li>• Auditorías regulares</li>
                    <li>• Políticas de seguridad</li>
                    <li>• Contratos con terceros</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">5. Tus Derechos</h2>
            <div className="space-y-4">
              <p className="text-neutral-300 text-lg leading-relaxed">
                Bajo el GDPR y la LOPD, tienes los siguientes derechos respecto a tus datos personales:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Acceso', description: 'Solicitar una copia de tus datos personales' },
                  { title: 'Rectificación', description: 'Corregir datos inexactos o incompletos' },
                  { title: 'Supresión', description: 'Solicitar la eliminación de tus datos' },
                  { title: 'Limitación', description: 'Restringir el procesamiento de tus datos' },
                  { title: 'Portabilidad', description: 'Recibir tus datos en formato estructurado' },
                  { title: 'Oposición', description: 'Oponerte al procesamiento de tus datos' }
                ].map((right, index) => (
                  <div key={index} className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/50">
                    <h5 className="text-white font-semibold mb-2">{right.title}</h5>
                    <p className="text-neutral-400 text-sm">{right.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary-900/30 p-6 rounded-2xl border border-primary-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Ejercer tus Derechos</h4>
                <p className="text-neutral-300 mb-4">
                  Para ejercer cualquiera de estos derechos, contacta con nosotros en:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:privacidad@iafy.es"
                    className="inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-primary-600 to-success-600 hover:from-primary-500 hover:to-success-500 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    privacidad@iafy.es
                  </a>
                  <span className="text-neutral-400 flex items-center">
                    Responderemos en un plazo máximo de 30 días
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">6. Cookies y Tecnologías Similares</h2>
            <div className="space-y-6">
              <p className="text-neutral-300 text-lg leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el uso 
                de nuestros servicios y personalizar el contenido.
              </p>

              <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">Tipos de Cookies que Utilizamos</h4>
                <ul className="space-y-3 text-neutral-300">
                  <li><strong className="text-white">Esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
                  <li><strong className="text-white">Analíticas:</strong> Para entender cómo interactúas con nuestros servicios</li>
                  <li><strong className="text-white">Funcionales:</strong> Para recordar tus preferencias y configuraciones</li>
                  <li><strong className="text-white">Marketing:</strong> Para mostrar contenido relevante (solo con tu consentimiento)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">7. Contacto</h2>
            <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos tus datos personales, 
                no dudes en contactarnos:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Datos de Contacto</h4>
                  <ul className="space-y-2 text-neutral-300">
                    <li><strong className="text-white">Email:</strong> privacidad@iafy.es</li>
                    <li><strong className="text-white">Teléfono:</strong> +34 621 482 256</li>
                    <li><strong className="text-white">Dirección:</strong> Madrid, España</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Autoridad de Control</h4>
                  <p className="text-neutral-300">
                    También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) 
                    si consideras que el tratamiento de tus datos no cumple con la normativa.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;