import React, { useState, useEffect, useRef } from 'react';
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
import { ArrowDown, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [videoOpen, setVideoOpen] = useState(false);
  const [legalModalState, setLegalModalState] = useState({ isOpen: false, type: 'terms' });
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(false);
  const contentTopRef = useRef(null);
  const isTransitioningRef = useRef(false);
  const autoAdvanceTimeoutRef = useRef(null);

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
    
    // Al cambiar de pestaña, resetear scroll arriba al instante
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const triggerNextSection = (nextId) => {
    if (isTransitioningRef.current || !nextId) return;
    isTransitioningRef.current = true;
    setIsAutoAdvancing(true);

    handleTabChange(nextId);

    // Cooldown de 1300ms para absorber la inercia de scroll y permitir que la animación termine suavemente
    setTimeout(() => {
      isTransitioningRef.current = false;
      setIsAutoAdvancing(false);
      if (autoAdvanceTimeoutRef.current) {
        clearTimeout(autoAdvanceTimeoutRef.current);
        autoAdvanceTimeoutRef.current = null;
      }
    }, 1300);
  };

  const handleOpenLegal = (type) => {
    setLegalModalState({ isOpen: true, type });
  };

  const handleCloseLegal = () => {
    setLegalModalState((prev) => ({ ...prev, isOpen: false }));
  };

  // Metadatos de la siguiente sección (null en contacto para no auto-avanzar)
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
          title: 'Caso Real & Video Demostrativo',
          desc: 'Observa el flujo real de n8n: de WhatsApp a PDF oficial en menos de 30 segundos.'
        };
      case 'caso-real':
        return {
          nextId: 'precios',
          badge: 'Siguiente Sección (4 de 5)',
          title: 'Planes y Precios sin Riesgo',
          desc: 'Prueba Piloto $0 por 3 días, Plan Base $150 o Integral $150 + $30/mes.'
        };
      case 'precios':
        return {
          nextId: 'contacto',
          badge: 'Paso Final (5 de 5)',
          title: 'Solicitar Prueba Piloto sin Costo',
          desc: 'Configuramos tus primeros 20 productos en 24h sin compromiso ni tarjeta.'
        };
      case 'contacto':
      default:
        return null;
    }
  };

  const nextInfo = getNextTabInfo();

  // Auto-avance al terminar de scrolear la sección actual
  useEffect(() => {
    if (!nextInfo || !nextInfo.nextId) {
      setIsAutoAdvancing(false);
      return;
    }

    const checkScrollBottom = () => {
      if (isTransitioningRef.current) return;

      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Si el usuario llega a los últimos 45px del final de la página
      const isAtBottom = windowHeight + scrollY >= docHeight - 45;

      if (isAtBottom) {
        setIsAutoAdvancing(true);

        if (!autoAdvanceTimeoutRef.current) {
          autoAdvanceTimeoutRef.current = setTimeout(() => {
            triggerNextSection(nextInfo.nextId);
          }, 950); // 950ms (+0.5s para una transición más pausada y cómoda)
        }
      } else {
        if (autoAdvanceTimeoutRef.current) {
          clearTimeout(autoAdvanceTimeoutRef.current);
          autoAdvanceTimeoutRef.current = null;
        }
        setIsAutoAdvancing(false);
      }
    };

    // Si el usuario scrolea hacia abajo con la rueda estando al final, activar el reloj con el mismo ritmo suave
    const handleWheel = (e) => {
      if (isTransitioningRef.current) return;
      if (e.deltaY > 10) {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        if (windowHeight + scrollY >= docHeight - 85) {
          setIsAutoAdvancing(true);
          if (!autoAdvanceTimeoutRef.current) {
            autoAdvanceTimeoutRef.current = setTimeout(() => {
              triggerNextSection(nextInfo.nextId);
            }, 950);
          }
        }
      }
    };

    // Detección táctil en móviles (deslizar hacia arriba cerca del final)
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    };
    const handleTouchEnd = (e) => {
      if (isTransitioningRef.current) return;
      if (e.changedTouches && e.changedTouches.length > 0) {
        const touchEndY = e.changedTouches[0].clientY;
        const swipeDistance = touchStartY - touchEndY;
        if (swipeDistance > 25) {
          const scrollY = window.pageYOffset || document.documentElement.scrollTop;
          const windowHeight = window.innerHeight;
          const docHeight = document.documentElement.scrollHeight;
          if (windowHeight + scrollY >= docHeight - 85) {
            setIsAutoAdvancing(true);
            if (!autoAdvanceTimeoutRef.current) {
              autoAdvanceTimeoutRef.current = setTimeout(() => {
                triggerNextSection(nextInfo.nextId);
              }, 950);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', checkScrollBottom, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkScrollBottom);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      if (autoAdvanceTimeoutRef.current) {
        clearTimeout(autoAdvanceTimeoutRef.current);
        autoAdvanceTimeoutRef.current = null;
      }
    };
  }, [activeTab, nextInfo]);

  return (
    <div className={styles.pageWrapper}>
      {/* Barra de Navegación Única Superior con Logotipo de Agentico, Pestañas Fluidas y CTA */}
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

          {/* Indicador Dinámico de Siguiente Sección (Sin botón estático, cambia automáticamente por scroll) */}
          {nextInfo && (
            <section className={styles.tabFooterNav}>
              <div className="container">
                <div
                  className={styles.footerNavCard}
                  onClick={() => triggerNextSection(nextInfo.nextId)}
                  title="Desplaza al final o haz clic para pasar a la siguiente sección"
                >
                  <div className={styles.footerNavText}>
                    <span className={styles.footerNavStepBadge}>{nextInfo.badge}</span>
                    <h3 className={styles.footerNavTitle}>{nextInfo.title}</h3>
                    <p className={styles.footerNavDesc}>{nextInfo.desc}</p>
                  </div>

                  <div className={styles.footerNavActions} onClick={(e) => e.stopPropagation()}>
                    <div
                      className={styles.autoAdvanceIndicator}
                      onClick={() => triggerNextSection(nextInfo.nextId)}
                    >
                      <div className={`${styles.indicatorBadge} ${isAutoAdvancing ? styles.indicatorActive : ''}`}>
                        <span className={styles.indicatorDot} />
                        <span>{isAutoAdvancing ? 'Avanzando de sección...' : 'Desplaza al final para avanzar'}</span>
                        <ArrowDown size={14} className={styles.bounceDownIcon} />
                      </div>
                      <div className={styles.indicatorProgressBar}>
                        <div className={`${styles.indicatorProgressFill} ${isAutoAdvancing ? styles.fillActive : ''}`} />
                      </div>
                    </div>

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

      {/* Footer con Logo Oficial Agentico y Enlaces a Pestañas (visible en la sección de contacto) */}
      {activeTab === 'contacto' && (
        <Footer
          onSelectTab={handleTabChange}
          onOpenLegal={handleOpenLegal}
        />
      )}

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
