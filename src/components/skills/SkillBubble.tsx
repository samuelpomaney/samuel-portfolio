"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  title: string;
  items: string[];
}

export default function SkillBubble({ title, items }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.button
      type="button"
      aria-expanded={expanded}
      onClick={() => setExpanded((prev) => !prev)}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.08,
        rotate: [-1, 1, 0],
        y: -12,
      }}
      onHoverStart={() => setExpanded(true)}
      onHoverEnd={() => setExpanded(false)}
      className="group relative cursor-pointer overflow-hidden rounded-[30px] border border-[var(--glass-border)] bg-[var(--glass-bg)] px-8 py-6 text-left backdrop-blur-2xl transition-all duration-500"
    >
      <motion.div
        animate={{
          opacity: expanded ? 1 : 0.15,
          scale: expanded ? 1.4 : 0.8,
        }}
        className="absolute inset-0 rounded-full bg-[#fd9e04]/20 blur-3xl"
      />

      <div className="relative z-10">
        <h3 className="text-lg font-bold">
          {title}
        </h3>

        <motion.div
          initial={false}
          animate={{
            height: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={{
            duration: 0.35,
          }}
          className="overflow-hidden"
        >
          <div className="mt-5 space-y-3">
            {items.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: expanded ? 1 : 0,
                  x: expanded ? 0 : -20,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="flex items-center gap-3 text-sm"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.25,
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-[#fd9e04]"
                />

                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.button>
  );
}