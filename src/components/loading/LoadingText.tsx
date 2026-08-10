"use client";

import { useEffect, useState } from "react";

const messages = [
  "Initializing SPYDEX...",
  "Loading Security Modules...",
  "Connecting Network...",
  "Loading Interface...",
  "Almost Ready...",
];

export default function LoadingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= messages.length - 1) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIndex((prev) => Math.min(prev + 1, messages.length - 1));
    }, 700);

    return () => window.clearTimeout(timer);
  }, [index]);

  return (
    <div>
      <p className="font-mono text-lg text-[var(--primary)]">
        {messages[index]}
      </p>
    </div>
  );
}