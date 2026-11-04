"use client";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Logo from "../logo";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

const socials = [
  { href: "https://github.com/devpolas", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/lipcb/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "mailto:dpi.polas@gmail.com", icon: Mail, label: "Email" },
  { href: "https://wa.me/8801732333951", icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://t.me/devpolas", icon: FaTelegramPlane, label: "Telegram" },
];

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className='relative bg-background selection:bg-primary w-full text-foreground selection:text-primary-foreground'>
      <div className='mx-auto px-6 glass-morphism-section container'>
        <div className='-z-10 absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,10,60,1)_0%,rgba(10,5,20,1)_100%)] to-muted' />
        {/* Main Content Grid */}
        <div className='flex xl:flex-row flex-col justify-between gap-10 xl:gap-12 pt-12'>
          {/* Brand Column */}
          <div className='flex-1'>
            <div className='flex flex-col items-start space-y-4 max-w-xs'>
              <Logo />
              <p className='max-w-md text-muted-foreground text-sm leading-relaxed'>
                Building modern, scalable, and user-focused digital experiences
                with React, Next.js, TypeScript, and Node.js.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className='flex sm:flex-row flex-col flex-1 xl:flex-2 sm:justify-between gap-10'>
            <div>
              <h3 className='mb-8 font-semibold text-muted-foreground text-sm uppercase tracking-widest'>
                Navigation
              </h3>
              <nav className='flex lg:flex-row flex-col lg:gap-10 space-y-3 lg:space-y-0'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='group after:-bottom-1 after:left-0 after:absolute relative after:bg-primary w-fit after:w-0 hover:after:w-full after:h-px text-muted-foreground hover:text-primary text-sm transition-colors after:transition-all duration-200 after:duration-300'
                  >
                    <span className='inline-flex items-center'>
                      {item.name}
                      <ArrowUpRight className='opacity-60 group-hover:opacity-100 ml-0.5 w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-200' />
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect Column */}
            <div className='flex flex-col space-y-4'>
              <h3 className='font-semibold text-muted-foreground text-sm uppercase tracking-widest'>
                Connect
              </h3>
              <div className='flex flex-wrap gap-2.5'>
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.label}
                      variant='outline'
                      size='icon'
                      className='hover:bg-transparent border-muted/60 hover:border-primary rounded-xl w-10 h-10 hover:text-primary transition-all hover:-translate-y-0.5 duration-300'
                    >
                      <Link
                        href={social.href}
                        target={
                          social.href.startsWith("mailto")
                            ? undefined
                            : "_blank"
                        }
                        rel='noopener noreferrer'
                        aria-label={social.label}
                      >
                        <Icon className='w-4.5 h-4.5' />
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Optimization: Dedicated clean line for Back to Top right above the separator */}
        <div className='flex justify-start sm:justify-end pb-6'>
          <Button
            variant='link'
            className='group px-0 font-medium text-muted-foreground hover:text-primary text-sm transition-colors duration-200'
          >
            <a href='#home' onClick={handleScrollToTop}>
              Back to top
              <ArrowUp className='ml-1.5 w-4 h-4 transition-transform group-hover:-translate-y-1 duration-300' />
            </a>
          </Button>
        </div>

        <Separator className='bg-border/60' />

        {/* Bottom Bar */}
        <div className='flex sm:flex-row flex-col justify-between items-center gap-4 py-6 text-muted-foreground text-xs'>
          <p>© {new Date().getFullYear()} Polas. All rights reserved.</p>
          <p className='hidden sm:block text-muted-foreground/60'>
            Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
