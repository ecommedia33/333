import React, { useState } from 'react';
import { Code, Copy, Check, ArrowLeft, Terminal, Book, Zap } from 'lucide-react';

const APIReference = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/conversations',
      description: 'Iniciar una nueva conversación con la IA',
      example: `{
  "message": "Hola, quiero información sobre sus servicios",
  "customer_id": "customer_123",
  "channel": "whatsapp"
}`,
      response: `{
  "conversation_id": "conv_456",
  "response": "¡Hola! Encantado de ayudarte...",
  "status": "active",
  "created_at": "2025-01-15T10:30:00Z"
}`
    },
    {
      method: 'GET',
      path: '/api/v1/appointments',
      description: 'Obtener lista de citas programadas',
      example: `curl -X GET "https://api.iafy.es/v1/appointments" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      response: `{
  "appointments": [
    {
      "id": "apt_789",
      "customer_name": "Juan Pérez",
      "date": "2025-01-20T14:00:00Z",
      "service": "Consulta",
      "status": "confirmed"
    }
  ],
  "total": 1,
  "page": 1
}`
    },
    {
      method: 'POST',
      path: '/api/v1/webhooks',
      description: 'Configurar webhooks para eventos en tiempo real',
      example: `{
  "url": "https://tu-servidor.com/webhook",
  "events": ["conversation.started", "appointment.created"],
  "secret": "webhook_secret_key"
}`,
      response: `{
  "webhook_id": "wh_123",
  "url": "https://tu-servidor.com/webhook",
  "events": ["conversation.started", "appointment.created"],
  "status": "active",
  "created_at": "2025-01-15T10:30:00Z"
}`
    }
  ];

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
                  <div className="text-white font-bold text-xl">API Reference</div>
                  <div className="text-primary-300 text-lg font-medium">Documentación Técnica</div>
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
            <Terminal className="w-6 h-6 text-electric-400" />
            <span className="text-electric-300 font-medium text-lg">API REST v1.0</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-electric-100 to-primary-200 mb-8">
            API Reference IAFY
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Documentación completa de la API REST de IAFY para integraciones personalizadas
          </p>
        </div>

        {/* Quick Start */}
        <div className="card-primary p-8 rounded-3xl shadow-spectacular mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Zap className="w-8 h-8 text-success-400 mr-3" />
            Inicio Rápido
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Autenticación</h3>
              <p className="text-neutral-300 mb-4">
                Todas las peticiones a la API requieren autenticación mediante API Key en el header Authorization:
              </p>
              <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-700/50 relative">
                <code className="text-success-400 font-mono text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </code>
                <button
                  onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY', 'auth')}
                  className="absolute top-2 right-2 p-2 text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {copiedCode === 'auth' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Base URL</h3>
              <p className="text-neutral-300 mb-4">
                Todas las peticiones deben realizarse a la URL base:
              </p>
              <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-700/50 relative">
                <code className="text-primary-400 font-mono text-sm">
                  https://api.iafy.es/v1
                </code>
                <button
                  onClick={() => copyToClipboard('https://api.iafy.es/v1', 'base')}
                  className="absolute top-2 right-2 p-2 text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {copiedCode === 'base' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Endpoints */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Code className="w-8 h-8 text-primary-400 mr-3" />
            Endpoints Disponibles
          </h2>

          {endpoints.map((endpoint, index) => (
            <div key={index} className="card-primary p-8 rounded-3xl shadow-spectacular">
              <div className="flex items-center mb-6">
                <span className={`px-3 py-1 rounded-lg text-sm font-bold mr-4 ${
                  endpoint.method === 'GET' ? 'bg-success-500 text-white' :
                  endpoint.method === 'POST' ? 'bg-primary-500 text-white' :
                  'bg-electric-500 text-white'
                }`}>
                  {endpoint.method}
                </span>
                <code className="text-xl font-mono text-electric-400">{endpoint.path}</code>
              </div>
              
              <p className="text-neutral-300 text-lg mb-6">{endpoint.description}</p>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Ejemplo de Petición</h4>
                  <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-700/50 relative">
                    <pre className="text-success-400 font-mono text-sm overflow-x-auto">
                      {endpoint.example}
                    </pre>
                    <button
                      onClick={() => copyToClipboard(endpoint.example, `example-${index}`)}
                      className="absolute top-2 right-2 p-2 text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {copiedCode === `example-${index}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Respuesta</h4>
                  <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-700/50 relative">
                    <pre className="text-primary-400 font-mono text-sm overflow-x-auto">
                      {endpoint.response}
                    </pre>
                    <button
                      onClick={() => copyToClipboard(endpoint.response, `response-${index}`)}
                      className="absolute top-2 right-2 p-2 text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {copiedCode === `response-${index}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Error Codes */}
        <div className="card-primary p-8 rounded-3xl shadow-spectacular mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">Códigos de Error</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/50">
                <div className="flex items-center mb-2">
                  <span className="bg-danger-500 text-white px-2 py-1 rounded text-sm font-bold mr-3">400</span>
                  <span className="text-white font-semibold">Bad Request</span>
                </div>
                <p className="text-neutral-400 text-sm">Petición malformada o parámetros inválidos</p>
              </div>
              
              <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/50">
                <div className="flex items-center mb-2">
                  <span className="bg-danger-500 text-white px-2 py-1 rounded text-sm font-bold mr-3">401</span>
                  <span className="text-white font-semibold">Unauthorized</span>
                </div>
                <p className="text-neutral-400 text-sm">API Key inválida o faltante</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/50">
                <div className="flex items-center mb-2">
                  <span className="bg-danger-500 text-white px-2 py-1 rounded text-sm font-bold mr-3">429</span>
                  <span className="text-white font-semibold">Rate Limit</span>
                </div>
                <p className="text-neutral-400 text-sm">Demasiadas peticiones por minuto</p>
              </div>
              
              <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/50">
                <div className="flex items-center mb-2">
                  <span className="bg-danger-500 text-white px-2 py-1 rounded text-sm font-bold mr-3">500</span>
                  <span className="text-white font-semibold">Server Error</span>
                </div>
                <p className="text-neutral-400 text-sm">Error interno del servidor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center mt-16">
          <div className="card-primary p-8 rounded-3xl shadow-spectacular">
            <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas ayuda con la API?</h3>
            <p className="text-neutral-300 mb-6">
              Nuestro equipo técnico está disponible para ayudarte con la integración
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:api@iafy.es"
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-primary-600 to-electric-600 hover:from-primary-500 hover:to-electric-500 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Contactar Soporte API
              </a>
              <a
                href="https://calendly.com/iafyagency/30min?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-primary-400 border border-primary-400/50 hover:bg-primary-400/10 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Agendar Consulta Técnica
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default APIReference;