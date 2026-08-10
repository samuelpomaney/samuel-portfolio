"use client";

import { Service } from "./types";

interface Props {
  service: Service;
}

export default function ServiceDetails({ service }: Props) {
  return (
    <div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8">

      <h2 className="text-4xl font-black">
        {service.title}
      </h2>

      <p className="mt-3 text-[var(--primary)]">
        Professional SPYDEX Service
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="rounded-2xl border border-[var(--glass-border)] p-5">
          <h3 className="font-bold">Delivery</h3>
          <p className="mt-2 text-[var(--muted)]">
            {service.delivery}
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--glass-border)] p-5">
          <h3 className="font-bold">Price</h3>
          <p className="mt-2 text-[var(--primary)] font-semibold">
            {service.price}
          </p>
        </div>

      </div>

      <div className="mt-8">

        <h3 className="text-xl font-bold">
          What you'll get
        </h3>

        <ul className="mt-5 space-y-3">

          {service.features.map(feature => (

            <li
              key={feature}
              className="flex gap-3"
            >
              <span className="text-[var(--primary)]">
                ✓
              </span>

              {feature}

            </li>

          ))}

        </ul>

      </div>

    </div>
  );
}