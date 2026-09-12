// Configuración centralizada de Agentico

export const siteConfig = {
  name: "Agentico",
  tagline: "Sistema de Cotizaciones y Proformas Automáticas en PDF 24/7",
  email: "gabrielmesias89@gmail.com",
  location: "Ambato / Cobertura a todo Ecuador y LatAm (Remoto)",
  
  // Número de WhatsApp oficial en formato internacional (Ecuador +593)
  whatsappNumber: "593959048059",
  whatsappDisplay: "+593 95 904 8059",
  whatsappLocalDisplay: "0959048059",
  
  whatsappDefaultMessage: "Hola Agentico, vi su sistema de cotizaciones y me gustaria ver una demostracion para mi negocio",

  // Video demostrativo en calidad nativa Full HD 1080p (FastStart optimizado)
  demoVideoUrl: "/demo-agentico-1080p.mp4",
  demoVideoDriveEmbedUrl: "https://drive.google.com/file/d/1xAtm7LT-WtIsXqxt_nIR1PBv3ln-zQIZ/preview",
  demoVideoDirectUrl: "https://drive.google.com/file/d/1xAtm7LT-WtIsXqxt_nIR1PBv3ln-zQIZ/view?usp=sharing",

  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappDefaultMessage)}`;
  },

  getCustomWhatsappUrl(message) {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message || this.whatsappDefaultMessage)}`;
  }
};
