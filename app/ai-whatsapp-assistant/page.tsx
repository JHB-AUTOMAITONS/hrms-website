import type { Metadata } from "next";
import { Bot, MessageCircle, CalendarDays, Receipt, Clock, HelpCircle } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.aiWhatsappAssistant);

const content: FeaturePageContent = {
  path: keywordMap.aiWhatsappAssistant.path,
  breadcrumbLabel: "AI WhatsApp Assistant",
  heroEyebrow: "AI-Powered",
  h1: keywordMap.aiWhatsappAssistant.h1,
  heroSubtitle:
    "No app to open, no portal to log into — employees message Manitham HRMS's WhatsApp number and get an instant, accurate answer. Leave balance, attendance, payslips and policy questions, answered by AI in seconds.",
  highlights: ["AI-powered answers", "No app or login", "Leave, attendance & payslips", "Available 24/7"],
  mockupKind: "whatsapp",
  overviewTitle: "HR support that lives where employees already are",
  overviewParagraphs: [
    "Most employees don't want to open another app to check a leave balance — they want to ask, the way they'd ask a colleague. The AI WhatsApp Assistant connects directly to your Manitham HRMS data, so employees can message your company's WhatsApp number in plain language and get a real answer immediately, not a support ticket.",
    "It's built on the same employee record as the rest of the platform. Whatever the assistant reports — a leave balance, an attendance status, a payslip figure — is exactly what's in the system, not a stale copy or a manual lookup someone has to run.",
  ],
  overviewBullets: [
    "Ask leave balance, attendance status or payroll questions in plain language",
    "Apply for leave directly from a WhatsApp message, routed to the right manager",
    "Get payslips and tax documents sent as a WhatsApp attachment",
    "Answers pull from live HRMS data — never a stale or manually maintained copy",
    "No separate login — verified against the employee's registered number",
  ],
  capabilitiesTitle: "What employees can ask on WhatsApp",
  capabilities: [
    { icon: CalendarDays, title: "Leave Balance & Requests", description: "Check casual, sick and earned leave balances, or apply for leave, without opening the portal." },
    { icon: Clock, title: "Attendance Status", description: "Ask whether today's check-in was recorded, or review recent attendance history." },
    { icon: Receipt, title: "Payslips & Tax Documents", description: "Request the latest payslip or Form 16 and receive it directly as a WhatsApp attachment." },
    { icon: HelpCircle, title: "Policy Questions", description: "Ask about leave policy, holiday calendars or company HR policies and get a direct answer." },
    { icon: Bot, title: "AI-Powered Understanding", description: "Employees ask in their own words — the assistant understands intent, not just fixed commands." },
    { icon: MessageCircle, title: "Always Available", description: "No office hours — the assistant answers whenever an employee messages, day or night." },
  ],
  benefitsTitle: "Why an AI assistant on WhatsApp, specifically",
  benefits: [
    { title: "Zero adoption curve", description: "Employees already have WhatsApp open. There's no new app to install or password to remember." },
    { title: "Fewer routine requests reach HR", description: "The questions that fill up an HR inbox — leave balance, payslip copies — get answered instantly instead." },
    { title: "Same data, one more channel", description: "The assistant reads from the same employee record as self-service and payroll — answers are always current." },
    { title: "Useful for field and shop-floor staff too", description: "Employees without regular desktop or app access still get the same self-service capability, over WhatsApp." },
  ],
  faqs: [
    { question: "Do employees need to install anything?", answer: "No. Employees message your company's existing WhatsApp number — there's nothing to install and no separate account to create." },
    { question: "How does it know which employee is messaging?", answer: "The assistant verifies the sender against each employee's registered mobile number already on file in the HRMS." },
    { question: "Can employees apply for leave through WhatsApp?", answer: "Yes. A leave request sent over WhatsApp is submitted the same way as one from the self-service portal, and routed to the employee's manager for approval." },
    { question: "Is the data the assistant gives out live?", answer: "Yes. The assistant reads directly from the same employee record used across attendance, leave and payroll — not a separate or manually updated copy." },
    { question: "What if the assistant doesn't understand a question?", answer: "It asks a clarifying follow-up, the same way a person would, rather than returning an error." },
    { question: "Does this replace the employee self-service portal?", answer: "No — it's an additional channel. The web and mobile self-service portal is still there for anything better suited to a screen." },
  ],
  relatedLinks: [
    { title: "Employee Self Service", description: "The web and mobile portal this assistant complements.", href: "/employee-self-service" },
    { title: "Attendance Management", description: "Where the attendance data behind WhatsApp answers comes from.", href: "/attendance-management" },
    { title: "Payroll Software", description: "How payslips and payroll data are generated and stored.", href: "/payroll-software" },
  ],
  ctaTitle: "See the AI WhatsApp Assistant answer real questions",
  ctaSubtitle: "Book a demo and we'll show you what employees actually see on WhatsApp.",
};

export default function AiWhatsappAssistantPage() {
  return <FeaturePageTemplate content={content} />;
}
