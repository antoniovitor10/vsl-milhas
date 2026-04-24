"use client";
import { motion } from "framer-motion";
import { MENTORS_REVEAL, MENTORS } from "@/lib/constants";
import { fadeUp, slideLeft, slideRight, stagger, viewportOnce } from "@/lib/animations";
import AnimatedCounter from "./AnimatedCounter";

export default function MentorsReveal() {
  return (
    <section
      id="mentores"
      className="relative py-20 px-4 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 40%, rgba(37,99,235,0.05), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <motion.div
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideLeft}
          >
            <div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                {MENTORS_REVEAL.title}
                <br />
                <span style={{ color: "var(--accent)" }}>
                  {MENTORS_REVEAL.titleAccent}
                </span>
              </h2>
            </div>

            <p
              className="text-base sm:text-lg leading-relaxed whitespace-pre-line"
              style={{ color: "var(--text-secondary)" }}
            >
              {MENTORS_REVEAL.text}
            </p>

            {/* Stats */}
            {MENTORS_REVEAL.stats && MENTORS_REVEAL.stats.length > 0 ? (
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                {MENTORS_REVEAL.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="rounded-2xl p-6"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="text-4xl sm:text-5xl font-extrabold leading-none mb-2"
                      style={{
                        fontFamily: "var(--font-sora), sans-serif",
                        color: "var(--accent)",
                      }}
                    >
                      <AnimatedCounter
                        value={stat.number}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            ) : null}
          </motion.div>

          {/* Right — mentors photos */}
          <motion.div
            className="flex gap-4 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideRight}
          >
            {[MENTORS.paullo, MENTORS.isabela].map((mentor) => (
              <div key={mentor.name} className="flex flex-col items-center gap-3 flex-1">
                <div
                  className="w-full rounded-2xl overflow-hidden relative"
                  style={{
                    aspectRatio: "3/4",
                    maxWidth: "220px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <img
                    src={mentor.photo}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <p
                    className="text-sm font-bold tracking-wider"
                    style={{
                      fontFamily: "var(--font-sora), sans-serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {mentor.name.toUpperCase()}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    {mentor.roleShort}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
