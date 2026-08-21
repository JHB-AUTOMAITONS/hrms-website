export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedDate: string;
  readTime: string;
}

/**
 * Index-level metadata for every published article, used by the /resources
 * listing page and for internal links. Each article's own page file holds
 * the full content and builds its <title>/<meta description> from this
 * same entry, so the two never drift apart.
 */
export const articles: ArticleMeta[] = [
  {
    slug: "what-is-hrms-software",
    title: "What Is HRMS Software? A Practical Guide",
    excerpt: "What HRMS actually means, what it typically includes, and how it differs from single-purpose HR tools.",
    category: "HRMS",
    publishedDate: "2026-08-01",
    readTime: "6 min read",
  },
  {
    slug: "payroll-processing-guide-india",
    title: "How Payroll Processing Works in India",
    excerpt: "A walkthrough of Indian payroll processing — salary structures, PF, ESI, professional tax and TDS.",
    category: "Payroll",
    publishedDate: "2026-08-01",
    readTime: "8 min read",
  },
  {
    slug: "employee-attendance-tracking-guide",
    title: "Employee Attendance Tracking: Biometric vs GPS vs Manual",
    excerpt: "How the three common attendance tracking methods compare, and which fits which type of team.",
    category: "Attendance",
    publishedDate: "2026-08-01",
    readTime: "6 min read",
  },
  {
    slug: "leave-policy-guide-india",
    title: "How to Set Up an Employee Leave Policy in India",
    excerpt: "The building blocks of a clear leave policy — leave types, accrual, carry-forward and approvals.",
    category: "HR",
    publishedDate: "2026-08-01",
    readTime: "7 min read",
  },
  {
    slug: "best-applicant-tracking-software-india",
    title: "Best Applicant Tracking Software in India (2026)",
    excerpt: "What an applicant tracking system actually does, what to look for, and how ATS fits into a full HRMS.",
    category: "Recruitment",
    publishedDate: "2026-08-21",
    readTime: "6 min read",
  },
  {
    slug: "field-staff-tracking-software-india",
    title: "Best Field Staff Tracking Software in India",
    excerpt: "How GPS attendance and field staff tracking works, and what to check before choosing a tool.",
    category: "Attendance",
    publishedDate: "2026-08-21",
    readTime: "6 min read",
  },
  {
    slug: "best-performance-appraisal-software-india",
    title: "Top Performance Appraisal Software in India (2026)",
    excerpt: "What performance appraisal software should handle, and how to pick one that managers will actually use.",
    category: "Performance",
    publishedDate: "2026-08-21",
    readTime: "6 min read",
  },
  {
    slug: "new-wage-code-2026-india",
    title: "New Wage Code 2026: What It Means for Payroll & Compliance",
    excerpt: "How India's labour codes change the wage definition, CTC structuring and statutory deductions.",
    category: "Compliance",
    publishedDate: "2026-08-21",
    readTime: "7 min read",
  },
  {
    slug: "epf-scheme-2026-hr-guide",
    title: "EPF Scheme 2026: Key Payroll and Compliance Changes for HR Teams",
    excerpt: "What HR and payroll teams need to track as EPFO rules evolve — contributions, forms and filings.",
    category: "Compliance",
    publishedDate: "2026-08-21",
    readTime: "6 min read",
  },
  {
    slug: "hra-exemption-guide",
    title: "HRA Exemption: How It's Calculated and What HR Teams Should Know",
    excerpt: "The HRA exemption formula under Section 10(13A), worked examples, and what HR needs from employees.",
    category: "Payroll",
    publishedDate: "2026-08-21",
    readTime: "7 min read",
  },
];

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return articles.find((article) => article.slug === slug);
}
