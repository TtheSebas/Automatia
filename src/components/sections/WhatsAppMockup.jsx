import React, { useState } from 'react';
import { Check, CheckCheck, FileText, Download, ShieldCheck, Database, ArrowRight, UserCheck } from 'lucide-react';
import styles from './WhatsAppMockup.module.css';

export default function WhatsAppMockup() {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    { title: "1. Consulta del cliente", time: "10:42" },
    { title: "2. Búsqueda en catálogo", time: "10:42" },
    { title: "3. Cotización lista", time: "10:43" },
    { title: "4. Control humano", time: "10:44" }
  ];

  return (
    <div className={styles.mockupWrapper}>
      {/* Header bar of phone / app */}
      <div className={styles.chatWindow}>
        {/* Chat top header */}
        <div className={styles.chatHeader}>
          <div className={styles.headerAvatar}>
            <span className={styles.avatarLetter}>A</span>
            <span className={styles.onlineBadge}></span>
          </div>
          <div className={styles.headerInfo}>
            <div className={styles.contactNameGroup}>
              <span className={styles.contactName}>Aluminios & Aberturas Silva</span>
              <span className={styles.botPill}>Asistente de Ventas</span>
            </div>
            <span className={styles.statusText}>En línea · Responde en segundos</span>
          </div>
          <div className={styles.businessBadge}>
            <ShieldCheck size={14} className={styles.shieldIcon} />
            <span>Negocio Verificado</span>
          </div>
        </div>

        {/* Chat messages stream */}
        <div className={styles.chatBody}>
          <div className={styles.dateDivider}>
            <span>HOY</span>
          </div>

          {/* 1. Cliente: Solicitud inicial */}
          <div className={`${styles.message} ${styles.incoming}`}>
            <div className={styles.bubble}>
              <p className={styles.messageText}>
                Hola buen día, necesito una cotización para 4 ventanas de aluminio blanco para una obra en planta baja.
              </p>
              <div className={styles.messageMeta}>
                <span className={styles.timestamp}>10:42</span>
              </div>
            </div>
          </div>

          {/* 2. Agente: Solicitud de medidas */}
          <div className={`${styles.message} ${styles.outgoing}`}>
            <div className={styles.bubble}>
              <p className={styles.messageText}>
                ¡Hola! Con gusto te preparamos el presupuesto. Para darte el valor exacto según nuestra lista de precios, ¿me podrías confirmar el ancho y alto aproximado de cada una?
              </p>
              <div className={styles.messageMeta}>
                <span className={styles.timestamp}>10:42</span>
                <CheckCheck size={15} className={styles.checkDouble} />
              </div>
            </div>
          </div>

          {/* 3. Cliente: Medidas exactas */}
          <div className={`${styles.message} ${styles.incoming}`}>
            <div className={styles.bubble}>
              <p className={styles.messageText}>
                Son 2 de 1.20 x 1.10 m (corredizas) y 2 de 1.50 x 1.20 m con vidrio simple de 4mm.
              </p>
              <div className={styles.messageMeta}>
                <span className={styles.timestamp}>10:43</span>
              </div>
            </div>
          </div>

          {/* 4. Agente: Consulta de información y confirmación */}
          <div className={`${styles.message} ${styles.outgoing}`}>
            <div className={styles.bubble}>
              {/* Internal process chip */}
              <div className={styles.systemCallChip}>
                <Database size={13} />
                <span>Consultando lista de perfiles y cristales v4.2...</span>
              </div>

              <p className={styles.messageText}>
                Perfecto, ya verifiqué disponibilidad de perfilería Modena blanca y cristal float 4mm en nuestro catálogo.
              </p>

              {/* Mini resumen de precios */}
              <div className={styles.calcSummary}>
                <div className={styles.calcRow}>
                  <span>2 ventanas 1.20 x 1.10 m:</span>
                  <strong>$158.000</strong>
                </div>
                <div className={styles.calcRow}>
                  <span>2 ventanas 1.50 x 1.20 m:</span>
                  <strong>$190.000</strong>
                </div>
                <div className={styles.calcDivider}></div>
                <div className={styles.calcTotal}>
                  <span>Subtotal estimado:</span>
                  <span className={styles.totalValue}>$348.000</span>
                </div>
              </div>

              {/* Tarjeta adjunta de PDF */}
              <div className={styles.pdfAttachment}>
                <div className={styles.pdfIconBox}>
                  <FileText size={24} className={styles.pdfFileIcon} />
                  <span className={styles.pdfBadge}>PDF</span>
                </div>
                <div className={styles.pdfInfo}>
                  <span className={styles.pdfTitle}>Cotizacion_Silva_#COT-4812.pdf</span>
                  <span className={styles.pdfDetails}>128 KB · Con membrete, desglose y validez 15 días</span>
                </div>
                <div className={styles.downloadIcon}>
                  <Download size={16} />
                </div>
              </div>

              <div className={styles.humanReviewNotice}>
                <UserCheck size={14} className={styles.reviewIcon} />
                <span>Revisión humana: Aprobado por Carlos (Taller) antes del envío</span>
              </div>

              <div className={styles.messageMeta}>
                <span className={styles.timestamp}>10:43</span>
                <CheckCheck size={15} className={styles.checkDouble} />
              </div>
            </div>
          </div>
        </div>

        {/* Chat input placeholder */}
        <div className={styles.chatFooter}>
          <div className={styles.inputBar}>
            <span>Escribe un mensaje o consulta...</span>
          </div>
          <div className={styles.sendButtonPlaceholder}>
            <ArrowRight size={18} />
          </div>
        </div>
      </div>

      {/* Floating step explanation banner */}
      <div className={styles.floatingFlowBanner}>
        <div className={styles.flowBadge}>
          <span className={styles.flowPill}>Flujo en tiempo real</span>
        </div>
        <div className={styles.flowSequence}>
          <span className={styles.stepItem}>1. Consulta en WhatsApp</span>
          <span className={styles.flowSeparator}>→</span>
          <span className={styles.stepItem}>2. Tu catálogo y precios</span>
          <span className={styles.flowSeparator}>→</span>
          <span className={styles.stepItem}>3. Cotización en PDF</span>
          <span className={styles.flowSeparator}>→</span>
          <span className={`${styles.stepItem} ${styles.stepControl}`}>4. Control humano</span>
        </div>
      </div>
    </div>
  );
}
