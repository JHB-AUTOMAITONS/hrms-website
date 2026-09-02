/**
 * The "M" brand mark: two ribbon-like chevrons (blue + gold) forming an M,
 * a person silhouette in the notch, and a thin arc above. Square aspect
 * ratio (viewBox 0 0 120 120) — scale via `className` (e.g. `size-9`).
 *
 * Shared between normal DOM rendering (Header, Footer) and the favicon
 * routes (app/icon.tsx, app/apple-icon.tsx), which render through next/og's
 * Satori-based ImageResponse rather than React DOM. Satori resolves nested
 * function components fine, but gradient <defs> ids must be unique per
 * instance — since Header and Footer both render this on every page, each
 * call site passes its own `idPrefix` rather than relying on React's
 * `useId` (unavailable under Satori's renderer). Satori also has no CSS
 * cascade, so `className` (Tailwind) is a no-op there — the numeric
 * width/height props are what actually size it under Satori. In DOM
 * rendering, a `className` (e.g. `size-8`) overrides these as expected —
 * deliberately kept as plain numbers rather than "100%", since a percentage
 * SVG width can resolve against an indefinite containing block (e.g. a CSS
 * grid cell, as in the footer) and collapse to 0 even under an overriding
 * class.
 */
export function LogoMark({
  className,
  idPrefix = "logo",
  width = 24,
  height = 24,
}: {
  className?: string;
  idPrefix?: string;
  width?: number;
  height?: number;
}) {
  const blueId = `${idPrefix}-blue`;
  const goldId = `${idPrefix}-gold`;

  return (
    <svg viewBox="0 0 120 120" width={width} height={height} className={className} aria-hidden="true">
      <defs>
        <linearGradient id={blueId} x1="15%" y1="0%" x2="75%" y2="100%">
          <stop offset="0%" stopColor="#3570bf" />
          <stop offset="100%" stopColor="#1a2f54" />
        </linearGradient>
        <linearGradient id={goldId} x1="85%" y1="0%" x2="25%" y2="100%">
          <stop offset="0%" stopColor="#f0d49a" />
          <stop offset="100%" stopColor="#a97e2c" />
        </linearGradient>
      </defs>

      <path d="M 16 30 A 44 44 0 0 1 104 30" fill="none" stroke="#c99a3e" strokeWidth="4" strokeLinecap="round" />

      <path d="M 12 24 L 16 96 L 36 78 L 58 98 L 58 48 Z" fill={`url(#${blueId})`} />
      <path d="M 36 78 L 58 98 L 45 86 Z" fill="#0f2340" opacity={0.4} />

      <path d="M 108 24 L 104 96 L 84 78 L 62 98 L 62 48 Z" fill={`url(#${goldId})`} />
      <path d="M 84 78 L 62 98 L 75 86 Z" fill="#8a651f" opacity={0.4} />

      <circle cx="60" cy="40" r="6.5" fill="#16294d" />
      <path d="M 47 58 L 60 45 L 73 58" fill="none" stroke="#16294d" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
