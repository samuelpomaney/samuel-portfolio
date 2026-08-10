interface Props {
  status: string;
}

export default function ProjectStatus({
  status,
}: Props) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-1">

      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

      <span className="text-xs font-semibold">

        {status}

      </span>

    </div>
  );
}