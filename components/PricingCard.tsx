"use client";
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

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={18} />,
  MessageCircle: <MessageCircle size={18} />,
  FileSpreadsheet: <FileSpreadsheet size={18} />,
  Sparkles: <Sparkles size={18} />,
  Headphones: <Headphones size={18} />,
  RefreshCw: <RefreshCw size={18} />,
};

export default function PricingCard() {
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
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="text-center mb-8">
            <span
              className="inline-block text-xs font-bold tracking-widest px-5 py-2 rounded-full"
              style={{
                background: "rgba(245,158,11,0.12)",
                border: "1px solid rgba(245,158,11,0.3)",
                color: "var(--accent)",
                fontFamily: "var(--font-sora), sans-serif",
              }}
            >
              {OFFER.badge}
            </span>
          </motion.div>

          {/* Card */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl overflow-hidden"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(245,158,11,0.25)",
              boxShadow: "0 0 60px rgba(245,158,11,0.08)",
            }}
          >
            <div className="p-8 sm:p-10 flex flex-col gap-8">
              {/* Title */}
              <h2
                className="text-2xl sm:text-3xl font-extrabold text-center tracking-tight"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                {OFFER.title}
              </h2>

              {/* Price */}
              <div className="text-center flex flex-col items-center gap-1">
                <p
                  className="text-sm line-through"
                  style={{ color: "var(--text-muted)" }}
                >
                  De R$ {PRICING.valorTotal}
                </p>
                <div
                  className="text-6xl sm:text-7xl font-extrabold leading-none pulse-amber"
                  style={{
                    fontFamily: "var(--font-sora), sans-serif",
                    color: "var(--accent)",
                    textShadow: "0 0 40px rgba(245,158,11,0.4)",
                  }}
                >
                  R$ {PRICING.precoFinal}
                </div>
                <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                  ou {PRICING.parcelas}x de R$ {PRICING.valorParcela}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px w-full" style={{ background: "var(--border)" }} />

              {/* Deliverables */}
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

              {/* CTA */}
              <a
                href={WHATSAPP.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-green w-full py-5 rounded-2xl text-center text-base sm:text-lg uppercase"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                {OFFER.cta} →
              </a>

              <p
                className="text-center text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                🔒 Pagamento 100% seguro · Garantia de 7 dias
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
