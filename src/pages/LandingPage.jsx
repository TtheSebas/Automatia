import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import ProblemSolutionSection from '../components/sections/ProblemSolutionSection';
import CaseDemoSection from '../components/sections/CaseDemoSection';
import PricingSection from '../components/sections/PricingSection';
import LeadCaptureSection from '../components/sections/LeadCaptureSection';
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp';
import VideoModal from '../components/ui/VideoModal';
import LegalModal from '../components/ui/LegalModal';

export default function LandingPage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [legalModalState, setLegalModalState] = useState({ isOpen: false, type: 'terms' });

  useEffect(() => {
    document.title = "Automatia — Sistema de Cotizaciones y Proformas Automáticas en PDF 24/7";
  }, []);

  const handleOpenLegal = (type) => {
    setLegalModalState({ isOpen: true, type });
  };

  const handleCloseLegal = () => {
    setLegalModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      {/* Header */}
      <Navbar onOpenVideo={() => setVideoOpen(true)} />

      {/* Main Sections */}
      <main style={{ flex: 1 }}>
        {/* 1. Hero Section */}
        <HeroSection onOpenVideo={() => setVideoOpen(true)} />

        {/* 2. Problem vs Solution (El Dolor Económico) */}
        <ProblemSolutionSection />

        {/* 3. Product Demo (Caso Real Don Carlos + Video n8n) */}
        <CaseDemoSection onOpenVideo={() => setVideoOpen(true)} />

        {/* 4. Pricing & Plans (Sin Riesgo: Piloto $0, Base $250, Integral $250+$40/mes) */}
        <PricingSection />

        {/* 5. Lead Capture (Formulario 4 campos exactos) */}
        <LeadCaptureSection />
      </main>

      {/* Footer con Ambato/Ecuador, WhatsApp y Modales Legales */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* WhatsApp Flotante Permanente */}
      <FloatingWhatsApp />

      {/* Modales Interactivos */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
      <LegalModal
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={handleCloseLegal}
      />
    </div>
  );
}
