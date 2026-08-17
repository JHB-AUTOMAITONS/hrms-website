import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { DesktopNav, MobileMenu } from "@/components/layout/SiteNav";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/5 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-brand-600 text-base font-black text-white">
            M
          </span>
          <span className="text-lg font-bold text-ink-900">
            {siteConfig.shortName}
            <span className="text-brand-600">HRMS</span>
          </span>
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-2">
          {/* Wrapped instead of toggling display on ButtonLink directly — ButtonLink already
              carries an unconditional `inline-flex`, which would out-order `hidden` in Tailwind's
              generated stylesheet and stay visible regardless of breakpoint. */}
          <span className="hidden lg:inline-flex">
            <ButtonLink href="/contact" variant="ghost" size="sm">
              Contact Sales
            </ButtonLink>
          </span>
          <span className="hidden sm:inline-flex">
            <ButtonLink href="/book-demo" variant="primary" size="sm">
              Book a Demo
            </ButtonLink>
          </span>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
