"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { Clock3, Globe, Layers, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Project } from "./data/project-data";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getStatusBadge } from "./project-badge";

interface ProjectDialogProps {
  children: ReactNode;
  project: Project;
}

export default function ProjectDialog({
  children,
  project,
}: ProjectDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>

      <DialogContent className='bg-[#090512] shadow-2xl shadow-purple-950/50 p-0 border-purple-900/40 h-[90vh] overflow-hidden data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95'>
        {/* Glow Background */}

        <div className='-z-10 absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(88,28,135,0.45),transparent_45%)] pointer-events-none' />

        {/* Cover */}

        <div className='relative rounded-t-lg aspect-video overflow-hidden'>
          <Image
            src={project.thumbnail}
            alt={`${project.title} preview`}
            fill
            className='object-cover hover:scale-105 transition duration-700'
          />

          <div className='absolute inset-0 bg-linear-to-t from-[#090512] via-black/40 to-transparent' />

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className='bottom-5 left-5 absolute'
          >
            <Badge className='bg-purple-500/20 backdrop-blur border-purple-400/30 text-purple-100'>
              {project.category}
            </Badge>
          </motion.div>
        </div>

        <div className='space-y-10 p-6 overflow-y-auto custom-scrollbar'>
          {/* Header */}

          <motion.section
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
          >
            <h2 className='bg-clip-text bg-linear-to-r from-white via-purple-200 to-purple-500 font-bold text-transparent text-3xl'>
              {project.title}
            </h2>

            <p className='mt-2 text-muted-foreground'>{project.subtitle}</p>

            <div className='flex flex-wrap items-center gap-3 mt-5'>
              <div className='flex items-center gap-2 bg-purple-950/30 px-3 py-1 border border-purple-900/40 rounded-full text-sm'>
                <Clock3 className='w-4 h-4 text-purple-400' />
                {project.duration}
              </div>

              <Badge variant='outline'>{project.role}</Badge>

              {getStatusBadge(project.status)}
            </div>
          </motion.section>

          <AnimatedSection title='Gallery'>
            <div className='gap-5 grid md:grid-cols-2'>
              {project.gallery.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className='group relative border border-purple-900/40 rounded-xl aspect-video overflow-hidden'
                >
                  <Image
                    src={image}
                    alt='Project screenshot'
                    fill
                    className='object-cover group-hover:scale-110 transition duration-500'
                  />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection title='About Project'>
            <p className='text-muted-foreground leading-relaxed'>
              {project.description}
            </p>
          </AnimatedSection>

          <AnimatedSection title='Technologies'>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant='secondary'
                  className='bg-purple-950/40 border-purple-900/40'
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </AnimatedSection>

          <ProjectList title='Features' items={project.features} />

          <ProjectList title='Challenges' items={project.challenges} />

          <ProjectList title='Future Plans' items={project.futurePlans} />

          <div className='gap-3 grid sm:grid-cols-2'>
            {project.liveUrl && (
              <Button variant={"secondary"} size={"sm"}>
                <Link
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Globe className='mr-2 w-4 h-4' />
                  Live Demo
                </Link>
              </Button>
            )}

            {project.githubUrl && (
              <Button variant='outline' size={"sm"}>
                <Link
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub className='mr-2 w-4 h-4' />
                  GitHub
                </Link>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function AnimatedSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <h3 className='flex items-center gap-2 mb-4 font-semibold text-xl'>
        <Sparkles className='w-5 h-5 text-purple-400' />

        {title}
      </h3>

      {children}
    </motion.section>
  );
}

function ProjectList({ title, items }: { title: string; items: string[] }) {
  return (
    <AnimatedSection title={title}>
      <ul className='space-y-3'>
        {items.map((item) => (
          <li key={item} className='flex gap-3 text-muted-foreground'>
            <span className='bg-purple-500 mt-2 rounded-full w-2 h-2' />

            {item}
          </li>
        ))}
      </ul>
    </AnimatedSection>
  );
}
