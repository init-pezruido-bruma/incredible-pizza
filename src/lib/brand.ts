/**
 * Brand palette — single source of truth for TypeScript.
 * CSS mirrors these in `src/app/globals.css` (`:root`).
 * Edit here AND in globals.css (or keep them in sync).
 */
export const brandColors = {
  red: "#E31E24",
  yellow: "#FFC20E",
  orange: "#F58220",
  ink: "#231F20",
} as const;

export type BrandColorName = keyof typeof brandColors;
