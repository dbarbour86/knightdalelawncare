import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

const isProductionIndexingAllowed = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.site.baseUrl),
  title: {
    default: "Knightdale Lawn Care | Connect with Trusted Local Lawn Services",
    template: "%s | Knightdale Lawn Care",
  },
  description:
    "Request reliable lawn mowing, edging, seasonal yard cleanups, and pine straw installation from independent local lawn care specialists in Knightdale, Wendell, and Zebulon, NC.",
  keywords: [
    "Knightdale lawn care",
    "lawn mowing Knightdale NC",
    "Wendell NC lawn care",
    "Zebulon lawn service",
    "yard cleanup eastern Wake County",
    "pine straw installation Knightdale",
    "lawn care quotes Wendell Falls",
  ],
  authors: [{ name: SITE_CONFIG.site.name }],
  creator: SITE_CONFIG.site.name,
  publisher: SITE_CONFIG.site.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_CONFIG.site.baseUrl,
  },
  openGraph: {
    title: "Knightdale Lawn Care | Local Lawn Care Quotes in Eastern Wake County",
    description:
      "Find dependable local lawn mowing, seasonal yard cleanups, and pine straw installation in Knightdale, Wendell, and Zebulon, NC.",
    url: SITE_CONFIG.site.baseUrl,
    siteName: SITE_CONFIG.site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-lawn.jpg",
        width: 1200,
        height: 675,
        alt: "Beautifully manicured residential lawn in Eastern Wake County, NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knightdale Lawn Care | Quotes in Knightdale, Wendell & Zebulon, NC",
    description:
      "Connect with vetted, independent lawn care specialists for routine mowing and seasonal cleanups in Eastern Wake County.",
    images: ["/images/hero-lawn.jpg"],
  },
  robots: isProductionIndexingAllowed
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
      },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-[#fbfbfa] text-[#111827] antialiased selection:bg-[#d8f3dc] selection:text-[#143823]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
