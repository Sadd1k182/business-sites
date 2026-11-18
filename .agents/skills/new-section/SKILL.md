---
name: new-section
description: >-
  Scaffolds a new website section, page, or interactive widget (e.g. FAQ, Supported
  GPS Models, Services Grid, or Chat Widget) in Next.js + Tailwind CSS with typed
  content data and build verification. Use when asked to create a new section,
  component, or feature on either site.
---

# Scaffold a New Website Section or Interactive Widget (`new-section`)

Follow these steps whenever the user asks to create a new page section or interactive feature:

## 1. Clarify Target Site & Scope
1. Confirm the target site (`sites/gps-pc-service` or `sites/property-valuation`).
2. Decide whether the component is a pure **Server Component** (static content, SEO-indexed) or needs a small **Client Component** island (`'use client'` for search filtering, accordion state, or chat input).

## 2. Create Structured Content (`src/data/`)
- Define or extend the TypeScript data model and content array in `sites/<site>/src/data/` so all user-facing copy (Ukrainian/English text, phone numbers, messenger URLs, prices) is cleanly separated from JSX layout.

## 3. Create Focused Component (`src/components/`)
- Build the component using semantic HTML (`<section id="...">`, `<h2>`, etc.) and mobile-first Tailwind CSS classes.
- Ensure interactive buttons/links have minimum 48x48px touch targets and clear contrast.

## 4. Wire into Page & Verify
1. Import and mount the section in `src/app/page.tsx` (and link it in navigation if applicable).
2. Run verification inside `sites/<site>`:
   - `npx tsc --noEmit`
   - `npm run lint`
   - `npm run build`
