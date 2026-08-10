"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Glass from "../ui/Glass";
import TiltCard from "../tilt/TiltCard";

import { fadeUp } from "@/lib/animations";
import focusData from "./focusData";

import {
  glassCard,
  iconBox,
  sectionTitle,
  bodyText,
} from "@/styles/classes";

export default function ChooseFocus() {
  return (
    <section
      id="career-paths"
      className="w-full overflow-x-clip py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid w-full min-w-0 grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {focusData.map((focus) => {
            const Icon = focus.icon;

            return (
              <motion.div
                key={focus.title}
                {...fadeUp}
                className="w-full min-w-0 max-w-full"
              >
                <Link
                  href={focus.href}
                  className="block w-full min-w-0 max-w-full"
                >
                  <TiltCard className="h-full min-h-[360px] w-full max-w-full sm:min-h-[380px]">
                    <Glass
                      className={`${glassCard} relative h-full min-h-[360px] w-full max-w-full overflow-hidden sm:min-h-[380px]`}
                    >
                      {/* SPINNING RINGS */}
                      <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="ring-spin absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[var(--ring-color)]" />

                        <div
                          className="ring-spin absolute -right-8 top-10 h-40 w-40 rounded-full border border-[var(--ring-color)]"
                          style={{
                            animationDelay: "2s",
                          }}
                        />
                      </div>

                      {/* PARTICLES */}
                      <div className="pointer-events-none absolute right-10 top-10">
                        <div className="particle particle-1" />
                        <div className="particle particle-2" />
                        <div className="particle particle-3" />
                      </div>

                      {/* CARD CONTENT */}
                      <div className="relative z-10 flex h-full min-h-[360px] flex-col sm:min-h-[380px]">
                        {/* ICON */}
                        <motion.div
                          whileHover={{
                            rotate: 10,
                            scale: 1.1,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                          className={iconBox}
                        >
                          {Icon && (
                            <Icon
                              size={30}
                              aria-hidden="true"
                              focusable="false"
                              className="text-[var(--primary)]"
                            />
                          )}
                        </motion.div>

                        {/* TITLE */}
                        <h3 className={sectionTitle}>{focus.title}</h3>

                        {/* DESCRIPTION */}
                        <p className={bodyText}>{focus.subtitle}</p>

                        {/* SPACER */}
                        <div className="flex-1" />

                        {/* CTA */}
                        <div className="mt-10 flex items-center gap-3 font-semibold text-[var(--primary)]">
                          <span>{focus.button}</span>

                          <motion.span
                            aria-hidden="true"
                            animate={{
                              x: [0, 6, 0],
                            }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            →
                          </motion.span>
                        </div>
                      </div>
                    </Glass>
                  </TiltCard>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}