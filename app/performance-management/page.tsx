import type { Metadata } from "next";
import { Target, LineChart, MessageSquare, ClipboardList, Award, RefreshCw } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.performanceManagement);

const content: FeaturePageContent = {
  path: keywordMap.performanceManagement.path,
  breadcrumbLabel: "Performance Management",
  heroEyebrow: "Performance Management",
  h1: keywordMap.performanceManagement.h1,
  heroSubtitle:
    "Set goals, run structured appraisal cycles, and give managers a simple way to record feedback — without a separate spreadsheet for every review period.",
  highlights: ["Goals & KPIs", "Appraisal cycles", "Manager feedback", "Performance history"],
  mockupKind: "performance",
  overviewTitle: "Performance management your managers will actually use",
  overviewParagraphs: [
    "Performance reviews often fail not because the framework is wrong, but because tracking them is painful — goals live in one document, feedback in another, and ratings get compiled manually at review time. Manitham HRMS keeps goals, check-ins and appraisal cycles in the system employees and managers already use for everything else.",
    "That keeps performance data tied to the same employee record used for attendance and payroll, so appraisal history stays with the employee even as they change roles or managers.",
  ],
  overviewBullets: [
    "Goal and KPI setting for individuals and teams",
    "Structured appraisal cycles with defined timelines",
    "Manager feedback recorded against each review period",
    "Performance history tied to the employee record",
  ],
  capabilitiesTitle: "What performance management includes",
  capabilities: [
    { icon: Target, title: "Goals & KPIs", description: "Set measurable goals for individuals and teams, tracked over a review period." },
    { icon: RefreshCw, title: "Appraisal Cycles", description: "Run structured review cycles on a schedule that fits your organization." },
    { icon: MessageSquare, title: "Manager Feedback", description: "Managers record feedback directly against each employee's goals and review." },
    { icon: ClipboardList, title: "Review Templates", description: "Set up review structures that match how your company evaluates performance." },
    { icon: LineChart, title: "Performance Tracking", description: "See goal progress and review history over time, not just at appraisal time." },
    { icon: Award, title: "Appraisal History", description: "Past reviews stay attached to the employee record for reference in future cycles." },
  ],
  benefitsTitle: "Why it matters",
  benefits: [
    { title: "No separate review spreadsheet", description: "Goals, feedback and ratings live in the same system as the rest of the employee record." },
    { title: "Managers see progress, not just outcomes", description: "Goal tracking through the cycle, not just a single rating at the end." },
    { title: "Consistent review structure", description: "Every team follows the same review format, making comparisons fair and organized." },
    { title: "History that follows the employee", description: "Appraisal history moves with the employee even if they change managers or teams." },
  ],
  faqs: [
    { question: "Can we set our own goals and KPIs?", answer: "Yes. Goals are configurable per employee or team, and progress can be tracked through the review period." },
    { question: "How often can appraisal cycles run?", answer: "Appraisal cycles can be set up on whatever schedule fits your organization — quarterly, half-yearly or annual." },
    { question: "Can managers record feedback outside of a formal review?", answer: "Yes, managers can record feedback against goals as work progresses, not only during the formal review period." },
    { question: "Is performance history kept over time?", answer: "Yes, past appraisals stay attached to the employee record and are visible in future review cycles." },
  ],
  relatedLinks: [
    { title: "Employee Management", description: "How performance data connects to the core employee record.", href: "/employee-management" },
    { title: "Recruitment", description: "See how new hires move into performance tracking after onboarding.", href: "/recruitment" },
    { title: "HRMS Software", description: "See how performance fits into the full platform.", href: "/hrms-software" },
  ],
  ctaTitle: "Run your next appraisal cycle without the spreadsheet",
  ctaSubtitle: "Book a demo and we'll show you how goal tracking and reviews work in practice.",
};

export default function PerformanceManagementPage() {
  return <FeaturePageTemplate content={content} />;
}
