import type { Metadata } from "next";
import { CalendarDays, ClipboardCheck, PieChart, Bell, CalendarClock, Settings2 } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.leaveManagement);

const content: FeaturePageContent = {
  path: keywordMap.leaveManagement.path,
  breadcrumbLabel: "Leave Management",
  heroEyebrow: "Leave Management",
  h1: keywordMap.leaveManagement.h1,
  heroSubtitle:
    "Set up leave policies that match how your company actually works, then let employees apply and managers approve online — with balances and holiday calendars visible to everyone.",
  highlights: ["Configurable policies", "Online approvals", "Real-time balances", "Holiday calendars"],
  mockupKind: "leave",
  overviewTitle: "Leave management without the spreadsheet chasing",
  overviewParagraphs: [
    "Tracking leave in a spreadsheet works until it doesn't — balances go stale, approvals get buried in email, and nobody's quite sure how many casual leaves are left. Manitham HRMS keeps leave policies, requests, approvals and balances in one place that both employees and managers can see in real time.",
    "Leave types and policies are configurable, so whether your company uses casual, sick and earned leave, or a different structure entirely, the system can be set up to match.",
  ],
  overviewBullets: [
    "Configurable leave types and accrual policies",
    "Online leave requests with manager approval workflows",
    "Real-time leave balances for employees and HR",
    "Company and regional holiday calendars",
    "Leave reports by employee, team or leave type",
  ],
  capabilitiesTitle: "What leave management includes",
  capabilities: [
    { icon: Settings2, title: "Leave Policies", description: "Configure leave types, accrual rules and carry-forward policies to match your company." },
    { icon: ClipboardCheck, title: "Approval Workflows", description: "Requests route automatically to the right manager, with visibility into pending approvals." },
    { icon: PieChart, title: "Leave Balances", description: "Employees and HR see up-to-date balances without asking each other." },
    { icon: CalendarClock, title: "Holiday Calendars", description: "Set company-wide and location-specific holidays that show up automatically." },
    { icon: Bell, title: "Reminders", description: "Pending approvals and upcoming leave are surfaced so nothing sits unnoticed." },
    { icon: CalendarDays, title: "Leave Reports", description: "See leave trends by team, leave type or time period." },
  ],
  benefitsTitle: "Why it matters",
  benefits: [
    { title: "No more 'how many leaves do I have left?'", description: "Balances update in real time as requests are approved, visible to the employee directly." },
    { title: "Approvals don't get lost in email", description: "Managers see pending requests in one place and approve or reject with a click." },
    { title: "Policies match your actual rules", description: "Leave types and accrual logic are configured around how your company really works, not a fixed template." },
    { title: "Connects to attendance and payroll", description: "Approved leave reflects in attendance records and payroll automatically." },
  ],
  faqs: [
    { question: "Can employees apply for leave online?", answer: "Yes. Employees submit leave requests through self-service, and managers approve or reject them from the same system." },
    { question: "Can we set up our own leave policies?", answer: "Yes. Leave types, accrual rules and carry-forward policies are configurable to match your company's actual leave structure." },
    { question: "Do employees see their leave balance in real time?", answer: "Yes, leave balances update as soon as a request is approved, and employees can check them anytime." },
    { question: "Does leave management include holiday calendars?", answer: "Yes, you can set company-wide holidays as well as location-specific ones where teams observe different holidays." },
    { question: "Does approved leave affect payroll automatically?", answer: "Yes, approved leave is reflected in attendance and payroll without manual re-entry." },
  ],
  relatedLinks: [
    { title: "Attendance Management", description: "How leave and attendance work together day to day.", href: "/attendance-management" },
    { title: "Employee Self Service", description: "Where employees apply for leave and check balances.", href: "/employee-self-service" },
    { title: "Payroll Software", description: "How approved leave flows into each payroll run.", href: "/payroll-software" },
    { title: "Best Leave Management Software in India", description: "What to check before choosing a leave management tool.", href: "/resources/best-leave-management-software-india" },
  ],
  ctaTitle: "Set up leave policies that match your company",
  ctaSubtitle: "Book a demo and we'll show you how policy configuration works for your leave structure.",
};

export default function LeaveManagementPage() {
  return <FeaturePageTemplate content={content} />;
}
