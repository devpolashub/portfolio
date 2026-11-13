/**
 * Single source of truth for identity, contact, location, brand and social links.
 * Everything else (site config, metadata, JSON-LD) derives from this file.
 */
export const profile = {
  name: "Polas Chandra Barmon",
  username: "devpolas",

  role: "Full-Stack & AI Engineer",
  headline:
    "Building reliable web applications and AI-powered products, from interface to infrastructure.",
  description:
    "Full-Stack & AI Engineer focused on modern web applications, backend APIs, authentication, databases, and AI features such as RAG, agents, and tool calling.",

  website: "https://www.polas.dev",

  // TODO: confirm which address is monitored (README used dpi.polas@gmail.com).
  email: "hello@polas.dev",

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

  social: {
    github: "https://github.com/devpolas",
    // TODO: README linked /in/lipcb, config linked /in/devpolas. Keep only the live one.
    linkedin: "https://www.linkedin.com/in/devpolas/",
    x: "https://x.com/XTWPCB",
    facebook: [
      "https://www.facebook.com/devpolas",
      "https://www.facebook.com/fbpcb/",
    ],
    telegram: "https://t.me/devpolas",
    whatsapp: "https://wa.me/message/CB3BJMCEUNTDD1",
  },

  // TODO: verify these self-assessed levels (especially Hindi).
  languages: [
    { name: "Bengali", code: "bn", proficiency: "Native or bilingual" },
    { name: "English", code: "en", proficiency: "Professional working" },
    { name: "Hindi", code: "hi", proficiency: "Professional working" },
  ],
} as const;

export type Profile = typeof profile;
