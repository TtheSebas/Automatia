import React, { useState, useEffect } from 'react';
import { Home, AlertTriangle, PlayCircle, Tag, Send, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import styles from './TabNavigation.module.css';

export const TABS = [
  {
    id: 'inicio',
    label: 'Inicio',
    tag: 'Presentación',
    icon: Home
  },
  {
    id: 'problema',
    label: 'El Problema',
    tag: 'Dolor Manual',
    icon: AlertTriangle
  },
  {
    id: 'caso-real',
    label: 'Caso Real & Video',
    tag: 'Demo n8n',
    icon: PlayCircle
  },
  {
    id: 'precios',
    label: 'Planes y Precios',
    tag: 'Sin Riesgo',
    icon: Tag
  },
  {
    id: 'contacto',
    label: 'Solicitar Piloto',
    tag: '3 Días Gratis',
    icon: Send
  }
];

export default function TabNavigation({ activeTab, onTabChange }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.tabNavHeader} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Marca y Logotipo de Agentico */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            onTabChange('inicio');
          }}
          className={styles.logo}
          aria-label="Agentico - Inicio"
        >
          <div className={styles.logoImgWrapper}>
            <img
              src="/agentico-logo-white.png"
              alt="Logo Agentico"
              className={styles.logoImg}
            />
          </div>
          <div className={styles.logoTextGroup}>
            <span className={styles.logoTitle}>Agentico</span>
            <span className={styles.logoBadge}>PROFORMAS 24/7</span>
          </div>
        </a>

        {/* Pestañas Interactivas Principales (Con Animaciones y Resaltado Fluido) */}
        <nav className={styles.tabNavCenter} aria-label="Pestañas principales">
          <div className={styles.tabBar} role="tablist">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                  onClick={() => onTabChange(tab.id)}
                  className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                >
                  <div className={styles.tabIconBox}>
                    <Icon size={16} className={styles.tabIcon} />
                  </div>
                  <div className={styles.tabLabelGroup}>
                    <span className={styles.tabLabel}>{tab.label}</span>
                    <span className={styles.tabTag}>{tab.tag}</span>
                  </div>
                  {isActive && <div className={styles.activeGlowIndicator} />}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Acciones Rápidas Directas */}
        <div className={styles.actionGroup}>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            title="Escribir por WhatsApp a Gabriel Mesías"
          >
            <MessageCircle size={17} />
            <span className={styles.whatsappBtnText}>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => onTabChange('contacto')}
            className={styles.primaryCta}
          >
            <span>Prueba 3 Días</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Barra móvil inferior integrada con scroll horizontal suave de pestañas */}
      <div className={styles.mobileTabBarWrapper}>
        <div className={styles.mobileTabBar} role="tablist">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-mobile-${tab.id}`}
                aria-selected={isActive}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`${styles.mobileTabBtn} ${isActive ? styles.mobileTabBtnActive : ''}`}
              >
                <Icon size={15} className={styles.mobileTabIcon} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
