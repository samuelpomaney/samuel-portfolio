"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const events = [
  "TLS 1.3 handshake completed",
  "Firewall policy updated",
  "Database synchronised",
  "Client authenticated",
  "API request validated",
  "Secure session established",
  "Linux server heartbeat received",
  "Network route verified",
];

export default function ActivityFeed() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleVisibility = () => {
      setVisible(
        document.visibilityState === "visible"
      );
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const timer = window.setTimeout(() => {
      setIndex(
        (prev) => (prev + 1) % events.length
      );
    }, 2500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [index, visible]);

  return (
    <div>
      <div className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
        Live Activity
      </div>

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="flex items-center gap-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-2.5"
      >
        <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />

        <span className="text-sm text-[var(--muted)]">
          {events[index]}
        </span>
      </motion.div>
    </div>
  );
}