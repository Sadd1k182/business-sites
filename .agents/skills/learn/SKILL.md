---
name: learn
description: >-
  Captures lessons learned from mistakes, debugging root causes, and user workflow
  preferences into persistent memory rules (.agents/rules/lessons-learned.md or
  ~/.gemini/config/rules/developer-memory.md) and updates skills or subagents so
  mistakes are never repeated. Use when the user corrects the agent, states a
  preference, or after fixing a non-obvious bug.
---

# Continuous Learning & Memory Skill (`learn`)

Use this skill to persist developer preferences, architectural decisions, and post-mortem lessons so the agent gets smarter every session and never repeats the same mistake.

## Where to Store What You Learn

| Scope of Lesson | Target File | Trigger Type |
| :--- | :--- | :--- |
| **Global Developer Preference** (applies across all projects) | `~/.gemini/config/rules/developer-memory.md` | `always_on` |
| **Project / Tech-Stack Gotcha** (applies to `business-sites`) | `.agents/rules/lessons-learned.md` | `always_on` |
| **Repeated Procedure / Checklist Update** | `.agents/skills/<skill>/SKILL.md` or `.agents/agents/<agent>.md` | On-demand |

## Workflow

1. **Distill the Lesson into 1–2 Imperative Lines**
   - Write a concrete rule stating the symptom/context and the exact rule or prevention check.
2. **Update the Target Memory File**
   - Read `.agents/rules/lessons-learned.md` (or `~/.gemini/config/rules/developer-memory.md`) first to avoid duplicates, then add the rule.
3. **Lock It Into Automated Gates (When Possible)**
   - Whenever possible, also encode the lesson into a Playwright test (`e2e/landing.spec.ts`) or a hook script (`.agents/hooks/`) so CI/hooks enforce it automatically.
