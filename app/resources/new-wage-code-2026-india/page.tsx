import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, H2, H3, P, UL } from "@/components/templates/ArticleLayout";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticleBySlug } from "@/lib/data/articles";
import { siteConfig } from "@/lib/site-config";

const meta = getArticleBySlug("new-wage-code-2026-india")!;

export const metadata: Metadata = buildMetadata({
  path: `/resources/${meta.slug}`,
  primaryKeyword: "new wage code 2026",
  secondaryKeywords: ["labour codes India", "wage definition CTC", "Code on Wages"],
  searchIntent: "informational",
  title: `${meta.title} | ${siteConfig.name}`,
  description: meta.excerpt,
  h1: meta.title,
});

const faqs = [
  {
    question: "Has the new wage code actually been implemented in India?",
    answer:
      "The four labour codes, including the Code on Wages, were notified as taking legal effect from 21 November 2025, consolidating around 29 earlier central labour laws. Several state governments were still notifying their own rules under the codes after that date, so confirm the current rules for your specific state and industry via the Ministry of Labour and Employment (labour.gov.in) rather than assuming full rollout is complete everywhere.",
  },
  {
    question: "What does the new wage code actually change about how 'wages' is defined?",
    answer:
      "It sets a standardized wage definition requiring basic pay plus dearness allowance to make up at least 50% of an employee's total remuneration. If other allowances push above that 50% threshold, the excess is added back into 'wages' for statutory calculations like PF and gratuity. It isn't a new tax or deduction — it's a rule about how CTC must be structured.",
  },
  {
    question: "How does the wage code affect PF and gratuity calculations?",
    answer:
      "Both PF and gratuity are calculated on basic pay plus DA. Because the new wage definition raises the effective basic pay for salary structures that previously kept basic low and allowances high, PF contributions (employee and employer share) and gratuity liability can increase for those employees, even though their CTC hasn't changed.",
  },
  {
    question: "How should employers prepare their payroll for the new wage code?",
    answer:
      "Review existing salary structures for how much of CTC currently sits in basic pay plus DA, restructure components that fall below the 50% threshold in line with current guidance for your state, and recalculate PF and gratuity liability under the revised wage figures before rolling changes out — ideally before payroll reflects them, not after.",
  },
  {
    question: "Will my take-home salary change because of the new wage code?",
    answer:
      "It can. Because a larger share of CTC may now be routed into statutory deductions rather than paid out directly, monthly take-home pay can decrease even though total CTC is unchanged. The size of the effect depends entirely on how your current salary structure is split between basic pay and other allowances — employees with already-compliant structures may see little or no change.",
  },
  {
    question: "Does the new wage code apply to every employer and employee the same way?",
    answer:
      "Applicability, transition timelines and specific thresholds can vary by establishment type, employee category and state, since several states were still finalizing their own rules after the central notification. Treat any general summary, including this one, as a working guide and confirm the current requirements for your specific establishment before making structural payroll changes.",
  },
  {
    question: "Where can employers verify the official status of the wage code?",
    answer:
      "The Ministry of Labour and Employment (labour.gov.in) publishes official notifications and the codes' text, and the Employees' Provident Fund Organisation (epfindia.gov.in) covers PF-specific implications. Check these directly, or your state labour department's notifications, rather than relying only on secondary summaries for compliance decisions.",
  },
];

export default function NewWageCode2026Article() {
  return (
    <ArticleLayout
      meta={meta}
      faqs={faqs}
      relatedLinks={[
        { title: "HR Compliance", description: "How Manitham HRMS tracks statutory compliance day to day.", href: "/hr-compliance" },
        { title: "Payroll Software", description: "How salary structures and statutory deductions are calculated.", href: "/payroll-software" },
        { title: "HRMS Software in India", description: "The full platform built around Indian payroll and compliance.", href: "/hrms-software-india" },
      ]}
    >
      <P>
        India&apos;s four labour codes — the Code on Wages, the Industrial Relations Code, the Code on Social
        Security, and the Occupational Safety, Health and Working Conditions Code — consolidate close to thirty
        older labour laws into a single framework. They took effect from November 2025, and the part that affects
        payroll most directly is a single change: a new, standardized definition of &ldquo;wages.&rdquo;
      </P>
      <P>
        This isn&apos;t a new tax or a new deduction. It&apos;s a rule about how CTC has to be structured, and it has a
        knock-on effect on PF, gratuity and take-home pay. Rules under this framework are still being finalized at
        the state level in places, so treat this as a working guide and confirm the current position for your
        state and industry before making structural changes.
      </P>

      <H2>The core change: the 50% wage rule</H2>
      <P>
        Under the new definition, &ldquo;wages&rdquo; must include at least 50% of an employee&apos;s total remuneration as
        basic pay plus dearness allowance. If the remaining allowances — HRA, special allowance, and similar
        components — push above 50% of CTC, the excess is added back into &ldquo;wages&rdquo; for the purpose of
        statutory calculations. In effect, a CTC that&apos;s heavily weighted toward allowances to keep basic pay
        (and therefore PF) low no longer works the way it used to.
      </P>

      <H2>What this actually changes for payroll</H2>
      <H3>Provident Fund</H3>
      <P>
        PF contributions are calculated on basic pay plus DA. Since the new wage definition raises the effective
        basic pay for many salary structures, PF contributions — both employee and employer share — increase
        correspondingly for employees whose CTC was previously structured around a low basic component.
      </P>
      <H3>Gratuity</H3>
      <P>
        Gratuity is calculated using basic pay plus DA as well, so the same restructuring that affects PF also
        increases gratuity liability for employers, since it&apos;s based on a higher wage figure than before.
      </P>
      <H3>Take-home pay</H3>
      <P>
        Because a larger share of CTC is now routed into statutory deductions rather than paid out directly,
        monthly take-home pay can go down even though CTC hasn&apos;t changed — an outcome that catches employees
        off guard if HR hasn&apos;t communicated it ahead of a payroll change.
      </P>

      <H2>What HR and payroll teams need to do</H2>
      <UL>
        <li>Review existing salary structures for how much of CTC currently sits in basic pay plus DA</li>
        <li>Restructure salary components that fall below the 50% threshold, in line with current guidance for your state</li>
        <li>Recalculate PF and gratuity liability under the revised wage figures before rolling out changes</li>
        <li>Communicate take-home pay changes to employees before payroll reflects them, not after</li>
        <li>Keep salary structure logic centralized, so the rule is applied consistently rather than case by case</li>
      </UL>

      <H2>How this fits into Manitham HRMS</H2>
      <P>
        Salary structures in Manitham HRMS are configured centrally, so a wage-definition change like this is
        applied consistently across every employee rather than adjusted one payroll run at a time. Statutory
        deductions — PF, ESI, professional tax and TDS — are then calculated automatically against the current
        structure. See how this works in{" "}
        <Link href="/payroll-software" className="font-medium text-brand-600 hover:underline">
          payroll software
        </Link>{" "}
        or how compliance tracking works more broadly in{" "}
        <Link href="/hr-compliance" className="font-medium text-brand-600 hover:underline">
          HR compliance
        </Link>
        .
      </P>
    </ArticleLayout>
  );
}
