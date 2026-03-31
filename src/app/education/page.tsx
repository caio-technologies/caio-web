"use client";

import { useEffect } from "react";

export default function EducationPage() {
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

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="edu-hero" id="hero">
        <div className="container">
          <span className="edu-hero-label fade-in">Education sector</span>
          <h1 className="edu-hero-headline fade-in">
            KCSIE-aligned compliance,<br />executed end to end.
          </h1>
          <p className="edu-hero-sub fade-in fade-in-delay-1">
            Caio is an AI compliance platform that runs every check required to place a candidate into a UK&nbsp;school — from DBS and safeguarding to references and qualifications. AI agents execute the work. Your team reviews the&nbsp;outcome.
          </p>
          <div className="edu-hero-cta fade-in fade-in-delay-2">
            <a href="#join-waitlist" className="btn btn-dark" id="edu-hero-cta">
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* ========== STANDARDS TRUST STRIP ========== */}
      <section className="edu-trust-strip" id="standards">
        <div className="container">
          <h2 className="edu-trust-strip-title fade-in">Designed to meet the UK&apos;s highest education standards</h2>
          <div className="edu-trust-strip-logos fade-in fade-in-delay-1">
            <img src="/KCSIE.png" alt="KCSIE" style={{ width: '80px', height: 'auto' }} />
            <img src="/Apsco.jpg" alt="APSCo Compliance+" style={{ width: '120px', height: 'auto' }} />
            <img src="/Rec.png" alt="REC Audited" style={{ width: '140px', height: 'auto' }} />
            <img src="/CCS.png" alt="Crown Commercial Service" style={{ width: '120px', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* ========== COMPLIANCE SYSTEM ========== */}
      <section className="edu-system" id="how-it-runs">
        <div className="container">
          <h2 className="edu-system-title fade-in">Compliance runs as a system, not a process</h2>
          <p className="edu-system-sub fade-in fade-in-delay-1">From first document to final decision, compliance is executed automatically — continuously, consistently, and in line with KCSIE.</p>

          <div className="edu-system-grid fade-in fade-in-delay-2">
            <div className="edu-system-card">
              <svg className="edu-system-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <h3>Documents are captured and structured</h3>
              <p>Candidate details and documents are collected through a guided onboarding process.</p>
            </div>
            <div className="edu-system-card">
              <svg className="edu-system-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              <h3>Checks run automatically</h3>
              <p>Right to Work, DBS, safeguarding, and qualification checks are executed and validated against KCSIE requirements.</p>
            </div>
            <div className="edu-system-card">
              <svg className="edu-system-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/></svg>
              <h3>Issues are resolved in real time</h3>
              <p>Missing or incorrect information is identified and handled automatically, with clear guidance sent to the candidate.</p>
            </div>
            <div className="edu-system-card">
              <svg className="edu-system-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              <h3>Compliance is determined</h3>
              <p>All requirements are evaluated and a clear, auditable outcome is produced.</p>
            </div>
            <div className="edu-system-card edu-system-card-final">
              <svg className="edu-system-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <h3>Cleared for work</h3>
              <p>Your team reviews and approves. The candidate is ready to be placed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== EXPIRIES ========== */}
      <section className="edu-expiries" id="expiries">
        <div className="container">
          <div className="edu-expiries-grid">
            <div className="edu-expiries-content">
              <span className="edu-hero-label fade-in">Continuous compliance</span>
              <h2 className="edu-expiries-title fade-in">Expiries are managed end to end. Not just flagged.</h2>
              <p className="edu-expiries-sub fade-in fade-in-delay-1">
                Most systems send you an alert when a document expires. Caio runs the entire renewal process — contacting the candidate, collecting the new document, validating it, and clearing the check — without your team needing to intervene.
              </p>
              <p className="edu-expiries-sub fade-in fade-in-delay-2">
                DBS certificates, right to work documents, safeguarding training — when they approach expiry, Caio handles it. Your team is notified when it&apos;s resolved, not when there&apos;s a problem.
              </p>
            </div>
            <div className="edu-expiries-flow fade-in fade-in-delay-2">
              <div className="edu-expiry-step">
                <div className="edu-expiry-dot"></div>
                <div className="edu-expiry-detail">
                  <span className="edu-expiry-label">Expiry detected</span>
                  <span className="edu-expiry-desc">DBS certificate expires in 14 days</span>
                </div>
              </div>
              <div className="edu-expiry-step">
                <div className="edu-expiry-dot"></div>
                <div className="edu-expiry-detail">
                  <span className="edu-expiry-label">Candidate contacted</span>
                  <span className="edu-expiry-desc">Re-upload request sent with clear guidance</span>
                </div>
              </div>
              <div className="edu-expiry-step">
                <div className="edu-expiry-dot"></div>
                <div className="edu-expiry-detail">
                  <span className="edu-expiry-label">Document received</span>
                  <span className="edu-expiry-desc">New certificate uploaded and validated</span>
                </div>
              </div>
              <div className="edu-expiry-step edu-expiry-step-final">
                <div className="edu-expiry-dot edu-expiry-dot-final"></div>
                <div className="edu-expiry-detail">
                  <span className="edu-expiry-label">Check cleared</span>
                  <span className="edu-expiry-desc">Compliance maintained. Audit trail updated.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT CHANGES ========== */}
      <section className="edu-usps" id="why-caio">
        <div className="container">
          <h2 className="edu-usps-title fade-in">What changes when compliance runs through Caio</h2>
          <div className="edu-usps-grid">
            <div className="edu-usp fade-in">
              <h3>Checks run in minutes, not days</h3>
              <p>Documents are read, extracted, and validated the moment they&apos;re uploaded. Missing information is chased automatically — no team involvement until sign-off.</p>
            </div>
            <div className="edu-usp fade-in fade-in-delay-1">
              <h3>Same rules, every candidate, every time</h3>
              <p>KCSIE requirements are applied deterministically. What gets cleared for one candidate will always get cleared for the next — removing inconsistency and audit risk.</p>
            </div>
            <div className="edu-usp fade-in fade-in-delay-2">
              <h3>Audit-ready from day one</h3>
              <p>Every action, decision, and document is logged with full reasoning and timestamps. When an auditor asks how a candidate was cleared, you have the answer instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT CAIO CHECKS ========== */}
      <section className="edu-checks" id="checks">
        <div className="container">
          <span className="hp-outcomes-micro fade-in">Full KCSIE-aligned scope</span>
          <h2 className="hp-outcomes-headline fade-in">
            Every check required to place into a UK school
          </h2>
          <p className="hp-outcomes-sub fade-in">
            Caio covers the complete KCSIE compliance scope — identity and right to work, safeguarding and DBS, qualifications, references, and employment history. Aligned to KCSIE, APSCo, REC, and CCS framework requirements.
          </p>

          <div className="edu-scope-categories fade-in fade-in-delay-1">
            <div className="edu-scope-item">Identity &amp; Right to Work</div>
            <div className="edu-scope-item">Safeguarding &amp; DBS</div>
            <div className="edu-scope-item">Qualifications &amp; TRA</div>
            <div className="edu-scope-item">References &amp; History</div>
          </div>
        </div>
      </section>

      {/* ========== AUDIT READINESS ========== */}
      <section className="edu-audit" id="audit-ready">
        <div className="container">
          <h2 className="edu-audit-headline fade-in">
            On the framework? Confident about your next audit?
          </h2>
          <p className="edu-audit-sub fade-in fade-in-delay-1">
            Caio is built to meet the compliance criteria required by APSCo, REC, and CCS — so your agency is audit-ready at all times, not just when the auditor calls.
          </p>

          <div className="edu-audit-grid fade-in fade-in-delay-2">
            <div className="edu-audit-card">
              <img src="/Apsco.jpg" alt="APSCo" className="edu-audit-logo" />
              <h3>APSCo Compliance+</h3>
              <p>Full documentation trail for every candidate. Evidence of consistent process execution. AI and human actions logged separately — exactly what APSCo auditors look for.</p>
            </div>
            <div className="edu-audit-card">
              <img src="/Rec.png" alt="REC" className="edu-audit-logo" />
              <h3>REC Audited Education</h3>
              <p>Standardised compliance workflows aligned to REC education standards. Every decision time-stamped and explainable. No gaps in your audit trail.</p>
            </div>
            <div className="edu-audit-card">
              <img src="/CCS.png" alt="CCS" className="edu-audit-logo" />
              <h3>CCS Framework</h3>
              <p>Meet the compliance criteria of the Crown Commercial Service framework. Consistent vetting, full KCSIE alignment, and continuous monitoring — documented and defensible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STOP CHASING COMPARISON ========== */}
      <section className="hp-comparison" id="comparison">
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

      {/* ========== CTA ========== */}
      <section className="hp-final-cta" id="join-waitlist">
        <div className="container">
          <h2 className="section-title fade-in">
            Ready to run education compliance differently?
          </h2>
          <p className="hp-how-sub fade-in fade-in-delay-1" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 32px' }}>
            Join the waitlist to see how Caio executes KCSIE-aligned compliance for education recruitment.
          </p>
          <div className="hp-final-cta-buttons fade-in fade-in-delay-2">
            <a href="mailto:support@usecaio.com" className="btn btn-dark" id="edu-cta-demo">
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
