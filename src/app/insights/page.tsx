import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights — Caio",
  description:
    "Thinking on compliance infrastructure, AI agents, and regulated recruitment. From the team building Caio.",
};

const posts = [
  {
    slug: "why-deterministic-rules",
    title: "Why compliance decisions should be deterministic — not probabilistic",
    excerpt:
      "AI is transforming how checks are executed. But the decision itself? That needs to be rule-based, auditable, and repeatable. Here's why Caio separates execution from assessment.",
    category: "Engineering",
    date: "Coming soon",
  },
  {
    slug: "kcsie-gap",
    title: "The KCSIE compliance gap most agencies don't see until audit",
    excerpt:
      "You run the checks. You collect the documents. But when an auditor asks for a single, timestamped trail from onboarding to clearance — can you produce it?",
    category: "Education",
    date: "Coming soon",
  },
  {
    slug: "ai-agents-compliance",
    title: "AI agents in compliance: what they do and what they don't decide",
    excerpt:
      "AI agents execute TRA checks, query the DBS Update Service, and validate Right to Work — autonomously. But they never make the compliance decision. That's by design.",
    category: "Product",
    date: "Coming soon",
  },
  {
    slug: "expiry-management",
    title: "Expiry management isn't a reminder — it's a process",
    excerpt:
      "Most systems flag an expiry. Caio runs the entire renewal: contacting the candidate, collecting the document, validating it, and clearing the check. No human needed until sign-off.",
    category: "Product",
    date: "Coming soon",
  },
  {
    slug: "audit-ready-by-design",
    title: "What 'audit-ready' actually means when every decision is logged",
    excerpt:
      "If your compliance process produces a clear, timestamped record for every candidate — from document upload through to final decision — audit isn't a scramble. It's a report.",
    category: "Compliance",
    date: "Coming soon",
  },
  {
    slug: "building-for-regulated-sectors",
    title: "Building compliance infrastructure for sectors that can't afford to get it wrong",
    excerpt:
      "Education, healthcare, and social care share one thing: the cost of non-compliance is measured in safeguarding risk, not just fines. That changes how you build.",
    category: "Company",
    date: "Coming soon",
  },
];

export default function InsightsPage() {
  return (
    <main>
      <section className="insights-hero" id="insights-hero">
        <div className="container">
          <span className="edu-hero-label fade-in">Insights</span>
          <h1 className="insights-hero-headline fade-in">
            Thinking on compliance,<br />infrastructure, and AI.
          </h1>
          <p className="insights-hero-sub fade-in fade-in-delay-1">
            From the team building Caio — perspectives on deterministic compliance, AI agents, and what it takes to be audit-ready by design.
          </p>
        </div>
      </section>

      <section className="insights-grid-section" id="insights-posts">
        <div className="container">
          <div className="insights-grid">
            {posts.map((post) => (
              <article key={post.slug} className="insights-card fade-in">
                <div className="insights-card-category">{post.category}</div>
                <h2 className="insights-card-title">{post.title}</h2>
                <p className="insights-card-excerpt">{post.excerpt}</p>
                <div className="insights-card-meta">
                  <span className="insights-card-date">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
