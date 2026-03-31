import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Caio",
  description:
    "Get in touch with Caio. Whether you're an education, healthcare, or social care recruiter — we'd like to hear from you.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="contact-hero" id="contact-hero">
        <div className="container">
          <span className="edu-hero-label fade-in">Contact</span>
          <h1 className="contact-hero-headline fade-in">
            Let&apos;s talk.
          </h1>
          <p className="contact-hero-sub fade-in fade-in-delay-1">
            Whether you&apos;re exploring compliance infrastructure for your agency or want to learn more about how Caio works — we&apos;d like to hear from you.
          </p>
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
              <h2 className="contact-form-title">Send us a message</h2>
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
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" rows={5} placeholder="Tell us what you're looking for..." required></textarea>
                </div>
                <button type="submit" className="btn btn-dark contact-form-submit" id="contact-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
