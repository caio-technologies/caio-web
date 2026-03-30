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
          <h2 className="section-title fade-in">How Caio Works</h2>
          <p className="hp-how-sub fade-in fade-in-delay-1">
            Caio runs end-to-end compliance from first document to final outcome.<br />
            Behind the scenes, AI agents execute checks, follow up on missing information, and keep the process moving automatically.
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
          </div>

          <div className="hp-how-outcome fade-in fade-in-delay-3">
            <div className="hp-how-outcome-icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 4L6 10v8c0 7.7 5.1 14.9 12 17 6.9-2.1 12-9.3 12-17v-8L18 4z" strokeLinejoin="round"/>
                <path d="M13 18l3.5 3.5L23 15" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="hp-how-outcome-title">Final Outcome</h3>
            <p className="hp-how-outcome-badge">Final-Check-Ready</p>
            <p className="hp-how-outcome-desc">
              Caio presents a fully reasoned, auditable outcome.<br />
              You review and approve — and the candidate is ready to place.
            </p>
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
              <div className="assessment-card">
                <div className="assessment-auto-bar">
                  <span className="assessment-auto-icon">⚡</span>
                  <span className="assessment-auto-text">Automatically executed</span>
                  <span className="assessment-auto-divider">·</span>
                  <span className="assessment-auto-text">2.3 seconds</span>
                  <span className="assessment-auto-divider">·</span>
                  <span className="assessment-auto-text">No human input required</span>
                </div>
                <div className="assessment-decision">
                  <div className="assessment-decision-result">
                    <span className="assessment-decision-key">Caio Decision:</span>
                    <span className="assessment-decision-value">Fully Qualified Teacher</span>
                  </div>
                  <div className="assessment-rule">
                    <span className="assessment-rule-label">Rule:</span>
                    <span className="assessment-rule-text">APSCo Req 7 — Verify TRA status confirms QTS, no prohibitions, and no Section 128 restrictions.</span>
                  </div>
                  <div className="assessment-rule">
                    <span className="assessment-rule-label">Finding:</span>
                    <span className="assessment-rule-text">TRA record confirmed. QTS awarded 2016. Induction completed. No prohibitions or restrictions found.</span>
                  </div>
                  <div className="assessment-timestamp-row">
                    <span className="assessment-timestamp-text">Executed: 30 Mar 2026, 14:32:07</span>
                  </div>
                </div>

                <div className="assessment-outcome">
                  <span className="assessment-outcome-icon">✓</span>
                  <span className="assessment-outcome-label">Cleared</span>
                  <span className="assessment-outcome-desc">— All checks passed. Ready for human sign-off.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. TRUST / EDUCATION WEDGE ========== */}
      <section className="hp-trust" id="trust">
        <div className="container">
          <h2 className="hp-trust-headline fade-in">
            Built for regulated recruitment
          </h2>
          <div className="hp-trust-badges fade-in fade-in-delay-1">
            <div className="trust-badge">
              <span className="trust-badge-text">Education</span>
            </div>
            <div className="trust-badge">
              <span className="trust-badge-text">Healthcare</span>
            </div>
            <div className="trust-badge">
              <span className="trust-badge-text">Social Care</span>
            </div>
            <div className="trust-badge">
              <span className="trust-badge-text">Other Regulated Sectors</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. PROBLEM ========== */}
      <section className="hp-problem" id="problem">
        <div className="container">
          <h2 className="section-title fade-in">
            Compliance today is slow, manual, and inconsistent
          </h2>

          <div className="hp-problem-grid">
            <div className="hp-problem-col fade-in fade-in-delay-1">
              <h3>Most teams rely on:</h3>
              <ul>
                <li>
                  <span className="problem-bullet">×</span>
                  Multiple systems with no single source of truth
                </li>
                <li>
                  <span className="problem-bullet">×</span>
                  Manual checks and follow-ups
                </li>
                <li>
                  <span className="problem-bullet">×</span>
                  Decisions that vary by person
                </li>
              </ul>
            </div>
            <div className="hp-problem-col fade-in fade-in-delay-2">
              <h3>This leads to:</h3>
              <ul>
                <li>
                  <span className="problem-bullet problem-bullet-red">→</span>
                  Delays placing candidates
                </li>
                <li>
                  <span className="problem-bullet problem-bullet-red">→</span>
                  Duplicated work
                </li>
                <li>
                  <span className="problem-bullet problem-bullet-red">→</span>
                  Exposure to regulatory risk
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4. THE SHIFT ========== */}
      <section className="hp-shift" id="shift">
        <div className="container">
          <div className="hp-shift-content fade-in">
            <h2 className="section-title">From process to decision</h2>
            <p className="hp-shift-body">
              Caio replaces workflows with a single decision layer.
            </p>
            <div className="hp-shift-statements">
              <p className="hp-shift-statement">
                We don&apos;t track compliance.
              </p>
              <p className="hp-shift-statement hp-shift-bold">
                We determine it.
              </p>
            </div>
            <p className="hp-shift-detail">
              Every candidate is evaluated against structured rules — producing a clear, auditable outcome.
            </p>
          </div>
        </div>
      </section>

      {/* ========== 5. WHAT CAIO DOES ========== */}
      <section className="hp-features" id="features">
        <div className="container">
          <h2 className="section-title fade-in">A complete compliance system</h2>

          <div className="hp-features-grid">
            <div className="hp-feature-card fade-in">
              <div className="hp-feature-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 4l-9 6.5V12h4v8h3v-5h4v5h3v-8h4v-1.5L14 4z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Determine requirements</h3>
              <p>Automatically define what&apos;s required based on role and regulation</p>
            </div>

            <div className="hp-feature-card fade-in fade-in-delay-1">
              <div className="hp-feature-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="5" y="6" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M9 12h10M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="21" cy="19" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M23.5 21.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Verify evidence</h3>
              <p>Validate documents and checks against structured rules</p>
            </div>

            <div className="hp-feature-card fade-in fade-in-delay-2">
              <div className="hp-feature-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 3a11 11 0 100 22 11 11 0 000-22zm-1.5 15.5l-4.5-4.5 1.4-1.4 3.1 3.1 7-7 1.4 1.4-8.4 8.4z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Produce decisions</h3>
              <p>PASS, REVIEW, or BLOCK — with full reasoning</p>
            </div>

            <div className="hp-feature-card fade-in fade-in-delay-3">
              <div className="hp-feature-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M14 8v6l4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Maintain compliance</h3>
              <p>Track expiries and enforce revalidation</p>
            </div>

            <div className="hp-feature-card fade-in fade-in-delay-4">
              <div className="hp-feature-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M9 10h10M9 14h10M9 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Audit everything</h3>
              <p>Every decision is timestamped, traceable, and defensible</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 6. HOW IT WORKS ========== */}
      <section className="hp-how" id="how-it-works">
        <div className="container">
          <h2 className="section-title fade-in">Deterministic by design</h2>

          <div className="hp-flow fade-in fade-in-delay-1">
            <div className="hp-flow-step">
              <div className="hp-flow-number">1</div>
              <h3>Data structured</h3>
              <p>Candidate data and documents are standardised</p>
            </div>
            <div className="hp-flow-connector">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                <path d="M0 6h36M32 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="hp-flow-step">
              <div className="hp-flow-number">2</div>
              <h3>Checks executed</h3>
              <p>All required checks run automatically</p>
            </div>
            <div className="hp-flow-connector">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                <path d="M0 6h36M32 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="hp-flow-step">
              <div className="hp-flow-number">3</div>
              <h3>Rules applied</h3>
              <p>Every requirement evaluated consistently</p>
            </div>
            <div className="hp-flow-connector">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                <path d="M0 6h36M32 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="hp-flow-step hp-flow-step-final">
              <div className="hp-flow-number">4</div>
              <h3>Outcome produced</h3>
              <p>Clear status with full audit trail</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 7. OUTCOMES ========== */}
      <section className="hp-outcomes" id="outcomes">
        <div className="container">
          <h2 className="section-title fade-in">Built for scale and certainty</h2>

          <div className="hp-metrics-grid">
            <div className="hp-metric fade-in">
              <span className="hp-metric-value">70%</span>
              <span className="hp-metric-label">reduction in compliance cost</span>
            </div>
            <div className="hp-metric fade-in fade-in-delay-1">
              <span className="hp-metric-value">3×</span>
              <span className="hp-metric-label">increase in candidate throughput</span>
            </div>
            <div className="hp-metric fade-in fade-in-delay-2">
              <span className="hp-metric-value">100%</span>
              <span className="hp-metric-label">consistent decisions every time</span>
            </div>
            <div className="hp-metric fade-in fade-in-delay-3">
              <span className="hp-metric-value">Instant</span>
              <span className="hp-metric-label">audit-ready compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 8. POSITIONING ========== */}
      <section className="hp-positioning" id="positioning">
        <div className="container">
          <div className="hp-positioning-content fade-in">
            <h2 className="section-title">Infrastructure, not software</h2>
            <p className="hp-positioning-body">
              Caio sits between your data and your decisions.
            </p>
            <p className="hp-positioning-detail">
              It integrates with your existing systems and becomes the layer that determines 
              compliance across your organisation.
            </p>
          </div>
        </div>
      </section>

      {/* ========== 9. WHO IT'S FOR ========== */}
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
              <h3>Education recruitment</h3>
              <span className="hp-sector-status">Live</span>
            </Link>

            <Link href="/healthcare" className="hp-sector-card hp-sector-coming fade-in fade-in-delay-1" id="sector-healthcare">
              <div className="hp-sector-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 6c-3.3 0-6 2.7-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M14 11h4M16 9v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Healthcare staffing</h3>
              <span className="hp-sector-status hp-sector-status-soon">Coming soon</span>
            </Link>

            <Link href="/social-care" className="hp-sector-card hp-sector-coming fade-in fade-in-delay-2" id="sector-social-care">
              <div className="hp-sector-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 28c6-4 10-8.5 10-13a7.5 7.5 0 00-10-7 7.5 7.5 0 00-10 7c0 4.5 4 9 10 13z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3>Social care</h3>
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

      {/* ========== 10. FINAL CTA ========== */}
      <section className="hp-final-cta" id="book-demo">
        <div className="container">
          <h2 className="section-title fade-in">
            Make compliance consistent, auditable, and scalable
          </h2>
          <div className="hp-final-cta-buttons fade-in fade-in-delay-1">
            <a href="mailto:support@usecaio.com" className="btn btn-dark" id="hp-final-cta-demo">
              Book a Demo
            </a>
            <a href="mailto:support@usecaio.com" className="btn btn-outline" id="hp-final-cta-speak">
              Speak to the team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
