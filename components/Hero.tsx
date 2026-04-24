"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HERO, WHATSAPP } from "@/lib/constants";
import { fadeUp, stagger } from "@/lib/animations";
import { trackEvent } from "@/lib/analytics";
import VSLPlayer from "./VSLPlayer";

interface HeroProps {
  onUnlock: () => void;
  isUnlocked: boolean;
  isOfferUnlocked: boolean;
}

export default function Hero({ onUnlock, isUnlocked, isOfferUnlocked }: HeroProps) {
  const ctaViewTrackedRef = useRef(false);

  useEffect(() => {
    if (isOfferUnlocked && !ctaViewTrackedRef.current) {
      ctaViewTrackedRef.current = true;
      trackEvent("hero_cta_view");
    }
  }, [isOfferUnlocked]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center gap-5"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {HERO.badge && (
          <motion.div variants={fadeUp}>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider"
              style={{
                background: "rgba(239,68,68,0.15)",
                border: "1px solid rgba(239,68,68,0.35)",
                color: "#EF4444",
                fontFamily: "var(--font-sora), sans-serif",
              }}
            >
              {HERO.badge}
            </span>
          </motion.div>
        )}

        <motion.h1
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-sora), sans-serif", color: "var(--text-primary)" }}
        >
          {HERO.headline}{" "}
          <em
            className="not-italic font-extrabold"
            style={{ color: "var(--accent)" }}
          >
            {HERO.headlineAccent}
          </em>{" "}
          {HERO.headlineSuffix}
        </motion.h1>

        <motion.div variants={fadeUp} className="w-full relative z-20">
          <VSLPlayer onUnlock={onUnlock} />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg max-w-2xl leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {HERO.subheadline}
        </motion.p>

        {isOfferUnlocked && (
          <motion.div
            variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href={WHATSAPP.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-green inline-flex items-center gap-3 px-8 py-5 rounded-full text-base sm:text-lg uppercase mt-2 shadow-[0_0_40px_rgba(37,211,102,0.4)] animate-pulse"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
              onClick={() => trackEvent("hero_cta_click")}
            >
              {HERO.cta} →
            </a>
          </motion.div>
        )}

        {isOfferUnlocked && HERO.logos.length > 0 && (
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="w-full pt-2">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Programas parceiros:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {HERO.logos.map((logo) => (
                <span
                  key={logo}
                  className="text-sm font-bold tracking-widest"
                  style={{ color: "rgba(245,245,245,0.35)" }}
                >
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>
        )}


      </motion.div>
    </section>
  );
}
