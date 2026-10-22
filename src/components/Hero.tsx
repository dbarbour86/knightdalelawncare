import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, ShieldCheck, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f3ef] via-[#fbfbfa] to-[#ffffff] pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location & Trust Tag */}
            <div className="inline-flex items-center gap-2 bg-[#eef8f1] border border-[#d8f3dc] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1b4332]">
              <MapPin className="w-3.5 h-3.5 text-[#2d6a4f]" aria-hidden="true" />
              <span>Serving Knightdale, Wendell, & Zebulon, NC</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.15]">
              Find Reliable Local Lawn Care in{" "}
              <span className="text-[#1b4332]">Knightdale & Eastern Wake</span>
            </h1>

            {/* Clear Supporting Copy */}
            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed max-w-2xl">
              We connect homeowners in Knightdale, Wendell, and Zebulon with independent, experienced lawn care providers for routine mowing, edging, seasonal cleanups, and pine straw installation.
            </p>

            {/* Primary & Secondary Actions - Above the fold */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/#quote"
                className="btn-primary text-base py-3.5 px-6 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#b45309]"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
              </Link>

              <Link
                href="/#how-it-works"
                className="btn-secondary text-base py-3.5 px-6"
              >
                <span>How Referral Works</span>
              </Link>
            </div>

            {/* Value bullets with honest transparency */}
            <div className="pt-4 border-t border-[#e5e7eb] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#374151]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2d6a4f] shrink-0" aria-hidden="true" />
                <span>Zero obligation quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2d6a4f] shrink-0" aria-hidden="true" />
                <span>Eastern Wake specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2d6a4f] shrink-0" aria-hidden="true" />
                <span>Direct pricing discussion</span>
              </div>
            </div>
          </div>

          {/* Right Column: Photography & Visual Trust Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#d1d5db]/70 bg-white">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full">
                <Image
                  src="/images/hero-lawn.jpg"
                  alt="Well-maintained residential lawn in Eastern Wake County with green grass, pine straw beds, and tidy driveway edging"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Floating caption pill */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-[#e5e7eb] shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#111827] block">
                      Local Lawn Upkeep Simplified
                    </span>
                    <span className="text-[11px] text-[#4b5563]">
                      Knightdale (27545) • Wendell (27591) • Zebulon (27597)
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#eef8f1] text-[#1b4332] border border-[#d8f3dc]">
                    Free Service
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative subtle backdrop blob */}
            <div
              className="absolute -top-6 -right-6 -z-10 w-48 h-48 bg-[#d8f3dc]/60 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
