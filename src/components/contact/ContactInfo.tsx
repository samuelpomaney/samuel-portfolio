"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const info = [
  {
    icon: Mail,
    title: "Email",
    value: "samuelpomaney@gmail.com",
    href: "mailto:samuelpomaney@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+233 20 460 5036",
    href: "tel:+233204605036",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Accra, Ghana",
    href: "https://maps.google.com/?q=Accra,Ghana",
  },
  {
    icon: Clock,
    title: "Availability",
    value: "Open to Full-time • Remote • Freelance",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      {info.map((item) => {
        const Icon = item.icon;

        const content = (
          <div className="group flex items-center gap-5 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_15px_40px_rgba(253,158,4,.12)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--glass-border)] transition-colors duration-300 group-hover:border-[var(--primary)]">
              <Icon
                size={24}
                aria-hidden="true"
                className="text-[var(--primary)]"
              />
            </div>

            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="mt-1 text-[var(--muted)]">{item.value}</p>
            </div>
          </div>
        );

        if (item.href) {
          return (
            <Link
              key={item.title}
              href={item.href}
              target={item.title === "Location" ? "_blank" : undefined}
              rel={
                item.title === "Location"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="block cursor-pointer"
            >
              {content}
            </Link>
          );
        }

        return <div key={item.title}>{content}</div>;
      })}
    </div>
  );
}