import type { Metadata } from "next";
import { PoundSterling, Landmark, PiggyBank, ShieldCheck, FileCheck, Users } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.hrmsSoftwareUk);

const content: FeaturePageContent = {
  path: keywordMap.hrmsSoftwareUk.path,
  breadcrumbLabel: "HRMS Software in the UK",
  heroEyebrow: "HRMS Software in the UK",
  h1: keywordMap.hrmsSoftwareUk.h1,
  heroSubtitle:
    "UK HR teams run payroll around PAYE, National Insurance and HMRC Real Time Information submissions, plus workplace pension auto-enrolment. Manitham HRMS is built around those requirements.",
  highlights: ["PAYE & National Insurance", "HMRC RTI submissions", "Pension auto-enrolment", "UK-based support"],
  mockupKind: "compliance",
  overviewTitle: "HR software built around UK payroll requirements",
  overviewParagraphs: [
    "PAYE (Pay As You Earn) income tax and National Insurance contributions have to be calculated correctly every pay run and reported to HMRC through Real Time Information (RTI) submissions. Manitham HRMS handles this as a core part of payroll, not an afterthought.",
    "Workplace pension auto-enrolment adds another layer — tracking eligibility, contribution rates and opt-outs. Because payroll, attendance and leave sit in the same system, pension and PAYE calculations stay consistent with what actually happened that period.",
  ],
  overviewBullets: [
    "PAYE income tax and National Insurance contribution calculation",
    "HMRC RTI (Real Time Information) submission support",
    "Workplace pension auto-enrolment tracking",
    "P60 and P45 generation for employees",
  ],
  capabilitiesTitle: "What's different about running HR in the UK",
  capabilities: [
    { icon: PoundSterling, title: "UK Payroll", description: "Salary structures and PAYE deductions calculated automatically each pay run." },
    { icon: Landmark, title: "PAYE & HMRC RTI", description: "Income tax and National Insurance calculated and reported in line with HMRC RTI requirements." },
    { icon: PiggyBank, title: "Pension Auto-Enrolment", description: "Eligibility, contribution rates and opt-outs tracked as part of payroll." },
    { icon: ShieldCheck, title: "Statutory Pay", description: "Statutory Sick Pay and Statutory Maternity Pay factored into payroll calculations." },
    { icon: FileCheck, title: "P60 & P45", description: "Year-end and leaver documents generated from the same payroll data used all year." },
    { icon: Users, title: "UK-Based Support", description: "Support from a team that understands UK payroll cycles and HMRC deadlines." },
  ],
  benefitsTitle: "Built for how UK businesses actually run HR",
  benefits: [
    { title: "No manual PAYE math", description: "Income tax and National Insurance are calculated the same way every cycle, reducing manual errors." },
    { title: "RTI submissions stay current", description: "Payroll data is organized to support HMRC RTI reporting each pay run." },
    { title: "Pension auto-enrolment handled", description: "Contribution rates and opt-outs are tracked alongside payroll instead of a separate spreadsheet." },
    { title: "Ready for year-end and leavers", description: "P60 and P45 documents pull from the same records used throughout the year." },
  ],
  faqs: [
    { question: "Does Manitham HRMS calculate PAYE and National Insurance?", answer: "Yes. PAYE income tax and National Insurance contributions are calculated automatically as part of each payroll run." },
    { question: "Does it support HMRC RTI submissions?", answer: "Yes. Payroll data is generated in a way that supports HMRC's Real Time Information reporting requirements." },
    { question: "Can it handle workplace pension auto-enrolment?", answer: "Yes. Employee eligibility, contribution rates and opt-outs are tracked as part of the payroll process." },
    { question: "Does it generate P60 and P45 documents?", answer: "Yes, P60s are generated at year-end and P45s are generated when an employee leaves." },
    { question: "Is it suitable for a small UK business?", answer: "Yes. It's used by small businesses running their first structured payroll cycle as well as larger, multi-site organizations." },
  ],
  relatedLinks: [
    { title: "HRMS Software in Singapore", description: "How the platform handles CPF and Singapore payroll compliance.", href: "/hrms-software-singapore" },
    { title: "Payroll Software", description: "A closer look at how salary processing and payslips work.", href: "/payroll-software" },
    { title: "HR Compliance", description: "How statutory compliance tracking works across payroll.", href: "/hr-compliance" },
  ],
  ctaTitle: "Talk to a team that understands UK payroll",
  ctaSubtitle: "Book a demo and bring your specific compliance questions — PAYE, RTI or pension auto-enrolment.",
};

export default function HrmsSoftwareUkPage() {
  return <FeaturePageTemplate content={content} />;
}
