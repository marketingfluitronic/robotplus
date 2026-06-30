import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// GitHub Pages project site: https://marketingfluitronic.github.io/robotplus
export default defineConfig({
  site: "https://marketingfluitronic.github.io",
  base: "/robotplus",
  trailingSlash: "never",
  integrations: [sitemap()],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
