"use client";
import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { PRICING, OFFER, WHATSAPP, CHECKOUT_URL } from "@/lib/constants";

export default function PricingV2() {
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
      id="oferta"
      ref={ref}
      style={{
        background: "var(--v2-bg-alt)",
        padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)",
        borderTop: "1.5px solid var(--v2-border)",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div className="v2-reveal" data-delay="0" style={{ marginBottom: "1.5rem" }}>
          <span className="v2-badge-yellow">{OFFER.badge}</span>
        </div>

        <div
          className="v2-reveal"
          data-delay="80"
          style={{
            background: "#FFFFFF",
            border: "1.5px solid var(--v2-border)",
            boxShadow: "10px 10px 0px var(--v2-yellow)",
            padding: "clamp(1.75rem, 4vw, 3rem)",
          }}
        >
          <h2
            className="v2-h-section"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              marginBottom: "2rem",
              borderBottom: "1.5px solid #EDE8DD",
              paddingBottom: "1.25rem",
            }}
          >
            {OFFER.title}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
              alignItems: "start",
            }}
            className="pricing-inner"
          >
            {/* Preço */}
            <div>
              <p style={{ fontFamily: "var(--font-manrope)", fontSize: "0.85rem", textDecoration: "line-through", color: "#AAAAAA", marginBottom: "0.4rem" }}>
                De R$ {PRICING.valorTotal}
              </p>
              <div
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.04em",
                  color: "#111111",
                  background: "var(--v2-yellow)",
                  display: "inline-block",
                  padding: "0.08em 0.18em",
                  marginBottom: "0.6rem",
                }}
              >
                R$ {PRICING.precoFinal}
              </div>
              <p style={{ fontFamily: "var(--font-manrope)", fontSize: "0.88rem", color: "#555555" }}>
                ou {PRICING.parcelas}x de R$ {PRICING.valorParcela}
              </p>
              <div style={{ marginTop: "1.75rem" }}>
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-btn-green"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {OFFER.cta} →
                </a>
                <p style={{ fontFamily: "var(--font-manrope)", fontSize: "0.68rem", color: "#AAAAAA", marginTop: "0.6rem", textAlign: "center", letterSpacing: "0.04em" }}>
                  🔒 Pagamento seguro · Garantia 7 dias
                </p>
              </div>
            </div>

            {/* Entregáveis */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <p className="v2-label" style={{ marginBottom: "0.25rem" }}>INCLUSO:</p>
              {OFFER.items.map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      background: "var(--v2-yellow)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={11} color="#111111" strokeWidth={3} />
                  </div>
                  <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 500, fontSize: "0.875rem", color: "#111111" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:580px){.pricing-inner{grid-template-columns:1fr!important;gap:1.75rem!important}}`}</style>
    </section>
  );
}
