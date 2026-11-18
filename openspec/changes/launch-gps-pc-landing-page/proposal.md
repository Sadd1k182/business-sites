# Proposal: Launch Dad's GPS & PC Service Landing Page (`launch-gps-pc-landing-page`)

## Problem
Ukrainian truck drivers, car drivers, and local community members currently find the business only by passing around a raw phone number through word-of-mouth. Without a dedicated Ukrainian-language business card website, referrals in Viber/Telegram lack rich previews, and potential clients cannot easily see beforehand which GPS navigators are supported or what is included in a turn-key Windows/Linux setup.

## Target Site
`sites/gps-pc-service/`

## Solution Summary
Build a fast, mobile-first single-page Next.js + Tailwind CSS website in **Ukrainian** focused on in-person service:
1. **Rich Messenger Previews (OpenGraph)** + `LocalBusiness` JSON-LD so sharing the link in Viber, Telegram, or WhatsApp displays a clear, trustworthy card.
2. **Hero Section**: Immediate clarity on both services (GPS navigator firmware/maps for trucks & cars + Windows/Linux installation "під ключ") with 1-tap Viber, Telegram, WhatsApp, and Phone buttons.
3. **GPS Navigator Section**: Highlights switching English/foreign navigators (Garmin, iGO, WinCE, Android tablets) to Ukrainian menus & voice, full Europe/UK/World maps, and truck-specific routing (height, weight, axles, ADR, industrial zones, parking).
4. **PC / Laptop Installation Section**: Jargon-free explanation of complete Windows & Linux setup for non-tech-savvy users (OS, drivers, essential software suite, Ukrainian interface).
5. **How It Works (In-Person Flow)**: Simple 4-step local drop-off process during the client's spare time.
6. **FAQ & Direct Contact Footer + Mobile Sticky CTA Bar**: Answers common questions upfront and keeps contact buttons one tap away on mobile screens.

## Out of Scope (For Initial Launch)
- Multi-language switcher (site is 100% Ukrainian).
- Remote/postal shipping workflows (service is in-person).
- Backend database or live chat server (can be added in Phase 2).
