export const homeContent = {
  hero: {
    eyebrow: "Robótica colaborativa · móvil · tradicional",
    title: ["Automatizamos", "tu industria", "de principio a fin."],
    body: "Robotplus integra robótica colaborativa, logística y tradicional, con consultoría, formación e I+D+I. Automatización al alcance de empresas de todos los tamaños y sectores.",
    action: "Solicitar información",
  },
  marquee: [
    "Cobots",
    "AMR · MiR",
    "Yamaha",
    "Consultoría",
    "Formación",
    "I+D+I",
    "Integración",
    "Visión artificial",
    "Pick & Place",
    "Logística interna",
  ],
  concept: {
    eyebrow: "01 — Cómo trabajamos",
    heading: ["Te acompañamos", "en todo el proceso,", "del diseño a la integración."],
    body: [
      "No vendemos un robot: diseñamos una solución. Analizamos tu proceso, proponemos la tecnología adecuada —colaborativa, móvil o tradicional— y la integramos en tu línea con el menor impacto posible.",
      "Después seguimos contigo: formamos a tu equipo, ajustamos la célula y evolucionamos la instalación con I+D+I para que la automatización siga dando resultados año tras año.",
    ],
    caption: "Fig. 01 — Célula robotizada Robotplus",
    quote: "La automatización no sustituye a las personas: las potencia.",
    quoteByline: "Robotplus",
  },
  services: {
    eyebrow: "02 — Servicios",
    heading: ["Soluciones de robótica", "de principio a fin."],
    note: "Seis áreas de servicio que cubren todo el ciclo: análisis y consultoría, diseño, integración, formación e innovación continua.",
    caption: "Áreas de servicio",
    items: [
      {
        number: "I",
        title: "Robótica colaborativa",
        accent: "sin barreras",
        body: "Cobots fáciles de usar y desplegar que comparten espacio con las personas y abren la automatización a empresas de todos los tamaños.",
        tag: "Cobots",
      },
      {
        number: "II",
        title: "Robótica logística",
        accent: "en movimiento",
        body: "AMRs (MiR) que asumen el transporte interno y las tareas más monótonas, liberando a tu equipo para trabajos de mayor valor.",
        tag: "AMR · MiR",
      },
      {
        number: "III",
        title: "Robótica tradicional",
        accent: "de alto rendimiento",
        body: "Robots industriales Yamaha y cartesianos para procesos de precisión, alta cadencia y soluciones integrales.",
        tag: "Yamaha",
      },
      {
        number: "IV",
        title: "Consultoría",
        accent: "a tu medida",
        body: "Analizamos tus procesos y diseñamos la solución de automatización óptima para tus necesidades y tu retorno de inversión.",
        tag: "Estrategia",
      },
      {
        number: "V",
        title: "Formación",
        accent: "para tu equipo",
        body: "Capacitamos a tus equipos para operar y aprovechar al máximo la robótica instalada con autonomía y seguridad.",
        tag: "Capacitación",
      },
      {
        number: "VI",
        title: "I+D+I",
        accent: "",
        body: "Investigación, desarrollo e innovación continua para mantener tu industria a la vanguardia.",
        tag: "Innovación",
      },
    ],
  },
  about: {
    eyebrow: "03 — Robotplus",
    heading: {
      line1: "Robotplus, S.L.",
      accent: "Potenciando",
      rest: "la industria.",
    },
    quote:
      "Integramos robótica colaborativa, móvil y tradicional junto a partners líderes del sector para hacer la automatización accesible a cualquier empresa.",
    facts: [
      { value: "6", text: "áreas de servicio: colaborativa, logística, tradicional, consultoría, formación e I+D+I." },
      { value: "4", text: "sedes en Madrid, Girona, Badalona y Pontevedra." },
      { value: "4", text: "sectores clave: alimentación, metalurgia, farma y química, y automoción." },
      { value: "2", text: "partners de referencia: MiR en robótica móvil y Yamaha en robótica industrial." },
    ],
  },
  sectors: {
    eyebrow: "04 — Sectores",
    heading: {
      lead: "Soluciones para",
      accent: "tu sector,",
      rest: "diseñadas a medida.",
    },
    items: [
      {
        icon: "🍎",
        title: "Alimentación",
        body: "Envasado, paletizado y manipulación con la higiene y la trazabilidad que exige el sector.",
      },
      {
        icon: "⚙️",
        title: "Metalurgia",
        body: "Carga y descarga de máquina, soldadura y manipulación de piezas pesadas con seguridad.",
      },
      {
        icon: "⚗️",
        title: "Farma y Química",
        body: "Procesos limpios, dosificación y manipulación segura en entornos regulados.",
      },
      {
        icon: "🚗",
        title: "Automoción",
        body: "Alta cadencia, precisión y repetibilidad para cadenas de producción exigentes.",
      },
    ],
  },
  contact: {
    eyebrow: "05 — Contacto",
    heading: ["Cuéntanos tu reto.", "Te ayudamos", "a automatizarlo."],
    body: "Analizamos tu caso sin compromiso y te proponemos la solución de robótica que mejor encaja con tu proceso, tus plazos y tu presupuesto.",
    formTitle: "Solicitar información",
    confirmation: "Te respondemos personalmente en menos de 24 h laborables.",
  },
  footer: {
    tagline: "Robótica colaborativa, móvil y tradicional para una industria más competitiva.",
    signal: "Empowering Industry",
  },
} as const;

export type HomeContent = typeof homeContent;
