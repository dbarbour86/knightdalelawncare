import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { MapPin, ArrowRight, CheckCircle2, Home } from "lucide-react";

export function ServiceAreasOverview() {
  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#eef8f1] text-[#1b4332] border border-[#d8f3dc]">
            Eastern Wake Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Serving Knightdale, Wendell, & Zebulon
          </h2>
          <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
            Our service focus is concentrated in eastern Wake County. Because these three communities share similar growing climates, Piedmont red clay soils, and turfgrass types, we help homeowners connect with providers familiar with local lawn care needs.
          </p>
        </div>

        {/* 3 Towns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {SITE_CONFIG.towns.map((town) => (
            <div
              key={town.id}
              className="bg-[#fbfbfa] rounded-2xl p-7 border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#2d6a4f]" aria-hidden="true" />
                    <h3 className="text-2xl font-bold text-[#111827]">
                      {town.name}
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-2 py-1 bg-white rounded border border-[#d1d5db] text-[#374151]">
                    ZIP {town.zip}
                  </span>
                </div>

                <p className="text-sm text-[#4b5563] leading-relaxed">
                  {town.overview}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1b4332] block mb-2">
                    Sample Neighborhoods:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {town.subdivisions.map((neighborhood) => (
                      <span
                        key={neighborhood}
                        className="text-xs bg-white text-[#374151] px-2.5 py-1 rounded-md border border-[#e5e7eb]"
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#e5e7eb]">
                <Link
                  href={`/service-areas#${town.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1b4332] hover:text-[#2d6a4f]"
                >
                  <span>Explore {town.name} lawn care details</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Context Banner */}
        <div className="bg-[#143823] text-white rounded-2xl p-8 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-[#d8f3dc]">
                Local Grass & Soil Guidance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Why Eastern Wake County Requires Region-Specific Yard Care
              </h3>
              <p className="text-sm text-[#d1d5db] leading-relaxed">
                Eastern Wake properties predominantly feature warm-season turf like hybrid Bermuda and Zoysia, or shade-adapted Tall Fescue. Heavy Piedmont clay retains summer heat and compacts easily, making timely summer mowing heights and autumn aeration critical.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 bg-[#d8f3dc] hover:bg-white text-[#143823] text-sm font-bold px-6 py-3 rounded-lg transition-colors"
              >
                <span>Read Full Town Guide</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
