import React, { useState } from 'react';
import { CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';
import styles from './AuditForm.module.css';

export default function AuditForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    tipoNegocio: '',
    objetivos: [],
    contacto: '',
    notas: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const opcionesAutomatizacion = [
    { id: 'whatsapp', label: 'Responder WhatsApp y preguntas frecuentes' },
    { id: 'cotizaciones', label: 'Preparar cotizaciones y presupuestos' },
    { id: 'agendar', label: 'Agendar citas y consultas de disponibilidad' },
    { id: 'filtrar', label: 'Filtrar y precalificar clientes' },
    { id: 'otro', label: 'Otro proceso repetitivo' }
  ];

  const handleCheckboxChange = (id) => {
    setFormData((prev) => {
      const exists = prev.objetivos.includes(id);
      return {
        ...prev,
        objetivos: exists
          ? prev.objetivos.filter((item) => item !== id)
          : [...prev.objetivos, id]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulación de envío fluido
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIconBox}>
          <CheckCircle2 size={44} className={styles.successIcon} />
        </div>
        <h3 className={styles.successTitle}>¡Solicitud recibida correctamente!</h3>
        <p className={styles.successText}>
          Gracias <strong>{formData.nombre}</strong>. Nos pondremos en contacto contigo a través de <strong>{formData.contacto}</strong> para coordinar el horario más cómodo para tu llamada de 20 minutos.
        </p>

        <div className={styles.nextStepsCard}>
          <h4 className={styles.nextStepsTitle}>¿Qué pasará en la llamada?</h4>
          <ul className={styles.nextStepsList}>
            <li><strong>01.</strong> Revisamos tus consultas actuales en WhatsApp o correo.</li>
            <li><strong>02.</strong> Te decimos con total honestidad qué tareas conviene automatizar y cuáles no.</li>
            <li><strong>03.</strong> Te mostramos un ejemplo de cómo quedaría la solución para tu tipo de negocio.</li>
          </ul>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              nombre: '',
              empresa: '',
              tipoNegocio: '',
              objetivos: [],
              contacto: '',
              notas: ''
            });
          }}
          className={styles.resetBtn}
        >
          Enviar otra solicitud o corregir datos
        </button>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Nombre y Empresa */}
        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label htmlFor="nombre" className={styles.label}>
              Nombre y Apellido <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              placeholder="Ej. Carlos Silva"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="empresa" className={styles.label}>
              Nombre de tu empresa o negocio <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              required
              placeholder="Ej. Aluminios Silva"
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              className={styles.input}
            />
          </div>
        </div>

        {/* Tipo de negocio */}
        <div className={styles.fieldGroup}>
          <label htmlFor="tipoNegocio" className={styles.label}>
            Tipo de negocio / Rubro <span className={styles.required}>*</span>
          </label>
          <select
            id="tipoNegocio"
            name="tipoNegocio"
            required
            value={formData.tipoNegocio}
            onChange={(e) => setFormData({ ...formData, tipoNegocio: e.target.value })}
            className={styles.select}
          >
            <option value="">Selecciona tu rubro...</option>
            <option value="manufactura">Taller, Carpintería o Manufactura</option>
            <option value="instalaciones">Instalador o Mantenimiento técnico</option>
            <option value="salud">Clínica, Centro de estética o Salud</option>
            <option value="inmobiliaria">Agencia Inmobiliaria o Desarrollos</option>
            <option value="servicios">Servicios profesionales o Consultoría</option>
            <option value="comercio">Comercio minorista / Distribuidora</option>
            <option value="otro">Otro tipo de negocio</option>
          </select>
        </div>

        {/* Qué quieres automatizar (Checkboxes) */}
        <div className={styles.fieldGroup}>
          <span className={styles.label}>
            ¿Qué tareas te gustaría automatizar o agilizar?
          </span>
          <span className={styles.sublabel}>
            Selecciona las opciones que aplican a tu día a día:
          </span>
          <div className={styles.checkboxGrid}>
            {opcionesAutomatizacion.map((opcion) => {
              const isChecked = formData.objetivos.includes(opcion.id);
              return (
                <label
                  key={opcion.id}
                  className={`${styles.checkboxCard} ${isChecked ? styles.checkboxCardActive : ''}`}
                >
                  <input
                    type="checkbox"
                    name="objetivos"
                    value={opcion.id}
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(opcion.id)}
                    className={styles.hiddenCheckbox}
                  />
                  <div className={`${styles.customCheck} ${isChecked ? styles.customCheckChecked : ''}`}>
                    {isChecked && <CheckCircle2 size={15} />}
                  </div>
                  <span className={styles.checkboxLabelText}>{opcion.label}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Contacto WhatsApp o Email */}
        <div className={styles.fieldGroup}>
          <label htmlFor="contacto" className={styles.label}>
            Tu WhatsApp o Correo electrónico <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="contacto"
            name="contacto"
            required
            placeholder="Ej. +54 9 11 4455-6677 o carlos@aluminiossilva.com"
            value={formData.contacto}
            onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
            className={styles.input}
          />
          <span className={styles.inputHint}>
            Usaremos este canal únicamente para coordinar la hora de la videollamada o llamada breve.
          </span>
        </div>

        {/* Botón submit */}
        <div className={styles.actionArea}>
          <button
            type="submit"
            disabled={loading}
            className={styles.submitBtn}
          >
            <span>{loading ? 'Procesando...' : 'Solicitar mi auditoría gratuita'}</span>
            <ArrowRight size={18} />
          </button>

          <p className={styles.microcopy}>
            Sin compromiso. Primero entendemos tu negocio; después te mostramos qué tiene sentido automatizar.
          </p>
        </div>
      </form>
    </div>
  );
}
