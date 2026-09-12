import React from 'react';
import styles from './SectionDivider.module.css';

export default function SectionDivider({ label }) {
  return (
    <div className={styles.dividerWrapper}>
      <div className={styles.line}></div>
      <div className={styles.nodeWrapper}>
        <div className={styles.nodeGlow}></div>
        <div className={styles.nodeDot}></div>
        {label && <span className={styles.nodeLabel}>{label}</span>}
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
