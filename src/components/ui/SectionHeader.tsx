interface Props {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">

      <div className="inline-flex rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-5 py-2">

        <span className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--primary)]">

          {eyebrow}

        </span>

      </div>

      <h2 className="mt-8 text-4xl font-black tracking-tight md:text-5xl">

        {title}

      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-[var(--muted)]">

        {description}

      </p>

    </div>
  );
}