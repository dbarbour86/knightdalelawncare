import React, { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf, ShieldAlert } from "lucide-react";
import { QuoteSection } from "@/components/QuoteSection";

export const metadata: Metadata = {
  title: "Seasonal Yard Cleanups in Knightdale, Wendell & Zebulon NC",
  description:
    "Request spring property resets and autumn leaf cleanups in Knightdale, Wendell, and Zebulon. Connect with independent local yard specialists for debris removal.",
  alternates: {
    canonical: "https://knightdalelawncare.com/services/seasonal-cleanup",
  },
};

export default function SeasonalCleanupPage() {
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
            <li className="font-semibold text-[#111827]">Seasonal Yard Cleanups</li>
          </ol>
        </nav>

        {/* Hero Section of Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#fffbeb] border border-[#fde68a] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#92400e]">
              <Leaf className="w-3.5 h-3.5 text-[#b45309]" />
              <span>Spring & Autumn Property Resets</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Seasonal Yard & Leaf Cleanups in Eastern Wake County
            </h1>

            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
              When autumn blanket leaves suffocate turf or winter storms leave heavy branches across your lawn, a seasonal cleanup resets your curb appeal. We help homeowners in Knightdale, Wendell, and Zebulon connect with local providers equipped for heavy seasonal work.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="#quote" className="btn-primary text-sm">
                <span>Request Cleanup Quote</span>
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
                src="/images/seasonal-cleanup.jpg"
                alt="Autumn yard cleared of leaves and prepared for winter"
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
          
          {/* Spring vs Fall Cleanups */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Seasonal Yard Challenges in Eastern North Carolina
            </h2>
            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              Mature oaks, pines, sweetgums, and maples common throughout Knightdale and Zebulon create heavy seasonal debris. Proper timing prevents turf damage and fungal issues:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3">
              <div className="bg-[#fbfbfa] p-6 rounded-xl border border-[#e5e7eb] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1b4332]">
                  March through April
                </span>
                <h3 className="text-lg font-bold text-[#111827]">
                  Spring Wake-Up & Bed Clearing
                </h3>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  Clearing winter stick litter, cutting back spent perennial stalks, clearing dead thatch, and cleaning bed trenches before fresh pine straw or mulch is laid.
                </p>
                <div className="text-xs text-[#2d6a4f] font-semibold">
                  Prepares grass for sun & root aeration
                </div>
              </div>

              <div className="bg-[#fbfbfa] p-6 rounded-xl border border-[#e5e7eb] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#b45309]">
                  October through December
                </span>
                <h3 className="text-lg font-bold text-[#111827]">
                  Fall Leaf Raking & Haul-Away
                </h3>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  Wet leaves left on Tall Fescue or Bermuda lawns create damp mats that breed fungal blight and block sunlight. Routine or one-time leaf blowing, curbside vacuuming, or bagging protects the turf.
                </p>
                <div className="text-xs text-[#b45309] font-semibold">
                  Prevents turf dead spots over winter
                </div>
              </div>
            </div>
          </section>

          {/* Common Services in a Cleanup Request */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              What You Can Specify in Your Cleanup Request
            </h2>
            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              When submitting your quote inquiry, you can describe exactly what needs attention:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <li className="flex items-start gap-3 p-4 bg-[#f8faf7] rounded-xl border border-[#e2e8f0]">
                <CheckCircle2 className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="block text-[#111827]">Bed & Landscape Blow-Out:</strong>
                  Clearing trapped leaves and twigs from azaleas, boxwoods, and landscape borders.
                </div>
              </li>

              <li className="flex items-start gap-3 p-4 bg-[#f8faf7] rounded-xl border border-[#e2e8f0]">
                <CheckCircle2 className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="block text-[#111827]">Fallen Branch Collection:</strong>
                  Gathering storm debris, broken limbs, and twigs scattered across large yards.
                </div>
              </li>

              <li className="flex items-start gap-3 p-4 bg-[#f8faf7] rounded-xl border border-[#e2e8f0]">
                <CheckCircle2 className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="block text-[#111827]">Curbside Staging vs. Haul-Away:</strong>
                  Indicate if your town offers municipal vacuum pickup or if the contractor should haul debris away.
                </div>
              </li>

              <li className="flex items-start gap-3 p-4 bg-[#f8faf7] rounded-xl border border-[#e2e8f0]">
                <CheckCircle2 className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="block text-[#111827]">Combined Mulch Prep:</strong>
                  Optionally request trench re-edging and new pine straw delivery at the same time.
                </div>
              </li>
            </ul>
          </section>

          {/* Referral Transparency Notice */}
          <div className="bg-[#fffbeb] border border-[#fde68a] p-5 rounded-xl flex items-start gap-4">
            <ShieldAlert className="w-5 h-5 text-[#b45309] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#92400e] space-y-1">
              <strong className="block font-bold">Referral Service Notice:</strong>
              <p>
                KnightdaleLawnCare.com does not own trucks or perform yard cleanouts directly. We connect you with independent local operators. Disposal fees, equipment requirements, and job estimates are provided directly by each contractor.
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div className="pt-8 border-t border-[#e5e7eb] flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#1b4332]">
            <Link href="/services/lawn-mowing" className="hover:underline">
              ← Routine Lawn Mowing Information
            </Link>
            <Link href="/services/mulch-pine-straw" className="hover:underline">
              Pine Straw & Mulch Installation →
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
