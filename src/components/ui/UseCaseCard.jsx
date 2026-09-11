import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import styles from './UseCaseCard.module.css';

export default function UseCaseCard({
  tag,
  title,
  description,
  flowSteps = [],
  result,
  icon: Icon
}) {
  return (
    <div className={styles.card}>
      <div className={styles.topBar}>
        <div className={styles.tagBadge}>
          {Icon && <Icon size={14} className={styles.tagIcon} />}
          <span>{tag}</span>
        </div>
        <span className={styles.disclaimerBadge}>Ejemplo ilustrativo</span>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {/* Visual Sequence */}
      <div className={styles.flowSection}>
        <span className={styles.flowLabel}>Flujo automatizado:</span>
        <div className={styles.flowTrack}>
          {flowSteps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className={styles.flowNode}>
                <span>{step}</span>
              </div>
              {idx < flowSteps.length - 1 && (
                <ArrowRight size={14} className={styles.arrowIcon} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Result Callout */}
      <div className={styles.resultBox}>
        <TrendingUp size={18} className={styles.resultIcon} />
        <div>
          <span className={styles.resultLabel}>Impacto directo:</span>
          <p className={styles.resultText}>{result}</p>
        </div>
      </div>
    </div>
  );
}
