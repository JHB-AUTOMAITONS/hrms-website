import type { Metadata } from "next";
import { Coins, Landmark, FileCheck, ShieldCheck, Building2, Users } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.hrmsSoftwareSingapore);

const content: FeaturePageContent = {
  path: keywordMap.hrmsSoftwareSingapore.path,
  breadcrumbLabel: "HRMS Software in Singapore",
  heroEyebrow: "HRMS Software in Singapore",
  h1: keywordMap.hrmsSoftwareSingapore.h1,
  heroSubtitle:
    "Singapore HR teams run payroll around CPF contributions, IRAS IR8A reporting and Employment Act itemised payslip requirements. Manitham HRMS is built around those realities.",
  highlights: ["CPF contributions", "IRAS IR8A reporting", "Itemised payslips", "Employment Act ready"],
  mockupKind: "compliance",
  overviewTitle: "HR software built around Singapore payroll requirements",
  overviewParagraphs: [
    "CPF (Central Provident Fund) contributions have to be calculated correctly for every eligible employee, every pay run, and reported to IRAS at year-end through IR8A submissions. Manitham HRMS calculates CPF as a core part of payroll, not a manual add-on.",
    "The Employment Act also requires itemised payslips covering specific line items. Because payroll, attendance and leave sit in the same system, payslips reflect what actually happened that period without a separate reconciliation step.",
  ],
  overviewBullets: [
    "Automatic CPF contribution calculation for eligible employees",
    "IRAS IR8A annual tax reporting support",
    "Itemised payslips in line with the Employment Act",
    "Support for multi-entity Singapore payroll",
  ],
  capabilitiesTitle: "What's different about running HR in Singapore",
  capabilities: [
    { icon: Coins, title: "CPF Contributions", description: "Employer and employee CPF contributions calculated automatically each pay run." },
    { icon: Landmark, title: "IRAS Reporting", description: "Payroll data organized to support IR8A annual tax reporting to IRAS." },
    { icon: FileCheck, title: "Itemised Payslips", description: "Payslips generated with the line items required under the Employment Act." },
    { icon: ShieldCheck, title: "Employment Act Aware", description: "Leave and payroll calculations built with Employment Act requirements in mind." },
    { icon: Building2, title: "Multi-Entity Support", description: "Manage payroll across multiple Singapore entities from one account." },
    { icon: Users, title: "Regional Support", description: "Support from a team that understands Singapore payroll cycles and filing deadlines." },
  ],
  benefitsTitle: "Built for how Singapore businesses actually run HR",
  benefits: [
    { title: "No manual CPF math", description: "CPF contributions are calculated the same way every cycle, reducing manual errors." },
    { title: "IR8A season stays organized", description: "Payroll data is structured throughout the year, not scrambled together at filing time." },
    { title: "Itemised payslips by default", description: "Employment Act payslip requirements are built into how payslips are generated, not a manual checklist." },
    { title: "One record for HR and payroll", description: "Attendance, leave and payroll draw from the same employee record, so nothing needs reconciling." },
  ],
  faqs: [
    { question: "Does Manitham HRMS calculate CPF contributions?", answer: "Yes. CPF contributions are calculated automatically for eligible employees as part of each payroll run." },
    { question: "Does it support IRAS IR8A reporting?", answer: "Yes. Payroll data is organized in a way that supports IR8A annual tax reporting." },
    { question: "Are payslips itemised in line with the Employment Act?", answer: "Yes, payslips include the itemised line items required under Singapore's Employment Act." },
    { question: "Can it handle multiple Singapore entities?", answer: "Yes. Payroll can be managed across multiple entities from a single account." },
    { question: "Is it suitable for a small Singapore business?", answer: "Yes. It's used by small businesses running their first structured payroll as well as larger, multi-entity organizations." },
  ],
  relatedLinks: [
    { title: "HRMS Software in Malaysia", description: "How the platform handles EPF, SOCSO and Malaysia payroll compliance.", href: "/hrms-software-malaysia" },
    { title: "Payroll Software", description: "A closer look at how salary processing and payslips work.", href: "/payroll-software" },
    { title: "HR Compliance", description: "How statutory compliance tracking works across payroll.", href: "/hr-compliance" },
  ],
  ctaTitle: "Talk to a team that understands Singapore payroll",
  ctaSubtitle: "Book a demo and bring your specific compliance questions — CPF, IR8A or itemised payslips.",
};

export default function HrmsSoftwareSingaporePage() {
  return <FeaturePageTemplate content={content} />;
}
