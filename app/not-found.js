import { ArrowLeft, ArrowUpRight } from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-[78vh] items-center pt-24">
      <Container className="max-w-xl text-center">
        <p
          aria-hidden="true"
          className="font-mono text-6xl font-semibold tracking-tighter text-line-strong sm:text-7xl"
        >
          404
        </p>
        <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          That page does not exist.
        </h1>
        <p className="mt-4 text-pretty text-[15px] leading-7 text-muted">
          The link may be broken, or the page may have moved. Let&apos;s get you
          back to something useful.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">
            <ArrowLeft size={15} aria-hidden="true" />
            Back home
          </ButtonLink>
          <ButtonLink href="/#projects" variant="secondary">
            View projects
            <ArrowUpRight size={15} aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
