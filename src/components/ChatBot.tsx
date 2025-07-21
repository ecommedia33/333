import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap, Calendar, ArrowRight, Phone, Mail, Target, TrendingUp, Euro, Clock } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
  actions?: Array<{
    type: 'calendly' | 'whatsapp' | 'link';
    text: string;
    url?: string;
    message?: string;
  }>;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState('');
  const [userCompany, setUserCompany] = useState('');
  const [conversationStage, setConversationStage] = useState('initial');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Base de conocimiento de la web
  const knowledgeBase = {
    servicios: {
      principales: [
        "Asistente IA conversacional 24/7 que atiende WhatsApp y llamadas",
        "Automatización completa de agenda de citas",
        "Integración con CRM y sistemas existentes",
        "Voz sintética indistinguible de humanos",
        "Respuestas personalizadas con el estilo de tu empresa"
      ],
      beneficios: [
        "Captura 100% de leads las 24 horas",
        "Reduce costes operativos hasta 2.500€/mes",
        "Aumenta conversiones hasta 180%",
        "ROI promedio del 320% en 30 días",
        "Implementación en solo 7 días"
      ]
    },
    precios: {
      starter: "297€/mes - Hasta 500 conversaciones, WhatsApp + llamadas básicas",
      professional: "497€/mes - Hasta 2.000 conversaciones, IA avanzada, soporte 24/7",
      enterprise: "997€/mes - Conversaciones ilimitadas, suite completa, gestor dedicado"
    },
    garantias: [
      "30 días de garantía de devolución del dinero",
      "Sin permanencia ni penalizaciones",
      "Implementación garantizada en 7 días",
      "Soporte técnico 24/7 incluido"
    ],
    casos_exito: [
      "TechSolutions Madrid: +180% conversiones, 4.200€ ahorrados/mes",
      "InnovaMarketing Barcelona: 6h ahorradas/día, +95% satisfacción",
      "GlobalTrade Valencia: +300% clientes internacionales"
    ],
    tecnologia: [
      "GPT-4 Turbo para procesamiento de lenguaje natural",
      "Infraestructura AWS con 99.9% uptime",
      "Encriptación AES-256 nivel militar",
      "Cumplimiento GDPR, LOPD, ISO 27001"
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "¡Hola! 👋 Soy Carlos, consultor especializado en automatización empresarial de IAFY.\n\nVeo que estás explorando cómo la IA puede transformar tu negocio. Me dedico a ayudar a empresarios como tú a automatizar su atención al cliente y recuperar ingresos que se están perdiendo.\n\n¿Cómo te llamas? Me gusta personalizar la conversación 😊",
          ["Mi nombre es...", "Prefiero no decirlo", "¿Qué hace exactamente IAFY?", "¿Cómo puedo perder ingresos?"],
          [
            {
              type: 'calendly',
              text: '📅 Agendar demo personalizada',
            },
            {
              type: 'whatsapp',
              text: '💬 Hablar por WhatsApp',
              message: `Hola Carlos, vengo del chatbot de IAFY. Me interesa conocer más sobre automatización con IA. ¿Podríamos hablar?`
            }
          ]
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string, quickReplies?: string[], actions?: Message['actions']) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
      quickReplies,
      actions
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1000 + Math.random() * 800);
  };

  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('#calendly-section') || 
                           document.querySelector('[data-url*="calendly"]')?.closest('section');
    
    if (calendlySection) {
      calendlySection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    } else {
      window.open('https://calendly.com/iafyagency/30min?month=2025-06', '_blank');
    }
  };

  const openWhatsApp = (customMessage?: string) => {
    const defaultMessage = customMessage || 
      `Hola Carlos, vengo del chatbot de IAFY. Soy ${userName || 'un empresario'} ${userCompany ? `de ${userCompany}` : ''} y me interesa conocer más sobre cómo la IA puede automatizar mi empresa. ¿Podríamos hablar?`;
    
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/34621482256?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  const analyzeUserIntent = (message: string) => {
    const msg = message.toLowerCase();
    
    if (msg.includes('precio') || msg.includes('coste') || msg.includes('cuánto')) return 'pricing';
    if (msg.includes('demo') || msg.includes('ver') || msg.includes('mostrar')) return 'demo';
    if (msg.includes('funciona') || msg.includes('cómo') || msg.includes('qué hace')) return 'how_it_works';
    if (msg.includes('caso') || msg.includes('ejemplo') || msg.includes('cliente')) return 'case_studies';
    if (msg.includes('garantía') || msg.includes('seguro') || msg.includes('riesgo')) return 'guarantee';
    if (msg.includes('tiempo') || msg.includes('implementa') || msg.includes('instala')) return 'implementation';
    if (msg.includes('integra') || msg.includes('crm') || msg.includes('sistema')) return 'integration';
    if (msg.includes('seguridad') || msg.includes('datos') || msg.includes('gdpr')) return 'security';
    if (msg.includes('whatsapp') || msg.includes('llamada') || msg.includes('teléfono')) return 'channels';
    if (msg.includes('roi') || msg.includes('retorno') || msg.includes('beneficio')) return 'roi';
    
    return 'general';
  };

  const getBotResponse = (userMessage: string): { text: string; quickReplies?: string[]; actions?: Message['actions'] } => {
    const message = userMessage.toLowerCase();
    const intent = analyzeUserIntent(message);

    // ETAPA 1: CUALIFICACIÓN INICIAL
    if (conversationStage === 'initial') {
      if (message.includes('mi nombre es') || message.includes('soy') || message.includes('me llamo')) {
        const nameMatch = userMessage.match(/(?:mi nombre es|soy|me llamo)\s+([a-záéíóúñ\s]+)/i);
        if (nameMatch) {
          setUserName(nameMatch[1].trim());
          setConversationStage('qualifying');
          return {
            text: `Encantado de conocerte, ${nameMatch[1].trim()}! 🤝\n\nComo consultor especializado, he ayudado a más de 20 empresas a automatizar su atención al cliente. La mayoría descubre que está perdiendo entre 1.500€ y 3.000€ al mes por no tener IA.\n\n¿Cuál es el nombre de tu empresa? Me ayuda a entender mejor tu situación específica.`,
            actions: [
              {
                type: 'calendly',
                text: '📅 Análisis personalizado (30 min)',
              },
              {
                type: 'whatsapp',
                text: '💬 Hablar directamente',
                message: `Hola Carlos, soy ${nameMatch[1].trim()} y me interesa un análisis personalizado para mi empresa. ¿Podríamos hablar?`
              }
            ],
            quickReplies: ["Mi empresa es...", "Trabajo por cuenta propia", "¿Cómo calculas las pérdidas?", "Quiero saber más"]
          };
        }
      }

      if (message.includes('prefiero no') || message.includes('no decirlo')) {
        setConversationStage('qualifying');
        return {
          text: "Perfecto, lo entiendo. 👍\n\nDéjame preguntarte algo que veo en el 90% de empresas: ¿tu negocio recibe llamadas o mensajes fuera del horario laboral que no pueden ser atendidos?\n\nEsta es una de las principales fuentes de pérdida de ingresos que identifico en mis consultas.",
          actions: [
            {
              type: 'whatsapp',
              text: '💬 Evaluar mi situación',
              message: `Hola Carlos, me interesa que evalúes la situación de mi empresa respecto a llamadas perdidas y automatización.`
            },
            {
              type: 'calendly',
              text: '📅 Demo personalizada',
            }
          ],
          quickReplies: ["Sí, muchas llamadas perdidas", "Solo algunas veces", "¿Cómo lo solucionáis?", "Quiero una evaluación"]
        };
      }

      if (message.includes('qué hace') || message.includes('iafy')) {
        return {
          text: `IAFY es la plataforma líder en España para automatización empresarial con IA. 🚀\n\n**Lo que hacemos:**\n${knowledgeBase.servicios.principales.map(s => `• ${s}`).join('\n')}\n\n**Resultados típicos:**\n${knowledgeBase.servicios.beneficios.map(b => `• ${b}`).join('\n')}\n\nLa clave está en que cada implementación es personalizada para tu empresa específica.\n\n¿Te gustaría ver cómo funcionaría en tu caso particular?`,
          actions: [
            {
              type: 'calendly',
              text: '📅 Ver mi caso específico',
            },
            {
              type: 'whatsapp',
              text: '💬 Consulta personalizada',
              message: `Hola Carlos, he visto lo que hace IAFY y me gustaría una consulta personalizada para mi empresa.`
            }
          ],
          quickReplies: ["Ver mi caso", "¿Cuánto cuesta?", "Casos de éxito", "Demo personalizada"]
        };
      }

      if (message.includes('perder ingresos') || message.includes('30.000')) {
        return {
          text: "Te explico por qué muchas empresas pierden esa cantidad sin darse cuenta:\n\n**Principales fuentes de pérdida:**\n• **Llamadas no atendidas:** 40% promedio = 600-800€/día\n• **Horario limitado:** 16h sin atención = oportunidades perdidas\n• **Personal administrativo:** 2.000-3.000€/mes en tareas automatizables\n• **Respuesta lenta:** Clientes que se van a la competencia\n\n**Total anual:** Entre 20.000€ y 40.000€ dependiendo del tamaño de la empresa.\n\n¿Te suena familiar alguna de estas situaciones?",
          actions: [
            {
              type: 'whatsapp',
              text: '💬 Calcular mis pérdidas exactas',
              message: `Hola Carlos, me interesa calcular las pérdidas exactas de mi empresa por no tener automatización.`
            },
            {
              type: 'calendly',
              text: '📊 Análisis de pérdidas personalizado',
            }
          ],
          quickReplies: ["Sí, me suena", "¿Cómo lo calculáis?", "Quiero una solución", "Análisis personalizado"]
        };
      }

      return {
        text: "Entiendo que quieres conocer más detalles. Como consultor, mi enfoque es siempre entender primero tu situación específica antes de hacer recomendaciones.\n\nCada empresa es diferente, pero hay patrones comunes que he identificado en más de 20 implementaciones exitosas.\n\n¿Qué te gustaría saber específicamente sobre automatización con IA?",
        actions: [
          {
            type: 'calendly',
            text: '📅 Consulta personalizada',
          },
          {
            type: 'whatsapp',
            text: '💬 Hablar directamente',
            message: `Hola Carlos, me gustaría conocer más sobre automatización con IA para mi empresa.`
          }
        ],
        quickReplies: ["¿Cómo funciona?", "Casos de éxito", "Precios", "Demo personalizada"]
      };
    }

    // RESPUESTAS BASADAS EN INTENCIÓN
    switch (intent) {
      case 'pricing':
        setConversationStage('closing');
        return {
          text: `Perfecto ${userName ? userName : ''}, hablemos de inversión y retorno. 💰\n\n**Nuestros planes principales:**\n\n**Professional (497€/mes)** - El más popular:\n• Hasta 2.000 conversaciones\n• IA avanzada 24/7\n• Soporte prioritario\n• ROI promedio: 320%\n\n**Starter (297€/mes)** - Para empezar:\n• Hasta 500 conversaciones\n• Funciones básicas\n• Soporte estándar\n\nLa mayoría de nuestros clientes recupera la inversión en el primer mes y genera entre 1.500€ y 3.000€ extra mensualmente.\n\n¿Te gustaría que calculemos el ROI específico para tu empresa?`,
          actions: [
            {
              type: 'calendly',
              text: '📊 Calcular mi ROI específico',
            },
            {
              type: 'whatsapp',
              text: '💬 Consulta sobre planes',
              message: `Hola Carlos, me interesan los planes de IAFY. ¿Podríamos hablar sobre cuál sería el mejor para mi empresa?`
            }
          ],
          quickReplies: ["Calcular mi ROI", "¿Garantías incluidas?", "Empezar con Starter", "¿Cuándo veo resultados?"]
        };

      case 'demo':
        return {
          text: `¡Excelente decisión ${userName ? userName : ''}! 🎯\n\nLa demo personalizada es la mejor forma de ver el potencial real para tu empresa.\n\n**En 30 minutos verás:**\n• Análisis de tu situación actual\n• Cálculo de pérdidas específicas\n• Demostración en vivo de la IA\n• Plan de implementación personalizado\n• ROI proyectado para tu caso\n\nNo es una presentación genérica, sino un análisis específico de tu empresa.\n\n¿Prefieres agendar directamente o que hablemos primero por WhatsApp?`,
          actions: [
            {
              type: 'calendly',
              text: '📅 Agendar demo ahora',
            },
            {
              type: 'whatsapp',
              text: '💬 Hablar antes de agendar',
              message: `Hola Carlos, me interesa la demo personalizada de IAFY. ¿Podríamos hablar primero para que me cuentes más detalles?`
            }
          ],
          quickReplies: ["Agendar ahora", "¿Qué veré exactamente?", "Hablar primero", "¿Cuánto dura?"]
        };

      case 'how_it_works':
        return {
          text: `Te explico el proceso completo, ${userName ? userName : ''}. Es más sencillo de lo que parece: 🔧\n\n**Implementación (7 días):**\n📅 **Días 1-2:** Análisis y configuración inicial\n📅 **Días 3-5:** Entrenamiento de la IA con tu información\n📅 **Días 6-7:** Pruebas y lanzamiento\n\n**Funcionamiento diario:**\n• La IA atiende WhatsApp y llamadas 24/7\n• Responde con el estilo de tu empresa\n• Agenda citas automáticamente\n• Transfiere casos complejos a tu equipo\n• Aprende continuamente de cada interacción\n\n¿Hay algún aspecto específico que te gustaría que profundice?`,
          actions: [
            {
              type: 'calendly',
              text: '📅 Ver funcionamiento en vivo',
            },
            {
              type: 'whatsapp',
              text: '💬 Resolver dudas específicas',
              message: `Hola Carlos, tengo algunas dudas específicas sobre cómo funciona IAFY. ¿Podríamos hablar?`
            }
          ],
          quickReplies: ["Ver en vivo", "¿Qué necesitáis de mí?", "¿Interrumpe mi negocio?", "Empezar proceso"]
        };

      case 'case_studies':
        return {
          text: `Te comparto algunos casos reales que pueden inspirarte: 📈\n\n${knowledgeBase.casos_exito.map(caso => `🏢 **${caso}**`).join('\n\n')}\n\n**Lo que tienen en común:**\n• Implementación rápida (7 días)\n• Resultados visibles desde el primer mes\n• Equipo más enfocado en tareas de valor\n• Clientes más satisfechos\n\nCada caso es único, pero los patrones de éxito son similares.\n\n¿Te gustaría que analicemos el potencial específico para tu empresa?`,
          actions: [
            {
              type: 'calendly',
              text: '📊 Analizar mi potencial',
            },
            {
              type: 'whatsapp',
              text: '💬 Hablar sobre mi caso',
              message: `Hola Carlos, he visto los casos de éxito y me gustaría hablar sobre el potencial para mi empresa.`
            }
          ],
          quickReplies: ["Analizar mi caso", "¿Cómo lo conseguís?", "Empezar proceso", "Más detalles"]
        };

      case 'guarantee':
        return {
          text: `Excelente pregunta ${userName ? userName : ''}. Nuestras garantías son muy sólidas: 🛡️\n\n${knowledgeBase.garantias.map(g => `✅ **${g}**`).join('\n')}\n\n**Además:**\n• Si no funciona en 7 días, trabajamos gratis hasta que esté perfecto\n• Más de 20 empresas nos respaldan con 95% de satisfacción\n• Proceso probado y refinado\n\nLa realidad es que estamos tan seguros de los resultados que asumimos todo el riesgo.\n\n¿Hay algún aspecto específico de las garantías que te preocupe?`,
          actions: [
            {
              type: 'calendly',
              text: '📅 Empezar sin riesgo',
            },
            {
              type: 'whatsapp',
              text: '💬 Aclarar dudas sobre garantías',
              message: `Hola Carlos, me interesan las garantías de IAFY. ¿Podríamos hablar sobre los detalles?`
            }
          ],
          quickReplies: ["Empezar sin riesgo", "¿Qué más incluye?", "Hablar con referencia", "Proceso de garantía"]
        };

      case 'implementation':
        return {
          text: `La implementación es sorprendentemente rápida y sencilla ${userName ? userName : ''}: ⚡\n\n**Cronograma detallado:**\n📅 **Días 1-2:** Configuración (nosotros trabajamos, tú sigues normal)\n📅 **Días 3-5:** Entrenamiento IA (proceso automático)\n📅 **Días 6-7:** Pruebas y lanzamiento suave\n\n**Lo que necesitamos de ti:**\n• 2-3 horas de tu tiempo total\n• Información sobre tu empresa y servicios\n• Acceso a WhatsApp Business\n• Feedback durante las pruebas\n\n**Garantía:** Si no está funcionando en 7 días, trabajamos gratis hasta que esté perfecto.\n\n¿Te parece un cronograma razonable?`,
          actions: [
            {
              type: 'calendly',
              text: '📅 Planificar implementación',
            },
            {
              type: 'whatsapp',
              text: '💬 Detalles de implementación',
              message: `Hola Carlos, me interesa conocer más detalles sobre el proceso de implementación de IAFY.`
            }
          ],
          quickReplies: ["Planificar implementación", "¿Qué necesitáis exactamente?", "¿Interrumpe mi negocio?", "Empezar proceso"]
        };

      default:
        return {
          text: `Entiendo tu interés ${userName ? userName : ''}. Como consultor especializado, mi objetivo es ayudarte a tomar la mejor decisión para tu empresa.\n\nCada situación es única, pero hay patrones comunes que he identificado en más de 20 implementaciones exitosas.\n\nLa mejor forma de evaluar si IAFY es adecuado para ti es con una demo personalizada donde analizamos tu caso específico.\n\n¿Qué te parece si agendamos 30 minutos para hacer un análisis sin compromiso?`,
          actions: [
            {
              type: 'calendly',
              text: '📅 Análisis sin compromiso',
            },
            {
              type: 'whatsapp',
              text: '💬 Consulta previa',
              message: `Hola Carlos, me gustaría una consulta previa antes de agendar la demo de IAFY.`
            }
          ],
          quickReplies: ["Análisis sin compromiso", "Consulta previa", "¿Qué analizaríamos?", "Más información"]
        };
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    addUserMessage(inputText);
    const userMessage = inputText;
    setInputText('');

    simulateTyping();
    setTimeout(() => {
      const response = getBotResponse(userMessage);
      addBotMessage(response.text, response.quickReplies, response.actions);
    }, 1000 + Math.random() * 800);
  };

  const handleQuickReply = (reply: string) => {
    addUserMessage(reply);
    simulateTyping();
    setTimeout(() => {
      const response = getBotResponse(reply);
      addBotMessage(response.text, response.quickReplies, response.actions);
    }, 800);
  };

  const handleAction = (action: NonNullable<Message['actions']>[0]) => {
    if (action.type === 'calendly') {
      scrollToCalendly();
    } else if (action.type === 'whatsapp') {
      openWhatsApp(action.message);
    } else if (action.type === 'link' && action.url) {
      window.open(action.url, '_blank');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Botón flotante del chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative"
          >
            {/* Efecto de brillo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-success-500 to-electric-500 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-pulse"></div>
            
            {/* Botón principal */}
            <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm p-4 rounded-full border border-white/30 shadow-spectacular hover:scale-110 transition-all duration-300">
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 text-white" />
                
                {/* Badge de consultor */}
                <div className="absolute -top-3 -right-3 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse shadow-lg">
                  CONSULTOR
                </div>
              </div>
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-neutral-900 text-white px-4 py-3 rounded-xl text-sm whitespace-nowrap shadow-xl border border-primary-400/30">
                <div className="font-bold text-primary-400">💼 Carlos - Consultor IA</div>
                <div className="text-neutral-300">¿Automatizamos tu empresa?</div>
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900"></div>
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Ventana del chatbot */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl shadow-2xl border border-neutral-700/50 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 via-success-600 to-electric-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success-400 rounded-full border-2 border-white flex items-center justify-center">
                  <Target className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Carlos - Consultor IA</h3>
                <p className="text-primary-100 text-sm flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Especialista en automatización • +20 empresas
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors duration-200 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] ${message.isBot ? 'order-2' : 'order-1'}`}>
                  {message.isBot && (
                    <div className="flex items-center space-x-2 mb-2">
                      <Bot className="w-4 h-4 text-primary-400" />
                      <span className="text-xs text-neutral-400 font-semibold">Carlos - Consultor IAFY</span>
                      <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></div>
                    </div>
                  )}
                  <div className={`p-4 rounded-2xl ${
                    message.isBot 
                      ? 'bg-gradient-to-r from-primary-600/20 via-success-600/20 to-electric-600/20 border border-primary-500/30 text-white' 
                      : 'bg-gradient-to-r from-success-600 to-primary-600 text-white'
                  }`}>
                    <p className="whitespace-pre-line text-sm leading-relaxed font-medium">{message.text}</p>
                  </div>
                  
                  {/* Action buttons */}
                  {message.actions && (
                    <div className="mt-3 space-y-2">
                      {message.actions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleAction(action)}
                          className="block w-full text-left px-4 py-3 text-sm bg-gradient-to-r from-success-600 to-primary-600 hover:from-success-500 hover:to-primary-500 text-white rounded-xl border border-success-400/50 hover:border-success-400 transition-all duration-200 transform hover:scale-105 font-bold shadow-lg"
                        >
                          <div className="flex items-center justify-between">
                            <span>{action.text}</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Quick replies */}
                  {message.quickReplies && (
                    <div className="mt-3 space-y-1">
                      {message.quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(reply)}
                          className="block w-full text-left px-3 py-2 text-sm bg-neutral-800/50 hover:bg-neutral-700/50 text-neutral-300 hover:text-white rounded-lg border border-neutral-600/30 hover:border-primary-500/50 transition-all duration-200 font-medium"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {message.isBot && (
                  <div className="order-1 mr-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 via-success-500 to-electric-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
                {!message.isBot && (
                  <div className="order-2 ml-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-success-500 to-primary-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 via-success-500 to-electric-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-primary-600/20 via-success-600/20 to-electric-600/20 border border-primary-500/30 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-success-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-electric-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-neutral-700/50">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu pregunta..."
                className="flex-1 bg-neutral-800/50 border border-neutral-600/50 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500/50 transition-colors duration-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-gradient-to-r from-primary-600 via-success-600 to-electric-600 hover:from-primary-500 hover:via-success-500 hover:to-electric-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            {/* Quick actions */}
            <div className="flex space-x-2 mt-3">
              <button
                onClick={() => handleQuickReply("Demo personalizada")}
                className="flex-1 bg-gradient-to-r from-success-600/20 to-primary-600/20 border border-success-500/30 text-success-400 px-3 py-2 rounded-lg text-xs font-bold hover:bg-success-600/30 transition-all duration-200"
              >
                <Calendar className="w-3 h-3 inline mr-1" />
                DEMO
              </button>
              <button
                onClick={() => handleQuickReply("¿Cuánto cuesta?")}
                className="flex-1 bg-gradient-to-r from-primary-600/20 to-electric-600/20 border border-primary-500/30 text-primary-400 px-3 py-2 rounded-lg text-xs font-bold hover:bg-primary-600/30 transition-all duration-200"
              >
                <Euro className="w-3 h-3 inline mr-1" />
                PRECIO
              </button>
              <button
                onClick={() => openWhatsApp()}
                className="flex-1 bg-gradient-to-r from-electric-600/20 to-success-600/20 border border-electric-500/30 text-electric-400 px-3 py-2 rounded-lg text-xs font-bold hover:bg-electric-600/30 transition-all duration-200"
              >
                <Phone className="w-3 h-3 inline mr-1" />
                LLAMAR
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;