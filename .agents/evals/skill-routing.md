# Skill & Subagent Routing Reference (`evals/skill-routing.md`)

This reference maps user intents and lifecycle stages to the corresponding Skills and Subagents in `.agents/`.

## 1. Spec-Driven Lifecycle (OpenSpec / `opsx` Equivalents)

| User Intent / Phase | Skill to Activate | Artifact / Output |
| :--- | :--- | :--- |
| Brainstorming a website layout, copy angle, or feature | `openspec-explore` | Option comparison & trade-offs |
| Starting a new website / section / interactive feature spec | `openspec-new-change` | `openspec/changes/<id>/{proposal,design,tasks}.md` + `specs/` |
| Implementing tasks from an active spec | `openspec-apply-change` | Code + checks + checked `[x]` items in `tasks.md` |
| Verifying implementation against spec scenarios | `openspec-verify-change` | Traceability & build/test pass report |
| Archiving a finished change into living specs | `openspec-archive-change` | Updated `openspec/specs/` + archived change folder |

## 2. Engineering, Delivery & Continuous Learning Skills

| User Intent | Skill to Activate |
| :--- | :--- |
| Designing a new landing page, visual refresh, palette, typography, or layout polish | `frontend-design` |
| Writing or refactoring code cleanly without bloat | `karpathy-guidelines` |
| Scaffolding a new page section or interactive widget (data + Server/Client wiring) | `new-section` |
| Debugging a layout bug, hydration mismatch, or build error | `investigate` |
| Running dev server & checking mobile/desktop UI + OpenGraph | `preview-check` |
| Finishing work, cleaning up slop, running reviews & committing | `deliver` |
| Recording a user preference, correction, or bug post-mortem | `learn` (or `/learn`) |
| Ending a coding session to resume later | `handoff` |

## 3. Specialized Subagents (`.agents/agents/`)

| Subagent | When to Invoke |
| :--- | :--- |
| `web-architect` | Before building a new landing page, multi-section layout, or chat/form flow |
| `deslop` | After implementation to remove redundant comments and AI boilerplate |
| `correctness-reviewer` | To hunt for hydration mismatches, broken CTA links, and form edge cases |
| `code-reviewer` | To audit Server/Client Component boundaries, mobile responsiveness, and SEO metadata |
| `security-reviewer` | When touching `.env`, API routes, Telegram/Viber chat forwarding, or forms |
| `web-qa` | To write or verify unit/component tests and Next.js production builds |
| `log-reader` | When Next.js, TypeScript, or npm/Playwright outputs huge error logs |
| `git-committer` | To stage, commit on a feature branch, push, and create a PR via `gh pr create` |
