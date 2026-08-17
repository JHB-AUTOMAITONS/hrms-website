import { CheckCircle2, Clock, IndianRupee } from "lucide-react";

/**
 * Stylized, decorative product illustrations built entirely from CSS/SVG
 * primitives — never presented as literal product screenshots. Used in
 * hero and feature sections in place of stock photography or fabricated
 * screenshots we don't actually have.
 */

type MockupKind = "overview" | "attendance" | "payroll" | "leave" | "performance" | "recruitment" | "compliance";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-ink-900/8 bg-white shadow-2xl shadow-ink-900/10">
      <div className="flex h-9 items-center gap-1.5 border-b border-ink-900/5 bg-slate-50 px-4">
        <span className="size-2.5 rounded-full bg-slate-300" />
        <span className="size-2.5 rounded-full bg-slate-300" />
        <span className="size-2.5 rounded-full bg-slate-300" />
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

function StatTile({ label, value, tone = "brand" }: { label: string; value: string; tone?: "brand" | "accent" }) {
  return (
    <div className="rounded-xl border border-ink-900/6 bg-slate-50 p-3.5">
      <p className="text-xs text-slate-500">{label}</p>
      <p className={`mt-1 text-lg font-bold ${tone === "accent" ? "text-accent-600" : "text-ink-900"}`}>{value}</p>
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
      {initials}
    </span>
  );
}

function StatusBadge({ label, tone }: { label: string; tone: "green" | "amber" | "slate" }) {
  const tones = {
    green: "bg-accent-500/10 text-accent-600",
    amber: "bg-amber-500/10 text-amber-600",
    slate: "bg-slate-200 text-slate-600",
  };
  return <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>{label}</span>;
}

function Overview() {
  const rows = [
    { name: "Aditi Rao", initials: "AR", role: "Product Design", status: "Present" as const },
    { name: "Karthik Iyer", initials: "KI", role: "Backend Engineering", status: "WFH" as const },
    { name: "Meera Nair", initials: "MN", role: "Talent Acquisition", status: "On Leave" as const },
  ];
  const statusTone = { Present: "green", WFH: "slate", "On Leave": "amber" } as const;

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile label="Employees" value="128" />
        <StatTile label="Present Today" value="96%" tone="accent" />
        <StatTile label="On Leave" value="4" />
        <StatTile label="Payroll" value="Processed" tone="accent" />
      </div>
      <div className="mt-4 space-y-2.5">
        {rows.map((row) => (
          <div key={row.name} className="flex items-center gap-3 rounded-xl border border-ink-900/6 p-2.5">
            <Avatar initials={row.initials} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink-900">{row.name}</p>
              <p className="truncate text-xs text-slate-500">{row.role}</p>
            </div>
            <StatusBadge label={row.status} tone={statusTone[row.status]} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Attendance() {
  const rows = [
    { name: "Aditi Rao", initials: "AR", in: "09:02 AM", out: "—", status: "On time" as const },
    { name: "Karthik Iyer", initials: "KI", in: "09:41 AM", out: "—", status: "Late" as const },
    { name: "Meera Nair", initials: "MN", in: "08:55 AM", out: "06:10 PM", status: "On time" as const },
  ];
  return (
    <div>
      <div className="flex items-center justify-between rounded-xl bg-brand-50 p-3.5">
        <div>
          <p className="text-xs text-slate-500">Today&apos;s attendance</p>
          <p className="text-lg font-bold text-ink-900">118 / 128 checked in</p>
        </div>
        <Clock className="size-6 text-brand-600" aria-hidden="true" />
      </div>
      <div className="mt-4 space-y-2.5">
        {rows.map((row) => (
          <div key={row.name} className="flex items-center gap-3 rounded-xl border border-ink-900/6 p-2.5">
            <Avatar initials={row.initials} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink-900">{row.name}</p>
              <p className="text-xs text-slate-500">In {row.in} · Out {row.out}</p>
            </div>
            <StatusBadge label={row.status} tone={row.status === "Late" ? "amber" : "green"} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Payroll() {
  const lines = [
    { label: "Basic + HRA", value: "₹58,000" },
    { label: "PF deduction", value: "− ₹4,320" },
    { label: "ESI deduction", value: "− ₹610" },
    { label: "Professional tax", value: "− ₹200" },
    { label: "TDS", value: "− ₹1,850" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between rounded-xl bg-brand-50 p-3.5">
        <div>
          <p className="text-xs text-slate-500">February payroll run</p>
          <p className="text-lg font-bold text-ink-900">128 employees · ₹64.2L</p>
        </div>
        <IndianRupee className="size-6 text-brand-600" aria-hidden="true" />
      </div>
      <div className="mt-4 rounded-xl border border-ink-900/6 p-4">
        <p className="text-sm font-semibold text-ink-900">Aditi Rao — Payslip preview</p>
        <div className="mt-3 space-y-2">
          {lines.map((line) => (
            <div key={line.label} className="flex items-center justify-between text-sm">
              <span className="text-slate-500">{line.label}</span>
              <span className="font-medium text-ink-900">{line.value}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-ink-900/6 pt-3">
          <span className="text-sm font-semibold text-ink-900">Net pay</span>
          <span className="text-base font-bold text-accent-600">₹51,020</span>
        </div>
      </div>
    </div>
  );
}

function Leave() {
  const requests = [
    { name: "Karthik Iyer", initials: "KI", type: "Sick Leave", dates: "12–13 Feb" },
    { name: "Meera Nair", initials: "MN", type: "Earned Leave", dates: "18–21 Feb" },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <StatTile label="Casual" value="6 / 12" />
        <StatTile label="Sick" value="4 / 8" />
        <StatTile label="Earned" value="9 / 15" tone="accent" />
      </div>
      <div className="mt-4 space-y-2.5">
        {requests.map((req) => (
          <div key={req.name} className="flex items-center gap-3 rounded-xl border border-ink-900/6 p-2.5">
            <Avatar initials={req.initials} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink-900">{req.name}</p>
              <p className="text-xs text-slate-500">{req.type} · {req.dates}</p>
            </div>
            <div className="flex gap-1.5">
              <span className="rounded-lg bg-accent-500/10 px-2.5 py-1 text-xs font-semibold text-accent-600">Approve</span>
              <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">Reject</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Performance() {
  const goals = [
    { label: "Ship onboarding revamp", progress: 80 },
    { label: "Reduce support backlog", progress: 55 },
    { label: "Complete Q2 appraisals", progress: 40 },
  ];
  return (
    <div className="space-y-4">
      {goals.map((goal) => (
        <div key={goal.label}>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-ink-900">{goal.label}</span>
            <span className="text-slate-500">{goal.progress}%</span>
          </div>
          <div className="mt-1.5 h-2 rounded-full bg-slate-100">
            <div className="h-2 rounded-full bg-brand-600" style={{ width: `${goal.progress}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Recruitment() {
  const columns = [
    { title: "Applied", count: 24 },
    { title: "Interview", count: 9 },
    { title: "Offer", count: 3 },
    { title: "Hired", count: 2 },
  ];
  return (
    <div className="grid grid-cols-4 gap-2.5">
      {columns.map((col) => (
        <div key={col.title} className="rounded-xl border border-ink-900/6 p-2.5 text-center">
          <p className="text-xs text-slate-500">{col.title}</p>
          <p className="mt-1 text-lg font-bold text-ink-900">{col.count}</p>
        </div>
      ))}
    </div>
  );
}

function Compliance() {
  const items = [
    { label: "PF filing (ECR)", due: "Due 15th" },
    { label: "ESI contribution", due: "Due 15th" },
    { label: "Professional tax", due: "Due 20th" },
    { label: "TDS return (24Q)", due: "Filed" },
  ];
  return (
    <div className="space-y-2.5">
      {items.map((item) => (
        <div key={item.label} className="flex items-center justify-between rounded-xl border border-ink-900/6 p-3">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="size-4 text-accent-600" aria-hidden="true" />
            <span className="text-sm font-medium text-ink-900">{item.label}</span>
          </div>
          <span className="text-xs text-slate-500">{item.due}</span>
        </div>
      ))}
    </div>
  );
}

const content: Record<MockupKind, () => React.ReactElement> = {
  overview: Overview,
  attendance: Attendance,
  payroll: Payroll,
  leave: Leave,
  performance: Performance,
  recruitment: Recruitment,
  compliance: Compliance,
};

export function AppMockup({ kind }: { kind: MockupKind }) {
  const Content = content[kind];
  return (
    <Frame>
      <Content />
    </Frame>
  );
}
