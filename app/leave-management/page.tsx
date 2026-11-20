import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, ClipboardCheck, PieChart, Bell, CalendarClock, Settings2 } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { LeaveBalanceExample, LeaveSetupSteps, LeaveTypesGrid, LeaveWorkflow, SandwichLeaveExample } from "@/components/illustrations/LeaveVisuals";
import { buildMetadata } from "@/lib/seo/metadata";
import { softwareApplicationSchema } from "@/lib/seo/schema";
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
    "A leave management system, also called leave management software, is software that handles employee leave from policy to payroll: which leave types exist, how balances accrue, how requests are raised and approved, and how the result reaches attendance and payroll records.",
    "Spreadsheets work until balances go stale, approvals get buried in email, and nobody's quite sure how many casual leaves are left. Manitham HRMS keeps policies, requests, approvals and balances in one place that employees and managers can see in real time.",
    "Leave types and policies are configurable, so whether your company uses casual, sick and earned leave, or a different structure entirely, the system can be set up to match.",
    "Each role has a clear job. Employees apply and track their own requests. Managers approve or reject requests from their team. HR defines the policies, holiday calendars and reports, and payroll teams rely on approved leave being already reflected in attendance and payroll.",
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
      id: "leave-types",
      layout: "stacked",
      title: "Types of Employee Leave Managed by a Leave Management System",
      paragraphs: [
        <>
          Most Indian companies combine a few core leave types, commonly casual leave, sick leave and earned (privilege) leave, and add maternity, paternity or company-specific leave as needed. A leave management system holds each of these as a separate leave type with its own entitlement, rules and balance, so a sick day never gets deducted from the wrong bucket.
        </>,
        "These are the categories HR teams most often set up. Names and groupings differ between companies, and you only configure the ones your policy actually uses.",
      ],
      aside: <LeaveTypesGrid />,
      note: "Leave types, eligibility and entitlements vary by company policy and by the regulations that apply to your location, industry and workforce. Treat this list as common practice, not legal advice, and confirm statutory entitlements before finalizing a policy.",
    },
    {
      id: "leave-balance-calculation",
      title: "How Does an Employee Leave Management System Calculate Leave Balances?",
      paragraphs: [
        "A leave balance is the number of days an employee can still take for a given leave type. The system works it out per leave type from four inputs: what the employee is entitled to, how much of that has been credited so far, what has been used, and any corrections HR has made.",
        "Entitlement is the total the policy grants for the leave year. Allocation is how that total reaches the employee: all at once at the start of the year, or as monthly or annual accruals. Leave taken is deducted once a request is approved. Carry-forward adds unused days from the previous year where the policy allows it, and balance adjustments cover corrections and one-off grants.",
        "Two cases need a policy decision rather than a formula. Pending requests may be shown separately or held against the available balance until the manager decides. New joiners are often given a prorated entitlement based on their joining date. In Manitham HRMS, balances are tracked per leave type and update when a request is approved; how accrual and carry-forward apply follows the rules HR configures.",
      ],
      aside: <LeaveBalanceExample />,
    },
    {
      id: "leave-accrual-carry-forward",
      title: "Automate Leave Accrual, Carry Forward and Employee Leave Allocation",
      paragraphs: [
        "Leave accrual management is where spreadsheets usually break. Some leave types are allocated in full each year, others are credited month by month, and unused days may carry forward, expire or be capped. Applying those rules by hand for every employee, every month, is slow and easy to get wrong.",
        <>
          In Manitham HRMS, HR configures each leave type with its own accrual and carry-forward rules, and the employee&apos;s balance for each type updates as requests are approved. That replaces manual leave balance management with rules that are set once and applied consistently.
        </>,
        <>
          The rules themselves are yours to define. Decide the allocation frequency, how new employees are prorated, what carries forward and when unused leave expires before you configure anything. Our guide to{" "}
          <Link href="/resources/leave-policy-guide-india" className="font-medium text-brand-600 hover:underline">
            leave types, accrual and carry-forward in India
          </Link>{" "}
          walks through those decisions.
        </>,
      ],
      bullets: [
        "Set up the leave types your company actually offers",
        "Define how each type accrues over the leave year",
        "Set carry-forward rules per leave type",
        "Employees see a separate balance for each leave type",
        "Balances change automatically when a request is approved",
      ],
      note: "Proration for mid-year joiners, leave expiry dates and manual balance adjustments are policy details that differ widely. Bring your rules to a demo and we will show how they map to the configuration.",
    },
    {
      id: "half-day-flexible-leave",
      title: "Manage Half-Day Leave and Flexible Leave Policies",
      paragraphs: [
        "Not every absence is a full day. Many companies allow half-day leave, split into a first half (morning) and a second half (afternoon), and count it as 0.5 days against the balance. A leave policy needs to say which leave types allow half days and how the duration of a request is calculated.",
        "Policies also vary by employee group. Probationers, confirmed staff, contract workers and different locations often have different entitlements, notice periods or limits on consecutive days. Leave policy management means writing those rules down clearly, then configuring leave types and approval workflows to match.",
        "Manitham HRMS is configured around your policy rather than a fixed template: leave types, accrual rules and approval workflows are set up to match how your company works. If half-day leave or group-specific rules are central to your policy, raise them in the demo so we can show exactly how they are handled.",
      ],
      bulletsTitle: "Questions to settle in your leave policy",
      bullets: [
        "Which leave types can be taken as a half day?",
        "Are first-half and second-half requests tracked separately?",
        "How is leave duration counted for partial days?",
        "Do probation, contract and permanent staff share one policy?",
        "Is there a minimum notice period or a cap on consecutive days?",
        "Which rules differ by location or department?",
      ],
    },
    {
      id: "weekends-holidays",
      title: "How Leave Management Software Handles Weekends and Holidays",
      paragraphs: [
        "Leave duration is not just the gap between two dates. Weekly offs and public holidays normally should not be deducted from an employee's balance, so leave management software needs a holiday calendar to count working days correctly.",
        <>
          Manitham HRMS supports company-wide holiday calendars and location-specific holidays, which matters when teams in different cities observe different days. Companies with several offices can pair this with our guide to{" "}
          <Link href="/resources/manage-employee-attendance-multiple-branches" className="font-medium text-brand-600 hover:underline">
            managing employee attendance across multiple branches
          </Link>
          .
        </>,
        "The harder question is what happens to weekly offs and holidays that fall between two leave days. Under a sandwich leave policy, those days are counted as leave too; without one, only the working days are deducted. Both approaches are in use, and this is a policy decision each company makes for itself. If you apply a sandwich rule, confirm how it should be configured during your demo.",
      ],
      aside: <SandwichLeaveExample />,
    },
    {
      id: "leave-calendar",
      title: "Plan Employee Leave and Team Availability with a Leave Calendar",
      paragraphs: [
        "An employee leave calendar turns individual requests into a picture of who is away and when. For a manager, that context is what makes an approval decision sensible: approving one request is easy, approving the third request for the same week in a five-person team is not.",
        <>
          In Manitham HRMS, holiday calendars, pending approvals and upcoming leave are surfaced in the system, and HR can review leave by team or department. For roster-based teams, leave planning works best alongside{" "}
          <Link href="/resources/employee-scheduling-software-guide" className="font-medium text-brand-600 hover:underline">
            employee scheduling and shift planning
          </Link>
          , so approved leave and shift cover are planned together.
        </>,
      ],
      bulletsTitle: "What a leave calendar helps you do",
      bullets: [
        "See employee leave schedules for the coming weeks",
        "Check team availability before approving a request",
        "Plan around company and regional holidays",
        "Review pending leave requests in context",
        "Coordinate leave within a department during busy periods",
        "Spot overlapping leave before it leaves a team short",
      ],
    },
    {
      id: "leave-approval-workflow",
      layout: "stacked",
      title: "Leave Approval Workflow: How an Employee Leave Request Works",
      paragraphs: [
        "HR configures the rules once, and every request follows them. A leave approval workflow moves a request from the employee to the manager, records the decision, and updates leave records without anyone forwarding an email.",
        <>
          Employees can apply from the{" "}
          <Link href="/employee-self-service" className="font-medium text-brand-600 hover:underline">
            employee self-service portal
          </Link>
          , or by messaging the{" "}
          <Link href="/ai-whatsapp-assistant" className="font-medium text-brand-600 hover:underline">
            AI WhatsApp HR assistant
          </Link>
          , which routes the request to the right manager. Managers see pending approvals in one place and are reminded of requests that are waiting. A rejected request is recorded in the same way as an approved one, so the employee always knows where it stands and the balance stays correct.
        </>,
        "Employees and managers do this through the same system HR uses to maintain employee records, so HR has visibility of every request and there is no separate leave file to keep in sync. Approval chains differ between companies; if you need more than one approver for certain leave types, tell us in the demo and we will show how your reporting structure is mapped.",
      ],
      aside: <LeaveWorkflow />,
    },
  ],
  comparison: {
    title: "Manual Leave Management vs Automated Leave Management Software",
    intro: "Spreadsheets and email can work for a very small team. The gaps show up as headcount, locations and approvers grow, which is usually when businesses replace Excel-based tracking with employee leave tracking software.",
    columns: ["Area", "Spreadsheet and email", "Leave management software"],
    rows: [
      ["Leave requests", "Sent by email, chat or paper form", "Applied online through self-service, with a recorded status"],
      ["Leave records", "Kept in files that need updating by hand", "One central record updated as requests are approved"],
      ["Approvals", "Requests and replies spread across inboxes", "Requests routed to the right manager with visible status"],
      ["Leave balances", "Calculated manually and easy to get stale", "Available to employees and HR at any time"],
      ["Team visibility", "Managers keep their own notes on who is away", "Pending approvals and upcoming leave visible in one system"],
      ["Holidays and policies", "Held in separate documents", "Configured in the system, including location-specific holidays"],
      ["Payroll and attendance", "Leave re-entered or reconciled at month end", "Approved leave carries through to attendance and payroll"],
      ["HR workload", "Frequent balance queries and follow-ups", "Employees check their own balances and request status"],
    ],
  },
  comparisonCta: {
    title: "Ready to move leave out of spreadsheets?",
    text: "See requests, approvals and balances running on your own leave policy in a short demo.",
  },
  contentSectionsAfterComparison: [
    {
      id: "leave-reports",
      title: "Leave Reports and Analytics for HR",
      paragraphs: [
        "Leave data answers practical questions: who has a large unused balance, which team is short-staffed every December, how much unpaid leave reached payroll last month. When records live in a spreadsheet, each of those questions is a manual exercise.",
        <>
          In Manitham HRMS, HR can run leave reports by employee, team or leave type, and review leave trends over a time period. Because leave shares the employee record with the rest of the{" "}
          <Link href="/hrms-software" className="font-medium text-brand-600 hover:underline">
            HR management system
          </Link>
          , the same data supports wider workforce reporting, covered in our guide to{" "}
          <Link href="/resources/hr-analytics-software" className="font-medium text-brand-600 hover:underline">
            HR analytics software
          </Link>
          .
        </>,
      ],
      bulletsTitle: "Common leave reporting use cases",
      bullets: [
        "Employee leave history, request by request",
        "Leave balances by leave type",
        "Leave usage by team or department",
        "Usage by leave type, such as sick versus earned leave",
        "Leave trends over a month, quarter or year",
        "Pending leave requests awaiting a decision",
      ],
      note: "Tell us which reports your HR and finance teams rely on today, and we will confirm how each one is produced during the demo.",
    },
    {
      id: "setup",
      layout: "stacked",
      title: "How to Set Up an Employee Leave Management System",
      paragraphs: [
        <>
          Setting up an employee leave management system is mostly a policy exercise followed by configuration. HR managers and business owners who get the first three steps right rarely need to rework the rest. For the wider rollout, our{" "}
          <Link href="/resources/hrms-implementation-guide" className="font-medium text-brand-600 hover:underline">
            HRMS implementation guide
          </Link>{" "}
          covers data migration and employee onboarding.
        </>,
      ],
      aside: <LeaveSetupSteps />,
    },
    {
      title: "Leave management with attendance and payroll",
      paragraphs: [
        <>
          Leave stops being a separate record when it sits beside{" "}
          <Link href="/attendance-management" className="font-medium text-brand-600 hover:underline">
            attendance management
          </Link>{" "}
          and{" "}
          <Link href="/payroll-software" className="font-medium text-brand-600 hover:underline">
            payroll software
          </Link>{" "}
          in one system. Approved leave appears in attendance, so a leave day is not mistaken for an absence, and it reaches payroll without anyone re-entering it.
        </>,
        <>
          This is the practical difference between a standalone leave tracker and a leave module in an HRMS: the same{" "}
          <Link href="/employee-management" className="font-medium text-brand-600 hover:underline">
            employee record
          </Link>{" "}
          serves attendance, leave and payroll, so there is one set of data to maintain and fewer month-end corrections.
        </>,
      ],
      bullets: [
        "Approved leave shows in attendance records",
        "Leave days are not treated as unexplained absences",
        "Approved leave reaches payroll without re-entry",
        "One employee record shared across leave, attendance and payroll",
        "Leave reports by employee, team or leave type for HR review",
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
    { question: "What leave types can we set up in Manitham HRMS?", answer: "Leave types are configurable. Many Indian companies use casual, sick and earned leave, and some add maternity, paternity or their own categories. Each type can have its own accrual and carry-forward rules." },
    { question: "How does leave affect attendance and payroll?", answer: "Approved leave is reflected in attendance, so a leave day is not treated as an absence, and it reaches payroll without being entered again." },
    { question: "Can employees apply for leave on WhatsApp?", answer: "Yes. The AI WhatsApp HR assistant lets employees apply for leave from a WhatsApp message, and the request is routed to the right manager. See the AI WhatsApp assistant page for details." },
    { question: "How does a leave management system calculate employee leave balances?", answer: "For each leave type it starts with the leave allocated or accrued, adds any carried-forward balance and adjustments, and deducts approved leave. For example, an 18-day annual entitlement with 5 approved days leaves 13. How pending requests, accrual timing and proration are treated depends on your company's policy." },
    { question: "Can a leave management system manage monthly leave accrual?", answer: "Monthly accrual, where a portion of the yearly entitlement is credited each month, is a common pattern alongside full yearly allocation. In Manitham HRMS, HR configures accrual and carry-forward rules for each leave type, so share your accrual schedule in the demo and we will show how it is set up." },
    { question: "Can companies create different leave policies for different employees?", answer: "Many companies need this, for example separate rules for probationers, contract staff or different locations. In Manitham HRMS leave types, accrual rules and approval workflows are configurable, and holiday calendars can be location-specific. Tell us which employee groups need different rules so we can confirm the setup for your case." },
    { question: "How does leave management software track pending leave requests?", answer: "Every request has a status: pending, approved or rejected. Managers see pending approvals in one place and are reminded of requests awaiting a decision, while employees can check the status of their own requests in self-service." },
    { question: "How does leave management software handle weekends and holidays?", answer: "It uses the holiday calendar to work out which days in a request are working days. Manitham HRMS supports company-wide and location-specific holiday calendars. Whether weekly offs or holidays between two leave days are counted as leave (a sandwich rule) is a policy choice each company makes." },
    { question: "Can leave be managed for multiple branches or locations?", answer: "Yes, employees across locations are managed in one system, and holiday calendars can be set per location where teams observe different holidays. HR can review leave by team or department from the same records." },
    { question: "How can a business replace manual leave tracking in Excel?", answer: "Start by writing down your leave policy, then configure leave types, accrual rules, approvers and holiday calendars in the system. Load each employee's current balance as the opening balance, and have employees apply online from that date so the spreadsheet is no longer the record." },
    { question: "What is the difference between leave management software and an HRMS leave module?", answer: "Standalone leave software tracks leave only. An HRMS leave module shares the employee record with attendance and payroll, so approved leave carries through without re-entry." },
  ],
  relatedLinks: [
    { title: "Attendance Management", description: "How leave and attendance work together day to day.", href: "/attendance-management" },
    { title: "Employee Self Service", description: "Where employees apply for leave and check balances.", href: "/employee-self-service" },
    { title: "Employee Leave Policy Guide", description: "Leave types, accrual, carry-forward and approvals for Indian companies.", href: "/resources/leave-policy-guide-india" },
    { title: "Payroll Software", description: "How approved leave flows into each payroll run.", href: "/payroll-software" },
    { title: "Best Leave Management Software in India", description: "What to check before choosing a leave management tool.", href: "/resources/best-leave-management-software-india" },
    { title: "Employee Leave Management Software: How It Works", description: "Understand employee leave management software, its request and approval workflow, key features and benefits.", href: "/resources/employee-leave-management-software" },
    { title: "AI WhatsApp HR Assistant", description: "How employees check leave balances and apply for leave from WhatsApp.", href: "/ai-whatsapp-assistant" },
  ],
  structuredData: softwareApplicationSchema({
    path: keywordMap.leaveManagement.path,
    description:
      "Leave management system in Manitham HRMS: configurable leave policies, online leave requests, manager approval workflows, leave balances, holiday calendars and leave reports, connected to attendance and payroll.",
    featureList: [
      "Configurable leave types, accrual and carry-forward rules",
      "Online leave requests through employee self-service",
      "Manager approval workflows with pending-approval reminders",
      "Leave balances per leave type",
      "Company-wide and location-specific holiday calendars",
      "Leave reports by employee, team or leave type",
      "Approved leave reflected in attendance and payroll",
    ],
  }),
  ctaTitle: "See how leave management works for your policies",
  ctaSubtitle: "Book a demo and we'll walk through policy configuration, approvals and balances using your own leave structure.",
};

export default function LeaveManagementPage() {
  return <FeaturePageTemplate content={content} />;
}
