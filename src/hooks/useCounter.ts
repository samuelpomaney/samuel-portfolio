"use client";

import { useEffect, useState } from "react";

export function useCounter(
  end: number,
  duration = 1400
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out motion.
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.floor(end * easedProgress);

      setCount((previous) => {
        if (previous === nextValue) {
          return previous;
        }

        return nextValue;
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);

  return count;
}