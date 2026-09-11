import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import CTAButton from '../ui/CTAButton';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/como-funciona', label: 'Cómo funciona' },
    { to: '/soluciones', label: 'Soluciones' },
    { to: '/demo', label: 'Demo' },
    { to: '/casos-de-uso', label: 'Casos' },
    { to: '/precios', label: 'Precios' },
    { to: '/faq', label: 'FAQ' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={`container ${styles.navbarContainer}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo} aria-label="Automatia - Inicio">
          <span className={styles.logoBadge}>
            <span className={styles.logoDot}></span>
            <span className={styles.logoDotInner}></span>
          </span>
          <div className={styles.logoTextGroup}>
            <span className={styles.logoTitle}>Automatia</span>
            <span className={styles.logoSubtitle}>IA para PyMEs</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                  }
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className={styles.ctaWrapper}>
          <CTAButton to="/auditoria" size="md" variant="primary">
            Agendar auditoría
          </CTAButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive ? `${styles.mobileNavLink} ${styles.mobileNavLinkActive}` : styles.mobileNavLink
                    }
                    end={link.to === '/'}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={18} className={styles.mobileNavArrow} />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.mobileDrawerCta}>
            <CTAButton to="/auditoria" size="lg" variant="primary" className={styles.mobileFullBtn}>
              Agendar Auditoría Gratuita
            </CTAButton>
            <p className={styles.mobileCtaNote}>
              20 minutos · Sin compromiso técnico
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
