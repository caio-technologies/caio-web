"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Scroll-triggered fade-in animations
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

    // Sticky header scroll effect
    const header = document.getElementById("header");
    const handleScroll = () => {
      if (header) {
        if (window.scrollY > 10) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ========== HEADER ========== */}
      <header className="header" id="header">
        <div className="container">
          <a href="/" className="logo" id="logo">
            Caio<span className="logo-dot">.</span>
          </a>
          <a href="#early-access" className="btn btn-primary" id="header-cta">
            <span className="btn-icon">
              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10h12m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Join the Waitlist
          </a>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="hero" id="hero">
        <div className="container">
          <h1 className="hero-title fade-in">
            AI-Powered compliance for
            <br />
            education recruitment.
          </h1>
          <p className="hero-subtitle fade-in fade-in-delay-1">
            AI agents execute candidate onboarding and end-to-end compliance —
            producing clear, auditable Final-Check-Ready outcomes.
          </p>
          <div className="hero-cta fade-in fade-in-delay-2">
            <a href="#early-access" className="btn btn-dark" id="hero-cta-btn">
              Join the Waitlist →
            </a>
          </div>

          {/* Dashboard Mockup with Frosted Card */}
          <div className="hero-dashboard fade-in fade-in-delay-3">
            <div className="hero-card">
              <h3 className="hero-card-title">Final Check Ready</h3>
              <p className="hero-card-desc">All required compliance checks completed</p>
              <div className="hero-card-tags">
                <span className="tag tag-purple">AI-executed</span>
                <span className="tag tag-amber">Human sign-off required</span>
                <span className="tag tag-green">Audit-ready</span>
              </div>
            </div>

            <div className="hero-dashboard-cta">
              <a
                href="#early-access"
                className="btn btn-dark"
                id="hero-card-cta-btn"
              >
                Join the Waitlist →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STANDARDS BAR ========== */}
      <section className="standards-bar" id="standards">
        <div className="container">
          <h2 className="fade-in">
            Aligned to the UK&apos;s highest education standards
          </h2>
          <div className="standards-list fade-in fade-in-delay-1">
            <span className="standard-pill">KCSIE</span>
            <span className="standard-pill">APSCo Compliance+</span>
            <span className="standard-pill">REC Audited</span>
            <span className="standard-pill">CCS</span>
          </div>
        </div>
      </section>

      {/* ========== HOW CAIO WORKS ========== */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">How Caio Works</h2>
            <p className="section-subtitle">
              AI agents execute candidate onboarding and end-to-end compliance —
              from first document upload to Final-Check-Ready.
              <br />
              <br />
              Caio executes the work. Teams review, approve, and stay in
              control.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card fade-in">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 4l-8 6v1.5h3v7.5h3v-5h4v5h3v-7.5h3V10l-8-6z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 4V2m0 0L10 4m2-2l2 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Upload</h3>
              <p>
                Candidates submit documents and required information through a
                guided onboarding flow.
              </p>
            </div>

            <div className="step-card fade-in fade-in-delay-1">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 8h12v1.5H4V8zm0 3h9v1.5H4V11zm0 3h6v1.5H4V14z"
                    fill="currentColor"
                  />
                  <circle
                    cx="17"
                    cy="15"
                    r="3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M19.5 17.5l2 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Execute</h3>
              <p>
                Agents read each document immediately and extract the required
                information to progress checks.
              </p>
            </div>

            <div className="step-card fade-in fade-in-delay-2">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3a9 9 0 100 18 9 9 0 000-18zm-1.3 12.5l-3.5-3.5 1.2-1.2 2.3 2.3 5.6-5.6 1.2 1.2-6.8 6.8z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>Verify</h3>
              <p>
                Agents verify documents against the relevant role and compliance
                framework — automatically and consistently.
              </p>
            </div>

            <div className="step-card fade-in fade-in-delay-1">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="7"
                    y="7"
                    width="10"
                    height="10"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 10v4m0 0l-1.5-1.5m1.5 1.5l1.5-1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 12h2m10 0h2M12 5v2m0 10v2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Resolve</h3>
              <p>
                If anything is missing or unclear, agents contact candidates
                directly and resolve issues as the process runs.
              </p>
            </div>

            <div className="step-card fade-in fade-in-delay-2">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                  <path
                    d="M12 3v3m0 12v3M3 12h3m12 0h3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Decide</h3>
              <p>
                Agents apply the relevant compliance rules and determine
                outcomes consistently across every check.
              </p>
            </div>

            <div className="step-card fade-in fade-in-delay-3">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              </div>
              <h3>Record</h3>
              <p>
                Every action, decision, and change is logged automatically,
                creating a clear, auditable record.
              </p>
            </div>

            {/* Final Outcome */}
            <div className="step-card step-final fade-in">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3a9 9 0 100 18 9 9 0 000-18zm-1.3 12.5l-3.5-3.5 1.2-1.2 2.3 2.3 5.6-5.6 1.2 1.2-6.8 6.8z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="step-final-content">
                <h3>Final Outcome</h3>
                <p>
                  Caio presents a fully reasoned, auditable outcome. You review
                  and approve — and the candidate is ready to place.
                </p>
                <div className="step-final-badge">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#00B69B" />
                    <path
                      d="M5 8.5L3 6.5l.7-.7L5 7.1l3.3-3.3.7.7L5 8.5z"
                      fill="#fff"
                    />
                  </svg>
                  Final-Check-Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== AUDIT READY BY DESIGN ========== */}
      <section className="audit-section" id="audit-ready">
        <div className="container">
          <div className="audit-content fade-in">
            <h2 className="section-title">
              <strong>Audit Ready</strong> by Design
            </h2>
            <p className="section-subtitle">
              Every decision explained, time-stamped, and defensible.
              <br />
              <br />
              Caio records how each compliance outcome is reached — including the
              rules applied, the evidence assessed, and the exact moment each
              decision is made.
              <br />
              <br />
              AI execution and human approval logged separately.
              <br />
              <br />
              This creates a clear, reviewable history that stands up to audits,
              inspections, and client challenge.
            </p>
          </div>

          <div className="audit-demo-card fade-in fade-in-delay-2">
            <div className="audit-card-header">
              <span className="audit-card-logo">Caio</span>
              <div className="audit-card-meta">
                <h4>John Smith</h4>
                <p>Candidate ID: 12345</p>
              </div>
            </div>

            <p className="audit-check-title">Check: TRA Status</p>

            <div className="audit-ai-badge">
              <div className="audit-ai-icon">
                <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="11" fill="#063A50" />
                  <path
                    d="M11 4.07c.28 0 .55.12.75.34.2.22.31.52.31.83 0 .43-.21.82-.53 1.02V7h.53c.99 0 1.94.43 2.64 1.2.7.77 1.09 1.82 1.09 2.91h.53c.14 0 .28.06.38.17.1.11.16.26.16.41v1.76c0 .16-.06.3-.16.42-.1.11-.24.17-.38.17h-.53v.59c0 .31-.11.61-.31.83-.2.22-.47.34-.75.34H7.27c-.28 0-.56-.12-.76-.34-.2-.22-.31-.52-.31-.83v-.59h-.53c-.14 0-.28-.06-.38-.17-.1-.11-.16-.26-.16-.42v-1.76c0-.16.06-.3.16-.41.1-.11.24-.17.38-.17h.53c0-1.09.39-2.14 1.09-2.91C7.99 7.43 8.94 7 9.93 7h.53v-.74c-.32-.2-.53-.59-.53-1.02 0-.31.11-.61.31-.83.2-.22.47-.34.76-.34zM8.6 10.52c-.35 0-.69.15-.94.43-.25.28-.39.65-.39 1.04s.14.76.39 1.04c.25.28.59.43.94.43s.69-.15.94-.43c.25-.28.39-.65.39-1.04s-.14-.76-.39-1.04c-.25-.28-.59-.43-.94-.43zm4.8 0c-.35 0-.69.15-.94.43-.25.28-.39.65-.39 1.04s.14.76.39 1.04c.25.28.59.43.94.43s.69-.15.94-.43c.25-.28.39-.65.39-1.04s-.14-.76-.39-1.04c-.25-.28-.59-.43-.94-.43z"
                    fill="white"
                  />
                </svg>
              </div>
              <span>AI Execution (Caio)</span>
            </div>

            <div className="audit-decision">
              <h3>
                <strong>Decision:</strong> Fully Qualified Teacher
              </h3>
            </div>

            <div className="audit-reasoning">
              <p>Reasoning</p>
              <ul>
                <li>QTS verified</li>
                <li>Induction complete</li>
                <li>No prohibitions</li>
                <li>No Section 128 restriction</li>
              </ul>
            </div>

            <p className="audit-timestamp">Executed: 14 Jan 2026 · 14:32</p>

            <div className="audit-outcome">
              <div className="audit-outcome-icon">
                <svg viewBox="0 0 12 12" fill="none">
                  <path
                    d="M5 8.5L3 6.5l.7-.7L5 7.1l3.3-3.3.7.7L5 8.5z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <span>
                Outcome: <strong>Final-Check-Ready</strong>
              </span>
            </div>

            <p className="audit-signoff">
              AI-executed checks complete. Ready for human sign-off.
            </p>
          </div>
        </div>
      </section>

      {/* ========== AI EXECUTION FLOW ========== */}
      <section className="ai-execution" id="ai-execution">
        <div className="container">
          <h2 className="section-title fade-in">
            <b>AI Execution.</b> Human Authority.
          </h2>

          <div className="execution-flow fade-in fade-in-delay-1">
            <div className="execution-node">
              <div className="execution-node-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 6c-1.5 0-2.8.6-3.8 1.5-1 .9-1.7 2.1-2 3.5-.4 1.5-.2 3.1.4 4.5.6 1.4 1.7 2.5 3 3.2v.9c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h1.6c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1v-.9c1.3-.7 2.4-1.8 3-3.2.6-1.4.8-3 .4-4.5-.3-1.4-1-2.6-2-3.5C18.8 6.6 17.5 6 16 6z"
                    fill="currentColor"
                  />
                  <path
                    d="M13.5 23h5v1.5h-5z"
                    fill="currentColor"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <h4>
                AI Agents
                <br />
                Execute
              </h4>
            </div>

            <div className="execution-arrow">→</div>

            <div className="execution-node">
              <div className="execution-node-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M8 11h16v10H8V11zm2 2v6h12v-6H10z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 15h8m-8 2h5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h4>
                Team
                <br />
                Reviews
              </h4>
            </div>

            <div className="execution-arrow">→</div>

            <div className="execution-node decision-node">
              <div className="execution-node-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M12 17l3 3 6-6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4>
                Decision
                <br />
                Confirmed
              </h4>
            </div>
          </div>

          <p className="execution-caption fade-in fade-in-delay-2">
            Caio accelerates execution. Judgement remains human.
          </p>
        </div>
      </section>

      {/* ========== EFFICIENCY ========== */}
      <section className="efficiency" id="efficiency">
        <div className="container">
          <div className="section-header centered fade-in">
            <h2 className="section-title">
              How Caio improves the efficiency
              <br />
              and reliability of compliance
            </h2>
          </div>

          <div className="efficiency-grid">
            <div className="efficiency-card fade-in">
              <h3>Clear more candidates with the same team</h3>
              <p>
                Clearing more candidates typically means adding headcount.
                <br />
                <br />
                By executing repetitive work in the background, Caio allows the
                same team to clear significantly more candidates — reducing the
                cost per cleared candidate as volumes grow.
              </p>
            </div>
            <div className="efficiency-card fade-in fade-in-delay-1">
              <h3>Stop losing candidates during onboarding</h3>
              <p>
                Manual processes rely on slow responses and repeated chasing —
                causing candidates to disengage.
                <br />
                <br />
                Caio keeps candidates moving by acting immediately, chasing
                automatically, and surfacing what&apos;s needed next — helping
                more candidates reach Final-Check-Ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== QUOTE BANNER ========== */}
      <section className="quote-banner" id="quote">
        <div className="container">
          <p className="quote-text fade-in">
            &quot;Caio provides the evidence, reasoning, and audit trail —{" "}
            <strong>Final decisions remain with your team&quot;</strong>
          </p>
        </div>
      </section>

      {/* ========== WHY AGENTS ========== */}
      <section className="why-agents" id="why-agents">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">
              Why execution-by-agents
              <br />
              outperforms manual processes
            </h2>
            <p className="section-subtitle">
              Manual compliance isn&apos;t limited by decision-making — it&apos;s
              limited by waiting, chasing, and repetitive execution.
              <br />
              <br />
              AI agents act immediately, apply the same rules every time, chase
              gaps automatically, and log every action as it happens. This
              removes delay, inconsistency, and rework — allowing teams to clear
              more candidates, faster, without increasing risk.
            </p>
          </div>

          <h3 className="comparison-header fade-in">
            From manual chasing to AI execution
          </h3>

          <div className="comparison-grid">
            {/* Before Column */}
            <div className="comparison-col before fade-in">
              <div className="comparison-label">
                <div className="comparison-label-icon before-icon">✕</div>
                <h3>Before Caio</h3>
              </div>
              <p className="comparison-desc">
                DBS certificate — manual follow-up
              </p>

              <div className="timeline-item">
                <p className="timeline-time">Fri 16:02</p>
                <p className="timeline-msg">
                  Please submit your DBS certificate.
                </p>
              </div>
              <div className="timeline-item">
                <p className="timeline-time">Mon 09:12</p>
                <p className="timeline-msg">
                  Thanks for sending your DBS. Unfortunately the certificate is
                  cut off — please re-submit.
                </p>
              </div>
              <div className="timeline-item">
                <p className="timeline-time">Tue 14:36</p>
                <p className="timeline-msg">
                  Just following up on the DBS re-upload.
                </p>
              </div>
              <div className="timeline-item">
                <p className="timeline-time">Wed 10:21</p>
                <p className="timeline-msg">
                  Thanks for re-submitting. I&apos;m afraid this is still
                  incorrect — please re-submit.
                </p>
              </div>
              <div className="timeline-item">
                <p className="timeline-time">Thu 15:47</p>
                <p className="timeline-msg">
                  Apologies for chasing — we still need the full DBS
                  certificate.
                </p>
              </div>
              <div className="timeline-item">
                <p className="timeline-time">Fri 14:32</p>
                <p className="timeline-msg">
                  Just checking in — we&apos;re unable to complete your DBS
                  check without the full document.
                </p>
              </div>
              <div className="timeline-item lost">
                <p className="timeline-time">Following Wednesday 16:58</p>
                <p className="timeline-msg">
                  Candidate secured a role elsewhere → Offlined
                </p>
              </div>
            </div>

            {/* After Column */}
            <div className="comparison-col after fade-in fade-in-delay-2">
              <div className="comparison-label">
                <div className="comparison-label-icon after-icon">✓</div>
                <h3>With Caio</h3>
              </div>
              <p className="comparison-desc">
                Same DBS issue — execution by agents
              </p>

              <div className="caio-chat">
                <div className="caio-chat-header">
                  <span className="caio-chat-logo">Caio</span>
                </div>
                <div className="chat-bubble outgoing">
                  Please submit your DBS certificate.
                </div>
                <p className="chat-time">Fri 16:02</p>

                <div className="chat-bubble incoming">
                  DBS certificate uploaded.
                </div>
                <p className="chat-time right">Fri 17:02</p>

                <div className="chat-bubble alert">
                  Issue detected automatically: issue date not visible.
                  Re-upload requested automatically with clear guidance.
                </div>
                <p className="chat-time">Fri 17:03</p>

                <div className="chat-bubble incoming">
                  Re-uploaded with full certificate.
                </div>
                <p className="chat-time right">Fri 18:14</p>
              </div>

              <div className="caio-resolved">
                <div className="caio-resolved-icon">✓</div>
                <span className="caio-resolved-text">
                  DBS check complete — same day
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== COMPLIANCE EXECUTED ========== */}
      <section className="compliance-executed" id="compliance-executed">
        <div className="container">
          <h2 className="section-title fade-in">
            <b>Caio:</b> Compliance, Executed by Agents
          </h2>
          <p className="compliance-tagline fade-in fade-in-delay-1">
            Caio doesn&apos;t manage workflows. <b>It runs them.</b>
          </p>

          <div className="compliance-grid">
            <div className="compliance-card fade-in">
              <div className="compliance-card-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect
                    x="5"
                    y="5"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M14 10v4m0 0l-2-2m2 2l2-2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 14h3m18 0h3M14 2v3m0 18v3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Onboarding</h3>
              <p>
                Candidates are guided through document submission and required
                information via a structured onboarding flow — keeping progress
                moving from the first upload.
              </p>
            </div>
            <div className="compliance-card fade-in fade-in-delay-1">
              <div className="compliance-card-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M6 10h12v1.5H6V10zm0 3h9v1.5H6V13zm0 3h6v1.5H6V16z"
                    fill="currentColor"
                  />
                  <circle
                    cx="20"
                    cy="18"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M23 21l2.5 2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Checks &amp; Reasoning</h3>
              <p>
                Agents carry out end-to-end compliance checks, reviewing
                documents, extracting required information, and applying rules
                consistently. Where information is missing or unclear, agents
                resolve it as the process runs.
              </p>
            </div>
            <div className="compliance-card fade-in fade-in-delay-2">
              <div className="compliance-card-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M14 3a11 11 0 100 22 11 11 0 000-22zm-1.5 15.5l-4.5-4.5 1.4-1.4 3.1 3.1 7-7 1.4 1.4-8.4 8.4z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>Audit Trail</h3>
              <p>
                Every action, decision, and outcome is logged automatically,
                creating a clear, auditable record with human oversight where
                required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATEMENT BAR ========== */}
      <section className="statement-bar" id="statement">
        <div className="container">
          <p className="statement-text fade-in">
            Lower compliance cost. Consistent decisions. Full audit confidence.
          </p>
        </div>
      </section>

      {/* ========== EARLY ACCESS ========== */}
      <section className="early-access" id="early-access">
        <div className="container">
          <h2 className="section-title fade-in">Early Access to Caio</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">
            Caio is opening early access for agencies ready to run compliance
            differently. Pricing is based on candidate throughput, with all
            execution features included.
          </p>
          <div className="fade-in fade-in-delay-2">
            <a
              href="#early-access"
              className="btn btn-dark"
              id="early-access-cta"
            >
              Join the Waitlist →
            </a>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-logo">Caio.</div>
          <div className="footer-center">
            <p className="footer-tagline">Faster. Safer. Smarter.</p>
            <p className="footer-email">
              <a href="mailto:support@usecaio.com">support@usecaio.com</a>
            </p>
          </div>
          <a href="#early-access" className="btn btn-primary" id="footer-cta">
            <span className="btn-icon">
              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10h12m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Join the Waitlist
          </a>
        </div>
      </footer>
    </>
  );
}
