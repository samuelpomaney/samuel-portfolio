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
    <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6">
      <div
        className={`mx-auto w-full transition-all duration-500 ${scrolled
          ? "max-w-5xl"
          : "max-w-7xl"
          }`}
      >
        <nav
          aria-label="Main navigation"
          className={`relative mt-4 flex items-center rounded-full border px-4 sm:px-6 transition-all duration-300 ${scrolled
            ? "h-[58px] border-white/15 bg-[var(--glass-bg)] shadow-2xl backdrop-blur-3xl"
            : "h-[72px] border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-2xl"
            }`}
        >
          {/* LOGO */}
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

          {/* DESKTOP NAVIGATION */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            <NavLinks activeSection={activeSection} />
          </div>

          {/* DESKTOP THEME */}
          <div className="ml-auto hidden md:block">
            <ThemeToggle />
          </div>

          {/* MOBILE CONTROLS */}
          <div className="ml-auto flex items-center gap-3 md:hidden">
            <ThemeToggle />

            <MenuButton
              open={open}
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
        </nav>

        {/* MOBILE MENU */}
        <MobileMenu
          open={open}
          close={() => setOpen(false)}
          activeSection={activeSection}
        />
      </div>
    </header>
  );
}