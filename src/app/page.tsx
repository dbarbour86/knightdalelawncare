import React, { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { HowItWorks } from "@/components/HowItWorks";
import { ServiceAreasOverview } from "@/components/ServiceAreasOverview";
import { FaqSection } from "@/components/FaqSection";
import { QuoteSection } from "@/components/QuoteSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <HowItWorks />
      <ServiceAreasOverview />
      <FaqSection />
      <Suspense fallback={<div className="py-24 text-center text-sm text-[#6b7280]">Loading quote request area...</div>}>
        <QuoteSection />
      </Suspense>
    </>
  );
}
