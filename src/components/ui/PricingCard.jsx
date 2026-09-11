import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';
import styles from './PricingCard.module.css';

export default function PricingCard({
  tag,
  title,
  price,
  period,
  description,
  features = [],
  highlight = false,
  buttonText = "Agendar Auditoría Gratuita de 20 Minutos",
}) {
  return (
    <div className={`${styles.card} ${highlight ? styles.cardHighlight : ''}`}>
      {tag && (
        <div className={styles.tagWrapper}>
          <span className={`${styles.tag} ${highlight ? styles.tagHighlight : ''}`}>
            {tag}
          </span>
        </div>
      )}

      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.priceContainer}>
        <span className={styles.currencyPrefix}>Desde</span>
        <div className={styles.priceNumberGroup}>
          <span className={styles.price}>{price}</span>
          {period && <span className={styles.period}>{period}</span>}
        </div>
      </div>

      <div className={styles.featuresSection}>
        <span className={styles.featuresHeading}>Qué incluye:</span>
        <ul className={styles.featureList}>
          {features.map((item, idx) => (
            <li key={idx} className={styles.featureItem}>
              <CheckCircle2 size={18} className={styles.checkIcon} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footer}>
        <CTAButton
          to="/auditoria"
          variant={highlight ? 'primary' : 'secondary'}
          size="md"
          icon={ArrowRight}
          className={styles.actionBtn}
        >
          {buttonText}
        </CTAButton>
      </div>
    </div>
  );
}
