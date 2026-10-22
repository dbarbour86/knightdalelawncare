import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { MapPin, CheckCircle2, ShieldCheck, ArrowRight, Sun, Droplets, Mountain } from "lucide-react";
import { QuoteSection } from "@/components/QuoteSection";

export const metadata: Metadata = {
  title: "Lawn Care Service Areas: Knightdale, Wendell & Zebulon NC",
  description:
    "Local lawn care coverage guide for Knightdale, Wendell, and Zebulon in Eastern Wake County, NC. Neighborhoods, local turfgrasses, and Piedmont clay soil tips.",
  alternates: {
    canonical: "https://knightdalelawncare.com/service-areas",
  },
};

export default function ServiceAreasPage() {
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
            <li className="font-semibold text-[#111827]">Service Areas</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#eef8f1] border border-[#d8f3dc] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1b4332]">
            <MapPin className="w-3.5 h-3.5 text-[#2d6a4f]" />
            <span>Eastern Wake County, North Carolina</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Local Lawn Care Coverage in Knightdale, Wendell, & Zebulon
          </h1>

          <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
            Rather than spreading thin across the entire Triangle, our quote-referral platform focuses specifically on the three neighboring communities of Eastern Wake County. These towns share common micro-climates, soil structures, and suburban growth patterns.
          </p>
        </div>

        {/* Deep Regional Context: Soil & Climate */}
        <section className="bg-[#f8faf7] rounded-2xl p-8 sm:p-10 border border-[#e2e8f0] mb-16 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            Understanding Eastern Wake County Turf & Soil Conditions
          </h2>
          <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
            Maintaining a healthy lawn in Knightdale, Wendell, and Zebulon requires managing unique local environmental conditions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white p-5 rounded-xl border border-[#e5e7eb] space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#eef8f1] flex items-center justify-center">
                <Mountain className="w-5 h-5 text-[#1b4332]" />
              </div>
              <h3 className="font-bold text-base text-[#111827]">Piedmont Red Clay Soil</h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                Dense clay holds nutrients well but compacts tightly under mower traffic and summer foot traffic. Annual autumn core aeration helps water, oxygen, and fertilizer penetrate deep into grass root zones.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e5e7eb] space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#fffbeb] flex items-center justify-center">
                <Sun className="w-5 h-5 text-[#b45309]" />
              </div>
              <h3 className="font-bold text-base text-[#111827]">Summer Heat & Mowing Height</h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                July and August temperatures regularly reach the mid-90s. Cutting cool-season Tall Fescue too short during these months will burn turf roots. Raising mower decks to 3.5–4 inches shades soil and preserves moisture.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e5e7eb] space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#f0f9ff] flex items-center justify-center">
                <Droplets className="w-5 h-5 text-[#0369a1]" />
              </div>
              <h3 className="font-bold text-base text-[#111827]">Thunderstorm Washout</h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                Intense summer storms can wash light wood chips down hillsides. Longleaf pine straw rolls and deeply trench-edged bed perimeters are highly recommended for slopes common in Zebulon and Knightdale lots.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Town-By-Town Profiles */}
        <div className="space-y-16 mb-16">
          
          {/* Town 1: Knightdale */}
          <section id="knightdale" className="scroll-mt-24 bg-white rounded-2xl p-8 border border-[#e5e7eb] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#f3f4f6]">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#1b4332]">
                  Primary Town Focus
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mt-1">
                  Knightdale, NC (ZIP 27545)
                </h2>
              </div>
              <Link href="#quote" className="btn-primary text-xs py-2 px-4 shrink-0">
                <span>Request Knightdale Quote</span>
              </Link>
            </div>

            <div className="pt-6 space-y-4 text-sm text-[#4b5563] leading-relaxed">
              <p>
                Knightdale has evolved from a historic agricultural community into one of Wake County's most desirable residential hubs. With convenient access to the I-540 corridor and US-64, subdivisions here feature a blend of established half-acre homesites with mature canopy trees alongside modern master-planned neighborhoods with smaller, high-visibility front yards.
              </p>

              <div>
                <strong className="block text-[#111827] mb-2">Common Neighborhoods We Serve:</strong>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Knightdale Station",
                    "Planters Walk",
                    "Widewaters",
                    "Glenmere",
                    "Poplar Pointe",
                    "Parkside",
                    "Mingo Creek",
                    "Cheswick",
                  ].map((neighborhood) => (
                    <span
                      key={neighborhood}
                      className="text-xs bg-[#f4f3ef] text-[#374151] px-3 py-1 rounded-md border border-[#e5e7eb]"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#f8faf7] p-4 rounded-xl border border-[#e2e8f0] text-xs space-y-1">
                <strong className="text-[#111827] block">Local Lawn Notes:</strong>
                <p>
                  Established properties in Planters Walk frequently feature shady Tall Fescue yards needing seasonal core aeration and leaf pickup, while newer construction near Knightdale Station predominantly showcases full-sun Bermuda turf requiring tight weekly mowing in summer.
                </p>
              </div>
            </div>
          </section>

          {/* Town 2: Wendell */}
          <section id="wendell" className="scroll-mt-24 bg-white rounded-2xl p-8 border border-[#e5e7eb] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#f3f4f6]">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#1b4332]">
                  Eastern Wake Growth Corridor
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mt-1">
                  Wendell, NC (ZIP 27591)
                </h2>
              </div>
              <Link href="#quote" className="btn-primary text-xs py-2 px-4 shrink-0">
                <span>Request Wendell Quote</span>
              </Link>
            </div>

            <div className="pt-6 space-y-4 text-sm text-[#4b5563] leading-relaxed">
              <p>
                Wendell beautifully pairs small-town Main Street heritage with landmark communities like Wendell Falls. Homeowners here range from those caring for compact, manicured courtyard yards in walkable neighborhoods to multi-acre parcels on the outskirts toward Selma and Archer Lodge.
              </p>

              <div>
                <strong className="block text-[#111827] mb-2">Common Neighborhoods We Serve:</strong>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Wendell Falls",
                    "Edgemont Landing",
                    "Deerfield",
                    "Woodcreek",
                    "Maggie Way",
                    "Wendell Mill",
                    "Carrington",
                  ].map((neighborhood) => (
                    <span
                      key={neighborhood}
                      className="text-xs bg-[#f4f3ef] text-[#374151] px-3 py-1 rounded-md border border-[#e5e7eb]"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#f8faf7] p-4 rounded-xl border border-[#e2e8f0] text-xs space-y-1">
                <strong className="text-[#111827] block">Local Lawn Notes:</strong>
                <p>
                  In Wendell Falls, consistent HOA landscaping standards mean homeowners prioritize sharp line edging, clean pine straw mulch borders, and prompt weed trimming.
                </p>
              </div>
            </div>
          </section>

          {/* Town 3: Zebulon */}
          <section id="zebulon" className="scroll-mt-24 bg-white rounded-2xl p-8 border border-[#e5e7eb] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#f3f4f6]">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#1b4332]">
                  Eastern Boundary of Wake County
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mt-1">
                  Zebulon, NC (ZIP 27597)
                </h2>
              </div>
              <Link href="#quote" className="btn-primary text-xs py-2 px-4 shrink-0">
                <span>Request Zebulon Quote</span>
              </Link>
            </div>

            <div className="pt-6 space-y-4 text-sm text-[#4b5563] leading-relaxed">
              <p>
                Zebulon, known as "The Town of Friendly People," sits on the eastern border of Wake County alongside Franklin, Nash, and Johnston counties. Many Zebulon properties feature expansive yard sizes, mature oak and hickory canopies, and sloping yards that generate high volumes of fall leaves and deadwood.
              </p>

              <div>
                <strong className="block text-[#111827] mb-2">Common Neighborhoods We Serve:</strong>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Weaver's Pond",
                    "Braemar",
                    "Autumn Lakes",
                    "Wakelon",
                    "Tandler",
                    "Country Club Hills",
                    "Cattail Creek",
                  ].map((neighborhood) => (
                    <span
                      key={neighborhood}
                      className="text-xs bg-[#f4f3ef] text-[#374151] px-3 py-1 rounded-md border border-[#e5e7eb]"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#f8faf7] p-4 rounded-xl border border-[#e2e8f0] text-xs space-y-1">
                <strong className="text-[#111827] block">Local Lawn Notes:</strong>
                <p>
                  Spacious lots in communities like Weaver's Pond and surrounding rural estates frequently benefit from combined bi-weekly mowing packages alongside seasonal leaf clearing to manage heavy autumn canopy drop.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Quick Links back to Services */}
        <div className="bg-[#fbfbfa] p-6 rounded-xl border border-[#e5e7eb] flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#1b4332]">
          <span>Explore common lawn services in these towns:</span>
          <div className="flex items-center gap-4">
            <Link href="/services/lawn-mowing" className="hover:underline">
              Routine Mowing
            </Link>
            <span>•</span>
            <Link href="/services/seasonal-cleanup" className="hover:underline">
              Yard Cleanups
            </Link>
            <span>•</span>
            <Link href="/services/mulch-pine-straw" className="hover:underline">
              Pine Straw & Mulch
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
