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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/education", label: "Education" },
    { href: "/healthcare", label: "Healthcare" },
    { href: "/social-care", label: "Social Care" },
  ];

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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
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
