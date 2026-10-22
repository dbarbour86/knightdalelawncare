"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/config/site.config";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#f8faf7] border-t border-[#e5e7eb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-[#1b4332] border border-[#d8f3dc] shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#2d6a4f]" aria-hidden="true" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
            Straightforward, honest answers about how our independent referral service operates, what to expect with pricing, and how quote matching works.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {SITE_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-[#2d6a4f] hover:bg-[#fcfdfa] transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-bold text-[#111827] text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4b5563] shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180 text-[#1b4332]" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-6 pb-6 text-sm sm:text-base text-[#4b5563] leading-relaxed border-t border-[#f3f4f6] pt-4"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-12 text-center text-xs text-[#6b7280]">
          Have a question not listed here? Email us at{" "}
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="text-[#1b4332] font-semibold underline hover:text-[#2d6a4f]"
          >
            {SITE_CONFIG.contact.email}
          </a>
          .
        </div>

      </div>
    </section>
  );
}
