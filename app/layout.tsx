import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

import { defaultMetadata, personJsonLd, websiteJsonLd } from "@/config/seo";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: siteConfig.brand.colors.petal,
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: siteConfig.brand.colors.midnight,
    },
  ],
};

function jsonLdScript(data: object) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={jsonLdScript(personJsonLd)}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd)}
        />

        {children}
      </body>
    </html>
  );
}
