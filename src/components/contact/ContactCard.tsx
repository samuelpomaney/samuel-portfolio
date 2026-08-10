"use client";

import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

export default function ContactCard() {
  return (
    <div className="space-y-8">

      <ContactInfo />

      <div className="rounded-[30px] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8 backdrop-blur-xl">

        <h3 className="text-2xl font-bold">

          Connect With Me

        </h3>

        <p className="mt-4 leading-8 text-[var(--muted)]">

          Whether it's a freelance project,
          full-time opportunity,
          collaboration or just a conversation,
          I'd love to hear from you.

        </p>

        <SocialLinks />

      </div>

    </div>
  );
}