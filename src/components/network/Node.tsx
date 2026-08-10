"use client";

import { motion } from "framer-motion";

interface Props {
  x: number;
  y: number;
}

export default function Node({
  x,
  y,
}: Props) {
  return (
    <>
      <motion.circle
        cx={x}
        cy={y}
        r="16"
        fill="var(--primary)"
        opacity={0.12}
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.circle
        cx={x}
        cy={y}
        r="24"
        fill="var(--primary)"
        opacity={0.05}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.04, 0.12, 0.04],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <circle
        cx={x}
        cy={y}
        r="7"
        fill="white"
      />

      <circle
        cx={x}
        cy={y}
        r="5"
        fill="var(--primary)"
      />
    </>
  );
}