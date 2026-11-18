"use server";

export interface LeadFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Google Apps Script Web App bound to the "HRMS Leads" Google Sheet.
// Hardcoded so lead capture works without extra config; override via env
// to point a different environment (e.g. staging) at a different sheet.
const GOOGLE_APPS_SCRIPT_URL =
  process.env.GOOGLE_APPS_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbwn7dtDpm_ECJccWo9XazmikUelMvkDnJEZXiZ0rz0p6VEavobqgrdBViEdCYy_vtAN3w/exec";

// GoHighLevel (connect.automationclub.in) "Inbound Webhook" workflow trigger.
// Each submission is POSTed here so the workflow can create/update the contact
// and run the follow-up automation. Set GHL_WEBHOOK_URL to enable it.
const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL;

type Lead = { name: string; email: string; company: string; phone: string; message: string; source: string };

/** Appends the lead as a row in the "HRMS Leads" Google Sheet via Apps Script. */
async function submitToGoogleSheet(lead: Lead): Promise<void> {
  const body = new URLSearchParams({
    fullName: lead.name,
    workEmail: lead.email,
    company: lead.company,
    phoneNumber: lead.phone,
    requirement: lead.message,
  });

  const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  if (!response.ok) throw new Error(`Google Apps Script responded with ${response.status}`);

  // Apps Script Web Apps redirect through script.googleusercontent.com and
  // reply 200 for that hop even when the script itself reports a failure
  // (e.g. a missing sheet), so the real result has to come from the body.
  const text = await response.text();
  let result: { success?: boolean; message?: string } | null = null;
  try {
    result = JSON.parse(text);
  } catch {
    // Non-JSON response — fall through and treat the 2xx status as success.
  }
  if (result?.success === false) {
    throw new Error(result.message || "Google Apps Script reported a failure.");
  }
}

/** Posts the lead to a GoHighLevel "Inbound Webhook" workflow trigger. */
/** Resolves true if sent, false if no webhook is configured. */
async function submitToGoHighLevel(lead: Lead): Promise<boolean> {
  if (!GHL_WEBHOOK_URL) return false;

  const [firstName, ...rest] = lead.name.split(/\s+/);

  const response = await fetch(GHL_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: firstName,
      last_name: rest.join(" "),
      full_name: lead.name,
      email: lead.email,
      phone: lead.phone,
      company_name: lead.company,
      message: lead.message,
      source: lead.source,
    }),
  });
  if (!response.ok) throw new Error(`GoHighLevel webhook responded with ${response.status}`);
  return true;
}

/**
 * Handles both the /contact and /book-demo forms. Validates input, then
 * sends it to the "HRMS Leads" Google Sheet and to the GoHighLevel webhook
 * (which triggers the follow-up automation).
 */
export async function submitLead(_prevState: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const source = formData.get("source")?.toString().trim() || "website";

  if (!name || !email || !company) {
    return { status: "error", message: "Please fill in your name, work email and company." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const lead = { name, email, company, phone, message, source };

  // Send to both destinations independently: the Google Sheet is the record,
  // GoHighLevel triggers the follow-up automation. The visitor only sees an
  // error if neither one accepted the lead.
  const [sheet, ghl] = await Promise.allSettled([submitToGoogleSheet(lead), submitToGoHighLevel(lead)]);
  if (sheet.status === "rejected") console.error("Lead -> Google Sheet failed:", sheet.reason);
  if (ghl.status === "rejected") console.error("Lead -> GoHighLevel failed:", ghl.reason);

  const ghlSent = ghl.status === "fulfilled" && ghl.value;
  if (sheet.status === "rejected" && !ghlSent) {
    return {
      status: "error",
      message: "Something went wrong submitting your request. Please try again or email us directly.",
    };
  }

  return { status: "success" };
}
