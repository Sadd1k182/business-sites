# Design: Dad's GPS & PC Service Landing Page (`sites/gps-pc-service`)

## Architecture & Component Hierarchy
All page sections are React Server Components for zero unnecessary client JS and instant load times. Interactive FAQ toggles use semantic HTML `<details>/<summary>` for native accessibility and zero hydration overhead.

```text
sites/gps-pc-service/src/
├── data/
│   └── site-content.ts              # Strongly-typed Ukrainian copy, contact info, services, steps, FAQs
├── components/
│   ├── Header.tsx                   # Top bar with brand title, section links, and quick call CTA
│   ├── HeroSection.tsx              # Dual-service headline, key highlights, Viber/Telegram/Phone CTAs
│   ├── GpsServicesSection.tsx       # Truck & car GPS firmware, Ukrainian localization, Garmin/iGO cards
│   ├── PcServicesSection.tsx        # Windows & Linux turn-key installation suite for everyday users
│   ├── HowItWorksSection.tsx        # 4-step in-person drop-off workflow
│   ├── FaqSection.tsx               # Common questions about navigator models, time required & PC setup
│   ├── ContactSection.tsx           # Full contact card (Phone, Viber, Telegram, WhatsApp, City/Hours)
│   └── MobileStickyBar.tsx          # Bottom bar on mobile screens for 1-tap Call / Viber / Telegram
└── app/
    ├── layout.tsx                   # Root HTML (lang="uk"), fonts, OpenGraph metadata & JSON-LD schema
    ├── page.tsx                     # Assembles all sections + MobileStickyBar
    └── globals.css                  # Tailwind CSS imports & smooth scrolling
```

## Content Configuration (`src/data/site-content.ts`)
- Centralizes contact details (`phone`, `phoneDisplay`, `viberUrl`, `telegramUrl`, `whatsappUrl`, `city`, `schedule`) at the top of `src/data/site-content.ts` so updating real phone numbers or city name takes 10 seconds.
