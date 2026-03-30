"use client";

import Link from "next/link";

export default function HealthcarePage() {
  return (
    <section className="sector-coming-soon" id="healthcare-hero">
      <div className="container">
        <div className="coming-soon-badge">Coming Soon</div>
        <h1 className="section-title">
          Compliance infrastructure for healthcare staffing
        </h1>
        <p className="sector-coming-desc">
          Caio is expanding into healthcare. The same deterministic compliance 
          engine — adapted to CQC standards, DBS requirements, and healthcare-specific 
          regulations.
        </p>
        <div className="sector-coming-ctas">
          <a href="mailto:support@usecaio.com" className="btn btn-dark" id="healthcare-cta">
            Register Interest
          </a>
          <Link href="/" className="btn btn-outline" id="healthcare-back">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
