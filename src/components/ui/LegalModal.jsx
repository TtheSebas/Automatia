import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import styles from './LegalModal.module.css';

export default function LegalModal({ isOpen, type, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isTerms = type === 'terms';

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.titleWithIcon}>
            {isTerms ? <FileText className={styles.headerIcon} size={22} /> : <Shield className={styles.headerIcon} size={22} />}
            <h3 className={styles.title}>
              {isTerms ? 'Términos de Servicio — Automatia' : 'Política de Privacidad — Automatia'}
            </h3>
          </div>
          <button type="button" onClick={onClose} className={styles.closeBtn} aria-label="Cerrar modal">
            <X size={20} />
          </button>
        </div>

        <div className={styles.content}>
          {isTerms ? (
            <>
              <p className={styles.lead}>
                Bienvenido a <strong>Automatia</strong>. Al contratar nuestros servicios de integración y generación automática de proformas, aceptas las siguientes condiciones:
              </p>
              <h4>1. Propiedad y Control de Datos</h4>
              <p>
                Tu catálogo, listas de precios, inventarios en Google Sheets y bases de datos de clientes son y seguirán siendo propiedad exclusiva de tu empresa. Automatia únicamente conecta los flujos de automatización para generar los documentos solicitados.
              </p>
              <h4>2. Garantía y Disponibilidad del Servicio</h4>
              <p>
                En los planes con mantenimiento activo, Automatia garantiza soporte técnico continuo y resolución prioritaria ante cualquier ajuste de APIs de terceros (WhatsApp Business, Google Workspace o servidores n8n).
              </p>
              <h4>3. Prueba Piloto sin Costo</h4>
              <p>
                El piloto de 3 días no genera obligación de compra ni requiere tarjeta de crédito. Si el sistema no cumple con tus expectativas de ahorro de tiempo, no se realiza ningún cobro.
              </p>
              <h4>4. Jurisdicción y Contacto</h4>
              <p>
                Servicios operados desde Ambato, Ecuador, con alcance y cobertura técnica para toda la región de América Latina. Dudas contractuales a <code>contacto.automatia.ec@gmail.com</code>.
              </p>
            </>
          ) : (
            <>
              <p className={styles.lead}>
                En <strong>Automatia</strong> nos tomamos con total seriedad la confidencialidad de la información comercial de nuestros clientes.
              </p>
              <h4>1. Información Recopilada</h4>
              <p>
                Únicamente accedemos a los campos necesarios para emitir proformas: códigos de producto, nombres, medidas, precios unitarios y tarifas de IVA. No comercializamos, cedemos ni compartimos datos con terceros.
              </p>
              <h4>2. Seguridad de Conexión</h4>
              <p>
                Las conexiones entre WhatsApp, Google Sheets y las herramientas de despacho se ejecutan mediante credenciales cifradas y accesos autorizados directamente por el titular de la cuenta empresarial.
              </p>
              <h4>3. Eliminación de Registros</h4>
              <p>
                En caso de culminar la relación comercial o tras una prueba piloto no continuada, los accesos temporales son revocados de inmediato previa notificación al cliente.
              </p>
              <h4>4. Contacto de Privacidad</h4>
              <p>
                Para solicitar la baja de datos o consultar sobre las medidas de seguridad, contáctanos en <code>contacto.automatia.ec@gmail.com</code>.
              </p>
            </>
          )}
        </div>

        <div className={styles.footer}>
          <button type="button" onClick={onClose} className={styles.confirmBtn}>
            Entendido y cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
