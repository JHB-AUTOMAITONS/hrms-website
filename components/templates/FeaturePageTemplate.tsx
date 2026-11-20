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
import { JsonLd } from "@/components/seo/JsonLd";
import type { FaqItem } from "@/lib/seo/schema";

type MockupKind = "overview" | "attendance" | "payroll" | "leave" | "performance" | "recruitment" | "compliance" | "whatsapp";

export interface FeatureContentSection {
  /** Optional anchor id for in-page links. */
  id?: string;
  title: string;
  paragraphs: ReactNode[];
  /** Checklist shown in the side panel. Ignored when `aside` is set. */
  bullets?: ReactNode[];
  /** Small label above the checklist, e.g. to mark it as policy questions rather than features. */
  bulletsTitle?: string;
  /** Custom visual rendered instead of the checklist panel. */
  aside?: ReactNode;
  /** "split" (default) puts text and panel side by side; "stacked" puts the panel full-width below the text. */
  layout?: "split" | "stacked";
  /** Small-print note under the paragraphs (caveats, policy disclaimers). */
  note?: ReactNode;
}

export interface FeatureInlineCta {
  title: string;
  text?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export interface FeatureComparison {
  title: string;
  intro?: string;
  columns: [string, string, string];
  rows: [string, string, string][];
}

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
  /** Optional text + checklist sections rendered after the capabilities grid. */
  contentSections?: FeatureContentSection[];
  /** Optional three-column comparison table rendered after the content sections. */
  comparison?: FeatureComparison;
  /** Optional inline call-to-action rendered directly after the comparison table. */
  comparisonCta?: FeatureInlineCta;
  /** Optional text sections rendered after the comparison table, before benefits. */
  contentSectionsAfterComparison?: FeatureContentSection[];
  /** Optional extra JSON-LD for the page (breadcrumb and FAQ schema are already emitted). */
  structuredData?: object | object[];
  benefitsTitle?: string;
  benefits?: { title: string; description: string }[];
  faqs: FaqItem[];
  relatedLinks: RelatedLink[];
  ctaTitle: string;
  ctaSubtitle?: string;
}

function ContentSection({ section, shaded }: { section: FeatureContentSection; shaded: boolean }) {
  const stacked = section.layout === "stacked";
  const panel =
    section.aside ??
    (section.bullets && section.bullets.length > 0 ? (
      <div className="glass rounded-2xl p-6">
        {section.bulletsTitle ? (
          <p className="mb-4 text-xs font-semibold tracking-wide text-brand-700 uppercase">{section.bulletsTitle}</p>
        ) : null}
        <CheckList items={section.bullets} />
      </div>
    ) : null);

  return (
    <section id={section.id} className={`scroll-mt-24 py-14 sm:py-16 ${shaded ? "glass-subtle border-x-0" : ""}`}>
      <Container className={stacked ? "" : "grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12"}>
        <div className={stacked ? "max-w-3xl" : ""}>
          <h2 className="font-display text-pretty text-2xl font-bold text-ink-900 sm:text-3xl">{section.title}</h2>
          <div className="mt-4 space-y-4">
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className="text-pretty text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
          {section.note ? <p className="mt-4 text-sm text-pretty text-slate-500">{section.note}</p> : null}
        </div>
        {panel ? <div className={stacked ? "mt-8" : ""}>{panel}</div> : null}
      </Container>
    </section>
  );
}

export function FeaturePageTemplate({ content }: { content: FeaturePageContent }) {
  const sectionsBefore = content.contentSections ?? [];
  const sectionsAfter = content.contentSectionsAfterComparison ?? [];

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

      {sectionsBefore.map((section, index) => (
        <ContentSection key={section.title} section={section} shaded={index % 2 === 1} />
      ))}

      {content.comparison ? (
        <section className="py-14 sm:py-16">
          <Container className="max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">{content.comparison.title}</h2>
            {content.comparison.intro ? <p className="mt-4 text-pretty text-slate-600">{content.comparison.intro}</p> : null}
            <p className="mt-4 text-xs font-medium text-slate-500 sm:hidden">Swipe sideways to see all columns.</p>
            <div
              role="region"
              aria-label={content.comparison.title}
              tabIndex={0}
              className="glass mt-2 overflow-x-auto rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:mt-6"
            >
              <table className="w-full min-w-[34rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-ink-900/10 text-ink-900">
                    {content.comparison.columns.map((column) => (
                      <th key={column} scope="col" className="px-4 py-3 font-semibold">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-900/10 text-slate-600">
                  {content.comparison.rows.map(([area, manual, automated]) => (
                    <tr key={area}>
                      <th scope="row" className="px-4 py-3 align-top font-semibold text-ink-900">
                        {area}
                      </th>
                      <td className="px-4 py-3 align-top">{manual}</td>
                      <td className="px-4 py-3 align-top">{automated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {content.comparisonCta ? (
              <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl border border-brand-200/70 bg-brand-50/70 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-lg font-bold text-ink-900">{content.comparisonCta.title}</p>
                  {content.comparisonCta.text ? (
                    <p className="mt-1 text-sm text-pretty text-slate-600">{content.comparisonCta.text}</p>
                  ) : null}
                </div>
                <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
                  <ButtonLink href="/book-demo">{content.comparisonCta.primaryLabel ?? "Book a Demo"}</ButtonLink>
                  <ButtonLink href="/contact" variant="secondary">
                    {content.comparisonCta.secondaryLabel ?? "Talk to Sales"}
                  </ButtonLink>
                </div>
              </div>
            ) : null}
          </Container>
        </section>
      ) : null}

      {sectionsAfter.map((section, index) => (
        <ContentSection key={section.title} section={section} shaded={index % 2 === 0} />
      ))}

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

      {content.structuredData ? <JsonLd data={content.structuredData} /> : null}
    </>
  );
}
