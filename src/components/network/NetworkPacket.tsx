"use client";

import { motion } from "framer-motion";

interface Props {
  path: string;
  delay?: number;
}

export default function NetworkPacket({
  path,
  delay = 0,
}: Props) {
  return (
    <motion.circle
      r="5"
      fill="#fd9e04"
      filter="url(#packetGlow)"
    >
      <animateMotion
        dur="3s"
        begin={`${delay}s`}
        repeatCount="indefinite"
        path={path}
      />
    </motion.circle>
  );
}