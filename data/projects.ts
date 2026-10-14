export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: "Full-Stack" | "Frontend" | "Backend";
  featured: boolean;
  status: "Completed" | "In Progress" | "Maintained";
  technologies: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  image?: string;
  problem?: string;
  solution?: string;
  architecture?: string[];
  challenges?: string[];
  outcomes?: string[];
};

export const projects: Project[] = [
  {
    slug: "blood-aidx",
    title: "Blood AidX",
    summary:
      "A blood donation platform connecting donors, recipients, and organizations.",
    description:
      "A full-stack platform for blood requests, donor workflows, organizations, and related account management.",
    category: "Full-Stack",
    featured: true,
    status: "In Progress",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
    ],
    repositoryUrl: "https://github.com/devpolas",
    liveUrl: "https://blood-aidx-api.vercel.app/api/v1",
    architecture: ["Next.js frontend", "Express API", "PostgreSQL database"],
  },
  {
    slug: "study-mate",
    title: "Study Mate",
    summary: "A React and TypeScript social learning application.",
    description:
      "A client application focused on authentication, user discovery, filtering, and pagination.",
    category: "Frontend",
    featured: true,
    status: "Completed",
    technologies: ["React", "TypeScript", "Redux Toolkit", "TanStack Query"],
  },
  {
    slug: "study-mate-backend-api",
    title: "Study Mate Backend API",
    summary: "A backend API for a social learning platform.",
    description:
      "An API built around authentication, user workflows, and Firebase social login.",
    category: "Backend",
    featured: true,
    status: "Completed",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Firebase"],
  },
  {
    slug: "scholar-stream",
    title: "Scholar Stream",
    summary: "A scholarship-focused web application built with React and Vite.",
    description:
      "A web application using React, React Router, Firebase, and data-fetching and form libraries.",
    category: "Frontend",
    featured: true,
    status: "Completed",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "TanStack Query",
      "React Hook Form",
      "DaisyUI",
    ],
  },
  {
    slug: "scholar-stream-server",
    title: "Scholar Stream Server",
    summary: "A REST API supporting scholarship and application workflows.",
    description:
      "An Express API with user management, scholarship workflows, reviews, and Stripe payment integration.",
    category: "Backend",
    featured: false,
    status: "Completed",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "JWT",
    ],
  },
];
