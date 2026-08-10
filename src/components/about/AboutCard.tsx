"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

import Glass from "../ui/Glass";
import TiltCard from "../tilt/TiltCard";

import { fadeUp } from "@/lib/animations";

interface Props {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export default function AboutCard({
  icon: Icon,
  title,
  subtitle,
}: Props) {
  return (
    <motion.div {...fadeUp}>
      <TiltCard>
        <Glass className="h-full rounded-[28px] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 transition-all duration-500 hover:border-[var(--primary)] hover:shadow-[0_20px_60px_rgba(253,158,4,.15)]">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)]">
            <Icon
              size={26}
              aria-hidden="true"
              focusable="false"
              className="text-[var(--primary)]"
            />
          </div>

          <h3 className="text-xl font-bold">
            {title}
          </h3>

          <p className="mt-3 leading-7 text-[var(--muted)]">
            {subtitle}
          </p>
        </Glass>
      </TiltCard>
    </motion.div>
  );
}