# BOOK MOAR — CLIENT INTAKE & SPECIFICATION

## 0. CONFIRMED CLIENT IDENTITY
- **Business / Site Name:** Knightdale Lawn Care
- **Website / Domain:** knightdalelawncare.com (Production canonical: https://knightdalelawncare.com)
- **Primary Towns Covered:** Knightdale, Wendell, and Zebulon, Eastern Wake County, North Carolina
- **Business Type:** Independent Local Lead-Generation & Quote-Referral Website (Connecting homeowners with independent local lawn care specialists; direct lawn care provider to be selected/onboarded later)
- **Confirmed by user:** YES
- **Confirmation notes:** Lead-generation referral site built from Book Moar starter. No claims of being an established lawn contractor or pre-partnered provider.

---

## 1. BUSINESS PROFILE & STATUS
- **Domain:** knightdalelawncare.com
- **Primary Market:** Eastern Wake County, NC (Knightdale 27545, Wendell 27591, Zebulon 27597)
- **Status:** Pre-launch. Lead collection disabled by default until provider relationship and webhook delivery are finalized.
- **Direct Phone:** NONE CONFIRMED (Twilio number status unknown; phone omitted from UI until active number is confirmed).
- **Contact Email:** inquiries@knightdalelawncare.com

---

## 2. SERVICES HOMEOWNERS CAN REQUEST
- **Routine Lawn Mowing & Maintenance:** Scheduled mowing, edge trimming, line weed eating, clipping cleanup (weekly / bi-weekly during April–October growing season).
- **Seasonal Yard Cleanups:** Autumn leaf removal, winter storm debris/fallen branch pickup, spring turf resuscitation.
- **Pine Straw & Mulch Installation:** Longleaf pine straw rolls and double-shredded hardwood mulch application with trench edging.
- **Edging & String Trimming:** Perimeter definition along driveways, curbs, tree rings, and fences.
- **Core Aeration & Overseeding:** Fall clay soil compaction alleviation and Tall Fescue seed application.
- **Hedge & Shrub Shaping:** Light foundational hedge trimming and bush pruning.

---

## 3. USER JOURNEY & CONVERSION FLOW
- **Primary Goal:** Free quote request from homeowners in Knightdale, Wendell, and Zebulon.
- **Process:**
  1. Homeowner describes yard needs, town, and contact preference.
  2. Request reviewed against route coverage (when matching is active).
  3. Independent local provider contacts homeowner directly for pricing and scheduling.
- **Pre-Launch Guardrail:** Lead collection disabled by default. Clear, honest pre-launch status shown. Form preview mode available for design review (`?preview=form`).

---

## 4. TRUST & ACCURACY RULES (CRITICAL)
- No fabricated reviews, Google ratings, awards, licenses, insurance certificates, or employee counts.
- No false claims of direct landscaping operations.
- Clear independent referral disclosure published on homepage, footer, how-it-works, and terms.
- No stock photography portrayed as completed local customer projects.
- No street address required during quote request.

---

## 5. TECHNICAL ARCHITECTURE
- **Framework:** Next.js (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4, custom CSS variables, WCAG AA contrast, reduced-motion compliance
- **Rendering:** Server-Side Rendering (SSR) & Static Generation for complete HTML crawlability
- **SEO:** Canonical URLs, dynamic XML sitemap, robots.txt with staging noindex protection, Schema.org WebSite & Service structured data
- **API Integration:** Server-side route handler `/api/quote` ready for CRM webhook integration
