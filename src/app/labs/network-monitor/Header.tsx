export default function Header() {
  return (
    <header className="mb-12 text-center">

      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2">

        <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />

        <span className="text-sm font-semibold">

          Live Network Simulator

        </span>

      </div>

      <h1 className="mt-8 text-5xl font-black">

        Network Monitor

      </h1>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--muted)]">

        Simulated infrastructure dashboard showing network health, performance and security.

      </p>

    </header>
  );
}