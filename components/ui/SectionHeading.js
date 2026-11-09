import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  id,
  className = "",
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em]">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-accent/40" aria-hidden="true" />
        <span className="text-muted">{eyebrow}</span>
      </div>

      <h2
        id={id}
        className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-4xl"
      >
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-xl text-pretty text-[15px] leading-7 text-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
