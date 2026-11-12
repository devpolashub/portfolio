"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { ProjectCard } from "./project-card";
import { projectData } from "./data/project-data";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

export default function ProjectSection() {
  const featured = projectData.slice(0, 3);

  return (
    <Section id='projects' glow='right'>
      <SectionHeading
        id='projects'
        align='left'
        eyebrow='Selected work'
        title={
          <>
            Building ideas into{" "}
            <span className='text-brand'>real products.</span>
          </>
        }
        description='A selection of projects where I explore ideas, solve practical problems, and build thoughtful digital experiences.'
        action={
          <Link
            href='/projects'
            className={buttonVariants({
              variant: "outline",
              className: "group w-fit shrink-0 gap-2",
            })}
          >
            Explore all projects
            <ArrowRight className='size-4 transition-transform group-hover:translate-x-1 duration-300' />
          </Link>
        }
      />

      {/* Cards animate themselves with a per-index delay */}
      <div className='gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={viewportOnce}
        className='flex flex-col items-center gap-1 mt-12 sm:mt-16 text-center'
      >
        <p className='text-muted-foreground text-sm'>
          Interested in how I approach a project?
        </p>
        <Link
          href='/contact'
          className={buttonVariants({
            variant: "link",
            className: "group gap-2 text-brand",
          })}
        >
          Let&apos;s work together
          <ArrowRight className='size-4 transition-transform group-hover:translate-x-1 duration-300' />
        </Link>
      </motion.div>
    </Section>
  );
}
