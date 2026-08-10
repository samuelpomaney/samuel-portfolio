"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label htmlFor="thefinder-search" className="sr-only">
        Search jobs
      </label>

      <input
        id="thefinder-search"
        name="job-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search jobs..."
        autoComplete="off"
        className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-5 py-4 outline-none transition focus:border-[var(--primary)]"
      />
    </div>
  );
}