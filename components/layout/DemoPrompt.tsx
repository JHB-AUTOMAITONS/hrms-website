"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics/track";

// How long a visitor browses before the prompt appears.
const SHOW_DELAY_MS = 5000;

// Once dismissed (in any way) in a tab, don't show it again for the rest of
// that session — sessionStorage rather than localStorage, so it resurfaces on
// a fresh visit without needing an expiry to manage.
const DISMISS_KEY = "manitham-demo-prompt-dismissed";

const whatsappMessage = encodeURIComponent(
  "Hi! I'm interested in Manitham HRMS for managing my team. Can you tell me more?",
);

export function DemoPrompt() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;

    const timer = setTimeout(() => {
      setVisible(true);
      trackEvent("demo_prompt_shown");
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  function dismiss(reason: "yes" | "no" | "close") {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
    trackEvent(`demo_prompt_${reason}`);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Ask about Manitham HRMS"
      className="animate-slide-up-fade-in fixed bottom-4 left-4 right-4 z-40 sm:bottom-6 sm:left-auto sm:right-6 sm:w-80"
    >
      <div className="glass-strong relative overflow-hidden rounded-2xl p-5 shadow-xl shadow-ink-900/15">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-50/80 via-transparent to-transparent"
          aria-hidden="true"
        />
        <button
          type="button"
          onClick={() => dismiss("close")}
          aria-label="Close"
          className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-full text-slate-500 hover:bg-ink-900/5 hover:text-ink-900"
        >
          <X className="size-4" aria-hidden="true" />
        </button>

        <p className="pr-6 text-sm font-semibold text-ink-900">
          Do you want this software for your management?
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Chat with us on WhatsApp — we&apos;ll walk you through it.
        </p>

        <div className="mt-4 flex gap-2">
          <a
            href={`${siteConfig.contact.whatsappHref}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => dismiss("yes")}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-accent-900/20 transition-colors hover:bg-accent-600"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Yes, tell me more
          </a>
          <button
            type="button"
            onClick={() => dismiss("no")}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-ink-900/5 hover:text-ink-900"
          >
            No, thanks
          </button>
        </div>
      </div>
    </div>
  );
}
