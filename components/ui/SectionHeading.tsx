interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow ? <p className="text-sm font-semibold tracking-wide text-brand-600 uppercase">{eyebrow}</p> : null}
      <Tag className="mt-2 text-pretty text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{title}</Tag>
      {subtitle ? <p className="mt-4 text-lg text-slate-600 text-pretty">{subtitle}</p> : null}
    </div>
  );
}
