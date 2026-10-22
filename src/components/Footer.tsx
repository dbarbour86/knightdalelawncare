import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { Sprout, Mail, MapPin, ShieldAlert, CheckCircle2 } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0a1f14] text-[#f9fafb] border-t border-[#143823]">
      {/* Upper Footer: Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1b4332] text-white flex items-center justify-center border border-[#2d6a4f]/50">
                <Sprout className="w-6 h-6 text-[#d8f3dc]" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  Knightdale
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#40916c]">
                  Lawn Care Referral
                </span>
              </div>
            </div>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Connecting homeowners in Knightdale, Wendell, and Zebulon, NC with independent, experienced local lawn care specialists.
            </p>
            <div className="pt-2 text-xs text-[#9ca3af] space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#40916c] shrink-0" />
                <span>Eastern Wake County, North Carolina</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#40916c] shrink-0" />
                <span>{SITE_CONFIG.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d8f3dc]">
              Requested Services
            </h3>
            <ul className="space-y-2 text-sm text-[#9ca3af]">
              <li>
                <Link href="/services/lawn-mowing" className="hover:text-white transition-colors">
                  Routine Lawn Mowing
                </Link>
              </li>
              <li>
                <Link href="/services/seasonal-cleanup" className="hover:text-white transition-colors">
                  Seasonal Yard Cleanups
                </Link>
              </li>
              <li>
                <Link href="/services/mulch-pine-straw" className="hover:text-white transition-colors">
                  Pine Straw & Mulch
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Edging & String Trimming
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Core Aeration Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Communities Served */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d8f3dc]">
              Service Areas
            </h3>
            <ul className="space-y-2 text-sm text-[#9ca3af]">
              <li>
                <Link href="/service-areas#knightdale" className="hover:text-white transition-colors">
                  Knightdale, NC (27545)
                </Link>
              </li>
              <li>
                <Link href="/service-areas#wendell" className="hover:text-white transition-colors">
                  Wendell, NC (27591)
                </Link>
              </li>
              <li>
                <Link href="/service-areas#zebulon" className="hover:text-white transition-colors">
                  Zebulon, NC (27597)
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-xs text-[#40916c] hover:underline block pt-1">
                  View Full Area Coverage Guide →
                </Link>
              </li>
            </ul>
          </div>

          {/* Information & Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d8f3dc]">
              Platform & Trust
            </h3>
            <ul className="space-y-2 text-sm text-[#9ca3af]">
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How Referral Works
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-white transition-colors">
                  Homeowner FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Disclosures
                </Link>
              </li>
              <li>
                <Link href="/#quote" className="inline-block mt-2 text-xs font-semibold bg-[#1b4332] text-[#d8f3dc] px-3 py-1.5 rounded border border-[#2d6a4f]/50 hover:bg-[#2d6a4f] transition-colors">
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Independent Referral Notice Callout */}
        <div className="mt-12 pt-8 border-t border-[#143823]/80">
          <div className="bg-[#143823]/60 rounded-xl p-5 border border-[#2d6a4f]/40 flex flex-col sm:flex-row items-start gap-4">
            <ShieldAlert className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs text-[#d1d5db] space-y-1">
              <span className="font-semibold text-white block">
                Independent Service Disclosure & Matching Transparency:
              </span>
              <p className="leading-relaxed">
                {SITE_CONFIG.site.legalNotice} All lawn care services, contracts, scheduling, and pricing are negotiated and performed directly between the homeowner and the independent provider. We do not set prices, schedule appointments directly, or warranty contractor performance.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b7280] gap-4">
          <p>© {currentYear} {SITE_CONFIG.site.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#9ca3af] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#9ca3af] transition-colors">
              Terms of Use
            </Link>
            <Link href="/#faqs" className="hover:text-[#9ca3af] transition-colors">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
