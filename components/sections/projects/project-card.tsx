"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight, Clock3, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import type { Project } from "./data/project-data";
import ProjectDialog from "./project-dialog";
import { getStatusBadge } from "./project-badge";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.15 }}
      className='h-full'
    >
      <Card className='group relative flex flex-col bg-card shadow-sm hover:shadow-brand/5 hover:shadow-xl p-0 border-border/70 hover:border-brand/40 rounded-2xl h-full overflow-hidden transition-all hover:-translate-y-1 duration-500'>
        {/* Project thumbnail */}
        <div className='relative bg-muted aspect-video overflow-hidden'>
          <Image
            src={project.thumbnail}
            alt={`${project.title} preview`}
            fill
            priority={index === 0}
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            className='object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
          />

          <div className='absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/10 opacity-80 group-hover:opacity-100 transition-opacity duration-500' />

          {/* Category and status */}
          <div className='top-4 absolute inset-x-4 flex flex-wrap justify-between items-center gap-2'>
            <Badge className='bg-black/45 hover:bg-black/55 shadow-sm backdrop-blur-md border-white/20 text-white'>
              {project.category}
            </Badge>

            {getStatusBadge(project.status)}
          </div>

          {/* Brand hover accent */}
          <div className='bottom-0 left-0 absolute bg-brand w-0 group-hover:w-full h-1 transition-all duration-500' />
        </div>

        {/* Project content */}
        <div className='flex flex-col flex-1 p-5 sm:p-6'>
          {/* Header */}
          <div className='flex justify-between items-start gap-3 mb-3'>
            <div className='min-w-0'>
              <h3 className='font-semibold group-hover:text-brand text-xl sm:text-2xl tracking-tight transition-colors duration-300'>
                {project.title}
              </h3>

              <p className='mt-1 text-muted-foreground text-sm'>
                {project.subtitle}
              </p>
            </div>

            <ArrowUpRight className='mt-1 size-5 text-muted-foreground group-hover:text-brand transition-all group-hover:-translate-y-1 group-hover:translate-x-1 duration-300 shrink-0' />
          </div>

          {/* Description */}
          <p className='mb-5 text-muted-foreground text-sm line-clamp-3 leading-7'>
            {project.description}
          </p>

          {/* Technologies */}
          <div className='flex flex-wrap gap-1.5 mb-5'>
            {project.technologies.slice(0, 4).map((technology) => (
              <Badge
                key={technology}
                variant='secondary'
                className='px-2.5 py-1 rounded-md font-normal text-xs'
              >
                {technology}
              </Badge>
            ))}

            {project.technologies.length > 4 && (
              <Badge
                variant='outline'
                className='px-2.5 py-1 rounded-md font-normal text-xs'
              >
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Project metadata */}
          <div className='flex flex-wrap justify-between items-center gap-3 mt-auto pt-4 border-border/70 border-t'>
            <div className='flex items-center gap-2 text-muted-foreground text-xs'>
              <Clock3 className='size-3.5' />
              <span>{project.duration}</span>
            </div>

            <span className='font-medium text-muted-foreground text-xs'>
              {project.role}
            </span>
          </div>

          {/* Actions */}
          <div className='flex items-center gap-2 mt-5'>
            <ProjectDialog project={project}>
              <button
                type='button'
                className='inline-flex flex-1 justify-center items-center gap-2 bg-primary hover:bg-primary/90 shadow-xs px-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-w-0 h-9 font-medium text-primary-foreground text-sm transition-colors'
              >
                Explore project
                <ArrowUpRight className='size-4' />
              </button>
            </ProjectDialog>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className={buttonVariants({
                  size: "icon",
                  variant: "outline",
                  className: "shrink-0",
                })}
                aria-label={`Visit ${project.title} live demo`}
                title='Live demo'
              >
                <ExternalLink className='size-4' />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className={buttonVariants({
                  size: "icon",
                  variant: "outline",
                  className: "shrink-0",
                })}
                aria-label={`View ${project.title} source code on GitHub`}
                title='GitHub repository'
              >
                <FaGithub className='size-4' />
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
