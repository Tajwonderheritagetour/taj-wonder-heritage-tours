"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "Destinations", href: "/destinations" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
          background: "rgba(8,20,45,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "2px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}

          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
           <Image
  src="/images/taj-wonder-navbar-logo.png"
  alt="Taj Wonder Heritage Tours"
  width={240}
  height={60}
  priority
  style={{
    width: "230px",
    height: "auto",
  }}
/>
          </Link>

          {/* Desktop Menu */}

          <nav
            className="desktopMenu"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "34px",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "15px",
                  transition: "0.3s",
                }}
                className="navLink"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="bookBtn"
              style={{
                background: "#d4af37",
                color: "#08142d",
                padding: "10px 26px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 700,
                transition: ".3s",
              }}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobileButton"
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "32px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div
            style={{
              background: "#08142d",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "#d4af37",
                color: "#08142d",
                textAlign: "center",
                padding: "14px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Book Now
            </Link>
          </div>
        )}
      </header>

      <style jsx>{`
        .navLink:hover {
          color: #d4af37;
        }

        .bookBtn:hover {
          background: #f1c94a;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .desktopMenu {
            display: none !important;
          }

          .mobileButton {
            display: block !important;
          }
        }

        @media (max-width: 768px) {
          img {
            width: 170px !important;
            height: 46px !important;
          }
        }
      `}</style>
    </>
  );
}