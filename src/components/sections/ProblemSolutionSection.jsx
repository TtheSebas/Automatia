import React from 'react';
import { XCircle, CheckCircle2, Clock, AlertTriangle, Zap, DollarSign, Users, Database } from 'lucide-react';
import styles from './ProblemSolutionSection.module.css';

export default function ProblemSolutionSection() {
  const manualPains = [
    {
      title: "15 a 25 minutos perdidos por proforma",
      desc: "Tipear a mano en Word o Excel, buscar códigos de barras y revisar fórmulas para cada cliente que escribe.",
      icon: Clock
    },
    {
      title: "Errores humanos en precios y stock",
      desc: "Vender productos con precios desactualizados o cotizar mercadería que ya no está disponible en bodega.",
      icon: AlertTriangle
    },
    {
      title: "Clientes perdidos ante la competencia",
      desc: "En ferreterías y distribución, el comprador cotiza en 3 lugares a la vez. Quien responde primero con documento en mano, cierra la venta.",
      icon: DollarSign
    },
    {
      title: "Vendedores convertidos en secretarios",
      desc: "Tus mejores comerciales pasan el 60% de su jornada llenando plantillas en lugar de prospectar y cobrar.",
      icon: Users
    }
  ];

  const automatiaBenefits = [
    {
      title: "Proforma formal en PDF en menos de 30 segundos",
      desc: "El cliente manda un texto o audio y el sistema redacta el documento oficial listo para imprimir o despachar.",
      icon: Zap
    },
    {
      title: "Cálculo matemático exacto con Google Sheets",
      desc: "Valida códigos de inventario, descuenta stock de referencia y aplica automáticamente tarifas de IVA y descuentos.",
      icon: CheckCircle2
    },
    {
      title: "Envío automático con tu diseño corporativo",
      desc: "Despacho instantáneo vía Gmail o WhatsApp con membrete, logo oficial, RUC y políticas de entrega de tu empresa.",
      icon: CheckCircle2
    },
    {
      title: "Registro automático en tu base de ventas",
      desc: "Cada cotización generada queda archivada en tu hoja de cálculo central para seguimiento comercial.",
      icon: Database
    }
  ];

  return (
    <section id="problema" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <span className="badge-tech">EL DOLOR ECONÓMICO</span>
          <h2>¿Cuánto dinero y ventas pierde tu distribuidora cada semana?</h2>
          <p>
            El cuello de botella de tu negocio no es la falta de demanda: es el tiempo manual que toma cotizar cada pedido mientras tus clientes esperan.
          </p>
        </div>

        <div className={styles.comparisonGrid}>
          {/* Col 1: Método Tradicional (Caos Manual) */}
          <div className={styles.cardManual}>
            <div className={styles.cardHeaderManual}>
              <div className={styles.headerTitleWrap}>
                <span className={styles.alertTag}>EL MÉTODO TRADICIONAL</span>
                <h3 className={styles.cardTitle}>El Caos Manual en Oficina</h3>
              </div>
              <span className={styles.timeTagManual}>15 a 25 min / pedido</span>
            </div>

            <div className={styles.listWrap}>
              {manualPains.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className={styles.painItem}>
                    <div className={styles.painIconBox}>
                      <XCircle size={18} />
                    </div>
                    <div>
                      <strong className={styles.painTitle}>{item.title}</strong>
                      <p className={styles.painDesc}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.footerSummaryManual}>
              <span className={styles.footerStat}>Resultado: Ventas perdidas por lentitud de respuesta</span>
            </div>
          </div>

          {/* Col 2: Con Agentico (Flujo Automatizado) */}
          <div className={styles.cardAutomatia}>
            <div className={styles.badgePopular}>RECOMENDADO</div>
            <div className={styles.cardHeaderAutomatia}>
              <div className={styles.headerTitleWrap}>
                <span className={styles.emeraldTag}>CON AGENTICO</span>
                <h3 className={styles.cardTitle}>El Flujo Automatizado 24/7</h3>
              </div>
              <span className={styles.timeTagEmerald}>&lt; 30 segundos / pedido</span>
            </div>

            <div className={styles.listWrap}>
              {automatiaBenefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className={styles.benefitItem}>
                    <div className={styles.benefitIconBox}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <strong className={styles.benefitTitle}>{item.title}</strong>
                      <p className={styles.benefitDesc}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.footerSummaryEmerald}>
              <span className={styles.footerStatEmerald}>Resultado: Atención inmediata y hasta 4 horas diarias recuperadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
