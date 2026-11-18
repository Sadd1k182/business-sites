---
name: investigate
description: >-
  Systematic root-cause debugging workflow: reproduce the failure, isolate the
  faulty layer, form a testable hypothesis, apply a minimal surgical fix, and
  verify with build/test checks. Use when debugging layout bugs, hydration errors,
  broken API routes, or failing builds.
---

# Systematic Root-Cause Investigation (`investigate`)

Never guess-and-patch when debugging. Follow these five phases in order:

## Phase 1: Observe & Reproduce
1. Read the exact error message, stack trace, or visual glitch (delegate huge build logs to the `log-reader` subagent).
2. Identify a deterministic way to reproduce the bug (via `npm run build`, a unit test, or exact browser steps).

## Phase 2: Isolate the Layer
Trace the flow to pinpoint where reality diverges from expectation:
- **Layout / Tailwind Layer**: Overflowing flex/grid child, missing responsive breakpoint, z-index clash?
- **React / Hydration Layer**: `'use client'` boundary issue, SSR vs. client mismatch, stale state closure?
- **API / Integration Layer**: Missing `.env.local` variable, CORS/fetch timeout, malformed Viber/Telegram deep link?

## Phase 3: Hypothesize & Verify
1. Formulate **one specific hypothesis** for the root cause.
2. Check the code to confirm or falsify the hypothesis before changing production code.

## Phase 4: Minimal Surgical Fix
- Fix the root cause at its source—never mask a bug with arbitrary CSS hacks or silent `try/catch` blocks.

## Phase 5: Lock In & Verify
1. Add or update a test (or verify `npx tsc --noEmit` and `npm run build` pass cleanly).
