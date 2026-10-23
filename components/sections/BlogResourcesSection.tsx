import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import type { ArticleMeta } from "@/lib/data/articles";

/**
 * Featured-article cards for a specific set of resources, reusing the same
 * card styling as the /resources listing page. Data-driven: pass a
 * different `articles` array (e.g. filtered by `locale`) to feature a
 * different market's guides from any landing page, with no markup to
 * duplicate per market.
 */
export function BlogResourcesSection({
  title,
  subtitle,
  articles,
  className = "",
}: {
  title: string;
  subtitle?: string;
  articles: ArticleMeta[];
  className?: string;
}) {
  if (articles.length === 0) return null;

  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container>
        <SectionHeading eyebrow="Resources" title={title} subtitle={subtitle} align="center" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="group flex flex-col glass rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300/60 hover:shadow-lg hover:shadow-ink-900/[0.06]"
            >
              <Badge>{article.category}</Badge>
              <h3 className="mt-3 text-lg font-semibold text-ink-900">{article.title}</h3>
              <p className="mt-2 flex-1 text-sm text-pretty text-slate-600">{article.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>
                  {new Date(article.publishedDate).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-brand-600">
                  Read
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
