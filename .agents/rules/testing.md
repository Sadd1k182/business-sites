---
trigger: glob
globs: **/*.test.ts, **/*.test.tsx, **/*.spec.ts
---

# Web Unit, Component & E2E Testing Rules

## Test Structure
- Follow the **Arrange – Act – Assert** (Given / When / Then) pattern in every test.
- Group related test cases using `describe('<ComponentOrModule>', () => { ... })`.

## What to Test
- **Content & CTA Integrity**: Verify primary headings, service cards, and contact links (`tel:`, `t.me`, `viber://`, `wa.me`) render with valid `href` attributes.
- **Interactive Islands**: Test client components (search filters, chat/contact forms, language switches) across initial, loading, success, and validation-error states.
- **Accessibility Queries**: Prefer querying elements by accessible role (`getByRole`, `getByLabelText`, `getByText`) rather than CSS classes or brittle DOM selectors.
