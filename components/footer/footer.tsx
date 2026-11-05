import Link from "next/link";
import { ArrowUpRight, ArrowUp, Mail, MapPin } from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

import Logo from "../logo";
import { profile } from "@/data/profile";
import { mainHomeNavigation } from "@/config/navigation";

const socials = [
  {
    label: "GitHub",
    href: profile.social.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: profile.social.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "Facebook",
    href: profile.social.facebook[0],
    icon: FaFacebook,
  },
  {
    label: "Telegram",
    href: profile.social.telegram,
    icon: FaTelegram,
  },
  {
    label: "WhatsApp",
    href: profile.social.whatsapp,
    icon: FaWhatsapp,
  },
];

export default function Footer() {
  return (
    <footer className='isolate relative bg-background border-border/70 border-t overflow-hidden text-foreground'>
      {/* Background atmosphere */}
      <div
        aria-hidden='true'
        className='-z-10 absolute inset-0 opacity-70 pointer-events-none brand-glow-bg'
      />

      <div
        aria-hidden='true'
        className='-right-32 -bottom-40 -z-10 absolute border border-brand/10 rounded-full size-96 pointer-events-none'
      />

      <div className='mx-auto px-5 sm:px-8 container'>
        <div className='gap-12 lg:gap-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] py-14 sm:py-20'>
          {/* Brand column */}
          <div className='flex flex-col items-start'>
            <Logo />

            <p className='mt-5 max-w-sm text-muted-foreground text-sm leading-7'>
              Building modern, scalable, and user-focused digital experiences
              with thoughtful engineering and meaningful design.
            </p>

            {/* Location */}
            <div className='inline-flex items-center gap-2 mt-6 text-muted-foreground text-xs'>
              <MapPin className='size-3.5 text-brand' />
              {profile.location.city}, {profile.location.country}
            </div>

            {/* Brand tagline */}
            <p className='mt-5 pl-3 border-brand/40 border-l-2 text-muted-foreground text-xs italic'>
              {profile.brand.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className='mb-6 font-semibold text-foreground text-xs uppercase tracking-[0.18em]'>
              Explore
            </h3>

            <nav aria-label='Footer navigation'>
              <ul className='gap-x-5 gap-y-4 grid grid-cols-2'>
                {mainHomeNavigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className='group inline-flex items-center gap-1 focus-visible:outline-none text-muted-foreground hover:text-brand focus-visible:text-brand text-sm transition-colors duration-200'
                    >
                      {item.label}

                      <ArrowUpRight className='opacity-0 group-hover:opacity-100 size-3 transition-all -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 duration-200' />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className='mb-6 font-semibold text-foreground text-xs uppercase tracking-[0.18em]'>
              Let's connect
            </h3>

            <p className='mb-5 text-muted-foreground text-sm leading-6'>
              Find me on social media or send me an email.
            </p>

            {/* Social links */}
            <div className='flex flex-wrap gap-2.5'>
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Visit my ${label} profile`}
                  title={label}
                  className='group inline-flex justify-center items-center bg-background/60 hover:bg-brand border border-border/70 hover:border-brand rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 size-10 text-muted-foreground hover:text-brand-foreground transition-all hover:-translate-y-1 duration-300'
                >
                  <Icon className='size-4 group-hover:scale-110 transition-transform duration-300' />
                </a>
              ))}
            </div>

            {/* Email link */}
            <a
              href='mailto:hello@polas.dev'
              className='group inline-flex items-center gap-2 mt-6 font-medium text-muted-foreground hover:text-brand text-sm transition-colors duration-200'
            >
              <Mail className='size-4 text-brand' />
              hello@polas.dev
              <ArrowUpRight className='size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-200' />
            </a>
          </div>
        </div>

        <div className='border-border/70 border-t'>
          <div className='flex sm:flex-row flex-col justify-between items-center gap-5 py-6 text-muted-foreground text-xs'>
            {/* Copyright */}
            <p className='sm:text-left text-center'>
              © 2026{" "}
              <span className='font-semibold text-foreground'>
                {profile.name}
              </span>
              . All rights reserved.
            </p>

            {/* Credit */}
            <p className='flex items-center gap-1.5'>
              Designed with intention.
              <span className='text-brand'>Built with passion.</span>
            </p>

            {/* Back to top */}
            <a
              href='#home'
              className='group inline-flex items-center gap-2 px-4 py-2 border border-border/70 hover:border-brand rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 font-medium hover:text-brand transition-all hover:-translate-y-1 duration-300'
            >
              Back to top
              <ArrowUp className='size-3.5 transition-transform group-hover:-translate-y-1 duration-300' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
