"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import terminalLogs from "./terminalLogs";
import TerminalLine from "./TerminalLine";

export default function Terminal() {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setIndex((prev) => {

        if (prev >= terminalLogs.length) {
          return 0;
        }

        return prev + 1;

      });

    }, 900);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="overflow-hidden rounded-[32px] border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-2xl">

      {/* macOS Header */}

      <div className="flex items-center justify-between border-b border-[var(--glass-border)] px-5 py-4">

        <div className="flex gap-2">

          <div className="h-3 w-3 rounded-full bg-red-500"/>

          <div className="h-3 w-3 rounded-full bg-yellow-500"/>

          <div className="h-3 w-3 rounded-full bg-green-500"/>

        </div>

        <span className="text-sm font-medium text-[var(--muted)]">

          network-monitor.sh

        </span>

        <div className="w-14"/>

      </div>

      {/* Body */}

      <div className="h-[330px] overflow-hidden p-6 font-mono">

        {terminalLogs.slice(0, index).map((log) => (

          <TerminalLine
            key={log}
            text={log}
          />

        ))}

        <motion.span

          animate={{
            opacity: [1, 0],
          }}

          transition={{
            repeat: Infinity,
            duration: .8,
          }}

          className="inline-block h-5 w-2 bg-[var(--primary)]"

        />

      </div>

    </div>

  );

}