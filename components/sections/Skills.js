import {
  Blocks,
  Braces,
  Component,
  Database,
  GitBranch,
  Hexagon,
  Laptop,
  Layers,
  Route,
  Server,
  ShieldCheck,
  Webhook,
  Wind,
  ArrowRight,
} from "lucide-react";

import { GithubIcon } from "@/components/icons/BrandIcons";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/portfolio";

const categoryIcons = {
  frontend: Laptop,
  backend: Server,
  database: Database,
};

const skillIcons = {
  javascript: Braces,
  react: Component,
  nextjs: Layers,
  tailwind: Wind,
  shadcn: Blocks,
  node: Hexagon,
  express: Route,
  api: Webhook,
  auth: ShieldCheck,
  mongodb: Database,
  git: GitBranch,
  github: GithubIcon,
};

export default function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="A practical toolkit for building full-stack products."
          description="The technologies I use to move from an interface idea to a working API and a structured database."
          id="skills-title"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {skillCategories.map((category, index) => {
            const CategoryIcon = categoryIcons[category.icon] ?? Layers;

            return (
              <Reveal key={category.title} delay={index * 0.06}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-card hover:shadow-xl hover:shadow-accent/[0.05]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.03] text-accent transition-all group-hover:border-accent/30 group-hover:shadow-[0_0_20px_-4px_rgb(157_184_255/0.45)]">
                      <CategoryIcon size={19} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted/70">
                      {String(category.skills.length).padStart(2, "0")} tools
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-ink">
                    {category.title}
                  </h3>
                  <p className="relative mt-2 text-[13px] leading-6 text-muted">
                    {category.description}
                  </p>

                  <ul className="relative mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const SkillIcon = skillIcons[skill.icon] ?? Braces;

                      return (
                        <li
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 rounded-full border border-line/80 bg-canvas/70 px-3 py-1.5 text-[11px] font-medium text-soft transition-colors hover:border-accent/30 hover:text-ink"
                        >
                          <SkillIcon
                            size={12}
                            aria-hidden="true"
                            className="text-accent/80"
                          />
                          {skill.name}
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-5">
          <p className="flex flex-wrap items-center gap-3 rounded-xl border border-line bg-surface/60 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            <span className="text-soft">Interface</span>
            <ArrowRight size={12} aria-hidden="true" className="text-accent" />
            <span className="text-soft">API</span>
            <ArrowRight size={12} aria-hidden="true" className="text-accent" />
            <span className="text-soft">Database</span>
            <span className="ml-auto hidden sm:inline">
              End-to-end JavaScript workflow
            </span>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}