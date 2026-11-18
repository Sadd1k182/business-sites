---
trigger: always_on
---

# Project Memory & Lessons Learned (`lessons-learned.md`)

This file records concrete technical gotchas, visual/UX lessons, and project-specific rules discovered during development so they are never repeated.

## 1. Next.js 16 & Tailwind CSS v4 (Turbopack)
- **Preserve `@tailwindcss/turbopack` in `next.config.ts`**: When modifying `next.config.ts` (e.g., adding `output: 'export'` or `basePath`), **never** remove the `turbopack.rules['*.css']` block. Removing it silently disables Tailwind compilation and renders unstyled HTML.
- **GitHub Pages Subpath (`basePath`)**: Because GitHub Pages serves project sites under `/<repo-name>` (`/business-sites`), always pass `NEXT_PUBLIC_BASE_PATH=/business-sites` when building the static export for GitHub Pages so `/_next/static/...` CSS/font assets do not 404.
- **No `new Date()` in Prerendered Server Components**: Next.js 16 Cache Components fails static prerendering (`next build`) if `new Date()` is called inside a static Server Component. Use static constants in `src/data/` or a client boundary.
- **Do Not Run `next build` Over a Running `next dev`**: Running `npm run build` in the same folder while `npm run dev` is active overwrites `.next/` chunks and breaks dev server CSS until `next dev` is restarted.

## 2. Visual Layout, Design & Copy Philosophy
- **Minimalist Business-Card Design Over Text Walls**: Do not copy the cluttered, jargon-heavy "wall of text" style of typical local service websites. Keep copy ultra-concise, avoid repeating the same selling points across multiple sections, and favor visual clarity and scannability (15-second scan time) over long paragraphs.
- **Header & Phone CTA Wrapping**: Always apply `whitespace-nowrap` and `shrink-0` to header navigation links and phone number buttons (`+38 (000) 000-00-00`). Hide secondary header elements on smaller breakpoints (`hidden lg:flex`, `hidden xl:inline-flex`) so `scrollWidth <= innerWidth` holds across `375px`, `768px`, `1024px`, `1280px`, and `1440px`.
- **Playwright Verification Before Reporting UI Done**: Always verify both `getComputedStyle` (confirming CSS loaded) and `scrollWidth <= innerWidth` across mobile, laptop, and desktop viewports via Playwright before telling the user a UI change is ready.
