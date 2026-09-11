import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Shield, Sparkles, MessageCircle, FileText, ArrowRight, CheckCircle2, Zap, ArrowDown } from 'lucide-react';
import CTAButton from '../components/ui/CTAButton';
import WhatsAppMockup from '../components/sections/WhatsAppMockup';
import QuotePreview from '../components/sections/QuotePreview';
import SectionCTA from '../components/ui/SectionCTA';
import styles from './HomePage.module.css';

export default function HomePage() {
  useEffect(() => {
    document.title = "Automatia — Deja de perder horas respondiendo mensajes y preparando cotizaciones";
  }, []);

  const frequentMessages = [
    "¿Cuánto cuesta?",
    "¿Tienen disponibilidad?",
    "¿Cuánto demora la entrega?",
    "¿Me pueden enviar una cotización?",
    "¿Qué horarios de atención tienen?",
    "¿Puedo agendar para esta semana?"
  ];

  const quickBenefits = [
    {
      icon: Zap,
      title: "Respuestas en segundos",
      desc: "Tus clientes reciben información instantánea sin esperar a que alguien se desocupe."
    },
    {
      icon: Clock,
      title: "Atención 24/7",
      desc: "Consultas de precios y solicitudes registradas incluso fuera del horario de taller u oficina."
    },
    {
      icon: FileText,
      title: "Cotizaciones listas para revisar",
      desc: "El borrador en PDF se arma a partir de tus catálogos para que tu equipo solo tenga que validar."
    }
  ];

  return (
    <div className={styles.page}>
      {/* HERO SECTION */}
      <section className={`section-hero ${styles.heroSection}`}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className="eyebrow">
              <Sparkles size={13} />
              <span>AUTOMATIZACIÓN PARA NEGOCIOS REALES</span>
            </div>

            <h1 className={styles.heroTitle}>
              Deja de perder horas respondiendo mensajes y preparando cotizaciones.
            </h1>

            <p className={styles.heroSubtitle}>
              Automatiza la atención de tus clientes por WhatsApp, consulta tus precios y prepara cotizaciones profesionales en segundos, mientras tu equipo mantiene el control.
            </p>

            <div className={styles.heroCtaGroup}>
              <CTAButton to="/auditoria" size="lg" variant="primary" icon={ArrowRight}>
                Agendar Auditoría Gratuita de 20 Minutos
              </CTAButton>
              <CTAButton to="/demo" size="lg" variant="secondary">
                Ver cómo funciona
              </CTAButton>
            </div>

            <p className={styles.heroMicrocopy}>
              Sin compromiso. Analizamos tu negocio y detectamos qué tareas tiene sentido automatizar.
            </p>
          </div>

          {/* Hero Visual: Mockup de WhatsApp en acción */}
          <div className={styles.heroVisual}>
            <WhatsAppMockup />
          </div>
        </div>
      </section>

      {/* QUICK BENEFITS BAR */}
      <section className={styles.quickBenefitsSection}>
        <div className={`container ${styles.quickBenefitsContainer}`}>
          {quickBenefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={styles.benefitCard}>
                <div className={styles.benefitIconBox}>
                  <Icon size={22} />
                </div>
                <div className={styles.benefitTextBox}>
                  <h3 className={styles.benefitTitle}>{item.title}</h3>
                  <p className={styles.benefitDesc}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* "¿TE SUENA?" SECTION */}
      <section className={`section ${styles.teSuenaSection}`}>
        <div className={`container ${styles.teSuenaContainer}`}>
          <div className="section-header">
            <span className="eyebrow">IDENTIFICACIÓN INMEDIATA</span>
            <h2>Si tu negocio recibe mensajes como estos, podemos ayudarte.</h2>
            <p>
              El problema de una PyME no es la tecnología: es la cantidad de interrupciones diarias que sufre tu equipo por contestar lo mismo una y otra vez.
            </p>
          </div>

          <div className={styles.messageBubblesGrid}>
            {frequentMessages.map((msg, index) => (
              <div key={index} className={styles.messagePill}>
                <MessageCircle size={18} className={styles.bubbleIcon} />
                <span className={styles.bubbleText}>"{msg}"</span>
              </div>
            ))}
          </div>

          <div className={styles.teSuenaSummary}>
            <div className={styles.summaryCard}>
              <p className={styles.summaryStatement}>
                Si tu equipo responde estas preguntas todos los días, probablemente exista una oportunidad concreta de automatización.
              </p>
              <p className={styles.summarySubtext}>
                No necesitas cambiar la manera en que vendes ni comprar software gigantesco. Conectamos tus precios y reglas actuales para resolver el 80% de las consultas rutinarias.
              </p>
              <div className={styles.summaryAction}>
                <CTAButton to="/auditoria" size="md" variant="primary">
                  Agendar Auditoría Gratuita de 20 Minutos
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL CONTRAST & QUOTE PREVIEW */}
      <section className={`section section-secondary ${styles.contrastSection}`}>
        <div className={`container ${styles.contrastContainer}`}>
          <div className={styles.contrastTextCol}>
            <span className="eyebrow eyebrow-sage">DEL MENSAJE AL PDF FORMAL</span>
            <h2 className={styles.contrastTitle}>
              De una consulta suelta por WhatsApp a un presupuesto formal listo para firmar.
            </h2>
            <p className={styles.contrastDesc}>
              Tu cliente no tiene que esperar horas a que alguien revise un cuaderno de notas o una planilla vieja. El sistema extrae los datos de tu catálogo, suma los costos y te deja el PDF listo para validar.
            </p>

            <ul className={styles.featureBulletList}>
              <li>
                <CheckCircle2 size={18} className={styles.bulletCheck} />
                <span><strong>Catálogo propio:</strong> Busca en tus listas vigentes sin inventar precios.</span>
              </li>
              <li>
                <CheckCircle2 size={18} className={styles.bulletCheck} />
                <span><strong>Formato con membrete:</strong> PDF formal con logo, validez e impuestos desglosados.</span>
              </li>
              <li>
                <CheckCircle2 size={18} className={styles.bulletCheck} />
                <span><strong>Validación humana:</strong> Tu responsable técnico o comercial lo aprueba antes del envío.</span>
              </li>
            </ul>

            <div className={styles.contrastActions}>
              <Link to="/como-funciona" className={styles.textLink}>
                Conoce el proceso paso a paso →
              </Link>
            </div>
          </div>

          <div className={styles.contrastVisualCol}>
            <QuotePreview />
          </div>
        </div>
      </section>

      {/* UNIVERSAL SECTION CTA */}
      <SectionCTA />
    </div>
  );
}
