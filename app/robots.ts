import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/danke-klarheitssitzung/", "/danke-fuenferpaket/", "/danke-kennenlerngespraech/", "/danke-kennenlerngespraech-wirklich-deins/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
