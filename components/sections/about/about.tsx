"use client";

import { motion } from "motion/react";
import { BookOpen, Code2, Compass, Sprout } from "lucide-react";

import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import AboutCard, { type AboutCardContent } from "./about-card";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

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

export default function About() {
  return (
    <Section id='about' glow='left'>
      <SectionHeading
        id='about'
        eyebrow='A little about me'
        title={
          <>
            The person behind <span className='text-brand'>the projects.</span>
          </>
        }
        description="I'm a Full-Stack Developer who enjoys turning ideas into scalable, user-friendly web applications. Great software combines thoughtful design, clean engineering, and meaningful user experiences."
      />

      <motion.div
        variants={stagger(0.12)}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        className='gap-4 lg:gap-5 grid sm:grid-cols-2'
      >
        {aboutContent.map((content) => (
          <AboutCard key={content.id} content={content} />
        ))}
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={viewportOnce}
        className='mx-auto mt-12 sm:mt-16 max-w-lg text-muted-foreground text-sm text-center leading-7'
      >
        Always exploring, always improving, and always looking for meaningful
        problems to solve.
      </motion.p>
    </Section>
  );
}
