"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchProducts({
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-8">
      <label htmlFor="spydex-product-search" className="sr-only">
        Search products
      </label>

      <input
        id="spydex-product-search"
        name="product-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="🔍 Search laptops, phones, consoles..."
        autoComplete="off"
        className="w-full rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-6 py-4 outline-none focus:border-[var(--primary)]"
      />
    </div>
  );
}