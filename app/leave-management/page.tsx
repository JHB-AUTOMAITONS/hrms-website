import type { Metadata } from "next";
import Link from "next/link";
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
    "Manage employee leave requests, approvals and leave balances with Manitham HRMS, a leave management system for growing businesses in India. Set up leave policies that match your company, let employees apply online, and give managers a clear approval workflow — with holiday calendars and balances visible to everyone.",
  highlights: ["Configurable policies", "Online approvals", "Real-time balances", "Holiday calendars"],
  mockupKind: "leave",
  overviewTitle: "What is a leave management system?",
  overviewParagraphs: [
    "A leave management system is software that handles employee leave from policy to payroll: which leave types exist, how balances accrue, how requests are raised and approved, and how the result reaches attendance and payroll records.",
    "Spreadsheets work until balances go stale, approvals get buried in email, and nobody's quite sure how many casual leaves are left. Manitham HRMS keeps policies, requests, approvals and balances in one place that employees and managers can see in real time.",
    "Leave types and policies are configurable, so whether your company uses casual, sick and earned leave, or a different structure entirely, the system can be set up to match.",
  ],
  overviewBullets: [
    "Configurable leave types and accrual policies",
    "Online leave requests with manager approval workflows",
    "Real-time leave balances for employees and HR",
    "Company and regional holiday calendars",
    "Leave reports by employee, team or leave type",
  ],
  capabilitiesTitle: "Key features of a leave management system",
  capabilities: [
    { icon: Settings2, title: "Leave Policies", description: "Configure leave types, accrual rules and carry-forward policies to match your company." },
    { icon: ClipboardCheck, title: "Approval Workflows", description: "Requests route automatically to the right manager, with visibility into pending approvals." },
    { icon: PieChart, title: "Leave Balances", description: "Employees and HR see up-to-date balances without asking each other." },
    { icon: CalendarClock, title: "Holiday Calendars", description: "Set company-wide and location-specific holidays that show up automatically." },
    { icon: Bell, title: "Reminders", description: "Pending approvals and upcoming leave are surfaced so nothing sits unnoticed." },
    { icon: CalendarDays, title: "Leave Reports", description: "See leave trends by team, leave type or time period." },
  ],
  contentSections: [
    {
      title: "Employee Leave Management System",
      paragraphs: [
        "An online employee leave management system should make leave easy to request and easy to track. In Manitham HRMS, employees apply for leave online through self-service, choose the leave type, and follow the request from submission to manager decision without emailing HR.",
        "Because the same record feeds attendance and payroll, approved leave carries through to both, so nobody re-enters it at month end.",
      ],
      bullets: [
        "Apply for leave online from the employee self-service portal",
        "See available leave balance for each leave type",
        "View past leave history in one place",
        "Track whether a request is pending, approved or rejected",
        "Choose from the leave types your company has configured",
        "Requests follow the approval workflow set up for your team",
        "Approved leave reflects in attendance and payroll",
      ],
    },
    {
      title: "Online Leave Management Software for HR",
      paragraphs: [
        <>
          For HR, online leave management software replaces the spreadsheet and the follow-up emails. You configure policies once, and requests, approvals and balances run from there. Because leave sits inside the same HRMS as attendance and payroll, a leave module built into your{" "}
          <Link href="/hrms-software" className="font-medium text-brand-600 hover:underline">
            HRMS software
          </Link>{" "}
          avoids the monthly reconciliation that standalone leave tools create.
        </>,
        "Compared with standalone leave management solutions, there is one set of employee records to maintain, and leave reports can be viewed by department or team.",
      ],
      bullets: [
        "Configure leave types, accrual rules and carry-forward policies",
        "Set up approval workflows so requests reach the right manager",
        "Maintain company-wide and location-specific holiday calendars",
        "Manage leave balances without manual adjustments",
        "Run leave reports by employee, team or leave type",
        "Track leave across departments and teams",
        "Keep leave in sync with attendance and payroll",
      ],
    },
    {
      title: "How an employee leave request works",
      paragraphs: [
        "HR configures the rules once, and every request follows them.",
        "Employees and managers do this through the same system HR uses to maintain employee records, so there is no separate leave file to keep in sync.",
      ],
      bullets: [
        "HR sets up leave types, accrual and carry-forward rules, approval workflows and holiday calendars",
        "The employee checks their balance and applies for leave online through self-service",
        "The request routes to the right manager, who is reminded of pending approvals",
        "The manager approves or rejects, and the employee sees the decision in the system",
        "The balance updates, and approved leave reflects in attendance and payroll",
        "HR runs leave reports by employee, team or leave type when needed",
      ],
    },
    {
      title: "Leave management for Indian businesses",
      paragraphs: [
        <>
          Leave structures differ from one Indian company to the next. Some use casual, sick and earned leave; others add maternity, paternity or their own categories, with different carry-forward rules and holidays by location. Manitham HRMS is configured around your policy rather than a fixed template. If you are still defining that policy, start with our guide to{" "}
          <Link href="/resources/leave-policy-guide-india" className="font-medium text-brand-600 hover:underline">
            setting up an employee leave policy in India
          </Link>
          .
        </>,
        "Entitlements can depend on your state, industry and contracts, so confirm the rules that apply to your organization and set them up as your own policy.",
      ],
      bullets: [
        "Configurable leave types, accrual rules and carry-forward policies",
        "Company-wide and location-specific holiday calendars for teams in different cities",
        "Approval workflows that follow your reporting structure",
        "One employee record shared with attendance and payroll",
      ],
    },
    {
      title: "How to choose a leave management system",
      paragraphs: [
        <>
          Whichever tool you shortlist, test it against your real policies before you commit. Our guides on{" "}
          <Link href="/resources/employee-leave-management-software" className="font-medium text-brand-600 hover:underline">
            choosing employee leave management software
          </Link>{" "}
          and the{" "}
          <Link href="/resources/best-leave-management-software-india" className="font-medium text-brand-600 hover:underline">
            best leave management software in India
          </Link>{" "}
          go deeper on features and vendor questions.
        </>,
      ],
      bullets: [
        "Can it model your own leave types, accrual and carry-forward rules?",
        "Do approvals route to the right manager, with visible status?",
        "Can employees and managers use it without HR's help?",
        "Does approved leave reach attendance and payroll without re-entry?",
        "Can HR run the leave reports it needs, and control who sees what?",
        "Are pricing and support terms clear before you sign?",
      ],
    },
  ],
  comparison: {
    title: "Manual leave tracking vs a leave management system",
    intro: "Spreadsheets and email can work for a very small team. The gaps show up as headcount, locations and approvers grow.",
    columns: ["Area", "Spreadsheet and email", "Leave management system"],
    rows: [
      ["Leave records", "Kept in files that need updating by hand", "One central record updated as requests are approved"],
      ["Approvals", "Requests and replies spread across inboxes", "Requests routed to the right manager with visible status"],
      ["Leave balances", "Calculated manually and easy to get stale", "Available to employees and HR at any time"],
      ["Holidays and policies", "Held in separate documents", "Configured in the system, including location-specific holidays"],
      ["Payroll and attendance", "Leave re-entered or reconciled at month end", "Approved leave carries through to attendance and payroll"],
      ["HR workload", "Frequent balance queries and follow-ups", "Employees check their own balances and request status"],
    ],
  },
  benefitsTitle: "Why choose Manitham HRMS for leave management?",
  benefits: [
    { title: "No more 'how many leaves do I have left?'", description: "Balances update in real time as requests are approved, visible to the employee directly." },
    { title: "Approvals don't get lost in email", description: "Managers see pending requests in one place and approve or reject with a click." },
    { title: "Policies match your actual rules", description: "Leave types and accrual logic are configured around how your company really works, not a fixed template." },
    { title: "Connects to attendance and payroll", description: "Approved leave reflects in attendance records and payroll automatically." },
  ],
  faqs: [
    { question: "How does employee leave management software work?", answer: "HR configures leave types, policies, holidays and approval workflows. Employees apply online, the request goes to their manager for approval, and the balance updates once it is decided. Approved leave then reflects in attendance and payroll." },
    { question: "What is a leave management system?", answer: "It is software that manages employee leave policies, requests, approvals and balances in one place. Employees apply online and track each request, managers approve or reject, and HR configures policies and holidays and runs leave reports — replacing spreadsheets and email threads." },
    { question: "Can employees apply for leave online?", answer: "Yes. Employees submit leave requests through self-service, and managers approve or reject them from the same system." },
    { question: "Can we set up our own leave policies?", answer: "Yes. Leave types, accrual rules and carry-forward policies are configurable to match your company's actual leave structure." },
    { question: "Do employees see their leave balance in real time?", answer: "Yes, leave balances update as soon as a request is approved, and employees can check them anytime." },
    { question: "Does leave management include holiday calendars?", answer: "Yes, you can set company-wide holidays as well as location-specific ones where teams observe different holidays." },
    { question: "Does approved leave affect payroll automatically?", answer: "Yes, approved leave is reflected in attendance and payroll without manual re-entry." },
    { question: "Is a leave management system suitable for small businesses?", answer: "Yes. Growing teams often outgrow spreadsheets once there are several managers, locations or leave types. Manitham HRMS is aimed at small teams that don't need enterprise-scale software, and policies are configurable, so you can start with a simple setup." },
    { question: "What should we look for when choosing a leave management system?", answer: "Check that it can model your own leave policies, route approvals to the right manager, show balances to employees and HR, and pass approved leave to attendance and payroll. Our guide to choosing employee leave management software has a fuller checklist." },
  ],
  relatedLinks: [
    { title: "Attendance Management", description: "How leave and attendance work together day to day.", href: "/attendance-management" },
    { title: "Employee Self Service", description: "Where employees apply for leave and check balances.", href: "/employee-self-service" },
    { title: "Employee Leave Policy Guide", description: "Leave types, accrual, carry-forward and approvals for Indian companies.", href: "/resources/leave-policy-guide-india" },
    { title: "Payroll Software", description: "How approved leave flows into each payroll run.", href: "/payroll-software" },
    { title: "Best Leave Management Software in India", description: "What to check before choosing a leave management tool.", href: "/resources/best-leave-management-software-india" },
    { title: "How to Choose the Right Employee Leave Management Software for Your Business", description: "Key features, a manual vs online comparison and selection criteria.", href: "/resources/employee-leave-management-software" },
  ],
  ctaTitle: "See how leave management works for your policies",
  ctaSubtitle: "Book a demo and we'll walk through policy configuration, approvals and balances using your own leave structure.",
};

export default function LeaveManagementPage() {
  return <FeaturePageTemplate content={content} />;
}
