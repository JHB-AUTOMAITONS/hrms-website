import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import type { PageSeoEntry } from "@/lib/seo/keyword-map";

interface BuildMetadataOptions {
  /** Overrides entry.path — use when a page needs a canonical different from its own route (rare). */
  path?: string;
  noindex?: boolean;
}

/**
 * Turns a keyword-map entry into a full Next.js Metadata object: title,
 * description, canonical URL, and Open Graph / Twitter card data. Every
 * page should build its metadata through this function so canonical URLs
 * and social previews stay consistent site-wide.
 */
export function buildMetadata(entry: PageSeoEntry, options: BuildMetadataOptions = {}): Metadata {
  const path = options.path ?? entry.path;
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title: entry.title,
    description: entry.description,
    keywords: [entry.primaryKeyword, ...entry.secondaryKeywords],
    alternates: {
      canonical: url,
    },
    robots: options.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
    },
  };
}

export function absoluteUrl(path: string): string {
  return path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
}
