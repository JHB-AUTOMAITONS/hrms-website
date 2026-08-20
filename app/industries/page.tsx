import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Rocket, Factory } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.industries);

const industries = [
  {
    icon: Building2,
    title: "Small Business",
    href: "/industries/small-business",
    description: "Replace spreadsheets for attendance, leave and payroll without enterprise-level overhead.",
  },
  {
    icon: Rocket,
    title: "Startups",
    href: "/industries/startups",
    description: "HR that scales with you from your first ten hires to your first dedicated HR team.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    href: "/industries/manufacturing",
    description: "Shift-based attendance, shop-floor biometric punch and multi-plant payroll.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Industries", path: "/industries" }]} />

      <section className="py-14 sm:py-16">
        <Container>
          <SectionHeading eyebrow="Industries" title={keywordMap.industries.h1} subtitle="The core Manitham HRMS platform stays the same — but the way you'd set it up looks a little different depending on how your organization runs HR." as="h1" />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group flex flex-col rounded-2xl border border-ink-900/8 bg-white p-6 shadow-sm shadow-ink-900/[0.03] transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-ink-900/[0.06]"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-900/5">
                  <industry.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="font-display mt-4 text-lg font-bold text-ink-900">{industry.title}</h3>
                <p className="mt-2 flex-1 text-sm text-pretty text-slate-600">{industry.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Explore
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Don't see your industry?" subtitle="Manitham HRMS is flexible enough to fit most organizations — talk to us about your specific setup." primaryLabel="Talk to Sales" primaryHref="/contact" />
    </>
  );
}
