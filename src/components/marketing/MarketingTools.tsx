"use client";

import { motion } from "framer-motion";

import { marketingTools } from "./marketingToolsData";

export default function MarketingTools() {
  return (
    <div className="mt-14">

      <p className="
        mb-8
        text-xs
        font-bold
        uppercase
        tracking-[0.3em]
        text-[var(--primary)]
      ">
        Tools I Use
      </p>

      <div className="space-y-8">

        {marketingTools.map((group) => (

          <div key={group.category}>

            <h3 className="
              mb-4
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]
              text-white
            ">
              {group.category}
            </h3>

            <div className="
              grid
              gap-4
              sm:grid-cols-2
              md:grid-cols-3
              xl:grid-cols-4
            ">

              {group.tools.map((tool, index) => {

                const Icon = tool.icon;

                return (

                  <motion.div
                    key={tool.name}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-[var(--glass-border)]
                      bg-[var(--glass-bg)]
                      p-5
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[var(--primary)]
                    "
                  >

                    <Icon
                      size={22}
                      aria-hidden="true"
                      focusable="false"
                      className="
                      text-[var(--primary)]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                      "
                    />

                    <span className="font-medium">
                      {tool.name}
                    </span>

                  </motion.div>

                );
              })}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}