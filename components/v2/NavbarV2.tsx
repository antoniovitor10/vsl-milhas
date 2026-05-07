"use client";
import { useEffect, useState } from "react";
import { PRODUCT, WHATSAPP } from "@/lib/constants";
import { Menu, X } from "lucide-react";

const STRIP_H = 34; // altura da tarja de urgência

const navLinks = [
  { label: "Módulos", href: "#modulos" },
  { label: "Mentores", href: "#mentores" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Garantia", href: "#garantia" },
  { label: "FAQ", href: "#faq" },
];

export default function NavbarV2() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Tarja de urgência — ocupa o topo ANTES da navbar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          height: STRIP_H,
          background: "var(--v2-red)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: 700,
          fontSize: "0.65rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        🔥 AS VAGAS ESTÃO ACABANDO. TURMA 01 COM DESCONTO ESPECIAL.
      </div>

      {/* Navbar — fica ABAIXO da tarja */}
      <header
        style={{
          position: "fixed",
          top: STRIP_H,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? "rgba(245,239,224,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1.5px solid var(--v2-border)" : "none",
          transition: "all 0.25s",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1rem,4vw,2.5rem)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 56,
            }}
          >
            {/* Logo */}
            <a
              href="#hero"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="/logo.svg"
                alt={PRODUCT.name}
                style={{ height: 80, width: "auto" }}
                className="mix-blend-screen"
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--v2-ink-muted)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#111111")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--v2-ink-muted)")}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* CTA desktop */}
            <a
              href={WHATSAPP.link}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-btn-black"
              style={{
                fontSize: "0.68rem",
                padding: "0.65rem 1.25rem",
                display: "none",
              }}
              ref={(el) => {
                if (el) el.style.display = "";
              }}
            >
              QUERO APRENDER →
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#111111" }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              background: "var(--v2-bg)",
              borderTop: "1.5px solid var(--v2-border)",
              padding: "1.25rem clamp(1rem,4vw,2.5rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--v2-ink-muted)",
                  textDecoration: "none",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP.link}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-btn-black"
              style={{ textAlign: "center", justifyContent: "center", fontSize: "0.68rem" }}
            >
              QUERO APRENDER →
            </a>
          </div>
        )}
      </header>
    </>
  );
}
