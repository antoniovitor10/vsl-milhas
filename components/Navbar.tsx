"use client";
import { useEffect, useState } from "react";
import { PRODUCT } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.95)"
          : "rgba(10,10,10,0.7)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 lg:h-18">
          <a href="#hero" className="flex items-center">
            <img
              src="/logo.svg"
              alt={PRODUCT.name}
              className="h-14 md:h-16 w-auto mix-blend-screen"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
