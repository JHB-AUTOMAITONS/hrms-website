import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FeatureGrid, type FeatureGridItem } from "@/components/sections/FeatureGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { RelatedLinks, type RelatedLink } from "@/components/sections/RelatedLinks";
import { AppMockup } from "@/components/illustrations/AppMockup";
import type { FaqItem } from "@/lib/seo/schema";

type MockupKind = "overview" | "attendance" | "payroll" | "leave" | "performance" | "recruitment" | "compliance";

export interface FeaturePageContent {
  path: string;
  breadcrumbLabel: string;
  heroEyebrow: string;
  h1: string;
  heroSubtitle: string;
  highlights: string[];
  mockupKind: MockupKind;
  overviewTitle: string;
  overviewParagraphs: string[];
  overviewBullets: ReactNode[];
  capabilitiesTitle: string;
  capabilitiesSubtitle?: string;
  capabilities: FeatureGridItem[];
  benefitsTitle?: string;
  benefits?: { title: string; description: string }[];
  faqs: FaqItem[];
  relatedLinks: RelatedLink[];
  ctaTitle: string;
  ctaSubtitle?: string;
}

export function FeaturePageTemplate({ content }: { content: FeaturePageContent }) {
  return (
    <>
      <Breadcrumbs items={[{ name: content.breadcrumbLabel, path: content.path }]} />

      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white py-14 sm:py-16">
        <div className="bg-dot-grid-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{content.heroEyebrow}</Eyebrow>
            <h1 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {content.h1}
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-lg text-slate-600">{content.heroSubtitle}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {content.highlights.map((item) => (
                <span key={item} className="glass-subtle rounded-full px-3 py-1.5 text-xs font-medium text-slate-700">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book-demo" size="lg">
                Book a Demo
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Talk to Sales
              </ButtonLink>
            </div>
          </div>
          <AppMockup kind={content.mockupKind} />
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">{content.overviewTitle}</h2>
          <div className="mt-4 space-y-4">
            {content.overviewParagraphs.map((paragraph, index) => (
              <p key={index} className="text-pretty text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-6">
            <CheckList items={content.overviewBullets} />
          </div>
        </Container>
      </section>

      <FeatureGrid
        eyebrow="Capabilities"
        title={content.capabilitiesTitle}
        subtitle={content.capabilitiesSubtitle}
        items={content.capabilities}
        columns={3}
        className="glass-subtle border-x-0"
      />

      {content.benefits && content.benefits.length > 0 ? (
        <section className="py-14 sm:py-16">
          <Container>
            <SectionHeading title={content.benefitsTitle ?? "Why it matters"} align="center" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {content.benefits.map((benefit) => (
                <div key={benefit.title} className="glass rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/[0.06]">
                  <h3 className="font-display font-bold text-ink-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-pretty text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <FAQSection faqs={content.faqs} className="glass-subtle border-x-0" />

      <RelatedLinks links={content.relatedLinks} />

      <CTASection title={content.ctaTitle} subtitle={content.ctaSubtitle} />
    </>
  );
}
