"use client";

import { useEffect } from "react";

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <main>
      <div className="legal-header fade-in">
        <div className="container">
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-effective">Effective date: 1 April 2026</p>
        </div>
      </div>
      <section className="legal-page">
        <div className="container">
          <div className="legal-body fade-in fade-in-delay-1">

            <h2>1. Who we are</h2>
            <p>Caio (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) provides compliance infrastructure for recruitment agencies operating in education, healthcare, and social care. This privacy policy explains how we collect, use, store, and protect personal data when you visit our website, use our platform, or otherwise interact with us.</p>
            <p>Our registered address is in the United Kingdom. For data protection purposes, Caio is the data controller.</p>

            <h2>2. What data we collect</h2>
            <p>We collect different types of personal data depending on how you interact with us:</p>

            <h3>Website visitors</h3>
            <ul>
              <li>Technical data: IP address, browser type, device information, pages visited, and referring URL</li>
              <li>Cookie data: preferences and analytics cookies (see Section 8)</li>
            </ul>

            <h3>Contact form submissions</h3>
            <ul>
              <li>Name, email address, company name, sector, and message content</li>
              <li>Enquiry type (demo request, register interest, general enquiry, partnership)</li>
            </ul>

            <h3>Platform users (agency staff)</h3>
            <ul>
              <li>Account credentials and contact details</li>
              <li>Usage data and activity logs within the platform</li>
            </ul>

            <h3>Candidate data (processed on behalf of agencies)</h3>
            <ul>
              <li>Identity documents, DBS certificates, Right to Work evidence, references, training certificates, and health clearances</li>
              <li>Compliance check results and status records</li>
            </ul>
            <p>When processing candidate data, we act as a data processor on behalf of the recruitment agency (the data controller). Our processing is governed by a Data Processing Agreement with each agency client.</p>

            <h2>3. How we use your data</h2>
            <p>We use personal data for the following purposes:</p>
            <ul>
              <li><strong>To provide our services:</strong> executing compliance checks, managing candidate records, and generating audit trails</li>
              <li><strong>To respond to enquiries:</strong> processing contact form submissions and demo requests</li>
              <li><strong>To improve our website:</strong> analysing visitor behaviour to improve content and user experience</li>
              <li><strong>To comply with legal obligations:</strong> maintaining records as required by applicable regulations</li>
              <li><strong>To communicate with you:</strong> sending service-related updates and, where you have opted in, marketing communications</li>
            </ul>

            <h2>4. Legal basis for processing</h2>
            <p>We process personal data under the following legal bases as defined by UK GDPR:</p>
            <ul>
              <li><strong>Contract:</strong> where processing is necessary to perform our contract with you or your organisation</li>
              <li><strong>Legitimate interests:</strong> where processing is necessary for our legitimate business interests, such as improving our services and ensuring platform security, provided these do not override your rights</li>
              <li><strong>Consent:</strong> where you have given specific consent, such as for marketing communications</li>
              <li><strong>Legal obligation:</strong> where processing is required to comply with applicable law</li>
            </ul>

            <h2>5. Data sharing</h2>
            <p>We do not sell personal data. We share data only in the following circumstances:</p>
            <ul>
              <li><strong>Service providers:</strong> we use trusted third-party providers for hosting, email delivery, and analytics. These providers process data on our behalf under contractual obligations</li>
              <li><strong>Regulatory bodies:</strong> where required by law, we may disclose data to regulatory authorities</li>
              <li><strong>Agency clients:</strong> compliance outcomes and candidate data are shared with the agency that submitted the candidate, in accordance with our Data Processing Agreement</li>
            </ul>
            <p>We do not transfer personal data outside the United Kingdom unless adequate safeguards are in place, such as Standard Contractual Clauses approved by the ICO.</p>

            <h2>6. Data retention</h2>
            <p>We retain personal data only for as long as necessary for the purpose it was collected:</p>
            <ul>
              <li><strong>Contact form submissions:</strong> retained for up to 24 months unless you request earlier deletion</li>
              <li><strong>Platform user accounts:</strong> retained for the duration of the client relationship and for 12 months thereafter</li>
              <li><strong>Candidate compliance data:</strong> retained in accordance with the Data Processing Agreement with the relevant agency. We follow sector-specific retention guidelines, including not retaining DBS certificate copies for longer than 6 months</li>
              <li><strong>Website analytics data:</strong> retained for up to 26 months</li>
            </ul>

            <h2>7. Your rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul>
              <li><strong>Access:</strong> request a copy of the personal data we hold about you</li>
              <li><strong>Rectification:</strong> request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> request deletion of your data where there is no compelling reason for continued processing</li>
              <li><strong>Restriction:</strong> request restriction of processing in certain circumstances</li>
              <li><strong>Portability:</strong> request your data in a structured, commonly used format</li>
              <li><strong>Objection:</strong> object to processing based on legitimate interests or for direct marketing purposes</li>
              <li><strong>Withdraw consent:</strong> where processing is based on consent, you may withdraw it at any time</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:privacy@usecaio.com">privacy@usecaio.com</a>. We will respond within 30 days.</p>

            <h2>8. Cookies</h2>
            <p>Our website uses cookies to improve functionality and analyse usage. We use the following types of cookies:</p>
            <ul>
              <li><strong>Strictly necessary cookies:</strong> required for the website to function. These cannot be disabled</li>
              <li><strong>Analytics cookies:</strong> help us understand how visitors use the website. We use privacy-respecting analytics that do not track individuals across sites</li>
              <li><strong>Preference cookies:</strong> remember your settings and preferences</li>
            </ul>
            <p>You can manage cookie preferences through your browser settings.</p>

            <h2>9. Security</h2>
            <p>We implement appropriate technical and organisational measures to protect personal data against unauthorised access, alteration, disclosure, or destruction. These include:</p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Role-based access controls</li>
              <li>Regular security assessments</li>
              <li>Incident response procedures</li>
            </ul>

            <h2>10. Changes to this policy</h2>
            <p>We may update this privacy policy from time to time. Significant changes will be communicated via our website. The effective date at the top of this page indicates when the policy was last updated.</p>

            <h2>11. Contact us</h2>
            <p>If you have questions about this privacy policy or how we handle your data, contact us at:</p>
            <ul>
              <li>Email: <a href="mailto:privacy@usecaio.com">privacy@usecaio.com</a></li>
              <li>General enquiries: <a href="mailto:hello@usecaio.com">hello@usecaio.com</a></li>
            </ul>
            <p>If you are not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>

          </div>
        </div>
      </section>
    </main>
  );
}
