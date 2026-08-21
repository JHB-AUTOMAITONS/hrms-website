import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, H2, H3, P, OL, UL } from "@/components/templates/ArticleLayout";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticleBySlug } from "@/lib/data/articles";
import { siteConfig } from "@/lib/site-config";

const meta = getArticleBySlug("hra-exemption-guide")!;

export const metadata: Metadata = buildMetadata({
  path: `/resources/${meta.slug}`,
  primaryKeyword: "HRA exemption",
  secondaryKeywords: ["HRA exemption calculation", "HRA exemption rules", "Section 10(13A)"],
  searchIntent: "informational",
  title: `${meta.title} | ${siteConfig.name}`,
  description: meta.excerpt,
  h1: meta.title,
});

export default function HraExemptionGuideArticle() {
  return (
    <ArticleLayout
      meta={meta}
      relatedLinks={[
        { title: "Payroll Software", description: "How HRA and other salary components are handled in payroll.", href: "/payroll-software" },
        { title: "Employee Self Service", description: "Where employees submit rent receipts and view their payslips.", href: "/employee-self-service" },
        { title: "How Payroll Processing Works in India", description: "How HRA fits into the wider salary structure.", href: "/resources/payroll-processing-guide-india" },
      ]}
    >
      <P>
        House Rent Allowance is usually one of the largest components in an Indian salary structure, and it&apos;s
        also one of the most common sources of payroll queries — employees want to know how much of it is
        tax-exempt, and HR ends up fielding the same question every filing season. Here&apos;s how the exemption
        actually works.
      </P>

      <H2>The exemption applies under the old tax regime</H2>
      <P>
        This is the detail that trips up most employees: HRA exemption under Section 10(13A) is available only if
        the employee has opted for the old tax regime. Under the new (default) tax regime, HRA is fully taxable —
        there&apos;s no exemption to claim. Anyone comparing take-home pay between the two regimes needs to factor
        this in, since it can materially change which regime works out better for someone paying rent.
      </P>

      <H2>The exemption formula</H2>
      <P>
        For employees on the old regime who are eligible, the exempt amount is the <strong>least</strong> of these
        three figures:
      </P>
      <OL>
        <li>Actual HRA received from the employer</li>
        <li>Rent paid, minus 10% of salary (basic pay plus DA)</li>
        <li>50% of salary (basic plus DA) for a metro city, or 40% for a non-metro city</li>
      </OL>
      <P>
        Delhi, Mumbai, Kolkata and Chennai are treated as metro cities for this calculation; every other city
        falls under the 40% figure.
      </P>

      <H2>A worked example</H2>
      <P>
        Take an employee in Bengaluru (non-metro, for this purpose) with basic pay plus DA of ₹40,000/month,
        HRA of ₹18,000/month, and actual rent paid of ₹20,000/month.
      </P>
      <UL>
        <li>Actual HRA received: ₹18,000</li>
        <li>Rent paid minus 10% of salary: ₹20,000 − ₹4,000 = ₹16,000</li>
        <li>40% of salary (non-metro): ₹16,000</li>
      </UL>
      <P>
        The exempt amount is the least of the three — ₹16,000/month here — and the remaining ₹2,000 of HRA
        received is added to taxable income.
      </P>

      <H2>What HR needs from employees to process this</H2>
      <UL>
        <li>A declaration of rent paid and the landlord&apos;s details at the start of the year</li>
        <li>Rent receipts or a rent agreement as proof, usually collected at year-end for verification</li>
        <li>The landlord&apos;s PAN, where annual rent paid exceeds the threshold that requires it</li>
        <li>City of residence, since it determines the 50%/40% figure used in the calculation</li>
      </UL>
      <P>
        None of this is unusual — it&apos;s the same declaration-and-proof cycle every payroll team runs each year.
        The friction is almost always operational: chasing employees for documents close to the filing deadline,
        or HR manually recalculating exemptions for each employee instead of having it computed consistently as
        part of payroll.
      </P>

      <H3>How this works in Manitham HRMS</H3>
      <P>
        Employees submit rent declarations and documents directly through self-service, and HRA exemption is
        calculated as part of the regular payroll and TDS process rather than as a separate year-end exercise.
        See how salary components and statutory deductions come together in{" "}
        <Link href="/payroll-software" className="font-medium text-brand-600 hover:underline">
          payroll software
        </Link>
        .
      </P>
    </ArticleLayout>
  );
}
