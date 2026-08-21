import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/privacy-policy",
  primaryKeyword: "Manitham HRMS privacy policy",
  secondaryKeywords: [],
  searchIntent: "navigational",
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `How ${siteConfig.name} collects, uses and protects information submitted through this website.`,
  h1: "Privacy Policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />
      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <div className="glass rounded-3xl p-6 sm:p-10">
          <SectionHeading title="Privacy Policy" as="h1" />
          <p className="mt-3 text-sm text-slate-500">Last updated: August 2026</p>

          <div className="prose-article mt-8 space-y-4 text-pretty leading-7 text-slate-600">
            <p>
              This policy explains what information {siteConfig.legalName} collects through this website
              ({siteConfig.url}) and how it&apos;s used. It applies to this marketing website; the Manitham HRMS
              product application has its own data handling practices as a system your organization configures and
              controls.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink-900">Information we collect</h2>
            <p>When you use this website, we may collect:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Information you submit through our contact and demo request forms — name, work email, company, phone number and any message you provide.</li>
              <li>Standard technical information collected by any website, such as browser type and pages visited, which may be recorded through analytics tools if enabled.</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-ink-900">How we use this information</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>To respond to inquiries submitted through our contact and demo forms.</li>
              <li>To follow up about Manitham HRMS as a product or service.</li>
              <li>To understand aggregate website usage, where analytics tools are enabled, in order to improve the site.</li>
            </ul>
            <p>We do not sell the information submitted through this website to third parties.</p>

            <h2 className="mt-8 text-xl font-semibold text-ink-900">Cookies and analytics</h2>
            <p>
              This website may use cookies or similar technologies for basic site functionality and, where enabled,
              analytics tools to understand how visitors use the site in aggregate.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink-900">Data retention</h2>
            <p>
              Information submitted through our forms is retained for as long as needed to respond to your inquiry
              and maintain a record of business communications, in line with applicable law.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink-900">Your rights</h2>
            <p>
              You can request access to, correction of, or deletion of personal information you&apos;ve submitted
              through this website by contacting us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-brand-600 hover:underline">
                {siteConfig.contact.email}
              </a>.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink-900">Contact</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-brand-600 hover:underline">
                {siteConfig.contact.email}
              </a>.
            </p>

            <p className="pt-2 text-sm text-slate-500">
              This policy is a general template and should be reviewed by qualified legal counsel before this
              website goes live, to ensure it reflects your actual data practices and complies with applicable law.
            </p>
          </div>
          </div>
        </Container>
      </section>
    </>
  );
}
