---
name: handoff
description: >-
  Saves a structured session handoff document (HANDOFF.md or active change state)
  capturing completed work, current branch/diff status, architectural decisions,
  and exact next steps. Use when pausing work or ending a coding session.
---

# Session Handoff (`handoff`)

Since personal projects are often worked on across separate evenings or weekends, use this skill to capture state so the next session starts with zero ramp-up time.

## Steps

1. **Inspect Current State**
   - Check `git status`, `git branch --show-current`, and `git log -n 5 --oneline`.
   - Check any active change under `openspec/changes/` if using spec-driven changes.

2. **Write or Update `HANDOFF.md` at Workspace Root**
   Include these concise sections:
   - **Last Updated**: Date & active branch.
   - **Active Site(s)**: `gps-pc-service` and/or `property-valuation`.
   - **What Was Completed**: Bullet points of finished pages/sections/features.
   - **Work in Progress**: Uncommitted or partially implemented files and what remains.
   - **Key Decisions & Context**: Copywriting decisions, contact flow choices, or hosting notes made in this session.
   - **Immediate Next Steps**: Top 1–3 concrete tasks to run first in the next session.
