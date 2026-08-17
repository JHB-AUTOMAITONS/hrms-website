import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, type FaqItem } from "@/lib/seo/schema";

interface FAQSectionProps {
  title?: string;
  eyebrow?: string;
  faqs: FaqItem[];
  className?: string;
}

/**
 * Zero-JS accordion built on native <details>/<summary> — renders visible
 * FAQ content plus matching FAQPage JSON-LD from the exact same data.
 */
export function FAQSection({ title = "Frequently asked questions", eyebrow = "FAQ", faqs, className = "" }: FAQSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-ink-900/10 border-t border-b border-ink-900/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus className="size-5 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-pretty text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
