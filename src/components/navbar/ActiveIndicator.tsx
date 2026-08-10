"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  active: boolean;
}

export default function ActiveIndicator({
  active,
}: Props) {
  return (
    <AnimatePresence mode="wait">
      {active && (
        <motion.div
          layoutId="active-nav"
          initial={{
            opacity: 0,
            scaleX: 0.4,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          exit={{
            opacity: 0,
            scaleX: 0.4,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
          className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[var(--primary)]"
        />
      )}
    </AnimatePresence>
  );
}