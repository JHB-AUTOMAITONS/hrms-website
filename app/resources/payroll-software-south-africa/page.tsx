import type { Metadata } from "next";
import { ArticleLayout, A, H2, H3, P, UL, OL } from "@/components/templates/ArticleLayout";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticleBySlug } from "@/lib/data/articles";

const meta = getArticleBySlug("payroll-software-south-africa")!;

export const metadata: Metadata = buildMetadata(
  {
    path: `/resources/${meta.slug}`,
    primaryKeyword: "payroll software South Africa",
    secondaryKeywords: [
      "payroll system South Africa",
      "SARS payroll software",
      "PAYE UIF SDL payroll",
      "EMP201 EMP501 software",
      "IRP5 payroll software",
    ],
    searchIntent: "commercial",
    title: "Payroll Software South Africa: PAYE, UIF & SDL | Manitham HRMS",
    description: meta.excerpt,
    h1: meta.title,
  },
  { locale: "en_ZA" },
);

const faqs = [
  {
    question: "What does payroll software need to do in South Africa?",
    answer:
      "At minimum it must calculate PAYE, UIF and (where applicable) SDL correctly, produce compliant payslips, and give you the figures for your monthly EMP201 declaration, the bi-annual EMP501 reconciliation and the IRP5/IT3(a) tax certificates.",
  },
  {
    question: "When is the EMP201 due?",
    answer:
      "The EMP201 and the related payment are due by the 7th of the month after the pay period. When the 7th falls on a weekend or public holiday, payment is due on the last business day before it.",
  },
  {
    question: "What is the EMP501 reconciliation?",
    answer:
      "It is the reconciliation of the PAYE, UIF and SDL you declared and paid during the period against your payroll records and tax certificates. There is an interim submission window in the second half of the tax year and an annual one after the tax year ends on the last day of February. Confirm the exact dates on SARS each year, as they change.",
  },
  {
    question: "Who has to pay the Skills Development Levy?",
    answer:
      "SDL is charged on the employer's payroll at 1%. Employers who expect their total salaries over the next 12 months to be above R500,000 become liable for it, so smaller employers may not have to pay it.",
  },
  {
    question: "Can I run payroll and HR in the same system?",
    answer:
      "Yes, and it is usually the better option. When attendance and leave sit in the same system as payroll, unpaid leave and overtime flow into pay automatically, which removes a common source of errors.",
  },
];

export default function PayrollSoftwareSouthAfricaArticle() {
  return (
    <ArticleLayout
      meta={meta}
      faqs={faqs}
      relatedLinks={[
        { title: "Payroll Software", description: "See how salary processing and payslips work in Manitham HRMS.", href: "/payroll-software" },
        { title: "HR Software South Africa", description: "The wider buyer's checklist beyond payroll.", href: "/resources/hr-software-south-africa" },
        { title: "HR Compliance", description: "How statutory compliance tracking works across payroll.", href: "/hr-compliance" },
      ]}
    >
      <P>
        South African payroll is unforgiving in a specific way: the deadlines are fixed, the tax tables change every
        year and SARS reconciles what you declared against what you paid. Get a figure wrong in March and it can
        resurface as a mismatch in the October reconciliation. This guide explains the obligations behind{" "}
        <strong>payroll software in South Africa</strong>, the calendar you have to work to, and what to check
        before you trust a system with your monthly run.
      </P>

      <H2>The statutory building blocks of South African payroll</H2>

      <H3>PAYE (employees&apos; tax)</H3>
      <P>
        Employers deduct Pay As You Earn from remuneration and pay it over to SARS. The calculation depends on
        the employee&apos;s earnings, age, any tax directives and the tax tables SARS publishes for the year.
        Those tables are updated after each national Budget and apply from 1 March, so your software has to
        support a rate update at the start of every tax year.
      </P>

      <H3>UIF (Unemployment Insurance Fund)</H3>
      <P>
        Both employer and employee contribute 1% of remuneration, for a total of 2%, up to a statutory earnings
        ceiling. UIF also has its own registration and declaration process with the Department of Employment and
        Labour, separate from your SARS payments.
      </P>

      <H3>SDL (Skills Development Levy)</H3>
      <P>
        Employers pay 1% of payroll as the Skills Development Levy once their expected annual salary bill passes
        R500,000. Smaller employers can fall below the threshold, but your software should still calculate SDL
        correctly for when you cross it.
      </P>

      <H3>ETI (Employment Tax Incentive)</H3>
      <P>
        Qualifying employers can reduce PAYE for eligible, lower-earning employees through the Employment Tax
        Incentive. It is claimed through the same monthly declaration, so payroll software needs to handle the
        eligibility rules, or you risk under- or over-claiming.
      </P>

      <H3>Payslips, IRP5 and IT3(a)</H3>
      <P>
        The BCEA requires a payslip each pay period showing the required details, including gross pay and
        deductions. At the end of the tax year, employers issue IRP5 tax certificates (or IT3(a) certificates
        where no PAYE was deducted), and these have to agree with what was declared during the year.
      </P>

      <H3>COIDA</H3>
      <P>
        Employers also have obligations under the Compensation for Occupational Injuries and Diseases Act,
        including an annual return of earnings to the Compensation Fund. Payroll software that reports earnings
        by employee saves you rebuilding that data each year.
      </P>

      <H2>The payroll calendar you have to work to</H2>
      <UL>
        <li>
          <strong>Every month:</strong> submit the EMP201 declaration and pay PAYE, UIF and SDL by the 7th of the
          following month (the last business day before if the 7th is a weekend or public holiday).
        </li>
        <li>
          <strong>Interim reconciliation (EMP501):</strong> covers March to August. The 2026 window runs from
          21 September to 31 October 2026.
        </li>
        <li>
          <strong>Annual reconciliation (EMP501):</strong> covers the full tax year from 1 March to the end of
          February, and is submitted in the months after year-end. IRP5/IT3(a) certificates come out of this
          process.
        </li>
        <li>
          <strong>Once a year:</strong> apply new tax tables from 1 March, and submit the COIDA return of earnings.
        </li>
      </UL>
      <P>
        Dates and rules are set by SARS and can change, so always confirm the current cycle on the SARS website
        before you rely on any date in a blog post, including this one.
      </P>

      <H2>Where manual payroll goes wrong</H2>
      <UL>
        <li>
          <strong>EMP501 doesn&apos;t match EMP201.</strong> The reconciliation has to line up with what you already
          declared and paid. A correction made on a spreadsheet but never reflected in the monthly declaration
          is a classic cause of a mismatch.
        </li>
        <li>
          <strong>Unpaid leave and overtime aren&apos;t captured.</strong> When attendance and leave are tracked
          elsewhere, someone has to key the adjustments into payroll every month.
        </li>
        <li>
          <strong>Outdated tables.</strong> A tax table that wasn&apos;t updated on 1 March produces PAYE errors for
          every employee, every month, until someone notices.
        </li>
        <li>
          <strong>Late joiners and leavers.</strong> Pro-rata pay and final payments are easy to get wrong when the
          hire and exit dates live in a different file.
        </li>
      </UL>

      <H2>Why payroll should be connected to attendance and leave</H2>
      <P>
        The largest single source of payroll error is the gap between HR records and the payroll run. When{" "}
        <A href="/attendance-management">attendance</A> and{" "}
        <A href="/leave-management">leave</A> feed pay directly, unpaid leave, late marks and overtime are already
        in the run before you start. Employees also see their own figures through{" "}
        <A href="/employee-self-service">self-service payslips</A>, which cuts the number of &quot;why is my pay
        different?&quot; emails HR has to field. If you are still weighing where payroll sits in the wider HR
        stack, the{" "}
        <A href="/resources/hr-software-south-africa">HR software buyer&apos;s guide</A> covers the rest of the
        picture.
      </P>

      <H2>What a clean monthly payroll run looks like</H2>
      <P>
        Whatever system you use, the monthly rhythm is the same. Software&apos;s job is to make each step faster and
        harder to get wrong:
      </P>
      <OL>
        <li>Set a cut-off date for attendance, leave and any changes to pay (new hires, leavers, allowances).</li>
        <li>Lock attendance and approved leave so unpaid leave and overtime flow into the run.</li>
        <li>Process the run and review the variances against last month, looking for anything unexplained.</li>
        <li>Approve the run, release payslips and generate the bank payment file.</li>
        <li>Prepare the EMP201 and pay PAYE, UIF and SDL to SARS by the 7th of the following month.</li>
        <li>File the payroll records so the interim and annual reconciliations can be agreed back to them.</li>
      </OL>
      <P>
        Variance review is the step most often skipped, and it&apos;s the one that catches a mistyped salary or a
        missed leaver before it reaches an employee&apos;s bank account.
      </P>

      <H2>What to check before you choose payroll software in South Africa</H2>
      <OL>
        <li>PAYE, UIF and SDL calculated per employee, with the tax tables updatable each March</li>
        <li>Payslips that include the information the BCEA requires</li>
        <li>Clean data for the monthly EMP201, and a reconciliation report that agrees to it</li>
        <li>IRP5/IT3(a) generation and a clear route to the annual reconciliation</li>
        <li>Handling of ETI, bonuses, allowances, deductions and pro-rata pay</li>
        <li>Automatic input from attendance and leave</li>
        <li>An audit trail showing who changed what, and role-based access to salary data</li>
        <li>A way to run a payroll in parallel with your current process before switching</li>
      </OL>

      <H2>Payroll software or a payroll bureau?</H2>
      <P>
        A bureau takes the work off your desk but you still supply the inputs, and you pay for the service every
        month. Software keeps control and data in-house and scales more cheaply as headcount grows. Many small
        employers start with a bureau and move to software once attendance, leave and payroll data all need to
        agree. If you are weighing cost, the drivers described in{" "}
        <A href="/resources/hrms-software-pricing-india">what drives HRMS pricing</A> (per-employee fees,
        module add-ons, implementation costs) apply in any market.
      </P>

      <H2>Switching payroll mid-year: what to plan for</H2>
      <UL>
        <li>Go live at the start of a month, and ideally at the start of a tax year, so your records line up cleanly.</li>
        <li>Load year-to-date figures for every employee so IRP5 totals remain correct at year-end.</li>
        <li>Run one parallel cycle and compare gross pay, PAYE, UIF and net pay against your current process.</li>
        <li>Keep the old payroll data accessible, since SARS can ask for records from before the switch.</li>
      </UL>
      <P>
        For a general view of how a payroll run is built up, from salary structure to statutory deductions, the{" "}
        <A href="/resources/payroll-processing-guide-india">payroll processing walkthrough</A> is written around
        Indian rules but the mechanics of a run are the same. South African rates and filings differ, so use it
        for the process, not the numbers.
      </P>

      <H2>How Manitham HRMS approaches payroll</H2>
      <P>
        Manitham HRMS builds payroll on the same employee record as attendance and leave, so approved leave,
        overtime and late marks are in the run automatically. Read more on the{" "}
        <A href="/payroll-software">payroll software page</A>, or see the wider{" "}
        <A href="/hrms-software">HRMS platform</A>.
      </P>
      <P>
        South African statutory outputs, meaning PAYE, UIF, SDL, EMP201 and IRP5 data, are specific and
        change every year. Rather than make a broad claim here, we&apos;d ask you to{" "}
        <A href="/book-demo">book a demo</A> with your own payroll scenario and we&apos;ll show you exactly what is
        supported today. Questions before that? <A href="/contact">Get in touch</A>, or read the companion guide
        to <A href="/resources/hr-management-software-south-africa">HR management software in South Africa</A>.
      </P>
    </ArticleLayout>
  );
}
