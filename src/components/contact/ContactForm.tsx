"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdavdzeq", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        alert("Message sent successfully!");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-6 rounded-[32px] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8 backdrop-blur-xl"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="sr-only">
          Full Name
        </label>

        <input
          required
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          placeholder="Full Name"
          className="w-full rounded-2xl border border-[var(--glass-border)] bg-transparent px-5 py-4 outline-none focus:border-[var(--primary)]"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>

        <input
          required
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="Email Address"
          className="w-full rounded-2xl border border-[var(--glass-border)] bg-transparent px-5 py-4 outline-none focus:border-[var(--primary)]"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="sr-only">
          Subject
        </label>

        <select
          required
          name="subject"
          id="subject"
          autoComplete="off"
          className="w-full rounded-2xl border border-[var(--glass-border)] bg-transparent px-5 py-4 outline-none focus:border-[var(--primary)]"
          defaultValue=""
        >
          <option value="" disabled>
            Select a Subject
          </option>
          <option value="Job Opportunity">Job Opportunity</option>
          <option value="Social Media / Marketing">Social Media / Marketing</option>
          <option value="IT / Cybersecurity">IT / Cybersecurity</option>
          <option value="Freelance / Collaboration">
            Freelance / Collaboration
          </option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="sr-only">
          Message
        </label>

        <textarea
          required
          name="message"
          id="message"
          autoComplete="off"
          placeholder="Your Message"
          rows={6}
          className="w-full resize-none rounded-2xl border border-[var(--glass-border)] bg-transparent px-5 py-4 outline-none focus:border-[var(--primary)]"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[var(--primary)] px-6 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}