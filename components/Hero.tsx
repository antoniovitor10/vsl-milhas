"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { HERO, WHATSAPP } from "@/lib/constants";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background gradient blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(245,158,11,0.07) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center gap-6"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Badge urgência */}
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

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
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

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg max-w-2xl leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {HERO.subheadline}
        </motion.p>

        {/* Video / VSL placeholder */}
        <motion.div
          variants={fadeUp}
          className="w-full max-w-3xl rounded-2xl overflow-hidden relative"
          style={{
            aspectRatio: "16/9",
            background: "#0f0f0f",
            border: "1px solid var(--border)",
            boxShadow: "0 0 60px rgba(245,158,11,0.12)",
          }}
        >
          {/* Placeholder cabin image with overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #0d0a04 0%, #1a1200 40%, #0a0a0a 100%)",
            }}
          >
            {/* Decorative lines to simulate cabin */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent)",
                    top: `${10 + i * 12}%`,
                  }}
                />
              ))}
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(245,158,11,0.06), transparent)",
              }}
            />

            {/* Play button */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <button
                className="flex items-center justify-center w-20 h-20 rounded-full transition-transform duration-200 hover:scale-110"
                style={{
                  background: "rgba(245,158,11,0.15)",
                  border: "2px solid var(--accent)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 0 30px rgba(245,158,11,0.3)",
                }}
                aria-label="Assistir vídeo"
              >
                <Play
                  className="ml-1"
                  size={32}
                  style={{ color: "var(--accent)" }}
                  fill="currentColor"
                />
              </button>
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                Assistir apresentação
              </span>
            </div>

            {/* Placeholder comment */}
            {/* SUBSTITUIR PELO EMBED DO VÍDEO VSL */}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp}>
          <a
            href={WHATSAPP.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-green inline-flex items-center gap-3 px-8 py-5 rounded-full text-base sm:text-lg uppercase"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {HERO.cta} →
          </a>
        </motion.div>

        {/* Logos bar */}
        <motion.div variants={fadeUp} className="w-full pt-2">
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
      </motion.div>
    </section>
  );
}
