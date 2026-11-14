import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

const PAGE_TITLE = "Manitham HRMS Mobile App Privacy Policy";
const PAGE_DESCRIPTION =
  "Read the Manitham HRMS mobile app privacy policy to understand how employee information, attendance, location, camera, payroll, and personal data are collected, used, protected, and managed.";

export const metadata: Metadata = buildMetadata({
  path: "/app-privacy",
  primaryKeyword: "Manitham HRMS mobile app privacy policy",
  secondaryKeywords: ["Manitham HRMS app privacy", "work.hrms.app privacy policy"],
  searchIntent: "navigational",
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  h1: PAGE_TITLE,
});

/**
 * Facts that must come from engineering / legal and could NOT be verified from
 * this repository (it contains only the marketing website, not the mobile app
 * or its backend). Anything left empty / false is simply not published.
 * Fill these in — and bump LAST_UPDATED — once confirmed.
 */
const unverified = {
  /** Registered address of the legal entity. Rendered only when non-empty. */
  registeredAddress: "",
  /** Name / designation of the grievance officer. Rendered only when non-empty. */
  grievanceOfficerName: "",
  /** Set to true ONLY if Call Analytics ships in the released app. */
  callAnalyticsShipped: false,
};

const LAST_UPDATED = "14 November 2026";
const APP_PACKAGE = "work.hrms.app";
const EMAIL = siteConfig.contact.email;

const mail = (subject?: string) => (
  <a
    href={`mailto:${EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`}
    className="font-medium text-brand-600 hover:underline"
  >
    {EMAIL}
  </a>
);

interface DataCategory {
  title: string;
  collected: string;
  why: string;
  how: string;
}

const dataCategories: DataCategory[] = [
  {
    title: "Account and profile information",
    collected:
      "Details your employer enters or that you provide when using the app, such as your name, employee ID, work email address, phone number, designation, department, branch, reporting manager, joining date and profile photo, plus your login credentials.",
    why: "To create and identify your account, show you the right features for your role, and let managers and HR find the right people.",
    how: "Stored in your employer's workspace and shown to you and to authorised users in that workspace according to their permissions.",
  },
  {
    title: "Attendance and work activity",
    collected:
      "Check-in and check-out times, shifts, leave requests and balances, overtime, attendance regularisation requests, tasks, tickets, approvals and announcements.",
    why: "To record attendance, manage leave and expenses, route approvals, and give your employer the records it needs to run payroll.",
    how: "Saved against your employee record and used to calculate attendance, leave and payroll inputs for your employer.",
  },
  {
    title: "Location data (precise and approximate)",
    collected:
      "Your device's precise (GPS) or approximate location at the moments you check in or check out, when your employer has enabled location-based attendance.",
    why: "To verify that attendance is marked from an expected place, such as an office, branch or assigned work location.",
    how: "Attached to the attendance entry and visible to authorised HR personnel and managers according to their permissions. See Background location below for tracking after check-in.",
  },
  {
    title: "Background location tracking",
    collected:
      "Repeated location readings while you are checked in, including when the app is in the background or closed — only if your employer has enabled location tracking.",
    why: "To support field and on-site work monitoring that your employer has chosen to configure.",
    how: "Collected only between check-in and check-out, at an interval set by your company. Visible to authorised HR personnel and managers. Details are in the prominent disclosure in Section 5.",
  },
  {
    title: "Camera and photos",
    collected:
      "Photos you take or choose in the app, such as photos of receipts for expense claims and any photos or files you attach. Separately, on a face-attendance kiosk set up by your employer, the camera takes short frames to check who is at the gate; these frames are used only for that check and are not saved (see \u201cFace Attendance\u201d below).",
    why: "To support expense claims and attachments you choose, and to verify identity when attendance is marked at a face-attendance kiosk.",
    how: "Receipt and attachment photos are attached to the related expense or record. Face Attendance frames are not attached to any record.",
  },
  {
    title: "Face Attendance (face template)",
    collected:
      "If your employer\u2019s HR team enrolls you for Face Attendance, with your consent, a face template: a set of numbers calculated from your face. It is not a photo and a photo cannot be rebuilt from it. At the gate, short camera frames are turned into numbers the same way and compared with the templates of employees enrolled at that branch.",
    why: "To recognise who is at the gate and mark check-in and check-out, and to detect a photo or screen held up to the camera.",
    how: "The comparison happens in your employer\u2019s HRMS workspace. For each attempt, only the gate, the time, the result and match scores are recorded, never an image.",
  },
  {
    title: "Payroll and financial information",
    collected:
      "Payslips, salary components, expense claims and salary advance requests, and bank details where they are shown or can be edited in the app.",
    why: "To let you view your own payslips and pay-related information, and to let authorised payroll users manage them.",
    how: "Shown to you in the app. Visible to others only through the permissions your employer grants to its HR and payroll users.",
  },
  {
    title: "Device identifiers",
    collected:
      "Technical information about your device and the app, namely your push notification token and device model and operating system version, which the notification service needs to reach your device.",
    why: "To deliver notifications to your device.",
    how: "Used only to send notifications. The app does not use an advertising ID and contains no advertising SDK.",
  },
  {
    title: "In-app email",
    collected:
      "Where your employer enables the in-app email feature, the messages you read or send through the app, including recipients, subject lines, content and attachments.",
    why: "To let you read and send work email from within the app.",
    how: "Processed to display and deliver your messages. Not used for advertising.",
  },
  ...(unverified.callAnalyticsShipped
    ? [
        {
          title: "Call analytics",
          collected:
            "Call log metadata for work calls (number, time, duration and direction) and the call recordings your phone's dialer has already saved, if your employer has enabled the module and you allow it. The app does not itself record calls.",
          why: "To give your employer reports on work call activity, only if you allow it.",
          how: "Participation is optional and shown to you before access is requested. Visible to authorised users in your employer's workspace. See Section 5.",
        },
      ]
    : []),
  {
    title: "Local-only biometric authentication",
    collected:
      "If you use Face ID or fingerprint unlock, your phone's operating system handles the biometric check. The app never receives the biometric itself.",
    why: "To let you unlock the app quickly and securely.",
    how: "Biometric data stays on your device and is not collected by us or by your employer. This is separate from Face Attendance.",
  },
];

interface Section {
  id: string;
  title: string;
  body: ReactNode;
}

const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="mt-6 text-lg font-semibold text-ink-900">{children}</h3>
);
const UL = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc space-y-2 pl-6">{children}</ul>
);

const sections: Section[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          This Mobile App Privacy Policy applies to the <strong>Manitham HRMS</strong> mobile application
          (Android package <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">{APP_PACKAGE}</code>),
          published by {siteConfig.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;). Our website is{" "}
          <a href={siteConfig.url} className="font-medium text-brand-600 hover:underline">
            {siteConfig.url.replace("https://", "")}
          </a>
          .
        </p>
        <p>
          Manitham HRMS is a workplace tool. Your <strong>employer</strong> decides which employees get an
          account, which features are switched on (for example location-based attendance) and what information is
          recorded about you. In most cases your employer decides why and how your personal data is used, and we
          process it on your employer&apos;s behalf to provide the service. For account security, support and
          service operation, we handle some data ourselves.
        </p>
        <p>Contact us at {mail()}. Full contact details are in Section 12.</p>
      </>
    ),
  },
  {
    id: "scope",
    title: "Scope",
    body: (
      <>
        <p>This policy covers:</p>
        <UL>
          <li>The Manitham HRMS Android app and, if and when released, the iOS app.</li>
          <li>Employees, managers and HR users who use the app.</li>
          <li>
            Accounts created by an employer. You cannot sign up on your own; your employer creates your account.
          </li>
        </UL>
        <p>
          It does not cover our marketing website, which is described in the{" "}
          <a href="/privacy-policy" className="font-medium text-brand-600 hover:underline">
            website Privacy Policy
          </a>
          . It also does not cover your employer&apos;s own policies about how it uses the data it holds.
        </p>
        <p>The app is not intended for children under 18.</p>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "Data we collect",
    body: (
      <>
        <p>
          What the app collects depends on the features your employer enables and the permissions you grant on
          your device. For each category we explain what is collected, why, and how it is used.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {dataCategories.map((c) => (
            <article key={c.title} className="rounded-2xl border border-slate-200 bg-white/70 p-5">
              <h3 className="text-base font-semibold text-ink-900">{c.title}</h3>
              <dl className="mt-3 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-ink-900">What is collected</dt>
                  <dd className="mt-0.5 text-slate-600">{c.collected}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink-900">Why</dt>
                  <dd className="mt-0.5 text-slate-600">{c.why}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink-900">How it is used</dt>
                  <dd className="mt-0.5 text-slate-600">{c.how}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <H3>Face Attendance</H3>
        <p>
          When you mark attendance on a face-attendance kiosk, the app uses the camera to take a few short frames. The
          frames are sent to your employer&apos;s HRMS workspace over an encrypted connection, turned into numbers to
          check who is there, and then discarded. HRMS does not save the frames, and the phone deletes its own copy as
          soon as they are sent. Enrollment is done by your employer&apos;s HR team with your consent. Face Attendance
          is used only on a kiosk phone your employer sets up; it is not used on your personal phone for ordinary
          check-in.
        </p>
      </>
    ),
  },
  {
    id: "why-we-use-data",
    title: "Why we collect and use data",
    body: (
      <>
        <UL>
          <li><strong>Attendance management:</strong> recording check-ins and check-outs and attendance status.</li>
          <li><strong>Leave management:</strong> requesting, approving and tracking leave.</li>
          <li><strong>Payroll and payslips:</strong> making payslips and pay information available to you and your employer&apos;s payroll team.</li>
          <li><strong>Expense management:</strong> submitting claims, attaching receipt photos and tracking reimbursement.</li>
          <li><strong>Approvals and notifications:</strong> routing requests to approvers and letting you know about decisions.</li>
          <li><strong>Attendance location verification:</strong> checking that attendance is marked from an expected location.</li>
          <li><strong>Face Attendance:</strong> confirming that the person marking attendance is the employee.</li>
          <li><strong>Fraud and misuse prevention:</strong> using location and Face Attendance to deter false attendance entries.</li>
          <li><strong>Account management, security, support and service communication:</strong> signing you in, protecting accounts, answering your questions and sending service notifications.</li>
        </UL>
        <div className="mt-5 rounded-2xl border border-brand-200 bg-brand-50/60 p-5">
          <h3 className="text-base font-semibold text-ink-900">What we do not do</h3>
          <UL>
            <li>The app shows <strong>no advertising</strong>.</li>
            <li>We <strong>do not sell</strong> personal data.</li>
            <li>We <strong>do not profile</strong> you for advertising.</li>
            <li>The app does <strong>not use an advertising ID</strong>.</li>
          </UL>
        </div>
      </>
    ),
  },
  {
    id: "prominent-disclosure",
    title: "Prominent disclosure for sensitive permissions",
    body: (
      <>
        <p>
          The app asks for the permissions below only when the related feature is used. Each permission is
          explained here and, where required, in the app before your device asks you.
        </p>

        <H3>Background location</H3>
        <UL>
          <li>
            Manitham HRMS can collect your location <strong>while the app is in the background or closed</strong>.
          </li>
          <li>This happens <strong>only while you are checked in</strong>.</li>
          <li>
            It happens <strong>only if your employer has enabled location tracking</strong> for your account.
          </li>
          <li>
            Your company sets how often your location is recorded. The interval can be as frequent as{" "}
            <strong>every 15 seconds</strong>.
          </li>
          <li>Tracking <strong>stops when you check out</strong>.</li>
          <li>
            Authorised HR personnel and managers in your employer&apos;s workspace can see this location
            information, according to their permissions.
          </li>
        </UL>

        <H3>Camera</H3>
        <UL>
          <li>
            <strong>Face Attendance:</strong> the camera is used on a face-attendance kiosk phone set up by your employer, when attendance is marked at the gate. It is not used on your personal phone for ordinary check-in.
          </li>
          <li>
            <strong>Receipt photography:</strong> the camera is opened when you choose to photograph a receipt for an
            expense claim.
          </li>
          <li>The app asks for camera permission the first time you use one of these features.</li>
        </UL>

        <H3>Notifications</H3>
        <p>The app uses notifications to send you:</p>
        <UL>
          <li>Attendance reminders</li>
          <li>Leave decisions</li>
          <li>Approvals</li>
          <li>Payslip availability</li>
          <li>Announcements</li>
          <li>Check-out reminders</li>
        </UL>

        {unverified.callAnalyticsShipped ? (
          <>
            <H3>Call analytics</H3>
            <UL>
              <li>
                If your employer has enabled the module and you allow it, the app reads{" "}
                <strong>call log metadata</strong> for work calls (number, time, duration and direction) and the
                call recordings your phone&apos;s dialer has already saved.
              </li>
              <li>The purpose is to give your employer reports on work call activity.</li>
              <li>Authorised users in your employer&apos;s workspace can see this information.</li>
              <li>You can decline; participation is optional.</li>
              <li>
                The app <strong>does not itself record calls</strong> or capture call audio.
              </li>
            </UL>
          </>
        ) : null}
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "Data sharing",
    body: (
      <>
        <p>We share personal data only in these ways:</p>
        <UL>
          <li>
            <strong>Your employer:</strong> authorised HR team members, administrators and managers in your
            employer&apos;s workspace, according to the permissions your employer gives them.
          </li>
          <li>
            <strong>Service providers:</strong> hosting and cloud infrastructure providers, push notification service
            providers, and email delivery providers, who process data only to help us run the service.
          </li>
          <li>
            <strong>Legal and regulatory authorities:</strong> when we are required to by law or a valid legal
            process.
          </li>
        </UL>
        <p>
          We do <strong>not sell</strong> personal data and we do <strong>not share it for advertising</strong>.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "Data security",
    body: (
      <>
        <p>We protect personal data with measures including:</p>
        <UL>
          <li>HTTPS/TLS encryption for data sent between the app and our servers.</li>
          <li>Role-based access control, so users see only what their role permits.</li>
          <li>Separation of each employer&apos;s data into its own workspace.</li>
          <li>Storing session tokens in your device&apos;s secure storage.</li>
        </UL>
        <p>
          No system is completely secure. Keep your login details private and report any suspected unauthorised
          access to {mail("Security concern")}.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data retention",
    body: (
      <>
        <UL>
          <li>
            We keep data while your employer&apos;s account is active, and for as long as needed for payroll,
            statutory and audit obligations.
          </li>
          <li>
            When data is no longer required, it is deleted or anonymised according to your employer&apos;s
            instructions and our contractual obligations.
          </li>
        </UL>
        <p>
          Retention periods for specific data, such as attendance records and location history, depend on your
          employer&apos;s settings and legal obligations. Ask your employer&apos;s HR team for the periods that apply
          to you.
        </p>
        <p>
          <strong>Face Attendance.</strong> Camera frames are never kept. A face template is stored encrypted for as
          long as you are enrolled. Your employer&apos;s HR team can delete it at any time, and it is deleted
          automatically when you leave your employer. The record of each attempt (gate, time, result and match scores,
          with no image) is part of the audit trail and is kept for the audit retention period set for your
          employer&apos;s HRMS workspace.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights, access and deletion",
    body: (
      <>
        <H3>How to make a request</H3>
        <p>
          Because your employer controls most of your data, <strong>contact your employer&apos;s HR team first</strong>{" "}
          to see, correct or delete your information. You can also write to us directly at {mail("Privacy request")}.
          Tell us your name, your employer and what you want us to do. We may need to confirm who you are, and may need
          to involve your employer or keep some records that the law requires.
        </p>
        <UL>
          <li><strong>Access:</strong> ask for a copy of, or information about, the personal data held about you.</li>
          <li><strong>Correction:</strong> ask for inaccurate or incomplete data to be corrected.</li>
          <li><strong>Deletion:</strong> ask for your data to be deleted. Some records may have to be kept for payroll, statutory or audit reasons.</li>
        </UL>

        <H3>Withdrawing device permissions</H3>
        <p>
          You can turn Location, Camera and Notification permissions off at any time in your device&apos;s Settings
          (on Android: Settings &rarr; Apps &rarr; Manitham HRMS &rarr; Permissions).
        </p>
        <UL>
          <li><strong>Location off:</strong> location-based attendance and location tracking may not work, and check-in may be blocked if your employer requires location.</li>
          <li><strong>Camera off:</strong> receipt photos will not work, and a kiosk phone cannot mark attendance by Face Attendance.</li>
          <li><strong>Notifications off:</strong> you will not receive reminders, approval and leave alerts, payslip alerts or announcements, but can still see them in the app.</li>
        </UL>

        <H3>Indian Digital Personal Data Protection Act, 2023</H3>
        <p>
          We handle personal data in line with the DPDP Act, 2023. Under it, you may have the right to access
          information about your personal data, to have it corrected, completed, updated or erased, to have your
          grievances addressed, and to nominate another person to exercise your rights if you die or become unable
          to. Where your employer decides why and how your data is processed, the employer is responsible for
          those requests, and we will help them respond.
        </p>

        <H3>Grievances</H3>
        <p>
          To raise a grievance about how your personal data is handled, write to {mail("Grievance")}
          {unverified.grievanceOfficerName ? <> (attention: {unverified.grievanceOfficerName})</> : null}, or call{" "}
          <a href={`tel:${siteConfig.contact.phoneHref}`} className="font-medium text-brand-600 hover:underline">
            {siteConfig.contact.phoneDisplay}
          </a>
          . If you are not satisfied with the response, you may have the right to complain to the Data Protection
          Board of India.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children’s privacy",
    body: (
      <p>
        Manitham HRMS is not directed to children under 18, and we do not knowingly collect their personal data. If you
        believe a child&apos;s data has been added, contact {mail("Children's privacy")} and we will act on it.
      </p>
    ),
  },
  {
    id: "policy-changes",
    title: "Policy changes",
    body: (
      <>
        <p>
          We may update this policy. The <strong>Last updated</strong> date at the top of this page shows when it
          last changed. For material changes we will update this page and notify users, for example through the app
          or by email, where appropriate. Please check this page from time to time.
        </p>
        <p>Last updated: <strong>{LAST_UPDATED}</strong></p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact information",
    body: (
      <address className="not-italic">
        <p className="font-semibold text-ink-900">{siteConfig.legalName}</p>
        {unverified.registeredAddress ? <p>{unverified.registeredAddress}</p> : null}
        <p>Email: {mail()}</p>
        <p>
          Phone:{" "}
          <a href={`tel:${siteConfig.contact.phoneHref}`} className="font-medium text-brand-600 hover:underline">
            {siteConfig.contact.phoneDisplay}
          </a>
        </p>
        <p>
          Website:{" "}
          <a href={siteConfig.url} className="font-medium text-brand-600 hover:underline">
            {siteConfig.url.replace("https://", "")}
          </a>
        </p>
      </address>
    ),
  },
];

export default function AppPrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Mobile App Privacy Policy", path: "/app-privacy" }]} />
      <section className="py-12 sm:py-16">
        <Container>
          <header className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Manitham HRMS mobile app</p>
            <h1 className="font-display mt-2 text-pretty text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              {PAGE_TITLE}
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              Last updated: <time dateTime="2026-11-14">{LAST_UPDATED}</time> · Applies to the Manitham HRMS app
              (Android package {APP_PACKAGE})
            </p>
          </header>

          <div className="mt-8 grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
            <nav
              aria-label="Table of contents"
              className="glass h-fit rounded-3xl p-5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contents</h2>
              <ol className="mt-3 space-y-1.5 text-sm">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="flex gap-2 rounded-lg px-2 py-1 text-slate-700 hover:bg-white/70 hover:text-brand-600">
                      <span className="w-5 shrink-0 text-slate-400">{i + 1}.</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="glass min-w-0 rounded-3xl p-6 sm:p-10">
              <div className="space-y-12 text-pretty leading-7 text-slate-600">
                {sections.map((s, i) => (
                  <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-24 space-y-4">
                    <h2 id={`${s.id}-h`} className="font-display text-2xl font-bold text-ink-900">
                      {i + 1}. {s.title}
                    </h2>
                    {s.body}
                  </section>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
