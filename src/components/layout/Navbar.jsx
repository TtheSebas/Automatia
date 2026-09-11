import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight, Zap, FileText } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import styles from './Navbar.module.css';

export default function Navbar({ onOpenVideo }) {
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
    { href: '#problema', label: 'El Problema' },
    { href: '#demo', label: 'Cómo Funciona' },
    { href: '#caso-real', label: 'Caso Real' },
    { href: '#precios', label: 'Planes' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={`container ${styles.navbarContainer}`}>
        {/* Brand Logo */}
        <a href="#" className={styles.logo} aria-label="Automatia - Inicio">
          <div className={styles.logoIconBox}>
            <Zap size={20} className={styles.logoIcon} />
          </div>
          <div className={styles.logoTextGroup}>
            <span className={styles.logoTitle}>Automatia</span>
            <span className={styles.logoBadge}>PROFORMAS 24/7</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={styles.navLink}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Group */}
        <div className={styles.actionGroup}>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            title="Escribir por WhatsApp"
          >
            <MessageCircle size={18} />
            <span className={styles.whatsappBtnText}>WhatsApp</span>
          </a>

          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, '#contacto')}
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
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={styles.mobileNavLink}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={16} className={styles.mobileNavArrow} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.mobileDrawerActions}>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, '#contacto')}
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
