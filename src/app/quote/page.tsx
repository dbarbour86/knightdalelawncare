import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { QuoteSection } from "@/components/QuoteSection";

export const metadata: Metadata = {
  title: "Request a Free Lawn Care Quote | Knightdale, Wendell & Zebulon NC",
  description:
    "Request an estimate for lawn mowing, seasonal yard cleanups, edging, and pine straw in Knightdale, Wendell, and Zebulon, NC. Free quote request with zero obligation.",
  alternates: {
    canonical: "https://knightdalelawncare.com/quote",
  },
};

export default function QuotePage() {
  return (
    <div className="py-8 sm:py-12 bg-[#fbfbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs text-[#6b7280]">
            <li>
              <Link href="/" className="hover:text-[#1b4332]">Home</Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#111827]">Request a Quote</li>
          </ol>
        </nav>
      </div>

      <Suspense fallback={<div className="py-24 text-center text-sm text-[#6b7280]">Loading quote request area...</div>}>
        <QuoteSection />
      </Suspense>
    </div>
  );
}
