import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cómo funciona exactamente la IA de IAFY?',
      answer: 'Nuestra IA utiliza procesamiento de lenguaje natural avanzado entrenado específicamente para el sector médico. Se integra con WhatsApp, llamadas telefónicas y tu sistema de gestión para responder consultas, agendar citas y cualificar pacientes automáticamente, manteniendo el tono y estilo de tu clínica.'
    },
    {
      question: '¿Cuánto tiempo tarda la implementación?',
      answer: 'La implementación completa toma entre 7-14 días. Incluye: configuración inicial (2-3 días), entrenamiento de la IA con tu información (3-5 días), pruebas y ajustes (2-3 días), y capacitación de tu equipo (1-2 días). Durante este tiempo, tu clínica sigue operando normalmente.'
    },
    {
      question: '¿La IA puede manejar consultas médicas complejas?',
      answer: 'La IA está diseñada para manejar consultas administrativas, agendamiento y preguntas frecuentes. Para consultas médicas complejas, transfiere automáticamente al personal médico apropiado. Nunca da consejos médicos, solo facilita la comunicación y gestión administrativa.'
    },
    {
      question: '¿Qué pasa si un paciente quiere hablar con una persona real?',
      answer: 'La IA puede transferir instantáneamente a un miembro de tu equipo cuando el paciente lo solicite o cuando detecte que la consulta requiere atención humana. También puedes configurar horarios específicos para transferencias automáticas.'
    },
    {
      question: '¿Es seguro y cumple con la normativa médica?',
      answer: 'Sí, cumplimos con GDPR, LOPD y normativas médicas españolas. Todos los datos están encriptados, almacenados en servidores europeos certificados, y nunca compartimos información de pacientes. Tenemos certificaciones ISO 27001 y SOC 2.'
    },
    {
      question: '¿Puedo cancelar el servicio en cualquier momento?',
      answer: 'Absolutamente. No hay permanencia ni penalizaciones por cancelación. Puedes cancelar con 30 días de aviso. Además, ofrecemos 30 días de garantía: si no estás satisfecho, te devolvemos el dinero completo.'
    },
    {
      question: '¿Funciona con mi sistema actual de gestión?',
      answer: 'IAFY se integra con los principales sistemas de gestión médica como Clinic Cloud, Doctoralia, Medigest, y muchos otros. Si usas un sistema específico, nuestro equipo técnico evaluará la integración durante la demo personalizada.'
    },
    {
      question: '¿Qué soporte técnico incluye?',
      answer: 'Todos los planes incluyen soporte técnico. El plan Professional incluye soporte prioritario 24/7, y el Enterprise incluye un gestor de cuenta dedicado. También proporcionamos formación inicial y actualizaciones automáticas sin coste adicional.'
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Preguntas Frecuentes</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6">
            Resolvemos tus dudas
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Las preguntas más comunes sobre IAFY y la automatización con IA
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-blue-400" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-700/50 pt-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-gray-300 mb-6">
              Nuestro equipo está aquí para ayudarte a resolver cualquier duda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/iafyagency/30min?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Agenda una demo personalizada
              </a>
              <a
                href="https://wa.me/34621482256?text=Hola%2C%20tengo%20una%20cl%C3%ADnica%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20IAFY%20y%20la%20automatizaci%C3%B3n%20con%20IA."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-blue-400 border border-blue-400/50 hover:bg-blue-400/10 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;