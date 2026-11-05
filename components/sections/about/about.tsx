"use client";

import { motion, type Variants } from "motion/react";
import { ArrowDownRight, BookOpen, Code2, Compass, Sprout } from "lucide-react";

import AboutCard, { type AboutCardContent } from "./about-card";

const aboutContent: AboutCardContent[] = [
  {
    id: 1,
    eyebrow: "My journey",
    cardTitle: "Curiosity into engineering",
    description:
      "My journey into development started with curiosity about how websites work.",
    detail:
      "That curiosity grew into a passion for building full-stack applications. From learning HTML, CSS, and JavaScript to working with React, Next.js, TypeScript, Node.js, and PostgreSQL, each project has helped me develop a stronger understanding of software engineering.",
    icon: <Compass className='size-5' />,
  },
  {
    id: 2,
    eyebrow: "What I build",
    cardTitle: "Practical digital products",
    description:
      "I enjoy turning ideas and real-world problems into thoughtful web experiences.",
    detail:
      "My interests include full-stack applications, authentication systems, dashboards, REST APIs, database-driven platforms, and reusable interfaces. I care about performance, accessibility, maintainability, and the experience people have using the software.",
    icon: <Code2 className='size-5' />,
  },
  {
    id: 3,
    eyebrow: "How I grow",
    cardTitle: "Always learning",
    description:
      "I believe becoming a better developer is a continuous process.",
    detail:
      "I regularly explore modern frameworks, backend architecture, database design, and software engineering practices. I'm also expanding my knowledge of AI engineering, including LLMs, RAG, and agent-based systems.",
    icon: <BookOpen className='size-5' />,
  },
  {
    id: 4,
    eyebrow: "Beyond the code",
    cardTitle: "Building with purpose",
    description: "For me, development is about more than writing code.",
    detail:
      "I enjoy exploring new technologies, experimenting with development tools, working on personal projects, and learning from the developer community. My goal is to build useful software that makes everyday experiences better.",
    icon: <Sprout className='size-5' />,
  },
];

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
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <section
      id='about'
      aria-labelledby='about-heading'
      className='isolate relative py-20 sm:py-28 lg:py-32 overflow-hidden'
    >
      {/* Brand atmosphere */}
      <div
        aria-hidden='true'
        className='-z-10 absolute inset-0 overflow-hidden pointer-events-none'
      >
        <div className='top-20 -left-40 absolute bg-brand/5 blur-[120px] rounded-full size-[380px]' />

        <div className='-right-40 bottom-0 absolute bg-brand-nature/5 blur-[120px] rounded-full size-[350px]' />
      </div>

      <div className='mx-auto px-4 sm:px-6 lg:px-8 container'>
        {/* Section introduction */}
        <motion.div
          variants={headingVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='mx-auto mb-12 sm:mb-16 max-w-3xl text-center'
        >
          <div className='inline-flex items-center gap-2 bg-brand/5 mb-5 px-3 py-1.5 border border-brand/20 rounded-full font-medium text-brand text-xs'>
            <span className='bg-brand rounded-full size-1.5' />A little about me
          </div>

          <h2
            id='about-heading'
            className='font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight'
          >
            The person behind <span className='text-brand'>the projects.</span>
          </h2>

          <p className='mx-auto mt-6 max-w-2xl text-muted-foreground text-sm sm:text-base leading-8'>
            I'm a Full-Stack Developer who enjoys transforming ideas into
            scalable, user-friendly, and reliable web applications. I believe
            great software combines thoughtful design, clean engineering, and
            meaningful user experiences.
          </p>
        </motion.div>

        {/* About cards */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          className='gap-4 lg:gap-5 grid sm:grid-cols-2'
        >
          {aboutContent.map((content) => (
            <AboutCard key={content.id} content={content} />
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          variants={headingVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='flex flex-col items-center gap-3 mt-12 sm:mt-16 text-center'
        >
          <div className='flex items-center gap-2 font-medium text-brand text-sm'>
            <span className='bg-brand/40 w-8 h-px' />
            <span>Thoughtful engineering. Meaningful products.</span>
            <span className='bg-brand/40 w-8 h-px' />
          </div>

          <p className='max-w-lg text-muted-foreground text-sm leading-7'>
            Always exploring, always improving, and always looking for
            meaningful problems to solve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
