import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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

export interface IndustryPageContent {
  path: string;
  breadcrumbLabel: string;
  h1: string;
  heroSubtitle: string;
  mockupKind: MockupKind;
  challengesTitle: string;
  challenges: { title: string; description: string }[];
  featuresTitle: string;
  featuresSubtitle?: string;
  features: FeatureGridItem[];
  workflowTitle: string;
  workflowSteps: { title: string; description: string }[];
  faqs: FaqItem[];
  relatedLinks: RelatedLink[];
  ctaTitle: string;
  ctaSubtitle?: string;
}

export function IndustryPageTemplate({ content }: { content: IndustryPageContent }) {
  return (
    <>
      <Breadcrumbs items={[{ name: "Industries", path: "/industries" }, { name: content.breadcrumbLabel, path: content.path }]} />

      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white py-14 sm:py-16">
        <div className="bg-dot-grid-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Industry</Eyebrow>
            <h1 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {content.h1}
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-lg text-slate-600">{content.heroSubtitle}</p>
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
        <Container>
          <SectionHeading title={content.challengesTitle} />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {content.challenges.map((challenge) => (
              <div key={challenge.title} className="rounded-2xl border border-ink-900/8 bg-white p-6 shadow-sm shadow-ink-900/[0.03] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/[0.06]">
                <h3 className="font-display font-bold text-ink-900">{challenge.title}</h3>
                <p className="mt-2 text-sm text-pretty text-slate-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FeatureGrid eyebrow="Fit" title={content.featuresTitle} subtitle={content.featuresSubtitle} items={content.features} columns={3} className="bg-slate-50" />

      <section className="py-14 sm:py-16">
        <Container>
          <SectionHeading title={content.workflowTitle} />
          <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {content.workflowSteps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-ink-900/8 bg-white p-6 shadow-sm shadow-ink-900/[0.03]">
                <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white shadow-sm shadow-brand-900/20">
                  {index + 1}
                </span>
                <h3 className="font-display mt-3 font-bold text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm text-pretty text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <FAQSection faqs={content.faqs} className="bg-slate-50" />

      <RelatedLinks links={content.relatedLinks} />

      <CTASection title={content.ctaTitle} subtitle={content.ctaSubtitle} />
    </>
  );
}
