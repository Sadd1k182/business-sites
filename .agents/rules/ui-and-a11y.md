---
trigger: glob
globs: **/*.tsx, **/*.css
---

# Web UI, Accessibility & Component Rules

## Audience-First Usability
- **Plain, Clear Visual Hierarchy**: Visitors include truck drivers and non-tech-savvy PC users. Use high-contrast text, generous font sizes (`text-base` / `text-lg`), and unmistakable section headings.
- **Frictionless Contact CTAs**: Keep primary contact actions (Phone `tel:`, Viber `viber://chat?number=...`, Telegram `https://t.me/...`, WhatsApp `https://wa.me/...`) prominent in the hero section and sticky/reachable on mobile screens.
- **Tap Targets**: All buttons, links, and interactive controls must have a minimum tap target of 48x48px on mobile viewports.

## Next.js & Tailwind Best Practices
- **Server Components First**: Leave components as Server Components by default. Only add `'use client'` at the smallest interactive leaf component (e.g., chat widget, mobile drawer, model filter).
- **Semantic HTML**: Use `<header>`, `<main>`, `<section>`, `<nav>`, and `<footer>` with accessible `aria-label` attributes on icon buttons.
- **Responsive Design**: Design mobile-first (`sm:`, `md:`, `lg:`) and ensure zero horizontal overflow on 320px–430px phone screens.
