import type { Metadata } from "next";
import { Wallet, CalendarDays, Smartphone, Users, ShieldCheck, Clock } from "lucide-react";
import { IndustryPageTemplate, type IndustryPageContent } from "@/components/templates/IndustryPageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.industrySmallBusiness);

const content: IndustryPageContent = {
  path: keywordMap.industrySmallBusiness.path,
  breadcrumbLabel: "Small Business",
  h1: keywordMap.industrySmallBusiness.h1,
  heroSubtitle:
    "Small teams don't need enterprise-scale HR software — they need attendance, leave and payroll that stop living in spreadsheets and WhatsApp messages, without the setup overhead of a big system.",
  mockupKind: "overview",
  challengesTitle: "Where HR breaks down in small teams",
  challenges: [
    { title: "Attendance tracked informally", description: "A register, a WhatsApp message, or an honor system — fine at 5 people, unreliable past 20." },
    { title: "Leave approvals over chat", description: "Approvals happen in DMs with no record, so balances are never quite accurate." },
    { title: "Payroll recalculated by hand", description: "PF, ESI and TDS get recalculated manually every month, with room for error." },
    { title: "No single employee record", description: "Employee details live across offer letters, a spreadsheet and someone's memory." },
  ],
  featuresTitle: "What small businesses actually use",
  featuresSubtitle: "Start with the essentials, add more as you grow.",
  features: [
    { icon: Users, title: "Employee Management", description: "One record per employee instead of a shared spreadsheet.", href: "/employee-management" },
    { icon: Clock, title: "Attendance", description: "Simple web or mobile check-in without needing biometric hardware.", href: "/attendance-management" },
    { icon: CalendarDays, title: "Leave Management", description: "Leave requests and approvals with a real balance, visible to everyone.", href: "/leave-management" },
    { icon: Wallet, title: "Payroll", description: "PF, ESI and TDS calculated automatically when you're ready to add it.", href: "/payroll-software" },
    { icon: Smartphone, title: "Self-Service", description: "Employees check their own leave balance and payslips.", href: "/employee-self-service" },
    { icon: ShieldCheck, title: "HR Compliance", description: "Statutory calculations handled without hiring a dedicated payroll person.", href: "/hr-compliance" },
  ],
  workflowTitle: "A typical small business setup",
  workflowSteps: [
    { title: "Start with core HR", description: "Get employee records, attendance and leave set up first — usually the quickest win." },
    { title: "Add payroll when ready", description: "Turn on payroll once you want PF, ESI, professional tax and TDS handled automatically." },
    { title: "Open self-service to the team", description: "Let employees check their own attendance, leave and payslips as your headcount grows." },
  ],
  faqs: [
    { question: "Is Manitham HRMS too much for a 10-person team?", answer: "No. You can start with just employee management, attendance and leave, and add payroll or other modules only when you need them." },
    { question: "Do we need biometric devices to use attendance tracking?", answer: "No, web and mobile check-in work without any hardware. Biometric devices are an option, not a requirement." },
    { question: "Can we add payroll later, not from day one?", answer: "Yes, modules can be added as your needs grow — many small businesses start with core HR and add payroll once headcount justifies it." },
    { question: "Is it complicated to set up?", answer: "Setup scope depends on how many modules you're using. Book a demo and we'll walk through a realistic timeline for a team your size." },
  ],
  relatedLinks: [
    { title: "HRMS Software", description: "See the full platform small businesses grow into.", href: "/hrms-software" },
    { title: "Startups", description: "How HR needs shift as a small team scales fast.", href: "/industries/startups" },
    { title: "Payroll Software", description: "What payroll looks like once you're ready to add it.", href: "/payroll-software" },
  ],
  ctaTitle: "See what a small-business setup looks like",
  ctaSubtitle: "Book a demo and we'll show you a setup sized for your team, not an enterprise system.",
};

export default function SmallBusinessPage() {
  return <IndustryPageTemplate content={content} />;
}
