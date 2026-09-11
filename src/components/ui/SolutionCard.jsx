import React from 'react';
import styles from './SolutionCard.module.css';

export default function SolutionCard({
  icon: Icon,
  number,
  title,
  description,
  exampleTag,
  visualExample,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.iconCircle}>
          <Icon size={24} />
        </div>
        <span className={styles.numberBadge}>0{number}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      {visualExample && (
        <div className={styles.visualBox}>
          {exampleTag && (
            <span className={styles.visualTag}>{exampleTag}</span>
          )}
          {visualExample}
        </div>
      )}
    </div>
  );
}
