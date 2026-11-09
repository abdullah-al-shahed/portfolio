import { Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

export default function SocialLinks({
  className = "",
  showLabels = true,
  iconSize = 15,
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        const isExternal = link.href.startsWith("http");

        return (
          <li key={link.label}>
            <a
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3.5 py-2 text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:bg-white/[0.04] hover:text-ink"
            >
              {Icon ? <Icon size={iconSize} aria-hidden="true" /> : null}
              {showLabels ? <span>{link.label}</span> : null}
              {!showLabels ? <span className="sr-only">{link.label}</span> : null}
              {isExternal ? (
                <span className="sr-only"> (opens in a new tab)</span>
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
