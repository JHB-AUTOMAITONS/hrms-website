import Script from "next/script";

// Manitham HRMS production Microsoft Clarity project. Project IDs are meant
// to be public (they ship in every page's client-side source), so this is
// safe to commit — override with NEXT_PUBLIC_CLARITY_PROJECT_ID for a
// different environment (e.g. staging) without a code change.
const DEFAULT_CLARITY_PROJECT_ID = "y68l6b9cd5";

export function MicrosoftClarity() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || DEFAULT_CLARITY_PROJECT_ID;
  if (!clarityId) return null;

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityId}");
      `}
    </Script>
  );
}
