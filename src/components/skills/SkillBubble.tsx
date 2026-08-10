"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  title: string;
  items: string[];
}

export default function SkillBubble({ title, items }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
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
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative cursor-pointer overflow-hidden rounded-[30px] border border-[var(--glass-border)] bg-[var(--glass-bg)] px-8 py-6 backdrop-blur-2xl transition-all duration-500"
    >
      <motion.div
        animate={{
          opacity: hovered ? 1 : .15,
          scale: hovered ? 1.4 : .8,
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
            height: hovered ? "auto" : 0,
            opacity: hovered ? 1 : 0,
          }}
          transition={{
            duration: .35,
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
                  opacity: hovered ? 1 : 0,
                  x: hovered ? 0 : -20,
                }}
                transition={{
                  delay: index * .08,
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
                    delay: index * .25,
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-[#fd9e04]"
                />

                {item}
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}