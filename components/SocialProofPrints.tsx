"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_PROOF_PRINTS } from "@/lib/constants";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { X } from "lucide-react";

export default function SocialProofPrints() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const navigate = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex =
      direction === "prev"
        ? (selectedImage - 1 + SOCIAL_PROOF_PRINTS.length) % SOCIAL_PROOF_PRINTS.length
        : (selectedImage + 1) % SOCIAL_PROOF_PRINTS.length;
    setSelectedImage(newIndex);
  };

  return (
    <section
      className="relative py-20 px-4"
      style={{
        background: "linear-gradient(180deg, var(--bg-primary) 0%, rgba(10,10,10,0.95) 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(37,99,235,0.06), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          Resultados reais de{" "}
          <span
            className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
          >
            pessoas reais
          </span>
        </motion.h2>

        <motion.p
          className="text-center mb-12 text-sm sm:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          style={{ color: "var(--text-muted)" }}
        >
          Prints de WhatsApp, Instagram e fotos dos nossos mentorados viajando pelo mundo
        </motion.p>

        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
          {SOCIAL_PROOF_PRINTS.map((print, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              className="break-inside-avoid cursor-pointer group relative rounded-xl overflow-hidden"
              style={{
                border: "1px solid rgba(37,99,235,0.15)",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onClick={() => openLightbox(i)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(37,99,235,0.5)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(37,99,235,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(37,99,235,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={print.src}
                alt={print.alt}
                className="w-full h-auto block transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                style={{
                  background: "rgba(37,99,235,0.3)",
                }}
              >
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  Ver mais
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-60 p-2 rounded-full transition-colors duration-200 hover:bg-white/10"
              style={{ color: "#fff" }}
              aria-label="Fechar"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("prev");
              }}
              className="absolute left-4 z-60 p-3 rounded-full transition-all duration-200 hover:scale-110 hidden sm:flex"
              style={{
                background: "rgba(37,99,235,0.8)",
                color: "#fff",
              }}
              aria-label="Anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("next");
              }}
              className="absolute right-4 z-60 p-3 rounded-full transition-all duration-200 hover:scale-110 hidden sm:flex"
              style={{
                background: "rgba(37,99,235,0.8)",
                color: "#fff",
              }}
              aria-label="Próximo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={SOCIAL_PROOF_PRINTS[selectedImage].src}
                alt={SOCIAL_PROOF_PRINTS[selectedImage].alt}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
                style={{
                  boxShadow: "0 0 60px rgba(37,99,235,0.3)",
                }}
              />
              <p
                className="text-center mt-4 text-sm"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {SOCIAL_PROOF_PRINTS[selectedImage].alt}
              </p>

              <a
                href="#oferta"
                onClick={closeLightbox}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-extrabold uppercase tracking-wide transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(37,211,102,0.9)",
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(37,211,102,0.4)",
                }}
              >
                Quero garantir minha vaga →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
