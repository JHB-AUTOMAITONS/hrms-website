import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArticleLayout, A, H2, H3, P, UL } from "@/components/templates/ArticleLayout";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticleBySlug } from "@/lib/data/articles";

const meta = getArticleBySlug("employee-exit-management-checklist")!;

export const metadata: Metadata = buildMetadata({
  path: `/resources/${meta.slug}`,
  primaryKeyword: "employee exit management",
  secondaryKeywords: [
    "employee exit checklist",
    "employee offboarding process",
    "exit process in HR",
    "full and final settlement",
    "employee separation process",
  ],
  searchIntent: "commercial",
  title: "Employee Exit Management Checklist | Manitham HRMS",
  description: meta.excerpt,
  h1: meta.title,
});

const faqs = [
  {
    question: "What is employee exit management?",
    answer:
      "It is the structured process an organisation follows when an employee leaves, covering resignation, notice period, handover, clearance, final settlement, documentation and record updates.",
  },
  {
    question: "What are the steps involved in the employee exit process?",
    answer:
      "Receive and approve the resignation, confirm the notice period and last working day, plan knowledge transfer, start department clearance, collect assets, verify attendance, leave and payroll records, process final settlement, hold an exit interview, complete documentation, and revoke access and update records.",
  },
  {
    question: "What is an employee exit checklist?",
    answer:
      "It is a list of the tasks and sign-offs needed to close an employment, each with a status, so nothing is missed and every exit follows the same steps.",
  },
  {
    question: "What documents are required during employee exit?",
    answer:
      "Commonly the resignation and its acceptance, handover and clearance confirmations, asset return confirmation, settlement records and, where applicable, the relieving letter and experience certificate. Requirements depend on your policy and employment terms.",
  },
  {
    question: "What is the difference between offboarding and onboarding?",
    answer:
      "Onboarding brings a new employee into the organisation. Offboarding closes the employment when someone leaves, handling handover, clearance, settlement and records.",
  },
  {
    question: "What is included in full and final settlement?",
    answer:
      "Typically pending salary, leave encashment where applicable, approved reimbursements, incentives where applicable, and recoveries or deductions that are authorised. What applies depends on employment terms, policy and applicable legal requirements.",
  },
  {
    question: "Why is an employee exit interview important?",
    answer:
      "It shows why people leave and what could be improved, such as management practices or workload, and gives the employee a respectful close.",
  },
  {
    question: "What should HR do on an employee's last working day?",
    answer:
      "Confirm handover and asset returns, check clearances, hold a closing conversation, ensure access removal is scheduled and note which documents and payments are still to be completed.",
  },
  {
    question: "How can HR software simplify employee exit management?",
    answer:
      "By keeping employee information, documents, attendance, leave and payroll data in one record, so HR can check the final period and file exit records without collecting them from separate sources. Exit-specific features such as checklists vary by product.",
  },
  {
    question: "How can companies maintain employee exit records digitally?",
    answer:
      "Store exit documents against each employee's record, use a consistent naming and category approach, restrict access by role, and follow a retention policy agreed with your legal or compliance advisor.",
  },
];

const checklist = [
  ["Resignation", "Resignation received and recorded"],
  ["Approval", "Manager and HR approval"],
  ["Notice period", "Notice period verified"],
  ["Last working day", "Last working day confirmed"],
  ["Handover", "Knowledge transfer completed"],
  ["Clearance", "Department clearance completed"],
  ["Assets", "Company assets returned"],
  ["Attendance", "Attendance and leave records verified"],
  ["Payroll", "Pending salary and deductions reviewed"],
  ["Settlement", "Full and final settlement processed"],
  ["Exit interview", "Exit feedback collected"],
  ["Documentation", "Exit documents prepared"],
  ["Access", "System access removal coordinated"],
  ["Records", "Employee records updated"],
];

const comparison = [
  ["Resignation records", "Paper or email-based", "Centralised digital records"],
  ["Exit status", "Manual tracking", "Digital status tracking, where supported"],
  ["Employee information", "Separate files", "Centralised employee profiles"],
  ["Department coordination", "Manual follow-ups", "Configurable workflows, where available"],
  ["Documentation", "Physical or scattered files", "Digital records, where supported"],
  ["Employee lifecycle", "Separate manual updates", "Connected employee lifecycle information"],
  ["HR reporting", "Manual preparation", "Available reports and dashboards"],
];

function Callout({ children }: { children: ReactNode }) {
  return <div className="mt-8 rounded-2xl border border-brand-600/15 bg-brand-50 p-5 text-slate-700">{children}</div>;
}

function DataTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-ink-900/8">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-brand-50">
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold text-ink-900">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-900/8">
          {rows.map((row) => (
            <tr key={row[0] + row[1]}>
              {row.map((cell, i) => (
                <td key={i} className={i === 0 ? "px-4 py-3 font-medium text-ink-900" : "px-4 py-3 text-slate-600"}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EmployeeExitManagementChecklistArticle() {
  return (
    <ArticleLayout
      meta={meta}
      faqs={faqs}
      relatedLinks={[
        { title: "Employee Management", description: "Employee profiles, documents and lifecycle tracking in one record.", href: "/employee-management" },
        { title: "HRMS Software", description: "The full platform overview.", href: "/hrms-software" },
        { title: "Employee Onboarding Software Guide", description: "The other end of the employee lifecycle.", href: "/resources/employee-onboarding-software-guide" },
        { title: "Manage Employee Documents Digitally", description: "Storing and organising employee documents, including exit papers.", href: "/resources/manage-employee-documents-digitally" },
      ]}
    >
      <P>
        On a Friday afternoon, an employee hands in a resignation email. The manager says it is fine, but nobody
        tells HR for a week. By then the notice period has been counted two different ways, the laptop is with a
        colleague who has since gone on leave, the handover is half a page in an email, and payroll learns about the
        exit when the month&apos;s salary is already being processed.
      </P>
      <P>
        Most HR teams have lived some version of this. Exits are less frequent than hiring, so they are easy to
        leave unstructured, and that is when pending dues, missing documents and unreturned assets pile up.{" "}
        <strong>Employee exit management</strong> gives HR a standard sequence to follow every time someone leaves.
        This guide covers the process, a working checklist, common challenges and what to look for in software.
      </P>

      <H2>What is employee exit management?</H2>
      <P>
        Employee exit management is the set of steps an organisation follows when an employee leaves, from the first
        notice to the final record update. It is also called offboarding or separation management.
      </P>
      <P>
        <strong>Why it matters for HR:</strong> an exit touches the reporting manager, HR, IT, finance and
        administration. Without a standard process, steps are missed or done twice.
      </P>
      <P>
        <strong>Resignation vs exit management:</strong> resignation is the employee&apos;s decision and notice. Exit
        management is everything the organisation does in response: approval, notice period, handover, clearance,
        settlement, documentation and records.
      </P>
      <P>
        <strong>Where it fits:</strong> it is the final stage of the employee lifecycle, after hiring, onboarding,
        employment and performance cycles. A structured offboarding process closes the loop cleanly and leaves a
        complete record.
      </P>

      <H2>Why is employee exit management important?</H2>
      <UL>
        <li><strong>Smooth separation.</strong> The employee knows what to expect and the team knows what is changing.</li>
        <li><strong>Better HR documentation.</strong> Approvals, clearances and letters are on file.</li>
        <li><strong>Proper knowledge transfer.</strong> Work continues without gaps.</li>
        <li><strong>Improved asset management.</strong> Laptops, cards and equipment are accounted for.</li>
        <li><strong>Accurate final settlement.</strong> Dues are checked against verified records.</li>
        <li><strong>Better employee experience.</strong> A respectful exit protects your reputation.</li>
        <li><strong>Fewer administrative mistakes.</strong> A checklist reduces missed steps.</li>
        <li><strong>Organised employee records.</strong> Status and documents are updated, not left open.</li>
        <li><strong>Improved workforce planning.</strong> Reasons for leaving can inform hiring and retention.</li>
      </UL>
      <Callout>
        <strong>Want exit records to sit with the rest of the employee record?</strong> Manitham HRMS keeps employee
        information, documents and lifecycle history in one place.{" "}
        <A href="/employee-management">Explore employee management</A>.
      </Callout>

      <H2>Types of employee exits</H2>
      <P>
        The steps are broadly similar, but the details differ. Procedures and applicable requirements vary by
        employment arrangement and organisational policy.
      </P>

      <H3>Voluntary resignation</H3>
      <P>The employee chooses to leave. This usually involves a resignation letter, notice period, handover and exit interview.</P>

      <H3>Retirement</H3>
      <P>
        The employee leaves on reaching the retirement stage applicable to them. Plan well ahead, especially for
        knowledge transfer, and check which benefits and dues apply under your policy.
      </P>

      <H3>Termination</H3>
      <P>
        The organisation ends the employment. Handle this carefully, document the reason and process, and involve
        your legal or compliance advisor where needed.
      </P>

      <H3>Contract completion</H3>
      <P>
        A fixed-term agreement reaches its end. Confirm the end date, whether any extension is under discussion and
        which closing dues apply.
      </P>

      <H3>Absconding or job abandonment</H3>
      <P>
        The employee stops reporting without following the resignation process. Keep a written record of attendance
        gaps and every attempt to contact them, follow your policy for written notices, and take advice before
        acting on the separation. Avoid assumptions about timelines and let documentation lead.
      </P>

      <H2>Employee exit management process: step-by-step guide</H2>

      <H3>Step 1 – Receive employee resignation</H3>
      <UL>
        <li>Accept the formal resignation in writing.</li>
        <li>Record the date it was received.</li>
        <li>Keep the communication on file.</li>
        <li>Update the employee&apos;s exit status.</li>
      </UL>

      <H3>Step 2 – Review and approve resignation</H3>
      <UL>
        <li>The reporting manager reviews it.</li>
        <li>HR verifies employment details such as joining date, role and contract terms.</li>
        <li>Record the approval or rejection.</li>
        <li>Communicate the next steps to the employee.</li>
      </UL>

      <H3>Step 3 – Confirm notice period and last working day</H3>
      <UL>
        <li>Check the employment terms and company policy.</li>
        <li>Work out the applicable notice period.</li>
        <li>Confirm the expected last working day in writing.</li>
        <li>Record any approved changes, such as a shortened notice.</li>
      </UL>

      <H3>Step 4 – Plan knowledge transfer</H3>
      <UL>
        <li>List responsibilities and ongoing projects.</li>
        <li>Assign handover tasks and a successor.</li>
        <li>Transfer files, logins to shared tools and work information.</li>
        <li>Get written confirmation that handover is complete.</li>
      </UL>

      <H3>Step 5 – Initiate department clearance</H3>
      <P>Send the clearance request early. Typical sign-offs:</P>
      <UL>
        <li><strong>Reporting manager:</strong> handover and pending work.</li>
        <li><strong>HR:</strong> records, documents and policy dues.</li>
        <li><strong>IT:</strong> devices, accounts and data.</li>
        <li><strong>Finance:</strong> advances, loans and pending claims.</li>
        <li><strong>Administration:</strong> ID cards, access cards and facilities.</li>
        <li><strong>Other departments</strong> the employee worked with.</li>
      </UL>

      <H3>Step 6 – Collect company assets</H3>
      <P>Make a list at the start of the notice period and tick items off:</P>
      <UL>
        <li>Laptop and accessories</li>
        <li>ID cards and access cards</li>
        <li>Mobile phones and SIM cards</li>
        <li>Company documents</li>
        <li>Tools and equipment</li>
        <li>Any other assigned items</li>
      </UL>

      <H3>Step 7 – Review attendance, leave and payroll records</H3>
      <UL>
        <li>Verify attendance for the final period.</li>
        <li>Check approved and pending leave.</li>
        <li>Review unpaid absences.</li>
        <li>Verify salary-related information.</li>
        <li>Identify pending reimbursements or deductions.</li>
      </UL>

      <H3>Step 8 – Process full and final settlement</H3>
      <P>Items commonly reviewed:</P>
      <UL>
        <li>Pending salary</li>
        <li>Leave encashment, where applicable</li>
        <li>Approved reimbursements</li>
        <li>Incentives or bonuses, where applicable</li>
        <li>Notice period recovery, where applicable</li>
        <li>Authorised deductions</li>
        <li>Other applicable dues</li>
      </UL>
      <P>
        Settlement calculations depend on employment terms, company policy and applicable legal requirements.
        Confirm timelines and amounts with your payroll and legal or compliance advisors instead of relying on a
        general checklist.
      </P>

      <H3>Step 9 – Conduct employee exit interview</H3>
      <UL>
        <li>Understand why the employee is leaving.</li>
        <li>Ask for feedback on the workplace.</li>
        <li>Note management or operational concerns.</li>
        <li>Record suggestions for improvement.</li>
        <li>Treat the discussion confidentially and share only themes.</li>
      </UL>

      <H3>Step 10 – Complete exit documentation</H3>
      <P>Documents that are usually prepared or collected:</P>
      <UL>
        <li>Resignation acceptance</li>
        <li>Handover confirmation</li>
        <li>Department clearance</li>
        <li>Asset return confirmation</li>
        <li>Full and final settlement records</li>
        <li>Relieving letter, where applicable</li>
        <li>Experience certificate, where applicable</li>
        <li>Other required employment records</li>
      </UL>
      <P>
        For storing these, see our guide to{" "}
        <A href="/resources/manage-employee-documents-digitally">managing employee documents digitally</A>.
      </P>

      <H3>Step 11 – Revoke access and update employee records</H3>
      <UL>
        <li>Coordinate removal of accounts and system access with IT.</li>
        <li>Update the employee&apos;s status.</li>
        <li>Complete the HR record.</li>
        <li>Keep separation documents on file.</li>
        <li>Follow your data retention policy.</li>
      </UL>

      <H2>Employee exit management checklist for HR teams</H2>
      <P>
        Copy this into a spreadsheet or use it as a printed sheet. Add owner and date columns if you want
        accountability per line.
      </P>
      <DataTable
        head={["Stage", "HR checklist item", "Status"]}
        rows={checklist.map(([stage, item]) => [stage, item, "Pending / Completed"])}
      />
      <P>
        <strong>Last working day tip:</strong> on the final day, confirm assets and handover are done, give the
        employee a closing conversation, make sure access removal is scheduled with IT and note which documents are
        still to be issued.
      </P>

      <H2>Common challenges in employee exit management</H2>
      <UL>
        <li><strong>Delayed resignation approvals.</strong> Set a response time for managers and have resignations copied to HR.</li>
        <li><strong>Unclear notice period calculations.</strong> Keep the policy and each employee&apos;s terms in one place and record the agreed dates.</li>
        <li><strong>Incomplete knowledge transfer.</strong> Start in the first week of notice with a written handover list.</li>
        <li><strong>Pending department clearances.</strong> Send all clearance requests on day one and follow up.</li>
        <li><strong>Unreturned assets.</strong> Keep an asset list per employee from joining.</li>
        <li><strong>Inaccurate attendance and leave records.</strong> Reconcile them before final settlement. See <A href="/resources/manage-employee-attendance-multiple-branches">how to manage attendance across multiple branches</A>.</li>
        <li><strong>Final settlement delays.</strong> Begin preparing as soon as the last working day is confirmed.</li>
        <li><strong>Missing employee documents.</strong> Check the file against a document list early.</li>
        <li><strong>Delayed access removal.</strong> Give IT the last working day in advance.</li>
        <li><strong>Poor coordination between departments.</strong> Name one HR owner for each exit.</li>
      </UL>

      <H2>Manual employee exit management vs digital HRMS-based process</H2>
      <DataTable head={["Comparison", "Manual process", "Digital HRMS-based process"]} rows={comparison} />
      <P>
        Not every HRMS supports every exit workflow. Some cover only the employee record and documents, while others
        add clearance and checklist tools. Check which applies before you buy.
      </P>

      <H2>Important features to look for in employee exit management software</H2>
      <H3>Essential for most teams</H3>
      <UL>
        <li><strong>Employee profile management:</strong> one record with role, department and reporting line.</li>
        <li><strong>Employee lifecycle tracking:</strong> exit as part of the employee&apos;s history.</li>
        <li><strong>Attendance and leave records:</strong> reliable data for the final period.</li>
        <li><strong>Payroll information access:</strong> to review pending salary and deductions.</li>
        <li><strong>Employee document management:</strong> exit papers stored with the employee.</li>
        <li><strong>Role-based access permissions:</strong> only the right people see exit and salary details.</li>
      </UL>
      <H3>Valuable, but vary by product</H3>
      <UL>
        <li><strong>Resignation status management</strong> and <strong>notice period tracking.</strong></li>
        <li><strong>Exit checklist management</strong> and <strong>department clearance workflows.</strong></li>
        <li><strong>Company asset tracking.</strong></li>
        <li><strong>Exit reports and analytics.</strong></li>
      </UL>
      <P>If a vendor claims one of the optional features, ask to see it working with your own scenario.</P>

      <H2>How Manitham HRMS helps manage the employee lifecycle</H2>
      <P>
        <A href="/hrms-software">Manitham HRMS</A> keeps one employee record per person, which attendance, leave,
        payroll and other modules read from. For exits, this is what the product offers today:
      </P>
      <UL>
        <li><strong>Employee management and information:</strong> profiles, department, designation and reporting line in one record. See <A href="/employee-management">employee management</A>.</li>
        <li><strong>Employee lifecycle management:</strong> track an employee from onboarding through transfers, promotions and exit.</li>
        <li><strong>Employee records and documents:</strong> offer letters, ID proofs, contracts and certificates stored against each employee.</li>
        <li><strong>Attendance management:</strong> attendance history is in the same system. See <A href="/attendance-management">attendance management</A>.</li>
        <li><strong>Leave management:</strong> leave history and balances on the same record. See <A href="/leave-management">leave management</A>.</li>
        <li><strong>Payroll management:</strong> payroll history is organised and exportable. See <A href="/payroll-software">payroll software</A>.</li>
        <li><strong>Role-based permissions</strong> over employee records.</li>
        <li><strong>Reports:</strong> attendance, leave and payroll reports.</li>
      </UL>
      <P>
        Because these sit in one place, HR does not have to collect attendance, leave and payroll details from
        separate files when checking an employee&apos;s final period.
      </P>
      <P>
        Be clear about scope: the product pages do not describe resignation workflows, clearance workflows, asset
        tracking, automatic final settlement or automatic access removal, so we do not claim them. If these are
        important to you, ask for a demo built around your exit process and confirm what is covered.
      </P>
      <Callout>
        <strong>Want your employee lifecycle information in one place?</strong> Explore Manitham HRMS, or{" "}
        <A href="/book-demo">book a product demo</A> and walk through an exit scenario.
      </Callout>

      <H2>Best practices for effective employee exit management</H2>
      <UL>
        <li><strong>Maintain a standard exit policy</strong> that applies to everyone.</li>
        <li><strong>Document every resignation</strong> and each approval.</li>
        <li><strong>Communicate the notice period clearly</strong> and in writing.</li>
        <li><strong>Plan knowledge transfer early.</strong></li>
        <li><strong>Coordinate with all departments</strong> from day one.</li>
        <li><strong>Track company asset returns</strong> from a list created at joining.</li>
        <li><strong>Verify attendance and leave records</strong> before settlement.</li>
        <li><strong>Review final settlement details carefully</strong> with payroll.</li>
        <li><strong>Run professional exit interviews,</strong> ideally with someone other than the direct manager.</li>
        <li><strong>Keep exit documentation complete</strong> and filed with the employee record.</li>
        <li><strong>Update records promptly,</strong> including status and department headcounts.</li>
        <li><strong>Follow data retention and privacy practices,</strong> and check requirements with your legal or compliance advisor.</li>
      </UL>
      <P>
        For the onboarding side of the lifecycle, see our{" "}
        <A href="/resources/employee-onboarding-software-guide">employee onboarding guide</A>. To reduce manual
        tracking across HR, see <A href="/resources/automate-hr-processes">how to automate HR processes</A>.
      </P>

      <H2>Common mistakes HR teams should avoid</H2>
      <UL>
        <li><strong>Starting too late.</strong> Exit activities should begin at notice, not on the last day.</li>
        <li><strong>Not documenting approvals.</strong> Verbal approvals cause disputes later.</li>
        <li><strong>Ignoring knowledge transfer.</strong> The team pays for it for months.</li>
        <li><strong>Missing asset returns.</strong> Items go unrecovered because nobody listed them.</li>
        <li><strong>Overlooking pending reimbursements.</strong> The employee returns with a complaint.</li>
        <li><strong>Wrong settlement assumptions.</strong> Calculations rest on terms and policy, not on a rule of thumb.</li>
        <li><strong>Forgetting to update status.</strong> The person stays active in the system and can show up in payroll or reports.</li>
        <li><strong>Not coordinating access removal.</strong> Accounts stay open after departure.</li>
        <li><strong>Not keeping exit records.</strong> There is nothing to refer to later.</li>
      </UL>

      <H2>Conclusion</H2>
      <P>
        A structured employee exit management process protects the business and treats the departing employee
        fairly. Tracking the resignation, planning knowledge transfer, finishing clearance, verifying records,
        processing the final settlement and updating employee records are not extras. They are what keeps each exit
        orderly and well documented.
      </P>
      <P>
        If you want to see how employee information and lifecycle records sit together,{" "}
        <A href="/hrms-software">explore Manitham HRMS</A> or <A href="/book-demo">book a product demo</A> and bring
        your own exit process to the conversation.
      </P>
    </ArticleLayout>
  );
}
