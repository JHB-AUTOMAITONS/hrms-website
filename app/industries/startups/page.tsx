import type { Metadata } from "next";
import { Rocket, UserPlus, LineChart, Wallet, Smartphone, GitBranch } from "lucide-react";
import { IndustryPageTemplate, type IndustryPageContent } from "@/components/templates/IndustryPageTemplate";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";

export const metadata: Metadata = buildMetadata(keywordMap.industryStartups);

const content: IndustryPageContent = {
  path: keywordMap.industryStartups.path,
  breadcrumbLabel: "Startups",
  h1: keywordMap.industryStartups.h1,
  heroSubtitle:
    "Startups outgrow their first HR setup fast — what worked for 8 people on a spreadsheet breaks down at 40. Manitham HRMS is built to scale with you instead of forcing a system change mid-growth.",
  mockupKind: "recruitment",
  challengesTitle: "Where startup HR hits a wall",
  challenges: [
    { title: "Hiring outpaces HR process", description: "You're hiring faster than you can track who joined, what they signed, and when their leave started accruing." },
    { title: "No dedicated HR person yet", description: "A founder or ops lead is handling HR alongside everything else, with no time for manual admin." },
    { title: "Payroll becomes real, fast", description: "Once you're running statutory payroll, PF/ESI/TDS mistakes are costly and hard to unwind." },
    { title: "Performance reviews get skipped", description: "Without a lightweight system, goal-setting and reviews are the first thing to slip." },
  ],
  featuresTitle: "What growing teams need most",
  featuresSubtitle: "Modules that matter as headcount and hiring both accelerate.",
  features: [
    { icon: UserPlus, title: "Recruitment", description: "Track candidates through your pipeline as hiring ramps up.", href: "/recruitment" },
    { icon: Rocket, title: "Employee Management", description: "New hires land in one system from day one, not a spreadsheet.", href: "/employee-management" },
    { icon: Wallet, title: "Payroll", description: "Get PF, ESI and TDS right from your very first statutory payroll run.", href: "/payroll-software" },
    { icon: LineChart, title: "Performance", description: "Lightweight goal-setting that doesn't need a dedicated HR team to run.", href: "/performance-management" },
    { icon: Smartphone, title: "Self-Service", description: "New hires self-serve on leave and payslips instead of pinging a founder.", href: "/employee-self-service" },
    { icon: GitBranch, title: "HR Automation", description: "Approval workflows that don't need someone manually chasing every request.", href: "/hrms-software" },
  ],
  workflowTitle: "How startups typically roll this out",
  workflowSteps: [
    { title: "Centralize hiring and employee records", description: "Move candidate tracking and new-hire data into one system as hiring accelerates." },
    { title: "Turn on payroll before it gets messy", description: "Set up statutory payroll early, before manual PF/ESI/TDS tracking becomes unmanageable." },
    { title: "Add performance tracking as teams form", description: "Introduce lightweight goals and reviews once you have managers running teams, not just individual contributors." },
  ],
  faqs: [
    { question: "We're only 15 people — is this too early?", answer: "Not necessarily. Many startups set up core HR and recruitment early specifically so they don't have to migrate systems later while scaling fast." },
    { question: "Can Manitham HRMS handle a fast-growing headcount?", answer: "Yes, the platform is built to add employees, modules and locations as you scale, without switching systems." },
    { question: "We don't have a dedicated HR person — is this still usable?", answer: "Yes. Much of the platform is designed so employees self-serve on routine tasks, reducing the admin load on whoever is managing HR alongside other responsibilities." },
    { question: "Can we start with recruitment and add payroll later?", answer: "Yes, modules can be adopted in the order that matches your priorities." },
  ],
  relatedLinks: [
    { title: "Recruitment", description: "See how candidate tracking works as hiring ramps up.", href: "/recruitment" },
    { title: "Small Business", description: "How the setup differs for smaller, steadier teams.", href: "/industries/small-business" },
    { title: "HRMS Software", description: "The full platform startups grow into.", href: "/hrms-software" },
  ],
  ctaTitle: "Set up HR that scales with your hiring plan",
  ctaSubtitle: "Book a demo and tell us where you are today and where you're headed.",
};

export default function StartupsPage() {
  return <IndustryPageTemplate content={content} />;
}
