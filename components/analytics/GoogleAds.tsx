import Script from "next/script";

// Manitham HRMS production Google Ads account. Conversion IDs are meant to
// be public (they ship in every page's client-side source), so this is
// safe to commit.
//
// gtag.js itself is already loaded by <GoogleAnalytics /> (for GA4); this
// component reuses that single load and just registers the Google Ads
// destination with an additional gtag('config', ...) call, per Google's
// guidance for sites running multiple gtag.js products.
const GOOGLE_ADS_ID = "AW-18469485514";

export function GoogleAds() {
  return (
    <Script id="google-ads-config" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('config', '${GOOGLE_ADS_ID}');
      `}
    </Script>
  );
}
