import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-brand-600 text-white shadow-md shadow-brand-900/20 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-900/25",
  secondary: "bg-white text-ink-900 border border-ink-900/15 hover:border-brand-400 hover:text-brand-700",
  ghost: "text-brand-700 hover:bg-brand-50",
  inverse: "bg-white text-brand-800 shadow-md shadow-black/10 hover:bg-brand-50",
  whatsapp: "bg-accent-500 text-white shadow-md shadow-accent-900/20 hover:bg-accent-600",
  // For use on dark backgrounds (hero, CTA bands) — a standalone variant
  // rather than overriding `secondary`'s bg/text via className, which
  // produces unpredictable white-on-white text depending on Tailwind's
  // generated utility order.
  outlineLight: "border border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/10",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonLinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function ButtonLink({ href, variant = "primary", size = "md", className = "", children, ...rest }: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = "primary", size = "md", className = "", children, ...rest }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
