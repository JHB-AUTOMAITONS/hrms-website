import type { Metadata } from "next";
import { Coins, ShieldCheck, Calculator, Landmark, FileCheck, Users } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.hrmsSoftwareMalaysia);

const content: FeaturePageContent = {
  path: keywordMap.hrmsSoftwareMalaysia.path,
  breadcrumbLabel: "HRMS Software in Malaysia",
  heroEyebrow: "HRMS Software in Malaysia",
  h1: keywordMap.hrmsSoftwareMalaysia.h1,
  heroSubtitle:
    "Malaysian HR teams run payroll around EPF, SOCSO and EIS contributions, plus monthly PCB/MTD tax deductions. Manitham HRMS is built around those statutory requirements.",
  highlights: ["EPF & SOCSO", "EIS contributions", "PCB/MTD tax", "HRDF-ready"],
  mockupKind: "compliance",
  overviewTitle: "HR software built around Malaysia payroll requirements",
  overviewParagraphs: [
    "Payroll in Malaysia means calculating EPF (Employees Provident Fund), SOCSO (Social Security Organisation) and EIS (Employment Insurance System) contributions correctly for every eligible employee, plus PCB/MTD (Potongan Cukai Bulanan / Monthly Tax Deduction) income tax withholding. Manitham HRMS calculates these as a core part of payroll.",
    "Because payroll, attendance and leave sit in the same system, statutory contributions stay consistent with what actually happened that period — no separate spreadsheet to reconcile before a pay run closes.",
  ],
  overviewBullets: [
    "Automatic EPF, SOCSO and EIS contribution calculation",
    "PCB/MTD monthly tax deduction calculated per employee",
    "Support for HRDF levy tracking where applicable",
    "Payroll reports organized for statutory filing",
  ],
  capabilitiesTitle: "What's different about running HR in Malaysia",
  capabilities: [
    { icon: Coins, title: "EPF Contributions", description: "Employer and employee EPF contributions calculated automatically each pay run." },
    { icon: ShieldCheck, title: "SOCSO & EIS", description: "Social security and employment insurance contributions applied based on employee category." },
    { icon: Calculator, title: "PCB/MTD Tax", description: "Monthly tax deduction calculated from each employee's declared tax details." },
    { icon: Landmark, title: "Statutory Filing Support", description: "Payroll data organized to support EPF, SOCSO and tax filing." },
    { icon: FileCheck, title: "Payslips & Reports", description: "Digital payslips every cycle with statutory deductions itemised." },
    { icon: Users, title: "Regional Support", description: "Support from a team that understands Malaysia payroll cycles and filing deadlines." },
  ],
  benefitsTitle: "Built for how Malaysian businesses actually run HR",
  benefits: [
    { title: "No manual EPF/SOCSO math", description: "Contributions are calculated the same way every cycle, reducing manual errors." },
    { title: "PCB/MTD stays consistent", description: "Monthly tax deduction is calculated from each employee's declared details automatically." },
    { title: "One record for HR and payroll", description: "Attendance, leave and payroll draw from the same employee record, so what you pay matches what happened." },
    { title: "Ready for statutory filings", description: "Payroll data is organized in a way that supports EPF, SOCSO and tax filing processes." },
  ],
  faqs: [
    { question: "Does Manitham HRMS calculate EPF and SOCSO?", answer: "Yes. EPF, SOCSO and EIS contributions are calculated automatically for eligible employees as part of each payroll run." },
    { question: "Does it handle PCB/MTD tax deductions?", answer: "Yes. Monthly tax deduction is calculated based on each employee's declared tax details." },
    { question: "Is HRDF levy tracking supported?", answer: "HRDF levy tracking is supported where applicable based on your organization's category and headcount." },
    { question: "Is it suitable for a small Malaysian business?", answer: "Yes. It's used by small businesses running their first structured payroll cycle as well as larger, multi-location organizations." },
    { question: "Does attendance affect payroll automatically?", answer: "Yes. Approved leave and recorded attendance for the pay period are reflected in payroll without manual data entry." },
  ],
  relatedLinks: [
    { title: "HRMS Software in Australia", description: "How the platform handles STP and superannuation compliance.", href: "/hrms-software-australia" },
    { title: "Payroll Software", description: "A closer look at how salary processing and payslips work.", href: "/payroll-software" },
    { title: "HR Compliance", description: "How statutory compliance tracking works across payroll.", href: "/hr-compliance" },
  ],
  ctaTitle: "Talk to a team that understands Malaysia payroll",
  ctaSubtitle: "Book a demo and bring your specific compliance questions — EPF, SOCSO, EIS or PCB.",
};

export default function HrmsSoftwareMalaysiaPage() {
  return <FeaturePageTemplate content={content} />;
}
