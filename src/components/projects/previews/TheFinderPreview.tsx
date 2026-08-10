"use client";

import { motion } from "framer-motion";

const jobs = [
  "Frontend Developer",
  "Cybersecurity Analyst",
  "Marketing Specialist",
];

export default function TheFinderPreview() {

  return (

    <div className="h-[260px] rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4">

      <div className="mb-4 flex h-10 items-center rounded-full border border-[var(--glass-border)] bg-[var(--background)] px-4 text-xs opacity-60">

        🔍 Search jobs...

      </div>

      <div className="space-y-3">

        {jobs.map((job, index) => (

          <motion.div
            key={job}
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              duration: 2,
              delay: index * .2,
              repeat: Infinity,
            }}
            className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-3"
          >

            <div className="flex items-center justify-between">

              <span className="text-xs font-medium">

                {job}

              </span>

              <span className="rounded-full bg-[var(--primary)] px-2 py-1 text-[10px] font-semibold text-black">

                OPEN

              </span>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  );

}