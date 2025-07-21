import React from 'react';
import { Newspaper, Calendar, ArrowRight, TrendingUp } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      title: 'IAFY revoluciona la atención médica con IA conversacional',
      excerpt: 'Más de 20 clínicas ya han implementado nuestra tecnología con resultados extraordinarios en automatización.',
      date: '15 Enero 2025',
      category: 'Innovación',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Nuevo récord: 95% de satisfacción en clientes IAFY',
      excerpt: 'Nuestros clientes reportan mejoras significativas en eficiencia operativa y satisfacción del paciente.',
      date: '10 Enero 2025',
      category: 'Resultados',
      image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Expansión: IAFY llega a 50 nuevas clínicas en 2025',
      excerpt: 'Nuestro crecimiento refleja la confianza del sector médico en la automatización inteligente.',
      date: '5 Enero 2025',
      category: 'Crecimiento',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-500/20 to-blue-500/20 backdrop-blur-sm border border-gray-500/30 rounded-full px-6 py-3 mb-8">
            <Newspaper className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300 font-medium">Últimas Noticias</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-blue-200 mb-6">
            IAFY en los medios
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Mantente al día con las últimas novedades y logros de nuestra plataforma
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <div key={index} className="group">
              <div className={`absolute -inset-2 bg-gradient-to-r ${article.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden transform hover:-translate-y-4 transition-all duration-500 h-full">
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`bg-gradient-to-r ${article.gradient} text-transparent bg-clip-text font-semibold text-sm`}>
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors duration-300">
                    <span>Leer más</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 lg:p-12 text-center">
            <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Mantente informado
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Recibe las últimas noticias sobre innovaciones en IA médica y casos de éxito de nuestros clientes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email profesional"
                className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-200"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;