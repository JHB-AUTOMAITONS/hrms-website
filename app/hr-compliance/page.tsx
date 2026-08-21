import type { Metadata } from "next";
import { ShieldCheck, Landmark, FileCheck2, Scale, FolderCheck, AlertCircle } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.hrCompliance);

const content: FeaturePageContent = {
  path: keywordMap.hrCompliance.path,
  breadcrumbLabel: "HR Compliance",
  heroEyebrow: "HR Compliance",
  h1: keywordMap.hrCompliance.h1,
  heroSubtitle:
    "PF, ESI, professional tax and TDS calculations happen automatically as part of payroll, with organized records ready when you need them for review or audit.",
  highlights: ["PF & ESI", "Professional tax", "TDS", "Audit-ready records"],
  mockupKind: "compliance",
  overviewTitle: "HR compliance that doesn't live in a spreadsheet",
  overviewParagraphs: [
    "Statutory HR compliance in India involves several moving pieces — PF and ESI contributions, professional tax that varies by state, and TDS on salary — each with their own calculation rules. Manitham HRMS calculates these automatically as part of every payroll run, instead of leaving them to a separate manual process.",
    "Because compliance data is generated from the same payroll and attendance records used elsewhere in the system, it stays consistent and organized — useful when you need to review past cycles or respond to an audit.",
  ],
  overviewBullets: [
    "Automatic PF and ESI contribution calculation",
    "State-specific professional tax application",
    "TDS on salary based on employee tax declarations",
    "Organized, exportable payroll and compliance records",
  ],
  capabilitiesTitle: "What compliance tracking includes",
  capabilities: [
    { icon: Landmark, title: "PF & ESI", description: "Provident Fund and ESI contributions calculated automatically for eligible employees." },
    { icon: Scale, title: "Professional Tax", description: "Applied based on each employee's work state, since rates and slabs vary." },
    { icon: FileCheck2, title: "TDS on Salary", description: "Calculated from employee tax declarations as part of each payroll run." },
    { icon: ShieldCheck, title: "Compliance Overview", description: "See the status of statutory calculations across your latest payroll run." },
    { icon: FolderCheck, title: "Audit-Ready Records", description: "Payroll and compliance history stay organized and exportable." },
    { icon: AlertCircle, title: "Deadline Visibility", description: "Keep track of recurring statutory deadlines relevant to your payroll cycle." },
  ],
  benefitsTitle: "Why it matters",
  benefits: [
    { title: "Consistent calculations every cycle", description: "PF, ESI, PT and TDS are calculated the same way each time, reducing manual errors." },
    { title: "Records ready when you need them", description: "Past payroll runs and statutory calculations are organized and easy to pull up." },
    { title: "Less reliance on manual tracking", description: "Compliance data is generated as part of payroll, not maintained separately." },
    { title: "Built around Indian requirements", description: "PF, ESI, professional tax and TDS are core to how payroll is calculated, not an afterthought." },
  ],
  faqs: [
    { question: "Does Manitham HRMS handle PF and ESI compliance?", answer: "Yes, PF and ESI contributions are calculated automatically as part of payroll for eligible employees." },
    { question: "Is professional tax calculated per state?", answer: "Yes, professional tax is applied based on the employee's work state, since rates differ across states." },
    { question: "Can I access past payroll and compliance records?", answer: "Yes, payroll history is organized and exportable, which is useful for internal review or statutory audits." },
    { question: "Does the platform file statutory returns on my behalf?", answer: "Manitham HRMS calculates and organizes the statutory data needed for PF, ESI and TDS — confirm your specific filing workflow with our team during a demo, as filing processes can vary by organization." },
  ],
  relatedLinks: [
    { title: "Payroll Software", description: "See how statutory deductions are calculated during payroll.", href: "/payroll-software" },
    { title: "HRMS Software in India", description: "How the platform is built around Indian HR requirements.", href: "/hrms-software-india" },
    { title: "Employee Self Service", description: "Where employees access their own tax documents.", href: "/employee-self-service" },
    { title: "New Wage Code 2026", description: "How the labour codes change wage definitions, PF and gratuity.", href: "/resources/new-wage-code-2026-india" },
  ],
  ctaTitle: "Keep statutory compliance organized, not manual",
  ctaSubtitle: "Book a demo and bring your specific PF, ESI or TDS questions.",
};

export default function HrCompliancePage() {
  return <FeaturePageTemplate content={content} />;
}
