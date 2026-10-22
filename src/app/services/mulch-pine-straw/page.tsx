import React, { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, ShieldAlert } from "lucide-react";
import { QuoteSection } from "@/components/QuoteSection";

export const metadata: Metadata = {
  title: "Pine Straw & Mulch Installation in Knightdale, Wendell & Zebulon NC",
  description:
    "Request North Carolina longleaf pine straw rolls and double-shredded hardwood mulch installation for garden beds in Knightdale, Wendell, and Zebulon.",
  alternates: {
    canonical: "https://knightdalelawncare.com/services/mulch-pine-straw",
  },
};

export default function MulchPineStrawPage() {
  return (
    <article className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#6b7280]">
            <li>
              <Link href="/" className="hover:text-[#1b4332]">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/#services" className="hover:text-[#1b4332]">Services</Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#111827]">Pine Straw & Mulch Installation</li>
          </ol>
        </nav>

        {/* Hero Section of Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#eef8f1] border border-[#d8f3dc] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1b4332]">
              <Layers className="w-3.5 h-3.5 text-[#2d6a4f]" />
              <span>Garden Bed Refresh Requests</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Pine Straw & Mulch Installation in Eastern Wake County
            </h1>

            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
              Nothing elevates curb appeal like fresh, clean bed borders. In Eastern North Carolina, longleaf pine straw and hardwood mulch protect plant roots from intense summer heat, retain soil moisture, and prevent weed growth. Request quotes from local specialists serving Knightdale, Wendell, and Zebulon.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="#quote" className="btn-primary text-sm">
                <span>Request Mulch / Straw Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/service-areas" className="btn-secondary text-sm">
                <span>View Towns Covered</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#e5e7eb]">
              <Image
                src="/images/pine-straw-mulch.jpg"
                alt="Fresh longleaf pine straw rolls and dark double-shredded hardwood mulch bordering brick foundation"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>

        {/* Deep Substantive Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Comparison: Pine Straw vs. Hardwood Mulch */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Choosing Between Pine Straw and Hardwood Mulch in North Carolina
            </h2>
            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              Both groundcovers thrive in the Triangle climate, each offering distinct aesthetic and practical advantages for your property:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3">
              <div className="bg-[#fbfbfa] p-6 rounded-xl border border-[#e5e7eb] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#b45309]">
                  Classic Carolina Character
                </span>
                <h3 className="text-lg font-bold text-[#111827]">
                  North Carolina Longleaf Pine Straw
                </h3>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  Longleaf pine needles interlock naturally, making them ideal for sloped yards and large wooded beds. They provide excellent acid-loving shrub support (like azaleas and camellias) and won't wash away easily during heavy summer thunderstorms.
                </p>
                <div className="text-xs text-[#2d6a4f] font-semibold">
                  Popular in Wendell Falls & wooded subdivisions
                </div>
              </div>

              <div className="bg-[#fbfbfa] p-6 rounded-xl border border-[#e5e7eb] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1b4332]">
                  Crisp Definition & Moisture Hold
                </span>
                <h3 className="text-lg font-bold text-[#111827]">
                  Double-Shredded Hardwood Mulch
                </h3>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  Dark brown or black double-shredded hardwood mulch breaks down slowly into rich organic compost. It tightly mats together to block weed seeds from reaching the soil and provides maximum contrast against green turf and bright foundation shrubs.
                </p>
                <div className="text-xs text-[#2d6a4f] font-semibold">
                  Standard depth: 2 to 3 inches
                </div>
              </div>
            </div>
          </section>

          {/* Proper Installation Elements */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Essential Steps for a Clean, Lasting Bed Installation
            </h2>
            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              Quality mulch and pine straw work requires proper prep work before the material is spread:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <li className="flex items-start gap-3 p-4 bg-[#f8faf7] rounded-xl border border-[#e2e8f0]">
                <CheckCircle2 className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="block text-[#111827]">Deep Trench Edging:</strong>
                  Cutting a 3–4 inch trench edge along sidewalks and turf boundaries to hold mulch in place.
                </div>
              </li>

              <li className="flex items-start gap-3 p-4 bg-[#f8faf7] rounded-xl border border-[#e2e8f0]">
                <CheckCircle2 className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="block text-[#111827]">Weed & Debris Clearing:</strong>
                  Hand-pulling aggressive weeds and raking out dead leaves before groundcover application.
                </div>
              </li>

              <li className="flex items-start gap-3 p-4 bg-[#f8faf7] rounded-xl border border-[#e2e8f0]">
                <CheckCircle2 className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="block text-[#111827]">Root Crown Protection:</strong>
                  Keeping mulch 2–3 inches away from tree trunks and shrub stems to prevent rot and insect tunneling.
                </div>
              </li>

              <li className="flex items-start gap-3 p-4 bg-[#f8faf7] rounded-xl border border-[#e2e8f0]">
                <CheckCircle2 className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="block text-[#111827]">Hand-Tucked Borders:</strong>
                  Rolling and tucking edges for that crisp, finished landscape appearance.
                </div>
              </li>
            </ul>
          </section>

          {/* Referral Notice */}
          <div className="bg-[#fffbeb] border border-[#fde68a] p-5 rounded-xl flex items-start gap-4">
            <ShieldAlert className="w-5 h-5 text-[#b45309] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#92400e] space-y-1">
              <strong className="block font-bold">Referral Platform Notice:</strong>
              <p>
                KnightdaleLawnCare.com does not sell mulch or straw directly. We connect you with independent local landscape providers who source materials, provide labor quotes, and handle delivery.
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div className="pt-8 border-t border-[#e5e7eb] flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#1b4332]">
            <Link href="/services/lawn-mowing" className="hover:underline">
              ← Routine Lawn Mowing Information
            </Link>
            <Link href="/services/seasonal-cleanup" className="hover:underline">
              Seasonal Yard Cleanups →
            </Link>
          </div>

        </div>

      </div>

      {/* Quote Section at Bottom */}
      <Suspense fallback={<div>Loading quote form...</div>}>
        <QuoteSection />
      </Suspense>
    </article>
  );
}
