import type { Transition, Variants } from "framer-motion";

/* ======================================================
   VIEWPORT
====================================================== */

export const viewport = {
  once: true,
  amount: 0.2,
};

/* ======================================================
   TRANSITIONS
====================================================== */

export const transition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const slowTransition: Transition = {
  duration: 1,
  ease: [0.22, 1, 0.36, 1],
};

export const fastTransition: Transition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
};

/* ======================================================
   FADE
====================================================== */

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport,

  transition,
};

export const fadeDown = {
  initial: {
    opacity: 0,
    y: -40,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport,

  transition,
};

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: -40,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport,

  transition,
};

export const fadeRight = {
  initial: {
    opacity: 0,
    x: 40,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport,

  transition,
};

export const zoomIn = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },

  whileInView: {
    opacity: 1,
    scale: 1,
  },

  viewport,

  transition,
};

/* ======================================================
   FLOAT
====================================================== */

export const floating = {
  animate: {
    y: [0, -8, 0],
  },

  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* ======================================================
   STAGGER
====================================================== */

export const staggerContainer: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};