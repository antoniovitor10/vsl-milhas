"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { SOCIAL_PROOF } from "@/lib/constants";
import { fadeUp, stagger, scaleIn, viewportOnce } from "@/lib/animations";
import AnimatedCounter from "./AnimatedCounter";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SocialProof() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector("[data-card]")?.clientWidth ?? 320;
      const scrollAmount = cardWidth + 24;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="depoimentos"
      className="relative py-20 px-4"
      style={{ background: "var(--bg-primary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.08), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
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

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(37,99,235,0.9)",
              color: "#fff",
              border: "1px solid rgba(59,130,246,0.5)",
            }}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin pb-4 px-1"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(37,99,235,0.4) transparent",
            }}
          >
            {SOCIAL_PROOF.testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                data-card
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="snap-center flex-shrink-0 w-72 sm:w-80 rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(37,99,235,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-full relative"
                  style={{ aspectRatio: "9/16", maxHeight: "480px" }}
                >
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                    style={{ background: "#000" }}
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
                    Seu navegador não suporta vídeo.
                  </video>
                </div>

                <div className="p-4 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{
                      background: "rgba(37,99,235,0.15)",
                      color: "var(--accent)",
                      border: "1px solid rgba(37,99,235,0.3)",
                    }}
                  >
                    {testimonial.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-sora), sans-serif",
                      }}
                    >
                      {testimonial.name}
                    </p>
                    {testimonial.localidade && (
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {testimonial.localidade}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(37,99,235,0.9)",
              color: "#fff",
              border: "1px solid rgba(59,130,246,0.5)",
            }}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2 md:hidden">
          <span
            className="text-xs font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            ← Deslize para ver mais →
          </span>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(37, 99, 235, 0.05);
          border-radius: 9999px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(37, 99, 235, 0.4);
          border-radius: 9999px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(37, 99, 235, 0.6);
        }
      `}</style>
    </section>
  );
}
