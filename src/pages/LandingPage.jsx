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
import SectionDivider from '../components/ui/SectionDivider';
import ScrollReveal from '../components/ui/ScrollReveal';

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
      {/* Header Sticky */}
      <Navbar onOpenVideo={() => setVideoOpen(true)} />

      {/* Main Sections con Divisiones y Animaciones Fluidas */}
      <main style={{ flex: 1 }}>
        {/* 1. Hero Section */}
        <ScrollReveal direction="none" delay={50}>
          <HeroSection onOpenVideo={() => setVideoOpen(true)} />
        </ScrollReveal>

        {/* Divisor Fluido 1 */}
        <SectionDivider label="EL DOLOR MANUAL VS AUTOMATIA" />

        {/* 2. Problem vs Solution (El Dolor Económico) */}
        <ScrollReveal direction="up" delay={100}>
          <ProblemSolutionSection />
        </ScrollReveal>

        {/* Divisor Fluido 2 */}
        <SectionDivider label="CASO REAL & DEMOSTRACIÓN EN VIDEO" />

        {/* 3. Product Demo (Caso Real Don Carlos + Video con Logo Agentico) */}
        <ScrollReveal direction="up" delay={100}>
          <CaseDemoSection onOpenVideo={() => setVideoOpen(true)} />
        </ScrollReveal>

        {/* Divisor Fluido 3 */}
        <SectionDivider label="PLANES SIN RIESGO" />

        {/* 4. Pricing & Plans (Sin Riesgo: Piloto $0, Base $250, Integral $250+$40/mes) */}
        <ScrollReveal direction="up" delay={100}>
          <PricingSection />
        </ScrollReveal>

        {/* Divisor Fluido 4 */}
        <SectionDivider label="SOLICITAR PRUEBA PILOTO" />

        {/* 5. Lead Capture (Formulario 4 campos exactos) */}
        <ScrollReveal direction="up" delay={100}>
          <LeadCaptureSection />
        </ScrollReveal>
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
