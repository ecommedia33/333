import React from 'react';
import { AlertTriangle, TrendingDown, Clock, Users, ArrowRight, CheckCircle, Zap, Target } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Pierdes hasta 40% de pacientes potenciales',
      description: 'Las llamadas no contestadas y mensajes sin responder se convierten en pacientes perdidos para siempre',
      stat: '40%',
      color: 'from-danger-500 to-danger-600'
    },
    {
      icon: Clock,
      title: 'Tu equipo pierde 3-4 horas diarias',
      description: 'Atendiendo llamadas repetitivas, agendando citas y respondiendo las mismas preguntas básicas',
      stat: '4h',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Users,
      title: 'Costes de personal hasta 2.500€/mes',
      description: 'Recepcionistas, coordinadores y personal administrativo para tareas que la IA puede hacer mejor',
      stat: '2.500€',
      color: 'from-neutral-600 to-neutral-700'
    }
  ];

  const solutions = [
    {
      icon: Target,
      title: 'Captura 100% de leads 24/7',
      description: 'Nunca más pierdas un paciente. La IA responde instantáneamente a todas las consultas',
      improvement: '+60% conversión'
    },
    {
      icon: Zap,
      title: 'Automatización total sin intervención',
      description: 'Agenda citas, responde dudas y cualifica pacientes automáticamente',
      improvement: '4h ahorradas/día'
    },
    {
      icon: TrendingDown,
      title: 'Reduce costes operativos drásticamente',
      description: 'Elimina la necesidad de personal adicional para atención al cliente',
      improvement: 'Hasta 2.500€/mes'
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-neutral-900 via-danger-900/20 to-neutral-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-danger-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-danger-500/20 to-primary-500/20 backdrop-blur-sm border border-danger-500/30 rounded-full px-6 py-3 mb-8">
            <AlertTriangle className="w-5 h-5 text-danger-400 animate-pulse" />
            <span className="text-danger-300 font-medium">Problema Crítico</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-danger-100 to-primary-200 mb-6">
            ¿Tu clínica está perdiendo dinero cada día?
          </h2>
          <p className="text-xl lg:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Mientras duermes, tus competidores están capturando a tus pacientes potenciales
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-2 bg-gradient-to-r ${problem.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-8 rounded-3xl border border-danger-500/30 hover:border-danger-400/50 transform hover:-translate-y-4 transition-all duration-500">
                <div className={`bg-gradient-to-r ${problem.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-danger-400 to-primary-400 mb-4">
                  {problem.stat}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {problem.title}
                </h3>
                
                <p className="text-neutral-400 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Transition */}
        <div className="flex justify-center mb-20">
          <div className="bg-gradient-to-r from-primary-600 to-success-600 p-4 rounded-full animate-bounce">
            <ArrowRight className="w-8 h-8 text-white transform rotate-90" />
          </div>
        </div>

        {/* Solution Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-success-500/20 to-primary-500/20 backdrop-blur-sm border border-success-500/30 rounded-full px-6 py-3 mb-8">
            <CheckCircle className="w-5 h-5 text-success-400" />
            <span className="text-success-300 font-medium">Solución Revolucionaria</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-success-100 to-primary-200 mb-6">
            IAFY convierte estos problemas en ventajas competitivas
          </h2>
          <p className="text-xl lg:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Automatización inteligente que trabaja 24/7 para hacer crecer tu clínica
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-success-500 to-primary-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-8 rounded-3xl border border-success-500/30 hover:border-success-400/50 transform hover:-translate-y-4 transition-all duration-500">
                <div className="bg-gradient-to-r from-success-500 to-primary-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="inline-block bg-gradient-to-r from-success-400 to-primary-400 text-transparent bg-clip-text text-lg font-bold mb-4">
                  {solution.improvement}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-neutral-400 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;