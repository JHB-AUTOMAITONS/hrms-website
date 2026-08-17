import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { AppMockup } from "@/components/illustrations/AppMockup";
import { siteConfig } from "@/lib/site-config";

const pills = ["Attendance & biometric", "Payroll with PF/ESI/PT/TDS", "Leave & performance", "Employee self-service"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white">
      <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm ring-1 ring-ink-900/5">
            HRMS Software for Indian Businesses
          </p>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Complete HRMS software for smarter employee management
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg text-slate-600">
            {siteConfig.shortName} HRMS brings attendance, leave, payroll and employee records into one system — so
            your HR team stops chasing spreadsheets and starts running people operations properly.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span key={pill} className="rounded-full border border-ink-900/8 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-demo" size="lg">
              Book a Demo
            </ButtonLink>
            <ButtonLink href="#features" variant="secondary" size="lg">
              Explore Features
            </ButtonLink>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <span>Free demo · No commitment</span>
            <a href={siteConfig.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-accent-600 hover:text-accent-700">
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative lg:pl-6">
          <div className="absolute -inset-x-6 -inset-y-8 -z-10 hidden rounded-[2.5rem] bg-brand-100/40 blur-2xl lg:block" aria-hidden="true" />
          <AppMockup kind="overview" />
        </div>
      </Container>
    </section>
  );
}
