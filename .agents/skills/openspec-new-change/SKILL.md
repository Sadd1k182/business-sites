---
name: openspec-new-change
description: >-
  Creates a new spec-driven change directory under openspec/changes/<change-id>/
  with proposal.md, design.md, spec deltas, and an actionable tasks.md checklist.
  Equivalent to /opsx:new and /opsx:ff. Use when starting a new website, section,
  or interactive feature.
---

# OpenSpec New Change (`opsx:new` / `opsx:ff`)

Scaffolds a structured, spec-driven change so implementation is broken into small, verifiable steps.

## Directory Structure
```text
openspec/
├── specs/                        # Living source-of-truth specs per site/capability
└── changes/
    └── <change-id>/              # e.g., launch-gps-landing-page
        ├── proposal.md           # Why we are making this change & scope boundaries
        ├── design.md             # Component hierarchy, data schema, SEO & Server/Client split
        ├── specs/
        │   └── <site-or-cap>/
        │       └── spec.md       # Requirements & Given/When/Then scenarios
        └── tasks.md              # Ordered implementation & verification checklist ([ ] items)
```

## Steps
1. Choose a short kebab-case `<change-id>` (e.g., `launch-gps-landing-page` or `add-telegram-chat-widget`).
2. Create `proposal.md` (Problem, Target Site, Solution Summary, Out of Scope).
3. Create `design.md` (Next.js routes, `src/data/` models, Server vs. Client Components, OpenGraph & Schema.org tags).
4. Create `specs/<site-or-cap>/spec.md` with testable scenarios (`#### Scenario: ...` using `GIVEN` / `WHEN` / `THEN`).
5. Create `tasks.md` with small, sequential checkboxes (`- [ ] 1.1 ...`) ending with typecheck, lint, and build verification.
