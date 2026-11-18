---
trigger: always_on
---

# Git Strategy, Branching & CI/CD Guardrails

## 1. Personal Git Identity Only
- All repositories inside `~/Projects/` must use `sadd1k182 <sadd1k182@gmail.com>` and `~/.ssh/id_ed25519_personal` (configured via `~/Projects/.gitconfig-personal`). Never use `@noltic.com` work credentials.

## 2. Feature-Branch + Pull Request Workflow (`main` is Protected)
- **Never commit or push directly to `main`.**
- Before making commits for any new feature, visual tweak, or bugfix, create a descriptive branch:
  - `feat/<short-slug>` (new sections, sites, or capabilities)
  - `fix/<short-slug>` (bug or layout fixes)
  - `chore/<short-slug>` (CI, dependencies, or tooling updates)
- Push the feature branch (`git push -u origin <branch>`) and open a Pull Request into `main` so GitHub Actions CI runs before merging.

## 3. Pre-Push Local Quality Gates
Before pushing any branch that modifies a site under `sites/<site-name>`, verify all four gates pass locally:
1. `npx tsc --noEmit` (TypeScript strict check)
2. `npm run lint` (ESLint)
3. `npm run build` (Next.js static export build to `out/`)
4. `npx playwright test` (Playwright E2E, computed CSS check, and multi-viewport overflow check)
