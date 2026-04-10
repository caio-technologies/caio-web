"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const TOTAL_SLIDES = 17;
const DECK_PASS = "caio2026";

export default function DeckPage() {
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
    if (!authed) return;
    const header = document.querySelector(".header") as HTMLElement;
    const footer = document.querySelector(".footer") as HTMLElement;
    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";
    return () => { if (header) header.style.display = ""; if (footer) footer.style.display = ""; };
  }, [authed]);

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

  // Password gate
  if (!authed) {
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
    <div className="deck" onClick={handleClick}>
      <div className="deck-nav">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button key={i} className={`deck-dot ${current === i ? "deck-dot-active" : ""}`} onClick={(e) => { e.stopPropagation(); goTo(i); }} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      {/* ===== 1. TITLE ===== */}
      <div className={`deck-slide ${current === 0 ? "deck-slide-active" : ""}`}>
        <div className="deck-wave deck-wave-full">
          <svg viewBox="0 0 1400 500" fill="none" preserveAspectRatio="none">
            {Array.from({length: 22}).map((_, i) => {
              const t = i / 21;
              const amp = 120 + Math.sin(t * Math.PI) * 60;
              const phase = t * Math.PI * 2;
              const y1 = 250 + Math.sin(phase) * amp;
              const y2 = 250 + Math.sin(phase + 1.8) * amp * 0.7;
              const y3 = 250 + Math.cos(phase) * amp * 0.9;
              const y4 = 250 + Math.sin(phase + 3.2) * amp * 0.6;
              const y5 = 250 + Math.cos(phase + 1.2) * amp * 0.8;
              const y6 = 250 + Math.sin(phase + 4.5) * amp * 0.5;
              return <path key={i} d={`M-30 ${y1} C200 ${y2} 350 ${y3} 550 ${y4} C750 ${y5} 950 ${y3} 1100 ${y6} C1250 ${y2} 1350 ${y4} 1430 ${y1}`} stroke="#5EC4D6" strokeWidth="1.1" strokeOpacity={0.18 + t * 0.18} fill="none"/>
            })}
          </svg>
        </div>
        <div className="deck-s1-content">
          <div className="deck-logo"><Image src="/caio-logo.png" alt="Caio" width={136} height={54} /></div>
          <div className="deck-s1-bottom">
            <span className="deck-label">PRE-SEED DECK</span>
            <h1 className="deck-s1-title">The Compliance Infrastructure<br/>for Regulated Recruitment</h1>
          </div>
        </div>
      </div>

      {/* ===== 2. ERA IS OVER ===== */}
      <div className={`deck-slide deck-slide-s2b ${current === 1 ? "deck-slide-active" : ""}`}>
        <Sidebar num="02" />
        {/* Custom flowing swirls — bottom-left to center-right */}
        <div className="deck-wave deck-wave-s2b">
          <svg viewBox="0 0 1400 500" fill="none" preserveAspectRatio="xMidYMax meet">
            {Array.from({length: 18}).map((_, i) => {
              const t = i / 17;
              const baseY = 320 - t * 180;
              const amp = 30 + t * 25;
              return <path key={i} d={`M-20 ${baseY + Math.sin(t * 4) * amp} C180 ${baseY - amp * 0.6 + Math.cos(t * 3) * 20} 400 ${baseY + amp * 0.8 + Math.sin(t * 5) * 15} 650 ${baseY - amp * 0.3 + Math.cos(t * 2.5) * 25} C850 ${baseY + amp * 0.5 + Math.sin(t * 3.5) * 18} 1050 ${baseY - amp * 0.4 + Math.cos(t * 4.5) * 12} 1420 ${baseY + Math.sin(t * 2) * amp * 0.7}`} stroke="#5EC4D6" strokeWidth="1.1" strokeOpacity={0.12 + t * 0.14} fill="none"/>;
            })}
          </svg>
        </div>
        <div className="deck-body deck-s2b">
          <h2 className="deck-s2b-title">The era of manual<br/>compliance is over</h2>
          <div className="deck-s2b-points">
            <div className="deck-s2b-point"><XIcon /><span>No longer financially viable</span></div>
            <div className="deck-s2b-point"><XIcon /><span>No longer regulatorily sufficient</span></div>
            <div className="deck-s2b-point"><XIcon /><span>No longer technologically required</span></div>
          </div>
        </div>
      </div>


      {/* ===== 3. REAL COST ===== */}
      <div className={`deck-slide ${current === 2 ? "deck-slide-active" : ""}`}>
        <Sidebar num="03" />
        <div className="deck-body deck-s3">
          <h2 className="deck-s3-title">The Real Cost of Manual Compliance</h2>
          <p className="deck-s3-sub">The cost of compliance failure extends far beyond operational inefficiency — <u>it creates material exposure</u>.</p>
          <div className="deck-s3-cards">
            <div className="deck-s3-card">
              <h3>Financial Cost</h3>
              <p>Across the UK, recruitment agencies operating in regulated markets spend an estimated £260m–£300m per year on compliance labour and manual processing.</p>
              <p>Of this, approximately 75% (£195m–£225m) relates to repetitive, rules-based activity that can now be executed end-to-end by autonomous AI&nbsp;agents.</p>
            </div>
            <div className="deck-s3-card">
              <h3>Risk Exposure</h3>
              <p>Manual compliance relies on human judgement across fragmented systems, making outcomes inherently inconsistent.</p>
              <p>As volume increases, risk accumulates silently, until it is exposed through audit, incident, or regulatory scrutiny.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 4. SOLUTION ===== */}
      <div className={`deck-slide ${current === 3 ? "deck-slide-active" : ""}`}>
        <Sidebar num="04" />
        <div className="deck-body deck-s4">
          <h2 className="deck-s4-heading">Solution</h2>
          <p className="deck-s4-bold">Caio replaces manual compliance with autonomous, agent-driven execution.</p>
          <p className="deck-s4-sub">Through Caio, compliance execution shifts from human judgement to deterministic systems, with agents executing checks, decisions, and escalations end-to-end to materially reduce compliance overhead.</p>
          <div className="deck-s4-cards">
            {[{title:"Speed",desc:"Parallel, agent-driven execution clears candidates in hours, not days"},{title:"Intelligence",desc:"Rule-based interpretation removes human variability and improves accuracy"},{title:"Alignment",desc:"Full alignment to sector-specific frameworks & internal policies"}].map((c,i)=>(
              <div key={i} className="deck-s4-card"><CheckCircle /><h3>{c.title}</h3><p>{c.desc}</p></div>
            ))}
          </div>
          <p className="deck-s4-bottom">The result is candidates cleared faster, at lower cost, and with a level of precision manual compliance teams cannot match.</p>
        </div>
      </div>

      {/* ===== 5. HOW CAIO WORKS ===== */}
      <div className={`deck-slide ${current === 4 ? "deck-slide-active" : ""}`}>
        <Sidebar num="05" />
        <div className="deck-body deck-s5">
          <h2 className="deck-s5-heading">How Caio Works</h2>
          <h3 className="deck-s5-subheading">The Caio Process:</h3>
          <div className="deck-s5-timeline">
            <div className="deck-s5-line" />
            {[
              {stage:"STAGE 1",title:"Upload",desc:"Candidates submit documents and information",pos:"top"},
              {stage:"STAGE 2",title:"Extract",desc:"Agents read, interpret and structure data",pos:"bottom"},
              {stage:"STAGE 3",title:"Execute",desc:"Background checks are completed by AI agents and validated against defined rules",pos:"top"},
              {stage:"STAGE 4",title:"Chase",desc:"Automated follow-up with candidates and third parties",pos:"bottom"},
              {stage:"STAGE 5",title:"Decide",desc:"Deterministic rule logic aggregates outcomes and sets clearance status",pos:"top"},
              {stage:"STAGE 6",title:"Update",desc:"ATS, CRM and audit trails are updated automatically",pos:"bottom"},
            ].map((s,i)=>(
              <div key={i} className={`deck-s5-step deck-s5-step-${s.pos}`}>
                <div className="deck-s5-dot" />
                <div className="deck-s5-step-content">
                  {s.pos==="top"?<><h4>{s.title}</h4><p>{s.desc}</p><span className="deck-s5-stage">{s.stage}</span></>:<><span className="deck-s5-stage">{s.stage}</span><h4>{s.title}</h4><p>{s.desc}</p></>}
                </div>
              </div>
            ))}
          </div>
          <p className="deck-s5-bottom">Candidates reach a Final-Check-Ready state with all required checks completed, validated and fully auditable.</p>
        </div>
      </div>

      {/* ===== 6. CANDIDATE OVERVIEW ===== */}
      <div className={`deck-slide ${current === 5 ? "deck-slide-active" : ""}`}>
        <Sidebar num="06" />
        <div className="deck-body deck-s6">
          <div className="deck-s6-left">
            <div className="deck-s6-table-card">
              <div className="deck-s6-table-header"><h3>Compliance Checks</h3><span className="deck-s6-filter">Filter ▾</span></div>
              <table className="deck-s6-table">
                <thead><tr><th>Check</th><th>AI Reasoning*</th><th>Rule Applied</th><th>Status</th><th>Last Updated</th></tr></thead>
                <tbody>
                  {[
                    {check:"ID Verification",reasoning:"ID V1 data parsed. Name & DOB match passport and CV. Identity confirmed.",rule:"APSCO Compliance+",status:"Cleared",date:"01 November 13:02"},
                    {check:"Right to Work",reasoning:"Passport validated. British citizen. No share code required. Identity cross-checked.",rule:"APSCO Compliance+",status:"Cleared",date:"02 November 10:30"},
                    {check:"DBS (Standard)",reasoning:"Certificate parsed. Stage 4 verified. No relevant information found. Identity match confirmed.",rule:"APSCO Compliance+",status:"Cleared",date:"03 November 14:15"},
                    {check:"DBS (Update Service)",reasoning:"Share code validated. Update Service record matches candidate ID & DOB. No alerts found.",rule:"APSCO Compliance+",status:"Cleared",date:"03 November 16:40"},
                    {check:"TRA / QTS",reasoning:"TRA record validated. QTS confirmed. No prohibitions or restrictions.",rule:"APSCO Compliance+",status:"Cleared",date:"01 November 14:22"},
                    {check:"References",reasoning:"Reference 1 valid. Reference 2 contains signature mismatch and missing employer details. Candidate notified and asked to upload new reference.",rule:"APSCO Compliance+",status:"Pending",date:"03 November 09:31"},
                  ].map((r,i)=>(
                    <tr key={i}>
                      <td className="deck-s6-check-name">{r.check}</td>
                      <td className="deck-s6-reasoning">{r.reasoning}</td>
                      <td className="deck-s6-rule">{r.rule}</td>
                      <td><span className={`deck-s6-status ${r.status==="Cleared"?"deck-s6-status-cleared":"deck-s6-status-pending"}`}>{r.status}</span></td>
                      <td className="deck-s6-date">{r.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="deck-s6-right">
            <h2 className="deck-s6-title">Candidate<br/>Overview</h2>
            <div className="deck-s6-labels">
              {["Framework rules applied","AI reasoning documented","Date and timestamp recorded"].map((l,i)=>(
                <div key={i} className="deck-s6-label">{l}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== 7. WHY OTHERS AREN'T ===== */}
      <div className={`deck-slide ${current === 6 ? "deck-slide-active" : ""}`}>
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
              <ul>{["Autonomous AI agents execute compliance workflows end-to-end","Decisions are governed by explicit, deterministic and auditable rule logic","Humans provide final oversight and sign-off, not manual processing"].map((t,i)=><li key={i}><TickIcon /><span>{t}</span></li>)}</ul>
            </div>
          </div>
          <p className="deck-s7-bottom">Traditional platforms are structurally dependent on humans for execution. Agentic execution has only recently become technically viable.</p>
        </div>
      </div>

      {/* ===== 8. WHY NOW ===== */}
      <div className={`deck-slide ${current === 7 ? "deck-slide-active" : ""}`}>
        <Sidebar num="08" />
        <div className="deck-body deck-s8">
          <h2 className="deck-s8-title">Why now?</h2>
          <p className="deck-s8-sub">Regulatory scope, audit requirements, and labour costs are all increasing —<br/>while compliance complexity is rising faster than agency margins can sustain.</p>
          <div className="deck-s8-grid">
            {["CCS frameworks across Education, Healthcare and Social Care are expanding in scope and audit depth","Frameworks, PSLs and clients now mandate explicit audit criteria and ongoing evidence","Compliance cost and complexity are rising faster than agency margins","UK labour costs continue to increase, intensifying pressure on agency economics"].map((t,i)=>(
              <div key={i} className="deck-s8-card"><span className="deck-s8-bullet" /><p>{t}</p></div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 9. GLOBAL TAM ===== */}
      <div className={`deck-slide ${current === 8 ? "deck-slide-active" : ""}`}>
        <Sidebar num="10" />
        <div className="deck-body deck-s9">
          <h2 className="deck-s9-title">Global TAM — Compliance Operations</h2>
          <div className="deck-s9-headline"><span className="deck-s9-value">£1.5bn – £1.8bn</span><span className="deck-s9-label">Regulated workforce compliance operations spend</span></div>
          <div className="deck-s9-chart">
            {[{country:"United States",range:"£800m – £1bn",width:92},{country:"Europe (FR, DE, ES, IT)",range:"£320m – £385m (combined)",width:68},{country:"United Kingdom",range:"£260m – £310m",width:42},{country:"Australia",range:"£60m – £75m",width:18},{country:"Canada",range:"£40m – £50m",width:14}].map((d,i)=>(
              <div key={i} className="deck-s9-bar-row">
                <span className="deck-s9-bar-label">{d.country}</span>
                <div className="deck-s9-bar-track"><div className="deck-s9-bar" style={{width:`${d.width}%`}} /></div>
                <span className="deck-s9-bar-value">{d.range}</span>
              </div>
            ))}
          </div>
          <p className="deck-s9-footnote">*Represents the compliance execution layer around third-party checks, not the checks themselves.</p>
        </div>
      </div>

      {/* ===== 10. INITIAL ENTRY MARKET ===== */}
      <div className={`deck-slide ${current === 9 ? "deck-slide-active" : ""}`}>
        <Sidebar num="11" />
        <div className="deck-body deck-s10">
          <h2 className="deck-s10-title">Initial Entry Market – UK Education</h2>
          <div className="deck-s10-headline"><span className="deck-s10-value">£40m – £60m</span><span className="deck-s10-label">Annual compliance execution spend</span></div>
          <div className="deck-s10-cards">
            {[{icon:"doc",text:"Workflows are document-heavy, repetitive and rule-based, making them well suited to agent-driven execution at scale."},{icon:"list",text:"Early market access provides direct and accelerated pilot routes, delivering the fastest path to proof, product depth and early ARR."},{icon:"link",text:"Education provides immediate traction and a clear launchpad to scale into healthcare, social care and other regulated sectors."}].map((c,i)=>(
              <div key={i} className="deck-s10-card">
                <span className="deck-s10-icon">
                  {c.icon==="doc"&&<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A2D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>}
                  {c.icon==="list"&&<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A2D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>}
                  {c.icon==="link"&&<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A2D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
                </span>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 11. EXPANSION BEYOND EDUCATION ===== */}
      <div className={`deck-slide ${current === 10 ? "deck-slide-active" : ""}`}>
        <Sidebar num="03" />
        <div className="deck-body deck-s11">
          <h2 className="deck-s11-title">Expansion Beyond Education</h2>
          <p className="deck-s11-sub">The Caio execution engine remains constant across sectors.<br/>Only sector-specific compliance rules and evidence logic change.</p>
          <div className="deck-s11-tree">
            <div className="deck-s11-engine">
              <span className="deck-s11-engine-title">Caio Execution Engine</span>
              <span className="deck-s11-engine-sub">Agentic execution, auditability, orchestration</span>
            </div>
            <div className="deck-s11-connector">
              <svg viewBox="0 0 600 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M300 0 L300 30" stroke="#1A2D4D" strokeWidth="2"/>
                <path d="M100 30 L500 30" stroke="#1A2D4D" strokeWidth="2"/>
                <path d="M100 30 L100 55" stroke="#1A2D4D" strokeWidth="2"/>
                <path d="M300 30 L300 55" stroke="#1A2D4D" strokeWidth="2"/>
                <path d="M500 30 L500 55" stroke="#1A2D4D" strokeWidth="2"/>
              </svg>
            </div>
            <div className="deck-s11-sectors">
              <span>Education</span>
              <span>Health &amp; Social Care</span>
              <span>Other regulated sectors</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 12. BUSINESS MODEL ===== */}
      <div className={`deck-slide ${current === 11 ? "deck-slide-active" : ""}`}>
        <Sidebar num="14" />
        <div className="deck-body deck-s12">
          <h2 className="deck-s12-title">Business Model</h2>
          <p className="deck-s12-sub">A single platform with full functionality, priced by candidate throughput rather than feature access.</p>
          <div className="deck-s12-chart">
            {[{label:"Tier 1",h:20,color:"#D0E0DA"},{label:"Tier 2",h:35,color:"#94d4c4"},{label:"Tier 3",h:50,color:"#00B69B"},{label:"Tier 4",h:65,color:"#009B84"},{label:"Tier 5",h:80,color:"#1A2D4D"}].map((t,i)=>(
              <div key={i} className="deck-s12-bar-col">
                <div className="deck-s12-bar" style={{height:`${t.h}%`,background:t.color}}><span>{t.label}</span></div>
              </div>
            ))}
            <div className="deck-s12-axis">
              <svg width="100%" height="20"><line x1="0" y1="10" x2="100%" y2="10" stroke="#0A1628" strokeWidth="1.5"/><polygon points="0,5 0,15 8,10" fill="#0A1628"/><polygon points="100%,10" fill="#0A1628"/></svg>
              <span>Monthly candidates processed</span>
              <svg width="20" height="20"><polygon points="12,5 12,15 20,10" fill="#0A1628"/></svg>
            </div>
          </div>
          <p className="deck-s12-bottom">Single platform. Same features. Pricing scales with candidate throughput.</p>
        </div>
      </div>

      {/* ===== 13. 2026 ROADMAP ===== */}
      <div className={`deck-slide ${current === 12 ? "deck-slide-active" : ""}`}>
        <Sidebar num="15" />
        <div className="deck-body deck-s13">
          <h2 className="deck-s13-title">2026 Roadmap</h2>
          <div className="deck-s13-timeline">
            <div className="deck-s13-line" />
            {[
              {quarter:"Q1–Q2",items:["Education MVP live","Pilot agencies onboarded","Core Final-Check-Ready workflows operational"]},
              {quarter:"Q3",items:["Renewal and expiry automation added","Pilot agencies convert to paid usage","First ARR secured"]},
              {quarter:"Q4",items:["Additional regulated sector rule sets introduced","Multi-sector compliance engine live"]},
            ].map((q,i)=>(
              <div key={i} className="deck-s13-phase">
                <div className="deck-s13-dot" />
                <h3>{q.quarter}</h3>
                {q.items.map((item,j)=><p key={j}>{item}</p>)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 14. TEAM ===== */}
      <div className={`deck-slide ${current === 13 ? "deck-slide-active" : ""}`}>
        <Sidebar num="17" />
        <div className="deck-body deck-s14">
          <h2 className="deck-s14-heading">Team</h2>
          <div className="deck-s14-content">
            <div className="deck-s14-left">
              <div className="deck-s14-avatar">MB</div>
              <h3 className="deck-s14-name">Matt Brown –<br/>Founder &amp; CEO</h3>
            </div>
            <div className="deck-s14-right">
              <p>15 years in UK education recruitment, including 10 years as CEO of Dunbar Education and iCan Teach UK.</p>
              <p>Built and led recruitment and compliance teams, overseeing thousands of APSCo+, CCS and KCSIE checks.</p>
              <p>Founder–market fit: direct experience of compliance bottlenecks, inefficiency and operational risk, informing Caio&rsquo;s design.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 14. THE ASK ===== */}
      <div className={`deck-slide ${current === 14 ? "deck-slide-active" : ""}`}>
        <Sidebar num="03" />
        <div className="deck-body deck-s15">
          <h2 className="deck-s15-heading">The ask</h2>
          <div className="deck-s15-grid">
            <div className="deck-s15-left">
              <span className="deck-s15-amount">£100k</span>
              <span className="deck-s15-round">Friends &amp; Family round</span>
              <span className="deck-s15-purpose">Product build and pilot execution</span>
            </div>
            <div className="deck-s15-divider" />
            <div className="deck-s15-right">
              <div className="deck-s15-block">
                <h3>Initial Outcomes – 90 Days</h3>
                <p>MVP live with pilot agencies</p>
                <p>Core execution workflows tested in live environments</p>
                <p>Compliance outcomes validated and audit-ready</p>
                <p>Platform ready for commercial rollout</p>
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

      {/* ===== 15. A NEW ERA ===== */}
      <div className={`deck-slide ${current === 15 ? "deck-slide-active" : ""}`}>
        <Sidebar num="15" /><WaveBottom />
        <div className="deck-body deck-s2">
          <h2 className="deck-s2-title">A new era for<br/>regulated sector compliance</h2>
          <div className="deck-s2-points">
            {["Education recruitment — safeguarding, DBS, right-to-work","Healthcare staffing — clinical credentials, revalidation, fitness to practise","Social care — workforce registration, training verification, care standards"].map((t,i)=>(
              <div key={i} className="deck-s2-point"><TickIcon /><span>{t}</span></div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 16. THANK YOU ===== */}
      <div className={`deck-slide ${current === 16 ? "deck-slide-active" : ""}`}>
        <div className="deck-wave deck-wave-top-right">
          <svg viewBox="0 0 600 200" fill="none">{[0,7,14,21,28,35,42,49].map(o=><path key={o} d={`M0 ${80+o} C120 ${30+o} 240 ${130+o} 400 ${60+o} S550 ${100+o} 600 ${80+o}`} stroke="#00B69B" strokeWidth="1.2" strokeOpacity="0.2" fill="none"/>)}</svg>
        </div>
        <div className="deck-s16-content">
          <h2 className="deck-s16-title">Thank you</h2>
          <div className="deck-s16-logo"><Image src="/caio-logo.png" alt="Caio" width={119} height={48} /></div>
        </div>
        <div className="deck-s16-watermark">
          <svg viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.06">
            <text x="0" y="170" fontFamily="Nunito, sans-serif" fontSize="200" fontWeight="900" fill="#1A2D4D">caio</text>
          </svg>
        </div>
      </div>

    </div>
  );
}

/* ===== Sub-components ===== */
function Sidebar({ num }: { num: string }) {
  return <div className="deck-sidebar"><span className="deck-sidebar-logo"><Image src="/caio-logo.png" alt="Caio" width={20} height={20} /></span><span className="deck-sidebar-num">{num} | PRE-SEED DECK</span></div>;
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
