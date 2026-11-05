import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import { createMetadata } from "@/config/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return createMetadata({
      title: "Project Not Found",
      description: "The requested project could not be found.",
      path: `/projects/${encodeURIComponent(slug)}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${encodeURIComponent(project.slug)}`,
    // Add image: project.image when your data has a suitable image URL.
  });
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className='mx-auto px-4 py-16 container'>
      <h1 className='font-bold text-3xl'>{project.title}</h1>

      <p className='mt-4 text-muted-foreground'>{project.description}</p>

      {/* Replace this placeholder with your existing project details UI. */}
    </main>
  );
}
