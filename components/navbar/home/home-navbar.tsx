"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainHomeNavigation, navigationConfig } from "@/config/navigation";
import { cn } from "@/lib/utils";
import Logo from "../../logo";
import { ThemeSwitcher } from "../../theme/theme-switcher";
import { LinkItem } from "../link-item";
import HomeMobileNavbar from "./mobile-home-navbar";
import useActiveSectionId from "@/hooks/use-active-section";

const SCROLL_THRESHOLD = 12;

const NAVBAR_HEIGHT = {
  expanded: "h-20",
  compact: "h-14",
} as const;

// Keep this aligned with your page content containers.
const CONTENT_WIDTH = "w-11/12 lg:w-10/12";

const desktopNavigation = mainHomeNavigation.filter(
  ({ href }) => href !== navigationConfig.homeCta.href,
);

function useIsScrolled(threshold = SCROLL_THRESHOLD) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const next = window.scrollY > threshold;

      setIsScrolled((current) => (current === next ? current : next));
    };

    updateScrollState();

    window.addEventListener("scroll", updateScrollState, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, [threshold]);

  return isScrolled;
}

export default function HomeNavbar() {
  const isScrolled = useIsScrolled();
  const activeId = useActiveSectionId();

  return (
    <header className='top-0 z-50 sticky w-full h-16 pointer-events-none'>
      <nav
        aria-label='Main navigation'
        data-scrolled={isScrolled}
        className={cn(
          "flex items-center mx-auto pointer-events-auto glass-section",
          "border border-transparent",
          "transition-[width,height,margin,border-radius,box-shadow,border-color]",
          "duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "motion-reduce:transition-none",
          isScrolled
            ? [
                CONTENT_WIDTH,
                NAVBAR_HEIGHT.compact,
                "mt-3 rounded-2xl border-brand/15",
                "shadow-lg shadow-brand/5",
              ]
            : [
                "mt-0 h-14 w-full rounded-none",
                "border-x-0 border-t-0 border-b-border",
                "shadow-none",
              ],
        )}
      >
        <div
          className={cn(
            "flex justify-between items-center gap-3 mx-auto h-full",
            "transition-[width] duration-300",
            "ease-[cubic-bezier(0.22,1,0.36,1)]",
            "motion-reduce:transition-none",
            isScrolled ? "w-full px-4" : cn(CONTENT_WIDTH, "px-0"),
          )}
        >
          <Logo href='/' priority className='-ml-1 lg:-ml-2 shrink-0' />

          <div className='flex items-center gap-2 shrink-0'>
            <div className='hidden lg:flex items-center gap-1'>
              {desktopNavigation.map((item) => {
                const isActive = activeId === item.href.replace("/#", "");
                return (
                  <LinkItem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    active={isActive}
                  />
                );
              })}
            </div>

            <Button
              nativeButton={false}
              render={<Link href={navigationConfig.homeCta.href} />}
              className={cn(
                "hidden lg:inline-flex shadow-sm rounded-full",
                "bg-brand text-brand-foreground hover:bg-brand/90",
                "transition-colors",
              )}
            >
              {navigationConfig.homeCta.label}
              <ArrowUpRight aria-hidden='true' className='size-4' />
            </Button>

            <ThemeSwitcher isScrolled={isScrolled} />
            <HomeMobileNavbar isScrolled={isScrolled} />
          </div>
        </div>
      </nav>
    </header>
  );
}
