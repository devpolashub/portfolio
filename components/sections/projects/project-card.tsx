"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "motion/react";
import { Globe, Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "./data/project-data";
import { FaGithub } from "react-icons/fa";
import ProjectDialog from "./project-dialog";
import { getStatusBadge } from "./project-badge";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier
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
      viewport={{ once: true }}
    >
      <Card className='group flex flex-col hover:shadow-2xl pt-0 h-full overflow-hidden transition-all duration-300 glass-morphism'>
        <div className='-z-10 absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,10,60,1)_0%,rgba(10,5,20,1)_100%)] to-muted' />
        {/* Image */}

        <div className='relative aspect-video overflow-hidden'>
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority={index === 0}
            className='object-cover group-hover:scale-105 transition duration-500'
          />

          <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent' />

          <div className='top-4 left-4 absolute flex gap-2'>
            <Badge>{project.category}</Badge>

            {getStatusBadge(project.status)}
          </div>
        </div>

        {/* Header */}

        <CardHeader>
          <CardTitle className='text-xl line-clamp-1'>
            {project.title}
          </CardTitle>

          <p className='text-muted-foreground text-sm'>{project.subtitle}</p>
        </CardHeader>

        {/* Content */}

        <CardContent className='flex-1'>
          <p className='mb-4 text-muted-foreground text-sm line-clamp-3'>
            {project.description}
          </p>

          {/* Tech Stack */}

          <div className='flex flex-wrap gap-2 mb-4'>
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge
                key={tech}
                className='border-purple-300 dark:border-purple-900 text-xs'
                variant='secondary'
              >
                {tech}
              </Badge>
            ))}

            {project.technologies.length > 5 && (
              <Badge
                className='border-purple-300 dark:border-purple-900 text-xs'
                variant='secondary'
              >
                +{project.technologies.length - 5}
              </Badge>
            )}
          </div>

          {/* Meta */}

          <div className='flex justify-between items-center text-muted-foreground text-sm'>
            <div className='flex items-center gap-2'>
              <Clock3 className='w-4 h-4' />
              {project.duration}
            </div>

            <Badge variant='outline'>{project.role}</Badge>
          </div>
        </CardContent>

        {/* Footer */}

        <CardFooter className='gap-2 grid grid-cols-3'>
          <ProjectDialog project={project}>
            <Button
              variant='outline'
              size='sm'
              className='hover:cursor-pointer'
            >
              Details
            </Button>
          </ProjectDialog>

          <Button variant={"secondary"} size='sm' className='group/button'>
            <Link href={project.liveUrl} target='_blank'>
              <Globe className='mr-2 w-4 h-4' />
              Live
            </Link>
          </Button>

          <Button variant='outline' size='sm'>
            <Link href={project.githubUrl} target='_blank'>
              <FaGithub className='mr-2 w-4 h-4' />
              GitHub
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
