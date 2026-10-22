import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site.config";

export default function robots(): MetadataRoute.Robots {
  const isProductionIndexingAllowed = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

  if (!isProductionIndexingAllowed) {
    // Keep local, testing, and staging environments strictly noindex
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/scratch/"],
    },
    sitemap: `${SITE_CONFIG.site.baseUrl}/sitemap.xml`,
  };
}
