"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight, FileBadge2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import GetBadge, { EducationStatus } from "./education-badge";
import { academicData, courseData } from "./data/education-data";

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function EducationSection() {
  const AcademicIcon = academicData.icon;

  return (
    <section
      id='education'
      aria-labelledby='education-heading'
      className='relative py-24 md:py-32 overflow-hidden'
    >
      {/* Subtle brand atmosphere */}
      <div
        aria-hidden='true'
        className='-top-32 right-0 -z-10 absolute bg-brand/5 blur-3xl rounded-full size-96 pointer-events-none'
      />

      <div
        aria-hidden='true'
        className='bottom-0 left-0 -z-10 absolute bg-brand-nature/5 blur-3xl rounded-full size-80 pointer-events-none'
      />

      <div className='mx-auto px-4 container'>
        {/* Section heading */}
        <motion.div
          variants={revealVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='mx-auto mb-14 max-w-2xl text-center'
        >
          <Badge
            variant='outline'
            className='bg-brand/5 mb-5 px-3 py-1 border-brand/20 rounded-full text-brand'
          >
            Learning journey
          </Badge>

          <h2
            id='education-heading'
            className='font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight'
          >
            Education & <span className='text-brand'>Learning</span>
          </h2>

          <p className='mt-5 text-muted-foreground text-sm md:text-base leading-7'>
            My academic background and continuous learning journey in software
            engineering, modern web technologies, and full-stack application
            development.
          </p>
        </motion.div>

        <div className='space-y-12 mx-auto max-w-5xl'>
          {/* Academic background */}
          <motion.div
            variants={revealVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className='relative bg-card shadow-sm hover:shadow-lg border-border/60 overflow-hidden transition-all hover:-translate-y-1 duration-300'>
              <div
                aria-hidden='true'
                className='left-0 absolute inset-y-0 bg-brand w-1'
              />

              <CardContent className='flex md:flex-row flex-col md:items-center gap-6 p-6 md:p-8'>
                <div className='flex justify-center items-center bg-brand/5 border border-brand/15 rounded-2xl size-16 text-brand shrink-0'>
                  <AcademicIcon className='size-8' />
                </div>

                <div className='flex-1 min-w-0'>
                  <div className='flex flex-wrap items-center gap-3 mb-3'>
                    <h3 className='font-semibold text-xl md:text-2xl tracking-tight'>
                      {academicData.title}
                    </h3>

                    <GetBadge status={academicData.status as EducationStatus} />
                  </div>

                  <p className='font-medium text-muted-foreground'>
                    {academicData.institution}
                  </p>

                  <p className='mt-4 max-w-3xl text-muted-foreground text-sm md:text-base leading-7'>
                    Completed a Diploma in Mechanical Technology, building a
                    strong engineering foundation in analytical thinking,
                    technical problem solving, teamwork, and project execution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Courses and professional learning */}
          <div>
            <div className='mb-6'>
              <h3 className='font-semibold text-xl tracking-tight'>
                Courses & Professional Learning
              </h3>

              <p className='mt-2 text-muted-foreground text-sm'>
                Focused learning experiences and technical skill development.
              </p>
            </div>

            <motion.div
              variants={staggerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.1 }}
              className='gap-5 grid lg:grid-cols-2'
            >
              {courseData.map((course) => {
                const CourseIcon = course.icon;

                return (
                  <motion.div
                    key={course.id}
                    variants={revealVariants}
                    className='h-full'
                  >
                    <Card className='group flex flex-col bg-card shadow-sm hover:shadow-lg border-border/60 hover:border-brand/30 h-full overflow-hidden transition-all hover:-translate-y-1 duration-300'>
                      <CardHeader className='space-y-4 p-6'>
                        <div className='flex justify-between items-start gap-4'>
                          <div className='flex justify-center items-center bg-brand/5 group-hover:bg-brand/10 border border-brand/15 rounded-xl size-12 text-brand transition-colors'>
                            <CourseIcon className='size-6' />
                          </div>

                          <GetBadge status={course.status as EducationStatus} />
                        </div>

                        <div>
                          <CardTitle className='text-lg leading-snug'>
                            {course.title}
                          </CardTitle>

                          <CardDescription className='mt-2'>
                            {course.institution}
                          </CardDescription>
                        </div>

                        {course.certificate.url ? (
                          <Link
                            href={course.certificate.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group/link inline-flex items-center gap-2 bg-brand/5 hover:bg-brand/10 px-3 py-2 border border-brand/20 rounded-lg w-fit font-medium text-brand text-sm transition-colors'
                          >
                            <FileBadge2 className='size-4' />

                            <span>View Certificate</span>

                            <ArrowUpRight className='size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5' />

                            <span className='sr-only'>
                              (opens in a new tab)
                            </span>
                          </Link>
                        ) : (
                          <span className='inline-flex items-center px-3 py-2 border border-dashed rounded-lg w-fit text-muted-foreground text-sm'>
                            Certificate not issued
                          </span>
                        )}
                      </CardHeader>

                      <CardContent className='flex flex-col flex-1 px-6 pb-6'>
                        <p className='text-muted-foreground text-sm leading-7'>
                          {course.description}
                        </p>

                        <div className='mt-auto pt-6'>
                          <h4 className='mb-3 font-semibold text-sm'>
                            Core Skills
                          </h4>

                          <div className='flex flex-wrap gap-2'>
                            {course.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant='secondary'
                                className='bg-muted/60 border border-border/60 font-normal'
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
