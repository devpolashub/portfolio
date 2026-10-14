const siteUrl = "https://www.polas.dev";

export const siteConfig = {
  name: "Polas Chandra Barmon",
  username: "devpolas",
  brandName: "POLAS",

  title: "Full-Stack & AI Engineer",

  headline:
    "Building thoughtful digital products with full-stack engineering and AI.",

  description:
    "Polas Chandra Barmon is a Full-Stack Developer focused on Next.js, React, TypeScript, Node.js, PostgreSQL, and AI engineering. Building reliable, performant, and user-focused digital products.",

  url: siteUrl,
  email: "hello@polas.dev",
  locale: "en_US",

  social: {
    github: "https://github.com/devpolas",
    linkedin: "https://www.linkedin.com/in/devpolas/",
    facebook: "https://www.facebook.com/devpolas",
    telegram: "https://t.me/devpolas",
    whatsapp: "https://wa.me/message/CB3BJMCEUNTDD1",
  },

  location: {
    city: "Thakurgaon",
    division: "Rangpur Division",
    country: "Bangladesh",
    countryCode: "BD",
  },

  brand: {
    name: "Palash",
    botanicalName: "Butea monosperma",
    inspiration: "Flame of the Forest",
    tagline: "Thoughtful engineering. Meaningful products.",
    philosophy:
      "Building reliable, accessible, and user-focused digital experiences.",

    colors: {
      ember: "#B83A22",
      flame: "#F17B38",
      leaf: "#174B35",
      petal: "#F7F1E5",
      midnight: "#151B17",
    },
  },

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
      "PostgreSQL",
      "Prisma ORM",
      "MongoDB",
      "Mongoose",
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Retrieval-Augmented Generation",
      "Vector Databases",
      "AI Agents",
      "Model Context Protocol",
    ],

    interests: [
      "System Design",
      "Software Architecture",
      "AI Applications",
      "Developer Experience",
      "Performance Optimization",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
