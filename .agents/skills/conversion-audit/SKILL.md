---
name: conversion-audit
description: >-
  Audits a local-service or referral landing page for conversion friction (5-second
  clarity, mobile above-the-fold CTAs, trust signals, scan speed, and messenger
  shareability) and returns a ranked, concrete fix list (max 7 items). Use when
  asked to review why a page isn't getting calls/messages or to run a CRO audit.
---

# Local-Service Conversion Audit (`conversion-audit`)

Audit a landing page for what actually turns local search and word-of-mouth visitors into phone calls or messenger inquiries. Never return generic filler ("add more social proof"); every finding must name the exact element, why it loses visitors, and what to change it to.

## 1. Ground the Audit in Real Evidence
- Inspect the rendered page on **mobile (`390x844`)** and **desktop (`1440x900`)** via `preview-check` / Playwright rather than guessing from code alone.
- If the user provides **Microsoft Clarity** data (heatmaps, scroll depth, rage clicks) or call/message feedback, prioritize observed drop-offs over theory.
- Explicitly note missing inputs (traffic volume, Clarity sessions, real call conversion) under `Could not check`.

## 2. Checks (Ordered by Real-World Impact)

1. **5-Second Clarity & Local Relevance**: Can a stranger instantly answer: *what service is offered, in which city/region, for whom, and what happens when I tap?* Flag vague headlines, missing city cues, or jargon aimed at technicians instead of customers.
2. **Mobile Fold & 1-Tap Contact Friction (`390x844`)**:
   - Is one unmistakable primary CTA visible in the first mobile viewport?
   - Are `tel:`, `viber://`, `https://t.me/`, and `https://wa.me/` links real, high-contrast, `>= 48x48px`, and clearly differentiated without competing equally?
   - Flag unnecessary multi-field forms when a 1-tap call/message would convert faster.
3. **Trust Next to the Action**: Are credibility cues (in-person city location, clear turnaround/process, flexible hours, real guarantees like photo backup or on-the-spot check) placed near CTAs rather than buried? Reject anonymous fake testimonials—they erode trust.
4. **20–30 Second Scan Speed & Objection Coverage**: Do cards, headings, and FAQs answer the top 3–4 buyer doubts (compatibility, turnaround time, data safety, hidden effort) without text walls or repeating the same point across sections?
5. **Messenger Sharing Preview (Referral Loop)**: Check `title`, `description`, `openGraph`, and `twitter` metadata—when someone forwards the link in a Viber/Telegram/WhatsApp group, does the preview card look clear and trustworthy?
6. **Measurement & Speed**: Confirm lightweight load (no heavy hero videos/scripts blocking first paint) and verify analytics (e.g., Clarity) is wired without breaking privacy or layout.

## 3. Required Output Format

```markdown
## Verdict
<One concise paragraph: what is working and what the main conversion bottleneck is.>

## Fix now (max 7, ordered by expected impact)
1. <element> — <failure mode> → <exact change> | effort: S/M/L | confidence: high/med/low

## Worth testing
<Ideas to validate with Clarity recordings or real customer calls before committing.>

## Not a problem
<Checks that already pass—prevents unnecessary churn.>

## Could not check
<Missing analytics, traffic, or user-feedback data and how that limits certainty.>
```

### Reporting Rules
- **No fake lift percentages**: Rank by expected direction/impact only; never invent "+23% conversion" claims.
- **Cap at 7 fixes**: Prioritize high-leverage edits over nitpicks.
- **Respect project invariants**: Keep changes aligned with `GEMINI.md` and `.agents/rules/ui-and-a11y.md` (concise copy, clean cards/icons, zero bloat).
