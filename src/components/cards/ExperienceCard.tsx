import { LucideIcon } from "lucide-react";

import PremiumCard from "../ui/PremiumCard";

interface ExperienceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export default function ExperienceCard({
  icon: Icon,
  title,
  description,
  items,
}: ExperienceCardProps) {
  return (
    <PremiumCard>
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)]/10">
        <Icon
          size={28}
          aria-hidden="true"
          focusable="false"
          className="text-[var(--primary)]"
        />
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 opacity-75">
        {description}
      </p>

      <ul className="mt-8 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3"
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-[var(--primary)]"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </PremiumCard>
  );
}