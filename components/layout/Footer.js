import Link from "next/link";
import { ArrowUp } from "lucide-react";

import SocialLinks from "@/components/ui/SocialLinks";
import Container from "@/components/ui/Container";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/70 bg-surface/40">
      <Container className="py-10 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link
              href="/"
              aria-label={`${profile.displayName} — home`}
              className="inline-flex items-center gap-2.5"
            >
              <span className="grid h-8 w-8 place-items-center rounded-md border border-line bg-white/[0.03] font-mono text-[11px] font-semibold text-ink">
                {profile.initials}
              </span>
              <span className="text-sm font-medium tracking-tight text-soft">
                {profile.displayName}
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
              Junior Full Stack Developer building with JavaScript, React,
              Next.js, Node.js, and MongoDB.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <SocialLinks />
            <Link
              href="/#home"
              className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-ink"
            >
              Back to top
              <ArrowUp size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-line/70 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </div>
      </Container>
    </footer>
  );
}
