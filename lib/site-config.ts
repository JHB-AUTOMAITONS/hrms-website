export const siteConfig = {
  name: "Manitham HRMS",
  shortName: "Manitham",
  legalName: "Manitham HRMS",
  tagline: "Complete HRMS software for smarter employee management",
  // Placeholder production domain — update once the real domain is finalized.
  // Every canonical/OG/sitemap URL in the app derives from this single constant.
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.manithamhrms.com",
  description:
    "Manitham HRMS is a cloud-based HR management system for Indian businesses — employee management, attendance, leave, payroll, performance, recruitment and employee self-service in one platform.",
  locale: "en_IN",
  contact: {
    email: "info@hrms.work",
    salesEmail: "info@hrms.work",
    phoneDisplay: "+91 86829 27187",
    phoneHref: "+918682927187",
    whatsappHref: "https://wa.me/918682927187",
  },
  social: {
    linkedin: "",
    twitter: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
