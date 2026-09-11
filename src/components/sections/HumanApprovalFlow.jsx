import React from 'react';
import { MessageSquare, Bot, Eye, CheckCheck, Send, ShieldCheck, AlertCircle } from 'lucide-react';
import styles from './HumanApprovalFlow.module.css';

export default function HumanApprovalFlow() {
  const steps = [
    {
      number: "1",
      icon: MessageSquare,
      title: "Cliente consulta",
      desc: "Llega una pregunta, pedido de precio o solicitud de presupuesto por WhatsApp o web."
    },
    {
      number: "2",
      icon: Bot,
      title: "IA prepara el borrador",
      desc: "El sistema busca en tu catálogo, calcula el valor y redacta la cotización o respuesta técnica."
    },
    {
      number: "3",
      icon: Eye,
      title: "Tu empleado revisa",
      desc: "Una persona de tu equipo ve la cotización lista con un solo clic en su pantalla o celular."
    },
    {
      number: "4",
      icon: CheckCheck,
      title: "Tu empleado aprueba",
      desc: "Puede ajustar un descuento, cambiar un plazo o validar el documento tal como se calculó."
    },
    {
      number: "5",
      icon: Send,
      title: "Cliente recibe",
      desc: "El cliente obtiene su PDF formal con membrete o la confirmación en tiempo récord."
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headerBlock}>
        <span className="eyebrow eyebrow-sage">
          <ShieldCheck size={14} />
          CONTROL TOTAL Y SEGURIDAD
        </span>
        <h2 className={styles.title}>La IA trabaja. Tu equipo decide.</h2>
        <p className={styles.subtitle}>
          Automatizar no significa perder el control ni dejar a tu negocio a ciegas.
        </p>
      </div>

      {/* Visual Flow diagram */}
      <div className={styles.flowTrack}>
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isHumanStep = index === 2 || index === 3;
          return (
            <div
              key={step.number}
              className={`${styles.flowCard} ${isHumanStep ? styles.humanCard : ''}`}
            >
              <div className={styles.stepHeader}>
                <div className={`${styles.iconCircle} ${isHumanStep ? styles.humanIconCircle : ''}`}>
                  <Icon size={20} />
                </div>
                <span className={styles.stepNumber}>0{step.number}</span>
              </div>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDesc}>{step.desc}</p>
              {isHumanStep && (
                <div className={styles.humanBadge}>
                  <ShieldCheck size={12} />
                  <span>Intervención Humana</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Explanatory callout */}
      <div className={styles.clarificationBox}>
        <div className={styles.clarificationHeader}>
          <AlertCircle size={20} className={styles.alertIcon} />
          <h4 className={styles.calloutTitle}>Nuestra filosofía: IA con supervisión responsable</h4>
        </div>
        <p className={styles.calloutText}>
          No creemos en promesas irreales ni afirmamos que la tecnología es infalible. Cualquier sistema requiere supervisión cuando se trata de cotizaciones complejas o acuerdos comerciales. Con nuestra arquitectura, <strong>puedes configurar qué tipos de mensajes se responden automáticamente (como horarios o preguntas frecuentes) y cuáles requieren el visto bueno obligatorio de una persona de tu equipo antes de enviarse.</strong>
        </p>
        <div className={styles.highlightQuote}>
          "Más automatización, manteniendo el control humano en todo momento."
        </div>
      </div>
    </div>
  );
}
