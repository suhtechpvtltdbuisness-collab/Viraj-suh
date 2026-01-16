// Dynamic sitemap generator for Next.js export mode
// This file can be used to generate sitemap programmatically

import { writeFileSync } from "fs";
import { join } from "path";

const DOMAIN = "https://virajjewellers.com";
const TODAY = new Date().toISOString().split("T")[0];

// Define all routes with their priorities and change frequencies
const routes = [
  // Main pages
  { loc: "/", changefreq: "daily", priority: 1.0 },
  { loc: "/about", changefreq: "weekly", priority: 0.8 },
  { loc: "/contact", changefreq: "weekly", priority: 0.8 },
  { loc: "/testimonials", changefreq: "weekly", priority: 0.7 },
  { loc: "/faq", changefreq: "monthly", priority: 0.7 },

  // High priority pages
  { loc: "/best-gold-buyer-lajpat-nagar", changefreq: "weekly", priority: 0.9 },
  { loc: "/gold-rates-today", changefreq: "daily", priority: 0.9 },

  // Services
  { loc: "/services/cash-for-gold", changefreq: "weekly", priority: 0.9 },
  {
    loc: "/services/sell-gold-lajpat-nagar",
    changefreq: "weekly",
    priority: 0.8,
  },
  { loc: "/services/gold-buyer-delhi", changefreq: "weekly", priority: 0.8 },
  { loc: "/services/instant-cash-silver", changefreq: "weekly", priority: 0.7 },
  { loc: "/services/diamond-buyers", changefreq: "weekly", priority: 0.7 },
  {
    loc: "/services/release-pledged-gold",
    changefreq: "weekly",
    priority: 0.7,
  },
  { loc: "/services/old-gold-exchange", changefreq: "weekly", priority: 0.7 },

  // Locations
  { loc: "/locations/lajpat-nagar", changefreq: "weekly", priority: 0.8 },
  { loc: "/locations/south-delhi", changefreq: "weekly", priority: 0.7 },

  // Blog
  { loc: "/blog", changefreq: "weekly", priority: 0.7 },
  {
    loc: "/blog/how-to-sell-gold-in-lajpat-nagar-howto",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    loc: "/blog/cash-for-gold-lajpat-nagar-delhi-guide",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    loc: "/blog/how-to-get-best-price-for-gold-in-delhi",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: "/blog/how-to-sell-old-gold-in-delhi",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: "/blog/how-to-choose-gold-buyer-in-delhi",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: "/blog/why-choose-lajpat-nagar-for-gold-selling",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: "/blog/gold-rate-per-gram-delhi-guide",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: "/blog/cash-for-gold-near-me-tips",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: "/blog/instant-cash-for-silver-delhi",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: "/blog/diamond-buyers-delhi-checklist",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: "/blog/release-pledged-gold-process",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: "/blog/avoid-common-mistakes-when-selling-gold",
    changefreq: "monthly",
    priority: 0.7,
  },

  // News
  { loc: "/News", changefreq: "weekly", priority: 0.6 },
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${routes
  .map(
    (route) => `  <url>
    <loc>${DOMAIN}${route.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n\n")}

</urlset>`;

  return sitemap;
}

// For manual generation - run with: node scripts/generate-sitemap.js
if (require.main === module) {
  const sitemap = generateSitemap();
  const publicPath = join(process.cwd(), "public", "sitemap.xml");
  writeFileSync(publicPath, sitemap, "utf-8");
  console.log("✅ Sitemap generated successfully at public/sitemap.xml");
  console.log(`📝 Total URLs: ${routes.length}`);
  console.log(`📅 Last modified: ${TODAY}`);
}

export { generateSitemap, routes };
