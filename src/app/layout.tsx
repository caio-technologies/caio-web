import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Caio — AI-Powered Compliance for Education Recruitment",
  description:
    "Caio's AI agents execute candidate onboarding and end-to-end compliance — producing clear, auditable Final-Check-Ready outcomes. Faster. Safer. Smarter.",
  keywords: [
    "AI compliance",
    "education recruitment",
    "candidate onboarding",
    "audit ready",
    "KCSIE",
    "REC Audited",
  ],
  openGraph: {
    title: "Caio — AI-Powered Compliance for Education Recruitment",
    description:
      "AI agents execute candidate onboarding and end-to-end compliance — producing clear, auditable Final-Check-Ready outcomes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
