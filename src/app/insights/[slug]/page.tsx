"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { posts } from "../posts";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = posts.find((p) => p.slug === slug);
  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
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
  }, [slug]);

  if (!post) {
    return (
      <main>
        <section className="blog-post-page">
          <div className="container">
            <p>Post not found.</p>
            <Link href="/insights" className="btn btn-outline">← Back to Insights</Link>
          </div>
        </section>
      </main>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return <h2 key={i} className="blog-post-h2">{block.replace("## ", "")}</h2>;
      }
      if (block.startsWith("**") && block.endsWith("**")) {
        return <p key={i} className="blog-post-text"><strong>{block.replace(/\*\*/g, "")}</strong></p>;
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter(l => l.startsWith("- "));
        return (
          <ul key={i} className="blog-post-list">
            {items.map((item, j) => <li key={j}>{item.replace("- ", "")}</li>)}
          </ul>
        );
      }
      if (block.match(/^\d\. /)) {
        const items = block.split("\n").filter(l => l.match(/^\d\. /));
        return (
          <ol key={i} className="blog-post-list">
            {items.map((item, j) => <li key={j}>{item.replace(/^\d\. /, "")}</li>)}
          </ol>
        );
      }
      // Handle bold within paragraphs
      const parts = block.split(/(\*\*[^*]+\*\*)/);
      return (
        <p key={i} className="blog-post-text">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**")
              ? <strong key={j}>{part.replace(/\*\*/g, "")}</strong>
              : part
          )}
        </p>
      );
    });
  };

  return (
    <main>
      <article className="blog-post-page">
        <div className="blog-post-header fade-in">
          <div className="container">
            <Link href="/insights" className="blog-post-back">← Back to Insights</Link>
            <span className="blog-post-category">{post.category}</span>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-date">{post.date}</span>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="blog-post-body fade-in fade-in-delay-1">
            {renderContent(post.content)}
          </div>

          {/* Related articles */}
          <div className="blog-post-related fade-in">
            <h3 className="blog-post-related-title">More from Insights</h3>
            <div className="blog-post-related-grid">
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/insights/${p.slug}`} className="insights-card">
                  <div className="insights-card-category">{p.category}</div>
                  <h2 className="insights-card-title">{p.title}</h2>
                  <p className="insights-card-excerpt">{p.excerpt}</p>
                  <div className="insights-card-meta">
                    <span className="insights-card-date">{p.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
