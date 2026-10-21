import type { Metadata } from "next";
import { ArticleLayout, A, H2, H3, P, UL, OL } from "@/components/templates/ArticleLayout";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticleBySlug } from "@/lib/data/articles";

const meta = getArticleBySlug("payroll-system-sri-lanka")!;

export const metadata: Metadata = buildMetadata(
  {
    path: `/resources/${meta.slug}`,
    primaryKeyword: "payroll system Sri Lanka",
    secondaryKeywords: [
      "payroll software Sri Lanka",
      "payroll management system Sri Lanka",
      "HR software Sri Lanka",
      "EPF ETF APIT payroll",
    ],
    searchIntent: "commercial",
    title: "Payroll System in Sri Lanka: How to Choose It | Manitham HRMS",
    description: meta.excerpt,
    h1: meta.title,
  },
  { locale: "en_LK" },
);

const faqs = [
  {
    question: "What does a payroll system in Sri Lanka need to handle at minimum?",
    answer:
      "At minimum it should calculate EPF and ETF correctly, withhold APIT against the current Inland Revenue Department tables, produce compliant payslips, and keep the records you need for the annual Certificate of Tax Deduction (T10) and Annual Declaration.",
  },
  {
    question: "What are the current EPF and ETF contribution rates?",
    answer:
      "EPF is 20% of total monthly earnings in total: 8% deducted from the employee and 12% paid by the employer. ETF is a separate, employer-only contribution of 3% of gross monthly salary. Confirm current rates on epf.lk and etfb.lk, since statutory rates can change.",
  },
  {
    question: "When is APIT due to the Inland Revenue Department?",
    answer:
      "Employers must remit APIT deducted for a month to the Commissioner General by the 15th day of the following month, under Section 120(a) of the Inland Revenue Act, No. 24 of 2017. Always check the current APIT table on ird.gov.lk, since the applicable table changes periodically.",
  },
  {
    question: "Is a payroll system the same as full HR software in Sri Lanka?",
    answer:
      "No. Payroll software specifically runs salary calculations, statutory deductions and payslips. HR software (sometimes called an HRMS) usually includes payroll alongside attendance, leave, employee records and self-service. Most growing Sri Lankan businesses are better served by one connected system than by separate payroll and HR tools that need manual reconciliation.",
  },
  {
    question: "Does Manitham HRMS support Sri Lankan statutory payroll calculations today?",
    answer:
      "Sri Lankan EPF, ETF and APIT requirements are specific and change periodically, so rather than make a general claim here, book a demo with your own payroll scenario and we'll show you exactly what's supported today.",
  },
];

export default function PayrollSystemSriLankaArticle() {
  return (
    <ArticleLayout
      meta={meta}
      faqs={faqs}
      relatedLinks={[
        { title: "Payroll Software", description: "See how salary processing and statutory deductions work in Manitham HRMS.", href: "/payroll-software" },
        { title: "HR Compliance", description: "How statutory compliance tracking works alongside payroll.", href: "/hr-compliance" },
        { title: "Best HRMS Software for Small Business", description: "A checklist for evaluating HR software as a growing SME.", href: "/resources/best-hrms-software-for-small-business" },
      ]}
    >
      <P>
        Payroll in Sri Lanka runs into the same wall for a lot of growing businesses: a spreadsheet handles salary
        math fine until EPF, ETF and tax withholding have to be right every single month, with no room for a
        rounding error that only surfaces when the Inland Revenue Department asks a question. Choosing the right{" "}
        <strong>payroll system in Sri Lanka</strong> is less about picking the flashiest feature list and more
        about confirming it handles the specific obligations your business is already on the hook for. This guide
        walks through what those obligations are, what a payroll system should do with them, and the questions
        worth asking before you commit to one.
      </P>

      <H2>The statutory building blocks of a payroll system in Sri Lanka</H2>
      <P>
        Three separate obligations sit underneath almost every Sri Lankan payroll run. Treat this as background to
        evaluate software against, not as a substitute for advice from an accountant or the relevant authority —
        rates and tables are set by the EPF Department, the ETF Board and the Inland Revenue Department, and they
        do change.
      </P>

      <H3>EPF (Employees&apos; Provident Fund)</H3>
      <P>
        EPF is a retirement savings contribution calculated on an employee&apos;s total monthly earnings. Per the
        EPF Department, the employee contributes a minimum of 8%, deducted from their pay, and the employer
        contributes a minimum of 12%, for a combined 20%. &quot;Total monthly earnings&quot; is defined broadly —
        it generally includes salary and specified allowances, not just basic pay — so a system that only applies
        EPF to basic salary can under-contribute without anyone noticing until an audit.{" "}
        (<a href="https://epf.lk/?p=171" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 hover:underline">Source: EPF Department</a>)
      </P>

      <H3>ETF (Employees&apos; Trust Fund)</H3>
      <P>
        ETF is a separate, employer-only contribution — employees never have it deducted from their pay. Employers
        contribute 3% of gross monthly salary to the ETF Board, under the Employees&apos; Trust Fund Act and its
        1982 amendment.{" "}
        (<a href="https://www.etfb.lk/" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 hover:underline">Source: ETF Board</a>)
      </P>

      <H3>APIT (Advance Personal Income Tax, formerly referred to as PAYE)</H3>
      <P>
        APIT is the Inland Revenue Department&apos;s withholding scheme on employment income — many payslips and
        payroll teams still call it PAYE out of habit, but the IRD&apos;s own tables and forms use the APIT name.
        Under Section 83 of the Inland Revenue Act, No. 24 of 2017, every employer is a withholding agent and must
        deduct tax from employment income according to the IRD&apos;s current tables. The IRD publishes a new
        table periodically (the 2025/2026 table is the one currently listed), so a payroll system needs to let you
        apply a new table without a code change or a support ticket that takes weeks.{" "}
        (<a href="https://www.ird.gov.lk/en/publications/sitepages/apit_tax_tables.aspx?menuid=1502" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 hover:underline">Source: Inland Revenue Department — APIT Tax Tables</a>)
      </P>

      <H3>Other employment-law obligations</H3>
      <P>
        EPF, ETF and APIT aren&apos;t the only things a Sri Lankan employer has to track. General employment law —
        including the Shop and Office Employees Act and sector-specific Wages Boards Ordinances — sets its own
        requirements around things like working hours, record-keeping and leave, on top of whatever your own
        company policy adds. A payroll system should let you configure these per company rather than assume one
        fixed, generic rule set.
      </P>

      <H2>The payroll calendar you need to work to</H2>
      <UL>
        <li>
          <strong>Every month:</strong> deduct APIT from employment income and remit it to the Commissioner
          General by the 15th day of the following month (Inland Revenue Act, Section 120(a)).
        </li>
        <li>
          <strong>Every month:</strong> remit EPF and ETF contributions on or before the last working day of the
          following month. EPF&apos;s own guidance notes that late or incomplete remittances attract an
          escalating surcharge, so this isn&apos;t a deadline worth missing by habit.
        </li>
        <li>
          <strong>Once a year:</strong> issue each employee a Certificate of Tax Deduction (T10) before 30 April
          of the following year, and submit an Annual Declaration to the Commissioner General by 30 April
          (Inland Revenue Act, Section 120(b) and (d)).
        </li>
        <li>
          <strong>Record-keeping:</strong> employers must keep payment records and produce them for inspection on
          request (Inland Revenue Act, Section 119).
        </li>
      </UL>
      <P>
        Dates, tables and rates are set by the EPF Department, ETF Board and IRD, and they change — confirm the
        current figures on their official sites before relying on any specific number in a blog post, including
        this one.
      </P>

      <H2>Manual payroll vs. automated: where manual breaks down</H2>
      <UL>
        <li>
          <strong>EPF/ETF calculated on the wrong base.</strong> Applying contributions to basic salary only,
          instead of total monthly earnings, is an easy mistake that compounds every cycle.
        </li>
        <li>
          <strong>APIT tables go stale.</strong> When the IRD issues a new table and nobody updates the
          spreadsheet, every employee&apos;s withholding is wrong until someone notices.
        </li>
        <li>
          <strong>Remittance deadlines slip.</strong> A manual process has no built-in reminder for the APIT,
          EPF or ETF deadlines, and surcharges for late payment increase the longer they&apos;re outstanding.
        </li>
        <li>
          <strong>Leave and attendance aren&apos;t reflected in pay.</strong> Unpaid leave or overtime tracked in
          a separate system or notebook has to be re-keyed into payroll by hand, every month.
        </li>
        <li>
          <strong>Joiners, leavers and pro-rated pay.</strong> Mid-month hires, exits and salary changes are
          easy to miscalculate without a system tracking effective dates.
        </li>
      </UL>

      <H2>Essential features to evaluate in a payroll management system</H2>
      <P>
        Whether you call it a payroll management system or payroll software, the evaluation criteria are largely
        the same:
      </P>
      <OL>
        <li>EPF and ETF calculated automatically on the correct earnings base, with rates you can update yourself if they change</li>
        <li>APIT withheld against the current IRD table, with a straightforward way to load a new table each period</li>
        <li>Payslips that clearly itemize gross pay, EPF, ETF and APIT</li>
        <li>Support for the annual T10 certificate and the records behind the Annual Declaration</li>
        <li>Attendance and leave data flowing into payroll automatically, rather than a manual export</li>
        <li>Role-based access to salary data and an audit trail of who changed what</li>
        <li>A way to run a parallel cycle against your current process before you fully switch over</li>
      </OL>

      <H2>Why payroll works better connected to attendance, leave and self-service</H2>
      <P>
        A payroll system in isolation still needs someone to feed it hours worked, approved leave and new joiner
        details every cycle. When <A href="/attendance-management">attendance</A> and{" "}
        <A href="/leave-management">leave</A> live in the same system as payroll, that data is already there when
        the run starts — no export, no re-typing, no gap between what was approved and what gets paid. Employees
        checking their own payslips and EPF/ETF figures through{" "}
        <A href="/employee-self-service">self-service</A> also cuts down the &quot;why is my pay different this
        month?&quot; questions HR fields by email. This is the main reason most growing Sri Lankan businesses end
        up evaluating full HR software rather than payroll alone — see{" "}
        <A href="/resources/what-is-hrms-software">what HRMS software actually covers</A> if you&apos;re weighing
        that broader scope.
      </P>

      <H2>Pricing and implementation considerations</H2>
      <P>
        Payroll pricing is usually quoted per employee per month, sometimes with payroll priced as an add-on
        above a base HR tier. Before comparing quotes, get clear answers on what&apos;s included (statutory
        calculations vs. an export you reconcile yourself), what a new employee or a mid-cycle salary change
        costs to process, and how long implementation and data migration realistically take for your headcount.
        The cost drivers covered in{" "}
        <A href="/resources/hrms-software-pricing-india">what actually drives HRMS pricing</A> — headcount,
        modules, support tier — apply in any market, even though that guide is written around Indian pricing.
        See <A href="/pricing">Manitham HRMS pricing</A> for how our own plans are structured.
      </P>

      <H2>Payroll software or an outsourced payroll provider?</H2>
      <P>
        An outsourced payroll provider or accounting firm takes the calculation work off your plate, but you
        still supply the inputs every cycle, and you pay for the service monthly on top of whatever you&apos;re
        already paying for HR admin. Software keeps the process and the data in-house, and typically scales more
        cheaply as headcount grows. Many small Sri Lankan businesses start with an outsourced provider and move to
        software once attendance, leave and payroll data all need to agree with each other — at that point,
        reconciling two separate systems becomes more work than running one.
      </P>

      <H2>How to evaluate a payroll software provider</H2>
      <OL>
        <li><strong>Write down your must-haves first.</strong> Headcount, pay frequency, the allowances and deductions your salary structures actually use, and which statutory outputs you need.</li>
        <li><strong>Ask specifically, not generally.</strong> &quot;Do you support EPF, ETF and APIT?&quot; gets a vaguer answer than &quot;show me how a new APIT table gets applied, and how a payslip breaks down EPF and ETF.&quot;</li>
        <li><strong>Test with real data.</strong> Load a handful of actual employees and run a sample cycle rather than watching a scripted demo.</li>
        <li><strong>Run one cycle in parallel.</strong> Compare gross pay, EPF, ETF, APIT and net pay against your current process before you switch over fully.</li>
      </OL>

      <H2>Questions worth asking any vendor</H2>
      <UL>
        <li>Which Sri Lankan statutory calculations are supported today, specifically, and which would be on a roadmap?</li>
        <li>How quickly can a new APIT table or a change in EPF/ETF rules be applied?</li>
        <li>Does attendance and leave data flow into payroll automatically, or does someone export and re-enter it?</li>
        <li>Is pricing per employee, in what currency, and what costs extra as you grow?</li>
        <li>Where is payroll data hosted, and who has access to it?</li>
        <li>Can we run a pilot or a parallel cycle with our own data before signing anything?</li>
      </UL>

      <H2>How Manitham HRMS fits</H2>
      <P>
        Manitham HRMS connects payroll to the same employee record as attendance, leave and self-service, so
        approved leave and recorded hours are already in the run when payroll processes, instead of arriving as a
        separate file to reconcile. See the <A href="/payroll-software">payroll software</A> module, or the wider{" "}
        <A href="/hrms-software">HRMS platform</A> if you&apos;re also looking at attendance, leave and employee
        records as one system.
      </P>
      <P>
        Sri Lankan EPF, ETF and APIT requirements are specific, and they change periodically, so rather than make
        a general claim about statutory support here, we&apos;d rather show you directly.{" "}
        <A href="/book-demo">Book a demo</A> with your own payroll scenario and we&apos;ll walk through exactly
        what&apos;s supported today, or <A href="/contact">get in touch</A> with questions first.
      </P>
    </ArticleLayout>
  );
}
