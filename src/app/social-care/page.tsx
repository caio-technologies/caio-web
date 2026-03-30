"use client";

import Link from "next/link";

export default function SocialCarePage() {
  return (
    <section className="sector-coming-soon" id="social-care-hero">
      <div className="container">
        <div className="coming-soon-badge">Coming Soon</div>
        <h1 className="section-title">
          Compliance infrastructure for social care
        </h1>
        <p className="sector-coming-desc">
          Caio is expanding into social care. The same deterministic compliance 
          engine — adapted to CQC, Ofsted, and social care-specific regulatory 
          requirements.
        </p>
        <div className="sector-coming-ctas">
          <a href="mailto:support@usecaio.com" className="btn btn-dark" id="social-care-cta">
            Register Interest
          </a>
          <Link href="/" className="btn btn-outline" id="social-care-back">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
