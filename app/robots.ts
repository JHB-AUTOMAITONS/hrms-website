import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // This repo only contains public marketing pages, but these are blocked
      // pre-emptively in case an app/admin surface is ever deployed under the
      // same origin instead of a separate app.* subdomain.
      disallow: ["/api/", "/admin/", "/dashboard/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
