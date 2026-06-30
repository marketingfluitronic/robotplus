export const siteConfig = {
  name: "Robotplus",
  legalName: "Robotplus, S.L.",
  title: "Robotplus — Empowering Industry",
  description:
    "Robotplus integra soluciones de robótica colaborativa, móvil y tradicional. Consultoría, formación e I+D+I para automatizar tu industria de principio a fin.",
  locale: "es_ES",
  defaultImage: "/og.png",
  tagline: "Empowering Industry · by Fluitronic",
  address: {
    street: "C/ Londres, 10 local C5",
    locality: "Alcalá de Henares",
    postalCode: "28805",
    region: "Madrid",
    country: "España",
  },
  phone: "(+34) 91 830 60 06",
  phoneHref: "+34918306006",
  email: "info@robotplus.es",
  nav: [
    { label: "Empresa", href: "#empresa" },
    { label: "Productos", href: "#servicios" },
    { label: "Soporte técnico", href: "#contacto" },
    { label: "Eventos", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contacto", href: "#contacto" },
  ],
  cta: { label: "Contacto", href: "#contacto" },
  contactForm: {
    formAction: "mailto:info@robotplus.es",
    method: "post",
    note: "Sustituye la acción mailto por tu endpoint de formulario o CRM cuando salga a producción.",
  },
  locations: [
    { city: "Alcalá de Henares", region: "Madrid", address: "C/ Londres, 10 local C5 · 28805" },
    { city: "Girona", region: "", address: "Ctra. Sta. Coloma, 82 2B · 17005" },
    { city: "Badalona", region: "", address: "C/ Holanda, 34 · 08917" },
    { city: "O Porriño", region: "Pontevedra", address: "Pol. Ind. A Granxa, Parc. 211 · 36475" },
  ],
  partners: ["MiR", "Yamaha"],
  effects: {
    reveal: true,
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
