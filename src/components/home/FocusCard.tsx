"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

import Glass from "../ui/Glass";
import TiltCard from "../tilt/TiltCard";

import { fadeUp } from "@/lib/animations";

import {
  glassCard,
  iconBox,
  sectionTitle,
  bodyText,
} from "@/styles/classes";

type Props = {
  title: string;
  subtitle: string;
  button: string;
  href: string;
  icon: LucideIcon;
};

export default function FocusCard({
  title,
  subtitle,
  button,
  href,
  icon: Icon,
}: Props) {
  return (
    <motion.div {...fadeUp}>
      <Link
        href={href}
        className="block h-full"
      >
        <TiltCard className="h-full">
          <Glass className={`${glassCard} h-full`}>

            {/* Animated Background */}

            {/* Decorative Rings */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">

              <div className="ring-spin absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[var(--ring-color)]"/>

              <div className="ring-spin absolute -right-8 top-10 h-40 w-40 rounded-full border border-[var(--ring-color)]"
                style={{
                  animationDelay: "2s",
                }}
              />

            </div>

            {/* Floating Particles */}

            <div className="absolute right-10 top-10">

              <div className="particle particle-1" />

              <div className="particle particle-2" />

              <div className="particle particle-3" />

            </div>

            {/* Content */}

            <div className="relative z-10 flex h-full flex-col">

              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.3,
                }}
                className={iconBox}
              >
                <Icon
                  size={30}
                  className="text-[var(--primary)]"
                />
              </motion.div>

              {/* Title */}

              <h3 className={sectionTitle}>
                {title}
              </h3>

              {/* Description */}

              <p className={bodyText}>
                {subtitle}
              </p>

              {/* Spacer */}

              <div className="flex-1" />

              {/* CTA */}

              <div className="mt-10 flex items-center gap-3 font-semibold text-[var(--primary)]">

                <span>
                  {button}
                </span>

                <motion.span
                  animate={{
                    x: [0, 6, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
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
}