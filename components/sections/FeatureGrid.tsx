import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface FeatureGridItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

interface FeatureGridProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: FeatureGridItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeatureGrid({ id, eyebrow, title, subtitle, items, columns = 3, className = "" }: FeatureGridProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" />
        <div className={`mt-12 grid grid-cols-1 gap-6 ${gridCols}`}>
          {items.map((item) => {
            const card = (
              <>
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-pretty text-slate-600">{item.description}</p>
                {item.href ? (
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                    Learn more
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </span>
                ) : null}
              </>
            );

            if (item.href) {
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-ink-900/8 bg-white p-6 shadow-sm shadow-ink-900/[0.02] transition-colors hover:border-brand-300"
                >
                  {card}
                </Link>
              );
            }

            return (
              <div key={item.title} className="rounded-2xl border border-ink-900/8 bg-white p-6 shadow-sm shadow-ink-900/[0.02]">
                {card}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
