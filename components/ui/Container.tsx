import type { ReactNode } from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
