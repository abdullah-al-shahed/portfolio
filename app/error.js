"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";

import Container from "@/components/ui/Container";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content" className="flex min-h-[70vh] items-center pt-24">
      <Container className="max-w-xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Something went wrong
        </p>
        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          This page could not be loaded.
        </h1>
        <p className="mt-4 text-pretty text-[15px] leading-7 text-muted">
          An unexpected error interrupted the page. Try again, or head back to
          the home page.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-canvas transition-colors hover:bg-[#e4e9f1]"
          >
            <RefreshCw size={15} aria-hidden="true" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line-strong bg-white/[0.02] px-5 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:bg-white/[0.05]"
          >
            <Home size={15} aria-hidden="true" />
            Back home
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && error?.message ? (
          <pre className="mt-8 overflow-auto rounded-xl border border-line bg-surface p-4 text-left font-mono text-[11px] leading-5 text-muted">
            {error.message}
          </pre>
        ) : null}
      </Container>
    </main>
  );
}
