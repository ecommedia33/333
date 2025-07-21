import React, { useState } from 'react';
import { HelpCircle, ArrowLeft, Search, Book, MessageCircle, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    {
      title: 'Primeros Pasos',
      icon: Book,
      articles: [
        'Cómo crear tu cuenta en IAFY',
        'Configuración inicial paso a paso',
        'Conectar WhatsApp Business',
        'Primera conversación con IA'
      ]
    },
    {
      title: 'Configuración Avanzada',
      icon: MessageCircle,
      articles: [
        'Personalizar respuestas de la IA',
        'Configurar horarios de atención',
        'Integración con CRM',
        'Configurar notificaciones'
      ]
    },
    {
      title: 'Solución de Problemas',
      icon: HelpCircle,
      articles: [
        'La IA no responde correctamente',
        'Problemas de conexión con WhatsApp',
        'Errores de sincronización',
        'Recuperar conversaciones perdidas'
      ]
    }
  ];

  const faqs = [
    {
      question: '¿Cómo funciona exactamente la IA de IAFY?',
      answer: 'IAFY utiliza GPT-4, el modelo de IA más avanzado disponible, entrenado específicamente para tu empresa. La IA aprende de tu información, productos, servicios y estilo de comunicación para responder como lo haría tu mejor empleado. Puede manejar consultas complejas, agendar citas, cualificar leads y transferir conversaciones cuando sea necesario.'
    },
    {
      question: '¿Cuánto tiempo tarda la implementación completa?',
      answer: 'La implementación estándar toma entre 7-14 días dependiendo de la complejidad de tu empresa. Incluye: configuración inicial (2-3 días), entrenamiento de la IA (3-5 días), pruebas y ajustes (2-3 días), y capacitación de tu equipo (1-2 días). Durante este tiempo, tu empresa sigue operando normalmente.'
    },
    {
      question: '¿La IA puede manejar consultas específicas de mi industria?',
      answer: 'Sí, la IA se entrena específicamente con la información de tu empresa e industria. Puede manejar consultas técnicas, precios, disponibilidad, procesos específicos y cualquier información que le proporciones. Para consultas muy especializadas, puede transferir automáticamente a un experto humano.'
    },
    {
      question: '¿Qué pasa si un cliente quiere hablar con una persona real?',
      answer: 'La IA puede transferir instantáneamente a un miembro de tu equipo cuando el cliente lo solicite o cuando detecte que la consulta requiere atención humana especializada. También puedes configurar horarios específicos para transferencias automáticas o palabras clave que activen la transferencia.'
    },
    {
      question: '¿Es seguro y cumple con las normativas de protección de datos?',
      answer: 'Absolutamente. IAFY cumple con GDPR, LOPD y todas las normativas europeas de protección de datos. Utilizamos encriptación AES-256, servidores en Europa, y tenemos certificaciones ISO 27001 y SOC 2. Nunca compartimos datos de clientes y tienes control total sobre tu información.'
    },
    {
      question: '¿Puedo cancelar el servicio en cualquier momento?',
      answer: 'Sí, no hay permanencia ni penalizaciones por cancelación. Puedes cancelar con 30 días de aviso. Además, ofrecemos 30 días de garantía: si no estás satisfecho con los resultados, te devolvemos el dinero completo sin preguntas.'
    },
    {
      question: '¿Funciona con mi sistema actual de gestión?',
      answer: 'IAFY se integra con los principales sistemas de gestión empresarial como Salesforce, HubSpot, Pipedrive, Zoho, y muchos otros. Si usas un sistema específico, nuestro equipo técnico evaluará la integración durante la demo personalizada y desarrollará conectores personalizados si es necesario.'
    },
    {
      question: '¿Qué soporte técnico está incluido?',
      answer: 'Todos los planes incluyen soporte técnico por email y chat. El plan Professional incluye soporte prioritario 24/7 por teléfono, y el Enterprise incluye un gestor de cuenta dedicado. También proporcionamos formación inicial completa y actualizaciones automáticas sin coste adicional.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                  <div className="text-white font-bold text-xl">Centro de Ayuda</div>
                  <div className="text-primary-300 text-lg font-medium">Soporte 24/7</div>
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
            <HelpCircle className="w-6 h-6 text-success-400" />
            <span className="text-success-300 font-medium text-lg">Centro de Ayuda</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-success-100 to-primary-200 mb-8">
            ¿En qué podemos ayudarte?
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Encuentra respuestas rápidas a tus preguntas o contacta con nuestro equipo de soporte
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-neutral-400" />
            <input
              type="text"
              placeholder="Buscar en el centro de ayuda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-6 bg-neutral-800/50 border border-neutral-700/50 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500/50 transition-colors duration-200 text-lg"
            />
          </div>
        </div>

        {/* Quick Help Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-success-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="relative card-primary p-8 rounded-3xl shadow-spectacular transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-primary-500 to-success-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <a
                          href="#"
                          className="flex items-center text-neutral-300 hover:text-white transition-colors duration-200 group/item"
                        >
                          <ChevronRight className="w-4 h-4 mr-2 text-primary-400 group-hover/item:translate-x-1 transition-transform duration-200" />
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="card-primary p-8 rounded-3xl shadow-spectacular mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Preguntas Frecuentes</h2>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="group">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full bg-neutral-800/50 hover:bg-neutral-700/50 rounded-2xl border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-200 p-6 text-left"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white pr-8">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {expandedFAQ === index ? (
                        <ChevronDown className="w-6 h-6 text-primary-400" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-neutral-400 group-hover:text-primary-400 transition-colors duration-200" />
                      )}
                    </div>
                  </div>
                </button>
                
                {expandedFAQ === index && (
                  <div className="mt-4 px-6 pb-6">
                    <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-700/50">
                      <p className="text-neutral-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-primary p-8 rounded-3xl shadow-spectacular text-center">
            <div className="bg-gradient-to-r from-primary-500 to-success-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Chat en Vivo</h3>
            <p className="text-neutral-300 mb-6">
              Habla directamente con nuestro equipo de soporte
            </p>
            <button className="w-full btn-primary text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
              Iniciar Chat
            </button>
          </div>

          <div className="card-primary p-8 rounded-3xl shadow-spectacular text-center">
            <div className="bg-gradient-to-r from-success-500 to-electric-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Email</h3>
            <p className="text-neutral-300 mb-6">
              Envíanos un email y te responderemos en 24h
            </p>
            <a
              href="mailto:soporte@iafy.es"
              className="block w-full btn-success text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 text-center"
            >
              soporte@iafy.es
            </a>
          </div>

          <div className="card-primary p-8 rounded-3xl shadow-spectacular text-center">
            <div className="bg-gradient-to-r from-electric-500 to-primary-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Teléfono</h3>
            <p className="text-neutral-300 mb-6">
              Llámanos para soporte inmediato
            </p>
            <a
              href="tel:+34621482256"
              className="block w-full btn-electric text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 text-center"
            >
              +34 621 482 256
            </a>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="text-center mt-16">
          <div className="card-primary p-12 rounded-3xl shadow-spectacular">
            <h3 className="text-3xl font-bold text-white mb-6">¿Aún necesitas ayuda?</h3>
            <p className="text-neutral-300 mb-8 text-lg max-w-2xl mx-auto">
              Si no encontraste lo que buscabas, agenda una sesión personalizada con nuestro equipo técnico
            </p>
            <a
              href="https://calendly.com/iafyagency/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-primary-600 to-success-600 hover:from-primary-500 hover:to-success-500 rounded-2xl shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              Agendar Sesión de Soporte
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HelpCenter;