---
name: handoff
description: >-
  Saves a structured session handoff document (handovers/handover.md) capturing
  completed work, current branch/diff status, architectural decisions, and exact
  next steps. Use when pausing work, switching agents, or ending a coding session.
---

# Session Handoff (`handoff`)

Use this skill to capture project state in `handovers/handover.md` (and optionally a dated snapshot `handovers/YYYY-MM-DD-handover.md`) so the next agent or session starts with zero ramp-up time.

## Steps

1. **Inspect Current State**
   - Check `git status`, `git branch --show-current`, and `git log -n 5 --oneline`.
   - Check any active change under `openspec/changes/` if using spec-driven changes.

2. **Write or Update `handovers/handover.md`**
   Include these concise sections:
   - **Last Updated**: Date, workspace path, GitHub repo, active branch, and live/local URLs.
   - **Active Site(s)**: `gps-pc-service` and/or `property-valuation`.
   - **What Was Completed**: Bullet points of finished pages, features, and merged PRs.
   - **Work in Progress**: Uncommitted or partially implemented files and what remains.
   - **Critical Rules & Technical Gotchas**: Key decisions, git guardrails, and stack gotchas.
   - **Immediate Next Steps**: Top 1–3 concrete tasks to run first in the next session.
