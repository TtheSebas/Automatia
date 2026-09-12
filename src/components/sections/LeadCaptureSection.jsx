import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, MessageCircle, Clock, Zap } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import styles from './LeadCaptureSection.module.css';

export default function LeadCaptureSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    whatsapp: '',
    rubro: 'Ferretería/Construcción'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Formatear mensaje para WhatsApp si el usuario desea saltar directo
    const waText = `Hola Agentico! Solicito la prueba piloto de 3 días sin costo.\n\n*Nombre:* ${formData.nombre}\n*Empresa:* ${formData.empresa}\n*WhatsApp:* ${formData.whatsapp}\n*Rubro:* ${formData.rubro}`;
    const directWaUrl = siteConfig.getCustomWhatsappUrl(waText);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Opcional: abrir WhatsApp en una nueva pestaña
      window.open(directWaUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contacto" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Text / Value Assurance */}
          <div className={styles.infoCol}>
            <span className="badge-tech badge-emerald">PRUEBA PILOTO DE 3 DÍAS</span>
            <h2 className={styles.heading}>
              Prueba el sistema con tus productos reales sin pagar un solo dólar
            </h2>
            <p className={styles.subtext}>
              Cargamos hasta 20 productos de tu inventario actual en una hoja de Google Sheets y configuramos el cotizador en 24 horas. Si después de 3 días no te ahorra tiempo real, no te cobramos nada.
            </p>

            <div className={styles.perksList}>
              <div className={styles.perk}>
                <div className={styles.perkIconBox}>
                  <Clock size={18} />
                </div>
                <div>
                  <strong>Activación en menos de 24 horas hábiles</strong>
                  <p>Coordinamos la conexión remota contigo o tu encargado de bodega.</p>
                </div>
              </div>

              <div className={styles.perk}>
                <div className={styles.perkIconBox}>
                  <Shield size={18} />
                </div>
                <div>
                  <strong>Tus listas de precios son 100% confidenciales</strong>
                  <p>Solo tu empresa y tu equipo tienen acceso a la cuenta de Google Sheets.</p>
                </div>
              </div>

              <div className={styles.perk}>
                <div className={styles.perkIconBox}>
                  <Zap size={18} />
                </div>
                <div>
                  <strong>Sin tarjeta de crédito ni compromisos</strong>
                  <p>Cero letras chicas. Tú decides si continuar con el plan comercial.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The 4-Field Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.successBox}>
                  <div className={styles.successIconCircle}>
                    <CheckCircle2 size={40} className={styles.successCheck} />
                  </div>
                  <h3 className={styles.successTitle}>¡Solicitud de Piloto Registrada!</h3>
                  <p className={styles.successMessage}>
                    Excelente, <strong>{formData.nombre}</strong>. Hemos recibido los datos de <strong>{formData.empresa}</strong>.
                  </p>
                  <p className={styles.successSub}>
                    Se abrió tu chat de WhatsApp para enviarnos la confirmación directa. Si no se abrió automáticamente, pulsa el botón a continuación:
                  </p>
                  <a
                    href={siteConfig.getCustomWhatsappUrl(`Hola Agentico, soy ${formData.nombre} de ${formData.empresa} (${formData.rubro}). Quiero coordinar la carga de mis 20 productos para el piloto de 3 días.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.waConfirmBtn}
                  >
                    <MessageCircle size={18} />
                    <span>Confirmar por WhatsApp ahora</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className={styles.backBtn}
                  >
                    Volver al formulario
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formTopText}>
                    <h3 className={styles.formTitle}>Comienza tu prueba de 3 días</h3>
                    <p className={styles.formDesc}>Solo necesitamos 4 datos básicos para preparar tu entorno:</p>
                  </div>

                  {/* 1. Nombre y Apellido */}
                  <div className={styles.field}>
                    <label htmlFor="nombre" className={styles.label}>
                      1. Nombre y Apellido <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      placeholder="Ej. Carlos Silva"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  {/* 2. Nombre del Negocio / Empresa */}
                  <div className={styles.field}>
                    <label htmlFor="empresa" className={styles.label}>
                      2. Nombre del Negocio / Empresa <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      required
                      placeholder="Ej. Distribuidora Santa Inés"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  {/* 3. WhatsApp de contacto */}
                  <div className={styles.field}>
                    <label htmlFor="whatsapp" className={styles.label}>
                      3. WhatsApp de Contacto <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      required
                      placeholder="Ej. 0959048059 o +593 95 904 8059"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className={styles.input}
                    />
                    <span className={styles.hint}>Te escribiremos a este número para coordinar la prueba.</span>
                  </div>

                  {/* 4. Tipo de productos que venden */}
                  <div className={styles.field}>
                    <label htmlFor="rubro" className={styles.label}>
                      4. Tipo de productos que venden <span className={styles.required}>*</span>
                    </label>
                    <select
                      id="rubro"
                      required
                      value={formData.rubro}
                      onChange={(e) => setFormData({ ...formData, rubro: e.target.value })}
                      className={styles.select}
                    >
                      <option value="Ferretería/Construcción">Ferretería / Materiales de Construcción</option>
                      <option value="Repuestos Automotrices">Repuestos Automotrices / Talleres</option>
                      <option value="Distribuidora/Mayorista">Distribuidora / Comercio Mayorista</option>
                      <option value="Otro">Otro rubro comercial</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={styles.submitBtn}
                  >
                    <span>{loading ? 'Preparando solicitud...' : 'Pedir mi prueba piloto sin costo'}</span>
                    <ArrowRight size={18} />
                  </button>

                  <p className={styles.formMicrocopy}>
                    Garantía Agentico: Sin cobros ocultos ni spam. Te responderemos en horario comercial.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
