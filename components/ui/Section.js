import { cn } from "@/lib/utils";

export default function Section({
  id,
  children,
  className = "",
  labelledBy,
  divider = true,
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative py-20 sm:py-24 lg:py-28",
        divider && "border-t border-line/70",
        className,
      )}
    >
      {children}
    </section>
  );
}
