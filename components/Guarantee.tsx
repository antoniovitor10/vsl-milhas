"use client";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { GUARANTEE, MENTORS } from "@/lib/constants";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

export default function Guarantee() {
  return (
    <section
      id="garantia"
      className="relative py-20 px-4"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
        >
          {/* Shield icon */}
          <motion.div
            variants={fadeUp}
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(245,158,11,0.1)",
              border: "2px solid rgba(245,158,11,0.3)",
            }}
          >
            <ShieldCheck size={38} style={{ color: "var(--accent)" }} />
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            🛡️ {GUARANTEE.title}
          </motion.h2>

          {/* Text */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg leading-relaxed whitespace-pre-line max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            {GUARANTEE.text}
          </motion.p>

          {/* Mentors cards */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full pt-4 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            {[MENTORS.paullo, MENTORS.isabela].map((mentor) => (
              <div
                key={mentor.name}
                className="flex items-center gap-4 p-5 rounded-2xl"
                style={{
                  background: "rgba(245,158,11,0.04)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold"
                  style={{
                    background: "rgba(245,158,11,0.12)",
                    color: "var(--accent)",
                    border: "2px solid rgba(245,158,11,0.2)",
                    fontFamily: "var(--font-sora), sans-serif",
                  }}
                >
                  {mentor.initials}
                </div>
                <div className="text-left">
                  <p
                    className="text-sm font-bold"
                    style={{
                      fontFamily: "var(--font-sora), sans-serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {mentor.name.toUpperCase()}
                  </p>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {mentor.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
