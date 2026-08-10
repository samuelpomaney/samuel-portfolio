"use client";

import { useState } from "react";

import services from "./services";

import ServiceCard from "./ServiceCard";
import SuccessModal from "./SuccessModal";

export default function RequestForm() {
  const [selected, setSelected] = useState(services[0]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
        <div className="space-y-5">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              selected={selected.id === service.id}
              onClick={() => setSelected(service)}
            />
          ))}
        </div>

        <div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8">
          <h2 className="text-3xl font-black">
            Request {selected.title}
          </h2>

          <div className="mt-8 space-y-5">
            <div>
              <label htmlFor="spydex-request-name" className="sr-only">
                Full Name
              </label>

              <input
                id="spydex-request-name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full rounded-2xl border border-[var(--glass-border)] bg-transparent px-5 py-4 outline-none focus:border-[var(--primary)]"
              />
            </div>

            <div>
              <label htmlFor="spydex-request-email" className="sr-only">
                Email Address
              </label>

              <input
                id="spydex-request-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full rounded-2xl border border-[var(--glass-border)] bg-transparent px-5 py-4 outline-none focus:border-[var(--primary)]"
              />
            </div>

            <div>
              <label htmlFor="spydex-request-message" className="sr-only">
                Project Message
              </label>

              <textarea
                id="spydex-request-message"
                name="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project..."
                className="w-full resize-none rounded-2xl border border-[var(--glass-border)] bg-transparent px-5 py-4 outline-none focus:border-[var(--primary)]"
              />
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-full bg-[var(--primary)] px-8 py-3 font-bold text-black transition hover:scale-105"
            >
              Send Request
            </button>
          </div>
        </div>
      </div>

      <SuccessModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}