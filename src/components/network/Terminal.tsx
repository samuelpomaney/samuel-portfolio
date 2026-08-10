"use client";

import { useEffect, useState } from "react";

const commands = [
  {
    command: "$ ssh production-server",
    output: "✓ Secure connection established",
  },
  {
    command: "$ systemctl status nginx",
    output: "✓ Service running",
  },
  {
    command: "$ ufw status",
    output: "✓ Firewall active",
  },
  {
    command: "$ docker ps",
    output: "✓ Containers healthy",
  },
  {
    command: "$ fail2ban-client status",
    output: "✓ Protection enabled",
  },
  {
    command: "$ netstat -tulpn",
    output: "✓ Network ports verified",
  },
];

export default function Terminal() {
  const [commandIndex, setCommandIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const current = commands[commandIndex];

    let frameId = 0;
    let startTime = 0;
    let outputTimer: number | undefined;
    let nextCommandTimer: number | undefined;

    const typingDuration = current.command.length * 55;

    setTypedCommand("");
    setShowOutput(false);

    const type = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / typingDuration, 1);

      const characterCount = Math.floor(
        progress * current.command.length
      );

      setTypedCommand(
        current.command.slice(0, characterCount)
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(type);
        return;
      }

      setTypedCommand(current.command);

      outputTimer = window.setTimeout(() => {
        setShowOutput(true);
      }, 300);

      nextCommandTimer = window.setTimeout(() => {
        setCommandIndex(
          (value) => (value + 1) % commands.length
        );
      }, 2800);
    };

    frameId = requestAnimationFrame(type);

    return () => {
      cancelAnimationFrame(frameId);

      if (outputTimer !== undefined) {
        window.clearTimeout(outputTimer);
      }

      if (nextCommandTimer !== undefined) {
        window.clearTimeout(nextCommandTimer);
      }
    };
  }, [commandIndex]);

  return (
    <div className="relative mt-10 overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl">
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-20
        "
      >
        <div
          className="
            absolute
            left-0
            right-0
            h-10
            bg-gradient-to-b
            from-transparent
            via-[var(--primary)]
            to-transparent
          "
          style={{
            animation: "terminalScan 5s linear infinite",
          }}
        />
      </div>

      <div className="flex items-center gap-2 border-b border-[var(--glass-border)] px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      <div className="space-y-4 p-5 font-mono text-sm">
        <p className="text-[var(--primary)]">
          {typedCommand}
          <span className="animate-pulse">|</span>
        </p>

        {showOutput && (
          <p className="text-green-500">
            {commands[commandIndex].output}
          </p>
        )}
      </div>
    </div>
  );
}