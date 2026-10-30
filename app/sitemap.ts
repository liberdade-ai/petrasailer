import type { MetadataRoute } from "next";
import { absoluteUrl } from "./seo";

export const dynamic = "force-static";

const publicRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/ueber-mich/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/klarheitssitzung/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/kontakt/", changeFrequency: "yearly", priority: 0.7 },
  { path: "/kennenlerngespraech/klarheitssitzung/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/kennenlerngespraech/wirklich-deins/", changeFrequency: "monthly", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency,
    priority,
  }));
}
