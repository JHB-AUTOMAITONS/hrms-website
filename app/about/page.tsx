import type { Metadata } from "next";
import { Target, Users, ShieldCheck, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.about);

const principles = [
  {
    icon: Target,
    title: "Built around real HR workflows",
    description: "We design around how Indian HR teams actually process attendance, leave and payroll — not a generic template.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance is not an afterthought",
    description: "PF, ESI, professional tax and TDS are core to how payroll works, built in from the start rather than bolted on.",
  },
  {
    icon: Users,
    title: "Software people actually use",
    description: "A tool only helps if employees and managers actually open it — so we focus on things being simple to use, not just feature-complete.",
  },
  {
    icon: Rocket,
    title: "Built to grow with you",
    description: "Start with the modules you need today, and add more as your team and processes grow.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="About us" title={keywordMap.about.h1} as="h1" />
          <div className="mt-6 space-y-4 text-pretty text-slate-600">
            <p>
              Manitham HRMS started from a simple observation: most HR teams in India aren&apos;t short on effort, they&apos;re
              short on tools that fit how they actually work. Attendance gets tracked in one place, leave in another,
              and payroll gets reconciled by hand at the end of every month.
            </p>
            <p>
              We&apos;re building a single HRMS that covers employee management, attendance, leave, payroll,
              performance and recruitment — designed around Indian payroll compliance from day one, not adapted to
              it later.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading title="What we care about" align="center" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-2xl border border-ink-900/8 bg-white p-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <principle.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-semibold text-ink-900">{principle.title}</h3>
                <p className="mt-2 text-sm text-pretty text-slate-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Want to see it for yourself?" subtitle="Book a demo and talk to the team building Manitham HRMS." />
    </>
  );
}
