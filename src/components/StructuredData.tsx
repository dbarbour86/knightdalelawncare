import React from "react";
import { SITE_CONFIG } from "@/config/site.config";

export function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_CONFIG.site.name,
    "url": SITE_CONFIG.site.baseUrl,
    "description": SITE_CONFIG.site.description,
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.site.name,
      "url": SITE_CONFIG.site.baseUrl,
      "email": SITE_CONFIG.contact.email,
    },
  };

  const servicePlatformSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Knightdale Lawn Care Quote Referral Service",
    "serviceType": "Lawn Care Referral & Quote Matching",
    "description":
      "Independent quote request platform connecting homeowners in Knightdale, Wendell, and Zebulon, NC with independent local lawn care specialists.",
    "provider": {
      "@type": "Organization",
      "name": SITE_CONFIG.site.name,
      "url": SITE_CONFIG.site.baseUrl,
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Knightdale",
        "sameAs": "https://en.wikipedia.org/wiki/Knightdale,_North_Carolina",
      },
      {
        "@type": "City",
        "name": "Wendell",
        "sameAs": "https://en.wikipedia.org/wiki/Wendell,_North_Carolina",
      },
      {
        "@type": "City",
        "name": "Zebulon",
        "sameAs": "https://en.wikipedia.org/wiki/Zebulon,_North_Carolina",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePlatformSchema) }}
      />
    </>
  );
}
