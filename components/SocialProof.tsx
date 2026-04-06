"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SOCIAL_PROOF } from "@/lib/constants";
import { fadeUp, stagger, scaleIn, viewportOnce } from "@/lib/animations";
import AnimatedCounter from "./AnimatedCounter";

export default function SocialProof() {
  return (
    <section
      id="depoimentos"
      className="relative py-20 px-4"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,0.05), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Counter */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none mb-3"
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              color: "var(--accent)",
            }}
          >
            <AnimatedCounter
              value={SOCIAL_PROOF.counter.value}
              prefix={SOCIAL_PROOF.counter.prefix}
              suffix={SOCIAL_PROOF.counter.suffix}
              duration={2500}
            />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base font-bold tracking-widest"
            style={{ color: "var(--text-secondary)" }}
          >
            {SOCIAL_PROOF.counter.label}
          </motion.p>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          {SOCIAL_PROOF.title}
        </motion.h2>

        {/* Testimonials */}
        {/* TROCAR PELOS DEPOIMENTOS REAIS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          {SOCIAL_PROOF.testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="rounded-2xl p-7 flex flex-col gap-4"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, s) => (
                  <Star
                    key={s}
                    size={16}
                    fill="currentColor"
                    style={{ color: "var(--accent)" }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed italic flex-1"
                style={{ color: "var(--text-secondary)" }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    background: "rgba(245,158,11,0.15)",
                    color: "var(--accent)",
                    border: "1px solid rgba(245,158,11,0.3)",
                  }}
                >
                  {t.name.slice(0, 2).toUpperCase()}
                </div>
                <span
                  className="text-xs font-bold tracking-wider"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-sora), sans-serif" }}
                >
                  — {t.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
