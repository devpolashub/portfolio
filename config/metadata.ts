import type { Metadata } from "next";

import { siteConfig } from "./site";

type RouteMetadata = {
  title: string;
  description: string;
  path: `/${string}`;
};

export const routeMetadata = {
  home: {
    title: "Home",
    description:
      "Polas Chandra Barmon builds thoughtful digital products through full-stack engineering, modern web technologies, and AI.",
    path: "/",
  },

  projects: {
    title: "Projects",
    description:
      "Explore Polas Chandra Barmon's software projects, featuring full-stack development, backend APIs, databases, and AI engineering.",
    path: "/projects",
  },

  about: {
    title: "About",
    description:
      "Learn about Polas Chandra Barmon, his engineering philosophy, technical interests, and approach to building meaningful digital products.",
    path: "/about",
  },

  skills: {
    title: "Skills",
    description:
      "Explore Polas Chandra Barmon's technical skills in frontend development, backend engineering, databases, software architecture, and AI technologies.",
    path: "/skills",
  },

  education: {
    title: "Education",
    description:
      "Explore Polas Chandra Barmon's educational background, academic journey, and ongoing learning in software engineering and technology.",
    path: "/education",
  },

  // Keep available for future use when professional experience is added.
  experience: {
    title: "Experience",
    description:
      "Discover Polas Chandra Barmon's professional experience, engineering contributions, and work building software products.",
    path: "/experience",
  },

  contact: {
    title: "Contact",
    description:
      "Get in touch with Polas Chandra Barmon about full-stack development, backend engineering, AI projects, and collaboration.",
    path: "/contact",
  },
} as const satisfies Record<string, RouteMetadata>;

type CreateMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/opengraph-image.png",
  imageAlt,
  noIndex = false,
}: CreateMetadataOptions): Metadata {
  const canonicalUrl = new URL(path, siteConfig.url).toString();
  const socialImageUrl = new URL(image, siteConfig.url).toString();

  const isHomePage = path === "/";

  const pageTitle = isHomePage
    ? `${siteConfig.name} — ${siteConfig.title}`
    : `${title} | ${siteConfig.brandName}`;

  return {
    title: isHomePage ? { absolute: pageTitle } : title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.brandName,
      title: pageTitle,
      description,
      url: canonicalUrl,
      images: [
        {
          url: socialImageUrl,
          alt: imageAlt ?? `${siteConfig.brandName} — ${siteConfig.name}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [socialImageUrl],
    },

    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export const pageMetadata = {
  home: createMetadata(routeMetadata.home),
  projects: createMetadata(routeMetadata.projects),
  about: createMetadata(routeMetadata.about),
  skills: createMetadata(routeMetadata.skills),
  education: createMetadata(routeMetadata.education),
  // Keep this for the future Experience page.
  experience: createMetadata(routeMetadata.experience),
  contact: createMetadata(routeMetadata.contact),
} satisfies Record<keyof typeof routeMetadata, Metadata>;
