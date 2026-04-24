"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-20 px-4"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            DÚVIDAS FREQUENTES
          </motion.h2>

          <motion.div variants={stagger} className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "var(--bg-card)",
                  border: openIndex === i
                    ? "1px solid rgba(37,99,235,0.35)"
                    : "1px solid var(--border)",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span
                    className="text-sm sm:text-base font-semibold"
                    style={{
                      fontFamily: "var(--font-sora), sans-serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                    style={{ color: "var(--accent)" }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-6 pb-5 text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
