import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { productLinks, industryLinks, companyLinks, resourceLinks, legalLinks } from "@/lib/data/nav";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="glass-dark border-x-0 border-b-0 text-slate-300">
      <Container className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
            <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 text-sm font-black text-white shadow-sm shadow-black/30">
              M
            </span>
            {siteConfig.shortName}HRMS
          </Link>
          <p className="mt-4 text-sm text-slate-400">{siteConfig.tagline}.</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="size-4" aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.contact.phoneHref}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="size-4" aria-hidden="true" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <FooterColumn title="Product" links={productLinks.map(({ label, href }) => ({ label, href }))} />
        <FooterColumn title="Industries" links={industryLinks} />
        <FooterColumn title="Resources" links={resourceLinks} />
        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Legal" links={legalLinks} />
      </Container>

      <div className="border-t border-white/5">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p>Made for HR teams in India.</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-slate-400 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
