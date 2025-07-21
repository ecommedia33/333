import React from 'react';
import { FileText, ArrowLeft, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
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
                  <div className="text-white font-bold text-xl">Términos de Servicio</div>
                  <div className="text-primary-300 text-lg font-medium">Condiciones Legales</div>
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
            <Scale className="w-6 h-6 text-primary-400" />
            <span className="text-primary-300 font-medium text-lg">Términos Legales</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-100 to-success-200 mb-8">
            Términos de Servicio
          </h1>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Condiciones que rigen el uso de los servicios de IAFY
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
              <FileText className="w-8 h-8 text-primary-400 mr-3" />
              1. Aceptación de los Términos
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Al acceder y utilizar los servicios de IAFY, S.L. (en adelante "IAFY", "nosotros", "nuestro" 
                o "la empresa"), aceptas estar sujeto a estos Términos de Servicio y a todas las leyes y 
                regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, no debes 
                utilizar nuestros servicios.
              </p>
              
              <div className="bg-primary-900/30 p-6 rounded-2xl border border-primary-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Información de la Empresa</h4>
                
                <ul className="space-y-2 text-neutral-300">
                  <li><strong className="text-white">Razón Social:</strong> IAFY, S.L.</li>
                  <li><strong className="text-white">Domicilio:</strong> Madrid, España</li>
                  <li><strong className="text-white">Email:</strong> legal@iafy.es</li>
                  <li><strong className="text-white">Teléfono:</strong> +34 621 482 256</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Services Description */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 text-success-400 mr-3" />
              2. Descripción de los Servicios
            </h2>
            <div className="space-y-6">
              <p className="text-neutral-300 text-lg leading-relaxed">
                IAFY proporciona servicios de automatización empresarial basados en inteligencia artificial, 
                incluyendo pero no limitándose a:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                  <h4 className="text-lg font-semibold text-white mb-3">Servicios Principales</h4>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• Asistente de IA conversacional</li>
                    <li>• Automatización de WhatsApp Business</li>
                    <li>• Sistema de llamadas automatizadas</li>
                    <li>• Gestión automática de citas</li>
                    <li>• Integración con CRM</li>
                  </ul>
                </div>

                <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                  <h4 className="text-lg font-semibold text-white mb-3">Servicios Adicionales</h4>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• Soporte técnico especializado</li>
                    <li>• Formación y capacitación</li>
                    <li>• Consultoría en automatización</li>
                    <li>• Desarrollo de integraciones personalizadas</li>
                    <li>• Análisis y reportes avanzados</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* User Obligations */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-electric-400 mr-3" />
              3. Obligaciones del Usuario
            </h2>
            <div className="space-y-6">
              <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">3.1 Uso Apropiado</h4>
                <p className="text-neutral-300 mb-4">Te comprometes a utilizar nuestros servicios únicamente para:</p>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Fines comerciales legítimos y legales</li>
                  <li>• Actividades que cumplan con todas las leyes aplicables</li>
                  <li>• Comunicaciones profesionales y éticas con clientes</li>
                  <li>• Respeto de los derechos de terceros</li>
                </ul>
              </div>

              <div className="bg-danger-900/30 p-6 rounded-2xl border border-danger-500/30">
                <h4 className="text-lg font-semibold text-danger-400 mb-3">3.2 Usos Prohibidos</h4>
                <p className="text-neutral-300 mb-4">Está estrictamente prohibido utilizar nuestros servicios para:</p>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Envío de spam o comunicaciones no solicitadas</li>
                  <li>• Actividades fraudulentas o engañosas</li>
                  <li>• Violación de derechos de propiedad intelectual</li>
                  <li>• Distribución de contenido ilegal o dañino</li>
                  <li>• Intentos de acceso no autorizado a sistemas</li>
                  <li>• Cualquier actividad que viole las leyes aplicables</li>
                </ul>
              </div>

              <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">3.3 Seguridad de la Cuenta</h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Mantener la confidencialidad de tus credenciales de acceso</li>
                  <li>• Notificar inmediatamente cualquier uso no autorizado</li>
                  <li>• Utilizar contraseñas seguras y únicas</li>
                  <li>• No compartir el acceso a tu cuenta con terceros no autorizados</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">4. Términos de Pago</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                  <h4 className="text-lg font-semibold text-white mb-3">4.1 Facturación</h4>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• Facturación mensual por adelantado</li>
                    <li>• Precios en euros (EUR)</li>
                    <li>• IVA incluido según legislación española</li>
                    <li>• Facturas enviadas por email</li>
                  </ul>
                </div>

                <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                  <h4 className="text-lg font-semibold text-white mb-3">4.2 Métodos de Pago</h4>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• Tarjeta de crédito/débito</li>
                    <li>• Transferencia bancaria</li>
                    <li>• PayPal</li>
                    <li>• Domiciliación bancaria (SEPA)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">4.3 Política de Reembolsos</h4>
                <ul className="space-y-3 text-neutral-300">
                  <li><strong className="text-white">Garantía de 30 días:</strong> Reembolso completo si no estás satisfecho</li>
                  <li><strong className="text-white">Cancelación:</strong> Sin penalizaciones, efectiva al final del período facturado</li>
                  <li><strong className="text-white">Reembolsos parciales:</strong> No aplicables para servicios ya prestados</li>
                  <li><strong className="text-white">Tiempo de procesamiento:</strong> 5-10 días hábiles</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">5. Propiedad Intelectual</h2>
            <div className="space-y-6">
              <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">5.1 Derechos de IAFY</h4>
                <p className="text-neutral-300 mb-4">
                  Todos los derechos de propiedad intelectual sobre la plataforma IAFY, incluyendo pero no 
                  limitándose a software, algoritmos, diseños, marcas comerciales y contenido, son propiedad 
                  exclusiva de IAFY, S.L.
                </p>
              </div>

              <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">5.2 Derechos del Usuario</h4>
                <p className="text-neutral-300 mb-4">
                  Mantienes todos los derechos sobre tus datos y contenido. IAFY solo utiliza tu información 
                  para proporcionar los servicios contratados y según lo establecido en nuestra Política de Privacidad.
                </p>
              </div>

              <div className="bg-primary-900/30 p-6 rounded-2xl border border-primary-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">5.3 Licencia de Uso</h4>
                <p className="text-neutral-300">
                  Te otorgamos una licencia limitada, no exclusiva, no transferible y revocable para utilizar 
                  nuestros servicios según estos términos durante la vigencia de tu suscripción.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">6. Limitación de Responsabilidad</h2>
            <div className="space-y-6">
              <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">6.1 Disponibilidad del Servicio</h4>
                <p className="text-neutral-300 mb-4">
                  Nos esforzamos por mantener un 99.9% de disponibilidad, pero no garantizamos que el servicio 
                  esté disponible de forma ininterrumpida. Pueden ocurrir interrupciones por mantenimiento, 
                  actualizaciones o circunstancias fuera de nuestro control.
                </p>
              </div>

              <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">6.2 Limitación de Daños</h4>
                <p className="text-neutral-300 mb-4">
                  En ningún caso IAFY será responsable por daños indirectos, incidentales, especiales o 
                  consecuenciales, incluyendo pero no limitándose a pérdida de beneficios, datos o uso.
                </p>
              </div>

              <div className="bg-danger-900/30 p-6 rounded-2xl border border-danger-500/30">
                <h4 className="text-lg font-semibold text-danger-400 mb-3">6.3 Responsabilidad Máxima</h4>
                <p className="text-neutral-300">
                  Nuestra responsabilidad total hacia ti por cualquier reclamación no excederá el importe 
                  pagado por los servicios en los 12 meses anteriores al evento que dio lugar a la reclamación.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">7. Terminación</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                  <h4 className="text-lg font-semibold text-white mb-3">7.1 Por el Usuario</h4>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• Cancelación en cualquier momento</li>
                    <li>• Aviso de 30 días</li>
                    <li>• Sin penalizaciones</li>
                    <li>• Acceso hasta fin del período pagado</li>
                  </ul>
                </div>

                <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                  <h4 className="text-lg font-semibold text-white mb-3">7.2 Por IAFY</h4>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• Violación de términos</li>
                    <li>• Falta de pago</li>
                    <li>• Uso indebido del servicio</li>
                    <li>• Aviso previo cuando sea posible</li>
                  </ul>
                </div>
              </div>

              <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">7.3 Efectos de la Terminación</h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Cese inmediato del acceso a los servicios</li>
                  <li>• Conservación de datos por 30 días para recuperación</li>
                  <li>• Eliminación permanente de datos tras el período de gracia</li>
                  <li>• Supervivencia de cláusulas aplicables</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">8. Ley Aplicable y Jurisdicción</h2>
            <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
              <p className="text-neutral-300 text-lg leading-relaxed mb-4">
                Estos términos se rigen por las leyes de España. Cualquier disputa que surja en relación 
                con estos términos o el uso de nuestros servicios será sometida a la jurisdicción exclusiva 
                de los tribunales de Madrid, España.
              </p>
              
              <div className="bg-primary-900/30 p-4 rounded-xl border border-primary-500/30">
                <p className="text-neutral-300">
                  <strong className="text-white">Resolución de Disputas:</strong> Antes de iniciar cualquier 
                  procedimiento legal, las partes intentarán resolver las disputas mediante negociación directa 
                  o mediación.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">9. Contacto</h2>
            <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50">
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Si tienes preguntas sobre estos Términos de Servicio, puedes contactarnos:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Información Legal</h4>
                  <ul className="space-y-2 text-neutral-300">
                    <li><strong className="text-white">Email:</strong> legal@iafy.es</li>
                    <li><strong className="text-white">Teléfono:</strong> +34 621 482 256</li>
                    <li><strong className="text-white">Dirección:</strong> Madrid, España</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Soporte General</h4>
                  <ul className="space-y-2 text-neutral-300">
                    <li><strong className="text-white">Email:</strong> soporte@iafy.es</li>
                    <li><strong className="text-white">Chat:</strong> Disponible 24/7 en la plataforma</li>
                    <li><strong className="text-white">Horario:</strong> L-V 9:00-18:00 CET</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default TermsOfService;