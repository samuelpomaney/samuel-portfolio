"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
}

export default function TerminalLine({ text }: Props) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .25 }}
      className="text-sm leading-7"
    >
      <span className="text-[var(--primary)]">
        spydex@network %
      </span>{" "}
      {text}
    </motion.p>
  );
}