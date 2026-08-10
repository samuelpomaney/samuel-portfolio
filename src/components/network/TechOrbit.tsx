"use client";

import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Linux",
  "Networking",
  "Cybersecurity",
  "SQL",
  "Git",
];

export default function TechOrbit() {
  return (
    <div className="relative mx-auto h-[320px] w-[320px]">

      {/* rotating ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >

        {skills.map((skill, index) => {

          const angle = (360 / skills.length) * index;
          const radius = 125;

          const x =
            Math.cos((angle * Math.PI) / 180) * radius;

          const y =
            Math.sin((angle * Math.PI) / 180) * radius;

          return (

            <motion.div
              key={skill}
              whileHover={{
                scale: 1.1,
              }}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px - 42px)`,
                top: `calc(50% + ${y}px - 18px)`,
              }}
            >

              <div className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2 text-sm font-medium backdrop-blur-xl">

                {skill}

              </div>

            </motion.div>

          );

        })}

      </motion.div>

      {/* centre */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--primary)] bg-[var(--glass-bg)] text-center shadow-[0_0_40px_rgba(253,158,4,.35)] backdrop-blur-xl"
      >

        <span className="font-bold">
          SPYDEX
        </span>

      </motion.div>

    </div>
  );
}