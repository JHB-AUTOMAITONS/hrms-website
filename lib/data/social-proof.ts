/**
 * Trust-signal data sources for the homepage TrustBar and Testimonials
 * sections. Both are intentionally empty until there is real data to put
 * in them — the site must never display invented customer counts, logos,
 * review quotes, awards or certifications. The sections that read from
 * these arrays render nothing when the array is empty, rather than
 * falling back to placeholder content.
 */

export interface CustomerLogo {
  name: string;
  /** Path under /public, e.g. "/logos/acme.svg" */
  src: string;
}

export const customerLogos: CustomerLogo[] = [];

export interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  companyName: string;
}

export const testimonials: Testimonial[] = [];

export interface UsageStat {
  label: string;
  value: string;
}

/** Only add a stat here once it's a real, current, verifiable number. */
export const usageStats: UsageStat[] = [];
