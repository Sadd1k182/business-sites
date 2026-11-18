---
trigger: always_on
---

# Project Memory & Lessons Learned (`lessons-learned.md`)

This file records concrete technical gotchas, visual/UX lessons, and project-specific rules discovered during development so they are never repeated.

## 1. Next.js 16 & Tailwind CSS v4 (Turbopack)
- **Preserve `@tailwindcss/turbopack` in `next.config.ts`**: When modifying `next.config.ts` (e.g., adding `output: 'export'`), **never** remove the `turbopack.rules['*.css']` block. Removing it silently disables Tailwind compilation and renders unstyled HTML.
- **No `new Date()` in Prerendered Server Components**: Next.js 16 Cache Components fails static prerendering (`next build`) if `new Date()` is called inside a static Server Component. Use static constants in `src/data/` or a client boundary.
- **Do Not Run `next build` Over a Running `next dev`**: Running `npm run build` in the same folder while `npm run dev` is active overwrites `.next/` chunks and breaks dev server CSS until `next dev` is restarted.

## 2. Visual Layout & Responsive Polish
- **Header & Phone CTA Wrapping**: Always apply `whitespace-nowrap` and `shrink-0` to header navigation links and phone number buttons (`+38 (000) 000-00-00`). Hide secondary header elements on smaller breakpoints (`hidden lg:flex`, `hidden xl:inline-flex`) so `scrollWidth <= innerWidth` holds across `375px`, `768px`, `1024px`, `1280px`, and `1440px`.
- **Playwright Verification Before Reporting UI Done**: Always verify both `getComputedStyle` (confirming CSS loaded) and `scrollWidth <= innerWidth` across mobile, laptop, and desktop viewports via Playwright before telling the user a UI change is ready.
