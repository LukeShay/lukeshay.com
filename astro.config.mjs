import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		sitemap({
			customPages: [
				"https://www.lukeshay.com/",
				"https://www.lukeshay.com/projects/",
				"https://www.lukeshay.com/contact/",
			],
		}),
	],
	output: "server",
	adapter: cloudflare({ mode: "directory" }),
});
