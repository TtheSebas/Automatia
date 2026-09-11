import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import styles from './MobileFixedCTA.module.css';

export default function MobileFixedCTA() {
  const location = useLocation();

  // Ocultar si ya estamos en la página de auditoría
  if (location.pathname === '/auditoria') {
    return null;
  }

  return (
    <div className={styles.container}>
      <Link to="/auditoria" className={styles.ctaButton}>
        <div className={styles.leftInfo}>
          <Calendar size={18} className={styles.icon} />
          <div className={styles.textGroup}>
            <span className={styles.title}>Auditoría Gratuita de 20 Min</span>
            <span className={styles.subtitle}>Sin compromiso · Diagnóstico claro</span>
          </div>
        </div>
        <div className={styles.badge}>
          <span>Agendar</span>
          <ArrowRight size={14} />
        </div>
      </Link>
    </div>
  );
}
