interface Props {
  label: string;
  value: string;
}

export default function StatusItem({
  label,
  value,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">

      <div className="flex items-center gap-3">

        <div className="h-2.5 w-2.5 rounded-full bg-green-500" />

        <span className="font-medium">
          {label}
        </span>

      </div>

      <span className="font-semibold text-[var(--primary)]">
        {value}
      </span>

    </div>
  );
}