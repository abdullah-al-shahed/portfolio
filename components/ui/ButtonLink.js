import Link from "next/link";

import { cn } from "@/lib/utils";

const base =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]";

const variants = {
  primary:
    "bg-ink text-canvas shadow-[0_0_0_0_rgb(157_184_255/0)] hover:bg-white hover:shadow-[0_0_28px_-4px_rgb(157_184_255/0.55)]",
  secondary:
    "border border-line-strong bg-white/[0.02] text-ink hover:border-accent/50 hover:bg-white/[0.06] hover:shadow-[0_0_24px_-8px_rgb(157_184_255/0.4)]",
  ghost:
    "border border-transparent px-0 text-soft hover:text-ink sm:px-2",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  download,
  external,
  ...props
}) {
  if (!href) return null;

  const isExternal =
    external ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");
  const opensInNewTab = isExternal && !href.startsWith("mailto:") && !href.startsWith("tel:");

  const classes = cn(base, variants[variant], className);

  if (isExternal || download) {
    return (
      <a
        href={href}
        className={classes}
        target={opensInNewTab ? "_blank" : undefined}
        rel={opensInNewTab ? "noopener noreferrer" : undefined}
        download={download || undefined}
        {...props}
      >
        {children}
        {opensInNewTab ? (
          <span className="sr-only"> (opens in a new tab)</span>
        ) : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}