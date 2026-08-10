"use client";

import { motion } from "framer-motion";
import PremiumCard from "../ui/PremiumCard";
import TimelineDot from "./TimelineDot";
import { fadeUp } from "@/lib/animations";

interface Props {
  item: {
    year: string;
    title: string;
    description: string;
    tags: string[];
  };
  reverse?: boolean;
}

export default function TimelineItem({ item, reverse = false }: Props) {
  return (
    <motion.div
      {...fadeUp}
      className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]"
    >
      {!reverse ? (
        <>
          <PremiumCard className="group p-7 transition-all duration-500 hover:scale-[1.02]">
            <span className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
              {item.year}
            </span>

            <h3 className="mt-3 text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-4 leading-8 text-[var(--muted)]">
              {item.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-1 text-sm transition-colors duration-300 hover:border-[#fd9e04] hover:text-[#fd9e04]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </PremiumCard>

          <TimelineDot />

          <div />
        </>
      ) : (
        <>
          <div />

          <TimelineDot />

          <PremiumCard className="group p-7 transition-all duration-500 hover:scale-[1.02]">
            <span className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
              {item.year}
            </span>

            <h3 className="mt-3 text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-4 leading-8 text-[var(--muted)]">
              {item.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-1 text-sm transition-colors duration-300 hover:border-[#fd9e04] hover:text-[#fd9e04]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </PremiumCard>
        </>
      )}
    </motion.div>
  );
}