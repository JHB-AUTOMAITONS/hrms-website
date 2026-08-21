import type { Metadata } from "next";
import { Users, Fingerprint, CalendarDays, Wallet, LineChart, UserPlus, Smartphone, ShieldCheck, Workflow } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeatureGrid, type FeatureGridItem } from "@/components/sections/FeatureGrid";
import { ModuleShowcase } from "@/components/sections/ModuleShowcase";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { softwareApplicationSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.home);

const modules: FeatureGridItem[] = [
  { icon: Users, title: "Employee Management", description: "Every employee record, document and org chart in one searchable place.", href: "/employee-management" },
  { icon: Fingerprint, title: "Attendance", description: "Biometric, GPS and mobile check-in with shift and overtime tracking.", href: "/attendance-management" },
  { icon: CalendarDays, title: "Leave Management", description: "Configurable leave policies with online requests and approvals.", href: "/leave-management" },
  { icon: Wallet, title: "Payroll", description: "Automated salary runs with PF, ESI, professional tax and TDS.", href: "/payroll-software" },
  { icon: LineChart, title: "Performance", description: "Goals, KPIs and structured appraisal cycles managers actually use.", href: "/performance-management" },
  { icon: UserPlus, title: "Recruitment", description: "Post jobs, track applicants and move straight into onboarding.", href: "/recruitment" },
  { icon: Smartphone, title: "Employee Self-Service", description: "Employees apply for leave, check attendance and pull payslips.", href: "/employee-self-service" },
  { icon: ShieldCheck, title: "HR Compliance", description: "PF, ESI and TDS calculations kept organized and audit-ready.", href: "/hr-compliance" },
  { icon: Workflow, title: "HR Automation", description: "Approvals, reminders and notifications that run without manual chasing.", href: "/hrms-software" },
];

const faqs = [
  {
    question: "What is HRMS software?",
    answer:
      "HRMS stands for Human Resource Management System — software that brings employee records, attendance, leave, payroll and other HR processes into a single system instead of spreadsheets and disconnected tools.",
  },
  {
    question: "What does Manitham HRMS actually include?",
    answer:
      "Manitham HRMS covers employee management, attendance (biometric, GPS and mobile), leave management, payroll with statutory compliance, performance management, recruitment, an employee self-service portal, and HR compliance tracking — all in one platform.",
  },
  {
    question: "Does Manitham HRMS handle Indian payroll compliance?",
    answer:
      "Yes. Payroll runs include PF, ESI, professional tax and TDS calculations, along with payslips and payroll reports built around Indian statutory requirements.",
  },
  {
    question: "Can employees apply for leave and check attendance from their phone?",
    answer:
      "Yes. The employee self-service portal lets employees mark attendance, apply for leave, check leave balances and download payslips from their phone or any browser.",
  },
  {
    question: "Does Manitham HRMS support biometric and GPS attendance?",
    answer:
      "Yes. Attendance can be captured through biometric devices, GPS-based mobile check-in, or web punch-in, depending on how your teams work.",
  },
  {
    question: "Is Manitham HRMS cloud-based?",
    answer: "Yes. Manitham HRMS is fully cloud-based — there's nothing to install, and it's accessible from any device with an internet connection.",
  },
  {
    question: "Is Manitham HRMS suitable for small businesses?",
    answer:
      "Yes. Manitham HRMS is built to work for small teams as well as larger, multi-location organizations — you can start with the modules you need and add more as you grow.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free demo and our team will walk through Manitham HRMS using a setup close to yours, so you can see exactly how it would work for your organization.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      <FeatureGrid
        id="features"
        eyebrow="Platform"
        title="Everything your HR team needs, in one place"
        subtitle="Nine connected modules that share one employee record — so data entered once shows up everywhere it's needed."
        items={modules}
        columns={3}
        className="scroll-mt-20"
      />

      <div className="divide-y divide-ink-900/5 border-t border-ink-900/5">
        <ModuleShowcase
          eyebrow="Attendance"
          title="Attendance that works the way your teams actually clock in"
          description="Capture attendance through biometric devices at the office, GPS-based check-in for field and site staff, or simple web punch-in — with shift schedules, late marks and overtime calculated automatically."
          bullets={["Biometric device integration", "GPS-based mobile check-in", "Shift scheduling and overtime tracking", "Real-time attendance reports"]}
          mockupKind="attendance"
          href="/attendance-management"
        />
        <ModuleShowcase
          eyebrow="Payroll"
          title="Payroll that gets salaries right, every single cycle"
          description="Run payroll for your entire team with statutory deductions calculated automatically — PF, ESI, professional tax and TDS — and payslips generated the moment a run is approved."
          bullets={["Automated PF, ESI, PT and TDS", "Payslip generation and Form 16", "Payroll reports for finance and audit", "Attendance and leave feed straight into payroll"]}
          mockupKind="payroll"
          href="/payroll-software"
          reverse
        />
        <ModuleShowcase
          eyebrow="Leave Management"
          title="Leave policies your employees and managers can actually follow"
          description="Set up leave types and policies that match how your company works, then let employees apply and managers approve — with balances and holiday calendars always visible."
          bullets={["Configurable leave types and policies", "Online requests with approval workflows", "Real-time leave balances", "Company and regional holiday calendars"]}
          mockupKind="leave"
          href="/leave-management"
        />
      </div>

      <RelatedLinks
        title="Built for your industry"
        links={[
          { title: "Small Business", description: "Replace spreadsheets without enterprise overhead.", href: "/industries/small-business" },
          { title: "Startups", description: "HR that scales from your first ten hires onward.", href: "/industries/startups" },
          { title: "Manufacturing", description: "Shift-floor attendance and multi-plant payroll.", href: "/industries/manufacturing" },
        ]}
      />

      <Testimonials />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Pricing" title="Simple pricing that scales with your team" align="center" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { name: "Starter", blurb: "Core HR, attendance and leave for small teams getting off spreadsheets.", popular: false },
              { name: "Growth", blurb: "Adds payroll, performance and recruitment as your HR needs grow.", popular: true },
              { name: "Enterprise", blurb: "Multi-location support, custom workflows and dedicated onboarding.", popular: false },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-6 text-center transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                  tier.popular ? "glass-strong ring-2 ring-gold-500 shadow-ink-900/[0.06]" : "glass shadow-ink-900/[0.03]"
                }`}
              >
                {tier.popular ? (
                  <span className="bg-gold-500 absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    Most Popular
                  </span>
                ) : null}
                <h3 className="font-display text-lg font-bold text-ink-900">{tier.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{tier.blurb}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <ButtonLink href="/pricing" variant="secondary" size="lg">
              See full pricing
            </ButtonLink>
          </div>
        </Container>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="See Manitham HRMS on your own data"
        subtitle="Book a free walkthrough with our product team — no setup required to see it in action."
      />

      <JsonLd data={softwareApplicationSchema()} />
    </>
  );
}
