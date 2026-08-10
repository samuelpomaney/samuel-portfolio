"use client";

import { jobs } from "./jobs";

export default function Header() {
  const featured = jobs.filter(job => job.featured).length;

  return (
    <header className="mb-12">

      <div className="flex flex-wrap items-center justify-between gap-5">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2">

            <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />

            <span className="text-sm font-semibold">

              Live Recruitment Platform

            </span>

          </div>

          <h1 className="mt-6 text-5xl font-black">

            TheFinder

          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">

            Discover opportunities from multiple industries, explore detailed job information and apply instantly.

          </p>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5 text-center">

            <h2 className="text-3xl font-black text-[var(--primary)]">

              {jobs.length}

            </h2>

            <p className="mt-2 text-sm opacity-70">

              Open Jobs

            </p>

          </div>

          <div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5 text-center">

            <h2 className="text-3xl font-black text-[var(--primary)]">

              {featured}

            </h2>

            <p className="mt-2 text-sm opacity-70">

              Featured

            </p>

          </div>

        </div>

      </div>

    </header>
  );
}