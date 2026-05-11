"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const CHEVRON = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.55 }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const LEFT_LINKS = [
  { label: "Men",        href: "/men",         chevron: true  },
  { label: "Women",      href: "/women",        chevron: true  },
  { label: "Accessories",href: "/accessories",  chevron: false },
];
const RIGHT_LINKS = [
  { label: "Collections",href: "/collections",  chevron: false },
  { label: "About",      href: "/about",        chevron: true  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const toggleMenu = () => setMenuOpen(p => !p);
  const closeMenu  = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* TOPBAR */}
      <div className="topbar topbar-minimal">
        <div className="topbar-right" style={{marginLeft:"auto", display:"flex", gap:"1.5rem", alignItems:"center"}}>
          <a href="https://www.instagram.com/snarindia?igsh=MTBsanM0OGgydXJyYw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{display:"flex", alignItems:"center", gap:".4rem", textDecoration:"none", color:"inherit", fontSize:".85rem"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37"/><circle cx="17.5" cy="6.5" r="1.5"/>
            </svg>
            Instagram
          </a>
          <a href="https://www.facebook.com/share/1Ku37nYEQW/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{display:"flex", alignItems:"center", gap:".4rem", textDecoration:"none", color:"inherit", fontSize:".85rem"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </a>
          <Link href="/help" className="topbar-help">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            Help &amp; Support
          </Link>
        </div>
      </div>

      {/* FLOATING PILL NAV */}
      <div className="pill-nav-wrap">
        <nav className={`pill-nav${scrolled ? " pill-scrolled" : ""}`}>
          {/* LEFT LINKS */}
          <div className="pill-group pill-left">
            {LEFT_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="pill-link">
                {l.label}{l.chevron && CHEVRON}
              </Link>
            ))}
          </div>

          {/* CENTER LOGO */}
          <Link href="/" className="pill-logo">
            <img src="/logo.png" alt="SNAR" />
          </Link>

          {/* RIGHT LINKS */}
          <div className="pill-group pill-right">
            {RIGHT_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="pill-link">
                {l.label}{l.chevron && CHEVRON}
              </Link>
            ))}

            {/* Mobile hamburger */}
            <button className="pill-menu-btn" onClick={toggleMenu} aria-label="Toggle navigation">
              <span /><span /><span />
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div className="mobile-nav active" onClick={closeMenu}>
          <div className="mobile-nav-inner" onClick={e => e.stopPropagation()}>
            <button className="mobile-close" onClick={closeMenu} aria-label="Close">×</button>
            <img src="/logo.png" alt="SNAR" style={{ height: "48px", objectFit: "contain", marginBottom: "1.5rem" }} />
            <div className="mobile-nav-links">
              <Link href="/men"         onClick={closeMenu}>Men</Link>
              <Link href="/women"       onClick={closeMenu}>Women</Link>
              <Link href="/accessories" onClick={closeMenu}>Accessories</Link>
              <Link href="/collections" onClick={closeMenu}>Collections</Link>
              <Link href="/about"       onClick={closeMenu}>About Us</Link>
            </div>
            <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", gap: ".7rem" }}>
              <Link href="/help" style={{ color: "var(--muted)", fontSize: ".8rem", textDecoration: "none" }} onClick={closeMenu}>Help &amp; Support</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}