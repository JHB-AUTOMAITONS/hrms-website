import { MessageCircle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { AppMockup } from "@/components/illustrations/AppMockup";
import { siteConfig } from "@/lib/site-config";

const pills = ["Attendance & biometric", "Payroll with PF/ESI/PT/TDS", "Leave & performance", "Employee self-service"];

export function Hero() {
  return (
    <section className="bg-dot-grid-dark relative overflow-hidden bg-ink-950">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(60%_55%_at_50%_0%,rgba(53,112,191,0.35),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-ink-950" aria-hidden="true" />

      <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-200 backdrop-blur-sm">
            <ShieldCheck className="size-3.5 text-gold-400" aria-hidden="true" />
            HRMS Software for Indian Businesses
          </p>
          <h1 className="font-display mt-5 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Complete HRMS software for smarter employee management
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg text-slate-300">
            {siteConfig.shortName} HRMS brings attendance, leave, payroll and employee records into one system — so
            your HR team stops chasing spreadsheets and starts running people operations properly.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span key={pill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-demo" variant="inverse" size="lg">
              Book a Demo
            </ButtonLink>
            <ButtonLink href="#features" variant="outlineLight" size="lg">
              Explore Features
            </ButtonLink>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
            <span>Free demo · No commitment</span>
            <a href={siteConfig.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-accent-500 hover:text-accent-400">
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative lg:pl-6">
          <div className="absolute -inset-x-6 -inset-y-10 -z-10 hidden rounded-[2.5rem] bg-brand-500/25 blur-3xl lg:block" aria-hidden="true" />
          <AppMockup kind="overview" />
        </div>
      </Container>
    </section>
  );
}
