"use client";

import { motion } from "framer-motion";

export default function PortfolioPreview() {

  return (

    <div className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)]">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-44 w-44 rounded-full border border-[var(--primary)]/40"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-28 w-28 rounded-full border border-[var(--primary)]/30"
      />

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="z-10 rounded-full border border-[var(--primary)] bg-[var(--glass-bg)] px-5 py-5 text-sm font-bold backdrop-blur-xl"
      >

        SPYDEX

      </motion.div>

    </div>

  );

}