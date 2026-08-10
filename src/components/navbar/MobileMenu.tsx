"use client";

import { motion, AnimatePresence } from "framer-motion";

import NavLinks from "./NavLinks";

interface Props {
  open: boolean;
  close: () => void;
  activeSection: string | null;
}

export default function MobileMenu({
  open,
  close,
  activeSection,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -12,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -12,
            scale: 0.98,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className="absolute left-0 right-0 top-[calc(100%+10px)] overflow-hidden rounded-[28px] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5 shadow-2xl backdrop-blur-3xl md:hidden"
        >
          <div className="flex w-full flex-col">
            <NavLinks
              mobile
              activeSection={activeSection}
              onNavigate={close}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}