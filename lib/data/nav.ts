export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export const productLinks: NavLink[] = [
  { label: "HRMS Overview", href: "/hrms-software", description: "The full platform at a glance" },
  { label: "Employee Management", href: "/employee-management", description: "Records, documents, org structure" },
  { label: "Attendance", href: "/attendance-management", description: "Biometric, GPS and mobile punch-in" },
  { label: "Leave Management", href: "/leave-management", description: "Policies, requests, approvals" },
  { label: "Payroll", href: "/payroll-software", description: "Salary, PF, ESI, PT and TDS" },
  { label: "Performance", href: "/performance-management", description: "Goals, reviews, appraisals" },
  { label: "Recruitment", href: "/recruitment", description: "Job posts, pipeline, hiring" },
  { label: "Employee Self Service", href: "/employee-self-service", description: "Mobile-first ESS portal" },
  { label: "HR Compliance", href: "/hr-compliance", description: "Statutory payroll compliance" },
  { label: "AI WhatsApp Assistant", href: "/ai-whatsapp-assistant", description: "AI-powered HR answers on WhatsApp" },
];

export const industryLinks: NavLink[] = [
  { label: "Small Business", href: "/industries/small-business" },
  { label: "Startups", href: "/industries/startups" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
];

export const companyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const resourceLinks: NavLink[] = [
  { label: "All Resources", href: "/resources" },
  { label: "What is HRMS Software?", href: "/resources/what-is-hrms-software" },
  { label: "Payroll Processing Guide", href: "/resources/payroll-processing-guide-india" },
  { label: "Attendance Tracking Guide", href: "/resources/employee-attendance-tracking-guide" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];
