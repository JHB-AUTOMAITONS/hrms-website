import type { Metadata } from "next";
import { Fingerprint, CalendarClock, Building2, Wallet, ShieldCheck, Users } from "lucide-react";
import { IndustryPageTemplate, type IndustryPageContent } from "@/components/templates/IndustryPageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.industryManufacturing);

const content: IndustryPageContent = {
  path: keywordMap.industryManufacturing.path,
  breadcrumbLabel: "Manufacturing",
  h1: keywordMap.industryManufacturing.h1,
  heroSubtitle:
    "Shop-floor HR looks different from office HR — shift rotations, biometric punch-in, contract labour, and payroll that spans multiple plants. Manitham HRMS is built to handle both under one system.",
  mockupKind: "attendance",
  challengesTitle: "Where manufacturing HR gets complicated",
  challenges: [
    { title: "Shift-based attendance", description: "Rotating shifts across production lines make manual attendance tracking error-prone." },
    { title: "Mixed workforce types", description: "Permanent staff, contract labour and office employees often need different HR treatment in the same company." },
    { title: "Multi-plant payroll", description: "Different plants can mean different professional tax rates and local compliance requirements." },
    { title: "Shop-floor connectivity", description: "Office-oriented HR tools often assume a desktop and reliable internet — not always true on a factory floor." },
  ],
  featuresTitle: "What manufacturing teams need most",
  featuresSubtitle: "Built around shift work and multi-location operations.",
  features: [
    { icon: Fingerprint, title: "Biometric Attendance", description: "Fingerprint check-in at the shop floor entrance, tied to shift schedules.", href: "/attendance-management" },
    { icon: CalendarClock, title: "Shift Management", description: "Rotating shifts with automatic late-mark and overtime calculation.", href: "/attendance-management" },
    { icon: Building2, title: "Multi-Location Support", description: "Manage employees across multiple plants from one account.", href: "/hrms-software-india" },
    { icon: Wallet, title: "Payroll", description: "Statutory payroll that accounts for plant-level differences in professional tax.", href: "/payroll-software" },
    { icon: Users, title: "Employee Management", description: "Track permanent staff and contract labour with the records each needs.", href: "/employee-management" },
    { icon: ShieldCheck, title: "HR Compliance", description: "PF, ESI and TDS tracked consistently across every location.", href: "/hr-compliance" },
  ],
  workflowTitle: "How a multi-plant rollout typically works",
  workflowSteps: [
    { title: "Set up attendance per plant", description: "Connect biometric devices at each location and configure shift schedules." },
    { title: "Bring employee records together", description: "Centralize permanent and contract workforce records across plants." },
    { title: "Run consolidated payroll", description: "Process payroll across locations with plant-specific compliance handled automatically." },
  ],
  faqs: [
    { question: "Can Manitham HRMS handle shift-based attendance?", answer: "Yes. Shift schedules can be configured per team or plant, with late marks and overtime calculated against each shift automatically." },
    { question: "Does it support biometric devices on the shop floor?", answer: "Yes, biometric devices at factory locations can be connected for attendance capture." },
    { question: "Can we manage multiple plants in one account?", answer: "Yes, employees across multiple locations can be managed together, with location-specific payroll rules like professional tax applied correctly." },
    { question: "Does it handle both permanent staff and contract labour?", answer: "Yes, employee records support different employment types so HR can track each appropriately." },
  ],
  relatedLinks: [
    { title: "Attendance Management", description: "Full detail on biometric and shift-based tracking.", href: "/attendance-management" },
    { title: "HRMS Software in India", description: "How multi-state, multi-location compliance is handled.", href: "/hrms-software-india" },
    { title: "Payroll Software", description: "How payroll runs across multiple locations.", href: "/payroll-software" },
  ],
  ctaTitle: "See a multi-plant setup in action",
  ctaSubtitle: "Book a demo and walk through attendance and payroll across your locations.",
};

export default function ManufacturingPage() {
  return <IndustryPageTemplate content={content} />;
}
