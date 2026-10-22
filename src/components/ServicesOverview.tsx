import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site.config";
import { ArrowRight, Check, Scissors, Leaf, Layers, Sparkles, Ruler, Trees } from "lucide-react";

export function ServicesOverview() {
  const iconMap: Record<string, React.ReactNode> = {
    Scissors: <Scissors className="w-5 h-5 text-[#2d6a4f]" />,
    Leaf: <Leaf className="w-5 h-5 text-[#2d6a4f]" />,
    Layers: <Layers className="w-5 h-5 text-[#2d6a4f]" />,
    Ruler: <Ruler className="w-5 h-5 text-[#2d6a4f]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#2d6a4f]" />,
    Trees: <Trees className="w-5 h-5 text-[#2d6a4f]" />,
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#eef8f1] text-[#1b4332] border border-[#d8f3dc]">
            Requested Lawn Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Common Services Homeowners Request
          </h2>
          <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
            Whether you need routine weekly grass cutting or a seasonal yard overhaul, you can specify your project needs when requesting a quote. Independent local providers review your specific yard parameters to determine exact scope and availability.
          </p>
        </div>

        {/* Featured Visual Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Routine Mowing */}
          <div className="rounded-2xl border border-[#e5e7eb] overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full bg-[#f4f3ef]">
              <Image
                src="/images/mowing-stripes.jpg"
                alt="Freshly mowed lawn with clean lines and sharp sidewalk edging"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute top-3 left-3 bg-[#1b4332] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Recurring Care
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#111827]">
                  Routine Lawn Mowing
                </h3>
                <p className="text-sm text-[#4b5563] mt-2 leading-relaxed">
                  Scheduled turf mowing, hard surface edging, string trimming along fences, and debris blowing. Weekly or bi-weekly arrangements during the growing season.
                </p>
              </div>
              <div className="pt-4 border-t border-[#f3f4f6]">
                <Link
                  href="/services/lawn-mowing"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1b4332] hover:text-[#2d6a4f]"
                >
                  <span>Learn about mowing requests</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Seasonal Cleanup */}
          <div className="rounded-2xl border border-[#e5e7eb] overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full bg-[#f4f3ef]">
              <Image
                src="/images/seasonal-cleanup.jpg"
                alt="Autumn yard cleared of leaves and prepared for winter"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute top-3 left-3 bg-[#b45309] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Seasonal Project
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#111827]">
                  Seasonal Yard Cleanups
                </h3>
                <p className="text-sm text-[#4b5563] mt-2 leading-relaxed">
                  Autumn leaf removal to prevent lawn smothering, winter storm branch pickup, and thorough spring resets to prepare turf for vigorous green-up.
                </p>
              </div>
              <div className="pt-4 border-t border-[#f3f4f6]">
                <Link
                  href="/services/seasonal-cleanup"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1b4332] hover:text-[#2d6a4f]"
                >
                  <span>Learn about cleanup requests</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Mulch & Pine Straw */}
          <div className="rounded-2xl border border-[#e5e7eb] overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full bg-[#f4f3ef]">
              <Image
                src="/images/pine-straw-mulch.jpg"
                alt="Fresh pine straw and double-shredded mulch around home foundation beds"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute top-3 left-3 bg-[#2d6a4f] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Bed Refresh
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#111827]">
                  Pine Straw & Mulch
                </h3>
                <p className="text-sm text-[#4b5563] mt-2 leading-relaxed">
                  Crisp spade trench borders, weed suppression, and uniform installation of North Carolina longleaf pine straw or dark double-shredded hardwood mulch.
                </p>
              </div>
              <div className="pt-4 border-t border-[#f3f4f6]">
                <Link
                  href="/services/mulch-pine-straw"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1b4332] hover:text-[#2d6a4f]"
                >
                  <span>Learn about mulch & straw</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Configurable Services List */}
        <div className="bg-[#f8faf7] rounded-2xl p-6 sm:p-8 border border-[#e2e8f0]">
          <h3 className="text-lg font-bold text-[#111827] mb-4">
            Additional Yard Inquiries You Can Submit
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SITE_CONFIG.services.slice(3).map((service) => (
              <div key={service.id} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-[#eef8f1] border border-[#d8f3dc]">
                    {iconMap[service.iconName] || <Scissors className="w-5 h-5 text-[#2d6a4f]" />}
                  </div>
                  <h4 className="font-semibold text-sm text-[#111827]">{service.title}</h4>
                </div>
                <p className="text-xs text-[#4b5563] leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-[#e5e7eb] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#4b5563]">
            <span>Need something specific? Select "Other / Custom Request" on the quote form.</span>
            <Link
              href="/#quote"
              className="text-xs font-semibold text-[#1b4332] hover:underline"
            >
              Start a custom quote request →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
