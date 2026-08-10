import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">

      <div className="max-w-2xl text-center">

        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[var(--primary)]">

          Error 404

        </p>

        <h1 className="mt-6 text-6xl font-black md:text-8xl">

          Page Not Found

        </h1>

        <p className="mt-8 text-lg leading-8 text-[var(--muted)]">

          The page you're looking for doesn't exist, has been moved,
          or the link is incorrect.

        </p>

        <Link
          href="/"
          className="mt-12 inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary)]/30"
        >
          ← Back to Home
        </Link>

      </div>

    </main>
  );
}