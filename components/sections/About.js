import { Check, GraduationCap, Layers, Mail, User } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";

const principles = [
  "Clear architecture",
  "Accessible interfaces",
  "Maintainable code",
];

export default function About() {
  const facts = [
    {
      label: "Role",
      value: profile.designation,
      icon: User,
      href: null,
    },
    {
      label: "Education",
      value: "Diploma in Engineering, 2025",
      icon: GraduationCap,
      href: null,
    },
    {
      label: "Focus",
      value: "Full-stack JavaScript",
      icon: Layers,
      href: null,
    },
    {
      label: "Email",
      value: profile.email,
      icon: Mail,
      href: `mailto:${profile.email}`,
    },
  ];

  const cardClass =
    "group flex items-start gap-3 rounded-xl border border-line bg-card/50 p-3.5 transition-all duration-200";

  return (
    <Section id="about" labelledBy="about-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            index="01"
            eyebrow="About"
            title="A developer focused on clarity, structure, and the details."
            description="I like work that is easy to understand, comfortable to use, and built to be maintained."
            id="about-title"
          />

          <div>
            <Reveal className="space-y-4">
              {profile.about.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-pretty text-base leading-8 text-soft"
                      : "text-pretty text-[15px] leading-7 text-muted"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.08} className="mt-8">
              <dl className="grid gap-3 sm:grid-cols-2">
                {facts.map((fact) => {
                  const Icon = fact.icon;
                  const content = (
                    <>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-line bg-white/[0.02] text-accent transition-colors group-hover:border-accent/30">
                        <Icon size={14} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                          {fact.label}
                        </dt>
                        <dd className="mt-1 break-words text-[13px] font-medium text-soft">
                          {fact.value}
                        </dd>
                      </span>
                    </>
                  );

                  return fact.href ? (
                    <a
                      key={fact.label}
                      href={fact.href}
                      className={`${cardClass} hover:-translate-y-0.5 hover:border-accent/30 hover:bg-card`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={fact.label}
                      className={`${cardClass} hover:border-line-strong`}
                    >
                      {content}
                    </div>
                  );
                })}
              </dl>
            </Reveal>

            <Reveal delay={0.12} className="mt-6">
              <ul className="flex flex-wrap gap-2">
                {principles.map((principle) => (
                  <li
                    key={principle}
                    className="flex items-center gap-2 rounded-full border border-line/80 bg-white/[0.02] px-3 py-1.5 text-xs text-muted"
                  >
                    <Check
                      size={13}
                      aria-hidden="true"
                      className="text-accent"
                    />
                    {principle}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}