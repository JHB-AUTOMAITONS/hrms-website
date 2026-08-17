import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";
import { articles } from "@/lib/data/articles";

export const metadata: Metadata = buildMetadata(keywordMap.resources);

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Resources", path: "/resources" }]} />

      <section className="py-14 sm:py-16">
        <Container>
          <SectionHeading eyebrow="Resources" title={keywordMap.resources.h1} subtitle="Practical guides on HRMS, payroll and attendance, written for HR teams actually running these processes." as="h1" />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group flex flex-col rounded-2xl border border-ink-900/8 bg-white p-6 transition-colors hover:border-brand-300"
              >
                <Badge>{article.category}</Badge>
                <h2 className="mt-3 text-lg font-semibold text-ink-900">{article.title}</h2>
                <p className="mt-2 flex-1 text-sm text-pretty text-slate-600">{article.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{article.readTime}</span>
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
    </>
  );
}
