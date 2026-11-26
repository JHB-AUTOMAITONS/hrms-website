import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";
import { pricingTiers, comparisonRows } from "@/lib/data/pricing";

export const metadata: Metadata = buildMetadata(keywordMap.pricing);

const faqs = [
  {
    question: "How is Manitham HRMS priced?",
    answer: "Manitham HRMS costs ₹45 per employee per month, with a minimum of 10 employees (₹450/month). Annual billing is ₹45 × 10 months per employee for 12 months of service — for example, ₹4,500/year for 10 employees.",
  },
  {
    question: "Can I start with fewer modules and add more later?",
    answer: "Yes. Many teams start with core HR, attendance and leave, then add payroll, performance or recruitment as they need them.",
  },
  {
    question: "Is there a free trial?",
    answer: "Book a demo and our team will walk you through the product on a setup close to yours, and discuss trial options based on your requirements.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes. Annual billing gives you 12 months of service for the price of 10 — 2 months free. That works out to ₹37.50 per employee per month, billed upfront (minimum ₹4,500/year for 10 employees).",
  },
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Pricing", path: "/pricing" }]} />

      <section className="py-14 sm:py-16">
        <Container>
          <SectionHeading eyebrow="Pricing" title={keywordMap.pricing.h1} subtitle="₹45 per employee per month, with a minimum of 10 employees. Pay annually and get 2 months free." align="center" as="h1" />
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <PricingCalculator />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-2xl p-6 transition-all hover:-translate-y-0.5 ${
                  tier.highlighted
                    ? "glass-strong ring-2 ring-gold-500 shadow-xl shadow-ink-900/[0.08]"
                    : "glass hover:shadow-lg hover:shadow-ink-900/[0.06]"
                }`}
              >
                {tier.highlighted ? (
                  <span className="bg-gold-500 mb-3 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                ) : null}
                <h3 className="font-display text-xl font-bold text-ink-900">{tier.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{tier.description}</p>
                <p className="mt-3 text-xs font-medium text-brand-600">{tier.bestFor}</p>
                <div className="mt-5 flex-1">
                  <CheckList items={tier.features} />
                </div>
                <ButtonLink href="/contact" variant={tier.highlighted ? "primary" : "secondary"} size="md" className="mt-6 w-full">
                  Talk to Sales
                </ButtonLink>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            ₹45 per employee per month · minimum 10 employees (₹450/month) · annual billing is 10 months for 12 months of service. No hidden fees. See{" "}
            <Link href="/resources/hrms-software-pricing-india" className="font-medium text-brand-600 hover:underline">
              what drives HRMS pricing in India
            </Link>{" "}
            for more detail.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Compare plans" align="center" />
          <div className="glass mt-10 overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink-900/8">
                  <th scope="col" className="p-4 font-semibold text-ink-900">
                    Feature
                  </th>
                  <th scope="col" className="p-4 text-center font-semibold text-ink-900">
                    Starter
                  </th>
                  <th scope="col" className="p-4 text-center font-semibold text-ink-900">
                    Growth
                  </th>
                  <th scope="col" className="p-4 text-center font-semibold text-ink-900">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-ink-900/6 last:border-0">
                    <td className="p-4 text-slate-700">{row.feature}</td>
                    <td className="p-4 text-center">
                      <MarkCell included={row.starter} />
                    </td>
                    <td className="p-4 text-center">
                      <MarkCell included={row.growth} />
                    </td>
                    <td className="p-4 text-center">
                      <MarkCell included={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection title="Get started for your team" subtitle="Tell us your headcount and the modules you need — we'll help you get set up." primaryLabel="Talk to Sales" primaryHref="/contact" secondaryLabel="Book a Demo" secondaryHref="/book-demo" />
    </>
  );
}

function MarkCell({ included }: { included: boolean }) {
  return included ? (
    <Check className="mx-auto size-4 text-accent-600" aria-label="Included" />
  ) : (
    <X className="mx-auto size-4 text-slate-300" aria-label="Not included" />
  );
}
