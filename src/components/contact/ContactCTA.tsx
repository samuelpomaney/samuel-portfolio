"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {

  return (

    <div
      className="
        rounded-[34px]
        border
        border-[var(--glass-border)]
        bg-[var(--glass-bg)]
        p-10
      "
    >

      <span
        className="
          rounded-full
          bg-[var(--primary)]/10
          px-4
          py-2
          text-sm
          text-[var(--primary)]
        "
      >
        Let's Work Together
      </span>

      <h2
        className="
          mt-6
          text-5xl
          font-bold
          leading-tight
        "
      >
        Ready to build something amazing?
      </h2>

      <p
        className="
          mt-6
          max-w-xl
          leading-8
          text-[var(--muted)]
        "
      >
        Whether it's Website Development,
        cybersecurity, networking,
        digital growth or content strategy,
        I'd love to help bring your ideas to life.
      </p>

      <Link
        href="mailto:your@email.com"
        className="
          mt-10
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-[var(--primary)]
          px-8
          py-4
          font-semibold
          text-black
          transition-all
          duration-300
          hover:gap-5
        "
      >

        Get In Touch

        <ArrowRight size={20} />

      </Link>

    </div>

  );

}