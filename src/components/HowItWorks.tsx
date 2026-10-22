import React from "react";
import Link from "next/link";
import { FileText, UserCheck, MessageSquare, ShieldAlert, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <FileText className="w-6 h-6 text-[#1b4332]" />,
      title: "Tell Us What Your Yard Needs",
      desc: "Fill out a straightforward 60-second request with your town (Knightdale, Wendell, or Zebulon), requested services (such as recurring mowing or seasonal cleanup), and your preferred contact method.",
    },
    {
      number: "02",
      icon: <UserCheck className="w-6 h-6 text-[#1b4332]" />,
      title: "Review & Local Provider Connection",
      desc: "When matching is active, your request is reviewed against local route coverage and shared with an independent local lawn care specialist who works in your immediate neighborhood.",
    },
    {
      number: "03",
      icon: <MessageSquare className="w-6 h-6 text-[#1b4332]" />,
      title: "Discuss Scope & Pricing Directly",
      desc: "The independent provider contacts you directly via your chosen method to discuss specific lawn dimensions, scheduling, and pricing. You evaluate the estimate with zero pressure and zero obligation.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#f8faf7] border-y border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ffffff] text-[#1b4332] border border-[#d8f3dc] shadow-sm">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            How Requesting a Lawn Care Quote Works
          </h2>
          <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
            We provide a simple bridge between homeowners who want dependable yard care and independent local lawn care specialists operating in Eastern Wake County.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#eef8f1] border border-[#d8f3dc] flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-[#d1d5db]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Expectations Callout */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#d1d5db]/80 max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-[#b45309] shrink-0 mt-1" aria-hidden="true" />
            <div className="space-y-2 text-sm text-[#374151]">
              <h4 className="font-bold text-[#111827]">
                What You Can Honestly Expect (Our Transparency Promise)
              </h4>
              <p className="leading-relaxed">
                We believe in full transparency. We do not promise instant computerized matching, guaranteed job acceptance, or instant online booking. Lawn care pricing and scheduling depend on actual lawn size, grass type, terrain, and provider schedule capacity. You always deal directly with the service provider.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
