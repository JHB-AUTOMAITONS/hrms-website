import type { Metadata } from "next";
import { Briefcase, Users2, GitBranch, CalendarClock, BarChart3, UserPlus } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.recruitment);

const content: FeaturePageContent = {
  path: keywordMap.recruitment.path,
  breadcrumbLabel: "Recruitment",
  heroEyebrow: "Recruitment Software",
  h1: keywordMap.recruitment.h1,
  heroSubtitle:
    "Post openings, track candidates through your hiring pipeline, and move new hires straight into onboarding — without re-entering their details into a separate HR system.",
  highlights: ["Job postings", "Candidate pipeline", "Interview scheduling", "Onboarding handoff"],
  mockupKind: "recruitment",
  overviewTitle: "Recruitment that hands off cleanly into HR",
  overviewParagraphs: [
    "A lot of applicant tracking tools stop at 'hired' — and then someone manually re-types the new employee's details into the HR system. Manitham HRMS keeps recruitment in the same platform as the rest of HR, so when a candidate is marked as hired, their information moves directly into the employee record instead of being re-entered.",
    "Along the way, you get a clear view of where every candidate stands in the pipeline, without chasing updates over email or spreadsheets.",
  ],
  overviewBullets: [
    "Job posting and candidate application tracking",
    "Hiring pipeline stages from applied to hired",
    "Interview scheduling and status updates",
    "Direct handoff from hired candidate to employee record",
  ],
  capabilitiesTitle: "What recruitment includes",
  capabilities: [
    { icon: Briefcase, title: "Job Postings", description: "Create and manage open roles with role details and requirements." },
    { icon: Users2, title: "Candidate Tracking", description: "Track every applicant's status as they move through your hiring process." },
    { icon: GitBranch, title: "Hiring Pipeline", description: "Move candidates through stages — applied, interview, offer, hired — with a clear view at each step." },
    { icon: CalendarClock, title: "Interview Scheduling", description: "Coordinate interview rounds and keep status visible to everyone involved in hiring." },
    { icon: UserPlus, title: "Onboarding Handoff", description: "Hired candidates convert directly into employee records, ready for onboarding." },
    { icon: BarChart3, title: "Recruitment Reports", description: "See hiring activity and pipeline health across open roles." },
  ],
  benefitsTitle: "Why it matters",
  benefits: [
    { title: "No re-typing candidate data", description: "Hired candidates move straight into the employee record — no duplicate data entry." },
    { title: "Clear pipeline visibility", description: "Hiring managers and HR see exactly where each candidate stands, without status-update emails." },
    { title: "Faster onboarding start", description: "Because candidate data is already in the system, onboarding can begin the moment someone accepts an offer." },
    { title: "One system, not two", description: "Recruitment and HR data live together instead of in a separate ATS that doesn't talk to your HRMS." },
  ],
  faqs: [
    { question: "Can we post job openings and track applicants?", answer: "Yes. You can create job postings and track candidates through your hiring pipeline from application to offer." },
    { question: "Does it support interview scheduling?", answer: "Yes, interview rounds and their status can be tracked as part of each candidate's pipeline stage." },
    { question: "What happens when a candidate is hired?", answer: "Their details move directly into an employee record, ready for onboarding — no need to re-enter information manually." },
    { question: "Can we see recruitment activity across all open roles?", answer: "Yes, recruitment reports give visibility into pipeline health and hiring activity across every open position." },
  ],
  relatedLinks: [
    { title: "Employee Management", description: "Where hired candidates land as full employee records.", href: "/employee-management" },
    { title: "Employee Self Service", description: "What new hires can access from day one.", href: "/employee-self-service" },
    { title: "HRMS Software", description: "See how recruitment fits into the full platform.", href: "/hrms-software" },
    { title: "Best Applicant Tracking Software in India", description: "What to look for in an ATS, and where a standalone tool falls short.", href: "/resources/best-applicant-tracking-software-india" },
    { title: "Recruitment CRM vs ATS", description: "What each one actually does, and which this module is.", href: "/resources/recruitment-crm-vs-ats" },
  ],
  ctaTitle: "See recruitment connected to the rest of HR",
  ctaSubtitle: "Book a demo and we'll show you the pipeline-to-onboarding handoff.",
};

export default function RecruitmentPage() {
  return <FeaturePageTemplate content={content} />;
}
