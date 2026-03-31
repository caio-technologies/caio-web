import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/caio-logo.png" alt="Caio" width={80} height={32} className="footer-logo-img" style={{ height: "auto" }} />
            <div className="footer-meta">
              <p className="footer-tagline">Faster. Safer. Smarter.</p>
              <a href="mailto:support@usecaio.com" className="footer-email">support@usecaio.com</a>
            </div>
          </div>
          <Link href="#book-demo" className="footer-cta">
            Join the Waitlist <span className="footer-cta-arrow">→</span>
          </Link>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© {new Date().getFullYear()} Caio. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
