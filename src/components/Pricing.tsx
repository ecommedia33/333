import React from 'react';
import { Check, Star, Zap, Crown, ArrowRight, Sparkles } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '297',
      period: '/mes',
      description: 'Perfecto para clínicas pequeñas que empiezan con IA',
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Hasta 500 conversaciones/mes',
        'WhatsApp + Llamadas básicas',
        'Agenda automática',
        'Soporte por email',
        'Dashboard básico',
        'Integración con 1 CRM'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '497',
      period: '/mes',
      description: 'La opción más popular para clínicas en crecimiento',
      icon: Star,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Hasta 2.000 conversaciones/mes',
        'WhatsApp + Llamadas avanzadas',
        'Agenda inteligente completa',
        'Soporte prioritario 24/7',
        'Analytics avanzado',
        'Integración con múltiples CRMs',
        'Voz personalizada',
        'Recordatorios automáticos'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '997',
      period: '/mes',
      description: 'Para clínicas grandes que necesitan máximo rendimiento',
      icon: Crown,
      gradient: 'from-yellow-500 to-orange-500',
      features: [
        'Conversaciones ilimitadas',
        'Suite completa de IA',
        'Agenda multi-especialidad',
        'Soporte dedicado',
        'BI y reportes personalizados',
        'Integraciones ilimitadas',
        'Múltiples voces IA',
        'API personalizada',
        'Onboarding premium',
        'SLA garantizado'
      ],
      popular: false
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Planes Flexibles</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-pink-200 mb-6">
            Elige el plan perfecto para tu clínica
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Todos los planes incluyen 30 días de garantía sin compromiso
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MÁS POPULAR
                  </div>
                </div>
              )}
              
              <div className={`absolute -inset-2 bg-gradient-to-r ${plan.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              <div className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border ${plan.popular ? 'border-purple-500/50' : 'border-gray-700/50'} p-8 transform hover:-translate-y-2 transition-all duration-500 h-full`}>
                <div className="flex items-center justify-between mb-6">
                  <div className={`bg-gradient-to-r ${plan.gradient} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  {plan.popular && (
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                      {plan.price}€
                    </span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Sin permanencia • Cancela cuando quieras</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://calendly.com/iafyagency/30min?month=2025-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-full inline-flex items-center justify-center px-6 py-4 text-lg font-bold text-white bg-gradient-to-r ${plan.gradient} hover:opacity-90 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  <span>Empezar ahora</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl px-8 py-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <span className="text-green-300 font-semibold text-lg">
              30 días de garantía de devolución del dinero
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;