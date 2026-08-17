import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, H2, P, UL } from "@/components/templates/ArticleLayout";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticleBySlug } from "@/lib/data/articles";
import { siteConfig } from "@/lib/site-config";

const meta = getArticleBySlug("leave-policy-guide-india")!;

export const metadata: Metadata = buildMetadata({
  path: `/resources/${meta.slug}`,
  primaryKeyword: "employee leave policy India",
  secondaryKeywords: ["leave management system", "leave types", "leave accrual"],
  searchIntent: "informational",
  title: `${meta.title} | ${siteConfig.name}`,
  description: meta.excerpt,
  h1: meta.title,
});

export default function LeavePolicyGuideArticle() {
  return (
    <ArticleLayout
      meta={meta}
      relatedLinks={[
        { title: "Leave Management", description: "See policy configuration inside Manitham HRMS.", href: "/leave-management" },
        { title: "Employee Self Service", description: "Where employees apply for leave and check balances.", href: "/employee-self-service" },
        { title: "HRMS Software in India", description: "How Indian HR requirements shape the platform.", href: "/hrms-software-india" },
      ]}
    >
      <P>
        A leave policy that exists only as a paragraph in an employee handbook doesn&apos;t help much on its own —
        it needs to be applied consistently every time someone requests time off. Here are the pieces worth getting
        right.
      </P>

      <H2>1. Decide on leave types</H2>
      <P>
        Most Indian companies use some combination of the following, though naming and specifics vary by
        organization:
      </P>
      <UL>
        <li><strong>Casual leave</strong> — short, often unplanned time off</li>
        <li><strong>Sick leave</strong> — for illness, sometimes requiring documentation past a certain number of days</li>
        <li><strong>Earned/privilege leave</strong> — accrued over time, often carried forward or encashed</li>
        <li><strong>Maternity and paternity leave</strong> — governed by statutory requirements that vary by employer size and state</li>
      </UL>
      <P>
        Statutory minimums for leave entitlements are set at the state level under each state&apos;s Shops and
        Establishments Act, so requirements can differ depending on where your business operates — it&apos;s worth
        confirming the specific minimums that apply to you rather than assuming a single national standard.
      </P>

      <H2>2. Set accrual rules</H2>
      <P>
        Decide how leave is earned — a fixed number granted at the start of the year, or accrued monthly as the
        employee works. Monthly accrual is common for earned leave, since it ties leave availability to actual
        tenure within the year.
      </P>

      <H2>3. Decide on carry-forward and encashment</H2>
      <P>
        Companies vary here — some allow unused earned leave to carry forward to the next year (often capped at a
        maximum), some allow encashment of unused leave, and some do both. This should be explicit in the policy
        rather than decided case by case.
      </P>

      <H2>4. Define the approval workflow</H2>
      <P>
        Most leave requests should route to an employee&apos;s direct manager, but it&apos;s worth deciding upfront how
        exceptions are handled — extended leave, leave during notice periods, or leave that needs HR sign-off in
        addition to a manager&apos;s approval.
      </P>

      <H2>5. Publish the holiday calendar</H2>
      <P>
        Separate from personal leave, most companies also observe public and company holidays. If you operate
        across multiple states, some holidays may differ by location — worth reflecting in the calendar rather than
        assuming one calendar fits everyone.
      </P>

      <H2>Common mistakes</H2>
      <UL>
        <li>Policy exists on paper but balances are tracked in a spreadsheet that&apos;s rarely updated</li>
        <li>Approvals happen informally (chat messages), leaving no record of what was actually approved</li>
        <li>Different managers apply the policy inconsistently across teams</li>
        <li>Approved leave doesn&apos;t make it into attendance or payroll records</li>
      </UL>
      <P>
        A leave policy is only as useful as the system enforcing it. See how policy configuration, requests and
        approvals work together in{" "}
        <Link href="/leave-management" className="font-medium text-brand-600 hover:underline">Manitham HRMS leave management</Link>.
      </P>
    </ArticleLayout>
  );
}
