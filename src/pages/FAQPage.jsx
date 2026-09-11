import React, { useEffect } from 'react';
import { HelpCircle, MessageCircle, Mail } from 'lucide-react';
import FAQAccordion from '../components/ui/FAQAccordion';
import SectionCTA from '../components/ui/SectionCTA';
import styles from './FAQPage.module.css';

export default function FAQPage() {
  useEffect(() => {
    document.title = "Preguntas Frecuentes — Automatia | Dudas resueltas antes de empezar";
  }, []);

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={`section-hero ${styles.heroSection}`}>
        <div className={`container ${styles.headerContainer}`}>
          <span className="eyebrow">RESOLVEMOS TUS DUDAS</span>
          <h1 className={styles.mainTitle}>Preguntas antes de empezar</h1>
          <p className={styles.mainSubtitle}>
            Respuestas honestas, directas y sin tecnicismos sobre cómo funciona el sistema, qué control mantienes y cómo se conecta a tu negocio actual.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div className={styles.accordionContainer}>
            <FAQAccordion />

            {/* Direct inquiry box */}
            <div className={styles.extraHelpCard}>
              <div className={styles.extraHelpText}>
                <h3 className={styles.extraHelpTitle}>¿Tienes una pregunta sobre un proceso específico de tu empresa?</h3>
                <p className={styles.extraHelpDesc}>
                  Si manejas productos a medida, listas especiales o un flujo particular, podemos resolver tus dudas puntuales por WhatsApp o correo antes de agendar la llamada.
                </p>
              </div>
              <div className={styles.extraHelpButtons}>
                <a
                  href="https://wa.me/5491123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.helpBtn}
                >
                  <MessageCircle size={18} />
                  <span>Escribir por WhatsApp</span>
                </a>
                <a
                  href="mailto:hola@automatia.com"
                  className={`${styles.helpBtn} ${styles.helpBtnSecondary}`}
                >
                  <Mail size={18} />
                  <span>Enviar un correo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <SectionCTA
        title="¿Prefieres que revisemos tu caso directamente?"
        subtitle="En una llamada de 20 minutos analizamos tus procesos y respondemos todas tus dudas en vivo."
      />
    </div>
  );
}
