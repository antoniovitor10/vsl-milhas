"use client";
import { useEffect, useRef } from "react";
import { SOCIAL_PROOF } from "@/lib/constants";
import AnimatedCounter from "@/components/AnimatedCounter";
import VTurbPlayer from "@/components/VTurbPlayer";

export default function SocialProofV2() {
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
      id="depoimentos"
      ref={ref}
      style={{
        background: "var(--v2-bg-yellow)",
        padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)",
        borderTop: "1.5px solid var(--v2-yellow-dark)",
        borderBottom: "1.5px solid var(--v2-yellow-dark)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Contador — seção amarela vibrantíssima */}
        <div className="v2-reveal" data-delay="0" style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "0.67rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(17,17,17,0.5)",
              marginBottom: "0.5rem",
            }}
          >
            — RESULTADO DOS MENTORADOS
          </p>
          <div
            className="v2-stat-number"
            style={{
              fontSize: "clamp(3rem, 9vw, 7.5rem)",
              color: "#111111",
              lineHeight: 0.9,
              marginBottom: "0.4rem",
            }}
          >
            <AnimatedCounter
              value={SOCIAL_PROOF.counter.value}
              prefix="+R$"
              duration={2500}
            />
          </div>
          <p
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 700,
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(17,17,17,0.6)",
            }}
          >
            {SOCIAL_PROOF.counter.label}
          </p>
        </div>

        {/* Título */}
        <div className="v2-reveal" data-delay="80" style={{ marginBottom: "2rem" }}>
          <h2
            className="v2-h-section"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#111111" }}
          >
            {SOCIAL_PROOF.title}
          </h2>
        </div>

        {/* Cards — fundo branco sobre amarelo = contraste forte */}
        {/* TROCAR PELOS DEPOIMENTOS REAIS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {SOCIAL_PROOF.testimonials.map((t, i) => (
            <div
              key={i}
              className="v2-reveal"
              data-delay={String(i * 100)}
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #111111",
                boxShadow: "5px 5px 0px #111111",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div style={{ aspectRatio: "9/16", maxHeight: 420, background: "#000" }}>
                <VTurbPlayer playerId={t.vturbId} />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  padding: "1rem 1.25rem",
                  borderTop: "1px solid #E8E8E8",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: "#111111",
                    color: "#FFEE58",
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 800,
                    fontSize: "0.7rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {t.name.slice(0, 2)}
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#111111",
                    }}
                  >
                    {t.name}
                  </span>
                  {t.localidade && (
                    <p
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontSize: "0.65rem",
                        color: "#666",
                        marginTop: 2,
                      }}
                    >
                      {t.localidade}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
