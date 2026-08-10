"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LoadingLogo() {
  return (
    <motion.div
      initial={{
        scale: 0.6,
        opacity: 0,
        rotate: -25,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        rotate: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative z-10 flex h-24 w-24 items-center justify-center"
    >
      <Image
        src="/spydex-logo.svg"
        alt="SPYDEX"
        width={96}
        height={96}
        priority
        fetchPriority="high"
        className="h-24 w-24 object-contain"
      />
    </motion.div>
  );
}