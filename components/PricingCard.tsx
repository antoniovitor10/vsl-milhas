"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  MessageCircle,
  FileSpreadsheet,
  Sparkles,
  Headphones,
  RefreshCw,
  Check,
} from "lucide-react";
import { OFFER, PRICING, WHATSAPP } from "@/lib/constants";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { trackEvent } from "@/lib/analytics";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={18} />,
  MessageCircle: <MessageCircle size={18} />,
  FileSpreadsheet: <FileSpreadsheet size={18} />,
  Sparkles: <Sparkles size={18} />,
  Headphones: <Headphones size={18} />,
  RefreshCw: <RefreshCw size={18} />,
};

export default function PricingCard() {
  const pricingViewTrackedRef = useRef(false);

  return (
    <section
      id="oferta"
      className="relative py-20 px-4"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          onViewportEnter={() => {
            if (!pricingViewTrackedRef.current) {
              pricingViewTrackedRef.current = true;
              trackEvent("pricing_view");
            }
          }}
        >
          <motion.div variants={fadeUp} className="text-center mb-8">
            <span
              className="inline-block text-xs font-bold tracking-widest px-5 py-2 rounded-full"
              style={{
                background: "rgba(37,99,235,0.12)",
                border: "1px solid rgba(37,99,235,0.3)",
                color: "var(--accent)",
                fontFamily: "var(--font-sora), sans-serif",
              }}
            >
              {OFFER.badge}
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-3xl overflow-hidden relative"
            style={{
              background: "var(--bg-card)",
              border: "2px solid rgba(37,99,235,0.35)",
              boxShadow: "0 0 80px rgba(37,99,235,0.12), 0 0 0 1px rgba(37,99,235,0.1)",
            }}
          >
            {/* Glowing top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
              }}
            />

            <div className="p-8 sm:p-10 flex flex-col gap-8">
              <h2
                className="text-2xl sm:text-3xl font-extrabold text-center tracking-tight"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                {OFFER.title}
              </h2>

              {/* Price with aggressive anchoring */}
              <div className="text-center flex flex-col items-center gap-2">
                <p
                  className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em]"
                  style={{ color: "#F59E0B" }}
                >
                  De R$ {PRICING.valorTotal} por apenas:
                </p>

                <div className="flex items-center gap-3">
                  <span
                    className="text-xl sm:text-2xl line-through font-bold"
                    style={{ color: "rgba(239,68,68,0.9)" }}
                  >
                    De R$ {PRICING.valorTotal}
                  </span>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{
                      background: "rgba(239,68,68,0.15)",
                      color: "#EF4444",
                      border: "1px solid rgba(239,68,68,0.3)",
                    }}
                  >
                    -{Math.round((1 - parseInt(PRICING.precoFinal.replace(".", "")) / parseInt(PRICING.valorTotal.replace(".", ""))) * 100)}% OFF
                  </span>
                </div>

                <div
                  className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none"
                  style={{
                    fontFamily: "var(--font-sora), sans-serif",
                    background: "linear-gradient(135deg, #60A5FA, #2563EB, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 30px rgba(37,99,235,0.4))",
                  }}
                >
                  R$ {PRICING.precoFinal}
                </div>

                <p className="text-sm sm:text-base font-medium" style={{ color: "var(--text-secondary)" }}>
                  ou <span className="font-bold" style={{ color: "var(--accent)" }}>{PRICING.parcelas}x de R$ {PRICING.valorParcela}</span>
                </p>

                <div
                  className="mt-2 px-4 py-2 rounded-lg text-xs font-bold tracking-wide"
                  style={{
                    background: "rgba(37,211,102,0.1)",
                    border: "1px solid rgba(37,211,102,0.25)",
                    color: "#25D366",
                  }}
                >
                  💰 Economia de R$ {(parseInt(PRICING.valorTotal.replace(".", "")) - parseInt(PRICING.precoFinal.replace(".", ""))).toLocaleString("pt-BR")}
                </div>

                <p
                  className="mt-3 text-xs sm:text-sm font-medium text-center max-w-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  R$ 1,35 por dia para você transformar para sempre como você viaja.
                </p>
              </div>

              <div className="h-px w-full" style={{ background: "var(--border)" }} />

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                {OFFER.items.map((item) => (
                  <motion.div
                    key={item.text}
                    variants={fadeUp}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(37,211,102,0.15)" }}
                    >
                      <Check size={13} style={{ color: "var(--cta)" }} />
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-primary)" }}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <a
                href={WHATSAPP.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-green w-full py-5 rounded-2xl text-center text-base sm:text-lg uppercase animate-pulse shadow-[0_0_40px_rgba(37,211,102,0.3)]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
                onClick={() => trackEvent("pricing_cta_click")}
              >
                {OFFER.cta} →
              </a>

              <p
                className="text-center text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                🔒 Pagamento 100% seguro · Garantia de {PRICING.garantiaDias} dias
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
