"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "../theme/ThemeToggle";

import useScroll from "@/hooks/useScroll";
import useActiveSection from "./useActiveSection";

import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const scrolled = useScroll();
  const activeSection = useActiveSection();

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <div
        className={`
          relative w-full
          max-w-7xl
          md:transition-[max-width]
          md:duration-500
          ${scrolled ? "md:max-w-5xl" : "md:max-w-7xl"}
        `}
      >
        <nav
          aria-label="Main navigation"
          className={`
            mt-5 flex items-center justify-between
            rounded-full border px-6
            transition-[height,background-color,box-shadow,border-color]
            duration-300

            ${
              scrolled
                ? "h-[58px] border-white/15 bg-[var(--glass-bg)] shadow-2xl backdrop-blur-3xl"
                : "h-[72px] border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-2xl"
            }
          `}
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label="SPYDEX home"
          >
            <Image
              src="/spydex-logo.svg"
              alt="SPYDEX"
              width={34}
              height={34}
              priority
              sizes="34px"
            />

            <span className="hidden font-black tracking-[0.25em] sm:block">
              SPYDEX
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <NavLinks activeSection={activeSection} />
          </div>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <div className="shrink-0 md:hidden">
            <MenuButton
              open={open}
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
        </nav>

        <MobileMenu
          open={open}
          close={() => setOpen(false)}
          activeSection={activeSection}
        />
      </div>
    </header>
  );
}