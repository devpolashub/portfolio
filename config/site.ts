import { profile } from "@/data/profile";

export const siteConfig = {
  name: profile.name,
  username: profile.username,
  brandName: "POLAS",

  title: profile.role,
  headline: profile.headline,

  // ~155 characters: fits Google's snippet length.
  description:
    "Polas Chandra Barmon is a Full-Stack & AI Engineer building reliable web apps and AI-powered features with Next.js, TypeScript, Node.js, PostgreSQL, and RAG.",

  url: profile.website,
  email: profile.email,
  locale: "en_US",
  twitterHandle: "@XTWPCB",

  social: {
    github: profile.social.github,
    linkedin: profile.social.linkedin,
    x: profile.social.x,
    facebook: profile.social.facebook[0],
    telegram: profile.social.telegram,
    whatsapp: profile.social.whatsapp,
  },

  location: profile.location,
  brand: profile.brand,

  professional: {
    specialties: [
      "Full-Stack Web Development",
      "Frontend Engineering",
      "Backend API Development",
      "Database Design",
      "AI Engineering",
      "Software Architecture",
      "Performance Optimization",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "MongoDB",
      "Mongoose",
      "Redis",
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Retrieval-Augmented Generation",
      "Embeddings",
      "Vector Search",
      "AI Agents",
      "n8n",
    ],

    interests: [
      "System Design",
      "Software Architecture",
      "AI Applications",
      "Agentic Workflows",
      "Developer Experience",
      "Performance Optimization",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
