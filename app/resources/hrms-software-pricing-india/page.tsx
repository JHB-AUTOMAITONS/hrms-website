import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, H2, P, UL } from "@/components/templates/ArticleLayout";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticleBySlug } from "@/lib/data/articles";
import { siteConfig } from "@/lib/site-config";

const meta = getArticleBySlug("hrms-software-pricing-india")!;

export const metadata: Metadata = buildMetadata({
  path: `/resources/${meta.slug}`,
  primaryKeyword: "hrms pricing",
  secondaryKeywords: ["hr software pricing", "hrms cost", "payroll software price", "hr software pricing india"],
  searchIntent: "commercial",
  title: `${meta.title} | ${siteConfig.name}`,
  description: meta.excerpt,
  h1: meta.title,
});

const faqs = [
  {
    question: "What pricing models do HRMS vendors in India typically use?",
    answer:
      "Two common approaches: a flat monthly fee regardless of headcount (simpler to budget, more common for very small teams), or a per-employee-per-month rate that scales with team size (more common past 20-30 employees, since you're not paying for capacity you don't use yet). Most vendors also price in headcount bands rather than a strictly linear per-head rate.",
  },
  {
    question: "Is per-employee pricing better than a fixed subscription?",
    answer:
      "It depends on your headcount trajectory. Per-employee pricing scales fairly as you grow or shrink, which suits growing businesses. A flat fee can work out cheaper for a very small, stable team, since the cost doesn't change whether you have 10 or 15 employees on that plan. Compare both against your actual headcount plans, not just the headline rate.",
  },
  {
    question: "Are there implementation or migration costs on top of the subscription?",
    answer:
      "This varies by vendor and by how much historical data needs to be migrated. Some HRMS platforms are designed for self-serve setup with no separate implementation fee; others, particularly for larger or multi-location rollouts, may charge for dedicated onboarding support. Ask specifically whether setup and data migration are included before comparing quotes.",
  },
  {
    question: "Do payroll, attendance, recruitment and performance modules cost extra?",
    answer:
      "Often, yes. Core HR, attendance and leave are commonly included in a base tier, while payroll with statutory compliance (PF, ESI, professional tax, TDS), performance management and recruitment (ATS) are frequently priced as add-ons or reserved for higher tiers. Confirm exactly which modules are in your quoted price versus billed separately.",
  },
  {
    question: "What hidden costs should I watch for in an HRMS quote?",
    answer:
      "Ask specifically about: a minimum employee count or minimum monthly spend, whether support is included at every tier or only above a certain plan, what happens to pricing if headcount drops mid-contract, and whether biometric or GPS attendance features are gated to a higher plan than basic web punch-in.",
  },
  {
    question: "Do HRMS vendors in India offer free trials or free plans?",
    answer:
      "Some do, for a limited time or at a limited employee count — this varies by vendor and changes over time, so check the current offer directly on a vendor's pricing page rather than assuming a specific free tier exists. Manitham HRMS does not publish a fixed public rate card; current terms and any trial availability are confirmed when you talk to sales.",
  },
  {
    question: "How do I calculate the total cost of ownership for an HRMS?",
    answer:
      "Add up the subscription cost at your actual headcount, any implementation or migration fees, the modules you'll actually use (not just the base tier), and support costs if they're tiered separately. Then weigh that against the cost of the manual work — reconciling spreadsheets, re-entering data between disconnected tools — the software is meant to remove.",
  },
];

export default function HrmsSoftwarePricingIndiaArticle() {
  return (
    <ArticleLayout
      meta={meta}
      faqs={faqs}
      relatedLinks={[
        { title: "Pricing", description: "See Manitham HRMS plan tiers and what's included.", href: "/pricing" },
        { title: "Best HRMS Software in India", description: "What else to evaluate beyond price.", href: "/best-hrms-software-india" },
        { title: "Best HRMS Software for Small Business", description: "The checklist sized for a small team's budget and needs.", href: "/resources/best-hrms-software-for-small-business" },
      ]}
    >
      <P>
        Most HRMS pricing pages show a per-employee number and stop there, which makes comparing vendors feel
        simple right up until the actual quote arrives with modules, add-ons and a minimum seat count attached.
        Here&apos;s what actually goes into HRMS pricing in India, so a quote makes sense instead of feeling
        like a surprise.
      </P>

      <H2>The two common pricing models</H2>
      <P>
        Most HRMS vendors price one of two ways: a flat monthly fee regardless of headcount (common for very
        small teams, since it&apos;s simpler to budget), or a per-employee-per-month rate that scales with your
        team size (more common past 20-30 employees, since it scales fairly as you grow or shrink).
        Per-employee pricing is more common for growing Indian businesses because it means you&apos;re not
        paying for capacity you don&apos;t use yet.
      </P>

      <H2>What actually changes the price</H2>
      <UL>
        <li>
          <strong>Employee count.</strong> The most direct driver — most vendors price in bands (e.g. up to 50,
          up to 200) rather than a linear per-head rate.
        </li>
        <li>
          <strong>Which modules you need.</strong> Core HR, attendance and leave are usually the base tier.
          Payroll with statutory compliance (PF, ESI, professional tax, TDS), performance management and
          recruitment (ATS) are commonly priced as add-ons or higher tiers.
        </li>
        <li>
          <strong>Attendance method.</strong> Biometric device integration and GPS-based mobile check-in are
          sometimes gated to a higher plan than simple web punch-in.
        </li>
        <li>
          <strong>Support level.</strong> Priority support and dedicated onboarding are usually reserved for
          higher tiers or enterprise/multi-location plans.
        </li>
        <li>
          <strong>Multi-location or multi-entity needs.</strong> Managing payroll across multiple states or
          legal entities from one account is typically an enterprise-tier requirement.
        </li>
      </UL>

      <H2>Questions worth asking before you compare quotes</H2>
      <UL>
        <li>Is this price per employee per month, or a flat fee regardless of headcount?</li>
        <li>Does the quoted price include statutory payroll compliance, or is that a separate add-on?</li>
        <li>Is there a minimum employee count or minimum monthly spend?</li>
        <li>What happens to pricing if headcount drops mid-contract — is there a floor?</li>
        <li>Is support included at every tier, or only above a certain plan?</li>
      </UL>
      <P>
        A quote that answers all five of these clearly is usually a good sign in itself — vague pricing pages
        that avoid these questions tend to mean the real cost shows up later.
      </P>

      <H2>How Manitham HRMS is priced</H2>
      <P>
        Manitham HRMS uses three tiers — Starter, Growth and Enterprise — scaling from core HR, attendance and
        leave for small teams up through payroll, performance and recruitment, to multi-location and
        multi-entity support for larger organizations. Rather than a fixed public rate card, pricing is quoted
        based on your actual headcount and the modules you need, since a 30-person team and a 500-person,
        multi-state organization have genuinely different requirements. See the{" "}
        <Link href="/pricing" className="font-medium text-brand-600 hover:underline">
          full plan breakdown
        </Link>{" "}
        or talk to sales for a quote specific to your team.
      </P>
    </ArticleLayout>
  );
}
