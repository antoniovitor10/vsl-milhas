"use client";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { ReactNode } from "react";

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function SectionWrapper({ id, className = "", children }: Props) {
  return (
    <motion.section
      id={id}
      className={`relative w-full ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
}
