import type { Metadata } from "next";
import { DollarSign, Landmark, PiggyBank, ShieldCheck, FileCheck, Users } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.hrmsSoftwareAustralia);

const content: FeaturePageContent = {
  path: keywordMap.hrmsSoftwareAustralia.path,
  breadcrumbLabel: "HRMS Software in Australia",
  heroEyebrow: "HRMS Software in Australia",
  h1: keywordMap.hrmsSoftwareAustralia.h1,
  heroSubtitle:
    "Australian HR teams run payroll around Single Touch Payroll reporting to the ATO, Superannuation Guarantee contributions and PAYG withholding. Manitham HRMS is built around those requirements.",
  highlights: ["Single Touch Payroll", "Superannuation Guarantee", "PAYG withholding", "Fair Work-ready"],
  mockupKind: "compliance",
  overviewTitle: "HR software built around Australia payroll requirements",
  overviewParagraphs: [
    "Single Touch Payroll (STP) requires payroll, tax and superannuation information to be reported to the ATO on or before each pay day. Manitham HRMS is built to keep payroll data structured for STP reporting rather than treating it as a separate step.",
    "Superannuation Guarantee contributions and PAYG withholding also have to be calculated correctly every pay run. Because payroll, attendance and leave sit in the same system, what gets reported matches what actually happened that pay period.",
  ],
  overviewBullets: [
    "PAYG withholding calculated per employee, per pay run",
    "Superannuation Guarantee contribution calculation",
    "Payroll data structured for Single Touch Payroll reporting",
    "Award and Fair Work-aware pay rate handling",
  ],
  capabilitiesTitle: "What's different about running HR in Australia",
  capabilities: [
    { icon: DollarSign, title: "Australian Payroll", description: "Salary structures and PAYG withholding calculated automatically each pay run." },
    { icon: Landmark, title: "Single Touch Payroll", description: "Payroll data organized to support STP reporting to the ATO on or before pay day." },
    { icon: PiggyBank, title: "Superannuation Guarantee", description: "Super contributions calculated based on each employee's ordinary time earnings." },
    { icon: ShieldCheck, title: "Fair Work Aware", description: "Pay rate and overtime handling built with award and enterprise agreement obligations in mind." },
    { icon: FileCheck, title: "PAYG Withholding", description: "Income tax withheld and reported from the same payroll data used all year." },
    { icon: Users, title: "Regional Support", description: "Support from a team that understands Australian payroll cycles and ATO deadlines." },
  ],
  benefitsTitle: "Built for how Australian businesses actually run HR",
  benefits: [
    { title: "No manual PAYG math", description: "Withholding is calculated the same way every cycle, reducing manual errors." },
    { title: "STP reporting stays current", description: "Payroll data is structured to support Single Touch Payroll reporting each pay run." },
    { title: "Super contributions handled", description: "Superannuation Guarantee is calculated from ordinary time earnings automatically." },
    { title: "One record for HR and payroll", description: "Attendance, leave and payroll draw from the same employee record, so what you report matches what happened." },
  ],
  faqs: [
    { question: "Does Manitham HRMS support Single Touch Payroll reporting?", answer: "Yes. Payroll data is structured in a way that supports STP reporting to the ATO." },
    { question: "Does it calculate Superannuation Guarantee contributions?", answer: "Yes. Super contributions are calculated automatically based on each employee's ordinary time earnings." },
    { question: "Does it handle PAYG withholding?", answer: "Yes. PAYG withholding is calculated as part of each payroll run based on employee tax declarations." },
    { question: "Is it aware of award or enterprise agreement pay rates?", answer: "Pay rate and overtime handling can be configured to reflect the award or enterprise agreement obligations relevant to your business." },
    { question: "Is it suitable for a small Australian business?", answer: "Yes. It's used by small businesses running their first structured payroll cycle as well as larger, multi-state organizations." },
  ],
  relatedLinks: [
    { title: "HRMS Software in the US", description: "How the platform handles FICA and US payroll compliance.", href: "/hrms-software-usa" },
    { title: "Payroll Software", description: "A closer look at how salary processing and payslips work.", href: "/payroll-software" },
    { title: "HR Compliance", description: "How statutory compliance tracking works across payroll.", href: "/hr-compliance" },
  ],
  ctaTitle: "Talk to a team that understands Australian payroll",
  ctaSubtitle: "Book a demo and bring your specific compliance questions — STP, superannuation or PAYG.",
};

export default function HrmsSoftwareAustraliaPage() {
  return <FeaturePageTemplate content={content} />;
}
