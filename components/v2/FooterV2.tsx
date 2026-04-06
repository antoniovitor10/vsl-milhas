"use client";
import { FOOTER, PRODUCT } from "@/lib/constants";

const anchors: Record<string, string> = {
  PAGAMENTO: "#oferta",
  INÍCIO: "#hero",
  GARANTIA: "#garantia",
  CONTATO: "#faq",
  FAQ: "#faq",
};

export default function FooterV2() {
  return (
    <footer
      style={{
        background: "#FAFAF7",
        borderTop: "1.5px solid #D0CEBF",
        padding: "3rem clamp(1.25rem, 5vw, 3rem)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 800,
              fontSize: "1.1rem",
              letterSpacing: "-0.02em",
              color: "#111111",
            }}
          >
            {PRODUCT.name}
          </span>

          <nav style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
            {FOOTER.links.map((link) => (
              <a
                key={link}
                href={anchors[link] || "#"}
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#AAAAAA",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#111111")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#AAAAAA")}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div style={{ height: "1.5px", background: "#D0CEBF" }} />

        {/* Bottom */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "0.78rem",
              color: "#AAAAAA",
            }}
          >
            {FOOTER.copyright}
          </p>
          <p
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "0.72rem",
              color: "#CCCCCC",
              maxWidth: 640,
              lineHeight: 1.5,
            }}
          >
            {FOOTER.disclaimer} Ao adquirir, você concorda com os Termos de Uso e Política de Privacidade.
          </p>
        </div>
      </div>
    </footer>
  );
}
