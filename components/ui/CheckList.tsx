import { Check } from "lucide-react";
import type { ReactNode } from "react";

export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-accent-600">
            <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
          </span>
          <span className="text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}
