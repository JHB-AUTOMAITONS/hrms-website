import { ArrowDown, ArrowRight, CircleCheck, Link2, RefreshCw, Send, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Explanatory visuals for the leave management page. These are concept
 * illustrations (definitions, a worked example, a process flow) — not
 * product screenshots — so they must not depict UI the product doesn't have.
 */

const leaveTypes: { code: string; name: string; description: string }[] = [
  { code: "CL", name: "Casual Leave", description: "Short, often unplanned absences for personal matters, usually a fixed number of days per year." },
  { code: "SL", name: "Sick Leave", description: "Time off for illness or medical needs. Longer absences may need a medical certificate under company policy." },
  { code: "EL", name: "Earned Leave", description: "Leave that builds up as an employee works, typically used for planned time off." },
  { code: "PL", name: "Privilege Leave", description: "Another name many companies use for earned leave, with the same accrual-based logic." },
  { code: "AL", name: "Annual Leave", description: "A yearly paid leave entitlement. Some companies use it in place of separate CL and EL buckets." },
  { code: "ML", name: "Maternity Leave", description: "Leave around childbirth or adoption. Eligibility and duration are usually set by law as well as company policy." },
  { code: "PT", name: "Paternity Leave", description: "Leave for new fathers or partners, defined by company policy and, in some places, by regulation." },
  { code: "CO", name: "Compensatory Off", description: "Time off granted in exchange for working on a holiday, weekly off or extra hours." },
  { code: "BL", name: "Bereavement Leave", description: "Leave following the death of a family member, as defined in the company policy." },
  { code: "LOP", name: "Unpaid Leave (Loss of Pay)", description: "Leave taken without pay, commonly when paid balances are used up. It reduces payable days in payroll." },
  { code: "OH", name: "Optional Holidays", description: "A list of restricted holidays from which each employee picks a set number per year." },
];

export function LeaveTypesGrid() {
  return (
    <dl className="glass grid grid-cols-1 gap-x-10 gap-y-6 rounded-2xl p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
      {leaveTypes.map((type) => (
        <div key={type.code} className="flex items-start gap-3">
          <span
            className="mt-0.5 flex h-7 min-w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 px-1.5 text-xs font-bold text-brand-700 ring-1 ring-brand-900/5"
            aria-hidden="true"
          >
            {type.code}
          </span>
          <div>
            <dt className="font-semibold text-ink-900">
              {type.name}
              {["CL", "SL", "EL", "PL"].includes(type.code) ? (
                <span className="font-normal text-slate-500"> ({type.code})</span>
              ) : null}
            </dt>
            <dd className="mt-1 text-sm text-pretty text-slate-600">{type.description}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

export function LeaveBalanceExample() {
  const rows = [
    { label: "Annual leave entitlement", value: "18 days" },
    { label: "Approved leave taken", value: "− 5 days" },
  ];
  return (
    <figure className="glass rounded-2xl p-6">
      <figcaption className="text-xs font-semibold tracking-wide text-brand-700 uppercase">
        Illustrative leave balance calculation
      </figcaption>
      <dl className="mt-4 divide-y divide-ink-900/10 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4 py-3">
            <dt className="text-slate-600">{row.label}</dt>
            <dd className="font-semibold text-ink-900 tabular-nums">{row.value}</dd>
          </div>
        ))}
        <div className="flex items-center justify-between gap-4 py-3">
          <dt className="font-semibold text-ink-900">Remaining balance</dt>
          <dd className="font-display text-xl font-bold text-accent-600 tabular-nums">13 days</dd>
        </div>
      </dl>
      <div
        className="mt-1 flex h-2.5 overflow-hidden rounded-full bg-slate-100"
        role="img"
        aria-label="5 of 18 days used, 13 days remaining"
      >
        <div className="bg-brand-600" style={{ width: `${(5 / 18) * 100}%` }} />
        <div className="bg-accent-500/70" style={{ width: `${(13 / 18) * 100}%` }} />
      </div>
      <div className="mt-2 flex justify-between text-xs text-slate-500">
        <span>5 used</span>
        <span>13 available</span>
      </div>
      <p className="mt-5 rounded-xl bg-brand-50/80 p-3 text-xs text-pretty text-slate-600">
        <span className="font-semibold text-ink-900">General formula:</span> opening or carried-forward balance + leave
        allocated or accrued ± adjustments − approved leave taken = available balance.
      </p>
      <p className="mt-3 text-xs text-pretty text-slate-500">
        Example only. Whether a pending request is held against the balance, and when accrued days become usable,
        depends on your company&apos;s leave policy.
      </p>
    </figure>
  );
}

export function SandwichLeaveExample() {
  const days = [
    { day: "Fri", label: "Leave", leave: true },
    { day: "Sat", label: "Weekly off", leave: false },
    { day: "Sun", label: "Weekly off", leave: false },
    { day: "Mon", label: "Leave", leave: true },
  ];
  return (
    <figure className="glass rounded-2xl p-6">
      <figcaption className="text-xs font-semibold tracking-wide text-brand-700 uppercase">
        Example: leave on either side of a weekend
      </figcaption>
      <ol className="mt-4 grid grid-cols-4 gap-2">
        {days.map((item) => (
          <li
            key={item.day}
            className={`rounded-xl border p-3 text-center ${
              item.leave ? "border-brand-200 bg-brand-50 text-brand-800" : "border-ink-900/10 bg-slate-50 text-slate-500"
            }`}
          >
            <span className="block text-sm font-bold">{item.day}</span>
            <span className="mt-0.5 block text-[0.7rem] leading-tight font-medium">{item.label}</span>
          </li>
        ))}
      </ol>
      <dl className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
        <div className="rounded-xl border border-ink-900/10 p-4">
          <dt className="text-slate-600">Policy without a sandwich rule</dt>
          <dd className="font-display mt-1 text-lg font-bold text-ink-900">2 days deducted</dd>
        </div>
        <div className="rounded-xl border border-ink-900/10 p-4">
          <dt className="text-slate-600">Policy with a sandwich rule</dt>
          <dd className="font-display mt-1 text-lg font-bold text-ink-900">4 days deducted</dd>
        </div>
      </dl>
      <p className="mt-4 text-xs text-pretty text-slate-500">
        Illustration of a policy choice, not a legal rule. Whether weekly offs and holidays between leave days are
        counted is something each company defines in its own leave policy.
      </p>
    </figure>
  );
}

const workflowSteps: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Send, title: "Employee submits a request", description: "Picks the leave type and dates in self-service after checking the balance." },
  { icon: UserCheck, title: "Manager reviews it", description: "The request routes to the right manager and stays visible as a pending approval." },
  { icon: CircleCheck, title: "Approved or rejected", description: "The decision is recorded either way, and the employee sees the status." },
  { icon: RefreshCw, title: "Leave records update", description: "The balance for that leave type changes when a request is approved." },
  { icon: Link2, title: "Attendance and payroll reflect it", description: "Approved leave carries into attendance and payroll without re-entry." },
];

export function LeaveWorkflow() {
  return (
    <ol className="grid grid-cols-1 gap-3 lg:grid-cols-5 lg:gap-4">
      {workflowSteps.map((step, index) => (
        <li key={step.title} className="relative">
          <div className="glass flex h-full items-start gap-4 rounded-2xl p-5 lg:flex-col lg:gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-900/5">
              <step.icon className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase">Step {index + 1}</p>
              <p className="font-display mt-1 font-bold text-ink-900">{step.title}</p>
              <p className="mt-1.5 text-sm text-pretty text-slate-600">{step.description}</p>
            </div>
          </div>
          {index < workflowSteps.length - 1 ? (
            <>
              <ArrowDown className="mx-auto mt-3 size-4 text-brand-400 lg:hidden" aria-hidden="true" />
              <ArrowRight
                className="absolute top-1/2 -right-3.5 z-10 hidden size-4 -translate-y-1/2 text-brand-400 lg:block"
                aria-hidden="true"
              />
            </>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

const setupSteps: { title: string; description: string }[] = [
  { title: "Define company leave policies", description: "Write down who gets which leave, how much, and the rules for applying. Software can only enforce a policy that exists." },
  { title: "Configure leave types and entitlements", description: "Create each leave type your company offers and the number of days it carries." },
  { title: "Define accrual and carry-forward rules", description: "Decide how each type is credited over the leave year and what happens to unused days." },
  { title: "Configure approval workflows", description: "Map requests to the managers who should approve them, following your reporting structure." },
  { title: "Set company and regional holiday calendars", description: "Add company-wide holidays, plus location-specific lists where offices observe different days." },
  { title: "Assign leave policies to employees", description: "Make sure every employee record carries the right entitlements and opening balances." },
  { title: "Open leave requests to employees", description: "Show employees how to check balances and apply online, and managers how to approve." },
  { title: "Monitor leave balances and reports", description: "Review pending approvals, balances and leave usage regularly, and adjust the policy when patterns change." },
];

export function LeaveSetupSteps() {
  return (
    <ol className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {setupSteps.map((step, index) => (
        <li key={step.title} className="border-t-2 border-brand-200 pt-4">
          <span className="font-display text-sm font-bold text-brand-600 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="font-display mt-1 font-bold text-ink-900">{step.title}</p>
          <p className="mt-1.5 text-sm text-pretty text-slate-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
