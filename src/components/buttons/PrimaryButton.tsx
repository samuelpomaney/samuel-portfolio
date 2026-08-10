import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function PrimaryButton({
  href,
  children,
  variant = "primary",
}: Props) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold transition-all duration-300 active:scale-95 ${
        variant === "primary"
          ? "bg-[var(--primary)] text-black shadow-lg shadow-[var(--primary)]/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary)]/35"
          : "border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 hover:-translate-y-1"
      }`}
    >
      <span>{children}</span>

      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">

        →

      </span>
    </Link>
  );
}