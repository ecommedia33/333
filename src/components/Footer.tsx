import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUp, Zap, Activity, Target } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-primary-gradient overflow-hidden">
      {/* Efectos de fondo espectaculares */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-danger-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Información de la empresa espectacular */}
          <div className="lg:col-span-2">
            <div className="flex items-start space-x-8 mb-8">
              <div className="relative group flex-shrink-0">
                <div className="absolute -inset-3 bg-gradient-to-r from-primary-500 to-electric-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/30 shadow-spectacular">
                  <img 
                    src="/5841271165010691996-removebg.png" 
                    alt="IAFY Logo" 
                    className="h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="bg-gradient-to-r from-primary-500/25 to-electric-500/25 backdrop-blur-sm border border-primary-400/40 rounded-2xl px-6 py-4 shadow-lg">
                  <div className="text-white font-bold text-xl lg:text-2xl">Automatización Empresarial</div>
                  <div className="text-primary-300 text-base lg:text-lg font-medium">Powered by AI</div>
                </div>
              </div>
              <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-primary-400 opacity-60 flex-shrink-0" />
            </div>
            
            <p className="text-neutral-400 leading-relaxed mb-10 max-w-md text-lg">
              Revolucionamos la atención al cliente con inteligencia artificial avanzada. 
              Automatización 24/7 para empresas que buscan excelencia operativa y resultados excepcionales.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center text-neutral-400 hover:text-white transition-colors duration-200">
                <Mail className="w-6 h-6 mr-4 text-primary-400" />
                <a href="mailto:info@iafy.es" className="text-lg">
                  info@iafy.es
                </a>
              </div>
              <div className="flex items-center text-neutral-400 hover:text-white transition-colors duration-200">
                <Phone className="w-6 h-6 mr-4 text-primary-400" />
                <a href="tel:+34621482256" className="text-lg">
                  +34 621 482 256
                </a>
              </div>
              <div className="flex items-center text-neutral-400">
                <MapPin className="w-6 h-6 mr-4 text-primary-400" />
                <span className="text-lg">Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-bold text-xl mb-8 flex items-center">
              <Activity className="w-6 h-6 mr-3 text-primary-400" />
              Soluciones IA
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Automatización Empresarial', href: '/documentacion' },
                { name: 'IA Conversacional', href: '/api-reference' },
                { name: 'WhatsApp Business', href: '/guias-implementacion' },
                { name: 'Agenda Automática', href: '/casos-de-exito' },
                { name: 'Integración CRM', href: '/blog-empresarial' },
                { name: 'Soporte Técnico 24/7', href: '/centro-de-ayuda' }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-white transition-colors duration-200 text-lg">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-white font-bold text-xl mb-8 flex items-center">
              <Target className="w-6 h-6 mr-3 text-danger-400" />
              Recursos
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Documentación', href: '/documentacion' },
                { name: 'API Reference', href: '/api-reference' },
                { name: 'Guías Implementación', href: '/guias-implementacion' },
                { name: 'Casos de Éxito', href: '/casos-de-exito' },
                { name: 'Blog Empresarial', href: '/blog-empresarial' },
                { name: 'Centro de Ayuda', href: '/centro-de-ayuda' }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-white transition-colors duration-200 text-lg">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sección inferior espectacular */}
        <div className="border-t border-neutral-800 mt-20 pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-neutral-400 text-lg mb-6 lg:mb-0">
              © 2025 IAFY. Todos los derechos reservados. | 
              <a href="/politica-de-privacidad" className="hover:text-white ml-2">Política de Privacidad</a> | 
              <a href="/terminos-de-servicio" className="hover:text-white ml-2">Términos de Servicio</a>
            </div>
            
            <div className="flex items-center space-x-8">
              {/* Enlaces sociales espectaculares */}
              <div className="flex space-x-6">
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
              
              {/* Botón volver arriba espectacular */}
              <button
                onClick={scrollToTop}
                className="btn-primary text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110 shadow-spectacular"
              >
                <ArrowUp className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;