"use client";
import { motion } from "framer-motion";
import {
  Compass,
  CreditCard,
  Target,
  ArrowLeftRight,
  Globe,
  Gem,
} from "lucide-react";
import { MODULES } from "@/lib/constants";
import { fadeUp, stagger, scaleIn, viewportOnce } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass size={26} />,
  CreditCard: <CreditCard size={26} />,
  Target: <Target size={26} />,
  ArrowLeftRight: <ArrowLeftRight size={26} />,
  Globe: <Globe size={26} />,
  Gem: <Gem size={26} />,
};

export default function ModulesGrid() {
  return (
    <section
      id="modulos"
      className="relative py-20 px-4"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {MODULES.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            {MODULES.subtitle}
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          {MODULES.items.map((mod, i) => (
            <motion.div
              key={mod.title}
              variants={scaleIn}
              className="card-module rounded-2xl p-7 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(245,158,11,0.1)",
                    color: "var(--accent)",
                    border: "1px solid rgba(245,158,11,0.2)",
                  }}
                >
                  {iconMap[mod.icon]}
                </div>
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: "var(--text-muted)" }}
                >
                  MÓDULO {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="text-base font-bold"
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                {mod.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {mod.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
