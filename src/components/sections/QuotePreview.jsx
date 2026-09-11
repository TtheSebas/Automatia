import React from 'react';
import { FileText, CheckCircle, Clock, Building2, User, Download, Send, CheckCheck } from 'lucide-react';
import styles from './QuotePreview.module.css';

export default function QuotePreview() {
  return (
    <div className={styles.quoteCard}>
      {/* Document Top Bar */}
      <div className={styles.quoteHeader}>
        <div className={styles.companyMeta}>
          <div className={styles.companyLogo}>
            <Building2 size={20} />
          </div>
          <div>
            <h4 className={styles.companyName}>Silva & Asociados S.R.L.</h4>
            <span className={styles.companyType}>Carpintería de Aluminio y Vidriería Técnica</span>
          </div>
        </div>
        <div className={styles.quoteBadgeGroup}>
          <span className={styles.quoteNumber}>COT-2026-084</span>
          <span className={styles.statusBadge}>
            <CheckCircle size={13} /> Listo para enviar
          </span>
        </div>
      </div>

      {/* Customer & Quote Details */}
      <div className={styles.detailsGrid}>
        <div className={styles.detailBox}>
          <span className={styles.detailLabel}>Cliente</span>
          <strong className={styles.detailValue}>Arq. Martín Rossi (Obra Belgrano)</strong>
          <span className={styles.subDetail}>Ingresó vía WhatsApp (+54 9 11 4455-8899)</span>
        </div>
        <div className={styles.detailBox}>
          <span className={styles.detailLabel}>Fecha y Validez</span>
          <strong className={styles.detailValue}>09 de Septiembre, 2026</strong>
          <span className={styles.subDetail}>Precios vigentes por 15 días corridos</span>
        </div>
      </div>

      {/* Itemized Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thDesc}>Descripción del ítem</th>
              <th className={styles.thQty}>Cant.</th>
              <th className={styles.thPrice}>Unitario</th>
              <th className={styles.thTotal}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.itemTitle}>Ventana corrediza 2 hojas (1.20 x 1.10 m)</div>
                <div className={styles.itemSpecs}>Línea Módena Blanca · Cristal Float 4mm · Cierres laterales embutidos</div>
              </td>
              <td className={styles.tdCenter}>2</td>
              <td className={styles.tdNumber}>$79.000</td>
              <td className={styles.tdNumber}><strong>$158.000</strong></td>
            </tr>
            <tr>
              <td>
                <div className={styles.itemTitle}>Ventana corrediza 2 hojas (1.50 x 1.20 m)</div>
                <div className={styles.itemSpecs}>Línea Módena Blanca · Cristal Float 4mm · Felpas perimetrales</div>
              </td>
              <td className={styles.tdCenter}>2</td>
              <td className={styles.tdNumber}>$95.000</td>
              <td className={styles.tdNumber}><strong>$190.000</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Financial Summary */}
      <div className={styles.financialSection}>
        <div className={styles.leftNotes}>
          <div className={styles.noteItem}>
            <Clock size={14} className={styles.noteIcon} />
            <span>Plazo estimado de entrega: 10 a 12 días hábiles</span>
          </div>
          <div className={styles.noteItem}>
            <CheckCheck size={14} className={styles.noteIcon} />
            <span>Generado a partir de lista de precios aprobada por la empresa</span>
          </div>
        </div>

        <div className={styles.summaryTotals}>
          <div className={styles.totalRow}>
            <span>Subtotal neto:</span>
            <span>$348.000</span>
          </div>
          <div className={styles.totalRow}>
            <span>IVA (21%):</span>
            <span>$73.080</span>
          </div>
          <div className={`${styles.totalRow} ${styles.finalTotal}`}>
            <span>Total Presupuestado:</span>
            <span className={styles.finalAmount}>$421.080</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className={styles.cardFooter}>
        <div className={styles.supervisorCheck}>
          <User size={15} className={styles.userCheckIcon} />
          <span>Supervisado por: <strong>Carlos Silva (Responsable de Taller)</strong></span>
        </div>
        <div className={styles.btnActions}>
          <button type="button" className={styles.btnDocAction}>
            <Download size={15} />
            <span>Descargar PDF</span>
          </button>
          <button type="button" className={`${styles.btnDocAction} ${styles.btnPrimaryAction}`}>
            <Send size={15} />
            <span>Enviar al cliente</span>
          </button>
        </div>
      </div>
    </div>
  );
}
