import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SITE } from "@/lib/constants";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={manrope.variable}
      style={{
        fontFamily: "var(--font-manrope), sans-serif",
        background: "#FAFAF7",
        color: "#111111",
      }}
    >
      {children}
    </div>
  );
}
