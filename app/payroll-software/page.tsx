import type { Metadata } from "next";
import { Calculator, FileText, Landmark, Receipt, BarChart3, IndianRupee } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.payrollSoftware);

const content: FeaturePageContent = {
  path: keywordMap.payrollSoftware.path,
  breadcrumbLabel: "Payroll Software",
  heroEyebrow: "Payroll Software",
  h1: keywordMap.payrollSoftware.h1,
  heroSubtitle:
    "Run payroll for your whole team with statutory deductions calculated automatically. Attendance and leave feed straight into each pay run, so there's no manual reconciliation.",
  highlights: ["PF, ESI, PT & TDS", "Payslips & Form 16", "LWF where applicable", "Payroll reports"],
  mockupKind: "payroll",
  overviewTitle: "Payroll that starts from attendance and leave, not a spreadsheet",
  overviewParagraphs: [
    "Most payroll errors come from data that's out of sync — an approved leave that wasn't reflected, or an attendance correction that didn't make it into the pay run. Manitham HRMS payroll pulls directly from the attendance and leave records already in the system, so what you pay matches what actually happened that month.",
    "On top of that, statutory deductions — PF, ESI, professional tax and TDS — are calculated automatically based on each employee's salary structure, so your team isn't recalculating them by hand every cycle.",
  ],
  overviewBullets: [
    "Salary structures with earnings, allowances and deductions",
    "Automatic PF, ESI, professional tax and TDS calculation",
    "Payslip generation for every pay run",
    "Form 16 for annual tax filing",
    "Payroll reports for finance and audit",
  ],
  capabilitiesTitle: "What's included in payroll processing",
  capabilities: [
    { icon: Calculator, title: "Salary Processing", description: "Configure salary structures and run payroll for your whole team in one cycle." },
    { icon: Landmark, title: "PF & ESI", description: "Provident Fund and ESI contributions calculated automatically against applicable rules." },
    { icon: IndianRupee, title: "Professional Tax", description: "State-specific professional tax applied based on employee work location." },
    { icon: Receipt, title: "TDS on Salary", description: "Tax deducted at source calculated from declared employee tax details." },
    { icon: FileText, title: "Payslips & Form 16", description: "Digital payslips every cycle and Form 16 for annual filing." },
    { icon: BarChart3, title: "Payroll Reports", description: "Cost breakdowns and statutory reports ready for finance and audit." },
  ],
  benefitsTitle: "Why payroll teams switch to Manitham HRMS",
  benefits: [
    { title: "Attendance and leave built in", description: "No exporting attendance data into a separate payroll tool — it's already there." },
    { title: "Consistent statutory math", description: "PF, ESI, PT and TDS are calculated the same way every cycle, reducing manual errors." },
    { title: "Payslips employees can access themselves", description: "Employees pull their own payslips from self-service instead of emailing HR." },
    { title: "A clear trail for audits", description: "Every payroll run is recorded, so past cycles are easy to review when needed." },
  ],
  faqs: [
    { question: "Does payroll include PF and ESI calculations?", answer: "Yes. PF and ESI contributions are calculated automatically for eligible employees as part of each payroll run." },
    { question: "Can it handle professional tax across different states?", answer: "Yes. Professional tax is applied based on each employee's work location, since rates vary by state." },
    { question: "Does it generate Form 16?", answer: "Yes, Form 16 is generated for employees for annual income tax filing." },
    { question: "Can employees see their own payslips?", answer: "Yes, payslips are available to employees directly through the self-service portal." },
    { question: "Does attendance affect payroll automatically?", answer: "Yes. Approved leave and recorded attendance for the pay period are reflected in payroll without manual data entry." },
    { question: "Is Labour Welfare Fund (LWF) supported?", answer: "LWF is applied where it's applicable based on your state and employee category, as part of statutory deductions." },
  ],
  relatedLinks: [
    { title: "HR Compliance", description: "How statutory compliance tracking works alongside payroll.", href: "/hr-compliance" },
    { title: "Attendance Management", description: "See how attendance data flows into every payroll run.", href: "/attendance-management" },
    { title: "Employee Self Service", description: "Where employees access their own payslips and tax documents.", href: "/employee-self-service" },
    { title: "HRA Exemption, Explained", description: "The exemption formula, a worked example, and what HR needs from employees.", href: "/resources/hra-exemption-guide" },
    { title: "EPF Scheme 2026", description: "What HR and payroll teams need to track as EPFO rules evolve.", href: "/resources/epf-scheme-2026-hr-guide" },
  ],
  ctaTitle: "Run your next payroll cycle without the spreadsheet",
  ctaSubtitle: "Book a demo and we'll walk through a payroll run using a setup similar to yours.",
};

export default function PayrollSoftwarePage() {
  return <FeaturePageTemplate content={content} />;
}
