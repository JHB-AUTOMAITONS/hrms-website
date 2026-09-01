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

export default function HrmsSoftwarePricingIndiaArticle() {
  return (
    <ArticleLayout
      meta={meta}
      relatedLinks={[
        { title: "Pricing", description: "See Manitham HRMS plan tiers and what's included.", href: "/pricing" },
        { title: "Best HRMS Software in India", description: "What else to evaluate beyond price.", href: "/best-hrms-software-india" },
        { title: "HRMS Software in India", description: "The full platform built around Indian payroll and compliance.", href: "/hrms-software-india" },
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
