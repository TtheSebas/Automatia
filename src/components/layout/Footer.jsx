import React from 'react';
import { Mail, MessageCircle, MapPin, Zap, Shield, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import styles from './Footer.module.css';

export default function Footer({ onOpenLegal }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Main Grid */}
        <div className={styles.grid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <div className={styles.brandHeader}>
              <div className={styles.logoIconBox}>
                <Zap size={20} />
              </div>
              <span className={styles.brandTitle}>Automatia</span>
            </div>
            <p className={styles.brandDesc}>
              Agencia de automatización de operaciones comerciales para ferreterías, distribuidoras y comercios mayoristas. Generación de cotizaciones y proformas en PDF en tiempo récord conectadas a tu inventario.
            </p>
            <div className={styles.trustTag}>
              <Shield size={16} className={styles.trustIcon} />
              <span>Conexión 100% segura con tu Google Workspace</span>
            </div>
          </div>

          {/* Contact Col */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Atención Comercial Directa</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MessageCircle size={18} className={styles.contactIconWa} />
                <div>
                  <span className={styles.contactLabel}>WhatsApp Oficial:</span>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    Abrir Chat Inmediato <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <div>
                  <span className={styles.contactLabel}>Correo Electrónico:</span>
                  <a href={`mailto:${siteConfig.email}`} className={styles.contactLink}>
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <div>
                  <span className={styles.contactLabel}>Sede y Cobertura:</span>
                  <span className={styles.contactText}>
                    {siteConfig.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navegación</h4>
            <ul className={styles.linkList}>
              <li><a href="#problema" className={styles.footerLink}>El Caos Manual vs Automatia</a></li>
              <li><a href="#demo" className={styles.footerLink}>Cómo Funciona (Flujo n8n)</a></li>
              <li><a href="#caso-real" className={styles.footerLink}>Caso Real Constructora Andes</a></li>
              <li><a href="#precios" className={styles.footerLink}>Planes y Piloto 3 Días</a></li>
              <li><a href="#contacto" className={styles.footerLink}>Solicitar Prueba sin Costo</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2026 Automatia. Todos los derechos reservados.
          </p>

          <div className={styles.legalLinks}>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className={styles.legalBtn}
            >
              Términos de Servicio
            </button>
            <span className={styles.legalSeparator}>•</span>
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className={styles.legalBtn}
            >
              Política de Privacidad
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
