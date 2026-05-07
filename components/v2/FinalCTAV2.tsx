"use client";
import { useEffect, useRef } from "react";
import { FINAL_CTA, CHECKOUT_URL } from "@/lib/constants";

export default function FinalCTAV2() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ref.current?.querySelectorAll(".v2-reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("is-visible"), i * 90);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta-final"
      ref={ref}
      style={{
        background: "var(--v2-bg-dark)",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 2.5rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-12%",
          right: "-4%",
          fontSize: "clamp(12rem, 28vw, 24rem)",
          fontWeight: 800,
          color: "rgba(255,238,88,0.04)",
          fontFamily: "var(--font-manrope), sans-serif",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        ✦
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="v2-reveal" style={{ marginBottom: "1.25rem" }}>
          <span style={{ fontFamily: "var(--font-manrope)", fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#6A5D45" }}>
            ⚡ — ÚLTIMAS VAGAS
          </span>
        </div>

        <h2
          className="v2-reveal"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 7vw, 7rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "#F5EFE0",
            marginBottom: "1.25rem",
          }}
        >
          <span style={{ display: "block" }}>NÃO PERCA</span>
          <span style={{ display: "inline-block", background: "var(--v2-yellow)", color: "#111111", padding: "0.02em 0.1em" }}>ESSA</span>
          <span style={{ display: "block" }}>OPORTUNIDADE</span>
        </h2>

        <p
          className="v2-reveal"
          style={{
            fontFamily: "var(--font-manrope)", fontWeight: 400, fontSize: "0.95rem",
            color: "#6A5D45", maxWidth: 500, lineHeight: 1.65, marginBottom: "2.5rem",
          }}
        >
          {FINAL_CTA.subtitle}
        </p>

        <div className="v2-reveal" style={{ display: "flex", flexDirection: "column", gap: "0.85rem", alignItems: "flex-start" }}>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              background: "var(--v2-yellow)",
              color: "#111111",
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 800,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "1.2rem 3rem",
              textDecoration: "none",
              boxShadow: "7px 7px 0px rgba(255,238,88,0.22)",
              transition: "box-shadow 0.15s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translate(-2px,-2px)";
              el.style.boxShadow = "10px 10px 0px rgba(255,238,88,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translate(0,0)";
              el.style.boxShadow = "7px 7px 0px rgba(255,238,88,0.22)";
            }}
          >
            {FINAL_CTA.cta} →
          </a>
          <p style={{ fontFamily: "var(--font-manrope)", fontSize: "0.68rem", color: "#3A3028", letterSpacing: "0.04em" }}>
            🔒 Garantia de 7 dias · Pagamento 100% seguro
          </p>
        </div>
      </div>
    </section>
  );
}
