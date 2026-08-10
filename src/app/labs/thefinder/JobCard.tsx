"use client";

import { motion } from "framer-motion";

import { Job } from "./types";

interface Props {
  job: Job;
  selected: boolean;
  onClick: () => void;
}

export default function JobCard({
  job,
  selected,
  onClick,
}: Props) {

  return (

    <motion.button

      whileHover={{
        y: -5,
      }}

      onClick={onClick}

      className={`w-full rounded-[28px] border p-5 text-left transition ${
        selected
          ? "border-[var(--primary)] bg-[var(--glass-bg)]"
          : "border-[var(--glass-border)] bg-[var(--glass-bg)]"
      }`}

    >

      <div className="flex justify-between">

        <div>

          <h3 className="text-lg font-bold">

            {job.title}

          </h3>

          <p className="mt-1 text-[var(--primary)]">

            {job.company}

          </p>

        </div>

        {job.featured && (

          <span className="h-fit rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-bold text-black">

            ★

          </span>

        )}

      </div>

      <div className="mt-5 flex flex-wrap gap-2">

        <span className="rounded-full border border-[var(--glass-border)] px-3 py-1 text-xs">

          {job.category}

        </span>

        <span className="rounded-full border border-[var(--glass-border)] px-3 py-1 text-xs">

          {job.type}

        </span>

      </div>

      <div className="mt-5 flex items-center justify-between text-sm opacity-70">

        <span>

          📍 {job.location}

        </span>

        <span>

          {job.posted}

        </span>

      </div>

    </motion.button>

  );

}