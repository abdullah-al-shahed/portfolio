/**
 * Join conditional class names without adding a dependency.
 * Only truthy string values are kept.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
