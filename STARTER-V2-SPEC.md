# Book Moar Starter V2 — Design & Delivery Standard

Status: design specification, not implemented. Branch: feature/starter-v2-design-system.

## Outcome
Build polished, high-trust, fast local service websites that turn visitors into qualified conversations and booked jobs. Reference the supplied Go-Forth Pest Control screenshot for *patterns only*; never copy its layout, logos, text, artwork, or brand.

## Design requirements
- Above-fold desktop header: verified Google rating/review count when legitimately available, true credentials, logo, navigation, phone and primary CTA. No fake stars, awards or unverifiable claims.
- Hero: one benefit-led headline, brief supporting copy, real client imagery when available, one primary CTA, optional secondary phone action. Avoid oversized forms in the hero.
- Editorial visual rhythm: contrasting light/dark sections, generous whitespace, readable typography, meaningful photography, limited purposeful cards, mobile-first.
- Homepage: hero; concise service overview linking to dedicated pages; authentic company/team story; selected verifiable reviews; service-area summary; short quote CTA; footer. Optional modules only when supported by client facts.
- Every client must have its own design tokens (colors, typography, imagery and shape). Do not force the reference site's red/black identity on clients.

## Reusable contact launcher
Build a branded, accessible, lazy-loaded floating widget with configurable actions: Call (tel:), Text (sms:), Request Quote (short form), Book (only with real configured scheduling URL), and Chat (only with an actual connected service). Hide unconfigured channels rather than presenting dead buttons.
- Small collapsed launcher; keyboard operable; focus trap and Escape handling when expanded; descriptive labels; safe mobile viewport spacing; no intrusive automatic popup.
- Form: name, contact method, service, optional message and required consent disclosures as appropriate. Server-side validation, anti-spam, rate limits, privacy-conscious retention, clear success/failure states. Do not send personal data to analytics.
- Provider adapter interface, initially Votel when documented API/MCP capabilities, auth, permission scopes, costs and webhook signatures are verified. Never place API secrets in client-side code. Support later CRM provider replacement.
- If Votel cannot provide a function, disclose that and use a clearly scoped fallback; do not claim working SMS/chat/booking until end-to-end tested.
- On mobile ensure the launcher doesn't obscure core content or browser controls.

## SEO and performance
- Unique useful service pages; verified locations/service areas; no doorway-city page generation.
- Semantic HTML, accessible headings and links, internal linking, breadcrumbs, titles, descriptions, canonical URLs, sitemap, robots, correct redirects and 404s.
- Relevant verified structured data (LocalBusiness / service / breadcrumb as applicable). Never invent review snippets or promise Google star rich results.
- Optimized responsive images, font loading, deferred third-party scripts, strong Core Web Vitals.
- Keep public page content crawlable independent of the widget.

## Deployment safety
- Preserve DNS zone/export before changes. Change only website DNS records; never touch MX/SPF/DKIM/DMARC without explicit email migration authorization.
- Build on isolated feature branch; no deployment to production or merging without review.
- Audit current starter structure and preserve working functionality.
- Capture and review desktop and mobile screenshots. Test keyboard navigation, contact flows, form delivery, metadata, schema, broken links, build/lint, and Lighthouse.
- No invented business facts. Record evidence/source for every rating, award, years-in-business claim, contact address and phone.

## Implementation sequence
1. Audit starter code, routes, components, deployment and any existing client assumptions.
2. Define reusable configuration schema and design tokens.
3. Build one demo homepage and custom contact launcher with mocked provider (clearly labeled).
4. Screenshot review and approval before expanding to other pages.
5. Build service/contact templates and SEO infrastructure.
6. Verify Votel integration capabilities and connect only approved, tested operations.
7. Complete mobile/desktop QA and create a migration checklist.
8. Propose PR; do not merge or deploy without approval.

## Acceptance criteria
- Looks like a credible established service company, not a SaaS dashboard.
- Trust elements are prominent, authentic and legible.
- Every visible contact method actually works or is omitted.
- Content and calls to action are readable and obvious on mobile.
- Existing DNS/email unaffected.
- No production change without approval.
