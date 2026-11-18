---
name: openspec-apply-change
description: >-
  Implements tasks from an active OpenSpec change (openspec/changes/<change-id>/tasks.md)
  step-by-step, checking off completed items and verifying each increment.
  Equivalent to /opsx:apply and /opsx:continue.
---

# OpenSpec Apply Change (`opsx:apply`)

Executes the implementation plan for an active change under `openspec/changes/<change-id>/`.

## Workflow
1. **Load Context**:
   - Read `proposal.md`, `design.md`, `specs/**/spec.md`, and `tasks.md` inside `openspec/changes/<change-id>/`.
2. **Execute Incrementally**:
   - Work through unchecked `- [ ]` items in `tasks.md` in order.
   - Follow the architectural boundaries in `GEMINI.md` and `design.md`.
   - After completing each task group, mark the checkbox `- [x]` in `tasks.md`.
3. **Self-Verify**:
   - Run `npx tsc --noEmit` and `npm run lint` (or `npm run build`) in the target `sites/<site-name>` directory after implementing each logical group.
