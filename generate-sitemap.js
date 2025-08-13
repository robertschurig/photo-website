const fs = require('fs');
const path = require('path');

// --- CONFIGURATION ---

// Base domain (no trailing slash)
const BASE_URL = 'https://robertschurig.de';

// List of site pages
const pages = [
  { path: '/', lastmod: '2025-08-13', changefreq: 'monthly', priority: 1.0 },
  { path: '/about', lastmod: '2025-08-01', changefreq: 'yearly', priority: 0.8 },
  { path: '/projects', lastmod: '2025-08-01', changefreq: 'monthly', priority: 0.7 },
  // Add more pages as needed
];

// --- SITEMAP GENERATION ---

const sitemapEntries = pages.map(page => `
  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

// --- WRITE TO FILE ---

const outputPath = path.join(__dirname, 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap.trim());
console.log(`✅ Sitemap written to ${outputPath}`);
