---
name: openspec-archive-change
description: >-
  Merges completed spec deltas from openspec/changes/<change-id>/specs/ into the
  living openspec/specs/ directory and moves the finished change to
  openspec/changes/archive/. Equivalent to /opsx:sync and /opsx:archive.
---

# OpenSpec Sync & Archive Change (`opsx:sync` / `opsx:archive`)

Use this skill after `openspec-verify-change` confirms that a change is complete and verified.

## Steps
1. **Sync Living Specs**:
   - Merge any new or updated requirements/scenarios from `openspec/changes/<change-id>/specs/<capability>/spec.md` into `openspec/specs/<capability>/spec.md` (creating the file if it is a brand-new capability).
2. **Archive the Change**:
   - Move `openspec/changes/<change-id>/` to `openspec/changes/archive/YYYY-MM-DD-<change-id>/`.
3. **Verify Clean State**:
   - Confirm `openspec/specs/` reflects the current behavior of both sites.
