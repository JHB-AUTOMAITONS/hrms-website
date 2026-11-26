"use client";

import { useState } from "react";
import { MIN_EMPLOYEES, MAX_EMPLOYEES, PRICE_PER_EMPLOYEE, calculatePricing, clampEmployees, formatINR } from "@/lib/data/pricing";

type Billing = "monthly" | "annual";

export function PricingCalculator() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [raw, setRaw] = useState(String(MIN_EMPLOYEES));

  const parsed = parseInt(raw, 10);
  const p = calculatePricing(Number.isNaN(parsed) ? MIN_EMPLOYEES : parsed);
  const annual = billing === "annual";

  const commit = (n: number) => setRaw(String(clampEmployees(n)));

  return (
    <div className="glass-strong mx-auto mb-8 max-w-3xl rounded-2xl p-6 sm:p-8">
      <div className="flex justify-center">
        <div role="group" aria-label="Billing period" className="glass-subtle inline-flex rounded-xl p-1 text-sm font-semibold">
          {(["monthly", "annual"] as const).map((b) => (
            <button
              key={b}
              type="button"
              aria-pressed={billing === b}
              onClick={() => setBilling(b)}
              className={`rounded-lg px-4 py-2 transition-all ${billing === b ? "bg-brand-600 text-white shadow-md shadow-brand-900/20" : "text-slate-600 hover:text-ink-900"}`}
            >
              {b === "monthly" ? "Monthly" : "Annual"}
              {b === "annual" ? <span className={`ml-2 text-xs ${annual ? "text-white/90" : "text-accent-600"}`}>2 months free</span> : null}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="font-display text-4xl font-bold text-ink-900">
          {formatINR(annual ? p.annualPerEmployeeMonthly : PRICE_PER_EMPLOYEE)}
          <span className="text-base font-medium text-slate-600"> per employee / month</span>
        </p>
        <p className="mt-1 text-sm text-slate-600">
          {annual
            ? `Billed annually upfront — 12 months of service for the price of 10 (${formatINR(PRICE_PER_EMPLOYEE)} × 10 months).`
            : `Billed monthly. Minimum ${MIN_EMPLOYEES} employees (${formatINR(MIN_EMPLOYEES * PRICE_PER_EMPLOYEE)}/month minimum).`}
        </p>
      </div>

      <div className="mt-6 grid items-center gap-4 border-t border-ink-900/8 pt-6 sm:grid-cols-2">
        <div>
          <label htmlFor="employee-count" className="text-sm font-medium text-ink-900">
            Number of employees
          </label>
          <div className="mt-2 flex items-center gap-2">
            <button type="button" aria-label="Decrease employees" onClick={() => commit(p.employees - 1)} disabled={p.employees <= MIN_EMPLOYEES} className="glass-subtle size-10 rounded-lg text-lg font-semibold text-ink-900 disabled:opacity-50">
              −
            </button>
            <input
              id="employee-count"
              type="number"
              inputMode="numeric"
              min={MIN_EMPLOYEES}
              max={MAX_EMPLOYEES}
              value={raw}
              onChange={(e) => setRaw(e.target.value)}
              onBlur={() => commit(Number.isNaN(parsed) ? MIN_EMPLOYEES : parsed)}
              className="glass-subtle h-10 w-24 rounded-lg px-3 text-center text-sm font-semibold text-ink-900"
            />
            <button type="button" aria-label="Increase employees" onClick={() => commit(p.employees + 1)} className="glass-subtle size-10 rounded-lg text-lg font-semibold text-ink-900">
              +
            </button>
          </div>
          <p className="mt-2 text-xs text-slate-500">Minimum {MIN_EMPLOYEES} employees.</p>
        </div>

        <div className="rounded-xl bg-brand-50/60 p-4 text-center sm:text-right" aria-live="polite">
          <p className="text-xs font-medium text-slate-600">{annual ? "Billed annually" : "Billed monthly"}</p>
          <p className="font-display text-3xl font-bold text-ink-900" data-testid="total">
            {formatINR(annual ? p.annual : p.monthly)}
            <span className="text-sm font-medium text-slate-600">{annual ? "/year" : "/month"}</span>
          </p>
          {annual ? (
            <p className="text-xs font-semibold text-accent-600">You save {formatINR(p.savings)} (2 months free)</p>
          ) : (
            <p className="text-xs text-slate-600">Annual: {formatINR(p.annual)}/year — save {formatINR(p.savings)}</p>
          )}
        </div>
      </div>
    </div>
  );
}
