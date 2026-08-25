import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { AppMockup } from "@/components/illustrations/AppMockup";
import { siteConfig } from "@/lib/site-config";

const pills = ["Attendance & biometric", "Payroll with PF/ESI/PT/TDS", "Leave & performance", "AI-powered WhatsApp assistant"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(60%_55%_at_50%_0%,rgba(53,112,191,0.18),transparent_70%)]"
        aria-hidden="true"
      />

      <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white/60 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur-sm">
            <ShieldCheck className="size-3.5 text-gold-500" aria-hidden="true" />
            HRMS Software for Indian Businesses
          </p>
          <h1 className="font-display mt-5 text-balance text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Complete HRMS software for smarter employee management
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg text-slate-600">
            {siteConfig.shortName} HRMS brings attendance, leave, payroll and employee records into one system — so
            your HR team stops chasing spreadsheets and starts running people operations properly.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span key={pill} className="glass-subtle rounded-full px-3 py-1.5 text-xs font-medium text-slate-700">
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-demo" variant="primary" size="lg">
              Book a Demo
            </ButtonLink>
            <ButtonLink href="#features" variant="secondary" size="lg">
              Explore Features
            </ButtonLink>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <span>Free demo · No commitment</span>
          </div>
        </div>

        <div className="relative lg:pl-6">
          <div className="absolute -inset-x-6 -inset-y-10 -z-10 hidden rounded-[2.5rem] bg-brand-500/10 blur-3xl lg:block" aria-hidden="true" />
          <AppMockup kind="overview" />
        </div>
      </Container>
    </section>
  );
}
