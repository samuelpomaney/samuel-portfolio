"use client";

import { motion } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ApplyModal({
  open,
  onClose,
}: Props) {

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">

      <motion.div

        initial={{ scale: .85, opacity: 0 }}

        animate={{ scale: 1, opacity: 1 }}

        className="w-full max-w-lg rounded-[32px] border border-[var(--glass-border)] bg-[var(--background)] p-10"

      >

        <div className="text-center">

          <div className="text-7xl">

            🎉

          </div>

          <h2 className="mt-6 text-4xl font-black">

            Application Submitted

          </h2>

          <p className="mt-5 leading-8 text-[var(--muted)]">

            Congratulations! Your application has been successfully submitted.

            Our recruitment team will review your application and contact you if you're shortlisted.

          </p>

          <button

            onClick={onClose}

            className="mt-10 rounded-full bg-[var(--primary)] px-8 py-3 font-bold text-black transition hover:scale-105"

          >

            Continue Exploring Jobs

          </button>

        </div>

      </motion.div>

    </div>

  );

}