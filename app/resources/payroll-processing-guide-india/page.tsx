import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, H2, H3, P, UL, OL } from "@/components/templates/ArticleLayout";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticleBySlug } from "@/lib/data/articles";
import { siteConfig } from "@/lib/site-config";

const meta = getArticleBySlug("payroll-processing-guide-india")!;

export const metadata: Metadata = buildMetadata({
  path: `/resources/${meta.slug}`,
  primaryKeyword: "payroll processing India",
  secondaryKeywords: ["PF calculation", "ESI calculation", "professional tax", "TDS on salary"],
  searchIntent: "informational",
  title: `${meta.title} | ${siteConfig.name}`,
  description: meta.excerpt,
  h1: meta.title,
});

export default function PayrollProcessingGuideArticle() {
  return (
    <ArticleLayout
      meta={meta}
      relatedLinks={[
        { title: "Payroll Software", description: "See how this process is automated in Manitham HRMS.", href: "/payroll-software" },
        { title: "HR Compliance", description: "How statutory compliance tracking works alongside payroll.", href: "/hr-compliance" },
        { title: "HRMS Software in India", description: "The full platform built around Indian payroll.", href: "/hrms-software-india" },
      ]}
    >
      <P>
        Payroll in India involves more moving parts than just multiplying a salary by working days. Between
        provident fund, ESI, professional tax and TDS, getting a single employee&apos;s pay right means running several
        calculations correctly and consistently, every single cycle. Here&apos;s how the process generally breaks down.
      </P>

      <H2>1. Start with attendance and leave</H2>
      <P>
        Every payroll cycle starts with knowing what was actually worked — attendance, approved leave, and any
        unpaid leave for the period. This is the most common source of payroll errors: if attendance data isn&apos;t
        accurate or up to date when payroll runs, everything calculated after it is wrong too.
      </P>

      <H2>2. Apply the salary structure</H2>
      <P>
        A typical Indian salary structure splits pay into components — basic pay, dearness allowance (DA), house
        rent allowance (HRA), and other allowances — rather than a single lump sum. This split matters because
        several statutory calculations (like PF) are based on specific components, not total pay.
      </P>
      <P>
        Since India&apos;s labour codes took effect in November 2025, salary structures also need to account for the
        updated wage definition: basic pay and DA together must make up at least 50% of total remuneration (CTC).
        If allowances push above that threshold, the excess is added back for statutory calculation purposes. Rules
        under this framework were still being finalized at the state level through early 2026, so it&apos;s worth
        confirming the current requirements for your specific state and industry.
      </P>

      <H2>3. Calculate statutory deductions</H2>
      <H3>Provident Fund (PF/EPF)</H3>
      <P>
        Employees typically contribute 12% of PF wages, matched by a 12% employer contribution, calculated against a
        wage ceiling. The employer&apos;s share is further split between the Employees&apos; Pension Scheme (EPS) and EPF
        itself.
      </P>
      <H3>Employee State Insurance (ESI)</H3>
      <P>
        ESI applies to employees below a defined gross wage threshold. Contributions are split between employer and
        employee, with the employer paying the larger share. ESI provides medical and cash benefits to covered
        employees.
      </P>
      <H3>Professional Tax (PT)</H3>
      <P>
        Professional tax is a state-level tax, which means the slab and the amount deducted depends on which state
        the employee is working in — not a single nationwide rate. Companies with employees across multiple states
        need to apply the correct slab for each location.
      </P>
      <H3>TDS (Tax Deducted at Source)</H3>
      <P>
        Employers are required to deduct income tax at source based on an employee&apos;s projected annual income and
        declared tax details, then deposit it with the government and report it through the employee&apos;s Form 16 at
        year end.
      </P>

      <H2>4. Generate payslips and reports</H2>
      <P>
        Once deductions are calculated, payslips are generated for each employee showing earnings, deductions and
        net pay. Payroll reports — cost summaries, statutory contribution reports — are typically needed for finance
        and for compliance record-keeping.
      </P>

      <H2>A simplified view of the cycle</H2>
      <OL>
        <li>Lock attendance and leave data for the pay period</li>
        <li>Apply salary structure and any changes (increments, new joiners, exits)</li>
        <li>Calculate PF, ESI, professional tax and TDS</li>
        <li>Review and approve the payroll run</li>
        <li>Generate payslips and disburse salaries</li>
        <li>Retain records for compliance and audit purposes</li>
      </OL>

      <H2>Where this tends to go wrong</H2>
      <UL>
        <li>Attendance or leave data not finalized before payroll runs</li>
        <li>Manual recalculation of PF/ESI each cycle, introducing small errors that compound over time</li>
        <li>Applying the wrong professional tax slab for employees who&apos;ve changed work location</li>
        <li>Losing track of past payroll records needed for an audit</li>
      </UL>
      <P>
        This is largely why payroll software exists — not to change what needs to be calculated, but to make sure
        it&apos;s calculated the same correct way every time, pulling from attendance and leave data that&apos;s already
        accurate. See how this works in{" "}
        <Link href="/payroll-software" className="font-medium text-brand-600 hover:underline">Manitham HRMS payroll</Link>.
      </P>
    </ArticleLayout>
  );
}
