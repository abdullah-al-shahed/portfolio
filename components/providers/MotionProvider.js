"use client";

import { MotionConfig } from "framer-motion";

/**
 * Globally respects the user's operating-system reduced-motion preference.
 */
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
