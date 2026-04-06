"use client";
import { useEffect, useRef } from "react";
import { Compass, CreditCard, Target, ArrowLeftRight, Globe, Gem } from "lucide-react";
import { MODULES } from "@/lib/constants";

const icons: Record<string, React.ReactNode> = {
  Compass: <Compass size={18} />,
  CreditCard: <CreditCard size={18} />,
  Target: <Target size={18} />,
  ArrowLeftRight: <ArrowLeftRight size={18} />,
  Globe: <Globe size={18} />,
  Gem: <Gem size={18} />,
};

export default function ModulesV2() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            setTimeout(() => el.classList.add("is-visible"), parseInt(el.dataset.delay ?? "0"));
          }
        });
      },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".v2-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="modulos"
      ref={ref}
      style={{
        background: "var(--v2-bg-dark)",
        color: "#F5EFE0",
        padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div className="v2-reveal" data-delay="0" style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
          <p
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "0.67rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#6A5D45",
              marginBottom: "0.65rem",
            }}
          >
            — O MÉTODO COMPLETO
          </p>
          <h2
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              color: "#F5EFE0",
              marginBottom: "0.75rem",
            }}
          >
            {MODULES.title}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "0.9rem",
              color: "#6A5D45",
              maxWidth: 480,
              lineHeight: 1.6,
            }}
          >
            {MODULES.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "1px",
            border: "1px solid #2C2420",
            background: "#2C2420",
          }}
        >
          {MODULES.items.map((mod, i) => (
            <div
              key={mod.title}
              className="v2-reveal"
              data-delay={String(i * 70)}
              style={{
                background: "var(--v2-bg-dark)",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#221D18";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--v2-bg-dark)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 800,
                    fontSize: "0.65rem",
                    letterSpacing: "0.16em",
                    color: "#3A3028",
                    textTransform: "uppercase",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    background: "var(--v2-yellow)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#111111",
                  }}
                >
                  {icons[mod.icon]}
                </div>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#F5EFE0",
                  borderBottom: "1px solid #2C2420",
                  paddingBottom: "0.65rem",
                }}
              >
                {mod.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "0.83rem",
                  lineHeight: 1.6,
                  color: "#6A5D45",
                }}
              >
                {mod.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
