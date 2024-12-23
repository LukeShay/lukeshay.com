import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	adapter: netlify(),
	integrations: [
		tailwind(),
		sitemap({
			changefreq: "monthly",
			priority: 0.7,
			lastmod: new Date("2024-12-22"),
		}),
	],
	output: "server",
	site: "https://www.lukeshay.com",
});
