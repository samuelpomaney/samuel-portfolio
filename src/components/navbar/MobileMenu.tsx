"use client";

import { motion } from "framer-motion";
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
    <>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.25,
          }}
          className="absolute left-4 right-4 top-[90px] rounded-[30px] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 shadow-2xl backdrop-blur-3xl md:hidden"
        >
          <NavLinks
            mobile
            activeSection={activeSection}
            onNavigate={close}
          />
        </motion.div>
      )}
    </>
  );
}