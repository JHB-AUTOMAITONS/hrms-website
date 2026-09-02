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

/**
 * Handles both the /contact and /book-demo forms. Validates input, then
 * forwards it as a form-urlencoded POST to the Google Apps Script Web App,
 * which appends a row to the "HRMS Leads" Google Sheet.
 */
export async function submitLead(_prevState: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !company) {
    return { status: "error", message: "Please fill in your name, work email and company." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const body = new URLSearchParams({
    fullName: name,
    workEmail: email,
    company,
    phoneNumber: phone,
    requirement: message,
  });

  try {
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
  } catch {
    return {
      status: "error",
      message: "Something went wrong submitting your request. Please try again or email us directly.",
    };
  }

  return { status: "success" };
}
