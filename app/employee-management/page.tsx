import type { Metadata } from "next";
import { Users, FolderOpen, Building2, Network, UserCog, Search } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.employeeManagement);

const content: FeaturePageContent = {
  path: keywordMap.employeeManagement.path,
  breadcrumbLabel: "Employee Management",
  heroEyebrow: "Employee Management",
  h1: keywordMap.employeeManagement.h1,
  heroSubtitle:
    "Keep employee profiles, documents, departments and org structure in one searchable record — the same record that attendance, leave, payroll and performance all read from.",
  highlights: ["Employee profiles", "Document storage", "Org structure", "Department & designation"],
  mockupKind: "overview",
  overviewTitle: "One employee record, from onboarding to exit",
  overviewParagraphs: [
    "When employee data is scattered across spreadsheets, onboarding forms and email attachments, it's hard to trust any single source. Manitham HRMS keeps one employee record per person — profile details, documents, department, designation and reporting line — that every other module in the system reads from.",
    "That means when someone joins, transfers departments, or gets promoted, you update it once and it's reflected across attendance, leave, payroll and performance automatically.",
  ],
  overviewBullets: [
    "Centralized employee profiles with contact and personal details",
    "Document storage for offer letters, ID proofs and contracts",
    "Department, designation and reporting structure",
    "Searchable employee directory across the organization",
    "Full employee lifecycle from onboarding to exit",
  ],
  capabilitiesTitle: "What's in the employee record",
  capabilities: [
    { icon: Users, title: "Employee Profiles", description: "Personal details, contact information and employment history in one place." },
    { icon: FolderOpen, title: "Document Management", description: "Store offer letters, ID proofs, contracts and certificates against each employee." },
    { icon: Network, title: "Org Structure", description: "Departments, designations and reporting lines that reflect how your company is actually organized." },
    { icon: Building2, title: "Multi-Department Support", description: "Manage employees across departments, teams and locations from one account." },
    { icon: Search, title: "Employee Directory", description: "A searchable directory so anyone can find the right colleague or contact." },
    { icon: UserCog, title: "Lifecycle Tracking", description: "Track an employee from onboarding through transfers, promotions and exit." },
  ],
  benefitsTitle: "Why it matters",
  benefits: [
    { title: "One source of truth", description: "No more reconciling three different spreadsheets to figure out who reports to whom." },
    { title: "Faster onboarding", description: "New hire details entered once are ready for attendance, leave and payroll from day one." },
    { title: "Documents in one place", description: "ID proofs, contracts and certificates are stored against the employee record, not scattered across email." },
    { title: "Clean org visibility", description: "Department and reporting structure stay accurate as your team grows and changes." },
  ],
  faqs: [
    { question: "Can we store employee documents in the system?", answer: "Yes. Documents like ID proofs, offer letters and contracts can be stored against each employee's record." },
    { question: "Does employee management include org structure?", answer: "Yes, departments, designations and reporting lines are part of the employee record." },
    { question: "Does this connect to attendance and payroll automatically?", answer: "Yes. Attendance, leave, payroll and performance all reference the same employee record, so updates carry through automatically." },
    { question: "Can HR search across all employees?", answer: "Yes, there's a searchable employee directory across departments and locations." },
    { question: "Is employee data secure?", answer: "Access to employee records is controlled through role-based permissions, so only authorized users see sensitive details." },
  ],
  relatedLinks: [
    { title: "HRMS Software", description: "See how employee management connects to every other module.", href: "/hrms-software" },
    { title: "Recruitment", description: "How new hires move from candidate to employee record.", href: "/recruitment" },
    { title: "Employee Self Service", description: "What employees can update themselves.", href: "/employee-self-service" },
  ],
  ctaTitle: "Bring your employee data into one place",
  ctaSubtitle: "Book a demo and we'll show you how employee records connect across the platform.",
};

export default function EmployeeManagementPage() {
  return <FeaturePageTemplate content={content} />;
}
