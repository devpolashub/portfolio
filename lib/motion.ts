import type { Variants } from "motion/react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const stagger = (gap = 0.1): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap } },
});

export const viewportOnce = { once: true, amount: 0.2 } as const;
