import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, UserCheck, MessageSquare, ShieldCheck, ShieldAlert, Check } from "lucide-react";
import { QuoteSection } from "@/components/QuoteSection";

export const metadata: Metadata = {
  title: "How It Works | Independent Lawn Care Referral Process",
  description:
    "Learn how KnightdaleLawnCare.com connects homeowners in Eastern Wake County with independent local lawn care specialists. Transparent process, honest expectations.",
  alternates: {
    canonical: "https://knightdalelawncare.com/how-it-works",
  },
};

export default function HowItWorksPage() {
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
            <li className="font-semibold text-[#111827]">How It Works</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#eef8f1] border border-[#d8f3dc] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1b4332]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2d6a4f]" />
            <span>Honest Referral Process</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            How Knightdale Lawn Care Connects You with Local Providers
          </h1>

          <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
            We built this platform to simplify finding dependable lawn care in Knightdale, Wendell, and Zebulon. Here is an honest, step-by-step breakdown of how our referral service works and what you can expect at every stage.
          </p>
        </div>

        {/* Detailed 3-Step Walkthrough */}
        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          
          {/* Step 1 */}
          <section className="bg-[#fbfbfa] rounded-2xl p-8 border border-[#e5e7eb] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1b4332] bg-[#eef8f1] px-3 py-1 rounded-full border border-[#d8f3dc]">
                Step 1: Your Property Request
              </span>
              <span className="text-3xl font-black text-[#d1d5db]">01</span>
            </div>
            
            <h2 className="text-2xl font-bold text-[#111827]">
              Submit Your Yard Details & Services Needed
            </h2>

            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              Complete our short online form. We only ask for the essentials: your town (Knightdale, Wendell, or Zebulon), the services you need (such as recurring mowing, seasonal cleanup, or pine straw installation), your preferred contact method (phone or email), and any helpful property details (e.g. fenced backyard, corner lot, or specific grass type).
            </p>

            <div className="bg-white p-4 rounded-xl border border-[#e2e8f0] text-xs text-[#374151] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#2d6a4f] shrink-0" />
              <span>We do not require your full street address during the initial inquiry.</span>
            </div>
          </section>

          {/* Step 2 */}
          <section className="bg-[#fbfbfa] rounded-2xl p-8 border border-[#e5e7eb] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1b4332] bg-[#eef8f1] px-3 py-1 rounded-full border border-[#d8f3dc]">
                Step 2: Provider Review & Routing
              </span>
              <span className="text-3xl font-black text-[#d1d5db]">02</span>
            </div>
            
            <h2 className="text-2xl font-bold text-[#111827]">
              We Match Your Request with an Available Local Specialist
            </h2>

            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              When live matching is active, we review your inquiry to identify an independent local lawn care provider operating route capacity in your immediate subdivision or neighborhood. This ensures the provider already services yards near you and understands local neighborhood standards.
            </p>

            <div className="bg-white p-4 rounded-xl border border-[#e2e8f0] text-xs text-[#374151] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#2d6a4f] shrink-0" />
              <span>We never broadcast your personal contact details to dozens of random contractors.</span>
            </div>
          </section>

          {/* Step 3 */}
          <section className="bg-[#fbfbfa] rounded-2xl p-8 border border-[#e5e7eb] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1b4332] bg-[#eef8f1] px-3 py-1 rounded-full border border-[#d8f3dc]">
                Step 3: Direct Quote & Scheduling
              </span>
              <span className="text-3xl font-black text-[#d1d5db]">03</span>
            </div>
            
            <h2 className="text-2xl font-bold text-[#111827]">
              Discuss Scope and Pricing Directly with the Specialist
            </h2>

            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              The assigned local lawn care specialist contacts you directly via your preferred method (phone call, text, or email). They may inspect your lot via satellite imagery or visit your property to measure perimeter edging, check fence gate width, and provide an exact, itemized estimate.
            </p>

            <div className="bg-white p-4 rounded-xl border border-[#e2e8f0] text-xs text-[#374151] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#2d6a4f] shrink-0" />
              <span>You evaluate their estimate with zero obligation and zero pressure to proceed.</span>
            </div>
          </section>

          {/* Important Disclosures & Boundaries */}
          <section className="bg-[#fffbeb] border border-[#fde68a] p-6 sm:p-8 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-[#92400e] font-bold text-base sm:text-lg">
              <ShieldAlert className="w-5 h-5 shrink-0" />
              <span>Important Transparency Disclosures</span>
            </div>
            
            <div className="space-y-3 text-xs sm:text-sm text-[#78350f] leading-relaxed">
              <p>
                <strong>Independent Referral Platform:</strong> KnightdaleLawnCare.com is an independent matching and referral service. We do not employ field laborers, own commercial mowing equipment, or provide lawn care services directly.
              </p>
              <p>
                <strong>No Guaranteed Acceptance or Availability:</strong> Lawn care providers manage their own route capacities, equipment limits, and minimum service fees. While we endeavor to connect every homeowner, submitting a request does not guarantee that a provider will take on the project.
              </p>
              <p>
                <strong>Direct Contractor Relationships:</strong> All contracts, pricing, payment schedules, guarantees, and service standards are negotiated and contracted directly between you (the homeowner) and the independent lawn care contractor you choose to hire.
              </p>
            </div>
          </section>

        </div>

      </div>

      {/* Quote Section at Bottom */}
      <Suspense fallback={<div>Loading quote form...</div>}>
        <QuoteSection />
      </Suspense>
    </article>
  );
}
