"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
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

  const sectors = ["Education", "Healthcare", "Social Care"];
  const [currentSector, setCurrentSector] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSector((prev) => (prev + 1) % sectors.length);
        setIsAnimating(false);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ========== 1. HERO ========== */}
      <section className="hp-hero" id="hero">
        <div className="container">
          <h1 className="hp-hero-headline fade-in">
            <span className={`hp-hero-sector ${isAnimating ? "sector-exit" : "sector-enter"}`}>
              {sectors[currentSector]}
            </span>
            Compliance.<br />Run differently.
          </h1>
          <p className="hp-hero-sub fade-in fade-in-delay-1">
            Stop chasing documents and questioning whether you are compliant.
            <br />
            Caio runs checks, resolves gaps, and determines compliance end to end, with full audit.
          </p>
          <p className="hp-hero-powered fade-in fade-in-delay-2">Powered by AI execution and deterministic decisioning.</p>

          <div className="hp-hero-ctas fade-in fade-in-delay-3">
            <a href="#join-waitlist" className="btn btn-dark" id="hp-hero-primary-cta">
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* ========== HOW CAIO WORKS ========== */}
      <section className="hp-how" id="how-it-works">
        <div className="container">
          <h2 className="section-title fade-in">A system that runs compliance end to end</h2>
          <p className="hp-how-sub fade-in fade-in-delay-1">
            Caio runs compliance from first document to final outcome.<br />
            AI agents execute checks, resolve gaps, and keep every candidate moving.
          </p>

          <div className="hp-how-grid fade-in fade-in-delay-2">
            <div className="hp-how-card">
              <div className="hp-how-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 26V6h10l6 6v14H8z" strokeLinejoin="round"/>
                  <path d="M18 6v6h6" strokeLinejoin="round"/>
                  <path d="M12 18h8M12 22h5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="hp-how-card-title">Capture</h3>
              <p className="hp-how-card-desc">Candidate information and documents are collected and structured through a guided process.</p>
            </div>
            <div className="hp-how-card">
              <div className="hp-how-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="6" y="7" width="20" height="18" rx="2" strokeLinejoin="round"/>
                  <path d="M12 15l3 3 5-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="hp-how-card-title">Check</h3>
              <p className="hp-how-card-desc">All required checks are executed and validated against the relevant compliance framework.</p>
            </div>
            <div className="hp-how-card">
              <div className="hp-how-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="16" cy="16" r="10"/>
                  <path d="M16 11v5l3.5 3.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="hp-how-card-title">Resolve</h3>
              <p className="hp-how-card-desc">Missing, incorrect, or incomplete information is identified and handled automatically.</p>
            </div>
            <div className="hp-how-card">
              <div className="hp-how-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="16" cy="16" r="10"/>
                  <path d="M12 16l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="hp-how-card-title">Decide</h3>
              <p className="hp-how-card-desc">Compliance requirements are evaluated and a clear outcome is produced.</p>
            </div>
            <div className="hp-how-card hp-how-card-final">
              <div className="hp-how-icon hp-how-icon-final">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 3L5 8v7c0 6.8 4.5 13.2 11 15 6.5-1.8 11-8.2 11-15V8L16 3z" strokeLinejoin="round"/>
                  <path d="M11 16l3.5 3.5L21 13" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="hp-how-card-title">Final Outcome</h3>
              <p className="hp-how-card-desc">A fully reasoned, auditable outcome. You review and approve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRODUCT SHOWCASE ========== */}
      <section className="hp-showcase" id="showcase">
        <div className="container">
          <div className="hp-showcase-grid">
            <div className="hp-showcase-text fade-in">
              <h2 className="hp-showcase-title">Audit Ready by Design</h2>
              <p className="hp-showcase-desc">
                Every decision explained, time-stamped, and defensible.
              </p>
              <p className="hp-showcase-body">
                Caio records how each outcome is reached. The rules applied, the evidence assessed, and the exact moment the decision is made.
              </p>
              <p className="hp-showcase-body">
                Nothing is hidden. Nothing is lost.
              </p>
              <p className="hp-showcase-body">
                Every step is recorded and reviewable.
              </p>
            </div>
            <div className="hp-showcase-image fade-in fade-in-delay-1">
              {[
                {
                  decision: "Fully Qualified Teacher",
                  rule: "APSCo Req 7 — Verify TRA status confirms QTS, no prohibitions, and no Section 128 restrictions.",
                  finding: "TRA record confirmed. QTS awarded 2016. Induction completed. No prohibitions or restrictions found.",
                  time: "2.3 seconds",
                  timestamp: "30 Mar 2026, 14:32:07"
                },
                {
                  decision: "Registered Nurse",
                  rule: "CQC Reg 19 — Verify NMC registration is active with no conditions, cautions, or fitness-to-practise concerns.",
                  finding: "NMC Pin verified. Registration active. No conditions, cautions or restrictions found. Revalidation current.",
                  time: "1.8 seconds",
                  timestamp: "30 Mar 2026, 14:33:41"
                },
                {
                  decision: "Qualified Care Worker",
                  rule: "CQC Reg 19 — Confirm enhanced DBS with barred list check, mandatory training, and right to work.",
                  finding: "Enhanced DBS clear. Adult barred list checked. Mandatory care certificate completed. Right to work confirmed.",
                  time: "2.1 seconds",
                  timestamp: "30 Mar 2026, 14:35:19"
                }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className={`assessment-card ${idx === currentSector ? 'assessment-card-active' : 'assessment-card-hidden'}`}
                >
                  <div className="assessment-auto-bar">
                    <span className="assessment-auto-icon">⚡</span>
                    <span className="assessment-auto-text">Automatically executed</span>
                    <span className="assessment-auto-divider">·</span>
                    <span className="assessment-auto-text">{card.time}</span>
                    <span className="assessment-auto-divider">·</span>
                    <span className="assessment-auto-text">No human input required</span>
                  </div>
                  <div className="assessment-decision">
                    <div className="assessment-decision-result">
                      <span className="assessment-decision-key">Caio Decision:</span>
                      <span className="assessment-decision-value">{card.decision}</span>
                    </div>
                    <div className="assessment-rule">
                      <span className="assessment-rule-label">Rule:</span>
                      <span className="assessment-rule-text">{card.rule}</span>
                    </div>
                    <div className="assessment-rule">
                      <span className="assessment-rule-label">Finding:</span>
                      <span className="assessment-rule-text">{card.finding}</span>
                    </div>
                    <div className="assessment-timestamp-row">
                      <span className="assessment-timestamp-text">Executed: {card.timestamp}</span>
                    </div>
                  </div>

                  <div className="assessment-outcome">
                    <span className="assessment-outcome-icon">✓</span>
                    <span className="assessment-outcome-label">Cleared</span>
                    <span className="assessment-outcome-desc">— All checks passed. Ready for human sign-off.</span>
                  </div>
                </div>
              ))}
              <div className="assessment-indicators">
                {["Education", "Healthcare", "Social Care"].map((label, idx) => (
                  <span
                    key={idx}
                    className={`assessment-indicator ${idx === currentSector ? 'assessment-indicator-active' : ''}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTORS ========== */}
      <section className="hp-sectors" id="sectors">
        <div className="container">
          <h2 className="section-title fade-in">
            Built in education. Expanding across regulated sectors.
          </h2>

          <div className="hp-sectors-grid">
            <Link href="/education" className="hp-sector-card fade-in" id="sector-education">
              <div className="hp-sector-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L3 11l13 7 13-7-13-7z" fill="currentColor" opacity="0.2"/>
                  <path d="M16 4L3 11l13 7 13-7-13-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M6 13.5v7L16 27l10-6.5v-7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M27 11v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Education</h3>
              <span className="hp-sector-status">Live</span>
            </Link>

            <Link href="/healthcare" className="hp-sector-card hp-sector-coming fade-in fade-in-delay-1" id="sector-healthcare">
              <div className="hp-sector-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 6c-3.3 0-6 2.7-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M14 11h4M16 9v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Healthcare</h3>
              <span className="hp-sector-status hp-sector-status-soon">Coming soon</span>
            </Link>

            <Link href="/social-care" className="hp-sector-card hp-sector-coming fade-in fade-in-delay-2" id="sector-social-care">
              <div className="hp-sector-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 28c6-4 10-8.5 10-13a7.5 7.5 0 00-10-7 7.5 7.5 0 00-10 7c0 4.5 4 9 10 13z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3>Social Care</h3>
              <span className="hp-sector-status hp-sector-status-soon">Coming soon</span>
            </Link>

            <div className="hp-sector-card hp-sector-coming fade-in fade-in-delay-3" id="sector-other">
              <div className="hp-sector-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Other regulated environments</h3>
              <span className="hp-sector-status hp-sector-status-soon">Coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="hp-final-cta" id="join-waitlist">
        <div className="container">
          <h2 className="section-title fade-in">
            Make compliance consistent, auditable, and scalable
          </h2>
          <div className="hp-final-cta-buttons fade-in fade-in-delay-1">
            <a href="mailto:support@usecaio.com" className="btn btn-dark" id="hp-final-cta-demo">
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
