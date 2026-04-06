"use client";
import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQV2() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            setTimeout(() => el.classList.add("is-visible"), parseInt(el.dataset.delay ?? "0"));
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".v2-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={ref}
      style={{
        background: "#F2F1EC",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 3rem)",
        borderTop: "1.5px solid #D0CEBF",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div className="v2-reveal" data-delay="0" style={{ marginBottom: "3.5rem" }}>
          <p className="v2-label" style={{ marginBottom: "1rem" }}>— TIRE SUAS DÚVIDAS</p>
          <h2
            className="v2-h-section"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            DÚVIDAS<br />FREQUENTES
          </h2>
        </div>

        <div className="v2-reveal" data-delay="100">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="v2-faq-item"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                  padding: "1.5rem 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#111111",
                    lineHeight: 1.4,
                  }}
                >
                  {item.question}
                </span>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: open === i ? "#FFEE58" : "#111111",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.2s",
                  }}
                >
                  {open === i
                    ? <Minus size={16} color="#111111" />
                    : <Plus size={16} color="#FAFAF7" />
                  }
                </div>
              </button>

              <div
                style={{
                  maxHeight: open === i ? "600px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 300,
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: "#555555",
                    paddingBottom: "1.5rem",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
