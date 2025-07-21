import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import UrgentProblem from './components/UrgentProblem';
import ImmediateSolution from './components/ImmediateSolution';
import ROICalculator from './components/ROICalculator';
import RiskFreeOffer from './components/RiskFreeOffer';
import CalendlySection from './components/CalendlySection';
import Footer from './components/Footer';

// Import pages
import Documentation from './pages/Documentation';
import APIReference from './pages/APIReference';
import ImplementationGuides from './pages/ImplementationGuides';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import HelpCenter from './pages/HelpCenter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function HomePage() {
  return (
    <div className="font-inter antialiased">
      <Hero />
      <UrgentProblem />
      <ImmediateSolution />
      <ROICalculator />
      <RiskFreeOffer />
      <CalendlySection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documentacion" element={<Documentation />} />
        <Route path="/api-reference" element={<APIReference />} />
        <Route path="/guias-implementacion" element={<ImplementationGuides />} />
        <Route path="/casos-de-exito" element={<CaseStudies />} />
        <Route path="/blog-empresarial" element={<Blog />} />
        <Route path="/centro-de-ayuda" element={<HelpCenter />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos-de-servicio" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;