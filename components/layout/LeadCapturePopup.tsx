"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2, Loader2, UserPlus, Wifi, ChevronRight, ChevronLeft } from "lucide-react";
import { trackEvent } from "@/lib/analytics/track";

const SHOW_DELAY_MS = 5000;
const DISMISS_KEY = "manitham-lead-capture-dismissed";

const inputClasses =
  "w-full rounded-lg border border-ink-900/15 bg-white/80 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-slate-400 backdrop-blur-sm focus-visible:border-brand-500 focus-visible:bg-white";

const promoSlides = [
  {
    icon: UserPlus,
    iconBg: "from-brand-500 to-brand-700",
    badge: "FREE OFFER",
    title: "Get 1 Employee Onboarding — Absolutely Free!",
    description:
      "Register now and we'll set up your first employee completely free — payroll, attendance, leave policies, everything configured and ready to go.",
    cta: "Claim Free Onboarding",
    secondaryCta: "Learn More",
    highlight: "No credit card · No commitment · Setup in 24 hours",
  },
  {
    icon: Wifi,
    iconBg: "from-accent-500 to-accent-600",
    badge: "LIMITED TIME",
    title: "WiFi Biometric Integration — 100% Free!",
    description:
      "Connect your existing WiFi biometric device to Manitham HRMS at zero cost. Attendance syncs automatically — no manual entries, no errors.",
    cta: "Get Free Biometric Setup",
    secondaryCta: "See How It Works",
    highlight: "Works with all major biometric devices · Free configuration",
  },
];

export function LeadCapturePopup() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<"promo" | "form" | "success">("promo");
  const [promoIndex, setPromoIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  function handlePromoCta() {
    trackEvent(`lead_capture_promo_cta_${promoIndex}`);
    setStep("form");
  }

  function handlePromoNext() {
    if (promoIndex < promoSlides.length - 1) {
      setPromoIndex((i) => i + 1);
    } else {
      setStep("form");
    }
  }

  function handlePromoPrev() {
    if (promoIndex > 0) setPromoIndex((i) => i - 1);
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
    setStep("success");
    setTimeout(() => dismiss("success"), 3000);
  }

  if (!visible) return null;

  const promo = promoSlides[promoIndex];

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Get free HRMS setup"
      className="animate-slide-up-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
    >
      <div className="glass-strong relative w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-50/80 via-transparent to-transparent" aria-hidden="true" />
        <button
          type="button"
          onClick={() => dismiss("close")}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full text-slate-500 hover:bg-ink-900/10 hover:text-ink-900"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        {step === "success" ? (
          <SuccessScreen />
        ) : step === "promo" ? (
          <PromoScreen
            promo={promo}
            promoIndex={promoIndex}
            totalSlides={promoSlides.length}
            onCta={handlePromoCta}
            onNext={handlePromoNext}
            onPrev={handlePromoPrev}
            onDot={setPromoIndex}
            onSkip={() => setStep("form")}
          />
        ) : (
          <FormScreen
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
            inputClasses={inputClasses}
          />
        )}
      </div>
    </div>
  );
}

/* ─── Sub-screens ─── */

function SuccessScreen() {
  return (
    <div className="p-10 text-center">
      <CheckCircle2 className="mx-auto size-14 text-accent-600" aria-hidden="true" />
      <h3 className="mt-4 text-2xl font-bold text-ink-900">Thank you! 🎉</h3>
      <p className="mt-2 text-sm text-slate-600">
        We&apos;ve received your details. Our team will reach out shortly with your free setup!
      </p>
    </div>
  );
}

type PromoSlide = (typeof promoSlides)[number];

function PromoScreen({
  promo,
  promoIndex,
  totalSlides,
  onCta,
  onNext,
  onPrev,
  onDot,
  onSkip,
}: {
  promo: PromoSlide;
  promoIndex: number;
  totalSlides: number;
  onCta: () => void;
  onNext: () => void;
  onPrev: () => void;
  onDot: (i: number) => void;
  onSkip: () => void;
}) {
  return (
    <div className="p-8 sm:p-10">
      <div className="mb-6 flex items-center justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onDot(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`size-2.5 rounded-full transition-all ${
              i === promoIndex ? "w-6 bg-brand-600" : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>

      <div className={`mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${promo.iconBg} shadow-lg`}>
        <promo.icon className="size-8 text-white" aria-hidden="true" />
      </div>

      <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-brand-600">
        {promo.badge}
      </p>
      <h3 className="text-center text-2xl font-bold text-ink-900">{promo.title}</h3>
      <p className="mt-3 text-center text-sm leading-relaxed text-slate-600">{promo.description}</p>
      <p className="mt-4 text-center text-xs font-medium text-accent-600">{promo.highlight}</p>

      <div className="mt-6 flex flex-col gap-3">
        <button
          type="button"
          onClick={onCta}
          className="w-full rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-900/20 transition-all hover:bg-brand-700 hover:shadow-lg"
        >
          {promo.cta} →
        </button>
        <button
          type="button"
          onClick={onNext}
          className="w-full rounded-xl border border-brand-200 bg-white/60 px-6 py-3 text-sm font-medium text-brand-700 transition-all hover:bg-brand-50 hover:border-brand-300"
        >
          {promoIndex < totalSlides - 1 ? (
            <span className="inline-flex items-center justify-center gap-1">
              Next Offer <ChevronRight className="size-4" />
            </span>
          ) : (
            promo.secondaryCta
          )}
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          disabled={promoIndex === 0}
          className="flex items-center gap-1 text-xs text-slate-500 transition-colors hover:text-ink-900 disabled:invisible"
        >
          <ChevronLeft className="size-4" /> Previous
        </button>
        <button
          type="button"
          onClick={onSkip}
          className="text-xs font-medium text-brand-600 underline-offset-2 hover:underline"
        >
          Skip to form
        </button>
      </div>
    </div>
  );
}

function FormScreen({
  isSubmitting,
  onSubmit,
  inputClasses,
}: {
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputClasses: string;
}) {
  return (
    <div className="p-8 sm:p-10">
      <div className="mb-6 text-center">
        <div className="mx-auto mb-3 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg">
          <UserPlus className="size-7 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-ink-900">Get Your Free Setup! 🎁</h3>
        <p className="mt-2 text-sm text-slate-600">
          Share your details and we&apos;ll configure everything — <strong>free onboarding + WiFi biometrics</strong>.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="emailOrPhone" className="mb-1.5 block text-sm font-medium text-ink-900">
            Email or Phone Number *
          </label>
          <input id="emailOrPhone" name="emailOrPhone" type="text" required className={inputClasses} placeholder="you@company.com or +91 XXXXX XXXXX" />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink-900">
            Company Name *
          </label>
          <input id="company" name="company" type="text" required autoComplete="organization" className={inputClasses} placeholder="Your company name" />
        </div>
        <div>
          <label htmlFor="website" className="mb-1.5 block text-sm font-medium text-ink-900">
            Website Name
          </label>
          <input id="website" name="website" type="text" autoComplete="url" className={inputClasses} placeholder="www.yourcompany.com" />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-900/20 transition-all hover:bg-brand-700 hover:shadow-lg disabled:opacity-50 disabled:pointer-events-none"
        >
          {isSubmitting ? (
            <><Loader2 className="mr-2 inline size-4 animate-spin" aria-hidden="true" /> Submitting...</>
          ) : (
            "Claim Free Setup Now →"
          )}
        </button>
        <p className="text-center text-xs text-slate-500">By submitting, you agree to be contacted about Manitham HRMS.</p>
      </form>
    </div>
  );
}

