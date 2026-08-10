"use client";

import { motion } from "framer-motion";

interface Props {
  path: string;
  delay?: number;
  duration?: number;
}

export default function Packet({
  path,
  delay = 0,
  duration = 4,
}: Props) {
  return (
    <motion.circle
      r="4"
      fill="var(--primary)"
      initial={{
        offsetDistance: "0%",
      }}
      animate={{
        offsetDistance: "100%",
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      style={{
        offsetPath: `path("${path}")`,
      }}
    />
  );
}