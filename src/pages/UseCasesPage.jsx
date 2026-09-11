import React, { useEffect } from 'react';
import { Hammer, Stethoscope, Home, CheckCircle2, XCircle, AlertTriangle, ShieldCheck } from 'lucide-react';
import UseCaseCard from '../components/ui/UseCaseCard';
import SectionCTA from '../components/ui/SectionCTA';
import styles from './UseCasesPage.module.css';

export default function UseCasesPage() {
  useEffect(() => {
    document.title = "Casos de Uso — Automatia | Talleres, Clínicas e Inmobiliarias";
  }, []);

  const cases = [
    {
      tag: "Manufactura e Instalación",
      icon: Hammer,
      title: "Cotizaciones para manufactura, carpinterías e instaladores",
      description: "Recibe solicitudes técnicas por WhatsApp, consulta tablas de perfilería o materiales y prepara presupuestos detallados sin empezar desde cero cada vez.",
      flowSteps: ["WhatsApp", "Catálogo", "Precio", "PDF"],
      result: "Menos trabajo administrativo y respuestas comerciales más rápidas para cerrar ventas antes que la competencia."
    },
    {
      tag: "Salud y Estética",
      icon: Stethoscope,
      title: "Agendamiento y consultas frecuentes para clínicas y consultorios",
      description: "Responde dudas sobre coberturas, informa horarios de especialistas y recopila los datos del paciente para programar la cita sin saturar la recepción.",
      flowSteps: ["Paciente", "Consulta", "Horario", "Solicitud"],
      result: "Menos interrupciones telefónicas para el personal y mejor experiencia para el paciente que consulta fuera de hora."
    },
    {
      tag: "Bienes Raíces",
      icon: Home,
      title: "Precalificación y filtrado de prospectos inmobiliarios",
      description: "Recopila presupuesto, zona de interés, tipo de propiedad y urgencia de compra o alquiler antes de derivar la conversación al asesor comercial.",
      flowSteps: ["Prospecto", "Preguntas", "Perfil", "Asesor"],
      result: "Más tiempo para mostrar inmuebles y menos horas respondiendo curiosos o consultas fuera de presupuesto."
    }
  ];

  const checklistIdeal = [
    "Recibes más de 10-15 consultas diarias por WhatsApp y te cuesta responder a tiempo.",
    "Tus empleados dedican más de una hora al día a responder las mismas 5 preguntas.",
    "Preparas cotizaciones manualmente calculando valores en hojas o cuadernos.",
    "Tus precios, productos o catálogos ya existen en algún formato digital (Excel, PDF o Sheets).",
    "Sientes que has perdido oportunidades de venta porque tardaste horas en cotizar.",
    "Quieres automatizar pero consideras indispensable que una persona de tu equipo mantenga la última palabra."
  ];

  const whenNotToAutomate = [
    "Recibes menos de 3 o 4 mensajes por semana y puedes responderlos de forma personalizada en el momento.",
    "Cada uno de tus trabajos es 100% artístico, único e irrepetible, sin precios ni reglas de cálculo base.",
    "Tus precios cambian minuto a minuto de manera impredecible sin ningún criterio de referencia.",
    "Tu negocio no cuenta con nadie en el equipo que pueda dedicar 10 minutos a supervisar las aprobaciones."
  ];

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={`section-hero ${styles.heroSection}`}>
        <div className={`container ${styles.headerContainer}`}>
          <span className="eyebrow">APLICACIONES REALES EN EL DÍA A DÍA</span>
          <h1 className={styles.mainTitle}>
            La automatización cambia según el negocio.
          </h1>
          <p className={styles.mainSubtitle}>
            Cada rubro tiene cuellos de botella distintos. No vendemos una receta mágica: adaptamos el sistema a las preguntas, listas de precios y flujos de tu propio sector.
          </p>
        </div>
      </section>

      {/* Grid de 3 Casos */}
      <section className={`section ${styles.casesSection}`}>
        <div className="container">
          <div className={styles.casesGrid}>
            {cases.map((c, i) => (
              <UseCaseCard
                key={i}
                tag={c.tag}
                icon={c.icon}
                title={c.title}
                description={c.description}
                flowSteps={c.flowSteps}
                result={c.result}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN "¿PARA QUIÉN ES?" */}
      <section className={`section section-secondary ${styles.checklistSection}`}>
        <div className="container">
          <div className={styles.checklistCard}>
            <div className={styles.checkHeader}>
              <span className="eyebrow eyebrow-sage">DIAGNÓSTICO RÁPIDO</span>
              <h2 className={styles.checkTitle}>Puede funcionar especialmente bien si...</h2>
              <p className={styles.checkSubtitle}>
                Si te sientes identificado con 2 o más de estos puntos, una automatización básica generará un retorno tangible en pocas semanas:
              </p>
            </div>

            <div className={styles.checklistGrid}>
              {checklistIdeal.map((item, index) => (
                <div key={index} className={styles.checkItem}>
                  <div className={styles.checkIconWrap}>
                    <CheckCircle2 size={20} />
                  </div>
                  <span className={styles.checkText}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN HONESTA: "CUÁNDO NO NECESITAS AUTOMATIZACIÓN" */}
      <section className={`section ${styles.honestySection}`}>
        <div className="container">
          <div className={styles.honestyContainer}>
            <div className="section-header">
              <span className="eyebrow">HONESTIDAD COMERCIAL</span>
              <h2>No todo necesita Inteligencia Artificial.</h2>
              <p>
                Si tu negocio recibe pocas consultas o el proceso actual ya funciona perfectamente, quizá no necesites automatizar nada.
              </p>
            </div>

            <div className={styles.notNeededCard}>
              <div className={styles.notNeededHeader}>
                <AlertTriangle size={24} className={styles.warningIcon} />
                <h3 className={styles.notNeededTitle}>Probablemente NO necesites automatización si:</h3>
              </div>

              <div className={styles.notNeededList}>
                {whenNotToAutomate.map((reason, idx) => (
                  <div key={idx} className={styles.notNeededItem}>
                    <XCircle size={18} className={styles.crossIcon} />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>

              <div className={styles.notNeededFooter}>
                <p className={styles.footerStatement}>
                  <strong>Por eso primero hacemos una auditoría:</strong> No queremos venderte automatización porque sí ni hacerte gastar dinero innecesariamente. Nuestro objetivo es encontrar dónde realmente puede generar valor y ahorro comprobable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <SectionCTA
        title="¿Quieres descubrir si tu rubro califica para automatizar?"
        subtitle="Analizamos tu volumen de consultas y tus listas de precios para darte una recomendación sincera en 20 minutos."
      />
    </div>
  );
}
