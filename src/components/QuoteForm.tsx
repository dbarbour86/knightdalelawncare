"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/config/site.config";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface QuoteFormProps {
  isPreviewMode?: boolean;
}

export function QuoteForm({ isPreviewMode = false }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    town: "Knightdale",
    serviceId: "lawn-mowing",
    contactMethod: "phone" as "phone" | "email",
    contactValue: "",
    yardDetails: "",
    honeypot: "", // Spam prevention field
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successInfo, setSuccessInfo] = useState<{ referenceId?: string; message?: string }>({});

  const validate = (): string | null => {
    if (!formData.fullName.trim()) {
      return "Please enter your name.";
    }
    if (!formData.town) {
      return "Please select your town.";
    }
    if (!formData.serviceId) {
      return "Please choose the primary service you need.";
    }
    if (!formData.contactValue.trim()) {
      return formData.contactMethod === "phone"
        ? "Please enter your telephone number."
        : "Please enter your email address.";
    }

    if (formData.contactMethod === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.contactValue.trim())) {
        return "Please enter a valid email address.";
      }
    } else {
      const phoneDigits = formData.contactValue.replace(/\D/g, "");
      if (phoneDigits.length < 10) {
        return "Please enter a valid 10-digit phone number.";
      }
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Spam honeypot check
    if (formData.honeypot) {
      console.warn("Spam submission blocked by honeypot filter.");
      return;
    }

    const error = validate();
    if (error) {
      setErrorMessage(error);
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          isPreview: isPreviewMode,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to submit quote request. Please try again.");
      }

      setStatus("success");
      setSuccessInfo({
        referenceId: data.referenceId,
        message: data.message,
      });
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setErrorMessage(message);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#eef8f1] border border-[#d8f3dc] rounded-2xl p-8 text-center space-y-4">
        <div className="w-14 h-14 bg-[#1b4332] text-white rounded-full flex items-center justify-center mx-auto shadow">
          <CheckCircle2 className="w-8 h-8 text-[#d8f3dc]" />
        </div>
        <h3 className="text-2xl font-bold text-[#111827]">
          Quote Request Received!
        </h3>
        <p className="text-sm text-[#374151] max-w-md mx-auto leading-relaxed">
          {successInfo.message || "Thank you. Your yard details have been submitted. An independent local lawn care specialist will review your request and reach out directly."}
        </p>
        {successInfo.referenceId && (
          <div className="inline-block bg-white px-4 py-2 rounded-lg border border-[#d1d5db] text-xs font-mono text-[#374151]">
            Confirmation Reference: <span className="font-bold">{successInfo.referenceId}</span>
          </div>
        )}
        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData({
                fullName: "",
                town: "Knightdale",
                serviceId: "lawn-mowing",
                contactMethod: "phone",
                contactValue: "",
                yardDetails: "",
                honeypot: "",
              });
            }}
            className="text-xs font-semibold text-[#1b4332] underline hover:text-[#2d6a4f]"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#e5e7eb] shadow-md">
      {isPreviewMode && (
        <div className="bg-[#fffbeb] border border-[#fde68a] text-[#92400e] text-xs p-3 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>
            <strong>Local Design Preview Mode:</strong> You are testing the interactive form design. In preview mode, submission tests validation without dispatching to external webhook recipients.
          </span>
        </div>
      )}

      {errorMessage && (
        <div
          role="alert"
          className="bg-[#fef2f2] border border-[#fecaca] text-[#991b1b] text-sm p-3.5 rounded-lg flex items-center gap-2"
        >
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Honeypot hidden input for spam bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_field">Leave this empty</label>
        <input
          id="hp_field"
          type="text"
          name="honeypot"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        />
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-[#111827] mb-1">
          Full Name <span className="text-[#b45309]">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          required
          placeholder="e.g. Sarah Jenkins"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-[#d1d5db] bg-white text-[#111827] text-sm focus:border-[#2d6a4f] focus:ring-1 focus:ring-[#2d6a4f] outline-none"
        />
      </div>

      {/* Town Dropdown */}
      <div>
        <label htmlFor="town" className="block text-sm font-semibold text-[#111827] mb-1">
          Town / Community in Eastern Wake <span className="text-[#b45309]">*</span>
        </label>
        <select
          id="town"
          required
          value={formData.town}
          onChange={(e) => setFormData({ ...formData, town: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-[#d1d5db] bg-white text-[#111827] text-sm focus:border-[#2d6a4f] focus:ring-1 focus:ring-[#2d6a4f] outline-none"
        >
          {SITE_CONFIG.towns.map((town) => (
            <option key={town.id} value={town.name}>
              {town.name}, NC ({town.zip})
            </option>
          ))}
          <option value="Other Eastern Wake">Other nearby Eastern Wake neighborhood</option>
        </select>
      </div>

      {/* Requested Service */}
      <div>
        <label htmlFor="serviceId" className="block text-sm font-semibold text-[#111827] mb-1">
          Primary Service Requested <span className="text-[#b45309]">*</span>
        </label>
        <select
          id="serviceId"
          required
          value={formData.serviceId}
          onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-[#d1d5db] bg-white text-[#111827] text-sm focus:border-[#2d6a4f] focus:ring-1 focus:ring-[#2d6a4f] outline-none"
        >
          {SITE_CONFIG.services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
          <option value="other-custom">Other / Multiple Lawn Services</option>
        </select>
      </div>

      {/* Preferred Contact Method */}
      <div>
        <fieldset>
          <legend className="text-sm font-semibold text-[#111827] mb-2">
            Preferred Contact Method <span className="text-[#b45309]">*</span>
          </legend>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm text-[#374151] cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={formData.contactMethod === "phone"}
                onChange={() => setFormData({ ...formData, contactMethod: "phone", contactValue: "" })}
                className="text-[#1b4332] focus:ring-[#2d6a4f]"
              />
              <span>Phone Call / Text</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-[#374151] cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={formData.contactMethod === "email"}
                onChange={() => setFormData({ ...formData, contactMethod: "email", contactValue: "" })}
                className="text-[#1b4332] focus:ring-[#2d6a4f]"
              />
              <span>Email</span>
            </label>
          </div>
        </fieldset>
      </div>

      {/* Contact Value (Phone or Email) */}
      <div>
        <label htmlFor="contactValue" className="block text-sm font-semibold text-[#111827] mb-1">
          {formData.contactMethod === "phone" ? "Your Phone Number" : "Your Email Address"} <span className="text-[#b45309]">*</span>
        </label>
        <input
          id="contactValue"
          type={formData.contactMethod === "phone" ? "tel" : "email"}
          required
          placeholder={formData.contactMethod === "phone" ? "(919) 555-0123" : "name@example.com"}
          value={formData.contactValue}
          onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-[#d1d5db] bg-white text-[#111827] text-sm focus:border-[#2d6a4f] focus:ring-1 focus:ring-[#2d6a4f] outline-none"
        />
        <p className="text-[11px] text-[#6b7280] mt-1">
          No street address required at this step. Only shared with the local specialist reviewing your request.
        </p>
      </div>

      {/* Optional Yard Details */}
      <div>
        <label htmlFor="yardDetails" className="block text-sm font-semibold text-[#111827] mb-1">
          Yard Details or Notes <span className="text-xs font-normal text-[#6b7280]">(Optional)</span>
        </label>
        <textarea
          id="yardDetails"
          rows={3}
          placeholder="e.g. Corner lot, fenced backyard with double gate, Tall Fescue grass, looking for weekly mowing starting next month."
          value={formData.yardDetails}
          onChange={(e) => setFormData({ ...formData, yardDetails: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-[#d1d5db] bg-white text-[#111827] text-sm focus:border-[#2d6a4f] focus:ring-1 focus:ring-[#2d6a4f] outline-none resize-y"
        />
      </div>

      {/* Submission Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full btn-primary text-base py-3.5 px-6 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed justify-center"
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Transmitting Request...</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span>Submit Free Quote Request</span>
              <Send className="w-4 h-4" />
            </span>
          )}
        </button>
      </div>

      {/* Transparency & Privacy Notice */}
      <p className="text-[11px] text-[#6b7280] text-center leading-relaxed">
        By submitting, you agree to receive direct communication regarding this lawn care inquiry from an independent local provider. We never sell personal information. See our{" "}
        <a href="/privacy" className="underline hover:text-[#111827]">Privacy Policy</a>.
      </p>
    </form>
  );
}
