"use client";

export default function SocialCarePage() {
  return (
    <section className="edu-hero" id="social-care-hero">
      <div className="container">
        <div className="edu-hero-grid">
          <div className="edu-hero-content">
            <span className="edu-hero-label">Social Care</span>
            <span className="edu-hero-coming-soon">Coming soon</span>
            <h1 className="edu-hero-headline">
              CQC-aligned compliance,<br />executed end to end.
            </h1>
            <p className="edu-hero-sub">
              From onboarding through to expiries, checks are executed automatically, returning a clear compliance outcome ready for&nbsp;approval.
            </p>
            <p className="hp-hero-powered">Powered by AI execution and deterministic decisioning.</p>
            <div className="edu-hero-cta">
              <a href="mailto:support@usecaio.com" className="btn btn-dark" id="social-care-cta">
                Register Interest
              </a>
            </div>
          </div>
          <div className="edu-hero-card">
            <div className="edu-hero-card-header">
              <div className="edu-hero-card-avatar">RP</div>
              <div>
                <div className="edu-hero-card-name">Rachel Patel</div>
                <div className="edu-hero-card-role">Care Worker · Domiciliary</div>
              </div>
              <span className="edu-hero-card-badge edu-hero-card-badge-cleared">Cleared</span>
            </div>
            <div className="edu-hero-card-checks">
              <div className="edu-hero-card-check">
                <span className="edu-hero-card-check-icon edu-hero-card-check-pass">✓</span>
                <span>Enhanced DBS</span>
                <span className="edu-hero-card-check-meta">Status current</span>
              </div>
              <div className="edu-hero-card-check">
                <span className="edu-hero-card-check-icon edu-hero-card-check-pass">✓</span>
                <span>Right to Work</span>
                <span className="edu-hero-card-check-meta">Verified</span>
              </div>
              <div className="edu-hero-card-check">
                <span className="edu-hero-card-check-icon edu-hero-card-check-pass">✓</span>
                <span>References</span>
                <span className="edu-hero-card-check-meta">2 of 2 received</span>
              </div>
              <div className="edu-hero-card-check">
                <span className="edu-hero-card-check-icon edu-hero-card-check-pass">✓</span>
                <span>Care Certificate</span>
                <span className="edu-hero-card-check-meta">Confirmed</span>
              </div>
              <div className="edu-hero-card-check">
                <span className="edu-hero-card-check-icon edu-hero-card-check-pass">✓</span>
                <span>Safeguarding Training</span>
                <span className="edu-hero-card-check-meta">Up to date</span>
              </div>
            </div>
            <div className="edu-hero-card-footer">
              <span className="edu-hero-card-footer-label">Compliance outcome</span>
              <span className="edu-hero-card-footer-status">Ready for approval</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
