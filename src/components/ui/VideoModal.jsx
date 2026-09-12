import React, { useEffect } from 'react';
import { X, Play, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import styles from './VideoModal.module.css';

export default function VideoModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <span className="badge-tech">Demostración Rápida</span>
            <h3 className={styles.title}>Cómo viaja un mensaje de WhatsApp a una proforma formal</h3>
          </div>
          <div className={styles.headerActions}>
            {siteConfig.demoVideoDirectUrl && (
              <a
                href={siteConfig.demoVideoDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalDriveBtn}
                title="Abrir video en Google Drive"
              >
                <ExternalLink size={15} />
                <span className={styles.driveText}>Google Drive</span>
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className={styles.closeBtn}
              aria-label="Cerrar modal"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        <div className={styles.videoContainer}>
          {siteConfig.demoVideoUrl.match(/\.(mp4|webm|ogg)($|\?)/i) || siteConfig.demoVideoUrl.startsWith('/') ? (
            <video
              src={siteConfig.demoVideoUrl}
              controls
              autoPlay
              playsInline
              className={styles.iframe}
            >
              Tu navegador no soporta la reproducción de video HTML5.
            </video>
          ) : (
            <iframe
              src={siteConfig.demoVideoUrl}
              title="Demostración Oficial Agentico n8n Proformas"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          )}
        </div>

        <div className={styles.footerNote}>
          <div className={styles.featurePill}>
            <CheckCircle2 size={16} className={styles.checkIcon} />
            <span>Extracción de texto no estructurado</span>
          </div>
          <div className={styles.featurePill}>
            <CheckCircle2 size={16} className={styles.checkIcon} />
            <span>Consulta en vivo a Google Sheets</span>
          </div>
          <div className={styles.featurePill}>
            <CheckCircle2 size={16} className={styles.checkIcon} />
            <span>Generación de PDF y despacho automático</span>
          </div>
        </div>
      </div>
    </div>
  );
}
