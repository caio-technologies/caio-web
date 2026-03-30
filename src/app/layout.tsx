import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Caio — Compliance Infrastructure for Regulated Sectors",
  description:
    "Caio determines compliance — producing clear, auditable outcomes for every candidate. Infrastructure for education, healthcare, and social care recruitment.",
  keywords: [
    "compliance infrastructure",
    "education recruitment",
    "healthcare staffing",
    "social care compliance",
    "audit ready",
    "KCSIE",
    "REC Audited",
    "deterministic compliance",
  ],
  openGraph: {
    title: "Caio — Compliance Infrastructure for Regulated Sectors",
    description:
      "Know who's compliant. Instantly. Caio determines compliance — producing clear, auditable outcomes for every candidate.",
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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
