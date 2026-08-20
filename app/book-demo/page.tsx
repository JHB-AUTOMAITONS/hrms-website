import type { Metadata } from "next";
import { CalendarCheck, PhoneCall, MonitorPlay } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckList } from "@/components/ui/CheckList";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { LeadForm } from "@/components/forms/LeadForm";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.bookDemo);

const steps = [
  { icon: CalendarCheck, title: "Tell us about your team", description: "Share a few details about your company and what you're looking to solve." },
  { icon: PhoneCall, title: "We reach out to confirm", description: "Our team gets in touch to schedule a time that works and understand your setup." },
  { icon: MonitorPlay, title: "Live walkthrough", description: "See Manitham HRMS on a call, focused on the modules that matter most to you." },
];

export default function BookDemoPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Book a Demo", path: "/book-demo" }]} />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeading eyebrow="Book a Demo" title={keywordMap.bookDemo.h1} subtitle="See Manitham HRMS on a live call, focused on your team's attendance, leave, payroll and HR workflows." as="h1" />

              <ol className="mt-8 space-y-6">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white shadow-sm shadow-brand-900/20">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-ink-900">{step.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-2xl border border-ink-900/8 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-ink-900">What we&apos;ll cover</p>
                <div className="mt-3">
                  <CheckList
                    items={[
                      "The modules relevant to your team — attendance, leave, payroll, performance or recruitment",
                      "How your current process maps onto Manitham HRMS",
                      "Pricing and rollout timeline for your headcount",
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-900/8 bg-white p-6 shadow-sm shadow-ink-900/[0.02] lg:col-span-3 sm:p-8">
              <LeadForm
                source="book-demo"
                messageLabel="What would you like us to cover?"
                messagePlaceholder="E.g. we need payroll for 80 employees across 2 states…"
                submitLabel="Book My Demo"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
