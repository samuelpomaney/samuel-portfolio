"use client";

import { motion } from "framer-motion";

export default function LoadingRing() {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ rotate: 360 }}
      transition={{
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      }}
      className="pointer-events-none absolute inset-0 rounded-full border-4 border-transparent border-r-[var(--primary)] border-t-[var(--primary)]"
    />
  );
}