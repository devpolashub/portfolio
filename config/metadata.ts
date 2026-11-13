import type { Metadata } from "next";
import { profile } from "@/data/profile";
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
      "Polas Chandra Barmon builds reliable web applications and AI-powered products through full-stack engineering, RAG, and agentic workflows.",
    path: "/",
  },
  projects: {
    title: "Projects",
    description:
      "Software projects by Polas Chandra Barmon: full-stack apps, backend APIs, databases, and AI engineering.",
    path: "/projects",
  },
  about: {
    title: "About",
    description:
      "About Polas Chandra Barmon: his engineering philosophy, technical interests, and approach to building meaningful digital products.",
    path: "/about",
  },
  skills: {
    title: "Skills",
    description:
      "Technical skills of Polas Chandra Barmon across frontend, backend, databases, AI and LLM engineering, testing, and deployment.",
    path: "/skills",
  },
  education: {
    title: "Education",
    description:
      "Educational background and ongoing learning of Polas Chandra Barmon in software engineering and technology.",
    path: "/education",
  },
  contact: {
    title: "Contact",
    description:
      "Get in touch with Polas Chandra Barmon about full-stack development, backend engineering, AI projects, and collaboration.",
    path: "/contact",
  },
  // Add `experience` here, and a page for it, only when there is real content.
} as const satisfies Record<string, RouteMetadata>;

type CreateMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

const defaultTitle = `${siteConfig.name} — ${siteConfig.title}`;
const defaultImage = "/opengraph-image.png"; // make sure this file exists in /public

/** Only real profile pages belong in sameAs (not chat links like WhatsApp/Telegram). */
const sameAs = [
  profile.social.github,
  profile.social.linkedin,
  profile.social.x,
  ...profile.social.facebook,
];

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: { default: defaultTitle, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.brandName,

  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [...siteConfig.professional.specialties],

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.brandName,
    url: siteConfig.url,
    title: defaultTitle,
    description: siteConfig.description,
    images: [{ url: defaultImage, alt: defaultTitle }],
  },

  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: defaultTitle,
    description: siteConfig.description,
    images: [defaultImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: { email: false, address: false, telephone: false },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.name,
  alternateName: siteConfig.username,
  url: siteConfig.url,
  image: new URL(defaultImage, siteConfig.url).toString(),
  email: siteConfig.email,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.division,
    addressCountry: siteConfig.location.countryCode,
  },
  knowsLanguage: profile.languages.map((l) => l.code),
  sameAs,
  knowsAbout: [
    ...siteConfig.professional.specialties,
    ...siteConfig.professional.technologies,
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.brandName,
  alternateName: siteConfig.name,
  description: siteConfig.description,
  inLanguage: "en",
  publisher: { "@id": `${siteConfig.url}/#person` },
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
    : `${title} | ${siteConfig.name}`;

  return {
    title: isHomePage ? { absolute: pageTitle } : title,
    description,
    alternates: { canonical: canonicalUrl },

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
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: pageTitle,
      description,
      images: [socialImageUrl],
    },

    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}

export const pageMetadata = {
  home: createMetadata(routeMetadata.home),
  projects: createMetadata(routeMetadata.projects),
  about: createMetadata(routeMetadata.about),
  skills: createMetadata(routeMetadata.skills),
  education: createMetadata(routeMetadata.education),
  contact: createMetadata(routeMetadata.contact),
} satisfies Record<keyof typeof routeMetadata, Metadata>;
