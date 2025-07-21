import React, { useState } from 'react';
import { Calculator, TrendingUp, TrendingDown, Euro, Users, Clock, ArrowRight, Zap, Target, Activity, BarChart3 } from 'lucide-react';

const ROICalculator = () => {
  const [customers, setCustomers] = useState(100);
  const [avgValue, setAvgValue] = useState(150);
  const [lostCalls, setLostCalls] = useState(30);
  const [staffCost, setStaffCost] = useState(2000);

  const calculations = {
    monthlyRevenue: customers * avgValue,
    lostRevenue: (customers * avgValue * lostCalls) / 100,
    totalLoss: ((customers * avgValue * lostCalls) / 100) + staffCost,
    withIAFY: {
      recovered: ((customers * avgValue * lostCalls) / 100) * 0.85,
      staffSavings: staffCost * 0.7,
      iafyCost: 497
    }
  };

  calculations.withIAFY.totalSavings = calculations.withIAFY.recovered + calculations.withIAFY.staffSavings - calculations.withIAFY.iafyCost;
  calculations.withIAFY.roi = ((calculations.withIAFY.totalSavings / calculations.withIAFY.iafyCost) * 100);

  return (
    <section className="relative py-24 lg:py-32 bg-primary-gradient overflow-hidden">
      {/* Efectos de fondo espectaculares */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-success-500/15 rounded-full blur-3xl animate-spectacular"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl animate-spectacular delay-1000"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header espectacular */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 card-success rounded-full px-10 py-5 mb-8 shadow-spectacular animate-electric">
            <Calculator className="w-8 h-8 text-success-400" />
            <span className="text-success-300 font-bold text-xl">CALCULADORA ROI PERSONALIZADA</span>
            <Zap className="w-6 h-6 text-primary-400 animate-pulse" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-success-100 to-primary-200 mb-8 leading-tight">
            Calcula tu retorno de inversión
          </h2>
          <div className="max-w-5xl mx-auto card-primary p-8 rounded-3xl shadow-spectacular">
            <p className="text-2xl lg:text-3xl text-neutral-300 leading-relaxed">
              <span className="text-success-400 font-bold text-3xl">DATOS REALES.</span> Descubre cuánto puedes ahorrar y ganar con IAFY en tu empresa específica
            </p>
          </div>
        </div>

        {/* Calculadora centrada para desktop */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Inputs de calculadora - 2 columnas en desktop */}
            <div className="lg:col-span-2 space-y-8">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-primary-500 to-success-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="relative card-primary p-8 lg:p-10 rounded-3xl shadow-spectacular">
                  <div className="flex items-center space-x-4 mb-8">
                    <Target className="w-10 h-10 text-primary-400" />
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">Datos de tu empresa</h3>
                    <Activity className="w-8 h-8 text-primary-400 opacity-60" />
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <label className="block text-white font-semibold mb-4 text-lg">
                        <Users className="w-6 h-6 inline mr-3" />
                        Clientes nuevos por mes
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="500"
                        value={customers}
                        onChange={(e) => setCustomers(Number(e.target.value))}
                        className="w-full slider"
                      />
                      <div className="flex justify-between text-neutral-400 text-base mt-3">
                        <span>50</span>
                        <span className="text-primary-400 font-bold text-xl">{customers}</span>
                        <span>500</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-4 text-lg">
                        <Euro className="w-6 h-6 inline mr-3" />
                        Valor promedio por cliente
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="500"
                        value={avgValue}
                        onChange={(e) => setAvgValue(Number(e.target.value))}
                        className="w-full slider"
                      />
                      <div className="flex justify-between text-neutral-400 text-base mt-3">
                        <span>50€</span>
                        <span className="text-primary-400 font-bold text-xl flex items-center">
                          {avgValue}
                          <Euro className="w-5 h-5 ml-1" />
                        </span>
                        <span>500€</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-4 text-lg">
                        <TrendingUp className="w-6 h-6 inline mr-3" />
                        % de llamadas/mensajes perdidos
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="60"
                        value={lostCalls}
                        onChange={(e) => setLostCalls(Number(e.target.value))}
                        className="w-full slider"
                      />
                      <div className="flex justify-between text-neutral-400 text-base mt-3">
                        <span>10%</span>
                        <span className="text-danger-400 font-bold text-xl">{lostCalls}%</span>
                        <span>60%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-4 text-lg">
                        <Clock className="w-6 h-6 inline mr-3" />
                        Coste mensual personal administrativo
                      </label>
                      <input
                        type="range"
                        min="1000"
                        max="5000"
                        step="100"
                        value={staffCost}
                        onChange={(e) => setStaffCost(Number(e.target.value))}
                        className="w-full slider"
                      />
                      <div className="flex justify-between text-neutral-400 text-base mt-3">
                        <span>1.000€</span>
                        <span className="text-primary-400 font-bold text-xl flex items-center">
                          {staffCost}
                          <Euro className="w-5 h-5 ml-1" />
                        </span>
                        <span>5.000€</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resultados - 3 columnas en desktop */}
            <div className="lg:col-span-3 space-y-8">
              {/* Situación actual */}
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-danger-500 to-gold-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="relative card-danger p-8 lg:p-10 rounded-3xl shadow-spectacular">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center">
                    <TrendingDown className="w-8 h-8 text-danger-400 mr-4" />
                    Situación actual (sin IAFY)
                    <BarChart3 className="w-7 h-7 text-danger-400 opacity-60 ml-auto" />
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center p-4 card-primary rounded-2xl">
                      <span className="text-neutral-300 font-medium">Ingresos potenciales</span>
                      <span className="text-white font-bold text-lg flex items-center">
                        {calculations.monthlyRevenue.toLocaleString()}
                        <Euro className="w-5 h-5 ml-1" />
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 card-danger rounded-2xl">
                      <span className="text-neutral-300 font-medium">Perdidos por llamadas</span>
                      <span className="text-danger-400 font-bold text-lg flex items-center">
                        -{calculations.lostRevenue.toLocaleString()}
                        <Euro className="w-5 h-5 ml-1" />
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 card-danger rounded-2xl">
                      <span className="text-neutral-300 font-medium">Coste personal</span>
                      <span className="text-danger-400 font-bold text-lg flex items-center">
                        -{staffCost.toLocaleString()}
                        <Euro className="w-5 h-5 ml-1" />
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 card-danger rounded-2xl border-2 border-danger-400/40">
                      <span className="text-white font-bold">Pérdida total</span>
                      <span className="text-danger-400 font-bold text-xl flex items-center">
                        -{calculations.totalLoss.toLocaleString()}
                        <Euro className="w-6 h-6 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Con IAFY */}
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-success-500 to-primary-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="relative card-success p-8 lg:p-10 rounded-3xl shadow-spectacular">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center">
                    <Zap className="w-8 h-8 text-success-400 mr-4" />
                    Con IAFY
                    <Activity className="w-7 h-7 text-success-400 opacity-60 ml-auto" />
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center p-4 card-success rounded-2xl">
                      <span className="text-neutral-300 font-medium">Ingresos recuperados</span>
                      <span className="text-success-400 font-bold text-lg flex items-center">
                        +{calculations.withIAFY.recovered.toLocaleString()}
                        <Euro className="w-5 h-5 ml-1" />
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 card-success rounded-2xl">
                      <span className="text-neutral-300 font-medium">Ahorro en personal</span>
                      <span className="text-success-400 font-bold text-lg flex items-center">
                        +{calculations.withIAFY.staffSavings.toLocaleString()}
                        <Euro className="w-5 h-5 ml-1" />
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 card-primary rounded-2xl">
                      <span className="text-neutral-300 font-medium">Coste IAFY</span>
                      <span className="text-primary-400 font-bold text-lg flex items-center">
                        -{calculations.withIAFY.iafyCost}
                        <Euro className="w-5 h-5 ml-1" />
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 card-success rounded-2xl border-2 border-success-400/40">
                      <span className="text-white font-bold">Beneficio neto</span>
                      <span className="text-success-400 font-bold text-xl flex items-center">
                        +{calculations.withIAFY.totalSavings.toLocaleString()}
                        <Euro className="w-6 h-6 ml-1" />
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <div className="flex justify-between items-center p-6 card-primary rounded-2xl border-2 border-primary-400/40 min-w-[200px]">
                      <span className="text-white font-bold text-xl">ROI</span>
                      <span className="text-primary-400 font-bold text-2xl">{calculations.withIAFY.roi.toFixed(0)}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proyección anual centrada */}
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-gold-500 to-success-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="relative card-electric p-8 lg:p-10 rounded-3xl text-center shadow-spectacular">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Proyección anual</h3>
                  <div className="text-5xl lg:text-6xl font-black text-gradient-electric mb-4 flex items-center justify-center">
                    +{(calculations.withIAFY.totalSavings * 12).toLocaleString()}
                    <Euro className="w-12 h-12 lg:w-16 lg:h-16 ml-2" />
                  </div>
                  <div className="text-neutral-300 text-xl font-semibold mb-4">Beneficio total en 12 meses</div>
                  <div className="text-success-400 text-lg">
                    Recuperas la inversión en {Math.ceil(calculations.withIAFY.iafyCost / calculations.withIAFY.totalSavings)} mes{Math.ceil(calculations.withIAFY.iafyCost / calculations.withIAFY.totalSavings) > 1 ? 'es' : ''}
                  </div>
                </div>
              </div>

              {/* CTA centrado */}
              <div className="text-center">
                <a
                  href="https://calendly.com/iafyagency/30min?month=2025-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-10 py-6 text-xl lg:text-2xl font-bold text-white btn-primary rounded-3xl shadow-spectacular transform hover:-translate-y-3 hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center">
                    EMPEZAR A AHORRAR {calculations.withIAFY.totalSavings.toLocaleString()}
                    <Euro className="w-6 h-6 mx-2" />
                    /MES
                  </span>
                  <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;