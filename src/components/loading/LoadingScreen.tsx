"use client";

import LoadingLogo from "./LoadingLogo";
import LoadingRing from "./LoadingRing";
import LoadingText from "./LoadingText";

interface Props {
  theme?: string;
}

export default function LoadingScreen({ theme }: Props) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center px-6 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#070707] text-white"
          : "bg-[#fafafa] text-black"
      }`}
    >
      {/* Logo + ring occupy a fixed area so the animation can never
          overlap the loading message below. */}
      <div className="relative flex h-40 w-40 shrink-0 items-center justify-center">
        <LoadingRing />
        <LoadingLogo />
      </div>

      {/* Explicit spacing keeps the text visually separated from the ring. */}
      <div className="mt-8 h-7">
        <LoadingText />
      </div>
    </div>
  );
}