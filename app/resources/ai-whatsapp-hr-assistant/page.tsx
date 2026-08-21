import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, H2, P, UL } from "@/components/templates/ArticleLayout";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticleBySlug } from "@/lib/data/articles";
import { siteConfig } from "@/lib/site-config";

const meta = getArticleBySlug("ai-whatsapp-hr-assistant")!;

export const metadata: Metadata = buildMetadata({
  path: `/resources/${meta.slug}`,
  primaryKeyword: "AI WhatsApp HR assistant",
  secondaryKeywords: ["WhatsApp HR bot", "AI powered HRMS", "WhatsApp employee self service"],
  searchIntent: "informational",
  title: `${meta.title} | ${siteConfig.name}`,
  description: meta.excerpt,
  h1: meta.title,
});

export default function AiWhatsappHrAssistantArticle() {
  return (
    <ArticleLayout
      meta={meta}
      relatedLinks={[
        { title: "AI WhatsApp Assistant", description: "See the full feature — capabilities, FAQs and how to try it.", href: "/ai-whatsapp-assistant" },
        { title: "Employee Self Service", description: "The web and mobile portal this assistant complements.", href: "/employee-self-service" },
        { title: "HRMS Software", description: "How this fits into the full Manitham HRMS platform.", href: "/hrms-software" },
      ]}
    >
      <P>
        Ask most employees how they&apos;d check their leave balance, and the honest answer is usually &ldquo;I&apos;d
        message HR.&rdquo; Not because the HR portal is hard to use — because opening a browser, finding the
        right URL, and logging in is more friction than typing a question to a person. Manitham HRMS&apos;s AI
        WhatsApp Assistant is built around that exact behavior: instead of asking employees to change how they&apos;d
        naturally ask, it puts the answer where they already are.
      </P>

      <H2>What it actually does</H2>
      <P>
        Employees message your company&apos;s WhatsApp number the same way they&apos;d message a colleague — &ldquo;what&apos;s
        my leave balance,&rdquo; &ldquo;send my February payslip,&rdquo; &ldquo;apply 2 days casual leave next week&rdquo; — and get
        an answer immediately. No app to install, no separate login. The assistant verifies the sender against
        their registered mobile number already on file, then reads directly from the same employee record used
        across attendance, leave and payroll.
      </P>
      <UL>
        <li>Leave balances, and leave requests submitted straight to a manager for approval</li>
        <li>Attendance status — whether today&apos;s check-in was recorded, or a recent history</li>
        <li>Payslips and tax documents, sent back as a WhatsApp attachment</li>
        <li>General HR policy questions — leave policy, holiday calendar, and similar</li>
      </UL>

      <H2>Why AI, not a fixed menu of commands</H2>
      <P>
        Plenty of WhatsApp HR bots exist as glorified menus — reply &ldquo;1&rdquo; for leave balance, &ldquo;2&rdquo; for
        payslips. That works until an employee phrases something slightly differently, at which point it breaks.
        The AI-powered part matters here: the assistant is built to understand intent from how someone actually
        writes, not a fixed set of exact commands, and asks a clarifying follow-up when it isn&apos;t sure — the same
        way a person would, instead of returning an error.
      </P>

      <H2>Why this matters beyond convenience</H2>
      <P>
        The obvious benefit is fewer routine questions landing in HR&apos;s inbox. The less obvious one is who this
        actually helps most: field staff, shop-floor workers, and anyone without regular access to a company
        laptop or a reason to open an HR app. They almost always have WhatsApp. Extending self-service to that
        channel means the same leave-balance-check that&apos;s trivial for an office employee becomes just as
        trivial for someone who&apos;s never logged into the HR portal.
      </P>
      <P>
        It also doesn&apos;t replace anything — the{" "}
        <Link href="/employee-self-service" className="font-medium text-brand-600 hover:underline">
          web and mobile self-service portal
        </Link>{" "}
        is still there for anything better suited to a screen. WhatsApp is an additional channel into the same
        data, not a separate system to keep in sync.
      </P>

      <H2>See it in practice</H2>
      <P>
        The assistant answers from live data — a leave balance it reports is the same number the self-service
        portal and payroll would show, not a separate or manually maintained copy. See the full breakdown of
        what it can do on the{" "}
        <Link href="/ai-whatsapp-assistant" className="font-medium text-brand-600 hover:underline">
          AI WhatsApp Assistant
        </Link>{" "}
        page, or book a demo to see it answer real questions.
      </P>
    </ArticleLayout>
  );
}
