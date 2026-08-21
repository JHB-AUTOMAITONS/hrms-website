import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/terms-of-service",
  primaryKeyword: "Manitham HRMS terms of service",
  secondaryKeywords: [],
  searchIntent: "navigational",
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms governing the use of the ${siteConfig.name} marketing website.`,
  h1: "Terms of Service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms of Service", path: "/terms-of-service" }]} />
      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <div className="glass rounded-3xl p-6 sm:p-10">
          <SectionHeading title="Terms of Service" as="h1" />
          <p className="mt-3 text-sm text-slate-500">Last updated: August 2026</p>

          <div className="prose-article mt-8 space-y-4 text-pretty leading-7 text-slate-600">
            <p>
              These terms apply to your use of this website ({siteConfig.url}). A separate agreement governs use of
              the Manitham HRMS product itself once you become a customer — those terms will be provided as part of
              onboarding.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink-900">Use of this website</h2>
            <p>
              This website is provided to share information about Manitham HRMS and to let visitors request a demo
              or get in touch with our team. You agree to use it only for lawful purposes and not to attempt to
              disrupt or gain unauthorized access to it.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink-900">Content accuracy</h2>
            <p>
              We aim to keep the information on this website accurate and up to date, particularly around product
              features and Indian payroll compliance topics. Specific compliance details should be verified against
              current regulations for your situation, as rules can change.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink-900">Intellectual property</h2>
            <p>
              The content, design and branding on this website belong to {siteConfig.legalName} unless otherwise
              noted, and may not be reproduced without permission.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink-900">Changes to these terms</h2>
            <p>We may update these terms from time to time. The &ldquo;last updated&rdquo; date above reflects the most recent revision.</p>

            <h2 className="mt-8 text-xl font-semibold text-ink-900">Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-brand-600 hover:underline">
                {siteConfig.contact.email}
              </a>.
            </p>

            <p className="pt-2 text-sm text-slate-500">
              This is a general template and should be reviewed by qualified legal counsel before this website goes
              live.
            </p>
          </div>
          </div>
        </Container>
      </section>
    </>
  );
}
