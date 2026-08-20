const tones = {
  light: "text-brand-700",
  dark: "text-brand-200",
} as const;

export function Eyebrow({ children, tone = "light" }: { children: string; tone?: keyof typeof tones }) {
  return (
    <p className={`flex items-center gap-2 text-sm font-semibold tracking-wide uppercase ${tones[tone]}`}>
      <span className="bg-gold-500 size-1.5 rounded-full" aria-hidden="true" />
      {children}
    </p>
  );
}
