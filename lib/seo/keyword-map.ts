/**
 * Central keyword map for every core marketing page.
 *
 * This is the single source of truth for what each page is trying to rank
 * for, so two pages never end up competing for the same primary keyword.
 * Page components import their entry and pass it into `buildMetadata()`
 * rather than hardcoding title/description strings inline.
 *
 * Blog/resource articles target their own long-tail keywords and declare
 * metadata alongside their content instead of living in this file.
 */
export interface PageSeoEntry {
  path: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: "navigational" | "informational" | "commercial" | "transactional";
  title: string;
  description: string;
  h1: string;
}

export const keywordMap = {
  home: {
    path: "/",
    primaryKeyword: "Cloud Based HR Software",
    secondaryKeywords: ["HRMS software", "HR and payroll software", "cloud HRMS software"],
    searchIntent: "navigational",
    title: "Cloud Based HR Software — HR, Attendance & Payroll | Manitham HRMS",
    description:
      "Manitham HRMS is cloud based HR software for Indian businesses — employee management, attendance, leave, payroll and performance in one platform. Book a demo.",
    h1: "Cloud based HR software for smarter employee management",
  },
  hrmsSoftware: {
    path: "/hrms-software",
    primaryKeyword: "HRMS Software",
    secondaryKeywords: ["HR management software", "human resource management software", "online HRMS software"],
    searchIntent: "commercial",
    title: "HRMS Software — Complete HR Management System | Manitham HRMS",
    description:
      "See what HRMS software actually does: employee records, attendance, leave, payroll, performance and self-service, unified in one cloud system.",
    h1: "HRMS software that runs your entire employee lifecycle",
  },
  bestHrmsSoftwareIndia: {
    path: "/best-hrms-software-india",
    primaryKeyword: "best HRMS software in India",
    secondaryKeywords: ["best HRMS software", "how to choose HRMS software", "HRMS software comparison India"],
    searchIntent: "commercial",
    title: "Best HRMS Software in India — How to Choose (2026 Guide) | Manitham HRMS",
    description:
      "What actually separates the best HRMS software in India — statutory compliance depth, multi-state support, attendance methods and real pricing transparency.",
    h1: "What actually makes HRMS software \"the best\" for an Indian business",
  },
  hrmsSoftwareIndia: {
    path: "/hrms-software-india",
    primaryKeyword: "Best HRMS Software in India",
    secondaryKeywords: ["HR software India", "cloud HRMS India", "HR management software India", "top HRMS software in India"],
    searchIntent: "commercial",
    title: "Best HRMS Software in India — Built for Indian Payroll & Compliance",
    description:
      "Best HRMS software in India, built around Indian payroll, statutory compliance and multi-state HR needs. PF, ESI, PT and TDS-ready payroll.",
    h1: "Best HRMS software in India, built for how Indian businesses run HR",
  },
  hrmsSoftwareUsa: {
    path: "/hrms-software-usa",
    primaryKeyword: "HRMS Software USA",
    secondaryKeywords: ["HR software USA", "payroll software for US companies", "HRIS software"],
    searchIntent: "commercial",
    title: "HRMS Software USA — Payroll & HR Compliance | Manitham HRMS",
    description:
      "HRMS Software USA, built for US HR teams — FICA, federal and state payroll tax, W-2 filing and multi-state compliance in one cloud platform.",
    h1: "HRMS Software USA, built for payroll and HR compliance",
  },
  hrmsSoftwareUk: {
    path: "/hrms-software-uk",
    primaryKeyword: "HRMS software in the UK",
    secondaryKeywords: ["HR software UK", "payroll software UK", "PAYE payroll software"],
    searchIntent: "commercial",
    title: "HRMS Software in the UK — PAYE & Pension Compliance | Manitham HRMS",
    description:
      "HRMS software for UK businesses — PAYE, National Insurance, HMRC RTI submissions and workplace pension auto-enrolment in one platform.",
    h1: "HRMS software built for UK payroll and PAYE compliance",
  },
  hrmsSoftwareSingapore: {
    path: "/hrms-software-singapore",
    primaryKeyword: "HRMS software in Singapore",
    secondaryKeywords: ["HR software Singapore", "payroll software Singapore", "CPF payroll software"],
    searchIntent: "commercial",
    title: "HRMS Software in Singapore — CPF & IRAS Compliance | Manitham HRMS",
    description:
      "HRMS software for Singapore businesses — CPF contributions, IRAS IR8A reporting and itemised payslips under the Employment Act.",
    h1: "HRMS software built for Singapore payroll and CPF compliance",
  },
  hrmsSoftwareMalaysia: {
    path: "/hrms-software-malaysia",
    primaryKeyword: "HRMS software in Malaysia",
    secondaryKeywords: ["HR software Malaysia", "payroll software Malaysia", "EPF SOCSO payroll software"],
    searchIntent: "commercial",
    title: "HRMS Software in Malaysia — EPF, SOCSO & EIS | Manitham HRMS",
    description:
      "HRMS software for Malaysian businesses — EPF, SOCSO and EIS contributions with PCB/MTD tax deductions calculated automatically.",
    h1: "HRMS software built for Malaysia payroll and statutory compliance",
  },
  hrmsSoftwareAustralia: {
    path: "/hrms-software-australia",
    primaryKeyword: "HRMS software in Australia",
    secondaryKeywords: ["HR software Australia", "payroll software Australia", "Single Touch Payroll software"],
    searchIntent: "commercial",
    title: "HRMS Software in Australia — STP & Superannuation | Manitham HRMS",
    description:
      "HRMS software for Australian businesses — Single Touch Payroll (STP) reporting to the ATO, Superannuation Guarantee and PAYG withholding.",
    h1: "HRMS software built for Australia payroll and STP compliance",
  },
  payrollSoftware: {
    path: "/payroll-software",
    primaryKeyword: "Payroll Software",
    secondaryKeywords: ["payroll management software", "payroll software India", "payroll software for India", "cloud based payroll software", "online payroll software"],
    searchIntent: "commercial",
    title: "Payroll Software — Automated Salary Processing | Manitham HRMS",
    description:
      "Cloud based payroll software for India: salary processing, payslips, PF, ESI, professional tax, TDS, LWF, Form 16 and payroll reports.",
    h1: "Payroll software that gets salaries right, every cycle",
  },
  attendanceManagement: {
    path: "/attendance-management",
    primaryKeyword: "Attendance Management System",
    secondaryKeywords: ["attendance module in HRMS", "attendance management software", "employee attendance software", "biometric attendance software", "GPS attendance software"],
    searchIntent: "commercial",
    title: "Attendance Management System | Manitham HRMS",
    description:
      "Attendance management system with biometric, GPS and web punch-in. Automate shifts, late marks and overtime, and send attendance straight to payroll.",
    h1: "Attendance management system that fits how your teams actually work",
  },
  leaveManagement: {
    path: "/leave-management",
    primaryKeyword: "Leave Management System",
    secondaryKeywords: ["employee leave management system", "online leave management system", "HR leave management system", "leave management software"],
    searchIntent: "commercial",
    title: "Leave Management System for Employees & HR | Manitham HRMS",
    description:
      "Simplify employee leave tracking with Manitham HRMS. Manage leave policies, online requests, approvals, balances, holidays and payroll integration in one leave management system.",
    h1: "Leave Management System for Smarter Employee Leave Tracking",
  },
  employeeManagement: {
    path: "/employee-management",
    primaryKeyword: "Employee Management Software",
    secondaryKeywords: ["employee management system", "employee database management", "employee information system"],
    searchIntent: "commercial",
    title: "Employee Management Software | Manitham HRMS",
    description:
      "Employee management software that gives you a single source of truth for employee records: profiles, documents, departments, designations and org structure, accessible across the employee lifecycle.",
    h1: "Employee management software for one employee record, from onboarding to exit",
  },
  performanceManagement: {
    path: "/performance-management",
    primaryKeyword: "Performance Management Software",
    secondaryKeywords: ["employee performance management software", "performance appraisal software"],
    searchIntent: "commercial",
    title: "Performance Management Software | Manitham HRMS",
    description:
      "Employee performance management software to set goals and KPIs, run structured appraisal cycles, and give managers a simple way to track performance over time.",
    h1: "Performance management software your managers will actually use",
  },
  recruitment: {
    path: "/recruitment",
    primaryKeyword: "Recruitment Management Software",
    secondaryKeywords: ["hiring management software", "recruitment software India", "recruitment software", "applicant tracking system", "ATS software"],
    searchIntent: "commercial",
    title: "Recruitment Management Software (ATS) | Manitham HRMS",
    description:
      "Recruitment management software for Indian hiring teams: post jobs, track candidates, schedule interviews and move new hires straight into onboarding.",
    h1: "Recruitment management software that hands off cleanly into HR",
  },
  employeeSelfService: {
    path: "/employee-self-service",
    primaryKeyword: "Employee Self Service Portal",
    secondaryKeywords: ["ESS portal", "employee self service software", "HR employee portal"],
    searchIntent: "commercial",
    title: "Employee Self Service Portal (ESS) | Manitham HRMS",
    description:
      "An employee self service portal where employees mark attendance, apply for leave, download payslips, update details and raise HR requests from any device.",
    h1: "An employee self service portal: let employees serve themselves, so HR doesn't have to",
  },
  aiWhatsappAssistant: {
    path: "/ai-whatsapp-assistant",
    primaryKeyword: "AI WhatsApp HR Assistant",
    secondaryKeywords: ["WhatsApp HR bot", "AI HRMS assistant", "WhatsApp employee self service"],
    searchIntent: "commercial",
    title: "AI WhatsApp HR Assistant — Ask HR Questions on WhatsApp | Manitham HRMS",
    description:
      "The AI WhatsApp HR Assistant answers leave balance, attendance and payslip questions instantly — no app, no login, just a message.",
    h1: "The AI WhatsApp HR Assistant that gives employees instant answers",
  },
  hrCompliance: {
    path: "/hr-compliance",
    primaryKeyword: "HR Compliance Software",
    secondaryKeywords: ["payroll compliance software", "PF ESI payroll software", "HR compliance India"],
    searchIntent: "commercial",
    title: "HR Compliance Software for India | Manitham HRMS",
    description:
      "HR compliance software to keep statutory payroll compliance organized — PF, ESI, professional tax and TDS calculations, filings support and audit-ready records in one place.",
    h1: "HR compliance software that doesn't live in a spreadsheet",
  },
  pricing: {
    path: "/pricing",
    primaryKeyword: "HRMS pricing",
    secondaryKeywords: ["HR software pricing", "payroll software pricing India"],
    searchIntent: "transactional",
    title: "Pricing | Manitham HRMS",
    description:
      "Manitham HRMS plans scale from small teams to large multi-location organizations. Talk to sales for a quote based on your headcount and modules.",
    h1: "Simple pricing that scales with your team",
  },
  about: {
    path: "/about",
    primaryKeyword: "Manitham HRMS company",
    secondaryKeywords: ["about Manitham HRMS"],
    searchIntent: "navigational",
    title: "About Us | Manitham HRMS",
    description: "Manitham HRMS builds HR software for Indian businesses. Learn what we're building and why.",
    h1: "We build HR software for how Indian businesses actually work",
  },
  contact: {
    path: "/contact",
    primaryKeyword: "contact Manitham HRMS",
    secondaryKeywords: ["HRMS support contact", "talk to sales HRMS"],
    searchIntent: "transactional",
    title: "Contact Us | Manitham HRMS",
    description: "Get in touch with the Manitham HRMS team for sales queries, product questions or support.",
    h1: "Talk to our team",
  },
  bookDemo: {
    path: "/book-demo",
    primaryKeyword: "book HRMS demo",
    secondaryKeywords: ["HRMS free trial", "HR software demo"],
    searchIntent: "transactional",
    title: "Book a Free Demo | Manitham HRMS",
    description:
      "See Manitham HRMS on a live call with your own use case. Book a free, no-obligation demo with our product team.",
    h1: "Book your free Manitham HRMS demo",
  },
  industries: {
    path: "/industries",
    primaryKeyword: "HRMS for Industries",
    secondaryKeywords: ["HR software for industries"],
    searchIntent: "commercial",
    title: "HRMS for Industries — HR Software by Sector | Manitham HRMS",
    description:
      "See how Manitham's HRMS for industries adapts to small businesses, startups and manufacturing teams — the workflows, compliance needs and features that matter for each.",
    h1: "HRMS for industries — built around how yours runs HR",
  },
  industrySmallBusiness: {
    path: "/industries/small-business",
    primaryKeyword: "HRMS Software for Small Business",
    secondaryKeywords: ["HR software for small business", "employee management software for small business"],
    searchIntent: "commercial",
    title: "HRMS Software for Small Business | Manitham HRMS",
    description:
      "HRMS software for small business: replace spreadsheets for attendance, leave and payroll without the overhead of enterprise HR tools.",
    h1: "HRMS software for small business, built for how you run HR",
  },
  industryStartups: {
    path: "/industries/startups",
    primaryKeyword: "HR Software for Startups",
    secondaryKeywords: ["HR software for startups", "payroll software for startups"],
    searchIntent: "commercial",
    title: "HR Software for Startups | Manitham HRMS",
    description:
      "HR software for startups that scales with you — from your first ten hires to your first HR team, without switching systems along the way.",
    h1: "HR software for startups, built to grow at startup speed",
  },
  industryManufacturing: {
    path: "/industries/manufacturing",
    primaryKeyword: "HR Software for Manufacturing",
    secondaryKeywords: ["HR software for manufacturing", "attendance software for factory workers", "biometric attendance for manufacturing"],
    searchIntent: "commercial",
    title: "HR Software for Manufacturing | Manitham HRMS",
    description:
      "HR software for manufacturing teams: shift-based attendance, biometric punch on the shop floor, contract labour records and multi-plant payroll.",
    h1: "HR software for manufacturing — built for shift-floor realities, not just office HR",
  },
  resources: {
    path: "/resources",
    primaryKeyword: "HRMS guides and resources",
    secondaryKeywords: ["HR software resources", "payroll guides India"],
    searchIntent: "informational",
    title: "HR & Payroll Resources | Manitham HRMS",
    description:
      "Practical guides on HRMS, payroll processing and attendance management for Indian HR teams, written by the Manitham HRMS product team.",
    h1: "Guides on HRMS, payroll and attendance for Indian HR teams",
  },
} as const satisfies Record<string, PageSeoEntry>;

export type KeywordMapKey = keyof typeof keywordMap;
