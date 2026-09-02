"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { submitLead, type LeadFormState } from "@/lib/actions/submit-lead";

const initialState: LeadFormState = { status: "idle" };

const inputClasses =
  "w-full rounded-lg border border-ink-900/15 bg-white/80 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-slate-400 backdrop-blur-sm focus-visible:border-brand-500 focus-visible:bg-white";

interface LeadFormProps {
  source: "contact" | "book-demo";
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  successMessage?: string;
}

export function LeadForm({
  source,
  messageLabel,
  messagePlaceholder,
  submitLabel,
  successMessage = "Our team will reach out shortly. In the meantime, feel free to reach us directly on WhatsApp or email.",
}: LeadFormProps) {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-accent-500/20 bg-accent-500/10 p-8 text-center backdrop-blur-sm">
        <CheckCircle2 className="size-10 text-accent-600" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-ink-900">Thanks — we&apos;ve got your details</h3>
        <p className="text-sm text-slate-600">{successMessage}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="source" value={source} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} placeholder="Your name" />
        </Field>
        <Field label="Work email" htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} placeholder="you@company.com" />
        </Field>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Company" htmlFor="company">
          <input id="company" name="company" type="text" required autoComplete="organization" className={inputClasses} placeholder="Company name" />
        </Field>
        <Field label="Phone number" htmlFor="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClasses} placeholder="+91" />
        </Field>
      </div>
      <Field label={messageLabel} htmlFor="message">
        <textarea id="message" name="message" rows={4} className={inputClasses} placeholder={messagePlaceholder} />
      </Field>

      {state.status === "error" ? <p className="text-sm text-red-600">{state.message}</p> : null}

      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
        {isPending ? "Submitting…" : submitLabel}
      </Button>
      <p className="text-center text-xs text-slate-500">By submitting, you agree to be contacted about Manitham HRMS.</p>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink-900">
        {label}
      </label>
      {children}
    </div>
  );
}
