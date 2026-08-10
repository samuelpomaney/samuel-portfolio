"use client";

import { motion } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({ open, onClose }: Props) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">

      <motion.div
        initial={{ scale: .8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md rounded-3xl border border-[var(--glass-border)] bg-[var(--background)] p-10 text-center"
      >

        <div className="text-6xl">

          🚀

        </div>

        <h2 className="mt-6 text-3xl font-black">

          Request Sent

        </h2>

        <p className="mt-4 leading-8 text-[var(--muted)]">

          Thank you for contacting SPYDEX.

          We'll get back to you as soon as possible.

        </p>

        <button
          onClick={onClose}
          className="mt-8 rounded-full bg-[var(--primary)] px-8 py-3 font-bold text-black"
        >

          Awesome

        </button>

      </motion.div>

    </div>
  );
}