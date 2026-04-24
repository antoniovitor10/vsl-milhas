"use client";
import { motion } from "framer-motion";
import { Plane, CreditCard, MapPin } from "lucide-react";
import { PAIN } from "@/lib/constants";
import { fadeUp, stagger, scaleIn, viewportOnce } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane size={28} />,
  CreditCard: <CreditCard size={28} />,
  MapPin: <MapPin size={28} />,
};

export default function PainSection() {
  return (
    <section
      id="dor"
      className="relative py-20 px-4"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {PAIN.title}
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          {PAIN.cards.map((card) => (
            <motion.div
              key={card.title}
              variants={scaleIn}
              className="card-module rounded-2xl p-8 flex flex-col gap-4"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(37,99,235,0.12)",
                  color: "var(--accent)",
                  border: "1px solid rgba(37,99,235,0.2)",
                }}
              >
                {iconMap[card.icon]}
              </div>
              <h3
                className="text-xl font-bold"
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition quote */}
        <motion.div
          className="mt-14 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p
            className="text-lg sm:text-xl md:text-2xl italic font-medium max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--accent)" }}
          >
            "{PAIN.transition}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
