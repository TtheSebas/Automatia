import React from 'react';
import { Home, AlertTriangle, PlayCircle, Tag, Send } from 'lucide-react';
import styles from './TabNavigation.module.css';

export const TABS = [
  {
    id: 'inicio',
    label: 'Inicio',
    tag: 'Presentación',
    icon: Home
  },
  {
    id: 'problema',
    label: 'El Problema',
    tag: 'Dolor Manual',
    icon: AlertTriangle
  },
  {
    id: 'caso-real',
    label: 'Caso Real & Video',
    tag: 'Demo n8n',
    icon: PlayCircle
  },
  {
    id: 'precios',
    label: 'Planes y Precios',
    tag: 'Sin Riesgo',
    icon: Tag
  },
  {
    id: 'contacto',
    label: 'Solicitar Piloto',
    tag: '3 Días Gratis',
    icon: Send
  }
];

export default function TabNavigation({ activeTab, onTabChange }) {
  return (
    <div className={styles.tabNavWrapper}>
      <div className="container">
        <div className={styles.tabBar} role="tablist" aria-label="Secciones de la página">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`tabpanel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
              >
                <div className={styles.tabIconBox}>
                  <Icon size={17} className={styles.tabIcon} />
                </div>
                <div className={styles.tabLabelGroup}>
                  <span className={styles.tabLabel}>{tab.label}</span>
                  <span className={styles.tabTag}>{tab.tag}</span>
                </div>
                {isActive && <div className={styles.activeGlowIndicator} />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
