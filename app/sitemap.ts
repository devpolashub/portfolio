import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

const siteUrl = new URL(siteConfig.url);

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/projects", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/skills", priority: 0.7, changeFrequency: "monthly" },
  { path: "/experience", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: new URL(
      `/projects/${encodeURIComponent(project.slug)}`,
      siteUrl,
    ).toString(),
    changeFrequency: "monthly",
    priority: project.featured ? 0.8 : 0.6,
  }));

  return [...pages, ...projectPages];
}
