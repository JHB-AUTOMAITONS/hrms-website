"use server";

export interface LeadFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Handles both the /contact and /book-demo forms. Validates input and, if
 * LEAD_WEBHOOK_URL is configured, forwards the lead there (point it at a
 * CRM intake endpoint, a serverless email function, etc). Without that env
 * var set, submissions validate successfully but aren't delivered anywhere —
 * wire it up before launch.
 */
export async function submitLead(_prevState: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const source = formData.get("source")?.toString() || "contact";

  if (!name || !email || !company) {
    return { status: "error", message: "Please fill in your name, work email and company." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, phone, message, source }),
      });
      if (!response.ok) throw new Error(`Webhook responded with ${response.status}`);
    } catch {
      return {
        status: "error",
        message: "Something went wrong submitting your request. Please try again or email us directly.",
      };
    }
  }

  return { status: "success" };
}
