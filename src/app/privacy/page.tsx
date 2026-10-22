import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { ShieldCheck, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Knightdale Lawn Care",
  description:
    "Privacy Policy for KnightdaleLawnCare.com. Explains how homeowner quote requests and referral contact information are collected, used, and protected.",
  alternates: {
    canonical: "https://knightdalelawncare.com/privacy",
  },
};

export default function PrivacyPage() {
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
            <li className="font-semibold text-[#111827]">Privacy Policy</li>
          </ol>
        </nav>

        {/* Title */}
        <div className="space-y-3 pb-6 border-b border-[#e5e7eb]">
          <div className="inline-flex items-center gap-2 bg-[#eef8f1] border border-[#d8f3dc] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1b4332]">
            <Lock className="w-3.5 h-3.5 text-[#2d6a4f]" />
            <span>Data Privacy & Homeowner Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#6b7280]">
            Effective Date: {lastUpdated} | Domain: {SITE_CONFIG.site.domain}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm text-[#374151] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111827]">
              1. Introduction & Operating Model
            </h2>
            <p>
              KnightdaleLawnCare.com ("we", "our", or "the Platform") operates an independent referral and quote-request platform serving homeowners in Eastern Wake County, North Carolina (primarily Knightdale, Wendell, and Zebulon). We connect homeowners with independent local lawn care contractors. We are not a direct lawn care service provider.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111827]">
              2. Information We Collect
            </h2>
            <p>
              When you submit a quote request on our website, we collect only the information necessary to evaluate and route your request to an independent lawn care specialist:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2">
              <li><strong>Contact Information:</strong> Your full name, telephone number (if provided), and email address (if provided).</li>
              <li><strong>Property Parameters:</strong> Your town or community (Knightdale, Wendell, Zebulon, or nearby area). We do not require a full street address during initial inquiry.</li>
              <li><strong>Service Requests:</strong> The categories of lawn care requested (e.g. routine mowing, seasonal cleanup, pine straw/mulch) and any voluntary notes you provide about your yard.</li>
              <li><strong>Technical Metadata:</strong> Standard, non-identifying server logs such as browser type, referring URLs, and submission timestamps.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111827]">
              3. How We Use Your Information
            </h2>
            <p>
              Your personal information is used solely for the following explicit purposes:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2">
              <li>To evaluate route availability and match your inquiry with an independent local lawn care provider serving your neighborhood.</li>
              <li>To transmit your inquiry to the matched provider so they can contact you directly with an estimate.</li>
              <li>To prevent fraudulent or abusive form submissions and maintain platform security.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111827]">
              4. Referral Data Sharing & Disclosure
            </h2>
            <p>
              <strong>We do not sell, rent, or trade your personal information to marketing brokers, third-party lead aggregators, or unrelated third parties.</strong>
            </p>
            <p>
              When live matching is active, your inquiry details are shared only with the independent local lawn care specialist selected to handle your request. Once contacted, any ongoing business relationship, quotes, and service agreements exist directly between you and that independent specialist.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111827]">
              5. Communications & No Marketing SMS
            </h2>
            <p>
              We do not enroll homeowners in recurring automated marketing SMS campaigns. Any phone calls or text messages you receive will be directly related to the specific lawn care estimate you requested.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111827]">
              6. Data Retention & Security
            </h2>
            <p>
              We implement industry-standard administrative and technical security measures to protect inquiry data. Inquiries are retained only as long as necessary to facilitate quote matching and resolve customer inquiries.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#111827]">
              7. Contacting Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to request the deletion of your submitted inquiry data, please contact us at:
            </p>
            <p className="bg-[#f8faf7] p-4 rounded-xl border border-[#e2e8f0] font-mono text-xs text-[#111827]">
              Knightdale Lawn Care<br />
              Email: {SITE_CONFIG.contact.email}<br />
              Website: {SITE_CONFIG.site.baseUrl}
            </p>
          </section>
        </div>

      </div>
    </article>
  );
}
