import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Caio",
  description:
    "Get in touch with Caio. Whether you're an education, healthcare, or social care recruiter — we'd like to hear from you.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
