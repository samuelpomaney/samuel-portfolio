"use client";

import { useEffect, useState } from "react";

const sections = [
  "about",
  "career-paths",
  "projects",
  "experience",
  "contact",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const updateSection = () => {

      const scroll = window.scrollY + window.innerHeight * 0.35;

      let current: string | null = null;

      sections.forEach((id) => {

        const section = document.getElementById(id);

        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scroll >= top && scroll < bottom) {
          current = id;
        }

      });

      setActiveSection(current);
    };

    updateSection();

    window.addEventListener("scroll", updateSection, {
      passive: true,
    });

    window.addEventListener("resize", updateSection);

    return () => {
      window.removeEventListener("scroll", updateSection);
      window.removeEventListener("resize", updateSection);
    };

  }, []);

  return activeSection;
}