import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap() {
  const projectPages = projects
    .filter((project) => !project.isPlaceholder)
    .map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
  ];
}
