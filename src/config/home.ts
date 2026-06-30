export const homeContent = {
  hero: {
    slides: [
      {
        eyebrow: "Robotplus",
        title: ["Robótica", "colaborativa"],
        body: "Cobots que trabajan mano a mano con tus operarios, sin vallas ni barreras, automatizando tareas repetitivas de forma flexible y segura.",
        action: "Más información",
        href: "#robotica-colaborativa",
        image: "colaborativa",
      },
      {
        eyebrow: "Robotplus",
        title: ["Robótica", "móvil"],
        body: "Robots diseñados para ser increíblemente versátiles, y añadirles módulos superiores puede hacerlos aún más útiles.",
        action: "Más información",
        href: "#robotica-logistica",
        image: "movil",
      },
    ],
  },
  servicesNav: {
    heading: "Nuestros servicios",
    items: [
      { icon: "🤝", label: "Robótica colaborativa", href: "#robotica-colaborativa" },
      { icon: "🚚", label: "Robótica móvil", href: "#robotica-logistica" },
      { icon: "🦾", label: "Robótica tradicional", href: "#robotica-tradicional" },
      { icon: "🎓", label: "Formación", href: "#contacto" },
      { icon: "🧭", label: "Consultoría", href: "#contacto" },
      { icon: "💡", label: "I+D+I", href: "#contacto" },
    ],
  },
  products: [
    {
      id: "robotica-colaborativa",
      title: "Robótica colaborativa",
      body: "La robótica colaborativa es una tecnología diseñada para trabajar mano a mano con operarios humanos de forma segura, sin necesidad de vallas ni barreras. Permite automatizar tareas repetitivas, exigentes o poco ergonómicas de manera flexible y eficiente, incluso en espacios reducidos. Gracias a su facilidad de uso y rápida implementación, abre la puerta a la automatización para empresas de todos los tamaños y sectores.",
      action: "Ver más",
      image: "cobot",
    },
    {
      id: "robotica-logistica",
      title: "Robótica logística",
      body: "Los AMRs de MiR son aptos para distintos flujos de trabajo de fabricantes pequeños y de tamaño medio y grandes centros de fabricación y distribución. Los robots MiR ayudarán a su empresa a optimizar su logística interna y a asumir las tareas más monótonas y largas, encargando a sus empleados trabajos de mayor valor.",
      action: "Ver más",
      image: "amr",
    },
    {
      id: "robotica-tradicional",
      title: "Robótica tradicional",
      body: "Robots cartesianos tradicionales de Yamaha. Ofrecemos una amplia gama de productos y accesorios de robótica para dar soluciones integrales.",
      action: "Ver más",
      image: "yamaha",
    },
  ],
  sectors: {
    heading: "Soluciones de robótica para su sector",
    items: [
      { icon: "🍎", title: "Alimentación" },
      { icon: "⚙️", title: "Mecanizado" },
      { icon: "⚗️", title: "Farma y Química" },
      { icon: "🚗", title: "Automoción" },
    ],
  },
  partners: {
    heading: "Partners",
    items: ["Universal Robots", "MiR", "DRIM Robotics", "Yamaha"],
  },
  contact: {
    heading: "Formulario de contacto",
    legal:
      "Responsable: ROBOTPLUS, S.L. Finalidad: resolución de consultas, prestación de la información requerida por el interesado y contacto con: los eventos, premios y/o ofertas. Legitimación: consentimiento del interesado. Destinatarios: no se cederán datos a terceros, salvo obligación legal. Derechos: acceder, rectificar, limitar y suprimir los datos, así como otros derechos, así como presentar una reclamación ante la autoridad nacional de control, como se explica en la información adicional. Información adicional: puede consultar la información adicional y detallada sobre Protección de Datos en nuestra «Política de Privacidad».",
    privacyLabel: "He leído y acepto la Política de Privacidad de ROBOTPLUS",
    action: "Enviar",
  },
  footer: {
    legalLinks: [
      { label: "Aviso legal", href: "#" },
      { label: "Política de privacidad", href: "#" },
      { label: "Política de cookies", href: "#" },
    ],
  },
} as const;

export type HomeContent = typeof homeContent;
