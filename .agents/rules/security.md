---
trigger: always_on
---

# Web Security & Privacy Rules

- **No Hardcoded Secrets**: Never commit API keys, Telegram Bot tokens, SMTP credentials, or webhook URLs into source control. Store secrets in `.env.local` (gitignored) and document required keys in `.env.example`.
- **Client vs. Server Env Vars**: Never prefix sensitive tokens (such as a Telegram Bot token used for forwarding web chat messages) with `NEXT_PUBLIC_`. Access secrets strictly inside Next.js Server Actions or Route Handlers (`app/api/**`).
- **Spam & Abuse Protection**: Any public inquiry form or chat forwarding endpoint must validate inputs on the server (e.g., length limits, honeypot field, and basic rate limiting) before forwarding messages.
- **Safe External Links & Protocols**: Use `rel="noopener noreferrer"` on external `target="_blank"` links and sanitize any user-provided input.
