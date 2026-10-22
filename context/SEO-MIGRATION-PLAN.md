# SEO MIGRATION PLAN — KNIGHTDALE LAWN CARE

## Historical Site Background
- **Previous Platform:** WordPress on discontinued Hostinger shared hosting.
- **Current Status:** Previous Hostinger hosting is discontinued/unreachable. Historical WordPress database and XML sitemap are not currently accessible from local files.
- **Principle:** Do not invent historical URLs. Do not blanket redirect every broken URL to the homepage (which creates soft-404 errors in Google Search Console).

## Configured 301 Redirect Rules in `next.config.ts`
To preserve search equity from common WordPress route structures:

| Legacy WordPress URL Path | New Next.js Destination | Rationale |
|---------------------------|-------------------------|-----------|
| `/services` / `/services/` | `/#services` | Routes general services query to services overview |
| `/mowing` / `/lawn-mowing` | `/services/lawn-mowing` | Direct match to dedicated mowing page |
| `/contact` / `/contact-us` | `/quote` | Direct match to quote request landing page |
| `/about` / `/about-us` | `/how-it-works` | Explains platform model & local focus |
| `/knightdale-lawn-care` | `/service-areas#knightdale` | Preserves local Knightdale geo-landing traffic |
| `/wendell-lawn-care` | `/service-areas#wendell` | Preserves local Wendell geo-landing traffic |
| `/zebulon-lawn-care` | `/service-areas#zebulon` | Preserves local Zebulon geo-landing traffic |

## Outstanding Pre-Launch Migration Tasks
1. **Google Search Console Audit:** Once GSC ownership is verified, inspect the "Pages" report for historical URLs that generated impressions/clicks over the last 16 months.
2. **Wayback Machine Crawl:** Check Internet Archive Wayback Machine records for `knightdalelawncare.com` to confirm any high-value legacy blog or subpage URLs.
3. **404 Monitoring:** Implement log monitoring post-launch to identify recurring 404 requests and map them directly to relevant new pages.
