"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  open: boolean;
  onClick: () => void;
}

export default function MenuButton({
  open,
  onClick,
}: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      aria-label="Toggle Menu"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl transition hover:border-[var(--primary)] md:hidden"
    >
      {open ? (
        <X size={22} />
      ) : (
        <Menu size={22} />
      )}
    </motion.button>
  );
}