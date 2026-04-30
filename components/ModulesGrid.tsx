"use client";
import { motion } from "framer-motion";
import {
  Compass,
  CreditCard,
  Target,
  ArrowLeftRight,
  Globe,
  Gem,
  Coins,
  Calculator,
  Plane,
  Gift,
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
  Coins: <Coins size={26} />,
  Calculator: <Calculator size={26} />,
  Plane: <Plane size={26} />,
  Gift: <Gift size={32} />,
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
                    background: "rgba(37,99,235,0.1)",
                    color: "var(--accent)",
                    border: "1px solid rgba(37,99,235,0.2)",
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

        {MODULES.bonus && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="mt-10"
          >
            <motion.div
              variants={scaleIn}
              className="relative rounded-3xl p-8 sm:p-10 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.08), rgba(37,99,235,0.08))",
                border: "2px solid rgba(245,158,11,0.4)",
                boxShadow:
                  "0 0 60px rgba(245,158,11,0.18), 0 0 0 1px rgba(245,158,11,0.15)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #F59E0B, transparent)",
                }}
              />
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(245,158,11,0.15)",
                    color: "#F59E0B",
                    border: "1px solid rgba(245,158,11,0.3)",
                  }}
                >
                  {iconMap[MODULES.bonus.icon]}
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <span
                    className="text-xs font-bold tracking-[0.2em]"
                    style={{ color: "#F59E0B" }}
                  >
                    ✦ {MODULES.bonus.label} ✦
                  </span>
                  <h3
                    className="text-xl sm:text-2xl font-extrabold tracking-tight"
                    style={{
                      fontFamily: "var(--font-sora), sans-serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {MODULES.bonus.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {MODULES.bonus.text}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
