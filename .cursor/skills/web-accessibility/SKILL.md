---
name: web-accessibility
description: >-
  Build accessible web UI meeting WCAG-minded practices: semantics, keyboard,
  focus, contrast, forms, images, and motion preferences. Use when creating pages,
  components, forms, navigation, or when the user mentions accessibility, a11y,
  ARIA, screen readers, or inclusive design. Triggers: accesibilidad, a11y, ARIA, WCAG.
---

# Web Accessibility

Bake a11y into the first implementation — do not treat it as a later pass.

## Non-negotiables

1. **Semantics first** — Real headings (`h1`→`h2`…), landmarks (`header`, `main`, `nav`, `footer`), lists, buttons vs links.
2. **Keyboard** — All interactive controls reachable and operable with Tab / Enter / Space / Esc.
3. **Focus visible** — Never `outline: none` without a clear custom focus ring.
4. **Name + role + value** — Icon-only controls need accessible names (`aria-label` or visually hidden text).
5. **Images** — Informative images get meaningful `alt`; decorative images use `alt=""`.
6. **Contrast** — Text and UI meet contrast against actual backgrounds (including over images).
7. **Forms** — Visible `<label>` (or programmatic equivalent), errors tied to fields, required state announced.
8. **Motion** — Respect `prefers-reduced-motion`; provide a reduced or static path.

## Patterns

| UI | Do |
|----|-----|
| Nav | Landmark + clear link text; mobile menu traps focus while open and restores on close |
| Modal | Focus trap, Esc closes, return focus to trigger |
| Tabs / accordion | Keyboard model + `aria-*` only when native HTML is insufficient |
| Skip link | First focusable control jumps to `#main` |

## ARIA discipline

- Prefer native HTML. Add ARIA only to fill gaps.
- Do not override native semantics with conflicting roles.
- Live regions only for important dynamic updates (errors, cart, status).

## Quick verify

- [ ] One `h1` per page (usually the page title / brand promise)
- [ ] Tab order matches visual order
- [ ] Zoom 200% / narrow viewport: no clipped content
- [ ] Color is not the only status signal
