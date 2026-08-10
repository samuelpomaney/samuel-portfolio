"use client";

import { motion } from "framer-motion";

export default function CyberGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[32px]">

      {/* Vertical Lines */}

      {Array.from({ length: 16 }).map((_, index) => (
        <motion.div
          key={`v-${index}`}
          className="absolute top-0 bottom-0 w-px bg-[var(--glass-border)]"
          style={{
            left: `${index * 6.5}%`,
          }}
          animate={{
            opacity: [0.08, 0.22, 0.08],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}

      {/* Horizontal Lines */}

      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={`h-${index}`}
          className="absolute left-0 right-0 h-px bg-[var(--glass-border)]"
          style={{
            top: `${index * 8.5}%`,
          }}
          animate={{
            opacity: [0.08, 0.22, 0.08],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.15,
          }}
        />
      ))}

    </div>
  );
}