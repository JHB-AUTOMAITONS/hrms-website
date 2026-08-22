"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2, Loader2, Gift } from "lucide-react";
import { trackEvent } from "@/lib/analytics/track";

const SHOW_DELAY_MS = 5000;
const DISMISS_KEY = "manitham-lead-capture-dismissed";

const inputClasses =
  "w-full rounded-lg border border-ink-900/15 bg-white/80 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-slate-400 backdrop-blur-sm focus-visible:border-brand-500 focus-visible:bg-white";

export function LeadCapturePopup() {
  const [visible, setVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    const timer = setTimeout(() => {
      setVisible(true);
      trackEvent("lead_capture_popup_shown");
    }, SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismiss(reason: "close" | "success") {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
    trackEvent(`lead_capture_popup_${reason}`);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      emailOrPhone: formData.get("emailOrPhone") as string,
      company: formData.get("company") as string,
      website: formData.get("website") as string,
    };
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Lead captured:", data);
    trackEvent("lead_capture_popup_submitted");
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => dismiss("success"), 3000);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Get free HRMS setup"
      className="animate-slide-up-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    >
      <div className="glass-strong relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-50/80 via-transparent to-transparent" aria-hidden="true" />
        <button
          type="button"
          onClick={() => dismiss("close")}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full text-slate-500 hover:bg-ink-900/10 hover:text-ink-900"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        {isSuccess ? (
          <div className="p-8 text-center">
            <CheckCircle2 className="mx-auto size-12 text-accent-600" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-bold text-ink-900">Thank you! 🎉</h3>
            <p className="mt-2 text-sm text-slate-600">
              We&apos;ve received your details. Our team will reach out shortly with your free setup for one employee!
            </p>
          </div>
        ) : (
          <div className="p-6">
            <div className="mb-5 text-center">
              <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-gold-500/10">
                <Gift className="size-6 text-gold-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-ink-900">
                Get Free Setup for 1 Employee! 🎁
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Share your details now and get <strong>free configuration with WiFi biometrics</strong> for your first employee — no credit card required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="emailOrPhone" className="mb-1.5 block text-sm font-medium text-ink-900">
                  Email or Phone Number *
                </label>
                <input
                  id="emailOrPhone"
                  name="emailOrPhone"
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="you@company.com or +91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink-900">
                  Company Name *
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  className={inputClasses}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="website" className="mb-1.5 block text-sm font-medium text-ink-900">
                  Website Name
                </label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  autoComplete="url"
                  className={inputClasses}
                  placeholder="www.yourcompany.com"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-900/20 transition-all hover:bg-brand-700 hover:shadow-lg disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 inline size-4 animate-spin" aria-hidden="true" />
                    Submitting...
                  </>
                ) : (
                  "Claim Free Setup Now →"
                )}
              </button>

              <p className="text-center text-xs text-slate-500">
                By submitting, you agree to be contacted about Manitham HRMS.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}