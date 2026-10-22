"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SITE_CONFIG } from "@/config/site.config";
import { QuoteForm } from "./QuoteForm";
import { ShieldCheck, Calendar, Clock, Eye, Lock } from "lucide-react";

export function QuoteSection() {
  const searchParams = useSearchParams();
  const [localPreview, setLocalPreview] = useState(false);

  // Check if preview mode is triggered via URL query param: ?preview=form
  useEffect(() => {
    if (searchParams?.get("preview") === "form") {
      setLocalPreview(true);
    }
  }, [searchParams]);

  const isFormActive = SITE_CONFIG.leadGeneration.enabled || localPreview;

  return (
    <section id="quote" className="py-16 sm:py-24 bg-gradient-to-b from-[#ffffff] via-[#fbfbfa] to-[#f4f3ef] border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context, Next Steps & Transparency */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#eef8f1] border border-[#d8f3dc] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1b4332]">
              <ShieldCheck className="w-4 h-4 text-[#2d6a4f]" aria-hidden="true" />
              <span>Free & Zero Obligation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Request a Lawn Care Quote for Your Yard
            </h2>

            <p className="text-base text-[#4b5563] leading-relaxed">
              Tell us about your property and requested services. We connect homeowners in Knightdale, Wendell, and Zebulon with independent local lawn specialists who understand our local grass and seasonal rhythms.
            </p>

            {/* Clear explanation of next steps */}
            <div className="bg-white rounded-xl p-5 border border-[#e5e7eb] shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-[#111827] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2d6a4f]" />
                <span>What Happens After You Submit:</span>
              </h3>
              <ol className="text-xs text-[#4b5563] space-y-2 list-decimal list-inside leading-relaxed">
                <li>Your yard specifications and location are reviewed.</li>
                <li>When matching is open, an independent local provider evaluates route availability.</li>
                <li>That provider contacts you directly with an honest quote and schedule estimate.</li>
                <li>You review the proposal with no pressure to proceed.</li>
              </ol>
            </div>

            {/* Minimal friction privacy note */}
            <div className="text-xs text-[#6b7280] space-y-1">
              <p>
                <strong>No street address required</strong> at this stage. We only request your town and contact preference.
              </p>
              <p>
                No automated robocalls. Your information is shared only with the assigned independent service specialist.
              </p>
            </div>
          </div>

          {/* Right Column: Form OR Honest Pre-Launch Message */}
          <div className="lg:col-span-7">
            {isFormActive ? (
              <div className="space-y-4">
                {/* Form component */}
                <QuoteForm isPreviewMode={!SITE_CONFIG.leadGeneration.enabled && localPreview} />
                
                {/* Mode status banner */}
                {!SITE_CONFIG.leadGeneration.enabled && localPreview && (
                  <div className="flex items-center justify-between text-xs text-[#6b7280] px-2">
                    <span>Previewing live form layout and validation.</span>
                    <button
                      type="button"
                      onClick={() => setLocalPreview(false)}
                      className="text-[#b45309] font-medium underline"
                    >
                      Return to Pre-Launch Notice
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Polished, Honest Pre-Launch State */
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#e5e7eb] shadow-md space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#fffbeb] text-[#92400e] border border-[#fde68a]">
                  <Calendar className="w-4 h-4 text-[#b45309]" />
                  <span>Seasonal Onboarding in Progress</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[#111827]">
                    {SITE_CONFIG.leadGeneration.preLaunchMessage.headline}
                  </h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed">
                    {SITE_CONFIG.leadGeneration.preLaunchMessage.body}
                  </p>
                </div>

                <div className="bg-[#f8faf7] rounded-xl p-5 border border-[#e2e8f0] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1b4332]">
                    <Lock className="w-4 h-4 text-[#2d6a4f]" />
                    <span>Homeowner Protection & Delivery Assurance:</span>
                  </div>
                  <p className="text-xs text-[#4b5563] leading-relaxed">
                    We do not collect homeowner contact details until direct provider routing is fully verified. We never collect details into dead or inactive forms.
                  </p>
                  <p className="text-xs font-medium text-[#111827] pt-1">
                    Timeline: {SITE_CONFIG.leadGeneration.preLaunchMessage.estimatedAvailability}
                  </p>
                </div>

                {/* Developer / Client Review Preview Mode Toggle */}
                {SITE_CONFIG.leadGeneration.allowLocalPreview && (
                  <div className="pt-4 border-t border-[#f3f4f6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-xs text-[#6b7280]">
                      Reviewing the site architecture or form layout?
                    </span>
                    <button
                      type="button"
                      onClick={() => setLocalPreview(true)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#f3f4f0] hover:bg-[#e5e7eb] text-[#374151] px-3.5 py-2 rounded-lg border border-[#d1d5db] transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#2d6a4f]" />
                      <span>Test Form Preview (Design Review Mode)</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
