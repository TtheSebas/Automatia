import React from 'react';
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';
import styles from './SectionCTA.module.css';

export default function SectionCTA({
  title = "Primero entendemos tu negocio. Después vemos qué tiene sentido automatizar.",
  subtitle = "En una sesión de 20 minutos revisamos cómo gestionas tus consultas y cotizaciones actuales para decirte con total honestidad si la automatización te ahorrará tiempo o no.",
  buttonText = "Agendar Auditoría Gratuita de 20 Minutos",
  eyebrow = "EL PRIMER PASO",
  variant = "card", // "card" | "full"
}) {
  return (
    <section className={`section ${styles.wrapper}`}>
      <div className={`container ${styles.container} ${styles[variant]}`}>
        <div className={styles.innerCard}>
          <div className={styles.contentCol}>
            {eyebrow && (
              <span className={`eyebrow ${styles.eyebrow}`}>
                <Calendar size={13} />
                {eyebrow}
              </span>
            )}
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>

            <div className={styles.benefitsRow}>
              <div className={styles.benefitItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>20 minutos sin rodeos técnicos</span>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Diagnóstico sincero de tus procesos</span>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>100% sin compromiso comercial</span>
              </div>
            </div>
          </div>

          <div className={styles.actionCol}>
            <CTAButton to="/auditoria" size="lg" variant="primary" icon={ArrowRight} className={styles.ctaBtn}>
              {buttonText}
            </CTAButton>
            <p className={styles.microcopy}>
              Analizamos tu caso y detectamos exactamente dónde se pierde tiempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
