import { db } from "./db";

// Types

type ProjectCategory = "FULL_STACK" | "FRONTEND" | "BACKEND";
type ProjectStatus = "COMPLETED" | "IN_PROGRESS" | "MAINTAINED";
type ProjectLinkType = "REPOSITORY" | "LIVE_DEMO";
type ProfileItemType = "ENGINEERING_PRACTICE" | "AREA_OF_INTEREST";

// Profile

const profile = {
  id: "main",
  name: "Polas Chandra Barmon",
  username: "devpolas",
  role: "Full-Stack Developer",
  headline:
    "Building scalable web applications with modern JavaScript technologies.",
  description:
    "Full-Stack Developer focused on modern web applications, frontend engineering, backend APIs, authentication, and database-driven software.",
  website: "https://www.polas.dev",
  email: "hello@polas.dev",
  city: "Thakurgaon",
  region: "Rangpur Division",
  country: "Bangladesh",
  brandName: "Palash",
  brandTagline: "Thoughtful engineering. Meaningful products.",
};

// Social links

const socialLinks = [
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/devpolas/",
    username: "devpolas",
    sortOrder: 1,
  },
  {
    platform: "github",
    label: "GitHub",
    url: "https://github.com/devpolas",
    username: "devpolas",
    sortOrder: 2,
  },
  {
    platform: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/fbpcb/",
    sortOrder: 3,
  },
  {
    platform: "facebook-personal",
    label: "Facebook Profile",
    url: "https://www.facebook.com/devpolas",
    username: "devpolas",
    sortOrder: 4,
  },
  {
    platform: "telegram",
    label: "Telegram",
    url: "https://t.me/devpolas",
    username: "devpolas",
    sortOrder: 5,
  },
  {
    platform: "whatsapp",
    label: "WhatsApp",
    url: "https://wa.me/message/CB3BJMCEUNTDD1",
    sortOrder: 6,
  },
] as const;

// Languages

const languages = [
  { name: "Bengali", code: "bn", proficiency: "Native or bilingual" },
  { name: "English", code: "en", proficiency: "Professional working" },
  { name: "Hindi", code: "hi", proficiency: "Professional working" },
] as const;

// Profile items

const engineeringPractices = [
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

const areasOfInterest = [
  "Scalable Web Applications",
  "Software Architecture",
  "Secure Application Design",
  "Real-Time Applications",
  "Performance Optimization",
  "AI Integration",
  "Developer Experience",
] as const;

// Skill groups

const skillGroups = [
  {
    name: "Languages & Web Foundations",
    slug: "languages-web-foundations",
    description: "Programming languages and core web technologies.",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    name: "Frontend Development",
    slug: "frontend-development",
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
    name: "State Management, Data Fetching & Forms",
    slug: "state-management-data-fetching-forms",
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
    name: "Animation, Charts & Mapping",
    slug: "animation-charts-mapping",
    description: "Interface animation, data visualization, and maps.",
    skills: ["Framer Motion", "GSAP", "Recharts", "React Leaflet"],
  },
  {
    name: "Backend Development & APIs",
    slug: "backend-development-apis",
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
    name: "Databases, ORMs & Caching",
    slug: "databases-orms-caching",
    description: "Database systems, data access, and in-memory caching.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Mongoose"],
  },
  {
    name: "Authentication & Application Security",
    slug: "authentication-application-security",
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
    name: "Payments & External Services",
    slug: "payments-external-services",
    description: "Payment providers and backend service integrations.",
    skills: ["Stripe", "SSLCommerz", "Firebase", "Supabase"],
  },
  {
    name: "Testing & Quality Assurance",
    slug: "testing-quality-assurance",
    description: "Automated testing for components, APIs, and applications.",
    skills: ["Jest", "Vitest", "Testing Library", "Supertest", "Playwright"],
  },
  {
    name: "DevOps, Deployment & Infrastructure",
    slug: "devops-deployment-infrastructure",
    description: "Application deployment and infrastructure tooling.",
    skills: ["Docker", "Nginx", "Vercel", "Netlify"],
  },
  {
    name: "Development Tools & Operating Systems",
    slug: "development-tools-operating-systems",
    description:
      "Source control, development environments, and operating systems.",
    skills: ["Git", "GitHub", "npm", "Visual Studio Code", "Linux", "Windows"],
  },
] as const;

// Additional certification skills
//
// These aren't in the supplied skill groups, but are required by the
// certification records. They will be stored as ungrouped skills.

const additionalSkills = [
  "Front-End Development",
  "Software Development",
  "Web Development",
] as const;

// Projects

const projects = [
  {
    slug: "blood-aidx",
    title: "Blood AidX",
    summary:
      "A blood donation platform connecting donors, recipients, and organizations.",
    description:
      "A full-stack platform for blood requests, donor workflows, organizations, and related account management.",
    category: "FULL_STACK" as ProjectCategory,
    status: "IN_PROGRESS" as ProjectStatus,
    featured: true,
    sortOrder: 1,
    architecture: ["Next.js frontend", "Express API", "PostgreSQL database"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
    ],
    links: [
      {
        type: "REPOSITORY" as ProjectLinkType,
        label: "GitHub",
        url: "https://github.com/devpolas",
      },
      {
        type: "LIVE_DEMO" as ProjectLinkType,
        label: "API",
        url: "https://blood-aidx-api.vercel.app/api/v1",
      },
    ],
  },
  {
    slug: "study-mate",
    title: "Study Mate",
    summary: "A React and TypeScript social learning application.",
    description:
      "A client application focused on authentication, user discovery, filtering, and pagination.",
    category: "FRONTEND" as ProjectCategory,
    status: "COMPLETED" as ProjectStatus,
    featured: true,
    sortOrder: 2,
    technologies: ["React", "TypeScript", "Redux Toolkit", "TanStack Query"],
  },
  {
    slug: "study-mate-backend-api",
    title: "Study Mate Backend API",
    summary: "A backend API for a social learning platform.",
    description:
      "An API built around authentication, user workflows, and Firebase social login.",
    category: "BACKEND" as ProjectCategory,
    status: "COMPLETED" as ProjectStatus,
    featured: true,
    sortOrder: 3,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Firebase Authentication",
    ],
  },
  {
    slug: "scholar-stream",
    title: "Scholar Stream",
    summary: "A scholarship-focused web application built with React and Vite.",
    description:
      "A web application using React, React Router, Firebase, and data-fetching and form libraries.",
    category: "FRONTEND" as ProjectCategory,
    status: "COMPLETED" as ProjectStatus,
    featured: true,
    sortOrder: 4,
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
    category: "BACKEND" as ProjectCategory,
    status: "COMPLETED" as ProjectStatus,
    featured: false,
    sortOrder: 5,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "JWT",
    ],
  },
] as const;

// Certifications

const certifications = [
  {
    id: "00000000-0000-4000-8000-000000000001",
    name: "Complete Web Development",
    issuer: "Programming Hero",
    credentialId: "WEB12-0898",
    credentialUrl:
      "https://drive.google.com/file/d/1-Nsz8hYQokMaTrDszplEDgwykwu086IH/view?usp=drive_link",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Web Development",
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000002",
    name: "Software Engineer Intern",
    issuer: "HackerRank",
    credentialId: "7A47BA00E7F1",
    skills: ["Software Development"],
  },
  {
    id: "00000000-0000-4000-8000-000000000003",
    name: "Software Engineer",
    issuer: "HackerRank",
    credentialId: "9A6997D7346D",
    skills: ["Software Development"],
  },
  {
    id: "00000000-0000-4000-8000-000000000004",
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    credentialId: "9215A46E2B60",
    skills: ["React.js", "Front-End Development"],
  },
  {
    id: "00000000-0000-4000-8000-000000000005",
    name: "Node.js (Intermediate)",
    issuer: "HackerRank",
    credentialId: "421802E5F3E1",
    skills: ["Node.js"],
    certificateFile: "/certificates/nodejs_intermediate-certificate.pdf",
  },
  {
    id: "00000000-0000-4000-8000-000000000006",
    name: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    credentialId: "7EAE1CB65D60",
    skills: ["JavaScript"],
    certificateFile: "/certificates/javascript_intermediate-certificate.pdf",
  },
  {
    id: "00000000-0000-4000-8000-000000000007",
    name: "Node.js (Basic)",
    issuer: "HackerRank",
    credentialId: "0BF03DE42656",
    skills: ["Node.js"],
    certificateFile: "/certificates/nodejs_basic-certificate.pdf",
  },
  {
    id: "00000000-0000-4000-8000-000000000008",
    name: "JavaScript (Basic)",
    issuer: "HackerRank",
    credentialId: "093787A55EFB",
    skills: ["JavaScript"],
    certificateFile: "/certificates/javascript_basic-certificate.pdf",
  },
  {
    id: "00000000-0000-4000-8000-000000000009",
    name: "Cascading Style Sheets",
    issuer: "HackerRank",
    credentialId: "E71D5BB82C9B",
    skills: ["CSS"],
    certificateFile: "/certificates/css-certificate.pdf",
  },
] as const;

// Skill name aliases

const skillAliases: Record<string, string> = {
  HTML: "HTML5",
  CSS: "CSS3",
  "React.js": "React",
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeSkillName(name: string): string {
  return skillAliases[name] ?? name;
}

// Stable IDs for records without natural unique constraints

function stableUuid(index: number): string {
  return `10000000-0000-4000-8000-${String(index).padStart(12, "0")}`;
}

// Seed

let pendingSeed: Promise<void> | undefined;

async function runSeed(): Promise<void> {
  // 1. Profile
  await db.orm.public.Profile.upsert({
    create: profile,
    update: {
      name: profile.name,
      username: profile.username,
      role: profile.role,
      headline: profile.headline,
      description: profile.description,
      website: profile.website,
      email: profile.email,
      city: profile.city,
      region: profile.region,
      country: profile.country,
      brandName: profile.brandName,
      brandTagline: profile.brandTagline,
    },
    conflictOn: { id: profile.id },
  });

  // 2. Social links
  for (const social of socialLinks) {
    const data = {
      ...social,
      profileId: profile.id,
      isVisible: true,
    };

    await db.orm.public.SocialLink.upsert({
      create: data,
      update: data,
      conflictOn: {
        profileId: profile.id,
        platform: social.platform,
      },
    });
  }

  // 3. Languages
  for (const [index, language] of languages.entries()) {
    const id = stableUuid(index + 1);
    const data = {
      ...language,
      sortOrder: index + 1,
      isVisible: true,
      profileId: profile.id,
    };

    await db.orm.public.ProfileLanguage.upsert({
      create: { id, ...data },
      update: data,
      conflictOn: { id },
    });
  }

  // 4. Engineering practices and areas of interest
  const profileItems = [
    ...engineeringPractices.map((title) => ({
      type: "ENGINEERING_PRACTICE" as ProfileItemType,
      title,
    })),
    ...areasOfInterest.map((title) => ({
      type: "AREA_OF_INTEREST" as ProfileItemType,
      title,
    })),
  ];

  for (const [index, item] of profileItems.entries()) {
    const id = stableUuid(index + 101);
    const data = {
      ...item,
      sortOrder: index + 1,
      isVisible: true,
      profileId: profile.id,
    };

    await db.orm.public.ProfileItem.upsert({
      create: { id, ...data },
      update: data,
      conflictOn: { id },
    });
  }

  // 5. Skill groups
  const skillGroupIds = new Map<string, string>();

  for (const [index, group] of skillGroups.entries()) {
    const result = await db.orm.public.SkillGroup.upsert({
      create: {
        name: group.name,
        slug: group.slug,
        description: group.description,
        sortOrder: index + 1,
        isVisible: true,
      },
      update: {
        name: group.name,
        description: group.description,
        sortOrder: index + 1,
        isVisible: true,
      },
      conflictOn: { slug: group.slug },
    });

    skillGroupIds.set(group.slug, result.id);
  }

  // 6. Skills
  const skillIds = new Map<string, string>();

  for (const [groupIndex, group] of skillGroups.entries()) {
    const groupId = skillGroupIds.get(group.slug);

    for (const [skillIndex, skillName] of group.skills.entries()) {
      const slug = slugify(skillName);

      const result = await db.orm.public.Skill.upsert({
        create: {
          name: skillName,
          slug,
          groupId,
          sortOrder: skillIndex + 1,
          isVisible: true,
          isFeatured: false,
        },
        update: {
          name: skillName,
          groupId,
          sortOrder: skillIndex + 1,
          isVisible: true,
        },
        conflictOn: { slug },
      });

      skillIds.set(skillName, result.id);
    }
  }

  // 7. Additional skills needed by certification records
  for (const [index, skillName] of additionalSkills.entries()) {
    const slug = slugify(skillName);

    const result = await db.orm.public.Skill.upsert({
      create: {
        name: skillName,
        slug,
        sortOrder: index + 1,
        isVisible: true,
        isFeatured: false,
      },
      update: {
        name: skillName,
        isVisible: true,
      },
      conflictOn: { slug },
    });

    skillIds.set(skillName, result.id);
  }

  // 8. Projects and their technology relationships
  const projectIds = new Map<string, string>();

  for (const project of projects) {
    const { technologies, links, ...projectData } = project;

    const result = await db.orm.public.Project.upsert({
      create: {
        ...projectData,
        published: true,
      },
      update: {
        ...projectData,
        published: true,
      },
      conflictOn: { slug: project.slug },
    });

    projectIds.set(project.slug, result.id);

    // Project skills
    for (const [index, technology] of technologies.entries()) {
      const skillName = normalizeSkillName(technology);
      const skillId = skillIds.get(skillName);

      if (!skillId) {
        throw new Error(
          `Missing skill "${technology}" for project "${project.slug}".`,
        );
      }

      await db.orm.public.ProjectSkill.upsert({
        create: {
          projectId: result.id,
          skillId,
          sortOrder: index + 1,
        },
        update: {
          sortOrder: index + 1,
        },
        conflictOn: {
          projectId: result.id,
          skillId,
        },
      });
    }

    // Project links
    for (const [index, link] of links.entries()) {
      await db.orm.public.ProjectLink.upsert({
        create: {
          ...link,
          projectId: result.id,
          sortOrder: index + 1,
        },
        update: {
          label: link.label,
          type: link.type,
          sortOrder: index + 1,
        },
        conflictOn: {
          projectId: result.id,
          url: link.url,
        },
      });
    }
  }

  // 9. Certificate documents
  const certificateAssets = new Map<string, string>();

  for (const certification of certifications) {
    if (!("certificateFile" in certification)) continue;

    const file = certification.certificateFile;
    const asset = await db.orm.public.MediaAsset.upsert({
      create: {
        name: certification.name,
        url: file,
        publicId: file,
        provider: "local",
        kind: "DOCUMENT",
        mimeType: "application/pdf",
        altText: `${certification.name} certificate`,
        folder: "/certificates",
        isPublic: true,
      },
      update: {
        name: certification.name,
        url: file,
        kind: "DOCUMENT",
        mimeType: "application/pdf",
        altText: `${certification.name} certificate`,
        folder: "/certificates",
        isPublic: true,
      },
      conflictOn: {
        provider: "local",
        publicId: file,
      },
    });

    certificateAssets.set(certification.credentialId, asset.id);
  }

  // 10. Certifications and their skill relationships
  for (const [index, certification] of certifications.entries()) {
    const imageAssetId = certificateAssets.get(certification.credentialId);

    const data = {
      name: certification.name,
      issuer: certification.issuer,
      credentialId: certification.credentialId,
      credentialUrl:
        "credentialUrl" in certification
          ? certification.credentialUrl
          : undefined,
      imageAssetId,
      sortOrder: index + 1,
      isVisible: true,
    };

    await db.orm.public.Certification.upsert({
      create: {
        id: certification.id,
        ...data,
      },
      update: data,
      conflictOn: { id: certification.id },
    });

    for (const skill of certification.skills) {
      const skillName = normalizeSkillName(skill);
      const skillId = skillIds.get(skillName);

      if (!skillId) {
        throw new Error(
          `Missing skill "${skill}" for certification "${certification.name}".`,
        );
      }

      await db.orm.public.CertificationSkill.upsert({
        create: {
          certificationId: certification.id,
          skillId,
        },
        update: {},
        conflictOn: {
          certificationId: certification.id,
          skillId,
        },
      });
    }
  }

  console.info("Portfolio seed completed successfully.");
}

// Public seed function

export function seed(): Promise<void> {
  pendingSeed ??= runSeed().catch((error: unknown) => {
    pendingSeed = undefined;
    throw error;
  });

  return pendingSeed;
}
