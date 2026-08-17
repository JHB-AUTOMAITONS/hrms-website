import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, H2, P, UL } from "@/components/templates/ArticleLayout";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticleBySlug } from "@/lib/data/articles";
import { siteConfig } from "@/lib/site-config";

const meta = getArticleBySlug("employee-attendance-tracking-guide")!;

export const metadata: Metadata = buildMetadata({
  path: `/resources/${meta.slug}`,
  primaryKeyword: "employee attendance tracking",
  secondaryKeywords: ["biometric attendance", "GPS attendance", "online attendance management"],
  searchIntent: "informational",
  title: `${meta.title} | ${siteConfig.name}`,
  description: meta.excerpt,
  h1: meta.title,
});

export default function AttendanceTrackingGuideArticle() {
  return (
    <ArticleLayout
      meta={meta}
      relatedLinks={[
        { title: "Attendance Management", description: "See these methods inside Manitham HRMS.", href: "/attendance-management" },
        { title: "HRMS for Manufacturing", description: "How shift-based, biometric attendance works at scale.", href: "/industries/manufacturing" },
        { title: "Leave Management", description: "How attendance and leave work together.", href: "/leave-management" },
      ]}
    >
      <P>
        Most companies don&apos;t pick one attendance method and use it everywhere — they mix a few, depending on where
        and how different teams work. Here&apos;s how the three common approaches compare.
      </P>

      <H2>Biometric attendance</H2>
      <P>
        A physical device — usually fingerprint-based — installed at an office or factory entrance. Employees check
        in and out by scanning, and the device records the timestamp.
      </P>
      <P><strong>Works well for:</strong> Fixed locations with a consistent workforce showing up at the same place — offices, factories, warehouses.</P>
      <P><strong>Limitations:</strong> Requires hardware and installation at each location. Doesn&apos;t work for employees who aren&apos;t physically at that location.</P>

      <H2>GPS-based mobile attendance</H2>
      <P>
        Employees check in from a mobile app or browser, with their location captured at the moment of check-in.
        This confirms not just that someone checked in, but roughly where they were when they did it.
      </P>
      <P><strong>Works well for:</strong> Field sales, service technicians, site visits, delivery staff — anyone whose &ldquo;workplace&rdquo; changes day to day.</P>
      <P><strong>Limitations:</strong> Requires employees to have a smartphone with location services enabled, and relies on honest self-reporting of check-in timing (location alone doesn&apos;t prevent someone checking in late on someone else&apos;s behalf, for example).</P>

      <H2>Web-based punch-in</H2>
      <P>
        A simple check-in through a browser, without biometric hardware or location tracking. The employee logs
        in and clicks to mark attendance.
      </P>
      <P><strong>Works well for:</strong> Remote and hybrid employees, or small teams that don&apos;t need hardware-level verification.</P>
      <P><strong>Limitations:</strong> Lowest verification — there&apos;s no hardware or location signal confirming where the check-in happened.</P>

      <H2>Choosing between them</H2>
      <UL>
        <li>Office-based teams at a fixed location → biometric</li>
        <li>Field, sales or site-based teams → GPS-based mobile check-in</li>
        <li>Remote or hybrid teams → web-based punch-in</li>
        <li>Most mid-sized and larger companies → some combination of all three, by team</li>
      </UL>

      <H2>What matters more than the method</H2>
      <P>
        Whichever method (or mix) you use, the bigger question is what happens to that data afterward. Attendance
        that just sits in a device log isn&apos;t useful — it needs to connect to shift schedules (to calculate late
        marks and overtime automatically), to leave records (so approved leave doesn&apos;t show as an absence), and
        eventually to payroll (so hours worked map directly to what&apos;s paid).
      </P>
      <P>
        See how biometric, GPS and web check-in all feed into one system in{" "}
        <Link href="/attendance-management" className="font-medium text-brand-600 hover:underline">Manitham HRMS attendance management</Link>.
      </P>
    </ArticleLayout>
  );
}
