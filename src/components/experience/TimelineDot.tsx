"use client";

import { motion } from "framer-motion";

export default function TimelineDot() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      animate={{
        scale: [1, 1.15, 1],
        boxShadow: [
          "0 0 0 rgba(253,158,4,0)",
          "0 0 22px rgba(253,158,4,.7)",
          "0 0 0 rgba(253,158,4,0)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="relative z-30 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white dark:border-neutral-900 bg-[#fd9e04]"
    >
      <div className="h-2.5 w-2.5 rounded-full bg-white dark:bg-black" />
    </motion.div>
  );
}