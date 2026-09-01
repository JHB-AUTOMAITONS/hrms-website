import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, H2, P, UL } from "@/components/templates/ArticleLayout";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticleBySlug } from "@/lib/data/articles";
import { siteConfig } from "@/lib/site-config";

const meta = getArticleBySlug("recruitment-crm-vs-ats")!;

export const metadata: Metadata = buildMetadata({
  path: `/resources/${meta.slug}`,
  primaryKeyword: "recruitment CRM systems",
  secondaryKeywords: ["recruitment CRM vs ATS", "applicant tracking system", "candidate relationship management"],
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
        { title: "Recruitment", description: "Job postings, hiring pipeline and interview scheduling in Manitham HRMS.", href: "/recruitment" },
        { title: "Best Applicant Tracking Software in India", description: "What an ATS should handle, and how it fits into a full HRMS.", href: "/resources/best-applicant-tracking-software-india" },
        { title: "Employee Management", description: "Where a hired candidate lands as a full employee record.", href: "/employee-management" },
      ]}
    >
      <P>
        &quot;Recruitment CRM&quot; and &quot;ATS&quot; get used loosely enough that a lot of buyers assume
        they&apos;re the same category with two names. They solve related but different problems, and knowing
        which one you actually need — or whether it&apos;s both — makes evaluating hiring tools a lot easier.
      </P>

      <H2>What an ATS does</H2>
      <P>
        An applicant tracking system is built around an open requisition: a job goes live, candidates apply, and
        the ATS tracks each applicant through defined pipeline stages — applied, screened, interviewed, offered,
        hired. It&apos;s reactive by design — it manages people who have already applied to a specific role.
      </P>

      <H2>What a recruitment CRM does</H2>
      <P>
        A recruitment CRM is built around relationships that exist before, and independent of, any specific open
        role. It&apos;s used to nurture a talent pool — passive candidates, past applicants who weren&apos;t
        hired but were strong, referrals — over time, so there&apos;s a pipeline of people to reach out to when
        a relevant role does open. It&apos;s proactive sourcing, not pipeline tracking.
      </P>

      <H2>Do you need both?</H2>
      <UL>
        <li>High-volume, always-hiring roles (retail, field staff, delivery) usually lean more on ATS-style pipeline tracking</li>
        <li>Specialist or senior roles with a small, slow-moving candidate market benefit more from CRM-style relationship building</li>
        <li>Most mid-size companies get most of the value from a solid ATS first, and add CRM-style sourcing once hiring volume or role specialization justifies it</li>
      </UL>

      <H2>What Manitham HRMS covers</H2>
      <P>
        The recruitment module in Manitham HRMS is ATS-style: job postings, a candidate pipeline from applied to
        hired, interview scheduling, and a direct handoff into the employee record once someone&apos;s hired — so
        HR isn&apos;t re-typing candidate details into a separate system. It doesn&apos;t include CRM-style
        passive-candidate nurturing or outreach campaigns; if that&apos;s specifically what you need, it&apos;s
        worth asking any vendor directly whether they mean ATS or CRM functionality, since the terms get used
        interchangeably in sales conversations too. See the full{" "}
        <Link href="/recruitment" className="font-medium text-brand-600 hover:underline">
          recruitment
        </Link>{" "}
        module for what the hiring pipeline looks like.
      </P>
    </ArticleLayout>
  );
}
