import type { Metadata } from "next";
import { Landmark, MapPin, IndianRupee, ShieldCheck, Languages, Building2 } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.hrmsSoftwareIndia);

const content: FeaturePageContent = {
  path: keywordMap.hrmsSoftwareIndia.path,
  breadcrumbLabel: "HRMS Software in India",
  heroEyebrow: "HRMS Software in India",
  h1: keywordMap.hrmsSoftwareIndia.h1,
  heroSubtitle:
    "Indian HR teams deal with things generic HR tools weren't built for — PF and ESI thresholds, professional tax that varies by state, and multi-location attendance. Manitham HRMS is built around those realities.",
  highlights: ["PF, ESI, PT & TDS", "Multi-state support", "Biometric & GPS attendance", "India-based support"],
  mockupKind: "compliance",
  overviewTitle: "HR software built around Indian business requirements",
  overviewParagraphs: [
    "A lot of HR software is built for a US or European market first, with Indian payroll bolted on later. Manitham HRMS starts from Indian statutory requirements — PF, ESI, professional tax and TDS — rather than treating them as an add-on.",
    "That extends beyond payroll. Indian businesses often run multiple locations with different state-level professional tax rules, mix office staff with field or contract workers, and need attendance that works over patchy connectivity in smaller towns and factory sites. Manitham HRMS is designed with those conditions in mind.",
  ],
  overviewBullets: [
    "Statutory payroll calculations for PF, ESI, professional tax and TDS",
    "Support for employees across multiple Indian states",
    "GPS and biometric attendance for field, site and office staff",
    "Employee self-service that works on low-bandwidth mobile connections",
  ],
  capabilitiesTitle: "What's different about running HR in India",
  capabilities: [
    { icon: IndianRupee, title: "Indian Payroll", description: "Salary structures and statutory deductions built for Indian payroll rules." },
    { icon: Landmark, title: "Statutory Compliance", description: "PF, ESI, professional tax and TDS calculated as part of every payroll run." },
    { icon: Building2, title: "Multi-Location", description: "Manage employees across states and offices from one account." },
    { icon: MapPin, title: "GPS Attendance", description: "Field and site staff check in with location capture, not just a punch clock." },
    { icon: ShieldCheck, title: "Audit-Ready Records", description: "Payroll and attendance history organized for statutory audits." },
    { icon: Languages, title: "India-Based Support", description: "Support from a team that understands Indian HR and payroll cycles." },
  ],
  benefitsTitle: "Built for how Indian businesses actually run HR",
  benefits: [
    { title: "No spreadsheet PF/ESI math", description: "Deductions are calculated automatically against current PF and ESI rules, not recalculated by hand every cycle." },
    { title: "State-aware professional tax", description: "Professional tax varies by state — payroll accounts for where each employee is based." },
    { title: "Works for blue-collar and white-collar teams together", description: "Biometric attendance for shop-floor staff and self-service for office staff, in the same system." },
    { title: "Ready for statutory filings", description: "Payroll data is organized in a way that supports your PF, ESI and TDS filing process." },
  ],
  faqs: [
    { question: "Does Manitham HRMS calculate PF and ESI automatically?", answer: "Yes. PF and ESI deductions are calculated as part of each payroll run based on employee salary structure and applicability thresholds." },
    { question: "Can Manitham HRMS handle employees in different states?", answer: "Yes. Employee records track work location, and professional tax is applied based on the applicable state rules for that employee." },
    { question: "Is Manitham HRMS only for large companies?", answer: "No. It's used by small businesses running their first structured payroll cycle as well as larger, multi-location organizations." },
    { question: "Does it support TDS on salary?", answer: "Yes. TDS is calculated as part of payroll processing based on the employee's declared tax details." },
    { question: "Is support based in India?", answer: "Yes, our support team is based in India and familiar with Indian payroll cycles and compliance timelines." },
  ],
  relatedLinks: [
    { title: "Payroll Software", description: "A closer look at how salary processing and payslips work.", href: "/payroll-software" },
    { title: "HR Compliance", description: "How statutory compliance tracking works across PF, ESI and TDS.", href: "/hr-compliance" },
    { title: "HRMS for Manufacturing", description: "How multi-plant, shift-based teams use Manitham HRMS.", href: "/industries/manufacturing" },
  ],
  ctaTitle: "Talk to a team that understands Indian payroll",
  ctaSubtitle: "Book a demo and bring your specific compliance questions — PF, ESI, PT or TDS.",
};

export default function HrmsSoftwareIndiaPage() {
  return <FeaturePageTemplate content={content} />;
}
