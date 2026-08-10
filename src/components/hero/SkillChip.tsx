"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

import { floating } from "@/lib/animations";

interface Props {
  title: string;
  icon: LucideIcon;
  x: string;
  y: string;
  delay: number;
}

export default function SkillChip({
  title,
  icon: Icon,
  x,
  y,
}: Props) {
  return (
    <motion.div
      {...(floating as any)}
      className="
  absolute
  hidden
  lg:flex
  items-center
  rounded-full
  border
  border-[var(--glass-border)]
  bg-[var(--glass-bg)]
  px-4
  py-2
  text-sm
  font-medium
  whitespace-nowrap
  backdrop-blur-xl
  shadow-[0_8px_30px_rgba(0,0,0,.12)]
  transition-all
  duration-300
  hover:border-[var(--primary)]
  "
      style={{
        left: x,
        top: y,
      }}
      whileHover={{
        scale: 1.08,
        y: -5,
        borderColor: "#fd9e04",
      }}
    >
      <div className="flex items-center gap-2">
        <Icon size={16} />
        <span>{title}</span>
      </div>
    </motion.div>
  );
}