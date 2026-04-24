"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FINAL_CTA, WHATSAPP } from "@/lib/constants";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { trackEvent } from "@/lib/analytics";

export default function FinalCTA() {
  const finalCtaViewTrackedRef = useRef(false);

  return (
    <section
      id="cta-final"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #2563EB 40%, #1D4ED8 100%)",
      }}
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(96,165,250,0.15) 0%, transparent 50%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="flex flex-col items-center gap-8"
          onViewportEnter={() => {
            if (!finalCtaViewTrackedRef.current) {
              finalCtaViewTrackedRef.current = true;
              trackEvent("final_cta_view");
            }
          }}
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span
              className="inline-block text-xs font-bold tracking-widest px-5 py-2 rounded-full"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                fontFamily: "var(--font-sora), sans-serif",
              }}
            >
              ⚡ ÚLTIMAS VAGAS DISPONÍVEIS
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {FINAL_CTA.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-xl font-medium max-w-2xl"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            {FINAL_CTA.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp}>
            <a
              href={WHATSAPP.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-6 rounded-full text-base sm:text-xl font-extrabold uppercase tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "white",
                color: "#1D4ED8",
                fontFamily: "var(--font-sora), sans-serif",
                boxShadow: "0 0 40px rgba(255,255,255,0.3)",
              }}
              onClick={() => trackEvent("final_cta_click")}
            >
              {FINAL_CTA.cta} →
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            🔒 Garantia de 7 dias · Pagamento 100% seguro
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
