"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface Props {
  active: boolean;
  onClick: () => void;
}

export default function WishlistButton({
  active,
  onClick,
}: Props) {
  return (
    <motion.button
      whileTap={{ scale: .9 }}
      whileHover={{ scale: 1.08 }}
      onClick={onClick}
      className={`absolute right-5 top-5 rounded-full p-2 transition ${
        active
          ? "bg-red-500 text-white"
          : "border border-[var(--glass-border)] bg-[var(--glass-bg)]"
      }`}
    >
      <Heart
        size={18}
        fill={active ? "currentColor" : "none"}
      />
    </motion.button>
  );
}