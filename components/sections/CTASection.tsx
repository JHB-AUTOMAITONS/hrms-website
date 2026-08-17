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
    <section className="bg-brand-700 py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-balance text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        {subtitle ? <p className="max-w-xl text-pretty text-brand-100">{subtitle}</p> : null}
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={primaryHref} variant="inverse" size="lg">
            {primaryLabel}
          </ButtonLink>
          <ButtonLink href={secondaryHref} variant="secondary" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
            {secondaryLabel}
          </ButtonLink>
        </div>
        <a
          href={siteConfig.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-100 hover:text-white"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Or chat with us on WhatsApp
        </a>
      </Container>
    </section>
  );
}
