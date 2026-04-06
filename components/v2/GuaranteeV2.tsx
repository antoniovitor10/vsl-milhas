"use client";
import { useEffect, useRef } from "react";
import { ShieldCheck } from "lucide-react";
import { GUARANTEE, MENTORS } from "@/lib/constants";

export default function GuaranteeV2() {
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
      id="garantia"
      ref={ref}
      style={{
        background: "var(--v2-bg)",
        padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)",
        borderTop: "1.5px solid var(--v2-border)",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <div className="v2-reveal" data-delay="0">
          <div
            style={{
              width: 60,
              height: 60,
              background: "var(--v2-yellow)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
              boxShadow: "4px 4px 0px var(--v2-border)",
            }}
          >
            <ShieldCheck size={28} color="#111111" />
          </div>

          <p className="v2-label" style={{ marginBottom: "0.75rem" }}>— SEM RISCO PARA VOCÊ</p>

          <h2
            className="v2-h-section"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)", marginBottom: "1.25rem" }}
          >
            🛡️ {GUARANTEE.title}
          </h2>

          <div className="v2-accent-line" style={{ margin: "0 auto 1.25rem" }} />

          <p
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "var(--v2-ink-muted)",
              whiteSpace: "pre-line",
            }}
          >
            {GUARANTEE.text}
          </p>
        </div>

        <div
          className="v2-reveal"
          data-delay="120"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginTop: "2.5rem",
          }}
        >
          {[MENTORS.paullo, MENTORS.isabela].map((mentor, i) => (
            <div
              key={mentor.name}
              style={{
                background: "#FFFFFF",
                border: "1.5px solid var(--v2-border)",
                boxShadow: i === 0 ? "5px 5px 0px var(--v2-yellow)" : "5px 5px 0px var(--v2-border)",
                padding: "1.25rem",
                display: "flex",
                gap: "0.85rem",
                alignItems: "flex-start",
                textAlign: "left",
              }}
            >
              <div
                className="v2-avatar"
                style={{ width: 40, height: 40, fontSize: "0.78rem", flexShrink: 0 }}
              >
                {mentor.initials}
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#111111", marginBottom: "0.3rem" }}>
                  {mentor.name}
                </p>
                <p style={{ fontFamily: "var(--font-manrope)", fontWeight: 400, fontSize: "0.75rem", lineHeight: 1.5, color: "var(--v2-ink-light)" }}>
                  {mentor.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:480px){#garantia .v2-reveal:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
