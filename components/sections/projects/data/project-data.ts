// data/project-data.ts

import { Globe, Layers } from "lucide-react"
import { FaGithub } from "react-icons/fa"

export type ProjectStatus = "completed" | "in-progress"

export interface Project {
  id: string
  slug: string

  title: string
  subtitle: string
  category: string

  status: ProjectStatus
  featured: boolean

  thumbnail: string
  gallery: string[]

  description: string

  technologies: string[]

  features: string[]

  challenges: string[]

  futurePlans: string[]

  liveUrl: string
  githubUrl: string

  duration: string
  role: string
}

export const projectData: Project[] = [
  {
    id: "project-1",

    slug: "ph-tour-management",

    title: "PH Tour Management",

    subtitle: "Full Stack Tourism Management Platform",

    category: "Full Stack",

    status: "completed",

    featured: true,

    thumbnail: "/projects/tour-management/cover.webp",

    gallery: [
      "/projects/tour-management/1.webp",
      "/projects/tour-management/2.webp",
      "/projects/tour-management/3.webp",
      "/projects/tour-management/4.webp",
    ],

    description:
      "A modern full-stack tourism management platform where users can explore, book, and manage travel packages. Includes secure authentication, dashboards, booking management, reviews, and responsive UI.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Better Auth",
      "React Query",
      "Zod",
    ],

    features: [
      "Role-based authentication",
      "Admin dashboard",
      "Tour package management",
      "Booking system",
      "Review & rating",
      "Responsive design",
      "Dark mode",
      "Profile management",
    ],

    challenges: [
      "Designing scalable backend architecture.",
      "Managing authentication across protected routes.",
      "Optimizing API performance.",
      "Building reusable UI components.",
    ],

    futurePlans: [
      "Payment gateway integration",
      "Multi-language support",
      "Notification system",
      "Real-time booking updates",
      "Mobile application",
    ],

    liveUrl: "https://your-live-demo.com",

    githubUrl: "https://github.com/yourusername/project",

    duration: "2 Months",

    role: "Full Stack Developer",
  },
  {
    id: "project-2",

    slug: "ph-tour-management-2",

    title: "PH Tour Management",

    subtitle: "Full Stack Tourism Management Platform",

    category: "Full Stack",

    status: "completed",

    featured: true,

    thumbnail: "/projects/tour-management/cover.webp",

    gallery: [
      "/projects/tour-management/1.webp",
      "/projects/tour-management/2.webp",
      "/projects/tour-management/3.webp",
      "/projects/tour-management/4.webp",
    ],

    description:
      "A modern full-stack tourism management platform where users can explore, book, and manage travel packages. Includes secure authentication, dashboards, booking management, reviews, and responsive UI.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Better Auth",
      "React Query",
      "Zod",
    ],

    features: [
      "Role-based authentication",
      "Admin dashboard",
      "Tour package management",
      "Booking system",
      "Review & rating",
      "Responsive design",
      "Dark mode",
      "Profile management",
    ],

    challenges: [
      "Designing scalable backend architecture.",
      "Managing authentication across protected routes.",
      "Optimizing API performance.",
      "Building reusable UI components.",
    ],

    futurePlans: [
      "Payment gateway integration",
      "Multi-language support",
      "Notification system",
      "Real-time booking updates",
      "Mobile application",
    ],

    liveUrl: "https://your-live-demo.com",

    githubUrl: "https://github.com/yourusername/project",

    duration: "2 Months",

    role: "Full Stack Developer",
  },

  {
    id: "project-3",

    slug: "inventory-management",

    title: "Inventory Management",

    subtitle: "Warehouse & Product Management System",

    category: "Full Stack",

    status: "completed",

    featured: true,

    thumbnail: "/projects/inventory/cover.webp",

    gallery: [
      "/projects/inventory/1.webp",
      "/projects/inventory/2.webp",
      "/projects/inventory/3.webp",
    ],

    description:
      "A complete inventory management system for tracking products, suppliers, stock levels, and sales with analytics dashboard.",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Redux",
      "JWT",
    ],

    features: [
      "Dashboard Analytics",
      "Stock Management",
      "Product CRUD",
      "Supplier Management",
      "Authentication",
      "Search & Filter",
    ],

    challenges: [
      "Building efficient filtering.",
      "Managing large datasets.",
      "Designing reusable APIs.",
    ],

    futurePlans: ["Barcode Scanner", "Export Reports", "Advanced Analytics"],

    liveUrl: "https://your-live-demo.com",

    githubUrl: "https://github.com/yourusername/project",

    duration: "1.5 Months",

    role: "Full Stack Developer",
  },

  {
    id: "project-4",

    slug: "portfolio",

    title: "Developer Portfolio",

    subtitle: "Modern Personal Portfolio",

    category: "Frontend",

    status: "in-progress",

    featured: true,

    thumbnail: "/projects/portfolio/cover.webp",

    gallery: [
      "/projects/portfolio/1.webp",
      "/projects/portfolio/2.webp",
      "/projects/portfolio/3.webp",
    ],

    description:
      "A modern developer portfolio built with Next.js 15, shadcn/ui, Framer Motion, and TypeScript to showcase projects, skills, education, and professional experience.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],

    features: [
      "Dark Mode",
      "Responsive Design",
      "Animated UI",
      "Project Showcase",
      "Education",
      "Skills",
      "Contact Form",
    ],

    challenges: [
      "Creating reusable components.",
      "Maintaining performance with animations.",
      "Design consistency across sections.",
    ],

    futurePlans: ["Blog", "CMS", "GitHub API Integration", "Visitor Analytics"],

    liveUrl: "https://your-live-demo.com",

    githubUrl: "https://github.com/yourusername/portfolio",

    duration: "Ongoing",

    role: "Frontend Developer",
  },
]

export const projectActions = [
  {
    title: "Live Demo",
    icon: Globe,
  },
  {
    title: "GitHub",
    icon: FaGithub,
  },
  {
    title: "Details",
    icon: Layers,
  },
]
