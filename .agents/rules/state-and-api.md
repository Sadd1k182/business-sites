---
trigger: glob
globs: **/api/**/*.ts, **/actions/**/*.ts, **/data/**/*.ts, **/lib/**/*.ts
---

# Data, Content & API Route Rules

## Structured Content (`src/data/`)
- Keep service descriptions, supported GPS brands/models, pricing tiers, FAQs, and contact details in strongly-typed TypeScript files under `src/data/` so copy updates never require hunting through JSX markup.

## Server Actions & API Routes (`src/app/api/`)
- When implementing interactive backend features (e.g., forwarding a website chat message or callback request to Telegram/email):
  - Validate request payloads strictly (reject empty, oversized, or malformed messages).
  - Set explicit timeouts on outbound `fetch` calls and return clean, user-friendly status messages on network failure.
  - Never expose internal stack traces or API tokens in JSON responses.
