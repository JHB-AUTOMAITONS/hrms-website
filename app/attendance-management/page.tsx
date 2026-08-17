import type { Metadata } from "next";
import { Fingerprint, MapPin, Smartphone, Clock, CalendarClock, BarChart3 } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.attendanceManagement);

const content: FeaturePageContent = {
  path: keywordMap.attendanceManagement.path,
  breadcrumbLabel: "Attendance Management",
  heroEyebrow: "Attendance Management",
  h1: keywordMap.attendanceManagement.h1,
  heroSubtitle:
    "Office staff, field teams and factory workers don't clock in the same way. Manitham HRMS supports biometric devices, GPS-based mobile check-in and web punch-in — all feeding into the same attendance record.",
  highlights: ["Biometric devices", "GPS check-in", "Shift management", "Overtime tracking"],
  mockupKind: "attendance",
  overviewTitle: "Attendance that matches how your teams actually show up",
  overviewParagraphs: [
    "A single attendance method rarely works across an entire organization. Office staff might use a biometric device at the entrance, field sales or service staff need GPS-based check-in from their phone, and remote or hybrid employees need a simple web punch-in. Manitham HRMS supports all three, recording everything into one attendance system.",
    "From there, shift schedules, late marks and overtime are calculated automatically, so HR isn't manually reviewing punch logs every day.",
  ],
  overviewBullets: [
    "Biometric device integration for office and factory locations",
    "GPS-based mobile check-in for field and site staff",
    "Web-based punch-in for remote and hybrid employees",
    "Shift scheduling with automatic late-mark and overtime calculation",
    "Attendance regularization requests with manager approval",
  ],
  capabilitiesTitle: "How attendance tracking works",
  capabilities: [
    { icon: Fingerprint, title: "Biometric Attendance", description: "Connect biometric devices at office or factory locations for fingerprint-based check-in." },
    { icon: MapPin, title: "GPS Attendance", description: "Field and site staff check in from their phone with location captured automatically." },
    { icon: Smartphone, title: "Mobile & Web Punch-In", description: "Remote and hybrid employees can check in from any browser or the mobile app." },
    { icon: Clock, title: "Late Mark & Overtime", description: "Shift timings are compared against check-in/out to calculate late marks and overtime automatically." },
    { icon: CalendarClock, title: "Shift Management", description: "Assign and rotate shifts across teams, with attendance rules matched to each shift." },
    { icon: BarChart3, title: "Attendance Reports", description: "Daily, weekly and monthly attendance reports by team, location or individual." },
  ],
  benefitsTitle: "Why it matters",
  benefits: [
    { title: "No manual punch-log review", description: "Late marks, overtime and absences are calculated automatically against shift schedules." },
    { title: "Works for distributed teams", description: "Field, factory and office staff are all covered without separate systems." },
    { title: "Feeds directly into payroll", description: "Attendance data flows straight into payroll — no re-entering hours worked." },
    { title: "Regularization without back-and-forth email", description: "Employees raise attendance corrections in-app, and managers approve or reject them directly." },
  ],
  faqs: [
    { question: "Can Manitham HRMS handle biometric attendance devices?", answer: "Yes. Biometric devices at your office or factory locations can be connected so fingerprint check-ins record directly into the attendance system." },
    { question: "Does it support GPS attendance for field staff?", answer: "Yes. Field and site employees can check in from their phone, with their location captured at the time of check-in." },
    { question: "Can employees mark attendance from a browser?", answer: "Yes, employees without biometric or GPS requirements can check in through a simple web-based punch-in." },
    { question: "Does the system calculate overtime automatically?", answer: "Yes. Overtime is calculated based on shift schedules and actual check-in/out times, without manual calculation." },
    { question: "Can attendance mistakes be corrected?", answer: "Yes. Employees can submit a regularization request, which routes to their manager for approval." },
  ],
  relatedLinks: [
    { title: "Leave Management", description: "See how leave requests and attendance work together.", href: "/leave-management" },
    { title: "Payroll Software", description: "How attendance data flows into salary processing.", href: "/payroll-software" },
    { title: "HRMS for Manufacturing", description: "Shift-based, multi-plant attendance for factory teams.", href: "/industries/manufacturing" },
  ],
  ctaTitle: "See attendance tracking set up for your teams",
  ctaSubtitle: "Book a demo and tell us how your teams currently check in — we'll show you the fit.",
};

export default function AttendanceManagementPage() {
  return <FeaturePageTemplate content={content} />;
}
