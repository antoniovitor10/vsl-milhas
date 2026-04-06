"use client";
import { FOOTER, PRODUCT } from "@/lib/constants";

const sectionAnchors: Record<string, string> = {
  PAGAMENTO: "#oferta",
  INÍCIO: "#hero",
  GARANTIA: "#garantia",
  CONTATO: "#faq",
  FAQ: "#faq",
};

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
        <span
          className="text-xl font-bold"
          style={{
            fontFamily: "var(--font-sora), sans-serif",
            color: "var(--accent)",
          }}
        >
          {PRODUCT.name}
        </span>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {FOOTER.links.map((link) => (
            <a
              key={link}
              href={sectionAnchors[link] || "#"}
              className="text-xs font-bold tracking-widest transition-colors hover:text-amber-400"
              style={{ color: "var(--text-muted)" }}
            >
              {link}
            </a>
          ))}
        </nav>

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
