import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDashed,
  ExternalLink,
  Info,
  Layers,
  Lightbulb,
  Wrench,
} from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/portfolio";
import {
  getProjectBySlug,
  getProjectNeighbours,
  projects,
} from "@/data/projects";
import { siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.summary,
    keywords: [...project.stack, "project case study", profile.name],
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    robots: project.isPlaceholder
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "article",
      title: project.name,
      description: project.summary,
      url: `/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.summary,
    },
  };
}

const isDev = process.env.NODE_ENV !== "production";

/** আসল কনটেন্ট থাকলে সুন্দর তালিকা, না থাকলে (শুধু ডেভেলপমেন্টে) প্লেসহোল্ডার */
function NarrativeList({ id, title, icon: Icon, items, placeholders }) {
  const hasReal = Array.isArray(items) && items.length > 0;
  if (!hasReal && !isDev) return null;

  return (
    <section aria-labelledby={id}>
      <h2
        id={id}
        className="flex items-center gap-2 text-xl font-semibold tracking-tight text-ink"
      >
        <Icon size={18} aria-hidden="true" className="text-accent" />
        {title}
      </h2>

      {hasReal ? (
        <ol className="mt-5 space-y-3">
          {items.map((item, index) => (
            <li
              key={item}
              className="flex gap-4 rounded-xl border border-line bg-card/50 p-4 text-[13px] leading-6 text-soft"
            >
              <span className="font-mono text-[11px] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ol>
      ) : (
        <div className="mt-5 rounded-xl border border-dashed border-line-strong bg-surface/60 p-5">
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            <CircleDashed size={12} aria-hidden="true" />
            Dev only — hidden in production
          </p>
          <p className="mt-3 text-[13px] leading-6 text-muted">
            Add a real <code className="text-soft">{id.replace("-heading", "")}</code>{" "}
            array to this project in data/projects.js.
          </p>
          <ul className="mt-3 space-y-2">
            {placeholders.map((text) => (
              <li
                key={text}
                className="rounded-lg border border-line/70 bg-canvas/60 px-3.5 py-2.5 text-xs leading-5 text-muted"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function EmptyNote({ children }) {
  return (
    <p className="rounded-xl border border-dashed border-line-strong bg-surface/60 px-4 py-4 text-[13px] leading-6 text-muted">
      {children}
    </p>
  );
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getProjectNeighbours(project.slug);
  const hasLiveLink = Boolean(project.links.live);
  const hasClientLink = Boolean(project.links.client);

  const softwareSchema = project.isPlaceholder
    ? null
    : {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: project.shortName,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        description: project.summary,
        url: project.links.live || `${siteUrl}/projects/${project.slug}`,
        author: {
          "@type": "Person",
          name: profile.name,
          url: siteUrl,
        },
      };

  return (
    <main id="main-content" className="relative overflow-hidden pb-20 pt-28 sm:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-grid hero-grid opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] hero-glow"
      />

      <Container className="relative">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            <li>
              <Link href="/" className="transition-colors hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/#projects"
                className="transition-colors hover:text-ink"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-soft">
              {project.shortName}
            </li>
          </ol>
        </nav>

        {project.isPlaceholder ? (
          <div
            role="note"
            className="mt-6 flex gap-3 rounded-xl border border-line glass p-4"
          >
            <Info
              size={17}
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-accent"
            />
            <p className="text-[13px] leading-6 text-muted">
              This is a placeholder case study. Add the real details in{" "}
              <span className="font-mono text-[11px] text-soft">
                data/projects.js
              </span>{" "}
              when the project is ready.
            </p>
          </div>
        ) : null}

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                />
                {project.featured ? "Featured case study" : "Project placeholder"}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.03em] text-gradient-subtle sm:text-4xl lg:text-5xl">
                {project.name}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-7 text-muted">
                {project.summary}
              </p>

              {project.stack.length ? (
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {project.stack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-soft transition-colors hover:border-accent/30"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Technology stack to be added
                </p>
              )}
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {hasLiveLink ? (
                <ButtonLink href={project.links.live} external>
                  Live project
                  <ExternalLink size={15} aria-hidden="true" />
                </ButtonLink>
              ) : null}
              {hasClientLink ? (
                <ButtonLink
                  href={project.links.client}
                  external
                  variant="secondary"
                >
                  Client GitHub
                  <ArrowUpRight size={15} aria-hidden="true" />
                </ButtonLink>
              ) : null}
              {!hasLiveLink && !hasClientLink ? (
                <span className="inline-flex min-h-11 items-center rounded-full border border-dashed border-line-strong px-5 text-xs text-muted">
                  Links pending
                </span>
              ) : null}
            </div>
          </Reveal>
        </div>

        {/* ব্রাউজার ফ্রেমে স্ক্রিনশট */}
        <Reveal delay={0.15} className="mt-10">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/[0.07] blur-3xl"
            />
            <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/40">
              <div
                aria-hidden="true"
                className="flex items-center gap-1.5 border-b border-line bg-card px-4 py-3"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                {hasLiveLink ? (
                  <span className="ml-3 truncate rounded-md bg-canvas/70 px-3 py-1 font-mono text-[10px] text-muted">
                    {project.links.live.replace(/^https?:\/\//, "")}
                  </span>
                ) : null}
              </div>
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1600}
                height={1000}
                priority
                unoptimized
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <article className="min-w-0 space-y-12">
            <Reveal>
              <section aria-labelledby="overview-heading">
                <h2
                  id="overview-heading"
                  className="text-xl font-semibold tracking-tight text-ink"
                >
                  Overview
                </h2>

                {project.description ? (
                  <p className="mt-4 text-pretty text-[15px] leading-7 text-muted">
                    {project.description}
                  </p>
                ) : (
                  <div className="mt-4">
                    <EmptyNote>
                      Project description to be added. Write a short overview
                      of the problem, the solution, and the result.
                    </EmptyNote>
                  </div>
                )}
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="features-heading">
                <h2
                  id="features-heading"
                  className="flex items-center gap-2 text-xl font-semibold tracking-tight text-ink"
                >
                  <Layers size={18} aria-hidden="true" className="text-accent" />
                  Key features
                </h2>

                {project.features.length ? (
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2.5 rounded-xl border border-line bg-card/50 px-4 py-3.5 text-[13px] leading-5 text-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-card"
                      >
                        <Check
                          size={14}
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-4">
                    <EmptyNote>
                      Feature list to be added. Include the capabilities that
                      best demonstrate the work.
                    </EmptyNote>
                  </div>
                )}
              </section>
            </Reveal>

            <Reveal>
              <NarrativeList
                id="challenges-heading"
                title="Challenges faced"
                icon={Wrench}
                items={project.challenges}
                placeholders={project.contentPlaceholders.challenges}
              />
            </Reveal>

            <Reveal>
              <NarrativeList
                id="improvements-heading"
                title="Potential improvements"
                icon={Lightbulb}
                items={project.improvements}
                placeholders={project.contentPlaceholders.improvements}
              />
            </Reveal>
          </article>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-line bg-card/60 p-5">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Project details
              </h2>
              <dl className="mt-4 space-y-3 text-[13px]">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted">Type</dt>
                  <dd className="text-right text-soft">{project.type}</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted">Status</dt>
                  <dd className="flex items-center gap-2 text-right text-soft">
                    {project.status === "Live project" ? (
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_1px] shadow-emerald-400/60"
                      />
                    ) : null}
                    {project.status}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted">Stack</dt>
                  <dd className="text-right text-soft">
                    {project.stack.length
                      ? `${project.stack.length} technologies`
                      : "To be added"}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-line bg-card/60 p-5">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Project links
              </h2>

              <div className="mt-4 space-y-2">
                {hasLiveLink ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-lg border border-line bg-canvas/60 px-3.5 py-3 text-[13px] text-soft transition-colors hover:border-accent/30 hover:text-ink"
                  >
                    Live project
                    <span className="sr-only"> (opens in a new tab)</span>
                    <ArrowUpRight
                      size={14}
                      aria-hidden="true"
                      className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                ) : (
                  <p className="rounded-lg border border-dashed border-line-strong px-3.5 py-3 text-xs text-muted">
                    Live link pending
                  </p>
                )}

                {hasClientLink ? (
                  <a
                    href={project.links.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-lg border border-line bg-canvas/60 px-3.5 py-3 text-[13px] text-soft transition-colors hover:border-accent/30 hover:text-ink"
                  >
                    Client GitHub
                    <span className="sr-only"> (opens in a new tab)</span>
                    <ArrowUpRight
                      size={14}
                      aria-hidden="true"
                      className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                ) : (
                  <p className="rounded-lg border border-dashed border-line-strong px-3.5 py-3 text-xs text-muted">
                    Client repository link pending
                  </p>
                )}
              </div>
            </div>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft size={13} aria-hidden="true" />
              Back to all projects
            </Link>
          </aside>
        </div>

        <nav
          aria-label="Project navigation"
          className="mt-16 grid gap-3 border-t border-line pt-8 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group rounded-xl border border-line bg-card/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-card"
            >
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                <ArrowLeft
                  size={12}
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-x-0.5"
                />
                Previous project
              </span>
              <span className="mt-2 block text-sm font-medium text-soft transition-colors group-hover:text-ink">
                {previous.shortName}
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group rounded-xl border border-line bg-card/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-card sm:text-right"
            >
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted sm:justify-end">
                Next project
                <ArrowRight
                  size={12}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
              <span className="mt-2 block text-sm font-medium text-soft transition-colors group-hover:text-ink">
                {next.shortName}
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}
        </nav>
      </Container>

      {softwareSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      ) : null}
    </main>
  );
}