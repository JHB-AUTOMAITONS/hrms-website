import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AppMockup } from "@/components/illustrations/AppMockup";

type MockupKind = "overview" | "attendance" | "payroll" | "leave" | "performance" | "recruitment" | "compliance";

interface ModuleShowcaseProps {
  eyebrow: string;
  title: string;
  description: string;
  bullets: ReactNode[];
  mockupKind: MockupKind;
  href: string;
  linkLabel?: string;
  reverse?: boolean;
  id?: string;
}

export function ModuleShowcase({
  eyebrow,
  title,
  description,
  bullets,
  mockupKind,
  href,
  linkLabel = "See full feature",
  reverse = false,
  id,
}: ModuleShowcaseProps) {
  return (
    <section id={id} className="py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className={reverse ? "lg:order-2" : ""}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h3 className="font-display mt-2 text-2xl font-bold text-balance text-ink-900 sm:text-3xl">{title}</h3>
            <p className="mt-3 text-pretty text-slate-600">{description}</p>
            <div className="mt-6">
              <CheckList items={bullets} />
            </div>
            <ButtonLink href={href} variant="ghost" size="md" className="mt-6 px-0! hover:bg-transparent!">
              {linkLabel} →
            </ButtonLink>
          </div>
          <div className={reverse ? "lg:order-1" : ""}>
            <AppMockup kind={mockupKind} />
          </div>
        </div>
      </Container>
    </section>
  );
}
