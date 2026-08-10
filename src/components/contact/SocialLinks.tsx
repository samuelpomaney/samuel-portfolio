"use client";

import Link from "next/link";
import { socials } from "./socials";

export default function SocialLinks() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {socials.map((social) => (
        <Link
          key={social.id}
          href={social.href}
          className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]"
        >
          {social.title}
        </Link>
      ))}
    </div>
  );
}