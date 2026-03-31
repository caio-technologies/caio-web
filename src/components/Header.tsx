"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const sectorLinks = [
    { href: "/education", label: "Education", live: true },
    { href: "/healthcare", label: "Healthcare", live: false },
    { href: "/social-care", label: "Social Care", live: false },
  ];

  const isSectorPage = sectorLinks.some((s) => pathname === s.href);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} id="header">
      <div className="container">
        <Link href="/" className="logo" id="logo">
          <Image
            src="/caio-logo.png"
            alt="Caio"
            width={60}
            height={24}
            priority
            style={{ height: "auto" }}
          />
        </Link>

        <nav className={`nav ${mobileMenuOpen ? "nav-open" : ""}`} id="main-nav">
          <Link
            href="/"
            className={`nav-link ${pathname === "/" ? "nav-link-active" : ""}`}
          >
            Home
          </Link>
          <div className={`nav-dropdown ${isSectorPage ? "nav-link-active" : ""}`}>
            <span className="nav-link nav-dropdown-trigger">
              Sectors
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="nav-chevron">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="nav-dropdown-menu">
              {sectorLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-dropdown-item ${pathname === link.href ? "nav-dropdown-item-active" : ""}`}
                >
                  {link.label}
                  {!link.live && <span className="nav-dropdown-badge">Soon</span>}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/insights"
            className={`nav-link ${pathname === "/insights" ? "nav-link-active" : ""}`}
          >
            Insights
          </Link>
          <Link
            href="/contact"
            className={`nav-link ${pathname === "/contact" ? "nav-link-active" : ""}`}
          >
            Contact
          </Link>
        </nav>

        <div className="header-actions">
          <Link href="#join-waitlist" className="btn btn-primary" id="header-cta">
            Join the Waitlist
          </Link>
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
