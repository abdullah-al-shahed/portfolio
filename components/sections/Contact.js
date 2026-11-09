import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";

import CopyEmailButton from "@/components/contact/CopyEmailButton";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinks from "@/components/ui/SocialLinks";
import { profile } from "@/data/portfolio";

const contactCard =
  "group flex items-center gap-4 rounded-xl border border-line bg-canvas/60 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-canvas hover:shadow-lg hover:shadow-accent/[0.05] sm:p-5";

export default function Contact() {
  const emailHref = `mailto:${profile.email}?subject=Portfolio%20enquiry`;
  const phoneHref = `tel:${profile.phoneHref}`;

  return (
    <Section id="contact" labelledBy="contact-title">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-card/60 p-6 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid hero-grid opacity-40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-accent/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent/[0.08] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          />

          <div className="relative">
            <SectionHeading
              index="06"
              eyebrow="Contact"
              title="Let's build something worth shipping."
              description="Have a role, a project, or a question? Email is the fastest way to reach me."
              id="contact-title"
            />

            <div className="mt-10 grid gap-3 md:grid-cols-2">
              <Reveal delay={0.05}>
                <a href={emailHref} className={contactCard}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-white/[0.03] text-accent transition-colors group-hover:border-accent/30">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                      Email
                    </span>
                    <span className="mt-1 block break-all text-sm font-medium text-soft transition-colors group-hover:text-ink">
                      {profile.email}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </Reveal>

              <Reveal delay={0.1}>
                <a href={phoneHref} className={contactCard}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-white/[0.03] text-accent transition-colors group-hover:border-accent/30">
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                      Phone
                    </span>
                    <span className="mt-1 block text-sm font-medium text-soft transition-colors group-hover:text-ink">
                      {profile.phone}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={emailHref}>
                  Send an email
                  <Send
                    size={15}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </ButtonLink>
                <CopyEmailButton email={profile.email} />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col gap-4 border-t border-line/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Find me elsewhere
                </p>
                <SocialLinks />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}