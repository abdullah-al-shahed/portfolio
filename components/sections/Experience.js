import { Briefcase, CircleDashed } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title="Roles, teams, and contributions."
          description="My professional experience before moving into full-stack development."
          id="experience-title"
        />

        <div className="relative mt-12">
          {/* টাইমলাইন লাইন */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-[21px] top-4 hidden w-px bg-gradient-to-b from-accent/40 via-line to-transparent sm:block"
          />

          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <Reveal key={experience.id} delay={index * 0.06}>
                <article
                  className={`group relative rounded-2xl border bg-card/40 p-6 transition-colors hover:border-line-strong hover:bg-card/60 sm:ml-12 sm:p-8 ${
                    experience.isPlaceholder
                      ? "border-dashed border-line-strong"
                      : "border-line"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[34px] top-9 hidden h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_2px] shadow-accent/50 sm:block"
                  />

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-white/[0.03] text-accent transition-colors group-hover:border-accent/30">
                        <Briefcase size={18} aria-hidden="true" />
                      </span>

                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-ink">
                          {experience.role}
                        </h3>
                        <p className="mt-1 text-sm text-soft">
                          {experience.company}
                          {experience.location ? (
                            <span className="text-muted">
                              {" "}
                              · {experience.location}
                            </span>
                          ) : null}
                        </p>
                        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                          {experience.period}
                        </p>
                      </div>
                    </div>

                    {experience.isPlaceholder ? (
                      <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                        <CircleDashed size={11} aria-hidden="true" />
                        Placeholder
                      </span>
                    ) : null}
                  </div>

                  <ul className="mt-6 space-y-2.5 sm:pl-15">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-[13px] leading-6 text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent/70"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {experience.isPlaceholder ? (
                    <p className="mt-6 border-t border-line/70 pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-muted/70">
                      Replace this entry in{" "}
                      <span className="text-muted">data/portfolio.js</span>
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}