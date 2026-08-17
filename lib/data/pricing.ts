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
