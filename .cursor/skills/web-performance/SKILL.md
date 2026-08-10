---
name: web-performance
description: >-
  Optimize modern sites for Core Web Vitals and fast loads: images, fonts, JS/CSS
  budget, LCP/CLS/INP, caching, and critical rendering. Use when building pages,
  adding media, choosing frameworks, or when the user mentions performance, speed,
  Lighthouse, Core Web Vitals, or optimization. Triggers: rendimiento, performance,
  Lighthouse, LCP, CLS, velocidad, optimizar.
---

# Web Performance

Fast sites feel professional. Optimize as you build.

## Priorities (in order)

1. **LCP** — Hero image/text paints fast (optimize the largest above-the-fold element)
2. **CLS** — Reserve space for images, fonts, embeds; no late layout jumps
3. **INP** — Keep main-thread work light; defer non-critical JS

## Images

- Correct format: AVIF/WebP with fallback when needed; never ship huge PNG/JPEG unscaled
- Explicit `width` / `height` or CSS aspect-ratio to prevent CLS
- `fetchpriority="high"` on the LCP image; `loading="lazy"` on below-fold media
- Responsive `srcset` / `sizes` for real viewport widths
- Prefer CDN or static optimized assets over raw uploads

## Fonts

- Limit families/weights (typically 1–2 families, few weights)
- `font-display: swap` or `optional` as appropriate
- Preload only the critical display/body face
- Prefer variable fonts when they reduce total bytes

## JS / CSS

- Ship less: avoid heavy UI kits for simple marketing pages
- Code-split routes; defer analytics and non-critical widgets
- Critical CSS stays lean; kill unused Tailwind/other utilities in production builds
- Prefer CSS for simple motion over animation libraries when possible

## Loading strategy

| Asset | Strategy |
|-------|----------|
| Hero / LCP | Eager, high priority, optimized |
| Below-fold images | Lazy |
| Third-party scripts | Defer / consent / after interaction when possible |
| Videos | Poster image first; load media on demand |

## Checklist before shipping

- [ ] LCP element identified and optimized
- [ ] No layout shift from fonts/images
- [ ] Mobile payload reasonable (avoid multi-MB heroes)
- [ ] No blocking fonts/scripts in `<head>` without reason
