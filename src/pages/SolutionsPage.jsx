import React, { useEffect } from 'react';
import { Calculator, MessageCircle, CalendarCheck, Filter, FileText, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import SolutionCard from '../components/ui/SolutionCard';
import SectionCTA from '../components/ui/SectionCTA';
import styles from './SolutionsPage.module.css';

export default function SolutionsPage() {
  useEffect(() => {
    document.title = "Soluciones de Automatización — Automatia | Cotizaciones, WhatsApp y Procesos para PyMEs";
  }, []);

  const solutions = [
    {
      number: "1",
      icon: Calculator,
      title: "Cotizaciones automáticas y presupuestos",
      description: "Convierte solicitudes de presupuesto en cotizaciones preparadas para revisión sin empezar desde cero cada vez. El sistema extrae medidas, consulta listas de precios vigentes y calcula totales.",
      exampleTag: "Ejemplo: Carpintería / Taller",
      visualExample: (
        <div className={styles.exampleMiniFlow}>
          <div className={styles.miniMessage}>
            <span className={styles.miniSender}>Cliente:</span>
            <span className={styles.miniText}>"Cotización para 3 puertas placa de 0.80m"</span>
          </div>
          <div className={styles.miniOutput}>
            <span className={styles.miniBadge}>Borrador listo</span>
            <span className={styles.miniDetail}>3x Puerta Placa Cedro = $210.000 (Pendiente de validar)</span>
          </div>
        </div>
      )
    },
    {
      number: "2",
      icon: MessageCircle,
      title: "Atención comercial por WhatsApp",
      description: "Responde preguntas frecuentes sin que alguien tenga que contestar cada mensaje manualmente. Aclara zonas de cobertura, medios de pago, garantías y políticas de entrega las 24 horas.",
      exampleTag: "Ejemplo: Comercio / Servicios",
      visualExample: (
        <div className={styles.exampleMiniFlow}>
          <div className={styles.miniMessage}>
            <span className={styles.miniSender}>Cliente:</span>
            <span className={styles.miniText}>"¿Hacen envíos a zona norte y qué demora tienen?"</span>
          </div>
          <div className={styles.miniOutput}>
            <span className={styles.miniBadge}>Respuesta en 3 seg</span>
            <span className={styles.miniDetail}>"Sí, entregamos los días martes y jueves sin costo en..."</span>
          </div>
        </div>
      )
    },
    {
      number: "3",
      icon: CalendarCheck,
      title: "Agendamiento y coordinación de citas",
      description: "Gestiona consultas y solicitudes de citas de forma más organizada. Permite que pacientes o clientes soliciten turnos o visitas técnicas verificando disponibilidad real en tu calendario.",
      exampleTag: "Ejemplo: Clínicas / Instaladores",
      visualExample: (
        <div className={styles.exampleMiniFlow}>
          <div className={styles.miniMessage}>
            <span className={styles.miniSender}>Paciente:</span>
            <span className={styles.miniText}>"¿Turno disponible con la Dra. López este jueves?"</span>
          </div>
          <div className={styles.miniOutput}>
            <span className={styles.miniBadge}>Disponibilidad</span>
            <span className={styles.miniDetail}>"Tenemos libre a las 15:30 o 17:00 hs. ¿Cuál prefieres?"</span>
          </div>
        </div>
      )
    },
    {
      number: "4",
      icon: Filter,
      title: "Precalificación de clientes potenciales",
      description: "Recopila información clave de los prospectos antes de que lleguen al equipo comercial. Conoce presupuesto, urgencia y requisitos para que tus vendedores hablen solo con clientes listos.",
      exampleTag: "Ejemplo: Inmobiliaria / B2B",
      visualExample: (
        <div className={styles.exampleMiniFlow}>
          <div className={styles.miniMessage}>
            <span className={styles.miniSender}>Prospecto:</span>
            <span className={styles.miniText}>"Busco alquiler comercial en el centro"</span>
          </div>
          <div className={styles.miniOutput}>
            <span className={styles.miniBadge}>Ficha del cliente</span>
            <span className={styles.miniDetail}>Presupuesto: $800k · Rubro: Gastronomía · Urgencia: 30 días</span>
          </div>
        </div>
      )
    },
    {
      number: "5",
      icon: FileText,
      title: "Generación de documentos y fichas técnicas",
      description: "Genera documentos profesionales a partir de la información disponible. Emite fichas técnicas, confirmaciones de reserva, presupuestos en PDF y resúmenes de servicio con el formato de tu empresa.",
      exampleTag: "Ejemplo: Empresas de manufactura",
      visualExample: (
        <div className={styles.exampleMiniFlow}>
          <div className={styles.miniMessage}>
            <span className={styles.miniSender}>Sistema:</span>
            <span className={styles.miniText}>Compilando especificaciones de instalación...</span>
          </div>
          <div className={styles.miniOutput}>
            <span className={styles.miniBadge}>Archivo generado</span>
            <span className={styles.miniDetail}>Ficha_Tecnica_Obra_441.pdf (Descarga directa)</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={`section-hero ${styles.heroSection}`}>
        <div className={`container ${styles.headerContainer}`}>
          <span className="eyebrow">ÁREAS DE IMPACTO DIRECTO</span>
          <h1 className={styles.mainTitle}>
            Automatiza las tareas que más tiempo le quitan a tu equipo.
          </h1>
          <p className={styles.mainSubtitle}>
            Diseñamos módulos que se conectan directamente con tus herramientas actuales. Puedes implementar un único proceso o combinarlos según las necesidades de tu empresa.
          </p>
        </div>
      </section>

      {/* Grid de Soluciones */}
      <section className={`section ${styles.solutionsSection}`}>
        <div className="container">
          <div className={styles.solutionsGrid}>
            {solutions.map((item) => (
              <SolutionCard
                key={item.number}
                number={item.number}
                icon={item.icon}
                title={item.title}
                description={item.description}
                exampleTag={item.exampleTag}
                visualExample={item.visualExample}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciador: Tecnología invisible */}
      <section className={`section section-secondary ${styles.techPhilosophySection}`}>
        <div className="container">
          <div className={styles.philosophyCard}>
            <div className={styles.philosophyHeader}>
              <span className="eyebrow eyebrow-sage">TECNOLOGÍA EN SEGUNDO PLANO</span>
              <h2 className={styles.philosophyTitle}>No necesitas saber de IA para aprovecharla en tu negocio.</h2>
            </div>
            <p className={styles.philosophyText}>
              No te hablaremos de arquitecturas complejas ni te obligaremos a usar herramientas complicadas. Tu trabajo es dirigir tu empresa; el nuestro es asegurarnos de que los mensajes se respondan a tiempo, las cotizaciones salgan ordenadas y tu equipo dedique sus horas a tareas de verdadero valor humano.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SectionCTA />
    </div>
  );
}
