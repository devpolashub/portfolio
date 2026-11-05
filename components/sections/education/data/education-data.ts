import { BookOpen, GraduationCap, Rocket } from "lucide-react";

export const academicData = {
  title: "Diploma in Mechanical Technology",
  institution: "Diploma Engineering",
  status: "completed",
  icon: GraduationCap,
};

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
];

export type Certification = {
  name: string;
  issuer: "HackerRank" | "Programming Hero";
  credentialId: string;
  skills: string[];
  verificationUrl?: string;
  certificateFile?: string;
};

export const certifications: Certification[] = [
  {
    name: "Complete Web Development",
    issuer: "Programming Hero",
    credentialId: "WEB12-0898",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Web Development",
    ],
    verificationUrl:
      "https://drive.google.com/file/d/1-Nsz8hYQokMaTrDszplEDgwykwu086IH/view?usp=drive_link",
  },
  {
    name: "Software Engineer Intern",
    issuer: "HackerRank",
    credentialId: "7A47BA00E7F1",
    skills: ["Software Development"],
  },
  {
    name: "Software Engineer",
    issuer: "HackerRank",
    credentialId: "9A6997D7346D",
    skills: ["Software Development"],
  },
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    credentialId: "9215A46E2B60",
    skills: ["React.js", "Front-End Development"],
  },
  {
    name: "Node.js (Intermediate)",
    issuer: "HackerRank",
    credentialId: "421802E5F3E1",
    skills: ["Node.js"],
    certificateFile: "/certificates/nodejs_intermediate-certificate.pdf",
  },
  {
    name: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    credentialId: "7EAE1CB65D60",
    skills: ["JavaScript"],
    certificateFile: "/certificates/javascript_intermediate-certificate.pdf",
  },
  {
    name: "Node.js (Basic)",
    issuer: "HackerRank",
    credentialId: "0BF03DE42656",
    skills: ["Node.js"],
    certificateFile: "/certificates/nodejs_basic-certificate.pdf",
  },
  {
    name: "JavaScript (Basic)",
    issuer: "HackerRank",
    credentialId: "093787A55EFB",
    skills: ["JavaScript"],
    certificateFile: "/certificates/javascript_basic-certificate.pdf",
  },
  {
    name: "Cascading Style Sheets",
    issuer: "HackerRank",
    credentialId: "E71D5BB82C9B",
    skills: ["CSS"],
    certificateFile: "/certificates/css-certificate.pdf",
  },
];
