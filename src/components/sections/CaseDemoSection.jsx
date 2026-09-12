import React, { useState } from 'react';
import { ArrowRight, Play, Database, FileText, CheckCircle2, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import styles from './CaseDemoSection.module.css';

export default function CaseDemoSection({ onOpenVideo }) {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      id: "entrada",
      num: "01",
      title: "1. Entrada Informal por WhatsApp",
      subtitle: "El cliente escribe con lenguaje natural",
      badge: "WhatsApp Business API"
    },
    {
      id: "proceso",
      num: "02",
      title: "2. Procesamiento n8n + Google Sheets",
      subtitle: "Normalización de cantidades y stock",
      badge: "Base de Datos en Vivo"
    },
    {
      id: "resultado",
      num: "03",
      title: "3. Proforma PDF y Envío Inmediato",
      subtitle: "Documento oficial listo para despacho",
      badge: "PDF Oficial #1042"
    }
  ];

  return (
    <section id="demo" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <span className="badge-tech">EL CASO REAL DE DISTRIBUCIÓN</span>
          <h2>Cómo funciona el sistema en una ferretería o distribuidora</h2>
          <p>
            Mira el recorrido exacto desde que un maestro de obra o comprador envía un mensaje informal hasta que recibe su cotización formal membretada en su bandeja de entrada.
          </p>
        </div>

        {/* 3 Steps Navigation Pill */}
        <div className={styles.stepsNav}>
          {steps.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`${styles.stepNavBtn} ${activeTab === idx ? styles.stepNavBtnActive : ''}`}
            >
              <span className={styles.navNum}>{s.num}</span>
              <div className={styles.navTextWrap}>
                <span className={styles.navTitle}>{s.title}</span>
                <span className={styles.navSub}>{s.subtitle}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Presentation */}
        <div className={styles.stageCard}>
          {activeTab === 0 && (
            <div className={styles.stepContent}>
              <div className={styles.stepInfoCol}>
                <span className="badge-tech">Paso 1: Recepción No Estructurada</span>
                <h3 className={styles.stepHeading}>El cliente pide como siempre habla, sin formularios aburridos</h3>
                <p className={styles.stepParagraph}>
                  Tus compradores no quieren descargar apps ni llenar formularios web de 15 pasos. Simplemente envían un mensaje a tu número de WhatsApp de toda la vida.
                </p>
                <div className={styles.featureHighlights}>
                  <div className={styles.featPill}>
                    <CheckCircle2 size={16} className={styles.emeraldCheck} />
                    <span>Entiende abreviaciones ("sacos", "gal", "varillas de 12")</span>
                  </div>
                  <div className={styles.featPill}>
                    <CheckCircle2 size={16} className={styles.emeraldCheck} />
                    <span>Reconoce el nombre del cliente o empresa remitente</span>
                  </div>
                  <div className={styles.featPill}>
                    <CheckCircle2 size={16} className={styles.emeraldCheck} />
                    <span>Sin esperas: el webhook de n8n se dispara en 0.2 segundos</span>
                  </div>
                </div>
              </div>

              <div className={styles.stepVisualCol}>
                <div className={styles.chatWindowSim}>
                  <div className={styles.chatWindowHeader}>
                    <span className={styles.chatContact}>Ing. Roberto Zambrano</span>
                    <span className={styles.chatStatus}>En línea</span>
                  </div>
                  <div className={styles.bubbleIncoming}>
                    <p className={styles.bubbleMsg}>
                      "Don Carlos, necesito cotizar urgente <strong>10 sacos de cemento</strong>, <strong>4 varillas de 12mm</strong> y <strong>2 galones de pintura blanca</strong> para despachar mañana."
                    </p>
                    <span className={styles.bubbleTimestamp}>09:14 AM · Entregado</span>
                  </div>
                  <div className={styles.bubbleOutgoing}>
                    <p className={styles.bubbleMsg}>
                      "¡Hola Roberto! Recibido. Estoy consultando disponibilidad y precios en nuestro inventario. Te envío la proforma oficial en unos segundos..."
                    </p>
                    <span className={styles.bubbleTimestamp}>09:14 AM · Leído</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className={styles.stepContent}>
              <div className={styles.stepInfoCol}>
                <span className="badge-tech badge-emerald">Paso 2: n8n + Google Sheets</span>
                <h3 className={styles.stepHeading}>Validación en tiempo real contra tu inventario real</h3>
                <p className={styles.stepParagraph}>
                  El flujo automatizado separa cada ítem solicitado, busca la fila correspondiente en tu hoja de cálculo de Google Sheets, extrae el precio unitario y valida el stock en bodega.
                </p>
                <div className={styles.featureHighlights}>
                  <div className={styles.featPill}>
                    <CheckCircle2 size={16} className={styles.emeraldCheck} />
                    <span>Sin tocar bases de datos complejas ni ERPs costosos</span>
                  </div>
                  <div className={styles.featPill}>
                    <CheckCircle2 size={16} className={styles.emeraldCheck} />
                    <span>Tú solo actualizas la columna de precios en tu Google Sheets</span>
                  </div>
                  <div className={styles.featPill}>
                    <CheckCircle2 size={16} className={styles.emeraldCheck} />
                    <span>Cálculo automático de IVA (15% o 12% según régimen)</span>
                  </div>
                </div>
              </div>

              <div className={styles.stepVisualCol}>
                <div className={styles.sheetsSimCard}>
                  <div className={styles.sheetsHeader}>
                    <Database size={16} className={styles.sheetsIcon} />
                    <span>Inventario_Ferreteria_2026.xlsx (Google Sheets)</span>
                  </div>
                  <div className={styles.sheetsTable}>
                    <div className={styles.sRowHead}>
                      <span>CÓDIGO</span>
                      <span>DESCRIPCIÓN</span>
                      <span>STOCK</span>
                      <span>P. UNIT</span>
                    </div>
                    <div className={`${styles.sRow} ${styles.sRowMatched}`}>
                      <code>CEM-001</code>
                      <span>Cemento Portland 50kg</span>
                      <span className={styles.stockOk}>84 un</span>
                      <strong>$8.45</strong>
                    </div>
                    <div className={`${styles.sRow} ${styles.sRowMatched}`}>
                      <code>VAR-012</code>
                      <span>Varilla corrugada 12mm x 12m</span>
                      <span className={styles.stockOk}>120 un</span>
                      <strong>$12.80</strong>
                    </div>
                    <div className={`${styles.sRow} ${styles.sRowMatched}`}>
                      <code>PIN-002</code>
                      <span>Pintura Látex Blanco Galón</span>
                      <span className={styles.stockOk}>35 un</span>
                      <strong>$19.00</strong>
                    </div>
                  </div>
                  <div className={styles.sheetsFooter}>
                    <span className={styles.matchIndicator}>✓ 3 ítems coincidentes · Fórmulas validadas</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className={styles.stepContent}>
              <div className={styles.stepInfoCol}>
                <span className="badge-tech">Paso 3: Proforma Lista para Despachar</span>
                <h3 className={styles.stepHeading}>Proforma formal membretada en PDF y enviada al cliente</h3>
                <p className={styles.stepParagraph}>
                  Se genera un PDF formal con numeración consecutiva (#1042), membrete, logo, condiciones de pago, tiempo de entrega y cálculo de impuestos, remitido al correo y WhatsApp del comprador.
                </p>
                <div className={styles.featureHighlights}>
                  <div className={styles.featPill}>
                    <CheckCircle2 size={16} className={styles.emeraldCheck} />
                    <span>Listo en menos de 30 segundos sin intervención humana</span>
                  </div>
                  <div className={styles.featPill}>
                    <CheckCircle2 size={16} className={styles.emeraldCheck} />
                    <span>Copia archivada en la carpeta de ventas de Google Drive</span>
                  </div>
                  <div className={styles.featPill}>
                    <CheckCircle2 size={16} className={styles.emeraldCheck} />
                    <span>Tu vendedor solo interviene si el cliente aprueba el pedido</span>
                  </div>
                </div>
              </div>

              <div className={styles.stepVisualCol}>
                <div className={styles.proformaBoxFull}>
                  <div className={styles.docBanner}>
                    <div className={styles.bannerBrand}>
                      <strong>DISTRIBUIDORA SANTA INÉS</strong>
                      <span>Materiales de Construcción y Ferretería Industrial</span>
                    </div>
                    <div className={styles.docCodeTag}>PROFORMA #1042</div>
                  </div>

                  <div className={styles.docClientData}>
                    <div><strong>Cliente:</strong> Constructora Andes S.A.</div>
                    <div><strong>RUC:</strong> 1792348591001</div>
                    <div><strong>Fecha:</strong> Hoy · <strong>Validez:</strong> 5 días</div>
                  </div>

                  <table className={styles.pdfTable}>
                    <thead>
                      <tr>
                        <th>Ítem</th>
                        <th>Cant.</th>
                        <th>P. Unit</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Cemento Portland 50kg</td>
                        <td>10</td>
                        <td>$8.45</td>
                        <td>$84.50</td>
                      </tr>
                      <tr>
                        <td>Varilla corrugada 12mm x 12m</td>
                        <td>4</td>
                        <td>$12.80</td>
                        <td>$51.20</td>
                      </tr>
                      <tr>
                        <td>Pintura Látex Blanco Galón</td>
                        <td>2</td>
                        <td>$19.00</td>
                        <td>$38.00</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className={styles.pdfSummary}>
                    <div className={styles.summaryLine}>
                      <span>Subtotal:</span>
                      <span>$173.70</span>
                    </div>
                    <div className={styles.summaryLine}>
                      <span>IVA (15%):</span>
                      <span>$26.06</span>
                    </div>
                    <div className={`${styles.summaryLine} ${styles.summaryFinal}`}>
                      <span>TOTAL A PAGAR:</span>
                      <strong className={styles.finalTotalAmt}>$199.76</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Video / Loom Responsive Container */}
        <div id="caso-real" className={styles.videoSection}>
          <div className={styles.videoHeader}>
            <div className={styles.videoBadgeGroup}>
              <span className="badge-tech">Demostración en Video</span>
              <h3 className={styles.videoSectionTitle}>
                Mira la automatización en acción (Flujo Real de n8n)
              </h3>
            </div>
            <button
              type="button"
              onClick={onOpenVideo}
              className={styles.openVideoBtn}
            >
              <Play size={16} fill="currentColor" />
              <span>Ver video de 45 segundos</span>
            </button>
          </div>

          <div className={styles.videoFrameBox} onClick={onOpenVideo}>
            <div className={styles.videoPosterContainer}>
              <img
                src="/agentico-logo.jpg"
                alt="Agentico - Sistema de Automatización"
                className={styles.agenticoPoster}
              />
            </div>
            <div className={styles.videoCoverOverlay}>
              <div className={styles.videoBadgeTop}>
                <span className={styles.agenticoPill}>SISTEMA AGENTICO</span>
                <span className={styles.durationPill}>⏱ 45s</span>
              </div>
              <div className={styles.videoPlayCircle}>
                <Play size={32} fill="#FFFFFF" className={styles.playCenterIcon} />
              </div>
              <span className={styles.videoCoverTitle}>
                Haz clic para reproducir la demostración en video
              </span>
              <span className={styles.videoCoverSub}>
                Flujo real de n8n: WhatsApp → Google Sheets → Proforma PDF
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
