"use client";

export default function EmptyState() {
  return (

    <div className="rounded-[32px] border border-dashed border-[var(--glass-border)] py-24 text-center">

      <div className="text-7xl">

        🔍

      </div>

      <h2 className="mt-6 text-3xl font-black">

        No Jobs Found

      </h2>

      <p className="mx-auto mt-4 max-w-md leading-8 text-[var(--muted)]">

        We couldn't find any jobs matching your search.

        Try a different keyword, company or location.

      </p>

    </div>

  );
}