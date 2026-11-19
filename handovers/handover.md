# Session Handover (`handovers/handover.md`)

- **Last Updated**: 2026-11-19
- **Workspace Path**: `/Users/oleg_n/Projects/business-sites`
- **GitHub Repository**: [https://github.com/Sadd1k182/business-sites](https://github.com/Sadd1k182/business-sites)
- **Active Branch**: `main` (clean, synced with `origin/main` at `2cee58b` after merging PRs #1–#5)
- **Live Public URL (GitHub Pages)**: [https://sadd1k182.github.io/business-sites/](https://sadd1k182.github.io/business-sites/)
- **Local Dev Server**: `http://localhost:3000` (from `sites/gps-pc-service`)

---

## 1. Project Overview & Monorepo Structure

This workspace hosts two family business card / service websites built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**:

1. **`sites/gps-pc-service/` — Dad's GPS Navigator Firmware & PC Setup Service in Rivne (м. Рівне) *(Built & Live)***
   - **Location**: **Рівне (Rivne, Ukraine)** — local SEO (`<title>`, OpenGraph, Hero badge, Contact section, `LocalBusiness` PostalAddress/areaServed JSON-LD, and `FAQPage` JSON-LD) is configured specifically for **м. Рівне та Рівненська область**.
   - **Audience A (Truck & Car Drivers)**: Ukrainian drivers (mostly word-of-mouth referrals via Viber/Telegram/WhatsApp during their spare time) who bought a GPS navigator (Garmin dēzl/Drive/nüvi, iGO Primo/NextGen, Android tablets, WinCE) with English-only menus or outdated maps and need **Ukrainian interface/voice + Europe/UK/Ukraine truck (TIR/ADR) maps**.
   - **Audience B (Home PC / Laptop Owners)**: Non-tech-savvy users who need a complete, ready-to-use **Windows 10/11 or Linux Mint installation suite («під ключ»)** with all drivers, Office/document apps, ad-blocking browser, and 100% personal photo/document preservation.
2. **`sites/property-valuation/` — Father-in-Law's Property Valuation Consultant Site *(Planned Next)***
   - **Audience**: Property owners, buyers, investors, and businesses seeking professional property valuation / real estate appraisal consulting.
   - Initial spec placeholder is at `openspec/specs/property-valuation/spec.md`.

---

## 2. What Was Completed in This Session

### Workspace, Agent Customizations & Memory (`.agents/` & `openspec/`)
- Replicated and adapted the `.agents/` architecture from `~/Projects/mobile-app` for Next.js web development:
  - **Rules (`.agents/rules/`)**: `git-workflow.md`, `lessons-learned.md`, `security.md`, `seo-and-sharing.md`, `state-and-api.md`, `testing.md`, `ui-and-a11y.md`.
  - **Subagents (`.agents/agents/`)**: `web-architect`, `web-qa`, `code-reviewer`, `correctness-reviewer`, `security-reviewer`, `deslop`, `git-committer`, `log-reader`.
  - **Skills (`.agents/skills/`)**: `openspec-explore`, `openspec-new-change`, `openspec-apply-change`, `openspec-verify-change`, `openspec-archive-change`, `new-section`, `preview-check`, `deliver`, `investigate`, `handoff`, `learn`, `karpathy-guidelines`, `frontend-design`.
  - **Safety Hooks (`.agents/hooks/` & `hooks.json`)**:
    - `pre-bash-safety.sh` blocks destructive `rm -rf`, `git push --force`, `git reset --hard`, `git clean -f`, and **blocks direct commits or pushes to `main`**.
    - `pre-edit-protect.sh` protects lockfiles and `.next/`.
    - `stop-done-check.sh` runs `npx tsc --noEmit` before completing turns.
- **Global Developer Memory**: Created `~/.gemini/config/rules/developer-memory.md` and `~/.gemini/config/skills/learn/SKILL.md`.
- **Competitor & Market Research**: Saved Ukrainian GPS/TIR & PC service market research to `openspec/specs/gps-pc-service/market-research.md`.

### Git, GitHub & CI/CD Setup (PRs #1 & #3)
- **Strict Personal Git Isolation**: Configured `/Users/oleg_n/Projects/.gitconfig-personal` and linked it via `[includeIf "gitdir:/Users/oleg_n/Projects/"]` in `~/.gitconfig`. Every repo under `~/Projects/` automatically commits as `sadd1k182 <sadd1k182@gmail.com>` using SSH key `~/.ssh/id_ed25519_personal` (never `@noltic.com`).
- **GitHub CLI (`gh`)**: Installed and authenticated to `Sadd1k182` for automatic PR creation (`gh pr create --assignee "@me"`).
- **GitHub Actions CI + GitHub Pages CD (`.github/workflows/ci.yml`)**:
  - On every push/PR: runs `npm ci`, `npx tsc --noEmit`, `npm run lint`, `npx playwright test`, and `npm run build` (with `NEXT_PUBLIC_BASE_PATH=/business-sites`).
  - On push/merge to `main`: automatically deploys `sites/gps-pc-service/out` to GitHub Pages (`https://sadd1k182.github.io/business-sites/`).

### Dad's Website (`sites/gps-pc-service`) (PRs #2, #4, #5)
- **Streamlined "30-Second Business Card" Layout**:
  - Concise, non-repetitive copy in `src/data/site-content.ts` with inline pill badges (`Garmin (dēzl, Drive, nüvi)`, `iGO Primo / NextGen`, `Легкий Linux Mint`, `100% збереження ваших фото`, `Чесна ціна — все включено`).
- **Official Brand SVG Icons (`src/components/BrandIcons.tsx`)**:
  - Custom vector SVGs for **Viber**, **WhatsApp**, and **Telegram** across Hero, Contact Footer, and Mobile Sticky Bar, with single-line (`whitespace-nowrap`) button formatting.
- **Ukrainian / English Language Switcher (`UA | EN`)**:
  - Segmented `UA | EN` toggle in `src/components/Header.tsx` powered by `src/context/LanguageContext.tsx` and bilingual `siteTranslations` (`uk` and `en`) in `src/data/site-content.ts`.
- **Floating Scroll-to-Top Button (`src/components/ScrollToTopButton.tsx`)**:
  - Appears after scrolling down 300px and smoothly scrolls back to the top.
- **Microsoft Clarity Analytics (`src/components/ClarityAnalytics.tsx`)**:
  - Loads Clarity when `NEXT_PUBLIC_CLARITY_ID` is set and automatically tracks custom events (`contact_phone_click`, `contact_viber_click`, `contact_telegram_click`, `contact_whatsapp_click`) via delegated click listeners.
- **Playwright E2E & Viewport Overflow Suite (`sites/gps-pc-service/e2e/landing.spec.ts`)**:
  - Verifies Ukrainian & English toggle, computed Tailwind CSS (`getComputedStyle`), OpenGraph metadata, contact CTA links, and asserts `scrollWidth <= innerWidth` (zero horizontal overflow) at `375x812`, `1024x768`, and `1440x900`.

---

## 3. Critical Rules & Technical Gotchas to Remember

1. **Always Open `/Users/oleg_n/Projects/business-sites` as the Workspace**:
   - Work on feature branches (`git checkout -b feat/...` or `fix/...`), run Playwright tests, push the branch, and create a PR via `gh pr create --assignee "@me"`. Direct commits to `main` are blocked by `.agents/hooks/pre-bash-safety.sh`.
2. **Preserve `@tailwindcss/turbopack` in `next.config.ts`**:
   - Never delete `turbopack.rules['*.css']` when editing `sites/gps-pc-service/next.config.ts` — removing it disables Tailwind v4 compilation under Next.js 16 Turbopack.
3. **Do Not Run `npm run build` Over a Running `npm run dev`**:
   - Running `next build` while `next dev` is running in the same directory overwrites `.next/` chunks and breaks dev server CSS until `next dev` is restarted.
4. **Minimalist Business-Card Design Philosophy**:
   - Keep copy concise and scannable in 20–30 seconds. Avoid walls of text or repeating the same points across multiple sections.

---

## 4. Immediate Next Steps for the Next Agent / Session

1. **Update Dad's Real Contact Details & Optional Clarity ID (`sites/gps-pc-service`)**:
   - Update `sharedContactUrls` and `city` in `sites/gps-pc-service/src/data/site-content.ts` with real phone number, Viber, Telegram, WhatsApp, and city/district once reviewed with dad.
   - Optionally set `NEXT_PUBLIC_CLARITY_ID` (from [clarity.microsoft.com](https://clarity.microsoft.com)) in GitHub Actions variables/env to activate heatmaps and click tracking.
2. **Optional Move to Cloudflare Pages + Custom Domain**:
   - When ready to move off GitHub Pages (`sadd1k182.github.io/business-sites/`) to Cloudflare Pages (`gps-pc-service.pages.dev` or a custom `.com.ua` domain for ~350 грн/year), remove `NEXT_PUBLIC_BASE_PATH: /business-sites` and optionally switch the GitHub repo back to Private (`gh repo edit --visibility private`).
3. **Explore & Build Father-in-Law's Property Valuation Website (`sites/property-valuation`)**:
   - Run `openspec-explore` / `openspec-new-change` to design and scaffold the Property Valuation Consultant business card website in `sites/property-valuation/`.
