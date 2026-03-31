import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights — Caio",
  description:
    "Thinking on compliance infrastructure, AI agents, and regulated recruitment. From the team building Caio.",
};

const posts = [
  {
    slug: "kcsie-2025-what-changes-for-agencies",
    title: "KCSIE 2025: what the latest guidance means for recruitment agencies placing into schools",
    excerpt:
      "Every September brings updates. This year's KCSIE changes tighten requirements around online checks, overseas verifications, and how agencies evidence their processes to schools. We break down what matters.",
    category: "Education",
    date: "Coming soon",
  },
  {
    slug: "single-central-record-still-a-spreadsheet",
    title: "Your Single Central Record is still a spreadsheet. That's a safeguarding risk.",
    excerpt:
      "The SCR is the most audited document in education recruitment. Yet most agencies maintain it manually, with gaps they don't discover until an auditor does. There's a better way to think about it.",
    category: "Compliance",
    date: "Coming soon",
  },
  {
    slug: "ai-agents-what-they-execute",
    title: "What AI agents actually do inside a compliance check — and what they never decide",
    excerpt:
      "AI agents query the DBS Update Service, run TRA prohibition checks, and validate Right to Work documents — autonomously. But the compliance decision? That's made by deterministic rules, not AI. Here's why that distinction matters.",
    category: "Product",
    date: "Coming soon",
  },
  {
    slug: "dbs-expiry-renewals-broken-process",
    title: "The DBS expiry problem: why flagging a date isn't the same as managing a renewal",
    excerpt:
      "Most compliance systems send a reminder when a DBS certificate is about to expire. Then what? Someone emails the candidate, chases the re-upload, checks the document, updates the record. That's not automation — it's a to-do list.",
    category: "Operations",
    date: "Coming soon",
  },
  {
    slug: "manual-compliance-true-cost",
    title: "The hidden cost of manual compliance: what agencies actually spend chasing documents",
    excerpt:
      "Between email chains, re-uploads, spreadsheet updates, and audit prep, the average compliance officer spends 60% of their time on process — not judgement. We mapped the true cost.",
    category: "Industry",
    date: "Coming soon",
  },
  {
    slug: "deterministic-vs-probabilistic-compliance",
    title: "Why compliance decisions need to be deterministic — not probabilistic",
    excerpt:
      "AI can extract data from documents and run checks autonomously. But should AI decide whether a candidate is compliant? In regulated sectors where safeguarding is the standard, the answer is no — and the architecture should reflect that.",
    category: "Engineering",
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
