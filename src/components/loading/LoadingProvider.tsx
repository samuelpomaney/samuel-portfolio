"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import LoadingScreen from "./LoadingScreen";

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.03,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="fixed inset-0 z-[9999]"
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && children}
    </>
  );
}