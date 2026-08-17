import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found | Manitham HRMS",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold text-brand-600">404</p>
        <h1 className="mt-2 text-3xl font-bold text-ink-900 sm:text-4xl">We couldn&apos;t find that page</h1>
        <p className="mt-4 text-slate-600">
          The page you&apos;re looking for may have moved. Try heading back to the homepage or exploring our HRMS
          features.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Back to Homepage
          </ButtonLink>
          <ButtonLink href="/hrms-software" variant="secondary" size="lg">
            Explore HRMS Software
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
