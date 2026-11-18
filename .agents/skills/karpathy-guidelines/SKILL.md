---
name: karpathy-guidelines
description: >-
  Applies Andrey Karpathy's LLM coding guidelines: think before coding, surface
  trade-offs, make surgical minimal changes, avoid speculative abstractions, and
  define verifiable success criteria. Use when writing, refactoring, or reviewing code.
---

# Karpathy LLM Coding Guidelines

Follow these four core principles to prevent common AI coding anti-patterns (over-engineering, silent assumptions, bloated abstractions, and unverified edits):

## 1. Think Before Coding (No Silent Assumptions)
- State assumptions explicitly. If requirements are ambiguous or have multiple valid UX/technical interpretations, surface the trade-offs and ask before writing 500 lines of code in the wrong direction.
- If a simpler approach exists than what was asked, point it out.

## 2. Simplicity First (Minimum Viable Code)
- Write the minimum code required to solve the current problem cleanly.
- **No speculative features**: Do not add complex CMS layers, database adapters, or over-abstracted component libraries when a clean static data file in `src/data/` and a focused Tailwind component solve the problem.
- **No premature abstraction**: Do not create generic wrapper components for a single call site.
- If 50 lines of straightforward TypeScript/JSX solves what 250 lines of abstract layers would do, write the 50 lines.

## 3. Surgical Changes
- When editing existing files, touch **only** the lines required for the task.
- Do not drive-by reformat unrelated code, rename unrelated variables, or swap idioms in untouched components.
- Clean up any imports, variables, or helpers made obsolete by your own edit.

## 4. Goal-Driven Execution (Verify, Don't Guess)
- Translate every task into concrete, testable success criteria before finishing:
  - Bug fix -> Reproduce the issue first, fix the root cause, and verify.
  - New section/feature -> Verify with `npx tsc --noEmit`, `npm run lint`, and `npm run build`.
