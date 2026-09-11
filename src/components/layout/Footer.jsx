import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import CTAButton from '../ui/CTAButton';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Top bar with high-impact reassurance */}
        <div className={styles.footerTopBanner}>
          <div className={styles.bannerText}>
            <h3 className={styles.bannerTitle}>¿Quieres saber si tiene sentido automatizar en tu empresa?</h3>
            <p className={styles.bannerSubtitle}>
              Revisamos tus flujos de atención y cotizaciones en 20 minutos. Sin tecnicismos ni compromisos.
            </p>
          </div>
          <div className={styles.bannerAction}>
            <CTAButton to="/auditoria" size="lg" variant="primary">
              Agendar Auditoría Gratuita
            </CTAButton>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className={styles.footerGrid}>
          {/* Col 1: Brand & Philosophy */}
          <div className={styles.brandCol}>
            <Link to="/" className={styles.footerLogo}>
              <span className={styles.logoBadge}>
                <span className={styles.logoDot}></span>
              </span>
              <span className={styles.logoTitle}>Automatia</span>
            </Link>
            <p className={styles.brandDescription}>
              IA práctica para negocios reales. Ayudamos a talleres, instaladores, clínicas y PyMEs a reducir horas de trabajo repetitivo en WhatsApp y cotizaciones sin perder el control humano.
            </p>
            <div className={styles.trustBadge}>
              <ShieldCheck size={18} className={styles.trustIcon} />
              <span>Supervisión humana garantizada en cada integración</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navegación</h4>
            <ul className={styles.linkList}>
              <li><Link to="/" className={styles.footerLink}>Inicio</Link></li>
              <li><Link to="/como-funciona" className={styles.footerLink}>Cómo funciona</Link></li>
              <li><Link to="/soluciones" className={styles.footerLink}>Soluciones</Link></li>
              <li><Link to="/demo" className={styles.footerLink}>Demostración interactiva</Link></li>
              <li><Link to="/casos-de-uso" className={styles.footerLink}>Casos de uso reales</Link></li>
              <li><Link to="/precios" className={styles.footerLink}>Precios y ROI</Link></li>
              <li><Link to="/faq" className={styles.footerLink}>Preguntas frecuentes</Link></li>
            </ul>
          </div>

          {/* Col 3: Soluciones destacadas */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Casos comunes</h4>
            <ul className={styles.linkList}>
              <li><Link to="/soluciones" className={styles.footerLink}>Cotizaciones automáticas</Link></li>
              <li><Link to="/soluciones" className={styles.footerLink}>Atención WhatsApp 24/7</Link></li>
              <li><Link to="/soluciones" className={styles.footerLink}>Agendamiento de citas</Link></li>
              <li><Link to="/soluciones" className={styles.footerLink}>Filtrado y precalificación</Link></li>
              <li><Link to="/soluciones" className={styles.footerLink}>Generación de PDFs</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Direct Channel */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contacto directo</h4>
            <div className={styles.contactItem}>
              <MessageCircle size={18} className={styles.contactIcon} />
              <div>
                <span className={styles.contactLabel}>WhatsApp de soporte y consultas</span>
                <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>
                  +54 9 11 2345-6789 <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} className={styles.contactIcon} />
              <div>
                <span className={styles.contactLabel}>Correo de atención comercial</span>
                <a href="mailto:hola@automatia.com" className={styles.contactValue}>
                  hola@automatia.com
                </a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <Clock size={18} className={styles.contactIcon} />
              <div>
                <span className={styles.contactLabel}>Horario de atención</span>
                <span className={styles.contactText}>Lunes a Viernes · 9:00 a 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className={styles.footerBottom}>
          <div className={styles.disclaimerNote}>
            <strong>Nota de transparencia:</strong> Los nombres de comercios e imágenes mostrados en este sitio corresponden a ejemplos ilustrativos con fines demostrativos.
          </div>
          <div className={styles.bottomMeta}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Automatia. Todos los derechos reservados.
            </p>
            <div className={styles.legalLinks}>
              <span className={styles.legalLink}>Privacidad de datos</span>
              <span className={styles.legalDot}>·</span>
              <span className={styles.legalLink}>Términos de servicio</span>
              <span className={styles.legalDot}>·</span>
              <span className={styles.legalLink}>Seguridad de la información</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
