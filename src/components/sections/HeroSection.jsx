import React from 'react';
import { ArrowRight, Play, CheckCircle2, Zap, Shield, FileText, Database, Clock } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import styles from './HeroSection.module.css';

export default function HeroSection({ onSelectTab, onOpenVideo }) {
  const handleContactClick = (e) => {
    e.preventDefault();
    if (onSelectTab) {
      onSelectTab('contacto');
    }
  };

  return (
    <section className={`section-hero ${styles.hero}`}>
      {/* Background glow effects */}
      <div className={styles.glowBlue}></div>
      <div className={styles.glowEmerald}></div>

      <div className={`container ${styles.container}`}>
        {/* Text & CTAs */}
        <div className={styles.content}>
          <div className="badge-tech">
            <img
              src="/agentico-logo-white.png"
              alt="Logo Agentico"
              style={{ height: '18px', width: 'auto', marginRight: '8px', objectFit: 'contain' }}
            />
            <span>Agentico · Automatización de Operaciones Comerciales</span>
          </div>

          <h1 className={styles.title}>
            Convierte mensajes y pedidos en <span className={styles.highlightGradient}>proformas PDF listas para despachar</span> en menos de 30 segundos
          </h1>

          <p className={styles.subtitle}>
            Conectamos el WhatsApp o correo de tu empresa con tu inventario de Google Sheets para generar cotizaciones formales con logo, cálculos de IVA y precios actualizados automáticamente. Elimina el tipeo manual de tu equipo comercial.
          </p>

          <div className={styles.ctaGroup}>
            <a
              href="#contacto"
              onClick={handleContactClick}
              className={styles.mainBtn}
            >
              <span>Solicitar Demostración de 3 Días sin Costo</span>
              <ArrowRight size={18} />
            </a>

            <button
              type="button"
              onClick={onOpenVideo}
              className={styles.videoBtn}
            >
              <div className={styles.playIconBox}>
                <Play size={16} fill="currentColor" />
              </div>
              <span>Ver cómo funciona (Video 45s)</span>
            </button>
          </div>

          {/* Value Micro-badges */}
          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <CheckCircle2 size={16} className={styles.checkIcon} />
              <span>Sin tarjeta de crédito</span>
            </div>
            <div className={styles.trustItem}>
              <CheckCircle2 size={16} className={styles.checkIcon} />
              <span>Integración en 24h</span>
            </div>
            <div className={styles.trustItem}>
              <CheckCircle2 size={16} className={styles.checkIcon} />
              <span>Usa tu Google Sheets actual</span>
            </div>
          </div>
        </div>

        {/* Visual Hero Transformation Demo */}
        <div className={styles.visualContainer}>
          <div className={styles.interactiveCard}>
            {/* Top Bar of the simulator */}
            <div className={styles.cardHeader}>
              <div className={styles.trafficLights}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <span className={styles.headerTag}>Procesamiento Automático en Tiempo Real</span>
              <span className={styles.latencyBadge}>⏱ 2.4 segundos</span>
            </div>

            <div className={styles.demoFlowGrid}>
              {/* Step 1: Customer WhatsApp Message */}
              <div className={styles.flowCol}>
                <div className={styles.colHeader}>
                  <span className={styles.stepNum}>1</span>
                  <span className={styles.stepTitle}>Mensaje de WhatsApp Recibido</span>
                </div>
                <div className={styles.chatMessageBubble}>
                  <div className={styles.chatMeta}>
                    <span className={styles.clientName}>Ing. Roberto (Constructora Andes)</span>
                    <span className={styles.chatTime}>09:14 AM</span>
                  </div>
                  <p className={styles.chatBody}>
                    "Don Carlos, necesito cotizar urgente <strong>10 sacos de cemento</strong>, <strong>4 varillas de 12mm</strong> y <strong>2 galones de pintura blanca</strong> para despachar mañana a obra."
                  </p>
                </div>
              </div>

              {/* Step 2: System Processing indicator */}
              <div className={styles.connectorCol}>
                <div className={styles.pipelineBox}>
                  <Database size={16} className={styles.dbIcon} />
                  <span>Google Sheets API</span>
                </div>
                <div className={styles.arrowStream}>
                  <span className={styles.streamDot}></span>
                </div>
                <span className={styles.streamLabel}>Stock & Precios Validados</span>
              </div>

              {/* Step 3: Generated PDF Proforma */}
              <div className={styles.flowCol}>
                <div className={styles.colHeader}>
                  <span className={styles.stepNum}>2</span>
                  <span className={styles.stepTitle}>Proforma Oficial en PDF Despachada</span>
                </div>
                <div className={styles.proformaMiniDoc}>
                  <div className={styles.proformaDocHeader}>
                    <div>
                      <strong className={styles.docBrand}>DISTRIBUIDORA SANTA INÉS</strong>
                      <span className={styles.docSub}>RUC: 1891726401001 · Ambato</span>
                    </div>
                    <span className={styles.docFolio}>PROFORMA #1042</span>
                  </div>

                  <div className={styles.miniTable}>
                    <div className={styles.miniRowHead}>
                      <span>Cant. / Ítem</span>
                      <span>Total</span>
                    </div>
                    <div className={styles.miniRow}>
                      <span>10x Cemento Portland 50kg</span>
                      <span>$84.50</span>
                    </div>
                    <div className={styles.miniRow}>
                      <span>4x Varilla corrugada 12mm x 12m</span>
                      <span>$51.20</span>
                    </div>
                    <div className={styles.miniRow}>
                      <span>2x Pintura Látex Blanco Galón</span>
                      <span>$38.00</span>
                    </div>
                  </div>

                  <div className={styles.docTotals}>
                    <div className={styles.totalLine}>
                      <span>Subtotal 15% IVA:</span>
                      <span>$173.70</span>
                    </div>
                    <div className={styles.totalLine}>
                      <span>IVA (15%):</span>
                      <span>$26.06</span>
                    </div>
                    <div className={`${styles.totalLine} ${styles.grandTotal}`}>
                      <strong>TOTAL A PAGAR:</strong>
                      <strong className={styles.emeraldPrice}>$199.76</strong>
                    </div>
                  </div>

                  <div className={styles.docBadgeDispatched}>
                    <CheckCircle2 size={13} />
                    <span>PDF formal enviado por correo y WhatsApp en 28 segundos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
