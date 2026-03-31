import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights — Caio",
  description:
    "Thinking on compliance infrastructure, AI agents, and regulated recruitment. From the team building Caio.",
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
