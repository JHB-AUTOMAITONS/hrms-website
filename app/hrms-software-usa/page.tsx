import type { Metadata } from "next";
import { DollarSign, Landmark, Building2, ShieldCheck, FileCheck, Users } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.hrmsSoftwareUsa);

const content: FeaturePageContent = {
  path: keywordMap.hrmsSoftwareUsa.path,
  breadcrumbLabel: "HRMS Software in the US",
  heroEyebrow: "HRMS Software in the US",
  h1: keywordMap.hrmsSoftwareUsa.h1,
  heroSubtitle:
    "US HR teams deal with federal and state payroll tax that varies by jurisdiction, FICA withholding, and year-end W-2 filing. Manitham HRMS is built around those realities instead of treating them as an add-on.",
  highlights: ["FICA & federal/state tax", "Multi-state payroll", "W-2 & year-end filing", "ACA-ready"],
  mockupKind: "compliance",
  overviewTitle: "HR software built around US payroll requirements",
  overviewParagraphs: [
    "Running payroll in the US means calculating FICA (Social Security and Medicare) withholding, federal income tax, and state income tax that differs — sometimes significantly — depending on where each employee is based. Manitham HRMS handles this as a core part of payroll, not a bolt-on.",
    "That extends to year-end compliance too. W-2 generation, new hire reporting, and Applicable Large Employer (ALE) considerations under the ACA all draw from the same employee and payroll records already in the system, so nothing needs to be reconciled separately.",
  ],
  overviewBullets: [
    "FICA (Social Security & Medicare) and federal income tax withholding",
    "State-by-state payroll tax calculation for multi-state teams",
    "W-2 generation and year-end filing support",
    "FLSA-aware overtime tracking for non-exempt employees",
  ],
  capabilitiesTitle: "What's different about running HR in the US",
  capabilities: [
    { icon: DollarSign, title: "US Payroll", description: "Salary structures and withholding calculations built for US federal and state payroll rules." },
    { icon: Landmark, title: "Federal & State Tax", description: "FICA and income tax withholding calculated per employee, per pay run." },
    { icon: Building2, title: "Multi-State Support", description: "Manage employees across states with different tax rules from one account." },
    { icon: ShieldCheck, title: "ACA & FLSA Aware", description: "Overtime and large-employer considerations factored into how payroll and attendance are tracked." },
    { icon: FileCheck, title: "W-2 & Year-End Filing", description: "Year-end tax documents generated from the same payroll data used all year." },
    { icon: Users, title: "US-Hours Support", description: "Support available during US business hours for payroll and compliance questions." },
  ],
  benefitsTitle: "Built for how US businesses actually run HR",
  benefits: [
    { title: "No manual FICA math", description: "Social Security and Medicare withholding are calculated automatically as part of every pay run." },
    { title: "State-aware tax withholding", description: "State income tax varies widely — payroll accounts for where each employee actually works." },
    { title: "One record for HR and payroll", description: "Attendance, leave and payroll draw from the same employee record, so W-2s reflect what actually happened." },
    { title: "Ready for year-end", description: "Payroll data is organized in a way that supports W-2 and year-end filing instead of a scramble in January." },
  ],
  faqs: [
    { question: "Does Manitham HRMS calculate FICA and federal tax withholding?", answer: "Yes. FICA (Social Security and Medicare) and federal income tax withholding are calculated automatically as part of each payroll run." },
    { question: "Can it handle employees across different states?", answer: "Yes. Employee records track work location, and state income tax withholding is applied based on the applicable state rules for that employee." },
    { question: "Does it generate W-2s?", answer: "Yes, W-2s are generated from the same payroll data used throughout the year, ready for year-end filing." },
    { question: "Is it suitable for a small US business, not just large employers?", answer: "Yes. It's used by small businesses running their first structured payroll as well as larger, multi-state organizations." },
    { question: "Does attendance affect payroll automatically?", answer: "Yes. Approved leave and recorded attendance for the pay period flow into payroll without manual data entry." },
  ],
  relatedLinks: [
    { title: "HRMS Software in the UK", description: "How the platform handles PAYE and UK payroll compliance.", href: "/hrms-software-uk" },
    { title: "Payroll Software", description: "A closer look at how salary processing and payslips work.", href: "/payroll-software" },
    { title: "HR Compliance", description: "How statutory compliance tracking works across payroll.", href: "/hr-compliance" },
  ],
  ctaTitle: "Talk to a team that understands US payroll",
  ctaSubtitle: "Book a demo and bring your specific compliance questions — FICA, multi-state tax or W-2 filing.",
};

export default function HrmsSoftwareUsaPage() {
  return <FeaturePageTemplate content={content} />;
}
