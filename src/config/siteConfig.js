// Configuración centralizada de Automatia

export const siteConfig = {
  name: "Automatia",
  tagline: "Sistema de Cotizaciones y Proformas Automáticas en PDF 24/7",
  email: "gabrielmesias89@gmail.com",
  location: "Ambato / Cobertura a todo Ecuador y LatAm (Remoto)",
  
  // Número de WhatsApp oficial en formato internacional (Ecuador +593)
  whatsappNumber: "593959048059",
  whatsappDisplay: "+593 95 904 8059",
  whatsappLocalDisplay: "0959048059",
  
  whatsappDefaultMessage: "Hola Automatia, vi su sistema de cotizaciones y me gustaria ver una demostracion para mi negocio",

  // Video demostrativo de n8n (Loom o YouTube)
  demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",

  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappDefaultMessage)}`;
  },

  getCustomWhatsappUrl(message) {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message || this.whatsappDefaultMessage)}`;
  }
};
