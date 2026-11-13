import { getLenis } from "@/utils/lenis-instance";

const HASH_PREFIX = /^\/?#/;
const SCROLL_KEYS = new Set([
  "ArrowUp",
  "ArrowDown",
  "PageUp",
  "PageDown",
  "Home",
  "End",
  " ",
]);

export const SCROLL_STATE_EVENT = "scrollstatechange";

/** Shared with useActiveSectionId so the nav doesn't flicker mid-scroll */
export const scrollState = { locked: false, targetId: "" };

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

let teardown: (() => void) | null = null;

/** "/#about" or "#about" -> "about". Returns null for non-section hrefs or bad encoding. */
export function getSectionId(href: string): string | null {
  if (!HASH_PREFIX.test(href)) return null;
  try {
    return decodeURIComponent(href.replace(HASH_PREFIX, "")) || null;
  } catch {
    return null;
  }
}

function release() {
  teardown?.();
  teardown = null;
  if (!scrollState.locked) return;
  scrollState.locked = false;
  window.dispatchEvent(new Event(SCROLL_STATE_EVENT));
}

function getScrollPaddingTop() {
  const px = parseFloat(
    getComputedStyle(document.documentElement).scrollPaddingTop,
  );
  return Number.isNaN(px) ? 0 : px;
}

export default function scrollToSection(href: string): boolean {
  if (typeof window === "undefined") return false;

  const id = getSectionId(href);
  const target = id ? document.getElementById(id) : null;
  if (!id || !target) return false;

  release(); // drop any previous scroll's listeners/timers

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

  const padding = getScrollPaddingTop();
  const distance = Math.abs(target.getBoundingClientRect().top - padding);

  const finish = () => {
    release();
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  };

  scrollState.locked = true;
  scrollState.targetId = id;

  const lenis = getLenis();

  // Nothing to animate: jump (or already there) and finish immediately
  if (!lenis || reduceMotion || distance < 1) {
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - padding,
      behavior: "auto",
    });
    finish();
    return true;
  }

  const duration = Math.min(1.3, Math.max(0.6, distance / 2200));

  // User takes over -> hand control back to the nav
  const onUserInput = (e: Event) => {
    if (e.type === "keydown" && !SCROLL_KEYS.has((e as KeyboardEvent).key))
      return;
    release();
  };
  const events = ["wheel", "touchstart", "keydown"] as const;
  events.forEach((name) =>
    window.addEventListener(name, onUserInput, { passive: true }),
  );

  // Safety net so the lock can never stay on
  const timer = window.setTimeout(release, (duration + 0.5) * 1000);

  teardown = () => {
    events.forEach((name) => window.removeEventListener(name, onUserInput));
    window.clearTimeout(timer);
  };

  lenis.scrollTo(target, {
    offset: -padding,
    duration,
    easing: easeOutCubic, // power3.out; use t === 1 ? 1 : 1 - 2 ** (-10 * t) for expo.out
    onComplete: finish,
  });

  return true;
}
