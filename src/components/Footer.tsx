import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Caio.</div>
            <p className="footer-tagline">Faster. Safer. Smarter.</p>
          </div>

          <nav className="footer-nav">
            <div className="footer-nav-group">
              <h4>Sectors</h4>
              <Link href="/education">Education</Link>
              <Link href="/healthcare">Healthcare</Link>
              <Link href="/social-care">Social Care</Link>
            </div>
            <div className="footer-nav-group">
              <h4>Company</h4>
              <Link href="#book-demo">Book a Demo</Link>
              <a href="mailto:support@usecaio.com">Contact</a>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Caio. All rights reserved.
          </p>
          <p className="footer-email">
            <a href="mailto:support@usecaio.com">support@usecaio.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
