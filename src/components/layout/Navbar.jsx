import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight, Zap, FileText } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import styles from './Navbar.module.css';

export default function Navbar({ activeTab, onSelectTab, onOpenVideo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'problema', label: 'El Problema' },
    { id: 'caso-real', label: 'Caso Real & Video' },
    { id: 'precios', label: 'Planes' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (e, tabId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onSelectTab) {
      onSelectTab(tabId);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={`container ${styles.navbarContainer}`}>
        {/* Brand Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, 'inicio')}
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

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const isSelected = activeTab === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`${styles.navLink} ${isSelected ? styles.navLinkActive : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Group */}
        <div className={styles.actionGroup}>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            title="Escribir por WhatsApp a Gabriel Mesías"
          >
            <MessageCircle size={18} />
            <span className={styles.whatsappBtnText}>WhatsApp</span>
          </a>

          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, 'contacto')}
            className={styles.primaryCta}
          >
            <span>Prueba 3 Días Gratis</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className={styles.mobileDrawerContent}>
          <nav aria-label="Navegación móvil">
            <ul className={styles.mobileNavList}>
              {navLinks.map((link) => {
                const isSelected = activeTab === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`${styles.mobileNavLink} ${isSelected ? styles.mobileNavLinkActive : ''}`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={16} className={styles.mobileNavArrow} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.mobileDrawerActions}>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, 'contacto')}
              className={styles.mobileMainBtn}
            >
              Solicitar Demostración de 3 Días
            </a>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileWaBtn}
            >
              <MessageCircle size={18} />
              <span>Chatear por WhatsApp Business</span>
            </a>

            <span className={styles.mobileCoverageText}>
              {siteConfig.location}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
