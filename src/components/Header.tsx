"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { Menu, X, ArrowRight, ShieldCheck, Sprout } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e5e7eb] transition-all">
      {/* Top micro-banner for transparency */}
      <div className="bg-[#143823] text-[#eef8f1] px-4 py-1.5 text-xs text-center font-medium">
        <span className="inline-flex items-center gap-1.5 justify-center flex-wrap">
          <ShieldCheck className="w-3.5 h-3.5 text-[#40916c]" aria-hidden="true" />
          <span>Independent Local Referral Platform</span>
          <span className="hidden sm:inline text-[#40916c]">•</span>
          <span className="hidden sm:inline">Connecting Eastern Wake County Homeowners with Vetted Lawn Care</span>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo / Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#2d6a4f] rounded-lg p-1"
            aria-label="Knightdale Lawn Care Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1b4332] text-white flex items-center justify-center shadow-sm group-hover:bg-[#143823] transition-colors">
              <Sprout className="w-6 h-6 text-[#d8f3dc]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#111827] leading-none">
                Knightdale
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2d6a4f] mt-0.5">
                Lawn Care Referral
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <Link
              href="/#services"
              className="text-sm font-semibold text-[#374151] hover:text-[#1b4332] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-semibold text-[#374151] hover:text-[#1b4332] transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/service-areas"
              className="text-sm font-semibold text-[#374151] hover:text-[#1b4332] transition-colors"
            >
              Service Areas
            </Link>
            <Link
              href="/#faqs"
              className="text-sm font-semibold text-[#374151] hover:text-[#1b4332] transition-colors"
            >
              FAQs
            </Link>
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 bg-[#b45309] hover:bg-[#92400e] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b45309]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#374151] hover:text-[#111827] hover:bg-[#f3f4f0] focus-visible:ring-2 focus-visible:ring-[#2d6a4f]"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-[#e5e7eb] bg-white px-4 pt-3 pb-6 shadow-xl space-y-3"
        >
          <div className="flex flex-col space-y-2">
            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-base font-medium text-[#374151] hover:bg-[#f4f3ef] hover:text-[#1b4332]"
            >
              Lawn Services
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-base font-medium text-[#374151] hover:bg-[#f4f3ef] hover:text-[#1b4332]"
            >
              How It Works
            </Link>
            <Link
              href="/service-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-base font-medium text-[#374151] hover:bg-[#f4f3ef] hover:text-[#1b4332]"
            >
              Service Areas (Knightdale, Wendell, Zebulon)
            </Link>
            <Link
              href="/#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-base font-medium text-[#374151] hover:bg-[#f4f3ef] hover:text-[#1b4332]"
            >
              Frequently Asked Questions
            </Link>
          </div>
          <div className="pt-2">
            <Link
              href="/#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#b45309] text-white font-semibold px-4 py-3 rounded-lg shadow text-center"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
