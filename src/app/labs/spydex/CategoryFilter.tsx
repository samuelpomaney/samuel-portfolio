"use client";

const categories = [
  "All",
  "Laptop",
  "Phone",
  "Gaming",
  "Camera",
];

interface Props {
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  active,
  onChange,
}: Props) {

  return (

    <div className="mb-10 flex flex-wrap gap-3">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-5 py-2 transition ${
            active === category
              ? "bg-[var(--primary)] text-black"
              : "border border-[var(--glass-border)]"
          }`}
        >

          {category}

        </button>

      ))}

    </div>

  );

}