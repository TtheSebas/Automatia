import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import TabNavigation, { TABS } from '../components/ui/TabNavigation';
import HeroSection from '../components/sections/HeroSection';
import ProblemSolutionSection from '../components/sections/ProblemSolutionSection';
import CaseDemoSection from '../components/sections/CaseDemoSection';
import PricingSection from '../components/sections/PricingSection';
import LeadCaptureSection from '../components/sections/LeadCaptureSection';
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp';
import VideoModal from '../components/ui/VideoModal';
import LegalModal from '../components/ui/LegalModal';
import { ArrowRight, MessageCircle, RotateCcw } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [videoOpen, setVideoOpen] = useState(false);
  const [legalModalState, setLegalModalState] = useState({ isOpen: false, type: 'terms' });
  const contentTopRef = useRef(null);

  // Sincronización con el Hash de la URL
  useEffect(() => {
    document.title = "Agentico — Sistema de Cotizaciones y Proformas Automáticas en PDF 24/7";

    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const validTabs = ['inicio', 'problema', 'caso-real', 'precios', 'contacto', 'demo'];
      if (hash === 'demo') {
        setActiveTab('caso-real');
      } else if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.location.hash = `#${tabId}`;
    
    // Desplazamiento suave al inicio del contenido
    if (contentTopRef.current) {
      const yOffset = -130;
      const y = contentTopRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  const handleOpenLegal = (type) => {
    setLegalModalState({ isOpen: true, type });
  };

  const handleCloseLegal = () => {
    setLegalModalState((prev) => ({ ...prev, isOpen: false }));
  };

  // Metadatos de la siguiente pestaña para el pie de página de cada pestaña
  const getNextTabInfo = () => {
    switch (activeTab) {
      case 'inicio':
        return {
          nextId: 'problema',
          badge: 'Siguiente Sección (2 de 5)',
          title: 'El Caos Manual vs Agentico',
          desc: 'Descubre cuántas horas y ventas pierde una distribuidora cotizando a mano.'
        };
      case 'problema':
        return {
          nextId: 'caso-real',
          badge: 'Siguiente Sección (3 de 5)',
          title: 'Caso Real Don Carlos & Video Demostrativo',
          desc: 'Observa el flujo real de n8n: de WhatsApp a PDF oficial en menos de 30 segundos.'
        };
      case 'caso-real':
        return {
          nextId: 'precios',
          badge: 'Siguiente Sección (4 de 5)',
          title: 'Planes y Precios sin Riesgo',
          desc: 'Prueba Piloto $0 por 3 días, Plan Base $250 o Integral $250 + $40/mes.'
        };
      case 'precios':
        return {
          nextId: 'contacto',
          badge: 'Paso Final (5 de 5)',
          title: 'Solicitar Prueba Piloto sin Costo',
          desc: 'Configuramos tus primeros 20 productos en 24h sin compromiso ni tarjeta.'
        };
      case 'contacto':
        return {
          nextId: 'inicio',
          badge: 'Recorrido Completado',
          title: 'Volver a la Presentación Principal',
          desc: 'O escríbenos directamente a WhatsApp para resolver cualquier consulta en vivo.'
        };
      default:
        return null;
    }
  };

  const nextInfo = getNextTabInfo();

  return (
    <div className={styles.pageWrapper}>
      {/* Header Sticky con Logo Oficial de Agentico */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleTabChange}
        onOpenVideo={() => setVideoOpen(true)}
      />

      {/* Barra de Pestañas Interactivas Fluidas */}
      <TabNavigation
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* Contenedor Principal con Animación Fluida al Cambiar de Pestaña */}
      <main className={styles.mainContent} ref={contentTopRef}>
        <div
          key={activeTab}
          className={styles.tabPane}
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          {/* Pestaña 1: Inicio */}
          {activeTab === 'inicio' && (
            <HeroSection
              onSelectTab={handleTabChange}
              onOpenVideo={() => setVideoOpen(true)}
            />
          )}

          {/* Pestaña 2: El Problema */}
          {activeTab === 'problema' && (
            <ProblemSolutionSection />
          )}

          {/* Pestaña 3: Caso Real & Video Demostrativo */}
          {activeTab === 'caso-real' && (
            <CaseDemoSection onOpenVideo={() => setVideoOpen(true)} />
          )}

          {/* Pestaña 4: Planes y Precios */}
          {activeTab === 'precios' && (
            <PricingSection />
          )}

          {/* Pestaña 5: Solicitar Piloto */}
          {activeTab === 'contacto' && (
            <LeadCaptureSection />
          )}

          {/* Barra de Navegación Secuencial al Pie de Cada Pestaña */}
          {nextInfo && (
            <section className={styles.tabFooterNav}>
              <div className="container">
                <div className={styles.footerNavCard}>
                  <div className={styles.footerNavText}>
                    <span className={styles.footerNavStepBadge}>{nextInfo.badge}</span>
                    <h3 className={styles.footerNavTitle}>{nextInfo.title}</h3>
                    <p className={styles.footerNavDesc}>{nextInfo.desc}</p>
                  </div>

                  <div className={styles.footerNavActions}>
                    <button
                      type="button"
                      onClick={() => handleTabChange(nextInfo.nextId)}
                      className={styles.nextTabBtn}
                    >
                      <span>
                        {activeTab === 'contacto' ? 'Volver al Inicio' : 'Siguiente Sección'}
                      </span>
                      {activeTab === 'contacto' ? (
                        <RotateCcw size={18} className={styles.nextTabIcon} />
                      ) : (
                        <ArrowRight size={18} className={styles.nextTabIcon} />
                      )}
                    </button>

                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.waQuickBtn}
                    >
                      <MessageCircle size={16} />
                      <span>Consultar por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer con Logo Oficial Agentico y Enlaces a Pestañas */}
      <Footer
        onSelectTab={handleTabChange}
        onOpenLegal={handleOpenLegal}
      />

      {/* Botón WhatsApp Flotante Directo */}
      <FloatingWhatsApp />

      {/* Modales de Video y Legales */}
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />

      <LegalModal
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={handleCloseLegal}
      />
    </div>
  );
}
