"use client";

import { motion } from "framer-motion";

interface Props {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export default function ConnectionLine({
  x1,
  y1,
  x2,
  y2,
}: Props) {
  return (
    <>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="var(--glass-border)"
        strokeWidth="2"
      />

      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#fd9e04"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 10"
        animate={{
          strokeDashoffset: [-18, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.1,
          ease: "linear",
        }}
      />
    </>
  );
}