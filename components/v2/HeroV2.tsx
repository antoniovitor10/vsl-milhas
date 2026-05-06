"use client";
import { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { HERO, WHATSAPP, PRODUCT, CHECKOUT_URL } from "@/lib/constants";

export default function HeroV2() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const delays = [0, 60, 130, 220, 320];
    ref.current?.querySelectorAll(".v2-reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("is-visible"), delays[i] ?? 400);
    });
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        background: "var(--v2-bg)",
        // paddingTop = urgency strip (36px) + navbar (64px) + folga
        paddingTop: "clamp(6.5rem, 12vw, 8rem)",
        paddingBottom: "clamp(2.5rem, 4vw, 3.5rem)",
        paddingLeft: "clamp(1rem, 4vw, 2.5rem)",
        paddingRight: "clamp(1rem, 4vw, 2.5rem)",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Badge produto */}
        <div className="v2-reveal" style={{ marginBottom: "1rem" }}>
          <span className="v2-badge-yellow">{PRODUCT.name} · Turma 01</span>
        </div>

        {/* Headline — compacta, centralizada */}
        <h1
          className="v2-h-display v2-reveal"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
            lineHeight: 1.15,
            marginBottom: "0.85rem",
            maxWidth: 760,
          }}
        >
          DESCUBRA COMO VIAJAR O MUNDO GASTANDO{" "}
          <span style={{ background: "var(--v2-yellow)", padding: "0 0.08em", display: "inline" }}>
            ATÉ 90% MENOS
          </span>{" "}
          USANDO MILHAS AÉREAS
        </h1>

        {/* Sub */}
        <p
          className="v2-body v2-reveal"
          style={{
            fontSize: "0.92rem",
            maxWidth: 540,
            marginBottom: "1.75rem",
            color: "var(--v2-ink-muted)",
          }}
        >
          {HERO.subheadline}
        </p>

        {/* ═══ VÍDEO — destaque imediato, centralizado ═══ */}
        <div className="v2-reveal" style={{ width: "100%", marginBottom: "1.5rem" }}>
          <div
            className="v2-video-frame"
            style={{
              width: "100%",
              maxWidth: 820,
              margin: "0 auto",
              aspectRatio: "16/9",
            }}
          >
            {/* BG cabine */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(160deg, #1a1000 0%, #0d0900 50%, #1a0f00 100%)",
              }}
            />
            {/* Linhas de perspectiva */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  height: 1,
                  left: "5%",
                  right: "5%",
                  background: `rgba(255,238,88,${0.025 + i * 0.018})`,
                  top: `${6 + i * 11}%`,
                }}
              />
            ))}
            {/* Luz lateral esquerda */}
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "18%", background: "linear-gradient(90deg,rgba(255,238,88,0.05),transparent)" }} />
            {/* Luz lateral direita */}
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "18%", background: "linear-gradient(-90deg,rgba(255,238,88,0.05),transparent)" }} />

            {/* Play button */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.65rem",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: 68,
                  height: 68,
                  background: "var(--v2-yellow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "5px 5px 0px rgba(0,0,0,0.35)",
                  transition: "transform 0.15s, box-shadow 0.15s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translate(-2px,-2px)";
                  el.style.boxShadow = "8px 8px 0px rgba(0,0,0,0.35)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translate(0,0)";
                  el.style.boxShadow = "5px 5px 0px rgba(0,0,0,0.35)";
                }}
              >
                <Play size={24} fill="#111111" color="#111111" style={{ marginLeft: 3 }} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                ASSISTIR APRESENTAÇÃO
              </span>
            </div>
            {/* Embed YouTube — visível assim que a página carrega */}
            <iframe
              src="https://www.youtube.com/embed/Dq4tjmDxszs?rel=0&modestbranding=1"
              title="Rota das Milhas — Apresentação"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none",
                zIndex: 3,
              }}
            />
          </div>
        </div>

        {/* CTA */}
        <div
          className="v2-reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
            marginBottom: "2.25rem",
          }}
        >
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="v2-btn-green"
          >
            {HERO.cta} →
          </a>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontFamily: "var(--font-manrope)", fontSize: "0.7rem", fontWeight: 700, color: "var(--v2-ink)", letterSpacing: "0.04em" }}>
              🔒 Garantia de 7 dias
            </p>
            <p style={{ fontFamily: "var(--font-manrope)", fontSize: "0.66rem", color: "var(--v2-ink-light)", marginTop: "0.1rem" }}>
              Sem perguntas · Devolução 100%
            </p>
          </div>
        </div>

        {/* Logos bar */}
        <div
          className="v2-reveal"
          style={{
            paddingTop: "1.5rem",
            borderTop: "1.5px solid var(--v2-border)",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem 2rem",
          }}
        >
          <span className="v2-label">Parceiros:</span>
          {HERO.logos.map((logo) => (
            <span
              key={logo}
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "var(--v2-border)",
                textTransform: "uppercase",
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
