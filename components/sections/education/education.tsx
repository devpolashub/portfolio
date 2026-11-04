"use client"
import { AnimatePresence, motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getBadge } from "./education-badge"
import { academicData, courseData } from "./data/education-data"
import Link from "next/link"
import { ArrowUpRight, FileBadge2 } from "lucide-react"

export default function EducationSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="education"
      className="relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(40,10,60,1)_0%,rgba(10,5,20,1)_100%)] to-muted" />

      <div className="container mx-auto px-4 py-24">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-2xl leading-tight font-bold md:text-3xl lg:text-5xl">
            Education &{" "}
            <span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Learning
            </span>
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-lg">
            My academic background and continuous learning journey in software
            engineering, modern web technologies, and full-stack application
            development.
          </p>
        </motion.div>

        <div className="space-y-4">
          {/* Diploma */}

          <Card className="glass-morphism transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(40,10,60,1)_0%,rgba(10,5,20,1)_100%)] to-muted" />
            <CardContent className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="rounded-xl bg-primary/10 p-2">
                <academicData.icon className="h-10 w-10 text-purple-500" />
              </div>

              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold">{academicData.title}</h3>

                  {getBadge(academicData.status)}
                </div>

                <p className="font-medium text-muted-foreground">
                  {academicData.institution}
                </p>

                <p className="mt-2 max-w-3xl text-muted-foreground">
                  Completed a Diploma in Mechanical Technology, building a
                  strong engineering foundation in analytical thinking,
                  technical problem solving, teamwork, and project execution.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Courses */}

          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid gap-4 lg:grid-cols-2"
            >
              {courseData.map((course) => (
                <Card
                  key={course.id}
                  className="glass-morphism flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(40,10,60,1)_0%,rgba(10,5,20,1)_100%)] to-muted" />
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <course.icon className="h-7 w-7 text-purple-500" />
                      </div>

                      {getBadge(course.status)}
                    </div>

                    <CardTitle className="leading-snug">
                      {course.title}
                    </CardTitle>

                    <CardDescription>
                      <p className="mb-2 font-medium">{course.institution}</p>

                      {course.certificate.url ? (
                        <Link
                          href={course.certificate.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 rounded-xl border bg-card px-2 py-1 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                        >
                          <div className="rounded-md bg-primary/10 p-1 text-primary">
                            <FileBadge2 className="h-4 w-4" />
                          </div>

                          <span>View Certificate</span>

                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </Link>
                      ) : (
                        <span className="inline-flex items-center rounded-full border border-dashed px-3 py-1.5 text-sm text-muted-foreground">
                          Not Issued
                        </span>
                      )}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="-mt-1 flex flex-1 flex-col">
                    <p className="mb-4 text-sm leading-7 text-muted-foreground">
                      {course.description}
                    </p>

                    <h4 className="mb-3 text-sm font-semibold">Core Skills</h4>

                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill) => (
                        <Badge
                          key={skill}
                          className="border-purple-300 text-sm dark:border-purple-900"
                          variant="secondary"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}
