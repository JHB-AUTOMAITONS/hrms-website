import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, H2, P, UL } from "@/components/templates/ArticleLayout";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticleBySlug } from "@/lib/data/articles";
import { siteConfig } from "@/lib/site-config";

const meta = getArticleBySlug("recruitment-crm-vs-ats")!;

export const metadata: Metadata = buildMetadata({
  path: `/resources/${meta.slug}`,
  primaryKeyword: "recruitment crm systems",
  secondaryKeywords: ["ATS software", "applicant tracking system", "recruitment management software"],
  searchIntent: "informational",
  title: `${meta.title} | ${siteConfig.name}`,
  description: meta.excerpt,
  h1: meta.title,
});

export default function RecruitmentCrmVsAtsArticle() {
  return (
    <ArticleLayout
      meta={meta}
      relatedLinks={[
        { title: "Recruitment", description: "See how the recruitment pipeline works in Manitham HRMS.", href: "/recruitment" },
        { title: "Best Applicant Tracking Software in India", description: "What to look for in an ATS specifically.", href: "/resources/best-applicant-tracking-software-india" },
        { title: "Employee Management", description: "Where a hired candidate lands as a full employee record.", href: "/employee-management" },
      ]}
    >
      <P>
        Both an ATS and a recruitment CRM track candidates and both promise to fix messy hiring, which is why
        the terms get used almost interchangeably in search results and in vendor marketing. They&apos;re
        actually built to solve different problems, and picking the wrong one means paying for capability you
        won&apos;t use while missing the one you needed.
      </P>

      <H2>What an ATS is actually built for</H2>
      <P>
        An applicant tracking system manages candidates who have already applied to a specific, open role. Its
        job is to move someone through a pipeline — applied, screened, interviewed, offered, hired — for a
        requisition that exists right now. It&apos;s reactive by design: it organizes the people already in front
        of you.
      </P>

      <H2>What a recruitment CRM is actually built for</H2>
      <P>
        A recruitment CRM manages relationships with candidates before there&apos;s an open role for them —
        building and nurturing a talent pool, tracking people who were strong but not right for a past
        position, and re-engaging them when something opens up. It&apos;s proactive: it&apos;s about not
        starting from zero every time you hire.
      </P>

      <H2>The practical difference, side by side</H2>
      <UL>
        <li><strong>ATS:</strong> &ldquo;We have an open role — manage everyone who applies to it.&rdquo;</li>
        <li><strong>Recruitment CRM:</strong> &ldquo;We might hire for this later — keep track of good people until we do.&rdquo;</li>
        <li><strong>ATS:</strong> Optimized for pipeline stages and time-to-hire on a specific requisition.</li>
        <li><strong>Recruitment CRM:</strong> Optimized for long-term candidate relationships and re-engagement.</li>
      </UL>

      <H2>Which one an Indian business actually needs</H2>
      <P>
        Most small and mid-sized companies hiring a handful of roles at a time need an ATS, not a standalone
        CRM — the volume of &ldquo;candidates we&apos;re not hiring right now but might later&rdquo; is small enough
        that a simple tagged list covers it. A dedicated recruitment CRM tends to earn its cost once hiring is
        continuous and high-volume enough that re-engaging past candidates meaningfully reduces sourcing work —
        common for staffing agencies and large, constantly-hiring enterprises, less common for a 50-200 person
        company hiring steadily but not at scale.
      </P>
      <P>
        Some platforms blur the line deliberately — an ATS pipeline plus a simple &ldquo;keep in touch&rdquo; tag on
        rejected candidates covers most of what a smaller team needs from CRM-style functionality, without
        paying for or managing a separate system.
      </P>

      <H2>How this works in Manitham HRMS</H2>
      <P>
        Recruitment in Manitham HRMS covers job requisitions, a configurable candidate pipeline, and interview
        feedback from hiring managers — the ATS side most Indian businesses actually need day to day — with a
        direct handoff into onboarding once a candidate is hired, so nothing gets re-typed into a separate
        employee record. See the{" "}
        <Link href="/recruitment" className="font-medium text-brand-600 hover:underline">
          recruitment module
        </Link>{" "}
        for the full pipeline.
      </P>
    </ArticleLayout>
  );
}
