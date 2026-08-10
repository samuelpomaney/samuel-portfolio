interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
        {eyebrow}
      </span>

      <h2 className="mt-5 text-5xl font-bold tracking-tight">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 opacity-75">
        {description}
      </p>
    </div>
  );
}