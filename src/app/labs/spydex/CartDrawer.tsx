"use client";

import { motion } from "framer-motion";

interface Props {
  cart: any[];
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({
  cart,
  open,
  onClose,
}: Props) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">

      <motion.div
        initial={{ x: 420 }}
        animate={{ x: 0 }}
        exit={{ x: 420 }}
        className="flex h-full w-full max-w-md flex-col border-l border-[var(--glass-border)] bg-[var(--background)] p-8"
      >

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-black">

            Shopping Cart

          </h2>

          <button
            onClick={onClose}
            className="text-3xl"
          >

            ×

          </button>

        </div>

        <div className="mt-8 flex-1 space-y-4 overflow-y-auto">

          {cart.length === 0 ? (

            <p className="text-[var(--muted)]">

              Your cart is empty.

            </p>

          ) : (

            cart.map((item, index) => (

              <div
                key={index}
                className="rounded-2xl border border-[var(--glass-border)] p-4"
              >

                <div className="flex items-center gap-4">

                  <div className="text-4xl">

                    {item.image}

                  </div>

                  <div>

                    <h3 className="font-bold">

                      {item.name}

                    </h3>

                    <p className="text-[var(--primary)]">

                      {item.price}

                    </p>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

        <button
          className="mt-6 rounded-full bg-[var(--primary)] py-4 font-bold text-black transition hover:scale-105"
        >

          Checkout

        </button>

      </motion.div>

    </div>
  );
}