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
          <p className="hp-hero-sub hp-hero-sub-desktop fade-in fade-in-delay-1">
            Stop chasing documents. Stop second-guessing compliance. Caio runs checks, resolves gaps, and determines compliance end to end, delivering clear, auditable outcomes.
          </p>
          <p className="hp-hero-sub hp-hero-sub-mobile fade-in fade-in-delay-1">
            Caio runs checks, resolves gaps, and determines compliance end to end — delivering clear, auditable outcomes.
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

      {/* ========== BEFORE / AFTER COMPARISON ========== */}
      <section className="hp-comparison" id="showcase">
        <div className="container">
          <h2 className="section-title fade-in" style={{ textAlign: 'center', marginBottom: '16px' }}>
            Stop chasing. Start clearing.
          </h2>
          <p className="hp-comparison-sub fade-in fade-in-delay-1">
            What takes your team days of emails and follow-ups, Caio resolves in minutes.
          </p>
          <p className="hp-comparison-micro fade-in fade-in-delay-1">
            AI agents execute checks, follow up automatically, and resolve issues in real time.
          </p>

          {/* Mobile stat highlight */}
          <div className="hp-comparison-stat fade-in fade-in-delay-2">
            <div className="hp-comparison-stat-item hp-comparison-stat-before">
              <span className="hp-comparison-stat-label">Manual process</span>
              <span className="hp-comparison-stat-value">Days</span>
            </div>
            <span className="hp-comparison-stat-arrow">→</span>
            <div className="hp-comparison-stat-item hp-comparison-stat-after">
              <span className="hp-comparison-stat-label">With Caio</span>
              <span className="hp-comparison-stat-value">Minutes</span>
            </div>
          </div>

          <div className="hp-comparison-grid fade-in fade-in-delay-2">
            {/* LEFT: Without Caio */}
            <div className="hp-compare-card hp-compare-before">
              <div className="hp-compare-header hp-compare-header-before">
                <div className="hp-compare-header-left">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="16" height="12" rx="2"/>
                    <path d="M2 4l8 6 8-6"/>
                  </svg>
                  <span className="hp-compare-label">Without Caio</span>
                </div>
                <span className="hp-compare-duration hp-compare-duration-before">8+ days</span>
              </div>
              <div className="hp-compare-body">
                <div className="hp-email-item">
                  <div className="hp-email-meta">
                    <svg className="hp-email-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="3" width="12" height="8" rx="1.5"/><path d="M1 3l6 4 6-4"/></svg>
                    <span className="hp-timeline-time">Fri 16:48</span>
                  </div>
                  <p className="hp-timeline-msg">Candidate submits DBS certificate via email.</p>
                </div>
                <div className="hp-email-item">
                  <div className="hp-email-meta">
                    <svg className="hp-email-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="3" width="12" height="8" rx="1.5"/><path d="M1 3l6 4 6-4"/></svg>
                    <span className="hp-timeline-time">Mon 09:12</span>
                  </div>
                  <p className="hp-timeline-msg">Sorry for the delay in getting back to you. Unfortunately the certificate is cut off — please re-submit.</p>
                </div>
                <div className="hp-email-item">
                  <div className="hp-email-meta">
                    <svg className="hp-email-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="3" width="12" height="8" rx="1.5"/><path d="M1 3l6 4 6-4"/></svg>
                    <span className="hp-timeline-time">Tue 14:36</span>
                  </div>
                  <p className="hp-timeline-msg">Just following up on the DBS re-upload.</p>
                </div>
                <div className="hp-email-item">
                  <div className="hp-email-meta">
                    <svg className="hp-email-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="3" width="12" height="8" rx="1.5"/><path d="M1 3l6 4 6-4"/></svg>
                    <span className="hp-timeline-time">Wed 10:21</span>
                  </div>
                  <p className="hp-timeline-msg">Thanks for re-submitting. I&apos;m afraid this is still incorrect — please re-submit.</p>
                </div>
                <div className="hp-email-item hp-email-lost">
                  <div className="hp-email-meta">
                    <svg className="hp-email-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="3" width="12" height="8" rx="1.5"/><path d="M1 3l6 4 6-4"/></svg>
                    <span className="hp-timeline-time">Following Wednesday 16:58</span>
                  </div>
                  <p className="hp-timeline-msg"><strong>Candidate secured a role elsewhere → Offlined</strong></p>
                </div>
              </div>
            </div>

            {/* RIGHT: With Caio */}
            <div className="hp-compare-card hp-compare-after">
              <div className="hp-compare-header hp-compare-header-after">
                <div className="hp-compare-header-left">
                  <img src="/caio-logo.png" alt="Caio" className="hp-compare-logo" />
                </div>
                <span className="hp-compare-duration hp-compare-duration-after">11 minutes</span>
              </div>
              <div className="hp-compare-body">
                <div className="hp-caio-step">
                  <div className="hp-caio-bubble hp-caio-bubble-action">DBS certificate uploaded.</div>
                  <span className="hp-caio-time">Fri 17:02</span>
                </div>
                <div className="hp-caio-step">
                  <div className="hp-caio-bubble hp-caio-bubble-system">Issue detected automatically. Issue date not visible.</div>
                  <span className="hp-caio-time">Fri 17:03</span>
                </div>
                <div className="hp-caio-step">
                  <div className="hp-caio-bubble hp-caio-bubble-action">Re-upload requested automatically with clear guidance.</div>
                  <span className="hp-caio-time">Fri 17:04</span>
                </div>
                <div className="hp-caio-step">
                  <div className="hp-caio-bubble hp-caio-bubble-system">Corrected DBS received and validated.</div>
                  <span className="hp-caio-time">Fri 17:11</span>
                </div>
                <div className="hp-caio-step">
                  <div className="hp-caio-bubble hp-caio-bubble-resolved">Final-Check-Ready</div>
                  <span className="hp-caio-time">Fri 17:13</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTINUOUS COMPLIANCE ========== */}
      <section className="hp-continuous" id="continuous">
        <div className="container">
          <span className="hp-continuous-micro fade-in">Continuous monitoring. Automatic resolution.</span>
          <h2 className="section-title fade-in" style={{ textAlign: 'center', marginBottom: '16px' }}>
            Compliant. And kept compliant.
          </h2>
          <p className="hp-continuous-sub fade-in fade-in-delay-1">
            Caio doesn&apos;t stop at clearance. It continuously checks, flags, and re-validates every candidate — keeping your workforce compliant.
          </p>

          {/* Lifecycle flow */}
          <div className="hp-lifecycle fade-in fade-in-delay-2">
            <div className="hp-lifecycle-track">
              <div className="hp-lifecycle-candidate">
                <div className="hp-lifecycle-avatar">JM</div>
                <div className="hp-lifecycle-info">
                  <span className="hp-lifecycle-name">James Mitchell</span>
                  <span className="hp-lifecycle-badge hp-lifecycle-cleared">Cleared</span>
                </div>
                <span className="hp-lifecycle-detail">DBS renewed automatically before expiry</span>
                <span className="hp-lifecycle-action">Candidate contacted · New certificate validated · 4 min</span>
              </div>
              <div className="hp-lifecycle-candidate">
                <div className="hp-lifecycle-avatar">SR</div>
                <div className="hp-lifecycle-info">
                  <span className="hp-lifecycle-name">Sarah Roberts</span>
                  <span className="hp-lifecycle-badge hp-lifecycle-cleared">Cleared</span>
                </div>
                <span className="hp-lifecycle-detail">Right to Work verified and renewed</span>
                <span className="hp-lifecycle-action">Document collected and validated automatically · 12 min</span>
              </div>
              <div className="hp-lifecycle-candidate">
                <div className="hp-lifecycle-avatar">AK</div>
                <div className="hp-lifecycle-info">
                  <span className="hp-lifecycle-name">Anya Kapoor</span>
                  <span className="hp-lifecycle-badge hp-lifecycle-cleared">Cleared</span>
                </div>
                <span className="hp-lifecycle-detail">Safeguarding certificate collected and validated</span>
                <span className="hp-lifecycle-action">Requested, received, and cleared automatically · 22 min</span>
              </div>
              <div className="hp-lifecycle-candidate">
                <div className="hp-lifecycle-avatar">DW</div>
                <div className="hp-lifecycle-info">
                  <span className="hp-lifecycle-name">David Williams</span>
                  <span className="hp-lifecycle-badge hp-lifecycle-cleared">Cleared</span>
                </div>
                <span className="hp-lifecycle-detail">Updated DBS received and validated</span>
                <span className="hp-lifecycle-action">Resolved automatically · 8 min</span>
              </div>
            </div>
          </div>

          <p className="hp-continuous-core fade-in fade-in-delay-3">
            Every candidate is continuously checked, flagged, and re-cleared automatically.
          </p>

          <div className="hp-continuous-points fade-in fade-in-delay-3">
            <div className="hp-continuous-point">
              <svg className="hp-continuous-check" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#D1FAE5"/><path d="M5.5 9l2.5 2.5L12.5 7" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p>Expiries handled automatically before they become risks</p>
            </div>
            <div className="hp-continuous-point">
              <svg className="hp-continuous-check" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#D1FAE5"/><path d="M5.5 9l2.5 2.5L12.5 7" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p>New requirements applied instantly across your workforce</p>
            </div>
            <div className="hp-continuous-point">
              <svg className="hp-continuous-check" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#D1FAE5"/><path d="M5.5 9l2.5 2.5L12.5 7" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p>Issues detected and resolved without manual chasing</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== EXECUTION / CONTROL ========== */}
      <section className="hp-control" id="control">
        <div className="container">
          <h2 className="hp-control-title fade-in">
            Execution by Caio.<br /><span className="hp-control-title-light">Control stays with you.</span>
          </h2>

          <div className="hp-control-flow fade-in fade-in-delay-1">
            <div className="hp-control-card">
              <span className="hp-control-num">01</span>
              <h3 className="hp-control-card-title">Caio Executes</h3>
              <p className="hp-control-card-desc">AI agents run checks, chase documents, and resolve gaps — automatically, 24/7.</p>
            </div>
            <div className="hp-control-divider">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16h16M20 10l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="hp-control-card">
              <span className="hp-control-num">02</span>
              <h3 className="hp-control-card-title">Team Reviews</h3>
              <p className="hp-control-card-desc">Your compliance team sees every action, every decision, every outcome — in real time.</p>
            </div>
            <div className="hp-control-divider">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16h16M20 10l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="hp-control-card">
              <span className="hp-control-num">03</span>
              <h3 className="hp-control-card-title">You Approve</h3>
              <p className="hp-control-card-desc">Nothing goes final without your sign-off. Full authority, zero bottleneck.</p>
            </div>
          </div>

          <p className="hp-control-bottom fade-in fade-in-delay-2">
            Caio does the heavy lifting. Your team makes the final call.
          </p>
        </div>
      </section>


      {/* ========== OUTCOMES ========== */}
      <section className="hp-outcomes" id="outcomes">
        <div className="container">
          <span className="hp-outcomes-micro fade-in">Operational impact</span>
          <h2 className="hp-outcomes-headline fade-in">
            What changes when compliance runs itself
          </h2>
          <p className="hp-outcomes-sub fade-in">
            Compliance should scale with your business, not your team.
          </p>

          <div className="hp-outcomes-grid fade-in fade-in-delay-1">
            <div className="hp-outcome-card">
              <span className="hp-outcome-headline">No manual checks</span>
              <p className="hp-outcome-desc">Every check is executed automatically. Your team reviews outcomes, not paperwork.</p>
            </div>
            <div className="hp-outcome-card">
              <span className="hp-outcome-headline">Lower cost per candidate</span>
              <p className="hp-outcome-desc">Document chasing, follow-ups, and data entry are handled by AI agents — not your compliance team.</p>
            </div>
            <div className="hp-outcome-card">
              <span className="hp-outcome-headline">Same team, more candidates</span>
              <p className="hp-outcome-desc">Compliance scales with volume. Process more candidates without adding headcount.</p>
            </div>
            <div className="hp-outcome-card">
              <span className="hp-outcome-headline">Always audit-ready</span>
              <p className="hp-outcome-desc">Expiries are caught, renewals are triggered, and your workforce stays compliant at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTORS ========== */}
      <section className="hp-sectors" id="sectors">
        <div className="container">
          <h2 className="section-title fade-in">
            Built in education.<br />Expanding across regulated sectors.
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
