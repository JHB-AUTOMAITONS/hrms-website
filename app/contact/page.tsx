import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { LeadForm } from "@/components/forms/LeadForm";
import { buildMetadata } from "@/lib/seo/metadata";
import { keywordMap } from "@/lib/seo/keyword-map";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata(keywordMap.contact);

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Contact" title={keywordMap.contact.h1} subtitle="Have a question about Manitham HRMS, or want to talk through your setup before booking a demo? Reach out — we typically respond within one business day." as="h1" />

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="space-y-5 lg:col-span-2">
              <ContactCard icon={Mail} label="Email" value={siteConfig.contact.email} href={`mailto:${siteConfig.contact.email}`} />
              <ContactCard icon={Phone} label="Phone" value={siteConfig.contact.phoneDisplay} href={`tel:${siteConfig.contact.phoneHref}`} />
              <ContactCard icon={MessageCircle} label="WhatsApp" value="Chat with our team" href={siteConfig.contact.whatsappHref} />
              <ContactCard icon={Clock} label="Response time" value="Within 1 business day" />
            </div>

            <div className="rounded-2xl border border-ink-900/8 bg-white p-6 shadow-sm shadow-ink-900/[0.02] lg:col-span-3 sm:p-8">
              <LeadForm
                source="contact"
                messageLabel="How can we help?"
                messagePlaceholder="Tell us a bit about what you're looking for…"
                submitLabel="Send Message"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3 rounded-2xl border border-ink-900/8 bg-white p-5 shadow-sm shadow-ink-900/[0.02]">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-900/5">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="mt-0.5 text-sm font-semibold text-ink-900">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="block transition-opacity hover:opacity-80">
      {content}
    </a>
  );
}
