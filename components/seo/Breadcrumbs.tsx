import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/seo/schema";

/**
 * Visible breadcrumb trail plus matching BreadcrumbList JSON-LD.
 * `items` should NOT include "Home" — it's added automatically.
 */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const trail: BreadcrumbItem[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="glass-subtle border-x-0 border-t-0">
      <div className="mx-auto max-w-8xl px-4 py-3 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span className="font-medium text-ink-900" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-brand-600">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
      <JsonLd data={breadcrumbSchema(trail)} />
    </nav>
  );
}
