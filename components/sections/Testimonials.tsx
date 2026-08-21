import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/social-proof";

/**
 * Renders nothing until lib/data/social-proof.ts has real, attributable
 * quotes — never falls back to placeholder testimonials.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Customers" title="Trusted by HR teams across India" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.authorName} className="glass rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/[0.06]">
              <Quote className="size-6 text-brand-200" aria-hidden="true" />
              <blockquote className="mt-3 text-pretty text-sm text-slate-700">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-ink-900">{testimonial.authorName}</span>
                <span className="text-slate-500">
                  {" "}
                  · {testimonial.authorRole}, {testimonial.companyName}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
