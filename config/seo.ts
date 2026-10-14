import type { Metadata } from "next";
import { siteConfig } from "./site";

const defaultTitle = `${siteConfig.title} | ${siteConfig.name}`;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: defaultTitle,
    template: "%s | POLAS",
  },

  description: siteConfig.description,
  applicationName: siteConfig.brandName,

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.brandName,
    title: defaultTitle,
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
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

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.name,
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.division,
    addressCountry: siteConfig.location.countryCode,
  },
  sameAs: Object.values(siteConfig.social),
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
  publisher: {
    "@id": `${siteConfig.url}/#person`,
  },
};
