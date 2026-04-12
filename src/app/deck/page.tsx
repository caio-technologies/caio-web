"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const TOTAL_SLIDES = 16;
const DECK_PASS = "caio2026";

export default function DeckPage() {
  return <Suspense><DeckInner /></Suspense>;
}

function DeckInner() {
  const searchParams = useSearchParams();
  const isPrint = searchParams.get("print") !== null;
  const [current, setCurrent] = useState(0);
  const [authed, setAuthed] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const goTo = useCallback((n: number) => {
    if (n >= 0 && n < TOTAL_SLIDES) setCurrent(n);
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === DECK_PASS) {
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
      setPin("");
    }
  };

  useEffect(() => {
    if (!authed && !isPrint) return;
    const header = document.querySelector(".header") as HTMLElement;
    const footer = document.querySelector(".footer") as HTMLElement;
    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";
    return () => { if (header) header.style.display = ""; if (footer) footer.style.display = ""; };
  }, [authed, isPrint]);

  useEffect(() => {
    if (!authed) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goTo(current + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(current - 1); }
      if (e.key === "Home") { e.preventDefault(); goTo(0); }
      if (e.key === "End") { e.preventDefault(); goTo(TOTAL_SLIDES - 1); }
      if (e.key === "f") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, goTo, authed]);

  const handleClick = (e: React.MouseEvent) => {
    const t = e.target as HTMLElement;
    if (t.closest(".deck-nav")) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 3) goTo(current - 1);
    else if (x > rect.width * 2 / 3) goTo(current + 1);
  };

  // Password gate (skip in print mode)
  if (!authed && !isPrint) {
    return (
      <div className="deck-gate">
        <div className="deck-gate-card">
          <div className="deck-gate-logo"><Image src="/caio-logo.png" alt="Caio" width={102} height={41} /></div>
          <p className="deck-gate-sub">This presentation is password protected.</p>
          <form onSubmit={handleUnlock} className="deck-gate-form">
            <input
              type="password"
              value={pin}
              onChange={(e) => { setPin(e.target.value); setError(false); }}
              placeholder="Enter passcode"
              className={`deck-gate-input ${error ? "deck-gate-input-error" : ""}`}
              autoFocus
            />
            <button type="submit" className="deck-gate-btn">View Deck</button>
          </form>
          {error && <p className="deck-gate-error">Incorrect passcode</p>}
        </div>
      </div>
    );
  }

  return (
    <div className={`deck ${isPrint ? "deck-print" : ""}`} onClick={isPrint ? undefined : handleClick}>
      {!isPrint && <div className="deck-nav">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button key={i} className={`deck-dot ${current === i ? "deck-dot-active" : ""}`} onClick={(e) => { e.stopPropagation(); goTo(i); }} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>}

      {/* ===== 1. TITLE ===== */}
      <div className={`deck-slide ${isPrint || current === 0 ? "deck-slide-active" : ""}`}>
        <div className="deck-s1-content deck-s1-centered">
          <div className="deck-logo"><Image src="/caio-logo.png" alt="Caio" width={109} height={43} /></div>
          <div className="deck-s1-center">
            <span className="deck-label">PRE-SEED DECK</span>
            <h1 className="deck-s1-title">A new era in compliance<br/>for regulated staffing</h1>
            <div className="deck-s1-taglines">
              <p className="deck-s1-sub">AI agents execute every check.<br/>Deterministic rules decide every outcome.</p>
              <p className="deck-s1-closer">Same rules. Every candidate. Every time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 2. THE PROBLEM ===== */}
      <div className={`deck-slide deck-slide-s2b ${isPrint || current === 1 ? "deck-slide-active" : ""}`}>
        <Sidebar num="02" />
        <div className="deck-body deck-s2b">
          <h2 className="deck-s2b-title">Manual compliance is unsafe,<br/>inconsistent, and inefficient</h2>
          <div className="deck-s2b-points">
            <div className="deck-s2b-point"><h3>Unsafe</h3><p>Manual processes lead to gaps and missed checks, with candidates cleared when they shouldn&apos;t be</p></div>
            <div className="deck-s2b-point"><h3>Inconsistent</h3><p>The same candidate produces different outcomes depending on who processes them, without clear explanation</p></div>
            <div className="deck-s2b-point"><h3>Inefficient</h3><p>Expensive human time is spent on tasks that can be automated, driving unnecessary cost and lost productivity</p></div>
          </div>
        </div>
      </div>


      {/* ===== 3. REAL COST ===== */}
      <div className={`deck-slide ${isPrint || current === 2 ? "deck-slide-active" : ""}`}>
        <Sidebar num="03" />
        <div className="deck-body deck-s3">
          <h2 className="deck-s3-title">The Real Cost of Manual Compliance</h2>
          <div className="deck-s3-cards">
            <div className="deck-s3-card">
              <h3>Financial Cost</h3>
              <p>UK regulated recruitment agencies spend <strong>£260m–£300m</strong> annually on compliance</p>
              <p><strong>~75% (£195m–£225m)</strong> is repetitive, rules-based work that can now be automated</p>
            </div>
            <div className="deck-s3-card">
              <h3>Risk Exposure</h3>
              <p>Manual compliance relies on <strong>human judgement</strong> across fragmented systems, creating inconsistent outcomes</p>
              <p>Risk accumulates silently until exposed through <strong>audit, incident, or regulatory failure</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 4. SOLUTION ===== */}
      <div className={`deck-slide ${isPrint || current === 3 ? "deck-slide-active" : ""}`}>
        <Sidebar num="04" />
        <div className="deck-body deck-s4">
          <h2 className="deck-s4-heading">Solution</h2>
          <p className="deck-s4-bold">Caio automates compliance execution with AI agents and deterministic rules.</p>
          <p className="deck-s4-sub">AI agents execute every check. Deterministic rules decide every outcome. Every result is fully reasoned and ready for human sign-off.</p>
          <div className="deck-s4-cards">
            {[{title:"Speed",desc:"Multiple checks run simultaneously. Clearance times drop from days to hours — candidates start working faster."},{title:"Consistency",desc:"The same rules, applied the same way, to every candidate. No subjective judgement, no variance between staff."},{title:"Auditability",desc:"Every decision logged with full reasoning. A complete compliance record available instantly for any audit or inspection."}].map((c,i)=>(
              <div key={i} className="deck-s4-card"><h3>{c.title}</h3><p>{c.desc}</p></div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 5. HOW CAIO WORKS ===== */}
      <div className={`deck-slide ${isPrint || current === 4 ? "deck-slide-active" : ""}`}>
        <Sidebar num="05" />
        <div className="deck-body deck-s5">
          <h2 className="deck-s5-heading">A system that runs compliance end to end</h2>
          <p className="deck-s5-sub">Caio replaces manual compliance with AI agents for execution and deterministic rules for decisions.</p>
          <div className="deck-s5-flow">
            <div className="deck-s5-card">
              <div className="deck-s5-icon"><svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 26V6h10l6 6v14H8z" strokeLinejoin="round"/><path d="M18 6v6h6" strokeLinejoin="round"/><path d="M12 18h8M12 22h5" strokeLinecap="round"/></svg></div>
              <h3>Capture</h3>
              <p>Candidate information and documents are collected and structured through a guided process.</p>
            </div>
            <div className="deck-s5-arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <div className="deck-s5-card">
              <div className="deck-s5-icon"><svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="7" width="20" height="18" rx="2" strokeLinejoin="round"/><path d="M12 15l3 3 5-6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <h3>Check</h3>
              <p>All required checks are executed and validated against the relevant compliance framework.</p>
            </div>
            <div className="deck-s5-arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <div className="deck-s5-card">
              <div className="deck-s5-icon"><svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="16" cy="16" r="10"/><path d="M16 11v5l3.5 3.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <h3>Resolve</h3>
              <p>Missing, incorrect, or incomplete information is identified and handled automatically.</p>
            </div>
            <div className="deck-s5-arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <div className="deck-s5-card">
              <div className="deck-s5-icon"><svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="16" cy="16" r="10"/><path d="M12 16l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <h3>Decide</h3>
              <p>Compliance requirements are evaluated and a clear outcome is&nbsp;produced.</p>
            </div>
            <div className="deck-s5-arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <div className="deck-s5-card deck-s5-card-final">
              <div className="deck-s5-icon"><svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 3L5 8v7c0 6.8 4.5 13.2 11 15 6.5-1.8 11-8.2 11-15V8L16 3z" strokeLinejoin="round"/><path d="M11 16l3.5 3.5L21 13" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <h3>Final Outcome</h3>
              <p>A fully reasoned, auditable outcome. You review and approve.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 6a. PRODUCT — AUDIT RECORD ===== */}
      <div className={`deck-slide ${isPrint || current === 5 ? "deck-slide-active" : ""}`}>
        <Sidebar num="06" />
        <div className="deck-body deck-s6a">
          <h2 className="deck-s6a-title">Every decision, explained and defensible</h2>
          <div className="deck-s6a-table-card">
            <div className="deck-s6-table-header">
              <h3>Compliance Status: <span className="deck-s6-status-cleared-text">Cleared</span></h3>
              <span className="deck-s6-decision-rule">APSCo Compliance+ rules</span>
            </div>
            <table className="deck-s6-table">
              <thead><tr><th>Check</th><th>Caio Reasoning</th><th>Outcome</th></tr></thead>
              <tbody>
                {[
                  {check:"ID Verification",reasoning:"IDVT completed. Name, DOB and facial image validated against passport. Identity confirmed.",status:"Cleared"},
                  {check:"Right to Work",reasoning:"Passport verified. British citizen confirmed. No share code required. Right to work established.",status:"Cleared"},
                  {check:"DBS (Standard)",reasoning:"Certificate parsed. No relevant information disclosed. Identity match confirmed against DBS record.",status:"Cleared"},
                  {check:"DBS (Update Service)",reasoning:"Update Service checked. Record matches candidate ID and DOB. No new information or alerts found.",status:"Cleared"},
                  {check:"TRA / QTS",reasoning:"TRA record checked. QTS status confirmed. No prohibition order, no misconduct findings, no Section 128 direction.",status:"Cleared"},
                  {check:"References",reasoning:"2 references received covering required 24 month period. No concerns identified.",status:"Cleared"},
                ].map((r,i)=>(
                  <tr key={i}>
                    <td className="deck-s6-check-name">{r.check}</td>
                    <td className="deck-s6-reasoning">{r.reasoning}</td>
                    <td><span className="deck-s6-status deck-s6-status-cleared">{r.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ===== 7. WHY OTHERS AREN'T ===== */}
      <div className={`deck-slide ${isPrint || current === 6 ? "deck-slide-active" : ""}`}>
        <Sidebar num="07" />
        <div className="deck-body deck-s7">
          <h2 className="deck-s7-title">Why others aren&rsquo;t doing this</h2>
          <p className="deck-s7-sub">Compliance software has historically been built around human approval, not execution.</p>
          <div className="deck-s7-cards">
            <div className="deck-s7-card deck-s7-card-trad">
              <h3>Traditional Platforms</h3>
              <ul>{["AI could extract data, but could not run compliance workflows end-to-end","Systems helped humans review compliance, but did not execute clearance decisions","Check providers delivered inputs and signals, not auditable outcomes"].map((t,i)=><li key={i}><XIcon /><span>{t}</span></li>)}</ul>
            </div>
            <div className="deck-s7-card deck-s7-card-caio">
              <h3><span className="deck-s7-caio-logo">Caio.</span> is built differently:</h3>
              <ul>{["AI agents execute checks. Deterministic rules decide every outcome — not human judgement","Human oversight at the point of approval — not throughout the process","Every decision is fully documented and audit-ready from day one"].map((t,i)=><li key={i}><TickIcon /><span>{t}</span></li>)}</ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 7. WHY NOW ===== */}
      <div className={`deck-slide ${isPrint || current === 7 ? "deck-slide-active" : ""}`}>
        <Sidebar num="08" />
        <div className="deck-body deck-s8">
          <h2 className="deck-s8-title">Why now?</h2>
          <p className="deck-s8-sub">Regulatory scope, audit requirements and labour costs are all increasing —<br/>while agency margins are compressing.</p>
          <div className="deck-s8-grid">
            {[{title:"Expanding regulation",desc:"CCS frameworks across Education, Healthcare and Social Care are expanding in scope and audit depth"},{title:"Ongoing evidence required",desc:"Frameworks, PSLs and clients now require ongoing audit evidence, not point-in-time checks"},{title:"Rising labour costs",desc:"Employer NI increases and rising wage costs are making compliance teams materially more expensive"},{title:"Margin compression",desc:"Rising compliance costs are compressing agency margins"}].map((c,i)=>(
              <div key={i} className="deck-s8-card"><h3>{c.title}</h3><p>{c.desc}</p></div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 9. COMPLIANCE EXECUTION MARKET ===== */}
      <div className={`deck-slide ${isPrint || current === 8 ? "deck-slide-active" : ""}`}>
        <Sidebar num="09" />
        <div className="deck-body deck-s9x">
          <h2 className="deck-s9x-title">The Compliance Operations Market</h2>
          <div className="deck-s9x-cols">
            <div className="deck-s9x-card">
              <span className="deck-s9x-entry">UK compliance operations market</span>
              <span className="deck-s9x-value">£260m–£300m</span>
            </div>
            <div className="deck-s9x-card">
              <span className="deck-s9x-entry">Global compliance operations market</span>
              <span className="deck-s9x-global-value">£4bn–£6bn</span>
            </div>
          </div>
          <p className="deck-s9x-context">Regulated Recruitment Sectors — including Education · Healthcare · Social Care · Early Years · Further Education</p>
        </div>
      </div>

      {/* ===== 10. INITIAL ENTRY MARKET ===== */}
      <div className={`deck-slide ${isPrint || current === 9 ? "deck-slide-active" : ""}`}>
        <Sidebar num="10" />
        <div className="deck-body deck-s10">
          <h2 className="deck-s10-title">Initial Entry Market – UK Education</h2>
          <div className="deck-s10-headline"><span className="deck-s10-value">£50m – £80m</span><span className="deck-s10-label">Annual compliance operations cost</span></div>
          <div className="deck-s10-cards">
            {[{icon:"doc",title:"High-volume, rule-based workflows",text:"Document-heavy and repetitive — ideal for automated compliance operations"},{icon:"list",title:"Direct founder access and pilot readiness",text:"15 years in education recruitment with immediate agency relationships and live pilot routes"},{icon:"expand",title:"Clear expansion beyond education",text:"Scales directly into healthcare, social care and the wider regulated workforce market"}].map((c,i)=>(
              <div key={i} className="deck-s10-card">
                <span className="deck-s10-icon">
                  {c.icon==="doc"&&<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A2D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>}
                  {c.icon==="list"&&<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A2D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>}
                  {c.icon==="expand"&&<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A2D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>}
                </span>
                <strong className="deck-s10-card-title">{c.title}</strong>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 11. EXPANSION BEYOND EDUCATION ===== */}
      <div className={`deck-slide ${isPrint || current === 10 ? "deck-slide-active" : ""}`}>
        <Sidebar num="11" />
        <div className="deck-body deck-s11">
          <h2 className="deck-s11-title">One Engine. Every Regulated Workforce.</h2>
          <p className="deck-s11-sub">The engine is constant. Only compliance rules and evidence requirements change.</p>
          <div className="deck-s11-tree">
            <div className="deck-s11-engine">
              <span className="deck-s11-engine-title">Caio Execution Engine</span>
              <span className="deck-s11-engine-sub">Agentic execution · Rule-based decisioning · Full auditability</span>
            </div>
            <div className="deck-s11-connector-bar"></div>
            <div className="deck-s11-sectors">
              {[{name:"Education", detail:"DBS, QTS, TRA, Right to Work, Safeguarding"},{name:"Health & Social Care", detail:"DBS, Professional Registration, Fit & Proper Person"},{name:"Other Regulated Sectors", detail:"Same engine, new rulesets — modular by design"}].map((s,i)=>(
                <div key={i} className="deck-s11-sector-card">
                  <span className="deck-s11-sector-name">{s.name}</span>
                  <span className="deck-s11-sector-detail">{s.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== 12. BUSINESS MODEL ===== */}
      <div className={`deck-slide ${isPrint || current === 11 ? "deck-slide-active" : ""}`}>
        <Sidebar num="12" />
        <div className="deck-body deck-s12">
          <h2 className="deck-s12-title">Business Model</h2>
          <p className="deck-s12-sub">Revenue scales with every agency onboarded</p>
          <div className="deck-s12-hero-row">
            <div className="deck-s12-card deck-s12-card-hero">
              <span className="deck-s12-entry">Per Agency</span>
              <span className="deck-s12-price">£25k–£30k</span>
              <span className="deck-s12-label">per year</span>
              <span className="deck-s12-context">Based on 10 consultants per agency</span>
            </div>
          </div>
          <div className="deck-s12-unit-row">
            <div className="deck-s12-unit-card">
              <span className="deck-s12-unit-entry">Initial Clearance</span>
              <span className="deck-s12-unit-value">£25</span>
              <span className="deck-s12-unit-label">per candidate</span>
            </div>
            <div className="deck-s12-unit-card">
              <span className="deck-s12-unit-entry">Ongoing Compliance</span>
              <span className="deck-s12-unit-value">£15–£21</span>
              <span className="deck-s12-unit-label">per candidate annually</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 13. 2026 ROADMAP ===== */}
      <div className={`deck-slide ${isPrint || current === 12 ? "deck-slide-active" : ""}`}>
        <Sidebar num="13" />
        <div className="deck-body deck-s13">
          <h2 className="deck-s13-title">2026 Roadmap</h2>
          <div className="deck-s13-timeline">
            <div className="deck-s13-line" />
            {[
              {quarter:"Q2",now:true,items:["Engineering team in place","Architecture defined","Build underway"]},
              {quarter:"Q3",now:false,items:["Education MVP live","Pilot agencies onboarded","Core workflows operational"]},
              {quarter:"Q4",now:false,items:["Renewal and expiry automation live","Pilot agencies convert to paid","First ARR secured"]},
            ].map((q,i)=>(
              <div key={i} className={`deck-s13-phase ${q.now ? "deck-s13-phase-active" : ""}`}>
                <div className={`deck-s13-dot ${q.now ? "deck-s13-dot-active" : ""}`} />
                <h3>{q.quarter}{q.now && <span className="deck-s13-now">Now</span>}</h3>
                {q.items.map((item,j)=><p key={j}>{item}</p>)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 14. TEAM ===== */}
      <div className={`deck-slide ${isPrint || current === 13 ? "deck-slide-active" : ""}`}>
        <Sidebar num="14" />
        <div className="deck-body deck-s14">
          <h2 className="deck-s14-heading">Team</h2>
          <div className="deck-s14-grid">
            <div className="deck-s14-member">
              <div className="deck-s14-photo"><Image src="/Matt Profile - Edited.png" alt="Matt Brown" width={120} height={120} /></div>
              <h3 className="deck-s14-name">Matt Brown</h3>
              <span className="deck-s14-role">Founder &amp; CEO</span>
              <p className="deck-s14-bio">15 years in UK education recruitment, including 10 years as CEO of Dunbar Education and iCan Teach UK. Led compliance audits across APSCo, REC and CCS frameworks. Built Caio to automate the problem he spent 15 years solving.</p>
            </div>
            <div className="deck-s14-member">
              <div className="deck-s14-photo"><Image src="/Jason Profile - Edited.png" alt="Jason" width={120} height={120} /></div>
              <h3 className="deck-s14-name">Jason de Carvalho</h3>
              <span className="deck-s14-role">Head of Architecture</span>
              <p className="deck-s14-bio">11 years at Ocado Technology, including Head of Architecture for a platform licensed by 11 major international retailers. Former Group CTO at Fluro. Designing and leading Caio&rsquo;s technical architecture.</p>
            </div>
            <div className="deck-s14-member">
              <div className="deck-s14-photo"><Image src="/Kelvin Profile - Edited (1).png" alt="Kelvin" width={120} height={120} /></div>
              <h3 className="deck-s14-name">Kelvin Faith</h3>
              <span className="deck-s14-role">Software Engineer</span>
              <p className="deck-s14-bio">Full-stack engineer with direct experience building identity verification and compliance platforms. Delivering Caio&rsquo;s core product across backend, frontend and cloud infrastructure.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 14. THE ASK ===== */}
      <div className={`deck-slide ${isPrint || current === 14 ? "deck-slide-active" : ""}`}>
        <Sidebar num="15" />
        <div className="deck-body deck-s15">
          <h2 className="deck-s15-heading">The ask</h2>
          <div className="deck-s15-grid">
            <div className="deck-s15-left">
              <span className="deck-s15-amount">£70k</span>
              <span className="deck-s15-round">Friends &amp; Family round</span>
              <span className="deck-s15-committed">£35k already committed</span>
              <span className="deck-s15-committed">Seeking £35k to close</span>
              <span className="deck-s15-purpose">Product build and pilot execution</span>
            </div>
            <div className="deck-s15-divider" />
            <div className="deck-s15-right">
              <div className="deck-s15-block">
                <h3>Initial Outcomes – 90 Days</h3>
                <p>Core execution workflows built and tested</p>
                <p>Pilot agencies onboarded and in testing</p>
                <p>Compliance decisioning validated and audit-ready</p>
                <p>Platform ready for initial commercial rollout</p>
              </div>
              <div className="deck-s15-block">
                <h3>Valuation</h3>
                <p>£1.5m pre-money</p>
                <p>SEIS eligible</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 15. CLOSING / CONTACT ===== */}
      <div className={`deck-slide deck-slide-full ${isPrint || current === 15 ? "deck-slide-active" : ""}`}>
        <div className="deck-s16-content deck-s16-centre">
          <h2 className="deck-s16-title">Let&rsquo;s talk.</h2>
          <div className="deck-s16-contact">
            <span className="deck-s16-contact-name">Matt Brown — Founder &amp; CEO</span>
            <a href="mailto:matt@usecaio.com" className="deck-s16-contact-line">matt@usecaio.com</a>
            <span className="deck-s16-contact-line">07841 685183</span>
          </div>
          <Image src="/caio-logo.png" alt="Caio" width={100} height={40} unoptimized />
        </div>
      </div>

    </div>
  );
}

/* ===== Sub-components ===== */
function Sidebar({ num }: { num: string }) {
  return <div className="deck-sidebar"><span className="deck-sidebar-logo"><Image src="/caio-logo.png" alt="Caio" width={80} height={80} unoptimized /></span><span className="deck-sidebar-num">{num} | PRE-SEED DECK</span></div>;
}
function WaveBottom() {
  return <div className="deck-wave deck-wave-bottom"><svg viewBox="0 0 1200 200" fill="none">{[0,8,16,24,32,40,48].map(o=><path key={o} d={`M0 ${100+o} C200 ${40+o} 400 ${160+o} 600 ${80+o} S900 ${140+o} 1200 ${100+o}`} stroke="#D0E0DA" strokeWidth="1.2" strokeOpacity="0.6" fill="none"/>)}</svg></div>;
}
function XIcon() {
  return <span className="deck-x-icon"><svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="#F0B4B4"/><path d="M6 6l6 6M12 6l-6 6" stroke="#C0392B" strokeWidth="1.5" strokeLinecap="round"/></svg></span>;
}
function TickIcon() {
  return <span className="deck-tick-icon"><svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="#D1FAE5"/><path d="M5.5 9.5l2 2 5-5" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></span>;
}
function CheckCircle() {
  return <span className="deck-s4-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B69B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg></span>;
}
