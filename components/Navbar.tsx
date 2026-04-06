"use client";
import { useEffect, useState } from "react";
import { PRODUCT, WHATSAPP } from "@/lib/constants";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Fundamentos", href: "#modulos" },
  { label: "Módulos", href: "#modulos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Garantia", href: "#garantia" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a
            href="#hero"
            className="font-bold text-lg tracking-tight"
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              color: "var(--accent)",
            }}
          >
            {PRODUCT.name}
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-amber-400"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={WHATSAPP.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm btn-cta-amber"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            QUERO APRENDER →
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md"
            style={{ color: "var(--text-primary)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "rgba(10,10,10,0.97)",
            borderColor: "var(--border)",
          }}
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium py-1"
                style={{ color: "var(--text-secondary)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-amber text-center py-3 px-6 rounded-full text-sm mt-2"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              QUERO APRENDER →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
