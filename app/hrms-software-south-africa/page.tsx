import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Clock,
  Wallet,
  Building2,
  BarChart3,
  Fingerprint,
  CalendarClock,
  Receipt,
  Smartphone,
  TrendingUp,
  PieChart,
  Bell,
  Store,
  Factory,
  HeartPulse,
  UtensilsCrossed,
  Laptop,
  Truck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogResourcesSection } from "@/components/sections/BlogResourcesSection";
import { CTASection } from "@/components/sections/CTASection";
import { AppMockup } from "@/components/illustrations/AppMockup";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";
import { getArticleBySlug } from "@/lib/data/articles";

export const metadata: Metadata = buildMetadata(keywordMap.hrmsSoftwareSouthAfrica);

const southAfricaArticles = [
  getArticleBySlug("hr-software-south-africa")!,
  getArticleBySlug("payroll-software-south-africa")!,
  getArticleBySlug("hr-management-software-south-africa")!,
];

const faqs = [
  {
    question: "What is HRMS software, and how can South African businesses benefit?",
    answer:
      "HRMS (HR management system) software brings employee records, attendance, leave and payroll into one connected platform instead of separate spreadsheets. For South African businesses, the main benefit is less manual admin and reconciliation as headcount, sites and leave policies grow more complex.",
  },
  {
    question: "Can Manitham HRMS manage employee attendance and leave?",
    answer:
      "Yes. Attendance supports biometric devices, GPS-based mobile check-in and web punch-in, with late marks and overtime calculated automatically against shift schedules. Leave policies, requests and approvals run in the same system, so approved leave is reflected in attendance without manual updates.",
  },
  {
    question: "Does Manitham HRMS support South African payroll requirements?",
    answer:
      "Manitham HRMS runs salary processing, payslips and statutory deductions as part of payroll, with attendance and leave feeding directly into each run. South African requirements such as PAYE, UIF and SDL are specific and change periodically, so rather than make a general claim here, book a demo with your own payroll scenario and we'll show you exactly what's supported today.",
  },
  {
    question: "Can businesses manage employee records in one platform?",
    answer:
      "Yes. Employee management holds profiles, documents, departments and reporting lines on a single record, so the same information is available across attendance, leave, payroll and self-service instead of living in separate files.",
  },
  {
    question: "Can the system support multiple departments or locations?",
    answer:
      "Yes. Employees can be organized by department, designation and location, with attendance and reporting available at a department or site level — useful for retail chains, multi-site operations or businesses with more than one branch or depot.",
  },
  {
    question: "How can a South African business book a demo?",
    answer:
      "Book a demo and bring your own leave policy, attendance setup and payroll scenario. Our team will walk through the platform against your actual requirements rather than a generic script.",
  },
];

export default function HrmsSoftwareSouthAfricaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "HRMS Software South Africa", path: keywordMap.hrmsSoftwareSouthAfrica.path }]} />

      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white py-14 sm:py-16">
        <div className="bg-dot-grid-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>HRMS Software South Africa</Eyebrow>
            <h1 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {keywordMap.hrmsSoftwareSouthAfrica.h1}
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-lg text-slate-600">
              Manitham HRMS is HRMS software for South Africa — one connected system for employee records,
              attendance, leave and payroll, replacing the spreadsheets and manual admin that slow HR down as a
              team grows. Built around how South African businesses actually run HR, with the payroll and
              compliance detail covered further down this page.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Employee records", "Attendance & leave", "Payroll workflows", "Multi-location reporting"].map((item) => (
                <span key={item} className="glass-subtle rounded-full px-3 py-1.5 text-xs font-medium text-slate-700">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book-demo" size="lg">
                Book a Demo
              </ButtonLink>
              <ButtonLink href="#features" variant="secondary" size="lg">
                Explore Features
              </ButtonLink>
            </div>
          </div>
          <AppMockup kind="compliance" />
        </Container>
      </section>

      {/* Section 2: HR Challenges in South Africa */}
      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            Common HR challenges for South African businesses
          </h2>
          <div className="mt-4 space-y-4">
            <p className="text-pretty text-slate-600">
              A lot of South African businesses run HR the same way at first: a spreadsheet for leave, a WhatsApp
              group for shift changes, and a payroll run that depends on one person remembering everything. It
              works until the business has more than a handful of employees, more than one site, or a leave
              dispute that needs a clean record to resolve.
            </p>
          </div>
          <div className="mt-6">
            <CheckList
              items={[
                "Employee records scattered across spreadsheets, email and paper files, with no single source of truth",
                "Attendance tracked manually, making late marks and overtime time-consuming to calculate correctly",
                "Leave requests and approvals handled over email or WhatsApp, with balances that drift out of sync",
                "Payroll administration and payslip preparation that depends on manually reconciling hours, leave and deductions each cycle",
                "Managing multiple teams, departments or locations without one consistent view of who works where",
                "Limited visibility into HR data — reporting on headcount, attendance or leave trends means building a report by hand",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Section 3: HRMS Features */}
      <FeatureGrid
        id="features"
        eyebrow="Capabilities"
        title="HRMS features built for how South African teams work"
        items={[
          { icon: FileText, title: "Employee Management", description: "Digital employee records — profiles, documents, departments and reporting lines — on one record per employee." },
          { icon: Fingerprint, title: "Attendance Management", description: "Biometric devices, GPS-based mobile check-in and web punch-in, all feeding into the same attendance record." },
          { icon: Clock, title: "Leave Management", description: "Configurable leave types and cycles, with online requests and manager approval workflows." },
          { icon: Wallet, title: "Payroll Management", description: "Salary processing and payslip administration, drawing directly from attendance and approved leave." },
          { icon: Smartphone, title: "Employee Self-Service", description: "Employees check attendance, apply for leave and access payslips themselves, from any device." },
          { icon: TrendingUp, title: "Performance & Lifecycle", description: "Goals, reviews and appraisals alongside the employee record, from onboarding through to exit." },
          { icon: BarChart3, title: "Reports & Analytics", description: "Workforce insights by department, location or individual, without building a report by hand." },
          { icon: Bell, title: "HR Automation & Notifications", description: "Routine approvals and reminders handled by the system, reducing repetitive manual follow-up." },
        ]}
        columns={4}
        className="glass-subtle border-x-0"
      />

      {/* Section 4: South African Payroll and Compliance */}
      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            South African payroll and compliance, explained
          </h2>
          <div className="mt-4 space-y-4 text-pretty text-slate-600">
            <p>
              This is general guidance on the obligations South African employers typically work with, not legal
              advice — confirm specifics with the relevant authority or your own adviser. Manitham HRMS runs
              payroll processing, attendance and leave on one employee record; it does not automatically calculate
              or file South African taxes, nor integrate directly with SARS systems, unless that is confirmed for
              your specific setup during a demo.
            </p>
          </div>
          <div className="mt-6">
            <CheckList
              items={[
                <>
                  <strong>SARS (South African Revenue Service).</strong> The authority employers deal with for
                  employees&apos; tax. See{" "}
                  <a href="https://www.sars.gov.za/" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 hover:underline">
                    sars.gov.za
                  </a>{" "}
                  for current guidance.
                </>,
                <>
                  <strong>PAYE (Pay-As-You-Earn).</strong> Employers deduct PAYE from remuneration and pay it over
                  to SARS, based on the tax tables SARS publishes and updates after each Budget.
                </>,
                <>
                  <strong>UIF (Unemployment Insurance Fund).</strong> Employer and employee each contribute toward
                  UIF, which has its own registration and declaration process separate from SARS payments.
                </>,
                <>
                  <strong>SDL (Skills Development Levy).</strong> Employers whose expected annual payroll passes
                  the relevant threshold contribute SDL, calculated on total payroll.
                </>,
                <>
                  <strong>BCEA (Basic Conditions of Employment Act).</strong> Sets minimum requirements for leave,
                  working hours and payslip content. See{" "}
                  <a href="https://www.labour.gov.za/" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 hover:underline">
                    labour.gov.za
                  </a>{" "}
                  for the current requirements.
                </>,
                <>
                  <strong>LRA (Labour Relations Act).</strong> Governs the employment relationship, including
                  dismissal, discipline and dispute resolution — relevant to how HR records are kept, not something
                  payroll software decides on its own.
                </>,
                <>
                  <strong>POPIA (Protection of Personal Information Act).</strong> Employee records are personal
                  information, so POPIA applies to how they are collected, stored, secured and shared. See{" "}
                  <a href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 hover:underline">
                    inforegulator.org.za
                  </a>{" "}
                  for guidance from the Information Regulator.
                </>,
              ]}
            />
          </div>
          <p className="mt-6 text-pretty text-slate-600">
            For a full walkthrough of PAYE, UIF, SDL and the SARS filing calendar, see{" "}
            <Link href="/resources/payroll-software-south-africa" className="font-medium text-brand-600 hover:underline">
              payroll software in South Africa
            </Link>
            , and for the wider BCEA and POPIA compliance checklist, see{" "}
            <Link href="/resources/hr-software-south-africa" className="font-medium text-brand-600 hover:underline">
              HR software in South Africa
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* Section 5: Industries */}
      <FeatureGrid
        eyebrow="Industries"
        title="Industries Manitham HRMS supports"
        subtitle="The same core platform adapts to how different South African industries actually schedule, track and pay their people."
        items={[
          { icon: Store, title: "Retail & Distribution", description: "Shift-based attendance and multi-branch reporting for retail and distribution teams." },
          { icon: Factory, title: "Manufacturing", description: "Shift schedules, biometric punch and multi-plant attendance for shop-floor teams." },
          { icon: HeartPulse, title: "Healthcare", description: "Shift rostering, attendance and leave for clinical and support staff." },
          { icon: UtensilsCrossed, title: "Hospitality", description: "Flexible shift attendance and leave for teams that work outside a standard 9-to-5." },
          { icon: Laptop, title: "IT & Professional Services", description: "Self-service leave and attendance for remote and hybrid knowledge workers." },
          { icon: Truck, title: "Field & Service Operations", description: "GPS-based mobile check-in for field, site and service teams away from a fixed office." },
        ]}
        columns={3}
      />

      {/* Section 6: Why Choose Manitham HRMS */}
      <section className="py-14 sm:py-16">
        <Container>
          <SectionHeading eyebrow="Why Manitham HRMS" title="Why choose Manitham HRMS?" align="center" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { icon: Building2, title: "Centralized employee information", description: "One employee record for profiles, documents, departments and reporting lines, instead of files scattered across the business." },
              { icon: Clock, title: "Streamlined attendance and leave", description: "Attendance and leave approvals run in one workflow, so balances stay accurate without manual reconciliation." },
              { icon: Receipt, title: "Reduced manual HR administration", description: "Routine payroll, attendance and leave admin is handled by the system rather than re-keyed by hand each cycle." },
              { icon: BarChart3, title: "Better workforce visibility", description: "Reports by department, location or individual are available directly, without building them manually." },
              { icon: CalendarClock, title: "Consistent HR processes", description: "The same leave, attendance and approval rules apply across every team and location you configure." },
              { icon: PieChart, title: "Organized reporting and lifecycle management", description: "Employee data and history stay organized from onboarding through to exit, in one place." },
            ].map((benefit) => (
              <div key={benefit.title} className="glass rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/[0.06]">
                <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-900/5">
                  <benefit.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="font-display mt-4 font-bold text-ink-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-pretty text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 7: Existing South Africa Blog Integration */}
      <BlogResourcesSection
        title="HR and Payroll Resources for South African Businesses"
        subtitle="In-depth guides on HR software, payroll and compliance, written for South African businesses evaluating HRMS software."
        articles={southAfricaArticles}
        className="glass-subtle border-x-0"
      />

      {/* Section 8: FAQ */}
      <FAQSection faqs={faqs} />

      {/* Section 9: Final CTA */}
      <CTASection
        title="See Manitham HRMS for your South African team"
        subtitle="Book a demo and bring your own leave policy, attendance setup and payroll scenario — we'll show you exactly what's supported today."
      />
    </>
  );
}
