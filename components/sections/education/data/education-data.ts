import { BookOpen, GraduationCap, Rocket } from "lucide-react"

export const academicData = {
  title: "Diploma in Mechanical Technology",
  institution: "Diploma Engineering",
  status: "completed",
  icon: GraduationCap,
}

export const courseData = [
  {
    id: "level-1-web-dev",
    slug: "complete-web-development-level-1",

    title: "Complete Web Development Course (Level 1)",
    institution: "Programming Hero",

    status: "certified",
    type: "bootcamp",

    certificate: {
      title: "Course Certificate",
      url: "https://drive.google.com/file/d/1-Nsz8hYQokMaTrDszplEDgwykwy086IH/view?usp=drive_link",
      verified: false,
    },

    description:
      "A complete beginner-to-intermediate full-stack web development program focused on real-world projects, modern tools, scalable architecture basics, and AI-assisted development workflow and production-grade application development.",

    highlights: [
      "HTML5, CSS3, Tailwind CSS",
      "JavaScript (ES6+) & TypeScript Basics",
      "React.js Component-Based Architecture",
      "Next.js Fundamentals (App Router basics)",
      "Node.js & Express.js Backend Development",
      "MongoDB & Mongoose ODM",
      "REST API Design & Integration",
      "Authentication System (BetterAuth)",
      "Git & GitHub Version Control Workflow",
      "AI-Assisted Development Workflow",
      "AI Mindset & Engineering Thinking",
    ],

    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Git",
      "GitHub",
      "AI Tools",
    ],

    category: {
      primary: "Full Stack Development",
      secondary: "Web Development Bootcamp",
    },
    duration: {
      label: "Course Duration",
      value: "Self-paced",
    },

    icon: BookOpen,
  },

  {
    id: "level-2-web-dev",
    slug: "next-level-web-development-level-2",

    title: "Next Level Web Development (Level 2)",
    institution: "Programming Hero",

    status: "in-progress",
    type: "advanced-bootcamp",

    certificate: {
      title: "Course Certificate",
      url: null,
      verified: false,
    },

    description:
      "An advanced full-stack engineering program focused on scalable backend systems, TypeScript mastery, system design, AI engineering, database architecture, DevOps, and production-grade application development.",

    highlights: [
      "Advanced TypeScript (Generics, Utility Types, OOP)",
      "Data Structures & Problem Solving",
      "Node.js Advanced Architecture",
      "Express.js & Backend Scaling",
      "SQL & PostgreSQL Deep Dive",
      "Advanced CRUD with TypeScript",
      "Database Design & Normalization",
      "Prisma ORM & Modern Data Layer",
      "Next.js Advanced Concepts (SSR, Server Actions)",
      "Authentication & Authorization Systems",
      "System Design Fundamentals",
      "Redis Caching & Performance Optimization",
      "AI Integration in Full Stack Apps",
      "Docker & Containerization",
      "Nginx Reverse Proxy & Load Balancing",
    ],

    skills: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Next.js",
      "Redis",
      "Docker",
      "Nginx",
      "System Design",
      "AI Integration",
    ],
    duration: {
      label: "Course Status",
      value: "In Progress",
    },
    icon: Rocket,
  },
]
