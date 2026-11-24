import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FileSpreadsheet,
  Wallet,
  Fingerprint,
  CalendarCheck,
  Network,
  MessageSquare,
  BarChart3,
  ClipboardList,
  Users,
  UserPlus,
  Clock,
  Smartphone,
  TrendingUp,
  Workflow,
  FolderOpen,
  Building2,
  Store,
  Briefcase,
  Factory,
  Rocket,
  LineChart,
  Layers,
  ShieldAlert,
  Cloud,
  Repeat,
  Eye,
  Boxes,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogResourcesSection } from "@/components/sections/BlogResourcesSection";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, absoluteUrl } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";
import { softwareApplicationSchema, type FaqItem } from "@/lib/seo/schema";
import { getArticleBySlug } from "@/lib/data/articles";
import { siteConfig } from "@/lib/site-config";

const page = keywordMap.hrSoftwareSriLanka;

export const metadata: Metadata = buildMetadata(page, { locale: "en_LK" });

const IMG = "/images/hr-software-sri-lanka";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const jumpLinks = [
  { href: "#hr-challenges", label: "HR challenges" },
  { href: "#what-is-hr-software", label: "What is HR software?" },
  { href: "#features", label: "Features" },
  { href: "#payroll", label: "Payroll" },
  { href: "#attendance", label: "Attendance" },
  { href: "#leave", label: "Leave" },
  { href: "#business-types", label: "Business types" },
  { href: "#faq", label: "FAQ" },
];

const challenges: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: FileSpreadsheet, title: "Manual employee records", description: "Profiles, contracts and ID copies spread across files, folders and inboxes, so nobody is sure which version is current." },
  { icon: ClipboardList, title: "Spreadsheet-based HR", description: "Spreadsheets work for a handful of staff, then break down as headcount, branches and approvals grow." },
  { icon: Wallet, title: "Payroll processing difficulties", description: "Salary figures built by hand from attendance sheets and leave records take time to prepare and to double-check." },
  { icon: Fingerprint, title: "Attendance tracking", description: "Paper registers and punch logs need manual review before anyone can see who was late, absent or working overtime." },
  { icon: CalendarCheck, title: "Leave approval management", description: "Requests by phone, message or email leave balances out of date and approvals hard to trace." },
  { icon: Network, title: "Managing multiple branches", description: "Each branch keeps its own records, so there is no single view of the whole workforce." },
  { icon: MessageSquare, title: "Employee communication", description: "Routine questions about leave balances, payslips and policies keep landing on the HR team." },
  { icon: BarChart3, title: "Reporting and admin workload", description: "Headcount, attendance and leave reports are assembled by hand, which takes time away from people work." },
];

const features: { icon: LucideIcon; title: string; description: string; benefit: string; href?: string; linkLabel?: string }[] = [
  {
    icon: Users,
    title: "Employee management & database",
    description: "One record per employee holding profile details, employment history, departments, designations and reporting lines, plus a searchable employee directory.",
    benefit: "Everyone works from the same up-to-date employee information.",
    href: "/employee-management",
    linkLabel: "Employee management software",
  },
  {
    icon: UserPlus,
    title: "Onboarding & employee lifecycle",
    description: "Track an employee from onboarding through transfers and promotions to exit, on the same record.",
    benefit: "New-hire details are entered once and reused across HR, attendance, leave and payroll.",
  },
  {
    icon: Fingerprint,
    title: "Attendance & shift management",
    description: "Biometric, GPS mobile and web punch-in, with shifts assigned to teams and late marks and overtime calculated against shift timings.",
    benefit: "Clearer attendance visibility with less manual punch-log review.",
    href: "/attendance-management",
    linkLabel: "Attendance management",
  },
  {
    icon: CalendarCheck,
    title: "Leave management",
    description: "Configurable leave types and policies, online requests, manager approval workflows, leave balances and holiday calendars.",
    benefit: "Requests, approvals and balances live in one place instead of in message threads.",
    href: "/leave-management",
    linkLabel: "Leave management system",
  },
  {
    icon: Wallet,
    title: "Payroll management",
    description: "Salary structures, payroll runs and digital payslips, drawing on attendance and leave data already in the system.",
    benefit: "Fewer manual hand-offs between attendance, leave and salary preparation.",
    href: "/payroll-software",
    linkLabel: "Payroll software overview",
  },
  {
    icon: Smartphone,
    title: "Employee self-service",
    description: "Employees apply for leave, check balances, download payslips, update contact details and submit attendance corrections from a mobile browser or desktop.",
    benefit: "Routine employee requests stop queuing up with HR.",
    href: "/employee-self-service",
    linkLabel: "Employee self-service portal",
  },
  {
    icon: TrendingUp,
    title: "Performance management",
    description: "Goals and KPIs, structured appraisal cycles and manager feedback, with review history kept on the employee record.",
    benefit: "Reviews follow one consistent process.",
    href: "/performance-management",
    linkLabel: "Performance management software",
  },
  {
    icon: FolderOpen,
    title: "Employee document management",
    description: "Store offer letters, ID proofs, contracts and certificates against each employee.",
    benefit: "Documents are easy to find when HR or a manager needs them.",
  },
  {
    icon: LineChart,
    title: "Reports & analytics",
    description: "Attendance, leave and payroll reports by team, location or individual.",
    benefit: "HR data is available without building reports by hand.",
  },
  {
    icon: Building2,
    title: "Multi-branch & multi-department support",
    description: "Organise employees across departments, teams and locations in a single account, with attendance reporting by team or location.",
    benefit: "One view of the workforce across every branch.",
  },
  {
    icon: Workflow,
    title: "HR automation",
    description: "Approval workflows route requests to the right manager, and reminders surface pending approvals and upcoming leave.",
    benefit: "Routine follow-ups are handled by the system.",
  },
];

const payrollPoints = [
  "Configure salary structures for your team in one place",
  "Run payroll for the whole team in a single cycle",
  "Draw on attendance and approved leave already recorded in the system",
  "Issue digital payslips every cycle, available to employees through self-service",
  "Review payroll reports and cost breakdowns for finance",
];

const attendancePoints = [
  "Biometric devices for office or factory locations",
  "GPS-based mobile check-in for field and site teams",
  "Web and mobile punch-in for remote and hybrid staff",
  "Shift assignment and rotation with attendance rules matched to each shift",
  "Late marks and overtime calculated against shift timings",
  "Daily, weekly and monthly attendance reports by team, location or individual",
  "Attendance regularisation requests routed to a manager for approval",
];

const leavePoints = [
  "Configurable leave types, accrual rules and carry-forward policies",
  "Online leave requests submitted by employees",
  "Approval workflows that route each request to the right manager",
  "Leave balances visible to both employees and HR",
  "Company-wide and location-specific holiday calendars",
  "Reminders for pending approvals and upcoming leave",
  "Leave reports by team, leave type or time period",
];

const benefits: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Repeat, title: "Reduce repetitive HR work", description: "Approvals, reminders and routine requests run through defined workflows instead of manual follow-up." },
  { icon: Users, title: "Organise employee information", description: "Profiles, documents and reporting lines sit on one record per employee." },
  { icon: Eye, title: "Improve attendance visibility", description: "See who is in, late or on leave without reading through registers or punch logs." },
  { icon: CalendarCheck, title: "Simplify leave management", description: "Policies, requests, approvals and balances are handled in one system." },
  { icon: Wallet, title: "Streamline payroll workflows", description: "Attendance and leave data feed into payroll preparation, reducing re-keying." },
  { icon: BarChart3, title: "Improve HR reporting", description: "Attendance, leave and payroll reports are available when you need them." },
  { icon: Layers, title: "Centralise HR operations", description: "One platform replaces separate spreadsheets, registers and message threads." },
  { icon: Rocket, title: "Support business growth", description: "Add employees, teams and branches without rebuilding your HR process each time." },
];

const businessTypes: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Briefcase, title: "Small businesses", description: "Replace spreadsheets and paper registers for attendance, leave and salary preparation without the overhead of a heavy enterprise tool." },
  { icon: Building2, title: "SMEs", description: "Give a small HR team one place for employee records, approvals and reports as headcount grows." },
  { icon: Rocket, title: "Growing companies", description: "Keep HR processes consistent as you add people, managers and departments." },
  { icon: Network, title: "Multi-branch businesses", description: "Organise employees by location and review attendance and leave by branch or team." },
  { icon: Store, title: "Retail businesses", description: "Assign shifts to store teams and track attendance and overtime against those shifts." },
  { icon: Users, title: "Service businesses", description: "Use GPS mobile check-in for staff working at client sites or away from a fixed office." },
  { icon: Factory, title: "Manufacturing businesses", description: "Combine biometric attendance, shift schedules and overtime tracking for shop-floor teams." },
];

const whyPoints: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Boxes, title: "Centralised HR management", description: "Employee records, attendance, leave, payroll and performance in one connected cloud platform." },
  { icon: Users, title: "Employee management", description: "A single employee record from onboarding to exit, with documents and org structure." },
  { icon: Clock, title: "Attendance and leave management", description: "Biometric, GPS and web attendance with shift-aware late marks and overtime, plus policy-based leave and approvals." },
  { icon: Wallet, title: "Payroll workflow management", description: "Salary processing and payslips that draw on attendance and approved leave." },
  { icon: BarChart3, title: "HR reporting", description: "Attendance, leave and payroll reports by team, location or individual." },
  { icon: Workflow, title: "Employee management workflows", description: "Approval routing, reminders and self-service requests that reduce manual follow-up." },
];

const faqs: FaqItem[] = [
  {
    question: "What is the best HR software for businesses in Sri Lanka?",
    answer:
      "The best HR software is the one that fits your size, branches and payroll needs. Compare how well it handles employee records, attendance, leave and payroll in one system, how easy it is for employees to use, and whether the vendor will demonstrate your own payroll scenario. Manitham HRMS is a cloud HRMS that brings these modules together; book a demo to test it against your requirements.",
  },
  {
    question: "What is HRMS software?",
    answer:
      "HRMS stands for Human Resource Management System. It is software that manages employee records, attendance, leave, payroll and related HR processes in one connected system instead of separate spreadsheets and tools.",
  },
  {
    question: "How does HR software help businesses in Sri Lanka?",
    answer:
      "HR software replaces manual records, registers and spreadsheets with one digital system. For Sri Lankan businesses this means less repetitive admin, clearer attendance and leave visibility, a single employee database across branches, and payroll preparation that draws on attendance and leave data.",
  },
  {
    question: "What is the difference between HR software and HRMS?",
    answer:
      "The terms overlap. HR software is the broad term for any tool that supports HR work, from a single-purpose payroll or leave tool to a full suite. An HRMS is an integrated system that covers several HR functions, such as employee records, attendance, leave and payroll, on one shared employee record.",
  },
  {
    question: "Can HR software manage employee attendance?",
    answer:
      "Yes. Attendance management software records when employees start and finish work, then calculates late marks and overtime against shifts. Manitham HRMS supports biometric devices, GPS mobile check-in and web punch-in, with attendance reports by team, location or individual.",
  },
  {
    question: "Can HR software manage employee leave?",
    answer:
      "Yes. Leave management software handles leave policies, online requests, manager approvals, leave balances and holiday calendars. In Manitham HRMS, employees apply online and requests route to the right manager, so HR can see balances and pending approvals in one place.",
  },
  {
    question: "What is payroll software?",
    answer:
      "Payroll software organises salary information and payroll calculations, runs the payroll cycle and produces payslips. HR and payroll software combines this with attendance and leave data so salary preparation uses the same records as the rest of HR. Statutory rules vary by country, so confirm what a product supports before relying on it.",
  },
  {
    question: "How can small businesses use HR software?",
    answer:
      "Small businesses can use HR software to replace spreadsheets and paper registers: keep employee records in one place, track attendance, run leave requests and approvals online, and prepare payroll from the same data. Cloud-based tools need no servers to maintain.",
  },
  {
    question: "What features should I look for in HR software?",
    answer:
      "Look for an employee database, attendance and shift management, leave management with approval workflows, payroll and payslips, employee self-service, reporting, and support for multiple branches. Also check how easy the system is to use and whether payroll settings match your own requirements.",
  },
  {
    question: "Is cloud-based HR software suitable for small businesses?",
    answer:
      "Yes. Cloud-based HR software runs in a web browser, so small businesses do not need their own servers or IT upkeep, and managers and employees can access it from different locations. Check data access controls and vendor support before choosing.",
  },
  {
    question: "How can HR software help manage multiple branches?",
    answer:
      "HR software keeps employees from every branch in one database, organised by department and location. HR can then review attendance, leave and reports by branch or team, and apply consistent approval workflows across locations.",
  },
  {
    question: "How do I choose HR software for my business?",
    answer:
      "List the HR tasks you handle manually today, such as attendance, leave and payroll. Shortlist products that cover them in one system, ask for a demo using your own scenarios, including payroll, and check ease of use, support and how the system grows with your headcount and branches.",
  },
];

const resourceArticles = [
  getArticleBySlug("payroll-system-sri-lanka"),
  getArticleBySlug("what-is-hrms-software"),
  getArticleBySlug("cloud-based-hr-management-system"),
  getArticleBySlug("best-hrms-software-for-small-business"),
  getArticleBySlug("employee-leave-management-software"),
  getArticleBySlug("manage-employee-attendance-multiple-branches"),
].filter((article): article is NonNullable<typeof article> => Boolean(article));

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* ------------------------------------------------------------------ */

const pageUrl = absoluteUrl(page.path);

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.title,
    description: page.description,
    inLanguage: "en-LK",
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    about: { "@id": `${pageUrl}#software` },
    primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(`${IMG}/hr-software-sri-lanka-dashboard.svg`) },
    publisher: { "@type": "Organization", name: siteConfig.legalName, url: siteConfig.url },
  },
  {
    ...softwareApplicationSchema({
      path: page.path,
      description:
        "Manitham HRMS is cloud-based HR software for employee management, attendance, leave and payroll workflows in one platform.",
      featureList: [
        "Employee management and employee database",
        "Employee onboarding and lifecycle tracking",
        "Attendance management with biometric, GPS and web punch-in",
        "Shift management with late mark and overtime calculation",
        "Leave management with approval workflows",
        "Payroll management and digital payslips",
        "Employee self-service portal",
        "Performance management",
        "Employee document management",
        "Reports and analytics",
        "Multi-department and multi-location support",
      ],
    }),
    "@id": `${pageUrl}#software`,
  },
];

/* ------------------------------------------------------------------ */
/* Small presentational helpers                                        */
/* ------------------------------------------------------------------ */

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-900/5">
      <Icon className="size-5" aria-hidden="true" />
    </div>
  );
}

function Visual({ src, alt, caption, priority = false }: { src: string; alt: string; caption: string; priority?: boolean }) {
  return (
    <figure>
      <Image
        src={`${IMG}/${src}`}
        alt={alt}
        width={960}
        height={640}
        priority={priority}
        unoptimized
        sizes="(min-width: 1024px) 560px, 100vw"
        className="h-auto w-full rounded-3xl shadow-2xl shadow-ink-900/10"
      />
      <figcaption className="mt-2 text-center text-xs text-slate-500">{caption}</figcaption>
    </figure>
  );
}

const VISUAL_CAPTION = "Illustration of the module with sample data, not a customer screenshot.";

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function HrSoftwareSriLankaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "HR Software Sri Lanka", path: page.path }]} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white py-14 sm:py-20">
        <div className="bg-dot-grid-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>HR Software Sri Lanka</Eyebrow>
            <h1 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {page.h1}
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-lg text-slate-600">
              Manitham HRMS is cloud-based HR software for Sri Lankan businesses that want to simplify employee
              management, payroll management, attendance management and leave management. Replace spreadsheets,
              paper registers and message threads with one connected HRMS for your team.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {["Employee management", "Payroll management", "Attendance management", "Leave management"].map((item) => (
                <li key={item} className="glass-subtle rounded-full px-3 py-1.5 text-xs font-medium text-slate-700">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book-demo" size="lg">
                Book a Demo
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Get Started
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Free, no-obligation demo. Bring your own attendance, leave and payroll scenario.
            </p>
          </div>

          <Visual
            src="hr-software-sri-lanka-dashboard.svg"
            alt="HR software dashboard for Sri Lankan businesses showing employees, attendance, leave and payroll in one cloud HRMS"
            caption={VISUAL_CAPTION}
            priority
          />
        </Container>
      </section>

      {/* Jump links (in-page navigation, horizontally scrollable on mobile) */}
      <nav aria-label="On this page" className="glass-subtle border-x-0">
        <Container>
          <ul className="flex gap-2 overflow-x-auto py-3 text-sm [scrollbar-width:none]">
            {jumpLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                <a href={link.href} className="rounded-full px-3 py-1.5 font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-700">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* 2. HR challenges */}
      <section id="hr-challenges" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The problem"
            title="HR challenges faced by growing businesses in Sri Lanka"
            subtitle="Small and mid-sized businesses often start HR with spreadsheets and paper. That works until headcount, branches and approvals grow, and these problems start to appear."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {challenges.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6">
                <IconBadge icon={item.icon} />
                <h3 className="font-display mt-4 text-base font-bold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-pretty text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. What is HR software */}
      <section id="what-is-hr-software" className="glass-subtle scroll-mt-24 border-x-0 py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-pretty text-2xl font-bold text-ink-900 sm:text-3xl">
              What is HR software?
            </h2>
            <div className="mt-4 space-y-4 text-pretty text-slate-600">
              <p>
                <strong className="text-ink-900">HR software</strong> is a digital system that helps a business
                manage its employees and HR processes: employee records, attendance, leave, payroll and reporting.
                In Sri Lanka, as elsewhere, businesses use it to move away from spreadsheets and paper files to
                one shared source of HR information.
              </p>
              <p>
                An <strong className="text-ink-900">HRMS</strong> (Human Resource Management System) is HR software
                that connects these functions on one employee record. HRMS software is also called{" "}
                <strong className="text-ink-900">human resource management software</strong> or an{" "}
                <strong className="text-ink-900">employee management system</strong>. For a deeper definition, read{" "}
                <Link href="/resources/what-is-hrms-software" className="font-medium text-brand-600 hover:underline">
                  what HRMS software is
                </Link>{" "}
                or{" "}
                <Link href="/resources/hris-vs-hrms-vs-hcm" className="font-medium text-brand-600 hover:underline">
                  how HRIS, HRMS and HCM differ
                </Link>
                .
              </p>
              <p>
                Because Manitham HRMS is cloud-based, teams open it in a web browser rather than installing
                software on every computer. That makes it a practical{" "}
                <Link href="/resources/cloud-based-hr-management-system" className="font-medium text-brand-600 hover:underline">
                  cloud based HR software
                </Link>{" "}
                choice for businesses with more than one location.
              </p>
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase">How the HR modules connect</p>
            <ul className="mt-4 space-y-4">
              {[
                ["Employee management", "holds the employee record every other module relies on."],
                ["Attendance management", "records working time against each employee's shift."],
                ["Leave management", "records approved absence, which is reflected against attendance."],
                ["Payroll management", "uses attendance and leave data when preparing salaries and payslips."],
                ["Reports", "summarise all of the above by team, location or individual."],
              ].map(([name, text]) => (
                <li key={name} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                  <p className="text-sm text-pretty text-slate-600">
                    <strong className="text-ink-900">{name}</strong> {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 4. Features */}
      <section id="features" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="HR features for Sri Lankan businesses"
            subtitle="Every module below is part of Manitham HRMS today. Each one is built to work on the same employee record."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Visual
              src="employee-management-software-sri-lanka.svg"
              alt="Employee management software in Sri Lanka: employee profile, stored documents and organisation structure in one database"
              caption={VISUAL_CAPTION}
            />
            <div>
              <h3 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
                One employee database for every branch
              </h3>
              <p className="mt-3 text-pretty text-slate-600">
                Staff management starts with accurate records. Manitham HRMS keeps profiles, documents,
                departments and reporting lines on one record per employee, so attendance, leave and payroll all
                use the same information. Learn more about our{" "}
                <Link href="/employee-management" className="font-medium text-brand-600 hover:underline">
                  employee management software
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="glass flex flex-col rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/[0.06]">
                <IconBadge icon={feature.icon} />
                <h3 className="font-display mt-4 text-base font-bold text-ink-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-pretty text-slate-600">{feature.description}</p>
                <p className="mt-3 flex-1 text-sm text-pretty text-slate-700">
                  <span className="font-semibold text-accent-600">Benefit: </span>
                  {feature.benefit}
                </p>
                {feature.href ? (
                  <Link href={feature.href} className="mt-4 text-sm font-semibold text-brand-600 hover:underline">
                    {feature.linkLabel} →
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Payroll */}
      <section id="payroll" className="glass-subtle scroll-mt-24 border-x-0 py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Eyebrow>Payroll</Eyebrow>
            <h2 className="font-display mt-2 text-pretty text-2xl font-bold text-ink-900 sm:text-3xl">
              Payroll software in Sri Lanka: organise salaries and payroll workflows
            </h2>
            <div className="mt-4 space-y-4 text-pretty text-slate-600">
              <p>
                <strong className="text-ink-900">Payroll software Sri Lanka</strong> buyers usually want the same
                thing: a reliable way to hold salary information, prepare payroll calculations and issue payslips
                without rebuilding spreadsheets every month. Manitham HRMS is HR and payroll software, so payroll
                management sits next to attendance and leave rather than in a separate tool.
              </p>
              <p>
                Whether you call it payroll management software or salary management software, the aim is the
                same: fewer manual hand-offs between the records that decide what each employee is paid.
              </p>
            </div>
            <div className="mt-6">
              <CheckList items={payrollPoints} />
            </div>
          </div>
          <div>
            <Visual
              src="payroll-software-sri-lanka.svg"
              alt="Payroll software in Sri Lanka: payroll workflow from salary structure and attendance data to payroll review and payslips"
              caption={VISUAL_CAPTION}
            />
          </div>
        </Container>
        <Container className="mt-10">
          <div className="rounded-2xl border border-gold-500/40 bg-white/70 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <ShieldAlert className="mt-0.5 size-6 shrink-0 text-gold-600" aria-hidden="true" />
              <div className="space-y-3 text-pretty text-sm text-slate-700">
                <h3 className="font-display text-base font-bold text-ink-900">
                  Sri Lankan statutory payroll: confirm it in a demo
                </h3>
                <p>
                  Payroll in Sri Lanka commonly involves statutory items such as EPF, ETF and income tax
                  withholding (APIT). We do not claim that Manitham HRMS automatically calculates or files these,
                  or that it is certified against Sri Lankan payroll legislation. Requirements and rates change, so
                  bring your own payroll scenario to a demo and we will show you exactly what is supported today.
                </p>
                <p>
                  For background on those obligations and a buyer&apos;s checklist, read{" "}
                  <Link href="/resources/payroll-system-sri-lanka" className="font-medium text-brand-600 hover:underline">
                    how to choose a payroll system in Sri Lanka
                  </Link>
                  . The general{" "}
                  <Link href="/payroll-software" className="font-medium text-brand-600 hover:underline">
                    payroll software page
                  </Link>{" "}
                  describes our platform, but its statutory examples relate to India and do not apply to Sri Lanka.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Attendance */}
      <section id="attendance" className="scroll-mt-24 py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <Visual
              src="attendance-management-software-sri-lanka.svg"
              alt="Attendance management software in Sri Lanka: biometric, GPS and web punch-in feeding a daily attendance log"
              caption={VISUAL_CAPTION}
            />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Attendance</Eyebrow>
            <h2 className="font-display mt-2 text-pretty text-2xl font-bold text-ink-900 sm:text-3xl">
              Employee attendance management for every location
            </h2>
            <div className="mt-4 space-y-4 text-pretty text-slate-600">
              <p>
                <strong className="text-ink-900">Attendance management software</strong> records when employees
                start and finish work and turns those punches into attendance records HR can rely on. With
                employee attendance software in your HRMS, late marks, absences and overtime are worked out against
                shift schedules, so HR is not reviewing punch logs by hand. See the full{" "}
                <Link href="/attendance-management" className="font-medium text-brand-600 hover:underline">
                  attendance management system
                </Link>{" "}
                or compare options in our guide to the{" "}
                <Link href="/resources/best-attendance-management-software" className="font-medium text-brand-600 hover:underline">
                  best attendance management software
                </Link>
                .
              </p>
            </div>
            <div className="mt-6">
              <CheckList items={attendancePoints} />
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Leave */}
      <section id="leave" className="glass-subtle scroll-mt-24 border-x-0 py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Eyebrow>Leave</Eyebrow>
            <h2 className="font-display mt-2 text-pretty text-2xl font-bold text-ink-900 sm:text-3xl">
              Employee leave management system with clear approvals
            </h2>
            <div className="mt-4 space-y-4 text-pretty text-slate-600">
              <p>
                <strong className="text-ink-900">Leave management software</strong> moves leave applications out
                of phone calls, messages and email and into one workflow. Employees apply online, the request
                routes to the right manager, and HR sees balances and pending approvals without chasing anyone.
                Our{" "}
                <Link href="/leave-management" className="font-medium text-brand-600 hover:underline">
                  employee leave management system
                </Link>{" "}
                keeps a clean record of every request, which also helps when leave questions come up later. For
                how it works, read{" "}
                <Link href="/resources/employee-leave-management-software" className="font-medium text-brand-600 hover:underline">
                  employee leave management software explained
                </Link>
                .
              </p>
            </div>
            <div className="mt-6">
              <CheckList items={leavePoints} />
            </div>
          </div>
          <Visual
            src="leave-management-software-sri-lanka.svg"
            alt="Employee leave management software in Sri Lanka: leave approval queue, leave balances and holiday calendar"
            caption={VISUAL_CAPTION}
          />
        </Container>
      </section>

      {/* 8. Benefits */}
      <section id="benefits" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            title="Benefits of HR software for Sri Lankan businesses"
            subtitle="Practical day-to-day gains from moving HR into one system. Results depend on how your business is set up today."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6">
                <IconBadge icon={item.icon} />
                <h3 className="font-display mt-4 text-base font-bold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-pretty text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Business types */}
      <section id="business-types" className="glass-subtle scroll-mt-24 border-x-0 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Who it is for"
            title="HR software for different business types"
            subtitle="The same core platform supports different employee-management needs."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6">
                <IconBadge icon={item.icon} />
                <h3 className="font-display mt-4 text-base font-bold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-pretty text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-600">
            Looking at it from a small-team angle? See{" "}
            <Link href="/industries/small-business" className="font-medium text-brand-600 hover:underline">
              HRMS software for small business
            </Link>{" "}
            and{" "}
            <Link href="/industries/manufacturing" className="font-medium text-brand-600 hover:underline">
              HR software for manufacturing
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* 10. Why Manitham HRMS */}
      <section id="why-manitham-hrms" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Manitham HRMS"
            title="Why choose Manitham HRMS?"
            subtitle="Manitham HRMS is a cloud-based HRMS that connects employee management, attendance, leave, payroll and reporting in one platform."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/[0.06]">
                <IconBadge icon={item.icon} />
                <h3 className="font-display mt-4 text-base font-bold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-pretty text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="glass-strong mx-auto mt-10 flex max-w-4xl flex-col items-start gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <Cloud className="mt-0.5 size-6 shrink-0 text-brand-600" aria-hidden="true" />
              <div>
                <p className="font-display text-lg font-bold text-ink-900">See it against your own requirements</p>
                <p className="mt-1 text-sm text-pretty text-slate-600">
                  We would rather show you the product than make claims. Book a demo and bring your attendance,
                  leave and payroll scenarios, including any Sri Lankan payroll questions. Prefer to compare
                  first? Read{" "}
                  <Link href="/hrms-software" className="font-medium text-brand-600 hover:underline">
                    the full HRMS software overview
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
              <ButtonLink href="/book-demo">Book a Demo</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* 11. FAQ (visible content + matching FAQPage JSON-LD from the same data) */}
      <div id="faq" className="scroll-mt-24">
        <FAQSection
          eyebrow="FAQ"
          title="HR software in Sri Lanka: frequently asked questions"
          faqs={faqs}
          className="glass-subtle border-x-0"
        />
      </div>

      {/* Resources (internal links to existing guides) */}
      <BlogResourcesSection
        title="HR and payroll guides for Sri Lankan businesses"
        subtitle="Background reading on HR software, payroll and employee management."
        articles={resourceArticles}
      />

      {/* 12. Final CTA */}
      <CTASection
        title="Simplify HR Management for Your Business"
        subtitle="Explore Manitham HRMS for your Sri Lankan business. Book a demo and see employee management, attendance, leave and payroll workflows in one platform."
        primaryLabel="Book a Demo"
        primaryHref="/book-demo"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />

      <JsonLd data={structuredData} />
    </>
  );
}
