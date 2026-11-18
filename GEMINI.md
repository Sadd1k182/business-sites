# Family Business Websites Workspace (Next.js / TypeScript / Tailwind CSS)

## Overview & Projects in This Workspace
This monorepo hosts two business card / service websites that start simple and can scale with interactive features (such as Telegram/Viber-bridged live chat, device compatibility lookups, or valuation inquiry forms):

1. **`sites/gps-pc-service/` — Dad's GPS & PC Service Website**
   - **Audience 1 (Truck & Car Drivers)**: Ukrainian drivers (mostly referrals via word-of-mouth in Viber/Telegram/WhatsApp groups during their spare time) who bought a GPS navigator (Garmin, iGO, WinCE/Android devices) with English-only menus or limited maps, and need **Ukrainian interface/voice firmware + full truck/Europe maps**.
   - **Audience 2 (Everyday PC Users)**: Non-tech-savvy people who need a complete, ready-to-use **Windows or Linux installation suite** (OS, drivers, everyday software configured "turn-key").
2. **`sites/property-valuation/` — Father-in-Law's Property Valuation Consultancy Website**
   - **Audience**: Individual property owners, buyers, businesses, or legal/financial clients looking for a trusted **Property Valuation Consultant** (expert appraisal, consultation, and valuation reports).

## Tech Stack & Architecture
- **Framework**: Next.js (App Router, React 19+, static generation by default with optional Server Actions / API routes for chat & forms)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS (mobile-first, high contrast, accessible typography)
- **Icons**: `lucide-react`

## Workspace Directory Layout
```text
business-sites/
├── GEMINI.md
├── openspec/
│   ├── specs/                   # Living specs & business context per site
│   └── changes/                 # Active & archived spec-driven changes
├── .agents/                     # Subagents, skills, rules, and safety hooks
└── sites/
    ├── gps-pc-service/          # Dad's GPS firmware & PC installation site
    │   └── src/
    │       ├── app/             # Next.js App Router pages, layout, metadata & API routes
    │       ├── components/      # Focused UI sections & interactive client components
    │       └── data/            # Structured copy, services, FAQs & contact links
    └── property-valuation/      # Father-in-law's property valuation consultant site
        └── src/
            ├── app/
            ├── components/
            └── data/
```

## Mandatory Invariants
- **Server Components by Default**: Keep page sections as React Server Components (`async`/static, zero unnecessary client JS). Only add `'use client'` to leaf interactive components (e.g., live chat widget, FAQ accordion, device search filter).
- **Rich Messenger Previews (OpenGraph)**: Every page must define complete `metadata` (`title`, `description`, `openGraph`, `twitter`) so links shared in Viber, Telegram, WhatsApp, or Facebook render a clear, trustworthy preview card.
- **Frictionless Contact CTAs**: Prioritize 1-tap contact buttons (`viber://`, `https://t.me/`, `https://wa.me/`, `tel:`) over complex multi-step forms.
- **Focused Component Files**: Keep component files under 200 lines; store structured service lists, FAQs, and translations in `src/data/` rather than hardcoding long text blocks deep inside JSX.
- **Self-Verification**: Always run `npm run lint` / `npx tsc --noEmit` (and relevant tests/build checks) in the target site directory after making code changes.
