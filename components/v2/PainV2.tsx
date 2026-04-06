"use client";
import { useEffect, useRef } from "react";
import { Plane, CreditCard, MapPin } from "lucide-react";
import { PAIN } from "@/lib/constants";

const icons: Record<string, React.ReactNode> = {
  Plane: <Plane size={20} />,
  CreditCard: <CreditCard size={20} />,
  MapPin: <MapPin size={20} />,
};

export default function PainV2() {
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
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".v2-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="dor"
      ref={ref}
      style={{
        background: "var(--v2-bg-alt)",
        padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)",
        borderTop: "1.5px solid var(--v2-border)",
        borderBottom: "1.5px solid var(--v2-border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div className="v2-reveal" data-delay="0" style={{ marginBottom: "2.5rem" }}>
          <p className="v2-label" style={{ marginBottom: "0.75rem" }}>— VOCÊ SE IDENTIFICA?</p>
          <h2
            className="v2-h-section"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            {PAIN.title}
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {PAIN.cards.map((card, i) => (
            <div
              key={card.title}
              className="v2-card v2-reveal"
              data-delay={String(i * 100)}
              style={{ padding: "1.75rem" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "var(--v2-yellow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  color: "#111111",
                }}
              >
                {icons[card.icon]}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "-0.01em",
                  color: "#111111",
                  marginBottom: "0.6rem",
                }}
              >
                {card.title}
              </h3>
              <p className="v2-body" style={{ fontSize: "0.875rem" }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Frase de transição */}
        <div
          className="v2-reveal"
          data-delay="180"
          style={{
            borderLeft: "4px solid var(--v2-orange)",
            paddingLeft: "1.5rem",
            maxWidth: 600,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              lineHeight: 1.4,
              color: "#111111",
              fontStyle: "italic",
            }}
          >
            "{PAIN.transition}"
          </p>
        </div>
      </div>
    </section>
  );
}
