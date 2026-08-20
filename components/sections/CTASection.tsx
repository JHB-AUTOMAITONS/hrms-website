import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  subtitle,
  primaryLabel = "Book a Demo",
  primaryHref = "/book-demo",
  secondaryLabel = "Talk to Sales",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-ink-950 to-ink-950 py-16 sm:py-20">
      {/* Separate layer from the gradient above — both would compile to
          `background-image` on the same element and silently clobber each other. */}
      <div className="bg-dot-grid-dark pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_80%_at_50%_100%,rgba(53,112,191,0.3),transparent_70%)]"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display max-w-2xl text-balance text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        {subtitle ? <p className="max-w-xl text-pretty text-slate-300">{subtitle}</p> : null}
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={primaryHref} variant="inverse" size="lg">
            {primaryLabel}
          </ButtonLink>
          <ButtonLink href={secondaryHref} variant="outlineLight" size="lg">
            {secondaryLabel}
          </ButtonLink>
        </div>
        <a
          href={siteConfig.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Or chat with us on WhatsApp
        </a>
      </Container>
    </section>
  );
}
