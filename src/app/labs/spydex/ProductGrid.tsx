"use client";

import { useMemo, useState } from "react";

import products from "./products";

import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import CartDrawer from "./CartDrawer";
import CategoryFilter from "./CategoryFilter";
import SearchProducts from "./SearchProducts";

export default function ProductGrid() {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [selected, setSelected] = useState<any>(null);

  const [cart, setCart] = useState<any[]>([]);

  const [drawer, setDrawer] = useState(false);

  const filtered = useMemo(() => {

    return products.filter(product => {

      const matchesCategory =
        category === "All" ||
        product.category === category;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;

    });

  }, [search, category]);

  function addToCart() {

    if (!selected) return;

    setCart([...cart, selected]);

    setDrawer(true);

    setSelected(null);

  }

  return (

    <>

      <div className="mb-10 flex items-center justify-between">

        <h2 className="text-5xl font-black">

          Tech Shop

        </h2>

        <button
          onClick={() => setDrawer(true)}
          className="rounded-full border border-[var(--glass-border)] px-6 py-3"
        >

          🛒 {cart.length}

        </button>

      </div>

      <SearchProducts
        value={search}
        onChange={setSearch}
      />

      <CategoryFilter
        active={category}
        onChange={setCategory}
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {filtered.map(product => (

          <ProductCard
            key={product.id}
            product={product}
            onView={() => setSelected(product)}
          />

        ))}

      </div>

      <ProductModal
        product={selected}
        onClose={() => setSelected(null)}
        onAdd={addToCart}
      />

      <CartDrawer
        cart={cart}
        open={drawer}
        onClose={() => setDrawer(false)}
      />

    </>

  );

}