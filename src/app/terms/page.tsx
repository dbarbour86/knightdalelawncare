import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { ShieldAlert, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use & Independent Referral Disclosure | Knightdale Lawn Care",
  description:
    "Terms of Use and independent contractor disclosures for KnightdaleLawnCare.com referral platform.",
  alternates: {
    canonical: "https://knightdalelawncare.com/terms",
  },
};

export default function TermsPage() {
  const lastUpdated = "October 2026";

  return (
    <article className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs text-[#6b7280]">
            <li>
              <Link href="/" className="hover:text-[#1b4332]">Home</Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#111827]">Terms of Use</li>
          </ol>
        </nav>

        {/* Title */}
        <div className="space-y-3 pb-6 border-b border-[#e5e7eb]">
          <div className="inline-flex items-center gap-2 bg-[#fffbeb] border border-[#fde68a] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#92400e]">
            <ShieldAlert className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Legal Disclosures & Service Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827]">
            Terms of Use & Referral Disclosures
          </h1>
          <p className="text-xs text-[#6b7280]">
            Effective Date: {lastUpdated} | Domain: {SITE_CONFIG.site.domain}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm text-[#374151] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111827]">
              1. Platform Nature: Independent Referral Service
            </h2>
            <p>
              KnightdaleLawnCare.com is an independent referral and quote connection platform. <strong>We are not a licensed contractor, landscaping company, or direct service provider.</strong> We do not employ laborers, maintain mowing equipment, or perform any physical work on properties.
            </p>
            <p>
              Our sole role is to provide a technological and communication bridge enabling homeowners to submit lawn care inquiries and connect with independent local lawn care specialists.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111827]">
              2. Independent Contractor Relationship
            </h2>
            <p>
              Any lawn care specialist or business connected through this website operates as a completely separate, independent entity. No agency, partnership, joint venture, employer-employee, or franchiser-franchisee relationship is intended or created by using this website.
            </p>
            <p>
              Independent providers set their own rates, establish their own schedules, choose their own equipment, and carry their own business licenses and insurance as required by the state of North Carolina.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111827]">
              3. No Guarantees on Pricing, Acceptance, or Performance
            </h2>
            <p>
              Submitting a quote request on this website does not guarantee that a provider will be available, that an inquiry will be accepted, or that services will be performed for a specific price. All quotes are non-binding estimates determined solely by the independent specialist after reviewing your property.
            </p>
            <p>
              KnightdaleLawnCare.com does not warrant or guarantee the quality, timeliness, safety, or legality of any services provided by independent contractors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111827]">
              4. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, KnightdaleLawnCare.com and its operators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website, property damage incurred during lawn care services, contractor disputes, or any interactions between you and any independent service provider.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111827]">
              5. Governing Law
            </h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the State of North Carolina, without regard to its conflict of law principles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111827]">
              6. Inquiries
            </h2>
            <p>
              For legal questions or platform inquiries, please contact:
            </p>
            <p className="bg-[#f8faf7] p-4 rounded-xl border border-[#e2e8f0] font-mono text-xs text-[#111827]">
              Knightdale Lawn Care<br />
              Email: {SITE_CONFIG.contact.email}
            </p>
          </section>
        </div>

      </div>
    </article>
  );
}
