"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactForm() {
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");

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
    <main>
      <section className="contact-hero" id="contact-hero">
        <div className="container">
          <h1 className="contact-hero-headline fade-in">
            {reason === "demo" ? "Book a demo." : reason === "register" ? "Register your interest." : "Let\u2019s talk."}
          </h1>
          <p className="contact-hero-sub fade-in fade-in-delay-1">
            {reason === "demo"
              ? "See how Caio runs compliance end to end \u2014 from first document to final outcome. We\u2019ll walk you through the platform and answer any questions."
              : reason === "register"
              ? "We\u2019re building compliance infrastructure for your sector. Leave your details and we\u2019ll be in touch when we\u2019re ready."
              : "Whether you\u2019re exploring compliance infrastructure for your agency or want to learn more about how Caio works \u2014 we\u2019d like to hear from you."}
          </p>
          <div className="contact-hero-mobile-cta fade-in fade-in-delay-2">
            <a href="#contact-form-element" className="btn btn-dark" id="contact-hero-demo-cta">
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <section className="contact-content" id="contact-form">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info fade-in">
              <h2 className="contact-info-headline">Get in touch</h2>
              <div className="contact-info-block">
                <h3 className="contact-info-label">Email</h3>
                <a href="mailto:hello@usecaio.com" className="contact-info-value">hello@usecaio.com</a>
              </div>
              <div className="contact-info-block">
                <h3 className="contact-info-label">For partnerships</h3>
                <a href="mailto:partnerships@usecaio.com" className="contact-info-value">partnerships@usecaio.com</a>
              </div>
              <div className="contact-info-block">
                <h3 className="contact-info-label">Location</h3>
                <p className="contact-info-value">United Kingdom</p>
              </div>
              <div className="contact-info-block">
                <h3 className="contact-info-label">Sectors we serve</h3>
                <div className="contact-sectors">
                  <span>Education</span>
                  <span>Healthcare</span>
                  <span>Social Care</span>
                </div>
              </div>
            </div>
            <div className="contact-form-card fade-in fade-in-delay-1">
              <h2 className="contact-form-title">
                {reason === "demo" ? "Request a demo" : reason === "register" ? "Register your interest" : "Send us a message"}
              </h2>
              <form className="contact-form" id="contact-form-element">
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input type="text" id="contact-name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input type="email" id="contact-email" name="email" placeholder="you@company.com" required />
                  </div>
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-company">Company</label>
                  <input type="text" id="contact-company" name="company" placeholder="Your company name" />
                </div>
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="contact-sector">Sector</label>
                    <select id="contact-sector" name="sector">
                      <option value="">Select a sector</option>
                      <option value="education">Education</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="social-care">Social Care</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-reason">Enquiry type</label>
                    <select id="contact-reason" name="reason" defaultValue={reason === "demo" ? "demo" : reason === "register" ? "register" : ""}>
                      <option value="">Select a reason</option>
                      <option value="demo">Book a demo</option>
                      <option value="register">Register interest</option>
                      <option value="general">General enquiry</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" rows={5} placeholder={reason === "demo" ? "Tell us about your agency and what you'd like to see in the demo..." : reason === "register" ? "Tell us about your agency and which sector you operate in..." : "Tell us what you're looking for..."} required></textarea>
                </div>
                <button type="submit" className="btn btn-dark contact-form-submit" id="contact-submit">
                  {reason === "demo" ? "Request Demo" : reason === "register" ? "Register Interest" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactForm />
    </Suspense>
  );
}
