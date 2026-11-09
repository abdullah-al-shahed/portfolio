"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

import SocialLinks from "@/components/ui/SocialLinks";
import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuPanelRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    let frame = 0;

    const update = () => {
      setIsScrolled(window.scrollY > 12);

      if (pathname !== "/") {
        setActiveSection("");
        return;
      }

      let current = "";
      for (const item of navItems) {
        const element = document.getElementById(item.sectionId);
        if (element && element.getBoundingClientRect().top <= 160) {
          current = item.sectionId;
        }
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    const firstLink = menuPanelRef.current?.querySelector("a");
    firstLink?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left bg-gradient-to-r from-accent-strong to-accent"
        style={{ scaleX: progress }}
      />

      <div
        className={cn(
          "relative transition-all duration-300",
          isScrolled
            ? "border-b border-line/80 bg-canvas/80 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
          <nav
            aria-label="Primary navigation"
            className="flex h-16 items-center justify-between gap-4"
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              aria-label={`${profile.displayName} — home`}
              className="group flex shrink-0 items-center gap-2.5"
            >
              <span className="grid h-8 w-8 place-items-center rounded-md border border-line bg-white/[0.03] font-mono text-[11px] font-semibold tracking-tight text-ink transition-all group-hover:border-accent/40 group-hover:shadow-[0_0_16px_-2px_rgb(157_184_255/0.5)]">
                {profile.initials}
              </span>
              <span className="hidden text-sm font-medium tracking-tight text-soft transition-colors group-hover:text-ink sm:block">
                Abdullah Al Shahed
              </span>
            </Link>

            <div className="hidden items-center gap-0.5 rounded-full border border-line/70 bg-white/[0.02] p-1 md:flex">
              {navItems.map((item) => {
                const isActive =
                  pathname === "/" && activeSection === item.sectionId;

                return (
                  <Link
                    key={item.sectionId}
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-1.5 text-[13px] transition-colors",
                      isActive ? "text-ink" : "text-muted hover:text-ink",
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active-pill"
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-white/[0.07] ring-1 ring-inset ring-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    ) : null}
                    <span className="relative">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={profile.resumeUrl}
                download
                className="hidden min-h-9 items-center gap-2 rounded-full border border-line-strong bg-white/[0.02] px-4 py-2 text-xs font-medium text-soft transition-all hover:border-accent/40 hover:text-ink hover:shadow-[0_0_20px_-6px_rgb(157_184_255/0.5)] lg:inline-flex"
              >
                <Download size={14} aria-hidden="true" />
                Resume
              </a>

              <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                className="grid h-10 w-10 place-items-center rounded-md border border-line bg-white/[0.02] text-soft transition-colors hover:border-line-strong hover:text-ink md:hidden"
              >
                {isOpen ? (
                  <X size={18} aria-hidden="true" />
                ) : (
                  <Menu size={18} aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                ref={menuPanelRef}
                id="mobile-navigation"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="absolute inset-x-5 top-[calc(100%+0.25rem)] z-50 max-h-[calc(100dvh-5.5rem)] overflow-y-auto rounded-xl border border-line bg-canvas/98 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:inset-x-8 md:hidden"
              >
                <ul className="space-y-0.5">
                  {navItems.map((item, index) => {
                    const isActive =
                      pathname === "/" && activeSection === item.sectionId;

                    return (
                      <li key={item.sectionId}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          aria-current={isActive ? "true" : undefined}
                          className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors hover:bg-white/[0.04] hover:text-ink",
                            isActive
                              ? "bg-white/[0.05] text-ink"
                              : "text-soft",
                          )}
                        >
                          <span
                            className={cn(
                              "font-mono text-[10px]",
                              isActive ? "text-accent" : "text-muted",
                            )}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-3 border-t border-line/80 pt-3">
                  <a
                    href={profile.resumeUrl}
                    download
                    onClick={() => setIsOpen(false)}
                    className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-ink px-4 py-3 text-sm font-medium text-canvas transition-colors hover:bg-[#e4e9f1]"
                  >
                    <Download size={16} aria-hidden="true" />
                    Download Resume
                  </a>
                  <SocialLinks className="mt-3 justify-center" />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}