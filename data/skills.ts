export type SkillGroup = {
  title: string;
  description: string;
  skills: readonly string[];
};

export const skillGroups = [
  {
    title: "Languages & Web Foundations",
    description: "Programming languages and core web technologies.",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend Development",
    description: "Building responsive web interfaces and client applications.",
    skills: [
      "React",
      "Next.js",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Sass",
      "styled-components",
      "DaisyUI",
      "shadcn/ui",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "State Management, Data Fetching & Forms",
    description: "Managing application state, server data, and forms.",
    skills: [
      "Redux Toolkit",
      "Redux Thunk",
      "Zustand",
      "TanStack Query",
      "TanStack Table",
      "React Hook Form",
      "TanStack Form",
      "Zod",
      "Axios",
    ],
  },
  {
    title: "Animation, Charts & Mapping",
    description: "Interface animation, data visualization, and maps.",
    skills: ["Framer Motion", "GSAP", "Recharts", "React Leaflet"],
  },
  {
    title: "Backend Development & APIs",
    description: "Building server applications and API integrations.",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "REST APIs",
      "GraphQL",
      "Nodemailer",
    ],
  },
  {
    title: "Databases, ORMs & Caching",
    description: "Database systems, data access, and in-memory caching.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Mongoose"],
  },
  {
    title: "Authentication & Application Security",
    description: "Identity, sessions, and access control.",
    skills: [
      "Better Auth",
      "Auth.js",
      "JWT",
      "OAuth 2.0",
      "Firebase Authentication",
      "bcrypt",
    ],
  },
  {
    title: "Payments & External Services",
    description: "Payment providers and backend service integrations.",
    skills: ["Stripe", "SSLCommerz", "Firebase", "Supabase"],
  },
  {
    title: "Testing & Quality Assurance",
    description: "Automated testing for components, APIs, and applications.",
    skills: ["Jest", "Vitest", "Testing Library", "Supertest", "Playwright"],
  },
  {
    title: "DevOps, Deployment & Infrastructure",
    description: "Application deployment and infrastructure tooling.",
    skills: ["Docker", "Nginx", "Vercel", "Netlify"],
  },
  {
    title: "Development Tools & Operating Systems",
    description:
      "Source control, development environments, and operating systems.",
    skills: ["Git", "GitHub", "npm", "Visual Studio Code", "Linux", "Windows"],
  },
] as const satisfies readonly SkillGroup[];

export const engineeringPractices = [
  "Responsive Web Design",
  "API Design",
  "Middleware Development",
  "Input Validation",
  "Error Handling",
  "Authentication & Authorization",
  "Role-Based Access Control",
  "Session Management",
  "Cookie-Based Authentication",
  "Webhooks",
  "Third-Party API Integration",
  "Caching",
  "Type Safety",
  "Clean Code",
  "Performance Optimization",
  "Unit Testing",
  "Component Testing",
  "Integration Testing",
  "API Testing",
  "End-to-End Testing",
  "Test Automation",
  "Containerization",
  "Reverse Proxy Configuration",
  "Environment Configuration",
  "CI/CD",
] as const;

export const areasOfInterest = [
  "Scalable Web Applications",
  "Software Architecture",
  "Secure Application Design",
  "Real-Time Applications",
  "Performance Optimization",
  "AI Integration",
  "Developer Experience",
] as const;
