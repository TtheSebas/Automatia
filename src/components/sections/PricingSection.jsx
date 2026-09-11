import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, HelpCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import styles from './PricingSection.module.css';

export default function PricingSection() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      id: "piloto",
      name: "Piloto Cero Riesgo",
      badge: "PRUEBA EN VIVO",
      price: "$0",
      period: "por 3 días",
      desc: "Prueba el sistema con productos reales de tu negocio antes de decidir cualquier inversión.",
      features: [
        "Configuración de prueba con hasta 20 productos de tu catálogo",
        "Generación de proformas reales en PDF enviadas a tu correo",
        "Simulación directa desde un chat de WhatsApp de prueba",
        "Si no te ahorra tiempo de trabajo, no pagas absolutamente nada"
      ],
      ctaText: "Pedir Piloto Gratuito",
      highlight: false,
      whatsappMsg: "Hola Automatia, me interesa probar el Piloto Cero Riesgo ($0 por 3 días) para mi empresa."
    },
    {
      id: "integral",
      name: "Automatia Integral + Mantenimiento",
      badge: "MÁS POPULAR Y RECOMENDADO",
      price: "$250 setup",
      period: "+ $40 / mes",
      desc: "La solución completa con monitoreo continuo, soporte técnico y actualizaciones ilimitadas de precios.",
      features: [
        "Todo lo incluido en la Implementación Base",
        "Monitoreo continuo 24/7 y garantía de funcionamiento sin caídas",
        "Actualización mensual ilimitada de listas de precios y nuevos productos",
        "Soporte técnico prioritario directo por WhatsApp para tu equipo",
        "Ajustes de plantillas y nuevas condiciones de despacho incluidas"
      ],
      ctaText: "Elegir Plan Integral",
      highlight: true,
      whatsappMsg: "Hola Automatia, deseo contratar el plan Automatia Integral ($250 setup + $40/mes) para mi distribuidora."
    },
    {
      id: "base",
      name: "Implementación Comercial Base",
      badge: "PAGO ÚNICO",
      price: "$250",
      period: "pago único",
      desc: "Integración llave en mano para empresas que prefieren gestionar su propio mantenimiento.",
      features: [
        "Integración completa con el catálogo de tu empresa en Google Sheets",
        "Plantilla oficial en PDF personalizada con tu logo, RUC y condiciones comerciales",
        "Conexión con correo Gmail/Google Workspace para despacho automático",
        "Capacitación rápida y directa a tu equipo de ventas",
        "Entrega de manual de uso y flujo operativo"
      ],
      ctaText: "Solicitar Plan Base",
      highlight: false,
      whatsappMsg: "Hola Automatia, me interesa contratar la Implementación Comercial Base ($250 pago único)."
    }
  ];

  return (
    <section id="precios" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <span className="badge-tech">PLANES TRANSPARENTES PARA PYMES</span>
          <h2>Inversión clara, predecible y con riesgo cero</h2>
          <p>
            Sin cláusulas de permanencia forzada ni comisiones por cotización emitida. Empieza con la prueba de 3 días y comprueba el retorno de inversión desde la primera semana.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {plans.map((p) => (
            <div
              key={p.id}
              className={`${styles.planCard} ${p.highlight ? styles.planCardPopular : ''}`}
            >
              {p.badge && (
                <div className={styles.badgeWrapper}>
                  <span className={`${styles.badge} ${p.highlight ? styles.badgeHighlight : ''}`}>
                    {p.badge}
                  </span>
                </div>
              )}

              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{p.name}</h3>
                <p className={styles.planDesc}>{p.desc}</p>
              </div>

              <div className={styles.priceContainer}>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{p.price}</span>
                  <span className={styles.period}>{p.period}</span>
                </div>
                <span className={styles.priceNote}>Facturado con datos de tu empresa</span>
              </div>

              <div className={styles.featuresList}>
                <span className={styles.featuresHeading}>Qué incluye:</span>
                {p.features.map((feat, idx) => (
                  <div key={idx} className={styles.featItem}>
                    <CheckCircle2 size={18} className={styles.featCheck} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className={styles.planFooter}>
                <a
                  href={siteConfig.getCustomWhatsappUrl(p.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.planBtn} ${p.highlight ? styles.planBtnPrimary : styles.planBtnSecondary}`}
                >
                  <span>{p.ctaText}</span>
                  <ArrowRight size={16} />
                </a>

                {p.id === 'piloto' && (
                  <span className={styles.subtextGuarantee}>
                    Garantía: Si no te ahorra tiempo, no pagas.
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className={styles.faqCallout}>
          <div className={styles.calloutLeft}>
            <ShieldCheck size={28} className={styles.shieldIcon} />
            <div>
              <strong className={styles.calloutTitle}>¿Tienes un inventario con más de 1,000 productos o sucursales múltiples?</strong>
              <p className={styles.calloutText}>
                Podemos adaptar la conexión a catálogos segmentados por bodega o listas con precios diferenciados para mayoristas y minoristas.
              </p>
            </div>
          </div>
          <a
            href={siteConfig.getCustomWhatsappUrl("Hola Automatia, tengo una consulta sobre cotizaciones para más de 1,000 productos o múltiples sucursales.")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.consultBtn}
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
