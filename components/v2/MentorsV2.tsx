"use client";
import { useEffect, useRef } from "react";
import { MENTORS_REVEAL, MENTORS } from "@/lib/constants";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function MentorsV2() {
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
    ref.current?.querySelectorAll(".v2-reveal, .v2-reveal-left").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="mentores"
      ref={ref}
      style={{
        background: "var(--v2-bg)",
        padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "center",
          }}
          className="mentors-grid"
        >
          {/* Esquerda — texto */}
          <div className="v2-reveal-left" data-delay="0">
            <p className="v2-label" style={{ marginBottom: "1.25rem" }}>— A MENTORIA</p>
            <h2
              className="v2-h-section"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3.2rem)",
                marginBottom: "1.5rem",
                lineHeight: 1.0,
              }}
            >
              <span style={{ display: "block" }}>A MENTORIA QUE VAI</span>
              <span
                style={{
                  display: "inline-block",
                  background: "var(--v2-yellow)",
                  padding: "0.02em 0.1em",
                }}
              >
                REDEFINIR
              </span>
              <span style={{ display: "block" }}>SUA LIBERDADE</span>
            </h2>

            <div className="v2-accent-line" style={{ marginBottom: "1.25rem" }} />

            <p className="v2-body" style={{ maxWidth: 440, whiteSpace: "pre-line", fontSize: "0.92rem" }}>
              {MENTORS_REVEAL.text}
            </p>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginTop: "2rem",
              }}
            >
              {MENTORS_REVEAL.stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    borderLeft: "4px solid var(--v2-yellow)",
                    paddingLeft: "1rem",
                  }}
                >
                  <div
                    className="v2-stat-number"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "#111111" }}
                  >
                    <AnimatedCounter value={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <p className="v2-label" style={{ marginTop: "0.25rem", color: "var(--v2-ink-light)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Direita — fotos */}
          <div
            className="v2-reveal"
            data-delay="120"
            style={{ display: "flex", gap: "1rem", alignItems: "flex-end" }}
          >
            {[MENTORS.paullo, MENTORS.isabela].map((mentor, i) => (
              <div
                key={mentor.name}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  marginTop: i === 0 ? "2rem" : "0",
                }}
              >
                <div
                  style={{
                    aspectRatio: "3/4",
                    background: "var(--v2-bg-dark)",
                    border: "1.5px solid var(--v2-border-dark)",
                    boxShadow: i === 0 ? "7px 7px 0px var(--v2-yellow)" : "7px 7px 0px var(--v2-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 800,
                      fontSize: "3rem",
                      color: "rgba(255,238,88,0.15)",
                    }}
                  >
                    {mentor.initials}
                  </span>
                  {/* <img src={mentor.photo} alt={mentor.name} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} loading="lazy" /> */}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 800,
                      fontSize: "0.68rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#111111",
                    }}
                  >
                    {mentor.name}
                  </p>
                  <p className="v2-label" style={{ marginTop: "0.15rem", color: "var(--v2-ink-light)" }}>
                    {mentor.roleShort}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mentors-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
