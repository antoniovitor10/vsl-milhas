"use client";
import { FOOTER, PRODUCT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      className="py-12 px-4 border-t"
      style={{
        background: "var(--bg-primary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        {/* Logo */}
        <a href="#hero" className="inline-block">
          <img
            src="/logo.svg"
            alt={PRODUCT.name}
            className="h-16 md:h-20 w-auto mix-blend-screen"
          />
        </a>

        {/* Divider */}
        <div className="w-full h-px" style={{ background: "var(--border)" }} />

        {/* Copyright */}
        <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
          {FOOTER.copyright}
        </p>

        {/* Disclaimer */}
        <p
          className="text-xs text-center max-w-2xl leading-relaxed"
          style={{ color: "rgba(115,115,115,0.7)" }}
        >
          {FOOTER.disclaimer}
          {" "}Ao adquirir, você concorda com os Termos de Uso e Política de Privacidade.
        </p>
      </div>
    </footer>
  );
}
