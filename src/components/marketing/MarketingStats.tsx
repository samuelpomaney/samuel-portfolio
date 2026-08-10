"use client";

import { motion } from "framer-motion";
import PremiumCard from "../ui/PremiumCard";

const stats = [
  {
    title: "YouTube",
    badge: "#ff3030",
    heading: "From 96 to 4,200 Subscribers",
    subtitle: "Organic Growth • Zero Paid Ads",
    values: [
      ["2.2M", "Top Video"],
      ["2M+", "Views"],
      ["673K", "Short"],
    ],
    footer: "+4,275% subscriber growth in under a year",
  },
  {
    title: "Instagram",
    badge: "#ff4e93",
    heading: "From 32 to 8,968 Followers",
    subtitle: "Reels & Content Growth",
    values: [
      ["2.8M", "Views"],
      ["1.4M", "Views"],
      ["1.3M", "Views"],
    ],
    footer: "2.8M+ Reel proves organic reach still exists.",
  },
  {
    title: "Snapchat",
    badge: "#ffe600",
    heading: "From 48 to 15.5K Followers",
    subtitle: "Creator Growth",
    values: [
      ["1.6M", "Views"],
      ["641K", "Views"],
      ["568K", "Views"],
    ],
    footer: "Growing international audience.",
  },
  {
    title: "Facebook",
    badge: "#3b82f6",
    heading: "835K Views in 28 Days",
    subtitle: "Creator Dashboard",
    values: [
      ["835K", "Views"],
      ["17.4K", "Reach"],
      ["1,393", "Shares"],
    ],
    footer: "835K views generated organically.",
  },
];

export default function MarketingStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {stats.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          <PremiumCard>
            <div
              className="inline-flex rounded-full px-3 py-1 text-xs font-bold"
              style={{
                color: card.badge,
                background: `${card.badge}22`,
              }}
            >
              {card.title}
            </div>

            <h3 className="mt-4 text-xl font-black">
              {card.heading}
            </h3>

            <p className="mt-2 text-sm text-[var(--muted)]">
              {card.subtitle}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {card.values.map(([v, l], index) => (
                <div
                  key={`${l}-${index}`}
                  className="rounded-xl border border-[var(--glass-border)] p-3 text-center"
                >
                  <div className="text-xl font-black text-[var(--primary)]">
                    {v}
                  </div>

                  <div className="mt-1 text-xs text-[var(--muted)]">
                    {l}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-[var(--primary)]/30 bg-[var(--primary)]/10 p-3 text-sm font-semibold text-[var(--primary)]">
              {card.footer}
            </div>
          </PremiumCard>
        </motion.div>
      ))}
    </div>
  );
}