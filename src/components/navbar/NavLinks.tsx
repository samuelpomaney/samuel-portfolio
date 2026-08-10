"use client";

import Link from "next/link";

import ActiveIndicator from "./ActiveIndicator";
import { navigation } from "@/constants/navigation";

interface Props {
  activeSection: string | null;
  onNavigate?: () => void;
  mobile?: boolean;
}

export default function NavLinks({
  activeSection,
  mobile = false,
  onNavigate,
}: Props) {
  return (
    <div
      className={
        mobile
          ? "flex w-full flex-col gap-2"
          : "flex items-center justify-center gap-7"
      }
    >
      {navigation.map((item) => {
        const section = item.href.replace("#", "");

        return (
          <Link
            key={item.name}
            href={item.href}
            scroll
            onClick={onNavigate}
            className={`
              relative whitespace-nowrap
              transition-all duration-300
              hover:text-[var(--primary)]

              ${
                mobile
                  ? "w-full rounded-2xl px-5 py-4 text-lg font-medium"
                  : "px-1 py-2 text-sm font-medium"
              }
            `}
          >
            {item.name}

            {!mobile && (
              <ActiveIndicator
                active={activeSection === section}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}