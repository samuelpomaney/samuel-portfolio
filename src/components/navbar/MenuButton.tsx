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
      type="button"
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl transition-colors hover:border-[var(--primary)] md:hidden"
    >
      {open ? <X size={21} /> : <Menu size={21} />}
    </motion.button>
  );
}