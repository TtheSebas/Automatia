import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, CheckCircle2, MessageSquare, Database, Calculator, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import CTAButton from '../components/ui/CTAButton';
import SectionCTA from '../components/ui/SectionCTA';
import styles from './DemoPage.module.css';

export default function DemoPage() {
  useEffect(() => {
    document.title = "Demostración en 90 segundos — Automatia | De consulta a cotización en PDF";
  }, []);

  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoSteps = [
    {
      num: "01",
      title: "El cliente pide presupuesto por WhatsApp",
      shortDesc: "El cliente escribe detallando lo que necesita.",
      fullText: "Un cliente escribe: 'Buenas tardes, necesito presupuesto para colocar 3 ventanas de aluminio blanco en Munro. ¿Me pueden decir cuánto sale y si tienen demora?'. El sistema reconoce de inmediato el tipo de solicitud sin hacer esperar horas.",
      icon: MessageSquare,
      visualTag: "Entrada: WhatsApp",
      visualContent: (
        <div className={styles.simBubbleIncoming}>
          <p className={styles.simSender}>Cliente (WhatsApp)</p>
          <p className={styles.simText}>"Buenas tardes, necesito presupuesto para colocar 3 ventanas de aluminio blanco en Munro. ¿Me pueden decir cuánto sale y si tienen demora?"</p>
          <span className={styles.simTime}>14:20 · Mensaje recibido</span>
        </div>
      )
    },
    {
      num: "02",
      title: "El sistema consulta la información del negocio",
      shortDesc: "Accede a tus listas de precios y catálogos.",
      fullText: "El agente de automatización busca en las hojas de cálculo, PDFs o sistema de precios de tu empresa. Valida que el modelo solicitado exista, consulta medidas estándar y verifica si hay stock de perfiles.",
      icon: Database,
      visualTag: "Búsqueda: Lista de Precios v4.2",
      visualContent: (
        <div className={styles.simSystemBox}>
          <div className={styles.simSysHeader}>
            <Database size={15} />
            <span>Consultando catálogo de carpintería...</span>
          </div>
          <div className={styles.simItemRow}>
            <span>Ítem detectado:</span>
            <strong>Ventana corrediza Módena 1.20 x 1.10 m</strong>
          </div>
          <div className={styles.simItemRow}>
            <span>Lista asociada:</span>
            <span>Tarifa Oficial Septiembre 2026</span>
          </div>
          <div className={styles.simItemRow}>
            <span>Disponibilidad en taller:</span>
            <span className={styles.greenText}>Perfilería en stock</span>
          </div>
        </div>
      )
    },
    {
      num: "03",
      title: "Obtiene el precio correspondiente",
      shortDesc: "Calcula costos, descuentos y plazos.",
      fullText: "Calcula los subtotales, aplica la política de impuestos correspondiente y formula los tiempos de fabricación o colocación previstos en tu reglamento interno.",
      icon: Calculator,
      visualTag: "Cálculo: Totales y Mano de Obra",
      visualContent: (
        <div className={styles.simCalcBox}>
          <div className={styles.calcLine}>
            <span>3x Ventana aluminio con vidrio:</span>
            <span>$237.000</span>
          </div>
          <div className={styles.calcLine}>
            <span>Flete e instalación en Munro:</span>
            <span>$45.000</span>
          </div>
          <div className={styles.calcDivider}></div>
          <div className={styles.calcTotalLine}>
            <strong>Total presupuestado:</strong>
            <strong className={styles.highlightPrice}>$282.000</strong>
          </div>
          <span className={styles.plazoBadge}>Plazo estimado de entrega: 10 días hábiles</span>
        </div>
      )
    },
    {
      num: "04",
      title: "Prepara una cotización profesional en PDF",
      shortDesc: "Documento formal listo para revisión o envío.",
      fullText: "Se genera automáticamente el presupuesto con el membrete oficial, numeración única (#COT-2026-118), condiciones comerciales y desglose de rubros. Queda listo para que tu equipo lo valide o se despache al instante.",
      icon: FileText,
      visualTag: "Salida: Archivo PDF Oficial",
      visualContent: (
        <div className={styles.simPdfBox}>
          <div className={styles.pdfDocHeader}>
            <FileText size={28} className={styles.pdfDocIcon} />
            <div>
              <strong className={styles.pdfDocTitle}>Cotización Formal #COT-2026-118.pdf</strong>
              <p className={styles.pdfDocSub}>Listo con membrete, especificaciones y validez 15 días</p>
            </div>
          </div>
          <div className={styles.humanCheckRow}>
            <ShieldCheck size={16} className={styles.shieldIcon} />
            <span>Disponible para supervisión humana con 1 clic</span>
          </div>
        </div>
      )
    }
  ];

  // Auto-play simulation loop
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % demoSteps.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, demoSteps.length]);

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={`section-hero ${styles.heroSection}`}>
        <div className={`container ${styles.headerContainer}`}>
          <span className="eyebrow">DEMOSTRACIÓN VISUAL PASO A PASO</span>
          <h1 className={styles.mainTitle}>
            Mira cómo una consulta se convierte en una cotización.
          </h1>
          <p className={styles.mainSubtitle}>
            Una demostración interactiva de 90 segundos para ver el recorrido completo: desde el mensaje del cliente hasta el documento formal generado.
          </p>
        </div>
      </section>

      {/* Main Interactive Demo Player */}
      <section className={`section ${styles.playerSection}`}>
        <div className="container">
          <div className={styles.playerContainer}>
            {/* Reproductor / Visor Principal */}
            <div className={styles.playerScreen}>
              <div className={styles.playerTopBar}>
                <div className={styles.playerPills}>
                  <span className={styles.statusDot}></span>
                  <span className={styles.playerTitle}>Simulador interactivo del flujo de trabajo</span>
                </div>
                <div className={styles.stepCounterBadge}>
                  Paso {activeStep + 1} de {demoSteps.length}
                </div>
              </div>

              {/* Pantalla central dinámica */}
              <div className={styles.stageArea}>
                <div className={styles.stageTag}>
                  {demoSteps[activeStep].visualTag}
                </div>
                <div className={styles.stageContent}>
                  {demoSteps[activeStep].visualContent}
                </div>
                <div className={styles.stageNarration}>
                  <h3 className={styles.narrationTitle}>
                    {demoSteps[activeStep].num}. {demoSteps[activeStep].title}
                  </h3>
                  <p className={styles.narrationText}>
                    {demoSteps[activeStep].fullText}
                  </p>
                </div>
              </div>

              {/* Barra de Controles del Reproductor */}
              <div className={styles.playerControls}>
                <div className={styles.controlsLeft}>
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={styles.playButton}
                    aria-label={isPlaying ? "Pausar simulación" : "Reproducir simulación"}
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    <span>{isPlaying ? "Pausar" : "Reproducir recorrido"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsPlaying(false);
                      setActiveStep(0);
                    }}
                    className={styles.resetButton}
                    aria-label="Reiniciar simulación"
                  >
                    <RotateCcw size={16} />
                  </button>
                </div>

                {/* Step indicators */}
                <div className={styles.stepTabs}>
                  {demoSteps.map((step, idx) => (
                    <button
                      key={step.num}
                      type="button"
                      onClick={() => {
                        setIsPlaying(false);
                        setActiveStep(idx);
                      }}
                      className={`${styles.stepTabBtn} ${activeStep === idx ? styles.stepTabActive : ''}`}
                    >
                      <span>{step.num}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Disclaimer honesto sobre el demo */}
            <div className={styles.demoHonestyNote}>
              <strong>Nota sobre esta demostración:</strong> Este simulador interactivo representa de forma fiel cómo procesa la información nuestro sistema en casos de producción reales. No utilizamos vídeos fingidos ni pantallas pregrabadas que oculten el funcionamiento interno.
            </div>
          </div>
        </div>
      </section>

      {/* Los 4 Pasos Detallados en Tarjetas */}
      <section className={`section section-secondary ${styles.breakdownSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">EL RECORRIDO EN 4 ETAPAS</span>
            <h2>De la pregunta suelta a la venta ordenada</h2>
            <p>
              El flujo exacto que ahorra hasta un 70% del tiempo de atención comercial en talleres y PyMEs de servicios.
            </p>
          </div>

          <div className={styles.breakdownGrid}>
            {demoSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className={`${styles.breakdownCard} ${activeStep === idx ? styles.cardSelected : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIconBox}>
                      <Icon size={20} />
                    </div>
                    <span className={styles.cardNumber}>{step.num}</span>
                  </div>
                  <h4 className={styles.cardTitle}>{step.title}</h4>
                  <p className={styles.cardDesc}>{step.shortDesc}</p>
                </div>
              );
            })}
          </div>

          {/* Diagrama de flujo continuo */}
          <div className={styles.continuousFlowBanner}>
            <span className={styles.flowElement}>WhatsApp</span>
            <span className={styles.flowArrow}>→</span>
            <span className={styles.flowElement}>Catálogo</span>
            <span className={styles.flowArrow}>→</span>
            <span className={styles.flowElement}>Precio</span>
            <span className={styles.flowArrow}>→</span>
            <span className={styles.flowElement}>PDF</span>
          </div>

          <div className={styles.demoCtaAction}>
            <CTAButton to="/auditoria" size="lg" variant="primary" icon={ArrowRight}>
              Quiero analizar mi negocio
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <SectionCTA
        title="¿Quieres ver cómo funcionaría exactamente con tus listas de precios?"
        subtitle="En la auditoría de 20 minutos revisamos un caso real de tu empresa y te mostramos cómo se estructuraría tu catálogo."
        buttonText="Agendar Auditoría Gratuita de 20 Minutos"
      />
    </div>
  );
}
