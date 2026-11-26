export interface PricingTier {
  name: string;
  description: string;
  bestFor: string;
  features: string[];
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "For small teams moving off spreadsheets.",
    bestFor: "Best for teams up to ~50 employees",
    features: [
      "Employee management",
      "Attendance (web & mobile check-in)",
      "Leave management",
      "Employee self-service portal",
      "Standard reports",
    ],
  },
  {
    name: "Growth",
    description: "For companies ready to run payroll and performance in the same system.",
    bestFor: "Best for growing, multi-team organizations",
    features: [
      "Everything in Starter",
      "Payroll with PF, ESI, PT & TDS",
      "Biometric & GPS attendance",
      "Performance management",
      "Recruitment (ATS)",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For larger or multi-location organizations with custom needs.",
    bestFor: "Best for multi-location and multi-entity businesses",
    features: [
      "Everything in Growth",
      "Multi-location & multi-entity payroll",
      "Custom approval workflows",
      "Dedicated onboarding support",
      "Custom reporting",
    ],
  },
];

export interface ComparisonRow {
  feature: string;
  starter: boolean;
  growth: boolean;
  enterprise: boolean;
}

export const comparisonRows: ComparisonRow[] = [
  { feature: "Employee management", starter: true, growth: true, enterprise: true },
  { feature: "Attendance (web & mobile)", starter: true, growth: true, enterprise: true },
  { feature: "Biometric & GPS attendance", starter: false, growth: true, enterprise: true },
  { feature: "Leave management", starter: true, growth: true, enterprise: true },
  { feature: "Payroll & statutory compliance", starter: false, growth: true, enterprise: true },
  { feature: "Performance management", starter: false, growth: true, enterprise: true },
  { feature: "Recruitment (ATS)", starter: false, growth: true, enterprise: true },
  { feature: "Employee self-service portal", starter: true, growth: true, enterprise: true },
  { feature: "Multi-location support", starter: false, growth: false, enterprise: true },
  { feature: "Custom approval workflows", starter: false, growth: false, enterprise: true },
  { feature: "Dedicated onboarding support", starter: false, growth: false, enterprise: true },
];

/* ---------- Per-employee pricing model (single source of truth) ---------- */

export const PRICE_PER_EMPLOYEE = 45; // ₹ per employee per month
export const MIN_EMPLOYEES = 10;
export const MAX_EMPLOYEES = 10000;
export const ANNUAL_BILLED_MONTHS = 10; // 12 months of service, billed for 10
export const ANNUAL_FREE_MONTHS = 2;

export function clampEmployees(n: number): number {
  if (!Number.isFinite(n)) return MIN_EMPLOYEES;
  return Math.min(MAX_EMPLOYEES, Math.max(MIN_EMPLOYEES, Math.floor(n)));
}

export function calculatePricing(employees: number) {
  const count = clampEmployees(employees);
  const monthly = count * PRICE_PER_EMPLOYEE;
  const annual = count * PRICE_PER_EMPLOYEE * ANNUAL_BILLED_MONTHS;
  const savings = count * PRICE_PER_EMPLOYEE * ANNUAL_FREE_MONTHS;
  // Effective per-employee monthly rate when paying annually (₹37.50)
  const annualPerEmployeeMonthly = (PRICE_PER_EMPLOYEE * ANNUAL_BILLED_MONTHS) / 12;
  return { employees: count, monthly, annual, savings, annualPerEmployeeMonthly };
}

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN", { maximumFractionDigits: 2, minimumFractionDigits: Number.isInteger(amount) ? 0 : 2 })}`;
}
