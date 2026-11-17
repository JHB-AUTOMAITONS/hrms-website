import type { Metadata } from "next";
import { Fingerprint, CalendarClock, Building2, Wallet, ShieldCheck, Users } from "lucide-react";
import { IndustryPageTemplate, type IndustryPageContent } from "@/components/templates/IndustryPageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.industryManufacturing);

const content: IndustryPageContent = {
  path: keywordMap.industryManufacturing.path,
  breadcrumbLabel: "Manufacturing",
  h1: keywordMap.industryManufacturing.h1,
  heroSubtitle:
    "Shop-floor HR looks different from office HR — shift rotations, biometric punch-in, contract labour, and payroll that spans multiple plants. Manitham HRMS is HR software for manufacturing, built to handle both under one system.",
  mockupKind: "attendance",
  challengesTitle: "Where manufacturing HR gets complicated",
  challenges: [
    { title: "Shift-based attendance", description: "Rotating shifts across production lines make manual attendance tracking error-prone." },
    { title: "Mixed workforce types", description: "Permanent staff, contract labour and office employees often need different HR treatment in the same company." },
    { title: "Multi-plant payroll", description: "Different plants can mean different professional tax rates and local compliance requirements." },
    { title: "Shop-floor connectivity", description: "Office-oriented HR tools often assume a desktop and reliable internet — not always true on a factory floor." },
    { title: "Night shifts and overtime disputes", description: "When overtime is worked out by hand from punch logs, mismatches with shift timings lead to arguments at month end." },
    { title: "Statutory payroll pressure", description: "PF, ESI, professional tax and Labour Welfare Fund rules differ by employee category and state, and errors are costly to fix later." },
  ],
  featuresTitle: "What manufacturing teams need most",
  featuresSubtitle: "Built around shift work and multi-location operations.",
  features: [
    { icon: Fingerprint, title: "Biometric Attendance", description: "Fingerprint check-in at the shop floor entrance, tied to shift schedules.", href: "/attendance-management" },
    { icon: CalendarClock, title: "Shift Management", description: "Rotating shifts with automatic late-mark and overtime calculation.", href: "/attendance-management" },
    { icon: Building2, title: "Multi-Location Support", description: "Manage employees across multiple plants from one account.", href: "/hrms-software-india" },
    { icon: Wallet, title: "Payroll", description: "Statutory payroll that accounts for plant-level differences in professional tax.", href: "/payroll-software" },
    { icon: Users, title: "Employee Management", description: "Track permanent staff and contract labour with the records each needs.", href: "/employee-management" },
    { icon: ShieldCheck, title: "HR Compliance", description: "PF, ESI and TDS tracked consistently across every location.", href: "/hr-compliance" },
  ],
  detailSections: [
    {
      id: "attendance-shifts-overtime",
      title: "Shift attendance and overtime for factory floors",
      intro:
        "For a plant running two or three shifts, attendance is the data every other HR task depends on. Manitham HRMS keeps it in one record, from the gate punch to the overtime hours that reach payroll.",
      items: [
        {
          title: "Rotating and night shifts",
          description:
            "Assign and rotate shifts across teams, with attendance rules matched to each shift. A team moving from the morning to the night shift is checked against its new timings from the first punch.",
          href: "/attendance-management",
        },
        {
          title: "Biometric punch at the gate",
          description:
            "Connect biometric devices at factory locations so fingerprint check-ins record straight into attendance, without anyone re-typing a punch register.",
        },
        {
          title: "Overtime and late marks",
          description:
            "Check-in and check-out are compared against the shift to calculate late marks and overtime automatically.",
          href: "/resources/overtime-calculation-formula",
        },
        {
          title: "Missed punches and corrections",
          description:
            "A worker who forgets to punch raises a regularization request, and the reporting manager approves or rejects it in the system instead of on a paper slip.",
        },
        {
          title: "Leave and holidays on the same record",
          description:
            "Approved leave is reflected in attendance so it is not counted as an absence, and holiday calendars can be set per location for plants in different states.",
          href: "/leave-management",
        },
        {
          title: "Shift planning guidance",
          description:
            "Read how rotation patterns, handovers and overtime rules are usually set up for manufacturing teams.",
          href: "/resources/shift-management-software-by-industry",
        },
      ],
    },
    {
      id: "payroll-compliance",
      title: "Manufacturing payroll software with PF, ESI and PT built in",
      intro:
        "Payroll for a factory is mostly an attendance problem first and a tax problem second. Because Manitham HRMS payroll reads attendance and approved leave directly, hours are not re-entered before every pay run.",
      items: [
        {
          title: "Salary structures",
          description: "Configure earnings, allowances and deductions, then run payroll for permanent staff, contract workers and office employees in one cycle.",
          href: "/payroll-software",
        },
        {
          title: "PF and ESI",
          description: "Provident Fund and ESI contributions are calculated automatically for eligible employees as part of each pay run.",
          href: "/hr-compliance",
        },
        {
          title: "Professional tax by plant location",
          description: "Professional tax follows each employee's work location, so plants in different states are handled in the same payroll run. LWF is applied where it is applicable.",
        },
        {
          title: "Payslips, Form 16 and records",
          description: "Payslips every cycle, Form 16 for annual filing, and payroll history that stays organized and exportable for audits. Confirm your PF and ESI filing workflow with us during a demo.",
          href: "/resources/epf-scheme-2026-hr-guide",
        },
      ],
      cta: { label: "Book a payroll walkthrough", href: "/book-demo" },
    },
    {
      id: "workforce-records",
      title: "Employee records, self-service and performance for plant teams",
      intro:
        "Employee management software for manufacturing has to hold a very different set of people in one place: line workers, supervisors, contract staff and head-office teams.",
      items: [
        {
          title: "One record from onboarding to exit",
          description: "Store offer letters, ID proofs and contracts against each employee, organized by department, designation and reporting line, across every plant.",
          href: "/employee-management",
        },
        {
          title: "Self-service from any phone",
          description: "Employees check attendance, apply for leave, see balances, download payslips and raise regularization requests from a mobile browser, with no app install or desktop needed.",
          href: "/employee-self-service",
        },
        {
          title: "Goals and appraisals for supervisors and staff",
          description: "Set goals, run appraisal cycles on the schedule you choose and let managers record feedback, with past reviews staying on the employee record.",
          href: "/performance-management",
        },
        {
          title: "Role-based access and reports",
          description: "Access is controlled by role, and attendance and payroll reports can be viewed by team, location or individual for plant heads, HR and finance.",
        },
      ],
    },
  ],
  workflowTitle: "How a multi-plant rollout typically works",
  workflowSteps: [
    { title: "Set up attendance per plant", description: "Connect biometric devices at each location and configure shift schedules." },
    { title: "Bring employee records together", description: "Centralize permanent and contract workforce records across plants." },
    { title: "Run consolidated payroll", description: "Process payroll across locations with plant-specific compliance handled automatically." },
    { title: "Pilot, then roll out", description: "Start with one plant or department, check attendance and overtime against your existing records, then extend to the remaining locations." },
    { title: "Switch on self-service", description: "Give employees access to attendance, leave and payslips so routine requests stop reaching HR." },
    { title: "Review reports each cycle", description: "Use attendance and payroll reports by plant to spot problems before the next pay run." },
  ],
  faqs: [
    { question: "Can Manitham HRMS handle shift-based attendance?", answer: "Yes. Shift schedules can be configured per team or plant, with late marks and overtime calculated against each shift automatically." },
    { question: "Does it support biometric devices on the shop floor?", answer: "Yes, biometric devices at factory locations can be connected for attendance capture." },
    { question: "Can we manage multiple plants in one account?", answer: "Yes, employees across multiple locations can be managed together, with location-specific payroll rules like professional tax applied correctly." },
    { question: "Does it handle both permanent staff and contract labour?", answer: "Yes, employee records support different employment types so HR can track each appropriately." },
    { question: "Can it calculate overtime for factory shifts?", answer: "Yes. Overtime and late marks are calculated by comparing actual check-in and check-out times with the assigned shift, so there is no manual calculation from punch logs." },
    { question: "Does payroll cover PF, ESI and professional tax for factory employees?", answer: "Yes. PF and ESI are calculated automatically for eligible employees, professional tax is applied by work location, and Labour Welfare Fund is applied where it is applicable. Payslips and Form 16 are generated from the same payroll run." },
    { question: "What happens when a worker misses a punch?", answer: "The employee raises a regularization request and it goes to the reporting manager for approval, so corrections are recorded in the system with a clear trail." },
    { question: "Can factory workers use the self-service portal on a phone?", answer: "Yes. Employee self-service works from a mobile browser, so workers can check attendance, apply for leave and download payslips without a desktop." },
    { question: "Does it file PF and ESI returns for us?", answer: "Manitham HRMS calculates and organizes the statutory data used for PF, ESI and TDS. Filing processes differ between companies, so bring your workflow to a demo and we will confirm how it fits." },
    { question: "How is HRMS implemented in a manufacturing company?", answer: "Most rollouts follow the same order: set up attendance and shifts at one plant, import employee records, run payroll alongside your current process, then extend to other plants. The timeline depends on the number of plants and employees, so we scope it with you in a demo. Our HRMS implementation guide covers the steps in detail." },
  ],
  relatedLinks: [
    { title: "Attendance Management", description: "Full detail on biometric and shift-based tracking.", href: "/attendance-management" },
    { title: "HRMS Software in India", description: "How multi-state, multi-location compliance is handled.", href: "/hrms-software-india" },
    { title: "Payroll Software", description: "How payroll runs across multiple locations.", href: "/payroll-software" },
    { title: "Manage Attendance Across Multiple Branches", description: "Consistent attendance across plants and branches.", href: "/resources/manage-employee-attendance-multiple-branches" },
    { title: "Employee Self Service", description: "What shop-floor employees can do from their phones.", href: "/employee-self-service" },
    { title: "HRMS Implementation Guide", description: "The steps involved in rolling out an HRMS across locations.", href: "/resources/hrms-implementation-guide" },
  ],
  ctaTitle: "See a multi-plant setup in action",
  ctaSubtitle: "Book a demo and walk through attendance and payroll across your locations.",
};

export default function ManufacturingPage() {
  return <IndustryPageTemplate content={content} />;
}
