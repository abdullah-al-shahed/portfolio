import { ArrowUpRight } from "lucide-react";

import { GithubIcon } from "@/components/icons/BrandIcons";
import ProjectCard from "@/components/projects/ProjectCard";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";
import { featuredProject, otherProjects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            index="05"
            eyebrow="Projects"
            title="Selected work, documented end to end."
            description="A closer look at what I've built — the stack, the features, and the decisions behind the result."
            id="projects-title"
          />

          <Reveal delay={0.08} className="shrink-0 pb-1">
            <ButtonLink
              href={profile.github}
              external
              variant="ghost"
              className="gap-2 text-xs text-muted hover:text-ink"
            >
              <GithubIcon size={15} aria-hidden="true" />
              More on GitHub
              <ArrowUpRight size={13} aria-hidden="true" />
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-12 space-y-5">
          <Reveal>
            <ProjectCard project={featuredProject} featured />
          </Reveal>

          {otherProjects.length ? (
            <div className="grid gap-5 md:grid-cols-2">
              {otherProjects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.06}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}