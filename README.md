# Robotplus

Web de **Robotplus, S.L.** — _Empowering Industry · by Fluitronic_.

Sitio construido con [Astro](https://astro.build) sobre la plantilla
[Ombra](https://github.com/andreialba/ombra) (MIT), adaptada a la identidad
de Robotplus: robótica colaborativa, móvil y tradicional.

## Estructura

```
robotplus/
├── astro.config.mjs        # Config Astro (site + base /robotplus)
├── src/
│   ├── config/
│   │   ├── site.ts         # Metadatos, navegación, contacto, sedes, partners
│   │   └── home.ts         # Contenido de la home (hero, servicios, sectores…)
│   ├── components/         # Nav, Footer, SeoHead, RobotMark
│   ├── layouts/BaseLayout.astro
│   ├── pages/index.astro   # Página principal
│   └── styles.css          # Estilos y paleta de marca
└── public/og.png           # Imagen para redes sociales
```

Casi todo el contenido se edita en `src/config/site.ts` y `src/config/home.ts`
sin tocar código.

## Desarrollo local

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev      # servidor de desarrollo (http://localhost:4321/robotplus)
```

Otros comandos:

```bash
npm run build    # compila el sitio en dist/
npm run preview  # sirve la versión compilada
npm run check    # comprobación de tipos de Astro
```

## Despliegue

Se publica en **GitHub Pages** mediante GitHub Actions
(`.github/workflows/deploy.yml`): cada push a `main` compila el sitio y lo
despliega. Requiere que en _Settings → Pages → Source_ esté seleccionado
**GitHub Actions**.

URL: https://marketingfluitronic.github.io/robotplus/

---
© 2026 ROBOTPLUS, S.L. Todos los derechos reservados.
