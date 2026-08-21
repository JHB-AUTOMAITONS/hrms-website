/**
 * Fixed, full-viewport decorative background every glass panel site-wide
 * blurs and tints. Rendered once in the root layout, behind everything —
 * `fixed` positioning keeps the blobs pinned to the viewport rather than
 * scrolling with the page, so glass surfaces read consistently at any
 * scroll position. Tuned to the navy/gold brand palette in globals.css.
 */
export function GradientMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-40 -left-32 size-[36rem] rounded-full bg-brand-300/35 blur-[110px]" />
      <div className="absolute top-1/3 -right-40 size-[40rem] rounded-full bg-brand-400/25 blur-[130px]" />
      <div className="bg-gold-400/15 absolute bottom-0 left-1/4 size-[32rem] rounded-full blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 size-[26rem] rounded-full bg-accent-500/15 blur-[100px]" />
    </div>
  );
}
