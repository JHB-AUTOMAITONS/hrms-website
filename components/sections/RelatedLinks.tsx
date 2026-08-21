import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface RelatedLink {
  title: string;
  description: string;
  href: string;
}

export function RelatedLinks({
  title = "Explore related features",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (links.length === 0) return null;

  return (
    <section className="border-t border-ink-900/5 py-16 sm:py-20">
      <Container>
        <SectionHeading title={title} />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col justify-between glass rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-brand-300/60 hover:shadow-lg hover:shadow-ink-900/[0.06]"
            >
              <div>
                <h3 className="font-semibold text-ink-900">{link.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{link.description}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
