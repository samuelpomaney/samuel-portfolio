"use client";

import { motion } from "framer-motion";

interface Props {
  x: number;
  y: number;
  label: string;
  delay?: number;
}

export default function NetworkNode({
  x,
  y,
  label,
  delay = 0,
}: Props) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay,
        duration: 0.45,
      }}
    >
      {/* Outer Glow */}

      <motion.circle
        cx={x}
        cy={y}
        r="24"
        fill="rgba(253,158,4,.10)"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Main Circle */}

      <circle
        cx={x}
        cy={y}
        r="16"
        fill="var(--background)"
        stroke="var(--primary)"
        strokeWidth="2"
      />

      {/* Inner Dot */}

      <motion.circle
        cx={x}
        cy={y}
        r="5"
        fill="#fd9e04"
        animate={{
          opacity: [1, 0.4, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
      />

      {/* Label */}

      <text
        x={x}
        y={y + 42}
        textAnchor="middle"
        fill="var(--foreground)"
        fontSize="12"
        fontWeight="600"
      >
        {label}
      </text>
    </motion.g>
  );
}