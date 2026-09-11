import React, { useEffect } from 'react';
import { Search, Compass, Wrench, RefreshCw, ArrowDown, ArrowRight, CheckCircle2, MessageSquare, Database, FileText, UserCheck } from 'lucide-react';
import HumanApprovalFlow from '../components/sections/HumanApprovalFlow';
import SectionCTA from '../components/ui/SectionCTA';
import styles from './HowItWorksPage.module.css';

export default function HowItWorksPage() {
  useEffect(() => {
    document.title = "Cómo funciona — Automatia | Tu negocio sigue funcionando, nosotros automatizamos lo repetitivo";
  }, []);

  const steps = [
    {
      num: "01",
      tag: "AUDITAMOS",
      icon: Search,
      title: "Analizamos cómo atiendes actualmente a tus clientes.",
      desc: "Revisamos los mensajes de los últimos meses: qué preguntan tus clientes, cuántos piden cotizaciones, qué respuestas demoran más y cómo está organizada tu información comercial.",
      bullets: [
        "Revisión de flujos de WhatsApp y correo",
        "Mapeo de las dudas y objeciones frecuentes",
        "Diagnóstico de tiempos de respuesta del equipo"
      ]
    },
    {
      num: "02",
      tag: "IDENTIFICAMOS",
      icon: Compass,
      title: "Encontramos las tareas repetitivas que consumen más tiempo.",
      desc: "No todo se debe automatizar. Seleccionamos únicamente los cuellos de botella claros donde la automatización te ahorrará horas reales y evitará perder ventas.",
      bullets: [
        "Filtrado de preguntas rutinarias vs. casos especiales",
        "Estructura de listas de precios y catálogos",
        "Definición de reglas y umbrales de aprobación humana"
      ]
    },
    {
      num: "03",
      tag: "IMPLEMENTAMOS",
      icon: Wrench,
      title: "Construimos el sistema adaptado a tus procesos.",
      desc: "Conectamos tu WhatsApp, configuramos el agente para que consulte tus datos reales y armamos las plantillas de documentos o presupuestos. Tu equipo no tiene que cambiar de herramientas.",
      bullets: [
        "Conexión con tu número de WhatsApp existente",
        "Generación automática de PDFs con tu membrete",
        "Capacitación simple y directa a tus colaboradores"
      ]
    },
    {
      num: "04",
      tag: "OPTIMIZAMOS",
      icon: RefreshCw,
      title: "Realizamos ajustes y mantenimiento para mejorar el funcionamiento.",
      desc: "Monitoreamos las conversaciones, corregimos respuestas, incorporamos nuevos productos o cambios de precios y afinamos el sistema de forma continua.",
      bullets: [
        "Ajuste semanal según consultas reales recibidas",
        "Actualización ágil de tarifas y stock",
        "Soporte técnico cercano y directo"
      ]
    }
  ];

  const fullArchitecture = [
    { label: "Cliente", sub: "Escribe por WhatsApp o web", icon: MessageSquare },
    { label: "Canal WhatsApp", sub: "Recepción instantánea 24/7", icon: MessageSquare },
    { label: "Agente IA", sub: "Comprende la intención y medidas", icon: Search },
    { label: "Información del negocio", sub: "Consulta precios y catálogos", icon: Database },
    { label: "Respuesta / Cotización", sub: "Calcula valor y arma PDF formal", icon: FileText },
    { label: "Revisión humana", sub: "Tu equipo valida cuando corresponda", icon: UserCheck, highlight: true }
  ];

  return (
    <div className={styles.page}>
      {/* HEADER HERO */}
      <section className={`section-hero ${styles.heroSection}`}>
        <div className={`container ${styles.headerContainer}`}>
          <span className="eyebrow">MÉTODO CLARO Y TRANSPARENTE</span>
          <h1 className={styles.mainTitle}>
            Tu negocio sigue funcionando. Nosotros automatizamos lo repetitivo.
          </h1>
          <p className={styles.mainSubtitle}>
            Sin proyectos interminables ni cambios traumáticos para tu equipo. Integramos soluciones puntuales que resuelven los cuellos de botella de tu día a día.
          </p>
        </div>
      </section>

      {/* 4 PASOS PRINCIPALES */}
      <section className={`section ${styles.stepsSection}`}>
        <div className="container">
          <div className={styles.stepsGrid}>
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className={styles.stepCard}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepTag}>{step.tag}</span>
                    <span className={styles.stepNumber}>{step.num}</span>
                  </div>
                  <div className={styles.stepIconWrap}>
                    <Icon size={24} />
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                  <ul className={styles.stepBullets}>
                    {step.bullets.map((b, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className={styles.bulletCheck} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FLUJO VISUAL COMPLETO */}
      <section className={`section section-secondary ${styles.flowSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">EL RECORRIDO DE UN MENSAJE</span>
            <h2>Cómo viaja la información dentro del sistema</h2>
            <p>
              Una arquitectura transparente donde cada parte cumple un rol específico y tu negocio nunca queda en manos de una caja negra.
            </p>
          </div>

          <div className={styles.flowPipeline}>
            {fullArchitecture.map((item, index) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={index}>
                  <div className={`${styles.pipeNode} ${item.highlight ? styles.nodeHighlight : ''}`}>
                    <div className={styles.pipeIconBox}>
                      <Icon size={20} />
                    </div>
                    <span className={styles.pipeLabel}>{item.label}</span>
                    <span className={styles.pipeSub}>{item.sub}</span>
                    {item.highlight && (
                      <span className={styles.controlPill}>Supervisión</span>
                    )}
                  </div>
                  {index < fullArchitecture.length - 1 && (
                    <div className={styles.pipeConnector}>
                      <span className={styles.desktopArrow}><ArrowRight size={18} /></span>
                      <span className={styles.mobileArrow}><ArrowDown size={18} /></span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* HUMAN-IN-THE-LOOP SECTION */}
      <section className={`section ${styles.humanSection}`}>
        <div className="container">
          <HumanApprovalFlow />
        </div>
      </section>

      {/* UNIVERSAL SECTION CTA */}
      <SectionCTA />
    </div>
  );
}
