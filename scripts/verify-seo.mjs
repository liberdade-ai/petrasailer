import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const siteUrl = "https://petrasailer.com";
const publicRoutes = [
  "/",
  "/ueber-mich/",
  "/klarheitssitzung/",
  "/wirklich-deins/",
  "/arbeite-mit-mir/",
  "/kontakt/",
  "/kennenlerngespraech/",
];
const noIndexRoutes = ["/danke-klarheitssitzung/", "/danke-kennenlerngespraech/"];
const socialImages = {
  "/": `${siteUrl}/home-og.png`,
};
const out = resolve("out");
const failures = [];

function fail(message) {
  failures.push(message);
}

function outputFile(route) {
  return route === "/" ? resolve(out, "index.html") : resolve(out, route.slice(1), "index.html");
}

function readOutput(route) {
  const file = outputFile(route);
  if (!existsSync(file)) {
    fail(`${route}: Ausgabedatei fehlt`);
    return "";
  }
  return readFileSync(file, "utf8");
}

function count(html, expression) {
  return [...html.matchAll(expression)].length;
}

function tagValue(html, attribute, value) {
  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = html.match(new RegExp(`<meta[^>]+${attribute}="${escaped}"[^>]+content="([^"]*)"[^>]*>`));
  return match?.[1];
}

function validateJsonLd(route, html) {
  const ids = new Set();
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (scripts.length === 0) {
    fail(`${route}: JSON-LD fehlt`);
    return;
  }

  for (const [, raw] of scripts) {
    try {
      const data = JSON.parse(raw);
      if (data["@context"] !== "https://schema.org") {
        fail(`${route}: JSON-LD hat keinen Schema.org-Kontext`);
      }
      const graph = data["@graph"] ?? [data];
      for (const item of graph) {
        if (item["@id"]) {
          if (ids.has(item["@id"])) fail(`${route}: doppelte JSON-LD-ID ${item["@id"]}`);
          ids.add(item["@id"]);
        }
      }
    } catch {
      fail(`${route}: ungültiges JSON-LD`);
    }
  }
}

for (const route of publicRoutes) {
  const html = readOutput(route);
  if (!html) continue;
  const canonical = `${siteUrl}${route}`;
  const socialImage = socialImages[route] ?? `${siteUrl}/og.png`;

  if (count(html, /<title>/g) !== 1) fail(`${route}: erwartet genau einen Titel`);
  if (count(html, /<meta name="description"/g) !== 1) fail(`${route}: erwartet genau eine Beschreibung`);
  if (count(html, /<link rel="canonical"/g) !== 1) fail(`${route}: erwartet genau einen Canonical-Link`);
  if (!html.includes(`<link rel="canonical" href="${canonical}"`)) fail(`${route}: Canonical stimmt nicht`);
  if (tagValue(html, "property", "og:url") !== canonical) fail(`${route}: og:url stimmt nicht`);
  if (count(html, /<meta property="og:title"/g) !== 1) fail(`${route}: og:title fehlt oder ist doppelt`);
  if (count(html, /<meta property="og:description"/g) !== 1) fail(`${route}: og:description fehlt oder ist doppelt`);
  if (tagValue(html, "property", "og:image") !== socialImage) fail(`${route}: og:image stimmt nicht`);
  if (count(html, /<meta name="twitter:card"/g) !== 1) fail(`${route}: Twitter-Card fehlt oder ist doppelt`);
  if (tagValue(html, "name", "twitter:image") !== socialImage) fail(`${route}: Twitter-Bild stimmt nicht`);
  if (!html.includes("<main")) fail(`${route}: crawlbarer Hauptinhalt fehlt`);
  if (count(html, /<h1(?:\s|>)/g) !== 1) fail(`${route}: erwartet genau eine H1`);
  if (html.includes('name="robots" content="noindex')) fail(`${route}: darf nicht auf noindex stehen`);
  if (/<(?:a|link)\b[^>]+href="\/(?:ueber-mich|klarheitssitzung|wirklich-deins|kontakt|arbeite-mit-mir|kennenlerngespraech)"/.test(html)) {
    fail(`${route}: enthält einen nicht-kanonischen internen Link ohne Slash`);
  }
  validateJsonLd(route, html);
}

for (const route of noIndexRoutes) {
  const html = readOutput(route);
  if (!html.includes('name="robots" content="noindex, nofollow"')) fail(`${route}: noindex, nofollow fehlt`);
}

const notFound = resolve(out, "404.html");
if (!existsSync(notFound)) fail("404.html fehlt");
else {
  const html = readFileSync(notFound, "utf8");
  if (count(html, /<meta name="robots"[^>]+noindex/g) !== 1) fail("404: noindex muss genau einmal vorhanden sein");
}

const robots = readFileSync(resolve(out, "robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) fail("robots.txt verweist nicht auf die Sitemap");
if (!robots.includes("Disallow: /danke-klarheitssitzung/")) fail("robots.txt sperrt die Klarheitssitzung-Dankeseite nicht");
if (!robots.includes("Disallow: /danke-kennenlerngespraech/")) fail("robots.txt sperrt die Kennenlerngespräch-Dankeseite nicht");

const sitemap = readFileSync(resolve(out, "sitemap.xml"), "utf8");
for (const route of publicRoutes) {
  if (!sitemap.includes(`<loc>${siteUrl}${route}</loc>`)) fail(`Sitemap: ${route} fehlt`);
}
for (const route of noIndexRoutes) {
  if (sitemap.includes(route)) fail(`Sitemap: noindex-Route ${route} darf nicht enthalten sein`);
}

const redirects = readFileSync(resolve("netlify.toml"), "utf8");
for (const route of publicRoutes.slice(1)) {
  const withoutSlash = route.slice(0, -1);
  if (redirects.includes(`from = "${withoutSlash}"\n  to = "${route}"`)) {
    fail(`Weiterleitung für ${withoutSlash} erzeugt eine Slash-Redirect-Schleife`);
  }
}
if (!redirects.includes('from = "/index.html"')) fail("Weiterleitung für /index.html fehlt");
if (!redirects.includes('from = "/:route/index.html"')) fail("Weiterleitung für verschachtelte index.html-Dateien fehlt");
if (!redirects.includes('from = "http://petrasailer.com/*"')) fail("HTTPS-Weiterleitung für die Hauptdomain fehlt");
if (!redirects.includes('from = "https://www.petrasailer.com/*"')) fail("www-Weiterleitung fehlt");

if (failures.length > 0) {
  console.error("SEO-Prüfung fehlgeschlagen:");
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`SEO-Prüfung erfolgreich: ${publicRoutes.length} indexierbare Routen, ${noIndexRoutes.length} noindex-Routen und die 404-Seite validiert.`);
