"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

import { profile } from "@/data/profile";

// Social links

const socialLinks = [
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

// Hero social links

function HeroSocial() {
  return (
    <div className='flex flex-wrap items-center gap-2'>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Visit my ${label} profile`}
          className='group inline-flex justify-center items-center bg-background/70 hover:bg-brand border border-border/70 hover:border-brand rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 size-10 text-muted-foreground hover:text-brand-foreground transition-all hover:-translate-y-1 duration-300'
        >
          <Icon className='size-4 group-hover:scale-110 transition-transform duration-300' />
        </a>
      ))}
    </div>
  );
}

// Hero portrait

function HeroPortrait() {
  return (
    <div className='relative mx-auto w-full max-w-lg hero-portrait'>
      {/* Ambient lighting */}
      <div
        aria-hidden='true'
        className='-z-10 absolute -inset-5 sm:-inset-10 bg-brand-glow opacity-80 blur-[65px] sm:blur-[85px] rounded-full pointer-events-none'
      />

      {/* Portrait composition */}
      <div className='relative aspect-square hero-portrait-inner'>
        {/* Outer decorative ring */}
        <div
          aria-hidden='true'
          className='absolute inset-[3%] border border-brand/15 rounded-full'
        />

        {/* Rotating decorative ring */}
        <div
          aria-hidden='true'
          className='absolute inset-[7%] border border-brand/25 border-dashed rounded-full hero-orbit'
        />

        {/* Accent decorations */}
        <div
          aria-hidden='true'
          className='top-[15%] right-[10%] z-20 absolute bg-brand-accent shadow-[0_0_30px_var(--brand-accent)] rounded-full size-4 sm:size-5'
        />

        <div
          aria-hidden='true'
          className='bottom-[13%] left-[8%] z-20 absolute bg-brand-nature shadow-[0_0_24px_var(--brand-nature)] rounded-full size-3'
        />

        {/* Main portrait */}
        <div className='absolute inset-[12%] bg-brand-surface shadow-2xl shadow-brand/10 border-4 border-background sm:border-[6px] rounded-full overflow-hidden'>
          <Image
            src='/hero.webp'
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes='
              (max-width: 640px) 75vw,
              (max-width: 1024px) 55vw,
              440px
            '
            className='object-center object-cover'
          />

          {/* Image overlay */}
          <div
            aria-hidden='true'
            className='absolute inset-0 bg-linear-to-t from-brand/15 via-transparent to-transparent'
          />
        </div>

        {/* Developer identity card */}
        <div className='top-[24%] left-0 sm:-left-4 z-30 absolute p-2.5 sm:p-4 rounded-2xl hero-floating-card glass glass-hover'>
          <div className='flex items-center gap-2 sm:gap-3'>
            <div className='flex justify-center items-center bg-brand/10 rounded-xl size-9 sm:size-10 text-brand shrink-0'>
              <Code2 className='size-4.5 sm:size-5' />
            </div>

            <div>
              <p className='font-semibold text-xs'>Full-Stack</p>

              <p className='text-[10px] text-muted-foreground sm:text-[11px]'>
                Developer
              </p>
            </div>
          </div>
        </div>

        {/* Brand identity card */}
        <div className='right-0 sm:-right-4 bottom-[19%] z-30 absolute p-2.5 sm:p-4 rounded-2xl hero-floating-card glass glass-hover'>
          <div className='flex items-center gap-2 sm:gap-3'>
            <div className='flex justify-center items-center bg-brand-accent/15 rounded-xl size-9 sm:size-10 text-brand-accent shrink-0'>
              <Sparkles className='size-4.5 sm:size-5' />
            </div>

            <div>
              <p className='font-semibold text-xs'>{profile.brand.name}</p>

              <p className='max-w-28 text-[10px] text-muted-foreground sm:text-[11px]'>
                Meaningful products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main hero section

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        // Entrance animation
        const timeline = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        timeline
          .from(".hero-eyebrow", {
            autoAlpha: 0,
            y: 18,
            duration: 0.65,
          })
          .from(
            ".hero-heading-line",
            {
              autoAlpha: 0,
              y: 45,
              duration: 0.85,
              stagger: 0.12,
            },
            "-=0.3",
          )
          .from(
            ".hero-description",
            {
              autoAlpha: 0,
              y: 22,
              duration: 0.7,
            },
            "-=0.45",
          )
          .from(
            ".hero-actions",
            {
              autoAlpha: 0,
              y: 18,
              duration: 0.55,
            },
            "-=0.35",
          )
          .from(
            ".hero-social, .hero-meta",
            {
              autoAlpha: 0,
              y: 16,
              duration: 0.5,
              stagger: 0.12,
            },
            "-=0.25",
          )
          .from(
            ".hero-portrait",
            {
              autoAlpha: 0,
              scale: 0.92,
              y: 24,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.9",
          )
          .from(
            ".hero-floating-card",
            {
              autoAlpha: 0,
              y: 18,
              scale: 0.94,
              duration: 0.6,
              stagger: 0.15,
            },
            "-=0.55",
          );

        // Subtle portrait floating animation
        gsap.to(".hero-portrait-inner", {
          y: -9,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Decorative orbit animation
        gsap.to(".hero-orbit", {
          rotation: 360,
          duration: 55,
          repeat: -1,
          ease: "none",
        });
      });

      return () => media.revert();
    },
    {
      scope: container,
    },
  );

  return (
    <section
      ref={container}
      id='home'
      aria-labelledby='hero-heading'
      className='isolate relative flex items-center py-16 sm:py-20 lg:py-16 min-h-[calc(100svh-5rem)] overflow-hidden'
    >
      {/* Background atmosphere */}
      <div
        aria-hidden='true'
        className='-z-10 absolute inset-0 pointer-events-none brand-glow-bg'
      />

      {/* Decorative background circles */}
      <div
        aria-hidden='true'
        className='-top-40 -right-32 -z-10 absolute border border-brand/10 rounded-full size-80 sm:size-112 pointer-events-none'
      />

      <div
        aria-hidden='true'
        className='-bottom-40 -left-40 -z-10 absolute border border-brand/10 rounded-full size-80 sm:size-112 pointer-events-none'
      />

      {/* Main container */}
      <div className='mx-auto px-5 sm:px-8 container'>
        <div className='items-center gap-14 sm:gap-16 lg:gap-8 xl:gap-14 grid lg:grid-cols-[1.1fr_0.9fr]'>
          {/* Left content */}
          <div className='z-10 relative mx-auto w-full min-w-0 max-w-2xl'>
            {/* Eyebrow */}
            <div className='flex flex-wrap items-center gap-3 mb-7 hero-eyebrow'>
              <div className='inline-flex items-center gap-2 bg-brand/5 px-4 py-2 border border-brand/20 rounded-full'>
                <span className='relative flex size-2'>
                  <span className='inline-flex absolute bg-brand-nature opacity-50 rounded-full size-full animate-ping motion-reduce:animate-none' />

                  <span className='inline-flex relative bg-brand-nature rounded-full size-2' />
                </span>

                <span className='font-medium text-brand text-xs tracking-wide'>
                  {profile.role}
                </span>
              </div>

              <span className='flex items-center gap-1.5 text-muted-foreground text-xs'>
                <MapPin className='size-3.5' />
                {profile.location.city}, {profile.location.country}
              </span>
            </div>

            {/* Main heading */}
            <h1
              id='hero-heading'
              className='mb-6 font-heading font-bold text-[clamp(2.8rem,6.5vw,5.8rem)] leading-[0.98] tracking-[-0.065em]'
            >
              <span className='block hero-heading-line'>Thoughtful</span>

              <span className='block hero-heading-line'>engineering.</span>

              <span className='block text-brand-text-gradient hero-heading-line'>
                Meaningful
              </span>

              <span className='block hero-heading-line'>products.</span>
            </h1>

            {/* Description */}
            <div className='space-y-4 max-w-xl hero-description'>
              <p className='font-medium text-brand text-lg sm:text-xl leading-relaxed'>
                {profile.headline}
              </p>

              <p className='text-muted-foreground text-base sm:text-lg leading-8'>
                {profile.description}
              </p>
            </div>

            {/* Actions */}
            <div className='flex flex-wrap items-center gap-3 mt-8 sm:mt-9 hero-actions'>
              <Link
                href='/projects'
                className='group inline-flex justify-center items-center gap-2 bg-brand shadow-brand/15 shadow-lg hover:shadow-brand/25 hover:shadow-xl px-6 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 h-12 font-semibold text-brand-foreground text-sm transition-all hover:-translate-y-1 duration-300'
              >
                Explore my work
                <ArrowUpRight className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-300' />
              </Link>

              <a
                href='/resume.pdf'
                download
                className='inline-flex justify-center items-center gap-2 bg-background/70 hover:bg-brand/5 px-6 border border-border hover:border-brand rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 h-12 font-semibold text-sm transition-all hover:-translate-y-1 duration-300'
              >
                <Download className='size-4' />
                Download CV
              </a>
            </div>

            {/* Social links */}
            <div className='flex flex-wrap items-center gap-4 sm:gap-5 mt-8 sm:mt-9 hero-social'>
              <span className='font-medium text-muted-foreground text-xs uppercase tracking-[0.18em]'>
                Find me on
              </span>

              <HeroSocial />
            </div>

            {/* Metadata */}
            <div className='gap-x-6 gap-y-5 grid grid-cols-2 sm:grid-cols-3 mt-10 sm:mt-12 pt-6 border-border/70 border-t hero-meta'>
              <div>
                <p className='text-muted-foreground text-xs'>Focus</p>

                <p className='mt-1 font-medium text-sm'>
                  Full-Stack Engineering
                </p>
              </div>

              <div>
                <p className='text-muted-foreground text-xs'>Speciality</p>

                <p className='mt-1 font-medium text-sm'>
                  Modern Web Applications
                </p>
              </div>

              <div className='col-span-2 sm:col-span-1'>
                <p className='text-muted-foreground text-xs'>Brand</p>

                <p className='mt-1 font-medium text-sm'>{profile.brand.name}</p>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className='relative mx-auto lg:ml-auto w-full max-w-136'>
            <HeroPortrait />

            <p className='mx-auto mt-6 sm:mt-8 max-w-xs text-muted-foreground text-xs text-center leading-6'>
              {profile.brand.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href='#projects'
        aria-label='Scroll to projects'
        className='hidden bottom-6 left-1/2 absolute lg:flex flex-col items-center gap-2 text-muted-foreground hover:text-brand transition-colors -translate-x-1/2 duration-300'
      >
        <span className='text-[10px] uppercase tracking-[0.25em]'>
          Scroll to explore
        </span>

        <ArrowDown className='size-4 motion-safe:animate-bounce' />
      </Link>
    </section>
  );
}
