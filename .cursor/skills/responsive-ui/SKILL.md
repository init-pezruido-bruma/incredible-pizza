---
name: responsive-ui
description: >-
  Design mobile-first responsive layouts with fluid type, sensible breakpoints,
  touch targets, and no horizontal scroll. Use when building pages, components,
  navigation, grids, or when the user mentions responsive, mobile, tablet,
  breakpoints, or adaptativo. Triggers: responsive, mobile, móvil, breakpoints, tablet.
---

# Responsive UI

Design mobile-first, then enhance for larger screens.

## Approach

1. Base styles = narrow phones (~360px)
2. Add complexity at breakpoints — do not hide a broken desktop layout behind media queries
3. Prefer fluid values (`clamp`, `%`, `minmax`) over many fixed breakpoints

## Breakpoint guidance

Use project tokens if they exist; otherwise a practical default:

| Token | Width | Use |
|-------|-------|-----|
| `sm` | ~640px | Larger phones / small tablets |
| `md` | ~768px | Tablets |
| `lg` | ~1024px | Laptop layouts |
| `xl` | ~1280px | Wide desktops |

Do not invent extra breakpoints without a layout reason.

## Layout rules

- Prefer single column → split sections only when content needs it
- Navigation: clear mobile pattern (button + panel), not a crammed horizontal menu
- Touch targets ≥ 44×44px for primary controls
- Avoid hover-only affordances; pair with focus/active states
- No horizontal scroll from padding, fixed widths, or overflow text
- Media scales within containers (`max-width: 100%`)

## Type & space

- Fluid type with `clamp()` for display headings when it helps hierarchy
- Comfortable line length (~45–75ch for body)
- Increase whitespace on large screens; do not just stretch the same cramped block

## Verify

- [ ] 320–400px width: readable, tappable, no overflow
- [ ] Tablet: nav and grids make sense
- [ ] Desktop: composition uses width without sparse emptiness or stretched text
- [ ] Landscape phone: hero and sticky bars do not trap content
