import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { keywordMap } from "@/lib/seo/keyword-map";
import { articles } from "@/lib/data/articles";

const STATIC_PATHS = ["/privacy-policy", "/terms-of-service"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const corePages = Object.values(keywordMap).map((entry) => ({
    url: entry.path === "/" ? siteConfig.url : `${siteConfig.url}${entry.path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: entry.path === "/" ? 1 : 0.8,
  }));

  const articlePages = articles.map((article) => ({
    url: `${siteConfig.url}/resources/${article.slug}`,
    lastModified: article.publishedDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const staticPages = STATIC_PATHS.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.2,
  }));

  return [...corePages, ...articlePages, ...staticPages];
}
