"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics/track";

const whatsappMessage = encodeURIComponent(
  "Hi! I'm interested in Manitham HRMS for managing my team. Can you tell me more?",
);

export function WhatsAppButton() {
  function handleClick() {
    trackEvent("whatsapp_floating_click");
  }

  return (
    <a
      href={`${siteConfig.contact.whatsappHref}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
