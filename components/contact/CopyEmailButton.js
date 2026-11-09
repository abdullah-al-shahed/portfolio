"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked; fall back to opening the mail client.
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy email address ${email}`}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line-strong bg-white/[0.02] px-5 text-sm font-medium text-soft transition-colors hover:border-accent/40 hover:text-ink"
      >
        {copied ? (
          <Check size={15} aria-hidden="true" className="text-accent" />
        ) : (
          <Copy size={15} aria-hidden="true" />
        )}
        {copied ? "Copied" : "Copy email"}
      </button>

      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard." : ""}
      </span>
    </>
  );
}
