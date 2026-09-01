import type { Metadata } from "next";
import { Users, Fingerprint, Wallet, LineChart, Workflow, Smartphone } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.hrmsSoftware);

const content: FeaturePageContent = {
  path: keywordMap.hrmsSoftware.path,
  breadcrumbLabel: "HRMS Software",
  heroEyebrow: "HRMS Software",
  h1: keywordMap.hrmsSoftware.h1,
  heroSubtitle:
    "Manitham HRMS replaces spreadsheets and disconnected tools with one system for employee records, attendance, leave, payroll, performance and recruitment — connected end to end.",
  highlights: ["Cloud-based", "One employee record", "Mobile access", "Built for Indian payroll"],
  mockupKind: "overview",
  overviewTitle: "What HRMS software actually does",
  overviewParagraphs: [
    "HRMS stands for Human Resource Management System. Instead of tracking employee data in spreadsheets, attendance in a separate register, and payroll in yet another tool, an HRMS brings all of it into one connected system.",
    "That matters because HR data doesn't live in isolation — a new hire's join date affects their leave balance, their attendance affects payroll, and their department determines who approves their requests. Manitham HRMS is built around one employee record that every module reads from, so you enter information once and it's accurate everywhere.",
  ],
  overviewBullets: [
    "Employee database with documents, departments and org structure",
    "Attendance tracking with biometric, GPS and mobile check-in",
    "Leave management with configurable policies and approvals",
    "Payroll with Indian statutory compliance built in",
    "Performance management and recruitment in the same platform",
  ],
  capabilitiesTitle: "One platform, every core HR function",
  capabilitiesSubtitle: "Each module works on its own, or together as a complete system.",
  capabilities: [
    { icon: Users, title: "Employee Management", description: "Centralized records, documents and organization structure.", href: "/employee-management" },
    { icon: Fingerprint, title: "Attendance", description: "Biometric, GPS and mobile attendance with shift tracking.", href: "/attendance-management" },
    { icon: Wallet, title: "Payroll", description: "Automated salary processing with PF, ESI, PT and TDS.", href: "/payroll-software" },
    { icon: LineChart, title: "Performance", description: "Goals, appraisals and manager feedback in one cycle.", href: "/performance-management" },
    { icon: Smartphone, title: "Self-Service", description: "Employees handle routine requests without emailing HR.", href: "/employee-self-service" },
    { icon: Workflow, title: "Automation", description: "Approval workflows and reminders that run on their own.", href: "/hr-compliance" },
  ],
  benefitsTitle: "Why teams move to Manitham HRMS",
  benefits: [
    { title: "Less duplicate data entry", description: "Employee details entered once flow through attendance, leave, payroll and performance automatically." },
    { title: "Fewer manual approvals", description: "Leave, attendance regularization and reimbursement requests route to the right manager automatically." },
    { title: "Audit-ready records", description: "Attendance, leave and payroll history stay organized and exportable when you need them." },
    { title: "Works from anywhere", description: "Cloud-based access means HR, managers and employees aren't tied to one office system." },
  ],
  faqs: [
    { question: "What is the difference between HRMS and HR software?", answer: "\"HR software\" is a broad term that can mean anything from a single tool (like payroll-only software) to a full suite. \"HRMS\" specifically refers to an integrated system covering the core employee lifecycle — records, attendance, leave and payroll — in one platform." },
    { question: "Does Manitham HRMS include payroll?", answer: "Yes. Payroll is a core module, with PF, ESI, professional tax and TDS calculated automatically based on attendance and leave data already in the system." },
    { question: "Is Manitham HRMS suitable for small businesses?", answer: "Yes. You can start with the modules you need — attendance and leave, for example — and add payroll, performance or recruitment as your team grows." },
    { question: "Can I access Manitham HRMS on mobile?", answer: "Yes. Both the admin/HR side and the employee self-service portal work on mobile browsers, so attendance and leave can be managed on the go." },
    { question: "How long does it take to get started?", answer: "Timelines depend on your headcount and how many modules you're rolling out. Book a demo and our team will walk you through a realistic setup timeline for your organization." },
  ],
  relatedLinks: [
    { title: "HRMS Software in India", description: "How Manitham HRMS handles Indian payroll and compliance specifically.", href: "/hrms-software-india" },
    { title: "HRMS Software Worldwide", description: "How the platform handles payroll compliance in the US, UK, Singapore, Malaysia and Australia.", href: "/hrms-software-usa" },
    { title: "Payroll Software", description: "See exactly how salary processing and statutory deductions work.", href: "/payroll-software" },
    { title: "Employee Self Service", description: "What employees can do for themselves in the portal.", href: "/employee-self-service" },
    { title: "HRIS vs HRMS vs HCM", description: "What the terms mean, and why the feature list matters more than the label.", href: "/resources/hris-vs-hrms-vs-hcm" },
  ],
  ctaTitle: "See the full platform in action",
  ctaSubtitle: "Book a demo and we'll walk through the modules that matter most to your team.",
};

export default function HrmsSoftwarePage() {
  return <FeaturePageTemplate content={content} />;
}
