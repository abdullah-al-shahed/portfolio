import { GraduationCap } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" labelledBy="education-title">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Education"
          title="An engineering foundation, applied to software."
          description="My formal education, alongside the technical skills I continue to develop through hands-on projects."
          id="education-title"
        />

        <Reveal className="mt-12">
          <article className="group relative overflow-hidden rounded-2xl border border-line bg-card/60 transition-colors hover:border-line-strong">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-accent/[0.07] blur-3xl"
            />

            <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-center">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-white/[0.03] text-accent transition-shadow group-hover:shadow-[0_0_24px_-4px_rgb(157_184_255/0.45)]">
                  <GraduationCap size={22} aria-hidden="true" />
                </span>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Diploma programme
                  </p>
                  <h3 className="mt-2 text-balance text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {education.degree}
                  </h3>
                  <p className="mt-2 text-sm text-soft">
                    {education.institution}
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                <div className="rounded-xl border border-line bg-canvas/60 p-4">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                    Passing year
                  </dt>
                  <dd className="mt-1.5 text-2xl font-semibold tracking-tight text-gradient-accent">
                    {education.passingYear}
                  </dd>
                </div>
                <div className="rounded-xl border border-line bg-canvas/60 p-4">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                    CGPA
                  </dt>
                  <dd className="mt-1.5 text-2xl font-semibold tracking-tight text-gradient-accent">
                    {education.cgpa.replace(" / ", "/")}
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        </Reveal>
      </Container>
    </Section>
  );
}