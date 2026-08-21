import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { RelatedLinks, type RelatedLink } from "@/components/sections/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema } from "@/lib/seo/schema";
import type { ArticleMeta } from "@/lib/data/articles";

interface ArticleLayoutProps {
  meta: ArticleMeta;
  children: ReactNode;
  relatedLinks: RelatedLink[];
}

export function ArticleLayout({ meta, children, relatedLinks }: ArticleLayoutProps) {
  const path = `/resources/${meta.slug}`;

  return (
    <>
      <Breadcrumbs items={[{ name: "Resources", path: "/resources" }, { name: meta.title, path }]} />

      <article className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <div className="glass rounded-3xl p-6 sm:p-10">
            <Badge>{meta.category}</Badge>
            <h1 className="font-display mt-3 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{meta.title}</h1>
            <p className="mt-3 text-sm text-slate-500">
              {new Date(meta.publishedDate).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · {meta.readTime}
            </p>

            <div className="prose-article mt-8">{children}</div>
          </div>
        </Container>
      </article>

      <RelatedLinks title="Related to this guide" links={relatedLinks} />

      <CTASection title="See these concepts inside Manitham HRMS" subtitle="Book a demo and we'll show you how it works in practice, not just in theory." />

      <JsonLd
        data={articleSchema({
          title: meta.title,
          description: meta.excerpt,
          path,
          datePublished: meta.publishedDate,
        })}
      />
    </>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-display mt-10 text-2xl font-bold text-ink-900">{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-display mt-7 text-xl font-bold text-ink-900">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-pretty leading-7 text-slate-600">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">{children}</ul>;
}

export function OL({ children }: { children: ReactNode }) {
  return <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-600">{children}</ol>;
}
