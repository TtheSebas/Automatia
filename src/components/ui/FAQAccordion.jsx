import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import styles from './FAQAccordion.module.css';

export const faqData = [
  {
    id: 'conocimientos',
    question: '¿Necesito conocimientos técnicos en mi equipo?',
    answer: 'No, en absoluto. Nosotros nos encargamos de toda la configuración, conexión e integración técnica. Tu equipo seguirá usando WhatsApp o su correo habitual tal como lo hace hoy, sin necesidad de aprender a programar ni manipular sistemas complicados.'
  },
  {
    id: 'precios',
    question: '¿La IA puede consultar mis precios y catálogos?',
    answer: 'Sí. Conectamos el sistema a tus listas de precios, hojas de cálculo de Excel/Google Sheets, PDFs de catálogos o sistema de gestión. La IA busca exactamente los valores y condiciones que tu negocio ya tiene definidos.'
  },
  {
    id: 'cotizaciones',
    question: '¿Puede generar cotizaciones formales?',
    answer: 'Sí. A partir de las medidas, cantidades o especificaciones que el cliente indica en la conversación, el sistema calcula los totales y genera un documento PDF profesional con el membrete, validez y formato de tu empresa.'
  },
  {
    id: 'revision-humana',
    question: '¿Puedo revisar una cotización antes de que se le envíe al cliente?',
    answer: 'Totalmente. De hecho, es la configuración recomendada para la mayoría de los negocios. El sistema redacta el borrador y genera el PDF, pero una persona de tu equipo lo valida o ajusta con un solo clic antes del envío final.'
  },
  {
    id: 'no-sabe',
    question: '¿Qué pasa si la IA no sabe responder a una consulta?',
    answer: 'Cuando el sistema detecta una pregunta fuera de su conocimiento o un caso complejo, avisa con amabilidad al cliente y deriva la conversación de inmediato a la persona encargada en tu equipo, notificándote por mensaje.'
  },
  {
    id: 'cambiar-whatsapp',
    question: '¿Necesito cambiar mi número de WhatsApp actual?',
    answer: 'No es necesario cambiar de número. La integración se puede realizar sobre tu línea de WhatsApp Business existente para que tus clientes habituales sigan escribiendo al mismo contacto de siempre.'
  },
  {
    id: 'costo',
    question: '¿Cuánto cuesta la solución?',
    answer: 'Trabajamos con un esquema transparente: una tarifa de implementación inicial (desde $500 USD según el alcance y la cantidad de flujos) y un mantenimiento mensual opcional (desde $100 USD/mes) que incluye monitoreo, mejoras y soporte.'
  },
  {
    id: 'tiempo',
    question: '¿Cuánto tarda la implementación?',
    answer: 'En la gran mayoría de las PyMEs, una integración estándar (atención básica, consulta de catálogo y generación de cotizaciones) está lista y probada en un plazo de entre 1 y 3 semanas.'
  },
  {
    id: 'servicios-externos',
    question: '¿Qué servicios externos tienen costos adicionales?',
    answer: 'Los servicios de infraestructura de IA (como OpenAI/Anthropic) y la API oficial de WhatsApp tienen un costo por volumen de uso. Para evitar sobreprecios y mantener la total transparencia, se conectan directamente a tu cuenta comercial, pagando únicamente lo que tu negocio consume (que en una PyME típica suele ser de unos pocos dólares al mes).'
  }
];

export default function FAQAccordion({ items = faqData }) {
  const [openId, setOpenId] = useState(items[0]?.id || null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={styles.accordionList}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`${styles.accordionItem} ${isOpen ? styles.itemOpen : ''}`}
          >
            <button
              type="button"
              className={styles.questionBtn}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
            >
              <span className={styles.questionText}>{item.question}</span>
              <span className={`${styles.iconWrap} ${isOpen ? styles.iconRotated : ''}`}>
                <ChevronDown size={20} />
              </span>
            </button>
            {isOpen && (
              <div className={styles.answerWrap}>
                <p className={styles.answerText}>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
