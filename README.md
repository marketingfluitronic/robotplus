# Robotplus

Landing page de **Robotplus, S.L.** — _Empowering Industry · by Fluitronic_.

Sitio web estático (HTML, CSS y JavaScript vanilla, sin dependencias ni proceso de build).

## Estructura

```
robotplus/
├── index.html    # Página principal
├── styles.css    # Estilos
└── script.js     # Parallax, scroll-spy y animaciones de revelado
```

## Desarrollo local

No hace falta instalar nada. Basta con abrir `index.html` en el navegador, o
servir la carpeta con un servidor estático para evitar restricciones de rutas:

```bash
# Con Python
python -m http.server 8000

# O con Node
npx serve .
```

Luego abre http://localhost:8000

## Despliegue

Al ser un sitio estático, se puede publicar tal cual en cualquier hosting
estático (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.) subiendo
los tres archivos.

---
© 2026 ROBOTPLUS, S.L. Todos los derechos reservados.
