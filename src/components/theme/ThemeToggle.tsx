"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = [
  {
    name: "light",
    icon: Sun,
  },
  {
    name: "system",
    icon: Monitor,
  },
  {
    name: "dark",
    icon: Moon,
  },
];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] p-1 backdrop-blur-xl">
      {themes.map(({ name, icon: Icon }) => (
        <button
          key={name}
          type="button"
          onClick={() => setTheme(name)}
          aria-label={`Switch to ${name} theme`}
          title={`Switch to ${name} theme`}
          className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
            theme === name
              ? "bg-[#fd9e04] text-black"
              : "text-[var(--foreground)]/70 hover:bg-[var(--glass-bg)] hover:text-[var(--foreground)]"
          }`}
        >
          <Icon size={17} strokeWidth={2} />
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;