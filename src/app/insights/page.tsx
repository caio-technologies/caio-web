"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { posts } from "./posts";

const categories = ["All", "Education", "Healthcare", "Social Care", "Compliance", "Product"];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  }, [activeCategory]);

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <main>
      <div className="insights-header fade-in">
        <div className="container">
          <h1 className="insights-title">Insights</h1>
          <p className="insights-sub">Thinking on compliance, infrastructure, and AI.</p>
        </div>
      </div>
      <section className="insights-page" id="insights">
        <div className="container">

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
              <Link key={post.slug} href={`/insights/${post.slug}`} className="insights-flip-wrapper fade-in">
                <div className="insights-flip-inner">
                  <div className="insights-flip-front" data-category={post.category.toLowerCase()}>
                    <div className="insights-card-category">{post.category}</div>
                    <h2 className="insights-card-title">{post.title}</h2>
                    <div className="insights-card-meta">
                      <span className="insights-card-date">{post.date}</span>
                    </div>
                  </div>
                  <div className="insights-flip-back">
                    <div className="insights-card-category">{post.category}</div>
                    <p className="insights-card-excerpt">{post.excerpt}</p>
                    <span className="insights-flip-cta">Read article →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
