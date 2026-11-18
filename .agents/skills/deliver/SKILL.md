---
name: deliver
description: >-
  End-to-end delivery pipeline: strips AI slop (deslop), runs TypeScript, lint,
  and Next.js build checks, executes correctness and code reviews, and prepares
  a clean commit. Use when finishing a feature or preparing changes to ship/commit.
---

# Deliver / Ship Pipeline (`deliver`)

Run this workflow when a website section, copy update, or interactive feature is ready to be finalized and committed:

## Step 1: Deslop Pass
- Invoke the `deslop` subagent (or review `git diff` directly for small changes) to strip redundant comments, dead code, and unnecessary wrapper abstractions.

## Step 2: Automated Verification
In the modified `sites/<site-name>` directory:
1. Run `npx tsc --noEmit` — fix all TypeScript errors.
2. Run `npm run lint` — fix all ESLint / Next.js warnings.
3. Run `npm run build` — verify static/SSR production build succeeds cleanly.

## Step 3: Multi-Angle Subagent Review
- For non-trivial changes, run in parallel via `invoke_subagent`:
  - `correctness-reviewer`: Check for hydration mismatches, broken CTA links, and form/chat edge cases.
  - `code-reviewer`: Check Server/Client Component boundaries, mobile responsiveness, accessibility, and OpenGraph SEO tags.
- Address any `HIGH` or `MEDIUM` severity findings and re-run `npm run build`.

## Step 4: Spec & Task Sync
- If working on an active OpenSpec change (`openspec/changes/<change-id>/tasks.md`), mark completed tasks `[x]`.

## Step 5: Atomic Commit
- Invoke the `git-committer` subagent (or stage and commit with a clean Conventional Commit message) once all gates pass.
