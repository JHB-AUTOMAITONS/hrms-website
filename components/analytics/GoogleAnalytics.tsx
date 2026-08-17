import Script from "next/script";

// Manitham HRMS production GA4 property. Measurement IDs are meant to be
// public (they ship in every page's client-side source), so this is safe to
// commit — override with NEXT_PUBLIC_GA_MEASUREMENT_ID for a different
// environment (e.g. staging) without a code change.
const DEFAULT_GA_MEASUREMENT_ID = "G-LZKB2JYJ4G";

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || DEFAULT_GA_MEASUREMENT_ID;
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
