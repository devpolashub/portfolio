import { siteConfig } from "./site";

export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialNavigationItem = NavigationItem & {
  external: true;
};

export const mainNavigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  // Enable after gaining relevant professional experience:
  // { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
] as const satisfies readonly NavigationItem[];

export const mainHomeNavigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  // Enable after gaining relevant professional experience:
  // { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/#contact" },
] as const satisfies readonly NavigationItem[];

export const footerNavigation = mainNavigation;
export const footerHomeNavigation = mainNavigation;

export const socialNavigation = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    external: true,
  },
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    external: true,
  },
  {
    label: "Telegram",
    href: siteConfig.social.telegram,
    external: true,
  },
  {
    label: "WhatsApp",
    href: siteConfig.social.whatsapp,
    external: true,
  },
] as const satisfies readonly SocialNavigationItem[];

export const navigationConfig = {
  brand: {
    label: "Polas.",
    href: "/",
  },
  main: mainNavigation,
  home: mainHomeNavigation,
  footer: footerNavigation,
  social: socialNavigation,
  homeCta: {
    label: "Let's Talk",
    href: "/#contact",
  },
  cta: {
    label: "Let's Talk",
    href: "/contact",
  },
} as const;
