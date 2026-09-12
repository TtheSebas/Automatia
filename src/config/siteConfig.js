// Configuración centralizada de Agentico

export const siteConfig = {
  name: "Agentico",
  tagline: "Sistema de Cotizaciones y Proformas Automáticas en PDF 24/7",
  email: "gabrielmesias89@gmail.com",
  location: "Ambato / Cobertura a todo Ecuador y LatAm (Remoto)",
  
  // Número de WhatsApp oficial en formato internacional (Ecuador +593)
  whatsappNumber: "593995795486",
  whatsappDisplay: "+593 99 579 5486",
  whatsappLocalDisplay: "0995795486",
  
  whatsappDefaultMessage: "Hola Agentico, vi su sistema de cotizaciones y me gustaria ver una demostracion para mi negocio",

  // Video demostrativo en calidad nativa Full HD 1080p (FastStart optimizado)
  demoVideoUrl: "/demo-agentico-1080p.mp4",
  demoVideoDriveEmbedUrl: "https://drive.google.com/file/d/16Eg3_cqSMnvcRl33IpAyJm2drnv4iB5N/preview",
  demoVideoDirectUrl: "https://drive.google.com/file/d/16Eg3_cqSMnvcRl33IpAyJm2drnv4iB5N/view?usp=sharing",

  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappDefaultMessage)}`;
  },

  getCustomWhatsappUrl(message) {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message || this.whatsappDefaultMessage)}`;
  }
};
