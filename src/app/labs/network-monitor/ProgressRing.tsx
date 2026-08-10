"use client";

import { motion } from "framer-motion";

interface Props {
  value: number;
  label: string;
}

export default function ProgressRing({ value, label }: Props) {
  const circumference = 314;
  const offset = circumference - (value / 100) * circumference;

  return (
    <>
      <motion.circle
        cx="60"
        cy="60"
        r="50"
        stroke="var(--primary)"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        style={{
          rotate: -90,
          transformOrigin: "50% 50%",
        }}
      />

      <text
        x="60"
        y="58"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-current text-xl font-bold"
      >
        {value}%
      </text>

      <text
        x="60"
        y="78"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-current text-xs"
      >
        {label}
      </text>
    </>
  );
}