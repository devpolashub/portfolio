"use client";

import Image from "next/image";
import { type ReactNode, type ReactElement } from "react";
import { motion } from "motion/react";
import {
  Check,
  Clock3,
  ExternalLink,
  Layers3,
  Lightbulb,
  ListChecks,
  Sparkles,
  Target,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import type { Project } from "./data/project-data";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

import { getStatusBadge } from "./project-badge";

interface ProjectDialogProps {
  children: ReactElement;
  project: Project;
}

export default function ProjectDialog({
  children,
  project,
}: ProjectDialogProps) {
  return (
    <Dialog>
      <DialogTrigger render={children}>{children}</DialogTrigger>

      <DialogContent className='flex flex-col gap-0 bg-background p-0 border-border rounded-2xl w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-5xl max-h-[92dvh] overflow-hidden'>
        {/* Scrollable dialog body */}
        <div className='flex-1 min-h-0 overflow-y-auto'>
          {/* Project cover */}
          <div className='relative bg-muted max-h-105 aspect-video overflow-hidden'>
            <Image
              src={project.thumbnail}
              alt={`${project.title} project cover`}
              fill
              sizes='(max-width: 768px) 100vw, 900px'
              className='object-cover'
            />

            <div className='absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent' />

            <div className='bottom-5 sm:bottom-7 absolute inset-x-5 sm:inset-x-8 flex flex-wrap items-center gap-2'>
              <Badge className='bg-black/50 backdrop-blur-md border-white/20 text-white'>
                {project.category}
              </Badge>

              {getStatusBadge(project.status)}
            </div>
          </div>

          <div className='space-y-10 px-5 sm:px-8 pb-8 sm:pb-10'>
            {/* Project header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className='space-y-4 -mt-1'
            >
              <DialogHeader className='space-y-2 text-left'>
                <DialogTitle className='font-bold text-2xl sm:text-4xl tracking-tight'>
                  {project.title}
                </DialogTitle>

                <p className='max-w-2xl text-muted-foreground text-sm sm:text-base leading-7'>
                  {project.subtitle}
                </p>
              </DialogHeader>

              <div className='flex flex-wrap items-center gap-3 text-muted-foreground text-sm'>
                <span className='inline-flex items-center gap-2'>
                  <Clock3 className='size-4' />
                  {project.duration}
                </span>

                <span aria-hidden='true'>·</span>

                <span>{project.role}</span>
              </div>

              {/* External links */}
              <div className='flex flex-wrap gap-2 pt-1'>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={buttonVariants({
                      size: "sm",
                      className: "gap-2",
                    })}
                  >
                    Live preview
                    <ExternalLink className='size-4' />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={buttonVariants({
                      size: "sm",
                      variant: "outline",
                      className: "gap-2",
                    })}
                  >
                    <FaGithub className='size-4' />
                    Source code
                  </a>
                )}
              </div>
            </motion.div>

            {/* About */}
            <ProjectDetailSection
              title='About the project'
              description='The idea, purpose, and problem this project addresses.'
              icon={<Target className='size-5' />}
            >
              <p className='text-muted-foreground text-sm sm:text-base leading-8'>
                {project.description}
              </p>
            </ProjectDetailSection>

            {/* Gallery */}
            {project.gallery.length > 0 && (
              <ProjectDetailSection
                title='Project gallery'
                description='A closer look at the interface and experience.'
                icon={<Layers3 className='size-5' />}
              >
                <div className='gap-4 grid sm:grid-cols-2'>
                  {project.gallery.map((image, index) => (
                    <motion.div
                      key={image}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.06,
                      }}
                      className='group relative bg-muted border border-border rounded-xl aspect-video overflow-hidden'
                    >
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        sizes='(max-width: 640px) 100vw, 50vw'
                        className='object-cover group-hover:scale-105 transition-transform duration-500'
                      />
                    </motion.div>
                  ))}
                </div>
              </ProjectDetailSection>
            )}

            {/* Technologies */}
            <ProjectDetailSection
              title='Technologies'
              description='Tools and technologies used to build this project.'
              icon={<Layers3 className='size-5' />}
            >
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((technology) => (
                  <Badge
                    key={technology}
                    variant='secondary'
                    className='px-3 py-1.5 rounded-md font-normal text-sm'
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
            </ProjectDetailSection>

            {/* Features */}
            {project.features.length > 0 && (
              <ProjectList
                title='Key features'
                description='The main capabilities and functionality.'
                icon={<Check className='size-5' />}
                items={project.features}
              />
            )}

            {/* Challenges */}
            {project.challenges.length > 0 && (
              <ProjectList
                title='Challenges & solutions'
                description='Some of the technical challenges addressed during development.'
                icon={<Lightbulb className='size-5' />}
                items={project.challenges}
              />
            )}

            {/* Future plans */}
            {project.futurePlans.length > 0 && (
              <ProjectList
                title='Future improvements'
                description='Ideas and improvements planned for future iterations.'
                icon={<Sparkles className='size-5' />}
                items={project.futurePlans}
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface ProjectDetailSectionProps {
  title: string;
  description?: string;
  icon: ReactNode;
  children: ReactNode;
}

function ProjectDetailSection({
  title,
  description,
  icon,
  children,
}: ProjectDetailSectionProps) {
  return (
    <section className='space-y-4'>
      <div className='flex items-start gap-3'>
        <div className='flex justify-center items-center bg-brand/10 rounded-lg size-9 text-brand shrink-0'>
          {icon}
        </div>

        <div className='space-y-1'>
          <h3 className='font-semibold tracking-tight'>{title}</h3>

          {description && (
            <p className='text-muted-foreground text-sm'>{description}</p>
          )}
        </div>
      </div>

      {children}
    </section>
  );
}

interface ProjectListProps {
  title: string;
  description: string;
  icon: ReactNode;
  items: string[];
}

function ProjectList({ title, description, icon, items }: ProjectListProps) {
  return (
    <ProjectDetailSection title={title} description={description} icon={icon}>
      <ul className='gap-3 grid sm:grid-cols-2'>
        {items.map((item) => (
          <li
            key={item}
            className='flex items-start gap-3 bg-muted/30 p-4 border border-border/70 rounded-xl text-muted-foreground text-sm leading-6'
          >
            <ListChecks className='mt-0.5 size-4 text-brand shrink-0' />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </ProjectDetailSection>
  );
}
