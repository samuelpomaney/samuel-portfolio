"use client";

import { useEffect } from "react";

interface Props {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}

export default function Error({
  error,
  reset,
}: Props) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">

      <div className="max-w-2xl text-center">

        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[var(--primary)]">

          Something went wrong

        </p>

        <h1 className="mt-6 text-5xl font-black">

          Unexpected Error

        </h1>

        <p className="mt-8 text-lg leading-8 text-[var(--muted)]">

          An unexpected error occurred while loading this page.

        </p>

        <button
          onClick={reset}
          className="mt-12 rounded-full bg-[var(--primary)] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary)]/30"
        >
          Try Again
        </button>

      </div>

    </main>
  );
}