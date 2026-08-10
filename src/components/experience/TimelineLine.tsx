"use client";

import { motion } from "framer-motion";

export default function TimelineLine() {
  return (
    <>
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-[var(--glass-border)]" />

      <motion.div
        className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] rounded-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(253,158,4,1), rgba(253,158,4,.55), rgba(253,158,4,.15))",
        }}
        animate={{
          opacity: [.45, 1, .45],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute left-1/2 top-0 -translate-x-1/2 h-28 w-[7px] rounded-full blur-md"
        style={{
          background: "#fd9e04",
        }}
        animate={{
          y: ["0%", "420%", "850%", "1250%", "1700%"],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
}