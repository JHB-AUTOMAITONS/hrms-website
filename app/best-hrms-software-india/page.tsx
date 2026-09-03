import type { Metadata } from "next";
import { ShieldCheck, Building2, Fingerprint, Lock, IndianRupee, LifeBuoy } from "lucide-react";
import { FeaturePageTemplate, type FeaturePageContent } from "@/components/templates/FeaturePageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.bestHrmsSoftwareIndia);

const content: FeaturePageContent = {
  path: keywordMap.bestHrmsSoftwareIndia.path,
  breadcrumbLabel: "Best HRMS Software in India",
  heroEyebrow: "Buyer's Guide",
  h1: keywordMap.bestHrmsSoftwareIndia.h1,
  heroSubtitle:
    "\"Best\" depends entirely on what your business actually needs from HR software. Here's what separates strong HRMS software from a good sales demo, and where to look closely before you commit.",
  highlights: ["Compliance depth", "Multi-state support", "Real pricing", "Support you can reach"],
  mockupKind: "compliance",
  overviewTitle: "Every HRMS demo looks good. Evaluate past the demo.",
  overviewParagraphs: [
    "Most HRMS software looks nearly identical in a 30-minute sales call — clean dashboards, the same list of modules, similar promises. The differences that actually matter for an Indian business show up later: whether professional tax is calculated correctly for an employee who moved states mid-year, whether support responds in hours or days, whether the pricing quote you got matches what you're actually billed a year in.",
    "This isn't a ranked list of vendors — that changes constantly and depends on your specific requirements. It's the set of questions worth asking of any HRMS software you're evaluating, including Manitham HRMS, before you sign a contract.",
  ],
  overviewBullets: [
    "How deep does statutory compliance actually go — PF, ESI, professional tax, TDS — versus just PF and a spreadsheet template?",
    "Does it handle employees across multiple states and locations without manual workarounds?",
    "Does attendance match how your teams actually work — office, field or shop floor?",
    "Is pricing a clear quote, or a low headline number with modules priced separately later?",
    "What happens when something breaks — is support a ticket queue or a person who responds?",
  ],
  capabilitiesTitle: "What to check before you commit",
  capabilities: [
    { icon: ShieldCheck, title: "Statutory Compliance Depth", description: "Ask for PF, ESI, professional tax and TDS specifically — not just \"payroll compliance\" as a marketing line." },
    { icon: Building2, title: "Multi-State & Multi-Location Support", description: "Professional tax rules vary by state. Confirm the software applies the correct slab automatically as employees move." },
    { icon: Fingerprint, title: "Attendance That Matches Your Team", description: "Biometric for a fixed office is a different problem from GPS check-in for field staff. Check both are actually supported, not just one." },
    { icon: Lock, title: "Data Ownership & Security", description: "Ask where employee data is hosted, who can export it, and what happens to it if you switch systems later." },
    { icon: IndianRupee, title: "Transparent, No-Surprise Pricing", description: "A quote based on headcount and modules you'll actually use — not a low per-seat number that grows once you're locked in." },
    { icon: LifeBuoy, title: "Support You Can Actually Reach", description: "During your first payroll cycle is not when you want to discover support means a ticket queue with a 3-day SLA." },
  ],
  benefitsTitle: "Where Manitham HRMS fits against this checklist",
  benefits: [
    { title: "Built around Indian compliance from day one", description: "PF, ESI, professional tax and TDS aren't bolted on — they're core to how payroll is calculated, including state-by-state professional tax." },
    { title: "Multi-location by design", description: "Employees across states and offices are managed from one account, with location-aware statutory calculations." },
    { title: "Biometric, GPS and web attendance together", description: "Office, field and shop-floor staff are covered in the same system, not a separate tool for each." },
    { title: "Quoted pricing, not tiered surprises", description: "Pricing is based on your actual headcount and modules — talk to sales for a quote rather than guessing from a pricing page." },
  ],
  faqs: [
    { question: "Is the most expensive HRMS software automatically the best one?", answer: "No. Price often reflects enterprise features a small team doesn't need. Match the software to your actual compliance and headcount requirements, not the highest-tier plan." },
    { question: "Does \"best\" mean the same thing for a 20-person company and a 2,000-person company?", answer: "No. A 20-person team usually needs straightforward compliance and self-service; a 2,000-person, multi-location company needs deeper approval workflows and reporting. Evaluate against your own scale, not a generic ranking." },
    { question: "What should I actually ask in a demo?", answer: "Ask the vendor to walk through a real scenario specific to you — an employee changing states, a field-staff attendance edge case, a payroll correction — instead of watching the standard demo script." },
    { question: "Is Manitham HRMS a fit for a small business just moving off spreadsheets?", answer: "Yes — many teams start with core HR, attendance and leave, then add payroll, performance or recruitment once they're ready." },
    { question: "How is Manitham HRMS priced?", answer: "Pricing is based on employee count and the modules you need. Talk to sales for a quote based on your specific requirements." },
  ],
  relatedLinks: [
    { title: "HRMS Software in India", description: "The full platform built around Indian payroll and compliance.", href: "/hrms-software-india" },
    { title: "Payroll Software", description: "How statutory payroll calculations actually work.", href: "/payroll-software" },
    { title: "Pricing", description: "See plan tiers and what's included at each level.", href: "/pricing" },
    { title: "Best HRMS Software for Small Business", description: "The same evaluation checklist, sized for a small team.", href: "/resources/best-hrms-software-for-small-business" },
  ],
  ctaTitle: "See how Manitham HRMS holds up against this checklist",
  ctaSubtitle: "Book a demo and run through these evaluation criteria yourself, with your own scenarios.",
};

export default function BestHrmsSoftwareIndiaPage() {
  return <FeaturePageTemplate content={content} />;
}
