"use client";

import { useEffect, useState } from "react";

const posts = [
  {
    slug: "kcsie-2025-what-changes-for-agencies",
    title: "KCSIE 2025: what the latest guidance means for recruitment agencies placing into schools",
    excerpt:
      "Every September brings updates. This year\u2019s KCSIE changes tighten requirements around online checks, overseas verifications, and how agencies evidence their processes to schools. We break down what matters.",
    category: "Education",
    date: "Coming soon",
  },
  {
    slug: "single-central-record-still-a-spreadsheet",
    title: "Your Single Central Record is still a spreadsheet. That\u2019s a safeguarding risk.",
    excerpt:
      "The SCR is the most audited document in education recruitment. Yet most agencies maintain it manually, with gaps they don\u2019t discover until an auditor does. There\u2019s a better way to think about it.",
    category: "Compliance",
    date: "Coming soon",
  },
  {
    slug: "ai-agents-what-they-execute",
    title: "What AI agents actually do inside a compliance check \u2014 and what they never decide",
    excerpt:
      "AI agents query the DBS Update Service, run TRA prohibition checks, and validate Right to Work documents \u2014 autonomously. But the compliance decision? That\u2019s made by deterministic rules, not AI. Here\u2019s why that distinction matters.",
    category: "Product",
    date: "Coming soon",
  },
  {
    slug: "dbs-expiry-renewals-broken-process",
    title: "The DBS expiry problem: why flagging a date isn\u2019t the same as managing a renewal",
    excerpt:
      "Most compliance systems send a reminder when a DBS certificate is about to expire. Then what? Someone emails the candidate, chases the re-upload, checks the document, updates the record. That\u2019s not automation \u2014 it\u2019s a to-do list.",
    category: "Operations",
    date: "Coming soon",
  },
  {
    slug: "manual-compliance-true-cost",
    title: "The hidden cost of manual compliance: what agencies actually spend chasing documents",
    excerpt:
      "Between email chains, re-uploads, spreadsheet updates, and audit prep, the average compliance officer spends 60% of their time on process \u2014 not judgement. We mapped the true cost.",
    category: "Industry",
    date: "Coming soon",
  },
  {
    slug: "deterministic-vs-probabilistic-compliance",
    title: "Why compliance decisions need to be deterministic \u2014 not probabilistic",
    excerpt:
      "AI can extract data from documents and run checks autonomously. But should AI decide whether a candidate is compliant? In regulated sectors where safeguarding is the standard, the answer is no \u2014 and the architecture should reflect that.",
    category: "Engineering",
    date: "Coming soon",
  },
];

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <main>
      <section className="insights-page" id="insights">
        <div className="container">
          <div className="insights-header fade-in">
            <h1 className="insights-title">Insights</h1>
            <p className="insights-sub">Thinking on compliance, infrastructure, and AI.</p>
          </div>

          <div className="insights-tags fade-in fade-in-delay-1">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`insights-tag ${activeCategory === cat ? "insights-tag-active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="insights-grid">
            {filteredPosts.map((post) => (
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
