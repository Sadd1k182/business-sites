---
name: openspec-explore
description: >-
  Explores a website idea, page layout, copy angle, or interactive feature before
  committing to a spec—comparing UX flows, SEO/messenger sharing strategies, and
  technical trade-offs. Equivalent to /opsx:explore. Use when brainstorming or
  investigating how a site or feature should work.
---

# OpenSpec Explore (`opsx:explore`)

Use this skill during the discovery phase before creating or locking down a formal change spec.

## Workflow
1. **Understand the Goal & Audience**:
   - Clarify which site is being discussed (`sites/gps-pc-service` for dad's GPS & PC business, or `sites/property-valuation` for father-in-law's consultancy).
   - Identify who the visitor is (e.g., Ukrainian truck driver clicked a Viber referral link; non-tech-savvy PC user; property owner seeking an appraisal) and what action they should take.
2. **Inspect Existing Specs & Code**:
   - Check `openspec/specs/` and `sites/` to see what context and components already exist.
3. **Compare Options**:
   - Present 2–3 concrete approaches (e.g., single-page layout vs. multi-route; direct Telegram/Viber link buttons vs. embedded web-to-Telegram chat box) with clear pros/cons.
4. **Recommend Next Step**:
   - Once aligned, offer to initialize a change folder via the `openspec-new-change` skill.
