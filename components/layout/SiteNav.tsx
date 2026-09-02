"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { productLinks, industryLinks, companyLinks, resourceLinks, countryLinks, type NavLink } from "@/lib/data/nav";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

function DesktopDropdown({ label, links, columns = 2 }: { label: string; links: NavLink[]; columns?: 1 | 2 }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex cursor-pointer items-center gap-1 py-2 text-sm font-medium text-ink-700 transition-colors hover:text-brand-700"
      >
        {label}
        <ChevronDown className={`size-4 transition-transform duration-150 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open ? (
        <div
          className={`glass-opaque absolute left-1/2 top-full z-40 mt-3 -translate-x-1/2 rounded-2xl p-3 ${
            columns === 2 ? "w-[520px]" : "w-64"
          }`}
        >
          <div className={columns === 2 ? "grid grid-cols-2 gap-1" : "flex flex-col gap-1"}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg p-3 transition-colors hover:bg-white/50"
              >
                <p className="text-sm font-semibold text-ink-900">{link.label}</p>
                {link.description ? <p className="mt-0.5 text-xs text-slate-500">{link.description}</p> : null}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function DesktopNav() {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
      <DesktopDropdown label="Product" links={productLinks} columns={2} />
      <DesktopDropdown label="Industries" links={industryLinks} columns={1} />
      <DesktopDropdown label="Countries" links={countryLinks} columns={1} />
      <Link href="/pricing" className="py-2 text-sm font-medium text-ink-700 transition-colors hover:text-brand-700">
        Pricing
      </Link>
      <DesktopDropdown label="Resources" links={resourceLinks} columns={1} />
      <Link href="/about" className="py-2 text-sm font-medium text-ink-700 transition-colors hover:text-brand-700">
        About
      </Link>
    </nav>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-label="Open menu"
        className="flex size-10 items-center justify-center rounded-lg text-ink-900 hover:bg-slate-100"
      >
        <Menu className="size-6" aria-hidden="true" />
      </button>

      {open
        ? createPortal(
            // Portalled to <body> rather than rendered in place — the header uses
            // backdrop-blur, and a `filter`/`backdrop-filter` ancestor establishes a new
            // containing block for `position: fixed` descendants, which would trap this
            // full-screen overlay inside the header's own (much shorter) box.
            <div className="glass-opaque fixed inset-0 z-50 flex flex-col rounded-none border-0">
              <div className="flex items-center justify-between border-b border-ink-900/5 px-4 py-4">
                <Link href="/" className="font-display text-lg font-bold text-ink-900" onClick={() => setOpen(false)}>
                  {siteConfig.shortName}
                  <span className="text-brand-600">HRMS</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex size-10 items-center justify-center rounded-lg text-ink-900 hover:bg-slate-100"
                >
                  <X className="size-6" aria-hidden="true" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                <MobileSection title="Product" links={productLinks} onNavigate={() => setOpen(false)} />
                <MobileSection title="Industries" links={industryLinks} onNavigate={() => setOpen(false)} />
                <MobileSection title="Countries" links={countryLinks} onNavigate={() => setOpen(false)} />
                <MobileSection title="Resources" links={resourceLinks} onNavigate={() => setOpen(false)} />
                <MobileSection title="Company" links={companyLinks} onNavigate={() => setOpen(false)} />
              </div>

              <div className="space-y-3 border-t border-ink-900/5 px-4 py-4">
                <ButtonLink href="/contact" variant="secondary" size="lg" className="w-full" onClick={() => setOpen(false)}>
                  Contact Sales
                </ButtonLink>
                <ButtonLink href="/book-demo" variant="primary" size="lg" className="w-full" onClick={() => setOpen(false)}>
                  Book a Demo
                </ButtonLink>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}

function MobileSection({ title, links, onNavigate }: { title: string; links: NavLink[]; onNavigate: () => void }) {
  return (
    <details className="group border-b border-ink-900/5 py-2" open>
      <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown className="size-4 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <ul className="space-y-1 pb-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className="block rounded-lg px-2 py-2 text-sm text-slate-600 hover:bg-white/50 hover:text-brand-700"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
