"use client";

import { motion } from "framer-motion";

const nodes = [
  {
    label: "Internet",
    icon: "🌍",
  },
  {
    label: "Firewall",
    icon: "🛡",
  },
  {
    label: "Authentication",
    icon: "🔐",
  },
  {
    label: "Linux",
    icon: "🖥",
  },
  {
    label: "Database",
    icon: "🗄",
  },
];

export default function NetworkAnimation() {
  return (
    <div className="flex flex-col items-center">
      {nodes.map((node, index) => (
        <div
          key={node.label}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                "0 0 0 rgba(253,158,4,0)",
                "0 0 28px rgba(253,158,4,.35)",
                "0 0 0 rgba(253,158,4,0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.4,
            }}
            className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-2xl backdrop-blur-xl"
          >
            {node.icon}
          </motion.div>

          <p className="mt-2 text-sm font-medium">
            {node.label}
          </p>

          {index !== nodes.length - 1 && (
            <div className="relative h-10 w-px bg-[var(--glass-border)]">
              <motion.div
                className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--primary)]"
                animate={{
                  y: [0, 40],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "linear",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}