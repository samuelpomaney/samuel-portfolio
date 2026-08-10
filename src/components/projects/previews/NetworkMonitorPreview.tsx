"use client";

import { motion } from "framer-motion";

export default function NetworkMonitorPreview() {

  const bars = [55, 90, 70, 45, 100, 80, 65];

  return (

    <div className="flex h-[260px] items-end justify-center gap-3 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6">

      {bars.map((height, index) => (

        <motion.div
          key={index}
          initial={false}
          animate={{
            scaleY: [1, 1.35, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * .15,
            ease: "easeInOut",
          }}
          style={{
            height,
            transformOrigin: "bottom",
          }}
          className="w-5 rounded-full bg-[var(--primary)]"
        />

      ))}

    </div>

  );

}