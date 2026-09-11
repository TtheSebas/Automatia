import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  return (
    <div className={styles.wrapper}>
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        aria-label="Contactar por WhatsApp Business con Automatia"
      >
        <span className={styles.onlinePulse}></span>
        <MessageCircle size={28} className={styles.icon} />
        <span className={styles.badgeText}>WhatsApp 24/7</span>
      </a>
    </div>
  );
}
