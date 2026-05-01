import type { Variants } from "framer-motion";

export const easeLuxe = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeLuxe } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: easeLuxe } },
};

export const stagger = (delay = 0.12, child = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: child, delayChildren: delay },
  },
});

export const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  show: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 1.1, ease: easeLuxe },
  },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "60%" },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeLuxe } },
};

export const viewportOnce = { once: true, amount: 0.25 } as const;
