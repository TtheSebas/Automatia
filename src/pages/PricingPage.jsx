import React, { useEffect } from 'react';
import { ShieldCheck, Info, Clock, DollarSign, Scale, ArrowRight, TrendingUp } from 'lucide-react';
import PricingCard from '../components/ui/PricingCard';
import SectionCTA from '../components/ui/SectionCTA';
import styles from './PricingPage.module.css';

export default function PricingPage() {
  useEffect(() => {
    document.title = "Precios y ROI — Automatia | Sin tarifas ocultas para PyMEs";
  }, []);

  const implementationFeatures = [
    "Configuración técnica y diseño de flujos de conversación",
    "Desarrollo y entrenamiento del agente con datos del negocio",
    "Integración directa con tu número de WhatsApp existente",
    "Carga y estructuración de listas de precios, catálogos o Excel",
    "Plantilla PDF profesional con membrete y validez",
    "Módulo de revisión humana (Human-in-the-Loop)",
    "Puesta en marcha asistida y capacitación a tu equipo"
  ];

  const maintenanceFeatures = [
    "Soporte técnico continuo y canal directo de atención",
    "Ajustes periódicos de tarifas, stock y condiciones comerciales",
    "Monitoreo semanal del rendimiento y respuestas",
    "Optimización de textos según conversaciones de clientes reales",
    "Acompañamiento en la evolución de tus procesos"
  ];

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={`section-hero ${styles.heroSection}`}>
        <div className={`container ${styles.headerContainer}`}>
          <span className="eyebrow">PRECIOS CLAROS Y TRANSPARENTES</span>
          <h1 className={styles.mainTitle}>
            Una implementación a medida, sin precios ocultos.
          </h1>
          <p className={styles.mainSubtitle}>
            Sabemos que en una PyME cada peso cuenta. Ofrecemos un esquema predecible de pago único de instalación y mantenimiento opcional sin letras chicas ni cláusulas de permanencia forzada.
          </p>
        </div>
      </section>

      {/* Grid de Precios */}
      <section className={`section ${styles.pricingSection}`}>
        <div className="container">
          <div className={styles.pricingGrid}>
            <PricingCard
              tag="Pago Único de Instalación"
              title="Implementación"
              price="$500 USD"
              period="/ proyecto base"
              description="Diseñamos, configuramos y dejamos el sistema funcionando en tu WhatsApp con tus datos comerciales."
              features={implementationFeatures}
              highlight={true}
              buttonText="Agendar Auditoría Gratuita de 20 Minutos"
            />

            <PricingCard
              tag="Continuidad y Mejoras"
              title="Mantenimiento"
              price="$100 USD"
              period="/ mes"
              description="Acompañamiento técnico permanente, actualización de precios y optimizaciones continuas."
              features={maintenanceFeatures}
              highlight={false}
              buttonText="Agendar Auditoría Gratuita de 20 Minutos"
            />
          </div>

          {/* Notas de Claridad Financiera */}
          <div className={styles.notesContainer}>
            <div className={styles.noteBox}>
              <Info size={18} className={styles.noteIcon} />
              <div>
                <strong>Alcance personalizado:</strong> El precio final depende del alcance, número de flujos, integraciones específicas y volumen de catálogos del negocio. En la auditoría de 20 minutos te damos una propuesta exacta.
              </div>
            </div>

            <div className={styles.noteBox}>
              <DollarSign size={18} className={styles.noteIcon} />
              <div>
                <strong>Servicios externos directos:</strong> Los costos de infraestructura de IA y consumo de WhatsApp API se conectan a tu propia cuenta, pagando únicamente por lo que tu negocio consume (habitualmente unos pocos dólares al mes en PyMEs).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE RETORNO DE INVERSIÓN (ROI) */}
      <section className={`section section-secondary ${styles.roiSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-sage">ANÁLISIS DE RETORNO</span>
            <p className={styles.roiPreTitle}>La pregunta no es cuánto cuesta automatizar.</p>
            <h2>¿Cuánto te cuesta seguir haciéndolo manualmente?</h2>
            <p>
              El tiempo de tu equipo vale dinero. Cada hora que un empleado calificado pasa copiando y pegando precios es una hora menos dedicada a producir o cerrar ventas.
            </p>
          </div>

          <div className={styles.roiComparisonCard}>
            <div className={styles.comparisonGrid}>
              {/* Costo del statu quo */}
              <div className={styles.costCol}>
                <span className={styles.colTag}>El costo de seguir igual</span>
                <div className={styles.costItem}>
                  <Clock size={20} className={styles.costIcon} />
                  <div>
                    <strong>Horas repetitivas perdidas</strong>
                    <p>Entre 20 y 40 horas al mes respondiendo las mismas preguntas básicas en WhatsApp.</p>
                  </div>
                </div>
                <div className={styles.costItem}>
                  <Scale size={20} className={styles.costIcon} />
                  <div>
                    <strong>Oportunidades de venta perdidas</strong>
                    <p>Prospectos calificados que compran en otro lugar porque tardaste 4 horas en enviar la cotización.</p>
                  </div>
                </div>
                <div className={styles.costItem}>
                  <TrendingUp size={20} className={styles.costIcon} />
                  <div>
                    <strong>Sobrecarga administrativa</strong>
                    <p>Interrupciones permanentes al personal del taller, fábrica o consultorio.</p>
                  </div>
                </div>
              </div>

              {/* Inversión en Automatización */}
              <div className={styles.solutionCol}>
                <span className={`${styles.colTag} ${styles.colTagPrimary}`}>La alternativa con Automatia</span>
                <div className={styles.solutionBox}>
                  <div className={styles.solutionNumber}>
                    <span>Ahorro estimado</span>
                    <strong>15 a 30 hrs/mes</strong>
                  </div>
                  <p className={styles.solutionExplanation}>
                    El retorno de inversión depende directamente del volumen de consultas de tu negocio, las horas de personal recuperadas y las cotizaciones ganadas por responder al instante.
                  </p>
                  <div className={styles.paybackNotice}>
                    <ShieldCheck size={18} className={styles.paybackIcon} />
                    <span>En determinados escenarios comerciales, la inversión inicial podría recuperarse aproximadamente en <strong>2 a 4 meses</strong>.</span>
                  </div>
                  <p className={styles.disclaimerPrudente}>
                    * Estimación prudente basada en ahorro de horas de personal administrativo y reducción de tiempos de respuesta. No constituye una garantía comercial abstracta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <SectionCTA
        title="Evaluemos los números concretos de tu empresa"
        subtitle="En la auditoría gratuita de 20 minutos calculamos cuántas horas de trabajo manual podrías ahorrar cada mes con tu volumen actual."
      />
    </div>
  );
}
