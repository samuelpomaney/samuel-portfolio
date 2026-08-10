"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("idle");

    const form = e.currentTarget;
    const data = new FormData(form);

    data.append("source", "samuel-portfolio");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div>
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
          className="w-full rounded-2xl border border-[var(--glass-border)] bg-transparent px-5 py-4 outline-none transition-colors focus:border-[var(--primary)]"
        />
      </div>

      <div>
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
          className="w-full rounded-2xl border border-[var(--glass-border)] bg-transparent px-5 py-4 outline-none transition-colors focus:border-[var(--primary)]"
        />
      </div>

      <div>
        <label htmlFor="subject" className="sr-only">
          Subject
        </label>

        <select
          required
          name="subject"
          id="subject"
          defaultValue=""
          className="w-full rounded-2xl border border-[var(--glass-border)] bg-transparent px-5 py-4 outline-none transition-colors focus:border-[var(--primary)]"
        >
          <option value="" disabled>
            Select a Subject
          </option>

          <option value="Job Opportunity">
            Job Opportunity
          </option>

          <option value="Social Media / Marketing">
            Social Media / Marketing
          </option>

          <option value="IT / Cybersecurity">
            IT / Cybersecurity
          </option>

          <option value="Freelance / Collaboration">
            Freelance / Collaboration
          </option>

          <option value="Other">
            Other
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>

        <textarea
          required
          name="message"
          id="message"
          placeholder="Your Message"
          rows={6}
          className="w-full resize-none rounded-2xl border border-[var(--glass-border)] bg-transparent px-5 py-4 outline-none transition-colors focus:border-[var(--primary)]"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[var(--primary)] px-6 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p
          role="status"
          className="rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400"
        >
          Your message has been sent successfully. Thank you!
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
        >
          Unable to send your message. Please try again.
        </p>
      )}
    </form>
  );
}