#!/usr/bin/env -S deno run -A

import { globby } from "globby";

const BASE_URL = Deno.env.get("BASE_URL") ?? "https://www.lukeshay.com";

const paths = await globby([
  "routes/**/*.tsx",
  "!routes/**/_*.tsx",
  "!routes/**/[*.tsx",
]);

const urls = paths
  .map((path) =>
    `${BASE_URL}/${path.replace(/(routes\/|.tsx|index)/gu, "")}/`.replace(
      /\/\/$/u,
      "/",
    )
  )
  .map(
    (url) =>
      `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

await Deno.writeTextFile("./static/sitemap.xml", sitemap);

console.log("Generated static/sitemap.xml");
