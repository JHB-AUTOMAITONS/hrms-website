import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { customerLogos, usageStats } from "@/lib/data/social-proof";

/**
 * Renders nothing until `customerLogos` or `usageStats` in
 * lib/data/social-proof.ts has real entries — never falls back to
 * placeholder logos or invented numbers.
 */
export function TrustBar() {
  if (customerLogos.length === 0 && usageStats.length === 0) return null;

  return (
    <section className="border-y border-ink-900/5 bg-slate-50 py-10">
      <Container>
        {usageStats.length > 0 ? (
          <div className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {usageStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-ink-900 sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : null}
        {customerLogos.length > 0 ? (
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70 grayscale">
            {customerLogos.map((logo) => (
              <Image key={logo.name} src={logo.src} alt={logo.name} width={120} height={32} className="h-8 w-auto object-contain" />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
