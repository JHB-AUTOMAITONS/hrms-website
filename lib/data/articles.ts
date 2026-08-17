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
];

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return articles.find((article) => article.slug === slug);
}
