import type { Metadata } from "next";
import type { ReactNode } from "react";
import { A, ArticleLayout, H2, H3, OL, P, UL } from "@/components/templates/ArticleLayout";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticleBySlug } from "@/lib/data/articles";

const meta = getArticleBySlug("overtime-calculation-formula")!;

export const metadata: Metadata = buildMetadata({
  path: `/resources/${meta.slug}`,
  primaryKeyword: "overtime calculation formula",
  secondaryKeywords: [
    "how to calculate overtime salary",
    "overtime calculation in India",
    "overtime pay calculation",
    "overtime salary formula",
    "overtime calculation examples",
    "employee overtime management",
  ],
  searchIntent: "informational",
  title: "Overtime Calculation Formula in India: Steps and Examples",
  description: meta.excerpt,
  h1: meta.title,
});

const SOURCES = {
  pibCodes: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2192463",
  pibBackgrounder: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2192524",
  oshCode:
    "https://prsindia.org/files/bills_acts/acts_parliament/2020/Occupational%20Safety,%20Health%20And%20Working%20Conditions%20Code,%202020.pdf",
  wageCode: "https://prsindia.org/billtrack/code-wages-2019",
};

/** Outbound link to an official or reference source. */
function Source({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 hover:underline">
      {children}
    </a>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="glass mt-4 overflow-x-auto rounded-2xl">
      <table className="w-full border-collapse text-left text-xs sm:text-sm">
        <thead>
          <tr className="border-b border-ink-900/8">
            {headers.map((header) => (
              <th key={header} scope="col" className="p-3 sm:p-4 font-semibold text-ink-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([first, ...rest], rowIndex) => (
            <tr key={rowIndex} className="border-b border-ink-900/6 align-top last:border-0">
              <th scope="row" className="p-3 sm:p-4 font-semibold text-ink-900">
                {first}
              </th>
              {rest.map((cell, index) => (
                <td key={index} className="p-3 sm:p-4 text-slate-600">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const faqs = [
  {
    question: "What is the overtime calculation formula in India?",
    answer:
      "Overtime pay = overtime hours × hourly rate × overtime multiplier. The hourly rate is the wage used as the overtime base divided by the normal working hours in the wage period. For workers covered by the labour codes, the multiplier is twice the rate of wages. Check which wage components form the base and which working-hour limits apply to your establishment and state.",
  },
  {
    question: "Is overtime always paid at double the rate in India?",
    answer:
      "For workers covered by the Occupational Safety, Health and Working Conditions Code, 2020, overtime beyond the hours prescribed by the appropriate Government is paid at twice the rate of wages, and the Code on Wages, 2019 also sets an overtime floor of twice the normal rate. Employees outside these definitions, such as those employed mainly in a managerial capacity, are usually governed by their employment contract and company policy instead.",
  },
  {
    question: "Are managers and senior staff entitled to overtime pay?",
    answer:
      "Under the OSH Code, the definition of 'worker' excludes people employed mainly in a managerial or administrative capacity, and people in a supervisory capacity drawing wages above ₹18,000 per month (or an amount the Central Government notifies). Overtime for these employees depends on their contract and your policy.",
  },
  {
    question: "Can an employer make overtime compulsory?",
    answer:
      "The OSH Code says a worker shall be required to work overtime subject to the worker's consent. In practice, record that consent along with the overtime hours, and check any additional conditions in your state's rules.",
  },
  {
    question: "Should I divide monthly salary by 26 or 30 to get the daily rate?",
    answer:
      "Both conventions are used by Indian employers, and they give different results. Dividing by 26 reflects working days in a six-day week; dividing by 30 uses calendar days and produces a lower hourly rate. Follow any method prescribed by the rules that apply to you, document the method in your overtime policy, and apply it consistently.",
  },
];

export default function OvertimeCalculationFormulaArticle() {
  return (
    <ArticleLayout
      meta={meta}
      faqs={faqs}
      relatedLinks={[
        { title: "Attendance Management", description: "Shift schedules, check-ins and overtime captured in one place.", href: "/attendance-management" },
        { title: "Payroll Software", description: "Pay runs that start from attendance and leave records.", href: "/payroll-software" },
        { title: "New Wage Code 2026", description: "How the labour codes change the wage definition and CTC structuring.", href: "/resources/new-wage-code-2026-india" },
      ]}
    >
      <P>
        The basic overtime calculation formula is simple: <strong>overtime pay = overtime hours × hourly rate ×
        overtime multiplier</strong>. For workers covered by India&apos;s labour codes, that multiplier is two, so each
        extra hour is paid at twice the normal hourly rate. The harder part is everything around the formula: which
        employees qualify, which salary components make up the hourly rate, and when an hour actually counts as
        overtime.
      </P>
      <P>
        This guide walks through each of those questions with worked examples, so HR and payroll teams can calculate
        overtime salary accurately and explain the result to employees.
      </P>

      <H2>What overtime salary means</H2>
      <P>
        Overtime salary is the extra pay an employee earns for working beyond the normal working hours fixed for them,
        whether in a day or in a week. It is paid on top of the regular wage for the period, usually in the same
        payroll cycle, and appears as a separate line on the payslip.
      </P>

      <H2>The legal position on overtime in India</H2>
      <P>
        The government made the four labour codes effective from 21 November 2025,{" "}
        <Source href={SOURCES.pibCodes}>according to the Press Information Bureau</Source>, consolidating 29 earlier
        labour laws. Two of them matter for overtime pay calculation.
      </P>
      <H3>Occupational Safety, Health and Working Conditions Code, 2020</H3>
      <P>
        Section 25 of the{" "}
        <Source href={SOURCES.oshCode}>OSH Code</Source> says no worker shall be required or allowed to work more
        than eight hours in a day, with intervals and spread-over notified by the appropriate Government. Section 27
        then sets out the overtime rule:
      </P>
      <UL>
        <li>Overtime is paid at <strong>twice the rate of wages</strong>.</li>
        <li>
          It applies when a worker works beyond the hours prescribed by the appropriate Government in a day or in a
          week.
        </li>
        <li>
          Overtime is counted on a <strong>daily or weekly basis, whichever is more favourable</strong> to the
          worker.
        </li>
        <li>Overtime is subject to the worker&apos;s consent.</li>
        <li>The appropriate Government may prescribe a cap on total overtime hours.</li>
      </UL>
      <H3>Code on Wages, 2019</H3>
      <P>
        The <Source href={SOURCES.wageCode}>Code on Wages</Source> replaced laws including the Minimum Wages Act,
        1948. It provides that where an employee works beyond a normal working day, the overtime rate shall not be
        less than twice the normal rate of wages. The{" "}
        <Source href={SOURCES.pibBackgrounder}>PIB backgrounder on the labour reforms</Source> summarises the
        position as normal working hours capped at 8 hours a day and 48 hours a week, with overtime allowed only with
        worker consent and paid at twice the regular rate.
      </P>
      <H3>Where state rules come in</H3>
      <P>
        Much of the detail, including daily and weekly hours, spread-over, and the quarterly overtime cap, is left to
        the &ldquo;appropriate Government&rdquo;. For most private establishments that means the state. Rules under
        the codes are being notified by the Centre and the states at different times, so confirm the current position
        for each state you operate in, and for your type of establishment, before you finalise an overtime policy.
      </P>

      <H2>Who is eligible for overtime pay?</H2>
      <P>
        Under the OSH Code, a &ldquo;worker&rdquo; includes people doing manual, skilled, technical, operational,
        clerical or supervisory work. It excludes people employed mainly in a managerial or administrative capacity,
        and people in a supervisory capacity drawing wages above ₹18,000 a month (or an amount the Central Government
        notifies). So eligibility depends on what an employee actually does and earns, not on their designation.
      </P>
      <P>
        Employees outside these definitions are not automatically barred from overtime. Their entitlement comes from
        the appointment letter, company policy or a settlement, so read those documents before deciding.
      </P>

      <H2>The overtime calculation formula, step by step</H2>
      <P>Here is the overtime calculation formula broken into the three numbers you need:</P>
      <OL>
        <li>
          <strong>Hourly rate</strong> = monthly wage used as the overtime base ÷ (working days in the month × normal
          hours per day)
        </li>
        <li>
          <strong>Overtime rate</strong> = hourly rate × 2
        </li>
        <li>
          <strong>Overtime pay</strong> = overtime rate × overtime hours
        </li>
      </OL>
      <H3>Which salary components form the base?</H3>
      <P>
        Under the codes, &ldquo;wages&rdquo; includes basic pay, dearness allowance and retaining allowance, and lists
        exclusions such as house rent allowance (HRA) and conveyance allowance. However, it adds back excluded
        payments above 50% of total remuneration, and a second proviso brings some excluded items back into the
        calculation &ldquo;for the purpose of payment of wages&rdquo;. Because of this, settle your overtime base with
        your legal or payroll advisor, then write it into your policy. Our guide to the{" "}
        <A href="/resources/new-wage-code-2026-india">new wage code and CTC structuring</A> explains the 50% rule in
        more detail.
      </P>

      <H2>Overtime calculation examples</H2>
      <P>
        These overtime calculation examples use illustrative figures. Each states its assumptions so you can swap in
        your own numbers.
      </P>
      <H3>Example 1: monthly salary to hourly rate</H3>
      <P>
        Assumptions: the overtime base is basic pay plus DA of ₹20,000 a month, the employee works a six-day week (26
        working days a month), and the normal working day is 8 hours. The employee logged 12 overtime hours this
        month.
      </P>
      <DataTable
        headers={["Step", "Calculation", "Result"]}
        rows={[
          ["Normal hours in the month", "26 days × 8 hours", "208 hours"],
          ["Hourly rate", "₹20,000 ÷ 208", "₹96.15"],
          ["Overtime rate", "₹96.15 × 2", "₹192.31"],
          ["Overtime pay", "₹20,000 × 2 × 12 ÷ 208", "₹2,307.69"],
        ]}
      />
      <P>
        Calculate the final figure from the unrounded rate, as in the last row. Rounding the hourly rate first
        (₹192.31 × 12 = ₹2,307.72) creates small differences that add up across a large workforce.
      </P>

      <H3>Example 2: how the base and divisor change the answer</H3>
      <P>
        The same 12 overtime hours produce very different payouts depending on two policy choices. Here, the
        employee&apos;s gross pay is ₹30,000: ₹14,000 basic, ₹6,000 DA, ₹8,000 HRA and ₹2,000 conveyance.
      </P>
      <DataTable
        headers={["Overtime base", "Divisor", "Hourly rate", "Pay for 12 OT hours"]}
        rows={[
          ["Basic + DA (₹20,000)", "26 × 8 = 208", "₹96.15", "₹2,307.69"],
          ["Basic + DA (₹20,000)", "30 × 8 = 240", "₹83.33", "₹2,000.00"],
          ["Gross pay (₹30,000)", "26 × 8 = 208", "₹144.23", "₹3,461.54"],
        ]}
      />
      <P>
        Neither choice is a rounding detail: across 200 employees, the gap between the first and third rows is
        large enough to matter in an inspection or a dispute. Pick the method the applicable rules support, then apply
        it every month.
      </P>

      <H3>Example 3: daily vs weekly overtime</H3>
      <P>
        The OSH Code counts overtime daily or weekly, whichever favours the worker. Take a worker in a state where the
        prescribed limits are 8 hours a day and 48 hours a week, on a six-day week, who works:
      </P>
      <DataTable
        headers={["Day", "Hours worked", "Daily overtime"]}
        rows={[
          ["Monday", "10", "2"],
          ["Tuesday", "10", "2"],
          ["Wednesday", "6", "0"],
          ["Thursday", "6", "0"],
          ["Friday", "8", "0"],
          ["Saturday", "8", "0"],
          ["Total", "48", "4"],
        ]}
      />
      <P>
        On a weekly basis, 48 hours means no overtime. On a daily basis, there are 4 overtime hours. The daily count
        is more favourable, so 4 hours are payable. At the Example 1 rate, that is ₹20,000 × 2 × 4 ÷ 208 =
        <strong> ₹769.23</strong>. Systems that only check weekly totals miss this case.
      </P>

      <H3>Example 4: a daily-rated worker</H3>
      <P>
        Assumptions: daily wage ₹720, normal day of 8 hours, 3 overtime hours. The hourly rate is ₹720 ÷ 8 = ₹90, the
        overtime rate is ₹180, and overtime pay is ₹180 × 3 = <strong>₹540</strong>.
      </P>

      <H2>Common overtime calculation mistakes employers make</H2>
      <UL>
        <li>
          <strong>Using a flat overtime allowance.</strong> A fixed monthly amount rarely matches hours worked × twice
          the rate for covered workers.
        </li>
        <li>
          <strong>Paying 1.5× by habit.</strong> Rates borrowed from other countries or old policies may fall short of
          the statutory twice-the-rate requirement for covered workers.
        </li>
        <li>
          <strong>Checking only weekly totals.</strong> As Example 3 shows, daily overtime can be payable even when the
          weekly total is within limits.
        </li>
        <li>
          <strong>Deciding eligibility by job title.</strong> A &ldquo;supervisor&rdquo; earning below the wage
          threshold may still be a worker under the OSH Code.
        </li>
        <li>
          <strong>Switching divisors month to month.</strong> Using 26 one month and 30 the next makes payouts
          impossible to explain.
        </li>
        <li>
          <strong>No record of consent or approval.</strong> Overtime should be agreed and approved, not discovered at
          month end.
        </li>
        <li>
          <strong>Ignoring the quarterly cap.</strong> Check whether your state has prescribed a limit on total
          overtime hours.
        </li>
      </UL>

      <H2>How to track overtime hours and keep accurate records</H2>
      <P>
        Good employee overtime management starts with reliable time data. A few practices make overtime pay
        calculation much easier to defend:
      </P>
      <UL>
        <li>Record actual check-in and check-out times, not just present or absent.</li>
        <li>Assign each employee a shift, so overtime is measured against their own normal hours.</li>
        <li>Capture manager approval and the worker&apos;s consent before or alongside the overtime.</li>
        <li>Keep daily totals, not only weekly or monthly ones.</li>
        <li>Show overtime hours, rate and amount separately on the payslip.</li>
        <li>Retain the records for the period your state&apos;s rules require.</li>
      </UL>
      <P>
        If you are still choosing a time-capture method, our comparison of{" "}
        <A href="/resources/employee-attendance-tracking-guide">biometric, GPS and manual attendance tracking</A>{" "}
        covers the trade-offs.
      </P>

      <H2>How HRMS software helps with overtime and payroll</H2>
      <P>
        Spreadsheets struggle with overtime because the inputs live in different places: punch logs, shift rosters,
        approvals and salary structures. In Manitham HRMS,{" "}
        <A href="/attendance-management">attendance and shift management</A> compares each employee&apos;s check-in
        and check-out against their assigned shift to calculate overtime automatically. Those attendance records then
        feed into <A href="/payroll-software">payroll processing</A>, so overtime hours do not need to be re-keyed
        before each pay run.
      </P>
      <P>
        Because the shift, attendance and salary data sit on the same{" "}
        <A href="/employee-management">employee record</A>, HR can see where an overtime figure came from when an
        employee asks. Your overtime base, divisor and eligibility rules still need to reflect your policy and the
        rules that apply to you, so confirm them during setup. For the wider picture, see our{" "}
        <A href="/hrms-software-india">HRMS software for Indian businesses</A>.
      </P>

      <H2>Overtime calculation checklist</H2>
      <OL>
        <li>Identify which employees are workers under the applicable code and which are covered by contract only.</li>
        <li>Confirm normal daily and weekly hours, spread-over and any overtime cap under your state&apos;s rules.</li>
        <li>Define the salary components in the overtime base and document them.</li>
        <li>Fix one divisor (for example, 26 × 8) and apply it consistently.</li>
        <li>Count overtime daily and weekly, and pay whichever is more favourable.</li>
        <li>Record consent and manager approval for overtime.</li>
        <li>Calculate from unrounded rates and round only the final amount.</li>
        <li>Show overtime separately on payslips and keep the records.</li>
        <li>Review the policy whenever central or state rules change.</li>
      </OL>

      <H2>Conclusion</H2>
      <P>
        The overtime calculation formula itself fits on one line. Getting it right in India depends on the inputs:
        who counts as a worker, which components form the wage base, which hours count as overtime under your
        state&apos;s rules, and whether overtime is checked daily as well as weekly. Write those decisions into a
        policy, capture accurate time data, and the monthly calculation becomes routine. If you want to see how
        attendance-based overtime flows into payroll, <A href="/book-demo">book a demo of Manitham HRMS</A>.
      </P>
      <p className="mt-6 text-sm text-pretty leading-6 text-slate-500">
        This article is general information, not legal advice. Rules may differ by state, establishment type and
        employee category, so confirm the current position with your labour law advisor.
      </p>
    </ArticleLayout>
  );
}
