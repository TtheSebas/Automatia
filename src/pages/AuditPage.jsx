import React, { useEffect } from 'react';
import { Clock, CheckCircle2, ShieldCheck, Sparkles, MessageCircle, ArrowRight, UserCheck } from 'lucide-react';
import AuditForm from '../components/sections/AuditForm';
import styles from './AuditPage.module.css';

export default function AuditPage() {
  useEffect(() => {
    document.title = "Agendar Auditoría Gratuita de 20 Minutos — Automatia";
  }, []);

  const sessionFlow = [
    {
      num: "01",
      title: "ANALIZAMOS",
      desc: "Revisamos brevemente cómo llegan tus consultas y qué tiempo te toma responderlas."
    },
    {
      num: "02",
      title: "DETECTAMOS",
      desc: "Identificamos cuellos de botella exactos donde tu equipo pierde horas manuales."
    },
    {
      num: "03",
      title: "TE RECOMENDAMOS",
      desc: "Te decimos con honestidad qué tiene sentido automatizar y qué conviene dejar como está."
    }
  ];

  const valuePoints = [
    "Sesión de 20 minutos por videollamada o teléfono, según tu preferencia.",
    "Sin discursos comerciales agresivos ni tecnicismos complejos.",
    "Analizamos tus propias listas de precios o tipos de mensajes habituales.",
    "Te llevas un diagnóstico claro de viabilidad y estimación de horas a ahorrar."
  ];

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={`section-hero ${styles.heroSection}`}>
        <div className={`container ${styles.headerContainer}`}>
          <div className="eyebrow eyebrow-sage">
            <Clock size={14} />
            SESIÓN 100% GRATUITA DE 20 MINUTOS
          </div>
          <h1 className={styles.mainTitle}>
            Descubre qué podrías automatizar en tu negocio.
          </h1>
          <p className={styles.mainSubtitle}>
            En una auditoría gratuita de 20 minutos analizaremos cómo gestionas actualmente las consultas, cotizaciones y tareas repetitivas para identificar oportunidades concretas de automatización.
          </p>
        </div>
      </section>

      {/* Main Conversion Layout: Form + Value Column */}
      <section className={`section ${styles.formSection}`}>
        <div className={`container ${styles.mainGrid}`}>
          {/* Left Column: Visual Steps and Reassurance */}
          <div className={styles.infoCol}>
            {/* Visual 3-step block: ANALIZAMOS -> DETECTAMOS -> TE RECOMENDAMOS */}
            <div className={styles.timelineCard}>
              <div className={styles.timelineHeader}>
                <span className={styles.badgeTime}>20 MINUTOS</span>
                <span className={styles.timelineLabel}>El recorrido de la sesión</span>
              </div>

              <div className={styles.timelineSteps}>
                {sessionFlow.map((step, idx) => (
                  <div key={idx} className={styles.timelineStep}>
                    <div className={styles.stepNumCircle}>{step.num}</div>
                    <div className={styles.stepContent}>
                      <h4 className={styles.stepTitle}>{step.title}</h4>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Value checklist */}
            <div className={styles.reassuranceCard}>
              <h4 className={styles.reassuranceTitle}>¿Por qué hacer esta auditoría?</h4>
              <ul className={styles.reassuranceList}>
                {valuePoints.map((point, index) => (
                  <li key={index}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Human promise card */}
            <div className={styles.promiseCard}>
              <ShieldCheck size={22} className={styles.shieldIcon} />
              <div>
                <strong>Compromiso de honestidad comercial:</strong>
                <p>
                  Si tras revisar tu volumen o tus procesos vemos que no necesitas automatización, te lo diremos claramente. No forzamos proyectos donde no hay un beneficio económico evidente.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className={styles.formCol}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Solicita tu auditoría de automatización</h2>
              <p className={styles.formSub}>
                Completa este breve formulario y coordinamos el horario por WhatsApp o correo en menos de 24 horas hábiles.
              </p>
            </div>
            <AuditForm />
          </div>
        </div>
      </section>
    </div>
  );
}
