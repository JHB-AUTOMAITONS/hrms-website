import type { Metadata } from "next";
import { Smartphone, CalendarDays, Receipt, UserCog, Bell, FileCheck2 } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.employeeSelfService);

const content: FeaturePageContent = {
  path: keywordMap.employeeSelfService.path,
  breadcrumbLabel: "Employee Self Service",
  heroEyebrow: "Employee Self Service (ESS)",
  h1: keywordMap.employeeSelfService.h1,
  heroSubtitle:
    "Attendance, leave requests, payslips and profile updates shouldn't need an email to HR. The Manitham HRMS self-service portal lets employees handle it themselves, from any device.",
  highlights: ["Mobile & web access", "Leave & attendance", "Payslip downloads", "Profile updates"],
  mockupKind: "overview",
  overviewTitle: "Let employees serve themselves, so HR doesn't have to",
  overviewParagraphs: [
    "A big share of routine HR requests — 'what's my leave balance', 'can I get last month's payslip', 'I forgot to check in yesterday' — don't need a person on the other end. The employee self-service portal gives employees direct access to their own attendance, leave, payslips and profile details.",
    "Because it's connected to the same employee record as every other module, what employees see is always current — no separate export or manual update from HR.",
  ],
  overviewBullets: [
    "Mark attendance and view attendance history",
    "Apply for leave and check real-time balances",
    "Download payslips and tax documents",
    "Update personal details and view employee documents",
    "Submit attendance regularization and other requests",
  ],
  capabilitiesTitle: "What employees can do in self-service",
  capabilities: [
    { icon: Smartphone, title: "Mobile & Web Access", description: "Available from a mobile browser or desktop — no separate app installation required." },
    { icon: CalendarDays, title: "Leave Requests", description: "Apply for leave and see real-time balances without asking HR." },
    { icon: Receipt, title: "Payslips & Documents", description: "Download current and past payslips, and view tax documents like Form 16." },
    { icon: UserCog, title: "Profile Updates", description: "Employees can update their own contact details and personal information." },
    { icon: FileCheck2, title: "Regularization Requests", description: "Submit attendance corrections that route directly to a manager for approval." },
    { icon: Bell, title: "Notifications", description: "Employees get updates on approvals, holidays and announcements in one place." },
  ],
  benefitsTitle: "Why it matters",
  benefits: [
    { title: "Fewer routine requests land on HR", description: "Leave balances, payslips and attendance history are available on demand, without an email." },
    { title: "Always up to date", description: "Self-service pulls from the same employee record as the rest of the system — no stale exports." },
    { title: "Works on any device", description: "Employees don't need a company laptop to check their leave balance or download a payslip." },
    { title: "Faster approvals", description: "Requests go straight to the right manager, instead of sitting in an inbox." },
  ],
  faqs: [
    { question: "Can employees access self-service from their phone?", answer: "Yes, the self-service portal works from any mobile browser, so employees don't need a desktop to use it." },
    { question: "Can employees download their own payslips?", answer: "Yes, current and past payslips are available for employees to download directly." },
    { question: "Can employees apply for leave through self-service?", answer: "Yes, leave requests are submitted through self-service and routed to the employee's manager for approval." },
    { question: "Can employees update their own details?", answer: "Yes, employees can update contact information and personal details, which HR can review if needed." },
    { question: "Is self-service included with Manitham HRMS?", answer: "Yes, employee self-service is part of the core platform, connected to attendance, leave and payroll." },
  ],
  relatedLinks: [
    { title: "Leave Management", description: "How leave requests submitted in self-service get approved.", href: "/leave-management" },
    { title: "Attendance Management", description: "How employees mark attendance from self-service.", href: "/attendance-management" },
    { title: "Payroll Software", description: "Where payslips and tax documents come from.", href: "/payroll-software" },
  ],
  ctaTitle: "Give your employees a self-service portal",
  ctaSubtitle: "Book a demo and see the employee-side experience firsthand.",
};

export default function EmployeeSelfServicePage() {
  return <FeaturePageTemplate content={content} />;
}
