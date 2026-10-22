# Knightdale Lawn Care — Project Documentation & Build Guide

> **Production Canonical URL:** https://knightdalelawncare.com  
> **Local Project Location:** `D:\Projects\KnightdaleLawnCare` (also accessible via directory junction `D:\Projects\knightdale-lawn-care`)  
> **Repository Foundation:** Standalone copy of `BOOKMOAR-WEBSITE-STARTER` (isolated, read-only origin foundation, no git remote pointing to starter).

---

## 1. Reusable Project Brief

```text
SOURCE REPOSITORY:
https://github.com/dbarbour86/BOOKMOAR-WEBSITE-STARTER

Use the main branch as the read-only source. If a local copy is unavailable, retrieve it using my existing GitHub authentication.

Copy its files into a new standalone folder named knightdale-lawn-care, excluding .git, credentials, .env files, dependencies, and build outputs.

Do not modify the source repository or its master files. Do not create or switch branches. The new project must have no Git remote pointing to the starter.

Then follow the full Knightdale Lawn Care brief below. No push or deployment.

Build a polished, high-converting local lawn care lead-generation website for KnightdaleLawnCare.com using a separate copy of my BOOKMOAR-WEBSITE-STARTER.

PROJECT ISOLATION — DO THIS FIRST
- Treat the original Book Moar starter repository, master prompt, and master files as READ-ONLY.
- Locate and read its README, project instructions, and relevant skills before starting.
- Duplicate the starter into a new sibling folder named knightdale-lawn-care.
- Do not copy .git, node_modules, build outputs, credentials, or existing .env files.
- Do not create or switch Git branches, initialize Git, add a remote, commit, push, or deploy.
- Work only inside the new project folder.
- If the starter cannot be located, ask me for its location. Do not substitute an unrelated project.
- Confirm the source and destination paths before making changes, then proceed without asking for routine implementation decisions.

GOAL
Create a premium, trustworthy, mobile-first website that generates lawn care quote requests from homeowners in Knightdale, Wendell, and Zebulon, North Carolina.

This is an independent lead-generation website. A lawn care provider will be selected later. Do not present the website as an established lawn care company or suggest a provider is already partnered with it.

Use the starter’s relevant design, conversion, accessibility, and SEO guidance. Adapt the design to lawn care instead of preserving an agency layout. Remove Book Moar branding, package pricing, demos, and unrelated client content.
```

---

## 2. Project Status & Verified Facts vs. Unknowns

### Verified Facts (Approved)
- **Business Identity:** Knightdale Lawn Care
- **Platform Model:** Independent quote-request & referral platform connecting homeowners with local lawn specialists.
- **Service Towns:** Knightdale (27545), Wendell (27591), and Zebulon (27597), Eastern Wake County, NC.
- **Requested Services Supported:**
  - Routine Lawn Mowing & Maintenance (Weekly/Bi-Weekly)
  - Seasonal Yard Cleanups (Spring & Fall leaf clearing)
  - Pine Straw & Mulch Installation
  - Precision Edging & String Trimming
  - Core Aeration & Overseeding Inquiries
  - Hedge & Shrub Shaping
- **Contact Email:** inquiries@knightdalelawncare.com

### Explicit Guardrails Implemented
- **No Direct Contractor Claims:** Prominent referral disclosures in header, hero, footer, `/how-it-works`, `/terms`, and `/privacy`.
- **No Fabricated Trust Elements:** ZERO invented Google reviews, stars, badges, licenses, insurance certificates, or employee counts.
- **Phone Number Omitted:** No phone number is displayed until a confirmed active business line is provided.
- **Accurate Schema Only:** Uses Schema.org `WebSite` and `Service` schemas. No fake `LocalBusiness` schema for a non-existent contractor entity.

### Information Still Needed Before Live Launch
1. **Confirmed Business Phone:** If phone intake is desired, provide an active verified number.
2. **Provider Onboarding:** Finalize the independent lawn care specialist(s) who will receive routed leads.
3. **Webhook Endpoint:** Configure the CRM or lead processing URL (`QUOTE_WEBHOOK_URL`).
4. **Analytics Property:** Provide GA4 or Tag Manager Measurement ID (`NEXT_PUBLIC_GA_ID`).
5. **Legacy WordPress URL Verification:** Check Google Search Console for any legacy URLs needing custom 301 mapping beyond the defaults already in `next.config.ts`.

---

## 3. Local Startup & Commands

### Prerequisites
- Node.js (v20+ or v22+)
- npm

### Installation
Dependencies are already installed in this directory:
```bash
npm.cmd install
```

### Running Locally (Development Mode)
```bash
npm.cmd run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production Validation
```bash
npm.cmd run build
```

---

## 4. Configuration & Preview Mode

The application is centrally controlled by `src/config/site.config.ts`:

### Lead Collection State (Disabled by Default)
By default:
```typescript
SITE_CONFIG.leadGeneration.enabled = false;
```
When disabled:
- The website displays a polished, honest **Pre-Launch Message** explaining that provider onboarding is currently in progress for the season.
- Homeowners cannot submit personal details to a dead form.

### Form Design Preview Mode
To inspect and test the interactive form design and validation without turning on live lead collection:
1. Append `?preview=form` to any page URL (e.g. `http://localhost:3000/#quote?preview=form` or `http://localhost:3000/quote?preview=form`).
2. Alternatively, click the **"Test Form Preview (Design Review Mode)"** button directly on the pre-launch notice card.
3. In preview mode, submissions test all client-side and server-side validation checks and return a simulated confirmation reference without contacting external endpoints.

---

## 5. Live Lead Activation & Webhook Integration

### Activating Live Lead Collection
When ready to accept live homeowner quote inquiries:
1. Set in `.env.local` or hosting environment:
   ```env
   LEAD_COLLECTION_ENABLED=true
   QUOTE_WEBHOOK_URL=https://your-crm.com/api/v1/leads/knightdale
   QUOTE_WEBHOOK_SECRET=your_optional_signing_secret
   ```
2. Set in `src/config/site.config.ts`:
   ```typescript
   leadGeneration: {
     enabled: true,
     ...
   }
   ```

### Webhook Payload Specification
The server-side route handler at `src/app/api/quote/route.ts` dispatches a `POST` request with:

**Headers:**
```http
Content-Type: application/json
X-Webhook-Secret: <your_secret_if_configured>
```

**JSON Payload Body:**
```json
{
  "event": "quote_requested",
  "timestamp": "2026-10-21T19:30:00.000Z",
  "referenceId": "KLC-2026-84920",
  "source": "https://knightdalelawncare.com",
  "lead": {
    "fullName": "Jane Doe",
    "town": "Knightdale",
    "serviceId": "lawn-mowing",
    "contactMethod": "phone",
    "contactValue": "(919) 555-0123",
    "yardDetails": "Fenced backyard, Tall Fescue, looking for weekly service."
  }
}
```

**Security & Privacy Features:**
- Webhook credentials remain strictly server-side (`process.env.QUOTE_WEBHOOK_URL`).
- Honeypot bot protection rejects automated spam submissions without execution.
- No personal data (PII) is written to server stdout/stderr console logs.
- Duplicate submission debouncing is built into the form UI.

---

## 6. Pre-Launch SEO & Production Indexing Controls

### Staging / Pre-Launch Protection
By default, search engine crawling is restricted:
- `NEXT_PUBLIC_ALLOW_INDEXING=false`
- `src/app/robots.ts` serves `Disallow: /` for all crawlers.
- `<meta name="robots" content="noindex, nofollow" />` is output on all rendered pages.

### Enabling Production Indexing
Once the site is reviewed and approved for public indexing:
1. Set in production environment:
   ```env
   NEXT_PUBLIC_ALLOW_INDEXING=true
   ```
2. The site automatically switches to `index: true, follow: true` and serves the dynamic XML sitemap at `https://knightdalelawncare.com/sitemap.xml`.

---

## 7. Migration Mapping from Old WordPress Site

Configured 301 redirects are built into `next.config.ts`:

- `/services` → `/#services`
- `/mowing` & `/lawn-mowing` → `/services/lawn-mowing`
- `/contact` & `/contact-us` → `/quote`
- `/about` & `/about-us` → `/how-it-works`
- `/knightdale-lawn-care` → `/service-areas#knightdale`
- `/wendell-lawn-care` → `/service-areas#wendell`
- `/zebulon-lawn-care` → `/service-areas#zebulon`

---

## 8. Pre-Launch QA Checklist
- [x] Standalone folder isolation verified.
- [x] Zero references to Book Moar branding, package pricing, or demos.
- [x] Mobile-first responsive layouts with generous tap targets.
- [x] Deep green palette with high-contrast amber conversion CTAs.
- [x] Lead collection disabled by default with honest pre-launch notice.
- [x] Form preview mode available for client review.
- [x] Server-side API validation and spam honeypot implemented.
- [x] Canonical URLs set to `https://knightdalelawncare.com`.
- [x] XML sitemap & robots.txt indexing controls implemented.
- [x] Schema.org WebSite & Service structured data added (no fake reviews or business ratings).
- [ ] Connect live webhook endpoint prior to launch.
- [ ] Connect confirmed business phone line when available.
- [ ] Add Google Analytics 4 ID when ready.
