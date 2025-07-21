import React, { useState } from 'react';
import { Calendar, ArrowLeft, ArrowRight, Tag, User, Clock, Search } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'IA Empresarial', 'Automatización', 'Casos de Éxito', 'Tecnología', 'Tendencias'];

  const posts = [
    {
      title: 'El Futuro de la Atención al Cliente: IA Conversacional en 2025',
      excerpt: 'Descubre cómo la inteligencia artificial está revolucionando la forma en que las empresas interactúan con sus clientes y las tendencias que marcarán el próximo año.',
      category: 'IA Empresarial',
      author: 'Carlos Mendoza',
      date: '15 Enero 2025',
      readTime: '8 min',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Cómo Automatizar WhatsApp Business para Aumentar Ventas',
      excerpt: 'Guía completa para implementar automatización en WhatsApp Business y convertir más leads en clientes reales.',
      category: 'Automatización',
      author: 'Ana Rodríguez',
      date: '12 Enero 2025',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'ROI Real: Empresa Ahorra 50.000€ Anuales con IA',
      excerpt: 'Análisis detallado de cómo una empresa de consultoría logró reducir costes operativos en un 70% implementando IAFY.',
      category: 'Casos de Éxito',
      author: 'Miguel Fernández',
      date: '10 Enero 2025',
      readTime: '10 min',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'GPT-4 vs Modelos Anteriores: ¿Qué Cambia para las Empresas?',
      excerpt: 'Comparativa técnica de las mejoras en GPT-4 y su impacto real en aplicaciones empresariales de IA conversacional.',
      category: 'Tecnología',
      author: 'Laura García',
      date: '8 Enero 2025',
      readTime: '12 min',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Integración CRM: Conecta tu IA con Salesforce en 5 Pasos',
      excerpt: 'Tutorial paso a paso para integrar sistemas de IA conversacional con Salesforce y otros CRMs populares.',
      category: 'Automatización',
      author: 'David López',
      date: '5 Enero 2025',
      readTime: '7 min',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Tendencias IA 2025: Lo que Toda Empresa Debe Saber',
      excerpt: 'Las 10 tendencias más importantes en inteligencia artificial empresarial que definirán el panorama competitivo este año.',
      category: 'Tendencias',
      author: 'Sofia Martín',
      date: '3 Enero 2025',
      readTime: '9 min',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'Todos' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

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
                  <div className="text-white font-bold text-xl">Blog Empresarial</div>
                  <div className="text-primary-300 text-lg font-medium">Insights & Tendencias</div>
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
            <Calendar className="w-6 h-6 text-primary-400" />
            <span className="text-primary-300 font-medium text-lg">Blog IAFY</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-100 to-success-200 mb-8">
            Insights sobre IA Empresarial
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Mantente al día con las últimas tendencias, casos de éxito y mejores prácticas en automatización empresarial
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                className="w-full pl-12 pr-4 py-4 bg-neutral-800/50 border border-neutral-700/50 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500/50 transition-colors duration-200"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-success-500 text-white'
                    : 'bg-neutral-800/50 text-neutral-400 hover:text-white hover:bg-neutral-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'Todos' && (
          <div className="mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-success-500 to-electric-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative card-primary rounded-3xl overflow-hidden shadow-spectacular">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="aspect-video lg:aspect-auto">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Destacado
                      </span>
                      <span className="bg-success-500/20 text-success-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {featuredPost.category}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-neutral-400">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <button className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-200">
                        Leer más
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured || selectedCategory !== 'Todos').map((post, index) => (
            <article key={index} className="group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-success-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="relative card-primary rounded-3xl overflow-hidden shadow-spectacular transform hover:-translate-y-4 transition-all duration-500">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center text-neutral-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-success-400 transition-all duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-neutral-400 leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors duration-300">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-success-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="text-white text-sm font-semibold">{post.author}</div>
                          <div className="text-neutral-400 text-xs">{post.date}</div>
                        </div>
                      </div>
                      
                      <button className="text-primary-400 hover:text-primary-300 transition-colors duration-200">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <div className="card-primary p-12 rounded-3xl shadow-spectacular text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Mantente al día con las últimas tendencias
            </h3>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto text-lg">
              Recibe nuestros mejores artículos sobre IA empresarial, casos de éxito y tendencias tecnológicas directamente en tu email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email profesional"
                className="flex-1 px-6 py-4 bg-neutral-800/50 border border-neutral-600/50 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500/50 transition-colors duration-200"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-success-600 hover:from-primary-500 hover:to-success-500 text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-105">
                Suscribirse
              </button>
            </div>
            <p className="text-neutral-400 text-sm mt-4">
              Sin spam. Cancela cuando quieras.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;