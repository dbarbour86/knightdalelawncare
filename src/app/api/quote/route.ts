import { NextRequest, NextResponse } from "next/server";
import { SITE_CONFIG } from "@/config/site.config";

interface QuoteSubmissionBody {
  fullName: string;
  town: string;
  serviceId: string;
  contactMethod: "phone" | "email";
  contactValue: string;
  yardDetails?: string;
  honeypot?: string;
  isPreview?: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body: QuoteSubmissionBody = await req.json();

    // 1. Honeypot Bot Detection
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json(
        { error: "Spam detection triggered." },
        { status: 400 }
      );
    }

    // 2. Server-Side Validation
    if (!body.fullName || typeof body.fullName !== "string" || body.fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "A valid full name is required." },
        { status: 400 }
      );
    }

    if (!body.town || typeof body.town !== "string") {
      return NextResponse.json(
        { error: "Town selection is required." },
        { status: 400 }
      );
    }

    if (!body.serviceId || typeof body.serviceId !== "string") {
      return NextResponse.json(
        { error: "Requested service selection is required." },
        { status: 400 }
      );
    }

    if (body.contactMethod !== "phone" && body.contactMethod !== "email") {
      return NextResponse.json(
        { error: "Invalid contact method." },
        { status: 400 }
      );
    }

    if (!body.contactValue || typeof body.contactValue !== "string" || body.contactValue.trim() === "") {
      return NextResponse.json(
        { error: "Contact information (phone or email) is required." },
        { status: 400 }
      );
    }

    if (body.contactMethod === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.contactValue.trim())) {
        return NextResponse.json(
          { error: "Please provide a valid email address." },
          { status: 400 }
        );
      }
    } else {
      const digitsOnly = body.contactValue.replace(/\D/g, "");
      if (digitsOnly.length < 10) {
        return NextResponse.json(
          { error: "Please provide a valid 10-digit phone number." },
          { status: 400 }
        );
      }
    }

    // 3. Lead Collection Status & Local Preview Check
    const isLiveCollectionEnabled =
      process.env.LEAD_COLLECTION_ENABLED === "true" || SITE_CONFIG.leadGeneration.enabled;

    // Local preview mode validation (returns simulated success for UI design checks)
    if (body.isPreview) {
      const previewRef = `PREVIEW-${Math.floor(100000 + Math.random() * 900000)}`;
      return NextResponse.json({
        success: true,
        referenceId: previewRef,
        message:
          "Form design preview validated successfully. In live production mode, this request dispatches directly to the configured webhook recipient.",
        preview: true,
      });
    }

    // If live lead collection is not enabled and not in preview, do not accept personal data
    if (!isLiveCollectionEnabled) {
      return NextResponse.json(
        {
          error:
            "Quote requests are temporarily in seasonal onboarding mode and not currently accepting submissions. Please check back soon.",
        },
        { status: 503 }
      );
    }

    // 4. Webhook Dispatch (Server-side only)
    const webhookUrl = process.env.QUOTE_WEBHOOK_URL;
    const webhookSecret = process.env.QUOTE_WEBHOOK_SECRET;

    if (!webhookUrl) {
      // If live is declared true but webhook URL is not configured
      console.error("[Quote API] Webhook delivery requested but QUOTE_WEBHOOK_URL is missing.");
      return NextResponse.json(
        {
          error:
            "Lead delivery endpoint is currently unconfigured. Please contact support or try again later.",
        },
        { status: 500 }
      );
    }

    const referenceId = `KLC-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const timestamp = new Date().toISOString();

    const webhookPayload = {
      event: "quote_requested",
      timestamp,
      referenceId,
      source: "https://knightdalelawncare.com",
      lead: {
        fullName: body.fullName.trim(),
        town: body.town,
        serviceId: body.serviceId,
        contactMethod: body.contactMethod,
        contactValue: body.contactValue.trim(),
        yardDetails: body.yardDetails?.trim() || null,
      },
    };

    // Forward to private webhook endpoint
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(webhookSecret ? { "X-Webhook-Secret": webhookSecret } : {}),
      },
      body: JSON.stringify(webhookPayload),
    });

    if (!response.ok) {
      console.error(`[Quote API] Webhook dispatch returned HTTP ${response.status}`);
      return NextResponse.json(
        { error: "Service delivery error. Please try again shortly." },
        { status: 502 }
      );
    }

    // Safe anonymized logging without PII
    console.info(`[Quote API] Dispatched quote lead ${referenceId} for town: ${body.town}, service: ${body.serviceId}`);

    return NextResponse.json({
      success: true,
      referenceId,
      message:
        "Your quote request has been received. An independent local lawn care specialist will review your property details and contact you directly.",
    });
  } catch (error: unknown) {
    console.error("[Quote API] Unexpected handler error:", error instanceof Error ? error.message : "unknown");
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
