import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const HASH_PREFIX = /^\/?#/;

/** Shared with useActiveSectionId so the nav doesn't flicker mid-scroll */
export const scrollState = { locked: false, targetId: "" };

function getScrollPaddingTop() {
  const px = parseFloat(
    getComputedStyle(document.documentElement).scrollPaddingTop,
  );
  return Number.isNaN(px) ? 0 : px;
}

export default function scrollToSection(href: string): boolean {
  if (typeof window === "undefined" || !HASH_PREFIX.test(href)) return false;

  const id = decodeURIComponent(href.replace(HASH_PREFIX, ""));
  const target = id ? document.getElementById(id) : null;
  if (!target) return false;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (window.location.hash !== `#${id}`) {
    window.history.pushState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#${id}`,
    );
  }

  const finish = () => {
    scrollState.locked = false;
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  };

  scrollState.locked = true;
  scrollState.targetId = id;

  const distance = Math.abs(target.getBoundingClientRect().top);
  const duration = reduceMotion
    ? 0
    : Math.min(1.3, Math.max(0.6, distance / 2200));

  gsap.to(window, {
    scrollTo: { y: target, offsetY: getScrollPaddingTop(), autoKill: true },
    duration,
    ease: "power3.out", // soft landing; try "expo.out" for a longer tail
    overwrite: "auto",
    onComplete: finish,
    onInterrupt: () => {
      scrollState.locked = false;
    },
  });

  return true;
}
