// Configuración centralizada de Automatia
// Puedes cambiar el número de WhatsApp o el enlace de video aquí fácilmente

export const siteConfig = {
  name: "Automatia",
  tagline: "Sistema de Cotizaciones y Proformas Automáticas en PDF 24/7",
  email: "contacto.automatia.ec@gmail.com",
  location: "Ambato / Cobertura a todo Ecuador y LatAm (Remoto)",
  
  // Número de WhatsApp oficial (deja el formato internacional sin + ni espacios)
  // Reemplaza con tu número real de WhatsApp Business (ej: 593987654321)
  whatsappNumber: "593987654321",
  
  whatsappDefaultMessage: "Hola Automatia, vi su sistema de cotizaciones y me gustaria ver una demostracion para mi negocio",

  // Video demostrativo de n8n (Loom o YouTube)
  // Puedes pegar cualquier URL de embed o video aquí
  demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazable con URL de Loom o demo real

  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappDefaultMessage)}`;
  },

  getCustomWhatsappUrl(message) {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message || this.whatsappDefaultMessage)}`;
  }
};
