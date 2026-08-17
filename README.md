# Manitham HRMS — Marketing Website

The public, SEO-first marketing site for Manitham HRMS. Next.js App Router, TypeScript, Tailwind CSS v4. No authentication or app logic lives here — this repo is `www`, not `app`.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Before launch — placeholders to replace

A few things are intentionally stubbed rather than fabricated, since real values weren't available while building this:

| What | Where | Notes |
|---|---|---|
| Production domain | `lib/site-config.ts` (`url`), or set `NEXT_PUBLIC_SITE_URL` | Currently `https://www.manithamhrms.com` — drives every canonical URL, sitemap entry and OG tag. |
| Contact email/phone/WhatsApp | `lib/site-config.ts` (`contact`) | Placeholder phone number — update before launch. |
| Lead form delivery | `LEAD_WEBHOOK_URL` env var, read in `lib/actions/submit-lead.ts` | Contact/demo forms validate and "succeed" today but don't deliver anywhere until this points at a CRM intake endpoint or email function. |
| Analytics | `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var | `components/analytics/GoogleAnalytics.tsx` only loads GA4 if this is set — no ID is hardcoded. |
| Customer logos / testimonials / usage stats | `lib/data/social-proof.ts` | Empty on purpose — the `TrustBar` and `Testimonials` components render nothing until real, factual entries are added. Never fill these with placeholder numbers. |
| Legal pages | `/privacy-policy`, `/terms-of-service` | Generic templates — have counsel review before launch. |
| Favicon / OG image | `app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx` | Generated programmatically (brand-colored "M" mark) since no real logo asset existed. Swap for real brand assets if/when available. |

## Architecture

- **`lib/seo/keyword-map.ts`** — single source of truth for every core page's primary/secondary keywords, title, description and H1. Pages build their metadata from this instead of hardcoding strings, so no two pages compete for the same primary keyword.
- **`lib/seo/metadata.ts` / `lib/seo/schema.ts`** — shared helpers for `Metadata` objects and JSON-LD (Organization, WebSite, SoftwareApplication, BreadcrumbList, FAQPage, Article).
- **`components/templates/FeaturePageTemplate.tsx`** — shared layout for the 10 core product pages (`/hrms-software`, `/payroll-software`, etc.) — hero, overview, capabilities, benefits, FAQ, related links, CTA. Each page supplies its own content object.
- **`components/templates/IndustryPageTemplate.tsx`** / **`ArticleLayout.tsx`** — same idea for `/industries/*` and `/resources/*`.
- **`components/illustrations/AppMockup.tsx`** — stylized CSS/SVG product illustrations (no stock photography, no fabricated screenshots).
- Almost everything is a Server Component. Client boundaries are limited to the nav dropdown/mobile menu (`components/layout/SiteNav.tsx`) and the lead form (`components/forms/LeadForm.tsx`).

## Adding a page

1. Add a `PageSeoEntry` to `lib/seo/keyword-map.ts`.
2. Create `app/<route>/page.tsx`, build `metadata` via `buildMetadata(keywordMap.yourEntry)`, and either use `FeaturePageTemplate`/`IndustryPageTemplate` or compose sections directly (see `app/pricing/page.tsx` for a fully custom example).
3. Add the route to any relevant nav in `lib/data/nav.ts` and to internal links (`RelatedLinks`) on related pages.
4. `app/sitemap.ts` picks up every `keywordMap` entry automatically — no manual step needed there.

## What's scaffolded vs. what's left

Built out fully: homepage, all 10 core feature pages, pricing, about, contact, book-demo, 3 industry pages (small business, startups, manufacturing), a 4-article resource hub, sitemap/robots/manifest, legal pages.

Intentionally not built (per the original scope — avoid thin/duplicate pages): the remaining industries listed in the brief (schools, hospitals, restaurants, construction, retail) and city/location landing pages. Add them only when there's genuinely unique content for that industry or location, following the pattern above.
