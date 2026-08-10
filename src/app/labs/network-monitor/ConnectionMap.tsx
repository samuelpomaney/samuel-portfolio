"use client";

import { motion } from "framer-motion";

interface Props {
  path: string;
  delay?: number;
}

export default function DataPacket({
  path,
  delay = 0,
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
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        offsetPath: `path("${path}")`,
      }}
    />
  );
}