---
name: openspec-verify-change
description: >-
  Verifies that an implemented OpenSpec change satisfies every requirement and
  Given/When/Then scenario in its spec, and that all tasks and build checks pass.
  Equivalent to /opsx:verify.
---

# OpenSpec Verify Change (`opsx:verify`)

Audits an implemented change in `openspec/changes/<change-id>/` against its specification before archiving or shipping.

## Verification Checklist
1. **Task Completeness**: Confirm all items in `openspec/changes/<change-id>/tasks.md` are marked `[x]`.
2. **Scenario Traceability**:
   - For every `Scenario:` in `openspec/changes/<change-id>/specs/**/spec.md`, verify both:
     1. The production Next.js code implements the exact `GIVEN / WHEN / THEN` behavior.
     2. Automated tests or build/DOM checks verify that scenario.
3. **Quality Gates**:
   - Run `npx tsc --noEmit`, `npm run lint`, and `npm run build` in the target site directory.
   - Report any spec drift, missing OpenGraph tags, broken CTA links, or untested edge cases.
