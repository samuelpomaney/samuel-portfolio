"use client";

import { useEffect, useState } from "react";

const items = [
  {
    label: "Firewall",
    value: "ONLINE",
  },
  {
    label: "TLS",
    value: "1.3",
  },
  {
    label: "Encryption",
    value: "AES-256",
  },
  {
    label: "Authentication",
    value: "MFA",
  },
];

export default function LiveStatus() {
  const [latency, setLatency] = useState(24);
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
      setLatency(
        22 + Math.floor(Math.random() * 7)
      );
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, [latency, visible]);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between border-b border-white/10 py-1"
        >
          <span className="opacity-70">
            {item.label}
          </span>

          <span className="font-semibold text-[var(--primary)]">
            {item.value}
          </span>
        </div>
      ))}

      <div className="flex items-center justify-between border-b border-white/10 py-1">
        <span className="opacity-70">
          Latency
        </span>

        <span className="font-semibold text-[var(--primary)]">
          {latency} ms
        </span>
      </div>

      <div className="flex items-center justify-between py-1">
        <span className="opacity-70">
          Uptime
        </span>

        <span className="font-semibold text-[var(--primary)]">
          99.98%
        </span>
      </div>
    </div>
  );
}