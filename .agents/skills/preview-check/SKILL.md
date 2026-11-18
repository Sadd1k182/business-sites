---
name: preview-check
description: >-
  Starts the Next.js development server for the target site, verifies compilation,
  and previews mobile/desktop layouts, OpenGraph messenger tags, and CTAs in the
  browser. Use when the user wants to preview, run, or visually check either website.
---

# Verify & Preview Website Locally (`preview-check`)

Use this workflow to start and inspect either `sites/gps-pc-service` or `sites/property-valuation`.

## Steps

1. **Verify Typecheck & Build Readiness**
   - In `sites/<site-name>`, run `npx tsc --noEmit` to catch any TypeScript errors immediately.

2. **Start Next.js Dev Server**
   - Run `npm run dev` (as a daemon background task if keeping it open for live preview, e.g., port 3000 for `gps-pc-service` or port 3001 for `property-valuation`).

3. **Visual & SEO Inspection**
   - Delegate to the `browser` subagent (or Chrome DevTools MCP) to open `http://localhost:3000` and verify:
     1. **Mobile Viewport (375x812)**: No horizontal scrollbar, readable typography, and sticky/visible Viber, Telegram, WhatsApp, and Phone buttons.
     2. **Desktop Viewport (1280x800)**: Clean grid alignment and clear visual hierarchy.
     3. **Messenger Preview Metadata**: Confirm `<title>`, `<meta property="og:title">`, and `<meta property="og:description">` are present in `<head>`.
