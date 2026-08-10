"use client";

const steps = [
  "Research",
  "Strategy",
  "Create",
  "Publish",
  "Analyse",
  "Optimise",
];

export default function MarketingWorkflow() {
  return (
    <>
      <h3 className="mb-6 text-xs font-bold uppercase tracking-[.3em] text-[var(--primary)]">
        Workflow
      </h3>

      <div className="flex flex-wrap gap-4">
        {steps.map((step) => (
          <div
            key={step}
            className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--primary)]"
          >
            {step}
          </div>
        ))}
      </div>
    </>
  );
}