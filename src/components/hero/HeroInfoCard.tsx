"use client";

import { motion } from "framer-motion";
import { floating } from "@/lib/animations";

const HeroInfoCard = () => {
  return (
    <motion.div
      {...(floating as any)}
      initial={false}
      className="
        absolute
        bottom-2
        left-1/2
        z-20
        w-72
        max-w-[90%]
        -translate-x-1/2

        sm:-left-[30px]
        sm:bottom-8
        sm:translate-x-0

        rounded-3xl
        border
        border-[var(--glass-border)]
        bg-[var(--glass-bg)]
        p-5
        shadow-2xl
        backdrop-blur-2xl
      "
    >
      <span className="text-sm font-medium">
        Available for Opportunities
      </span>

      <p className="text-xl font-bold">
        Samuel Dziedzorm Pomaney Yaw
      </p>

      <p className="mt-2 text-sm opacity-80">
        Remote.
        <br />
        Onsite.
        <br />
        Hybrid.
      </p>
    </motion.div>
  );
};

export default HeroInfoCard;