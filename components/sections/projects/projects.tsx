"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

import { ProjectCard } from "./project-card";
import { projectData } from "./data/project-data";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProjectSection() {
  // Display a curated selection on the homepage.
  const featuredProjects = projectData.slice(0, 3);

  return (
    <section
      id='projects'
      aria-labelledby='projects-heading'
      className='isolate relative py-20 sm:py-28 lg:py-32 overflow-hidden'
    >
      {/* Subtle brand atmosphere */}
      <div
        aria-hidden='true'
        className='-z-10 absolute inset-0 overflow-hidden pointer-events-none'
      >
        <div className='top-20 -right-40 absolute bg-brand/5 blur-[120px] rounded-full size-105' />
        <div className='bottom-0 -left-40 absolute bg-brand-accent/5 blur-[110px] rounded-full size-87.5' />
      </div>

      <div className='mx-auto px-4 sm:px-6 lg:px-8 container'>
        {/* Section heading */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='flex lg:flex-row flex-col lg:justify-between lg:items-end gap-6 mb-12 sm:mb-16'
        >
          <div className='max-w-2xl'>
            <motion.div
              variants={headingVariants}
              className='inline-flex items-center gap-2 mb-4 font-medium text-brand text-sm'
            >
              <Sparkles className='size-4' />
              <span>Selected work</span>
            </motion.div>

            <motion.h2
              id='projects-heading'
              variants={headingVariants}
              className='font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight'
            >
              Building ideas into{" "}
              <span className='text-brand'>real products.</span>
            </motion.h2>

            <motion.p
              variants={headingVariants}
              className='mt-5 max-w-xl text-muted-foreground text-sm sm:text-base leading-7 sm:leading-8'
            >
              A selection of projects where I explore ideas, solve practical
              problems, and build thoughtful digital experiences with modern
              technologies.
            </motion.p>
          </div>

          <motion.div variants={headingVariants} className='shrink-0'>
            <Link
              href='/projects'
              className={buttonVariants({
                variant: "outline",
                className: "group w-fit gap-2",
              })}
            >
              Explore all projects
              <ArrowRight className='size-4 transition-transform group-hover:translate-x-1 duration-300' />
            </Link>
          </motion.div>
        </motion.div>

        {/* Featured projects */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          className='gap-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUpVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='flex flex-col justify-center items-center gap-3 mt-12 sm:mt-16 text-center'
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
      </div>
    </section>
  );
}
