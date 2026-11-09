"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Small, restrained entrance animation. Motion is disabled when the visitor
 * prefers reduced motion.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  amount = 0.25,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
