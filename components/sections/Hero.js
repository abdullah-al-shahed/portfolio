import Image from "next/image";
import { ArrowRight, Download, GraduationCap, MapPin } from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SocialLinks from "@/components/ui/SocialLinks";
import { education, profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid hero-grid opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hero-glow"
      />

      <Container className="relative pb-16 sm:pb-20 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            {/* profile.availability (ঐচ্ছিক) থাকলে ব্যাজ দেখাবে, না থাকলে "Hello, I'm" */}
            <Reveal>
              {profile.availability ? (
                <p className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-white/[0.02] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-soft">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  {profile.availability}
                </p>
              ) : (
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted">
                  Hello, I&apos;m
                </p>
              )}
            </Reveal>

            <Reveal delay={0.05}>
              <h1
                id="hero-title"
                className="mt-6 text-balance text-[clamp(2.25rem,9.5vw,4.6rem)] font-semibold uppercase leading-[1.02] tracking-[-0.045em]"
              >
                <span className="block text-gradient-subtle">MD. Abdullah</span>
                <span className="block text-gradient-accent">Al Shahed</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 flex items-center gap-3 text-sm font-medium text-soft">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px] shadow-accent/50"
                />
                {profile.designation}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-pretty text-[15px] leading-7 text-muted sm:text-base">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/#projects">
                  View my work
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </ButtonLink>
                <ButtonLink
                  href={profile.resumeUrl}
                  download
                  variant="secondary"
                >
                  <Download
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-y-0.5"
                  />
                  Download Resume
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-9 flex flex-col gap-3 border-t border-line/70 pt-6 sm:flex-row sm:items-center sm:gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Find me on
                </span>
                <SocialLinks />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mx-auto w-full max-w-sm lg:max-w-sm">
            <figure className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[1.6rem] border border-line/60"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-px rounded-3xl bg-gradient-to-b from-accent/30 via-transparent to-transparent opacity-60 blur-[1px]"
              />
              <div className="relative overflow-hidden rounded-3xl border border-line bg-card">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={profile.photo}
                    alt={`Portrait of ${profile.displayName}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 384px, 440px"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-canvas/60 via-transparent to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 ring-1 ring-inset ring-white/5"
                  />
                </div>

                <figcaption className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    Full stack developer
                  </span>
                  <span className="font-mono text-[10px] text-muted/70">
                    AS / DEV
                  </span>
                </figcaption>
              </div>

              {/* নিচের বাম কার্ড */}
              <div className="animate-float absolute -bottom-14 -left-4 hidden max-w-[240px] rounded-xl border border-line glass px-4 py-3 shadow-xl shadow-black/30 sm:block">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                  Core stack
                </p>
                <p className="mt-1.5 text-xs font-medium text-soft">
                  Next.js · Node.js · MongoDB
                </p>
              </div>

              {/* ওপরের ডান কার্ড */}
              <div className="animate-float-delayed absolute -right-4 -top-4 hidden rounded-xl border border-line glass px-4 py-3 shadow-xl shadow-black/30 sm:block">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                  Live project
                </p>
                <p className="mt-1.5 flex items-center gap-2 text-xs font-medium text-soft">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_1px] shadow-emerald-400/60"
                  />
                  BookNook
                </p>
              </div>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
