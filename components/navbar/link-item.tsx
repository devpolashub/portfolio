"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import scrollToSection, { getSectionId } from "@/utils/scroll-to-section";

type LinkItemProps = {
  href: string;
  label: string;
  active: boolean;
  /** Unique per nav instance (e.g. "desktop", "mobile") so indicators don't collide */
  indicatorId?: string;
  /** Called after a click, e.g. to close a mobile menu */
  onNavigate?: () => void;
};

// Time for a mobile sheet to close and release its body scroll lock
const MENU_CLOSE_DELAY = 300;

const SPRING = { type: "spring", stiffness: 380, damping: 30 } as const;
const INSTANT = { duration: 0 } as const;

// Module-level on purpose: it survives the menu unmounting its items on close,
// and a second click replaces a pending scroll instead of stacking another.
let pendingScroll: number | undefined;

export function LinkItem({
  href,
  label,
  active,
  indicatorId = "desktop",
  onNavigate,
}: LinkItemProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const sectionId = getSectionId(href);
  const isSectionLink = sectionId !== null;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const isModified =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.defaultPrevented || isModified || event.button !== 0) return;

    // "#id" works on any page; "/#id" only when we're already on "/"
    const canScrollHere = href.startsWith("#") || pathname === "/";

    // Target not on this page: let Next.js navigate normally
    if (sectionId && canScrollHere && document.getElementById(sectionId)) {
      event.preventDefault();
      window.clearTimeout(pendingScroll);

      if (onNavigate) {
        onNavigate(); // close the menu first
        pendingScroll = window.setTimeout(
          () => scrollToSection(href),
          MENU_CLOSE_DELAY,
        );
      } else {
        scrollToSection(href);
      }
      return;
    }

    onNavigate?.();
  }

  return (
    <Link
      href={href}
      prefetch={isSectionLink ? false : undefined}
      onClick={handleClick}
      aria-current={active ? (isSectionLink ? "location" : "page") : undefined}
      className={cn(
        "inline-flex relative justify-center items-center px-2 rounded-md min-h-8",
        "text-sm font-medium transition-colors duration-200 lg:text-base xl:text-lg",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active ? "text-brand" : "text-muted-foreground hover:text-brand",
      )}
    >
      {label}

      {active && (
        <motion.span
          layoutId={`${indicatorId}-nav-indicator`}
          aria-hidden='true'
          className='-bottom-px absolute inset-x-2 bg-brand rounded-full h-0.5'
          transition={reduceMotion ? INSTANT : SPRING}
        />
      )}
    </Link>
  );
}
