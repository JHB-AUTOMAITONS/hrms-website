import Script from "next/script";

/**
 * Loads GA4 only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set — no
 * hardcoded/placeholder measurement ID ships in the codebase. Set the env
 * var (and optionally wire a GTM container the same way) before launch.
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
