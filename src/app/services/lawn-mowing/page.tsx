import React, { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Scissors, ShieldAlert, Sparkles, MapPin } from "lucide-react";
import { QuoteSection } from "@/components/QuoteSection";

export const metadata: Metadata = {
  title: "Routine Lawn Mowing Services in Knightdale, Wendell & Zebulon NC",
  description:
    "Request reliable recurring weekly or bi-weekly lawn mowing in Knightdale, Wendell, and Zebulon. Learn about mowing heights for Bermuda and Fescue grass in Eastern Wake.",
  alternates: {
    canonical: "https://knightdalelawncare.com/services/lawn-mowing",
  },
};

export default function LawnMowingPage() {
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
            <li className="font-semibold text-[#111827]">Routine Lawn Mowing</li>
          </ol>
        </nav>

        {/* Hero Section of Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#eef8f1] border border-[#d8f3dc] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1b4332]">
              <Scissors className="w-3.5 h-3.5 text-[#2d6a4f]" />
              <span>Routine Maintenance Requests</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Routine Lawn Mowing in Knightdale, Wendell, & Zebulon
            </h1>

            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
              Keeping your lawn manicured across North Carolina's sweltering summer requires consistent scheduling, sharp blades, and appropriate cutting heights for local turf species. We connect you with independent local specialists who take pride in crisp edges and clean curb lines.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="#quote" className="btn-primary text-sm">
                <span>Request Mowing Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/service-areas" className="btn-secondary text-sm">
                <span>Check Your Town Coverage</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#e5e7eb]">
              <Image
                src="/images/mowing-stripes.jpg"
                alt="Freshly mown grass with clean diagonal stripes in a suburban Wake County neighborhood"
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
          
          {/* Turfgrass specific advice */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Mowing Standards for Common Eastern Wake Grass Types
            </h2>
            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              Eastern North Carolina lies within the transition zone where both cool-season and warm-season grasses thrive under proper management. When requesting service, noting your turf variety helps providers prepare the right deck settings:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3">
              <div className="bg-[#fbfbfa] p-6 rounded-xl border border-[#e5e7eb] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1b4332]">
                  Warm-Season Turf
                </span>
                <h3 className="text-lg font-bold text-[#111827]">
                  Hybrid Bermuda & Zoysia
                </h3>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  These warm-season grasses love intense Carolina sunshine and heat. They should be cut shorter (typically 1.5 to 2.5 inches) with sharp blades to prevent scalping and encourage lateral rhizome density.
                </p>
                <div className="text-xs text-[#2d6a4f] font-semibold">
                  Peak mowing: Late May through September
                </div>
              </div>

              <div className="bg-[#fbfbfa] p-6 rounded-xl border border-[#e5e7eb] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1b4332]">
                  Cool-Season Turf
                </span>
                <h3 className="text-lg font-bold text-[#111827]">
                  Tall Fescue Blends
                </h3>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  Commonly seeded in partially shaded lots in Knightdale and Zebulon. Tall Fescue requires a taller cut (3.5 to 4.0 inches) during hot summer months to shade roots and protect against heat burn.
                </p>
                <div className="text-xs text-[#2d6a4f] font-semibold">
                  Peak mowing: April–June & September–November
                </div>
              </div>
            </div>
          </section>

          {/* Scope of a Standard Mowing Request */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              What Homeowners Typically Request with Routine Mowing
            </h2>
            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              A comprehensive mowing service goes far beyond just cutting the grass. Homeowners seeking quotes typically request the following elements:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <li className="flex items-start gap-3 p-4 bg-[#f8faf7] rounded-xl border border-[#e2e8f0]">
                <CheckCircle2 className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="block text-[#111827]">Precision Line Edging:</strong>
                  Clean vertical edge lines along concrete driveways, curbs, and walkways.
                </div>
              </li>

              <li className="flex items-start gap-3 p-4 bg-[#f8faf7] rounded-xl border border-[#e2e8f0]">
                <CheckCircle2 className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="block text-[#111827]">Perimeter String Trimming:</strong>
                  Careful weed trimming around fence lines, foundation walls, decks, and mailbox posts.
                </div>
              </li>

              <li className="flex items-start gap-3 p-4 bg-[#f8faf7] rounded-xl border border-[#e2e8f0]">
                <CheckCircle2 className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="block text-[#111827]">Hard Surface Debris Blowing:</strong>
                  Thorough cleanup blowing loose clippings from patios, porches, driveways, and street curbs.
                </div>
              </li>

              <li className="flex items-start gap-3 p-4 bg-[#f8faf7] rounded-xl border border-[#e2e8f0]">
                <CheckCircle2 className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="block text-[#111827]">Flexible Schedules:</strong>
                  Choice of weekly visits during fast-growing periods or bi-weekly visits during dry spells.
                </div>
              </li>
            </ul>
          </section>

          {/* Referral Transparency Notice */}
          <div className="bg-[#fffbeb] border border-[#fde68a] p-5 rounded-xl flex items-start gap-4">
            <ShieldAlert className="w-5 h-5 text-[#b45309] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#92400e] space-y-1">
              <strong className="block font-bold">Referral Platform Disclosure:</strong>
              <p>
                KnightdaleLawnCare.com is an independent quote matching service. We do not dispatch company crews directly. Pricing, gate access requirements, dog pet waste policies, and scheduling are agreed upon directly between you and the independent lawn care specialist.
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div className="pt-8 border-t border-[#e5e7eb] flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#1b4332]">
            <Link href="/services/seasonal-cleanup" className="hover:underline">
              ← Need a Spring or Fall Yard Cleanup?
            </Link>
            <Link href="/services/mulch-pine-straw" className="hover:underline">
              Explore Pine Straw & Mulch Installation →
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
