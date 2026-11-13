import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";
import { routeMetadata } from "@/config/metadata";

const siteUrl = new URL(siteConfig.url);

type RouteKey = keyof typeof routeMetadata;

// Routes are derived from routeMetadata, so the sitemap can never drift from real pages.
const routeSettings: Record<
  RouteKey,
  {
    priority: number;
    changeFrequency: NonNullable<
      MetadataRoute.Sitemap[number]["changeFrequency"]
    >;
  }
> = {
  home: { priority: 1, changeFrequency: "weekly" },
  projects: { priority: 0.9, changeFrequency: "weekly" },
  about: { priority: 0.7, changeFrequency: "monthly" },
  skills: { priority: 0.7, changeFrequency: "monthly" },
  education: { priority: 0.6, changeFrequency: "monthly" },
  contact: { priority: 0.6, changeFrequency: "monthly" },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = (
    Object.keys(routeMetadata) as RouteKey[]
  ).map((key) => ({
    url: new URL(routeMetadata[key].path, siteUrl).toString(),
    ...routeSettings[key],
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
