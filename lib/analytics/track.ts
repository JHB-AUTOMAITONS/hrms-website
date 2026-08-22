declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a custom event to Microsoft Clarity and GA4, when their scripts have
 * loaded (both `afterInteractive` next/script tags in the root layout).
 * Safe no-op during SSR or if either script hasn't attached to `window` yet.
 */
export function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  window.clarity?.("event", name);
  window.gtag?.("event", name, params);
}
