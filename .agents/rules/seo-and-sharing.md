---
trigger: glob
globs: **/app/**/*.tsx, **/app/**/*.ts
---

# SEO, Local Search & Messenger Preview Rules

## Messenger Link Previews (Viber / Telegram / WhatsApp)
- Because many visitors receive the website link via Viber, Telegram, or WhatsApp word-of-mouth referrals, every root/page `layout.tsx` or `page.tsx` **must** export Next.js `Metadata` with:
  - Clear, native-language `title` and `description` summarizing the core service and location.
  - Complete `openGraph` (`title`, `description`, `type: 'website'`, `locale`, and `images` when available).
- Keep OpenGraph titles under 60 characters and descriptions under 155 characters so they do not truncate in mobile chat bubbles.

## Local SEO & Structured Data
- Include a `<script type="application/ld+json">` block with `LocalBusiness` or `ProfessionalService` Schema.org structured data (service area, services offered, contact points, languages spoken).
- Maintain a single `<h1>` per page that directly matches what clients search for (e.g., Ukrainian GPS firmware/maps for trucks, or Property Valuation Consultant).
