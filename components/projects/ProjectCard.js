import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, CircleDashed } from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import { cn } from "@/lib/utils";

function StackChips({ stack, className = "" }) {
  if (!stack.length) {
    return (
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted/70">
        Stack to be added
      </p>
    );
  }

  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {stack.map((technology) => (
        <li
          key={technology}
          className="rounded-full border border-line/80 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-soft transition-colors group-hover:border-accent/25"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectCard({ project, featured = false }) {
  const projectHref = `/projects/${project.slug}`;

  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-2xl border border-line bg-card/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/[0.06]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative min-h-64 overflow-hidden border-b border-line bg-surface lg:min-h-full lg:border-b-0 lg:border-r">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-canvas/50 via-transparent to-transparent"
            />
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-accent/25 glass px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              Featured project
            </span>
          </div>

          <div className="flex flex-col p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              {project.tagline}
            </p>

            <h3 className="mt-3 text-balance text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              <Link
                href={projectHref}
                className="transition-colors hover:text-accent"
              >
                {project.name}
              </Link>
            </h3>

            <p className="mt-3 text-[13px] leading-6 text-muted sm:text-sm">
              {project.summary}
            </p>

            <ul className="mt-5 space-y-2">
              {project.features.slice(0, 3).map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2.5 text-xs leading-5 text-soft"
                >
                  <Check
                    size={13}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <StackChips stack={project.stack} className="mt-5" />

            <div className="mt-7 flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
              <ButtonLink href={projectHref} variant="secondary">
                View case study
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </ButtonLink>
              {project.links.live ? (
                <ButtonLink
                  href={project.links.live}
                  external
                  variant="ghost"
                  className="sm:justify-start"
                >
                  Live site
                  <ArrowUpRight size={15} aria-hidden="true" />
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-card/80 hover:shadow-xl hover:shadow-accent/[0.05]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-surface">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-canvas/50 via-transparent to-transparent"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-line-strong glass px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
          {project.isPlaceholder ? (
            <>
              <CircleDashed size={11} aria-hidden="true" />
              Placeholder
            </>
          ) : (
            project.type
          )}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {project.tagline}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
          <Link
            href={projectHref}
            className="transition-colors hover:text-accent"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 text-[13px] leading-6 text-muted">
          {project.summary}
        </p>

        <div className="mt-4">
          <StackChips stack={project.stack} />
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <Link
            href={projectHref}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-soft transition-colors hover:text-ink"
          >
            View details
            <ArrowRight
              size={13}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          {project.isPlaceholder ? (
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted/60">
              Links pending
            </span>
          ) : project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-accent"
            >
              Live site
              <ArrowUpRight size={13} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}