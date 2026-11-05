"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setLenis } from "@/utils/lenis-instance";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;
    let tick: ((time: number) => void) | null = null;

    const start = () => {
      if (lenis) return;
      const instance = new Lenis({
        autoRaf: false,
        smoothWheel: true,
        duration: 1.1,
      });
      lenis = instance;

      instance.on("scroll", () => ScrollTrigger.update());

      tick = (time) => instance.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0); // Lenis needs unsmoothed time

      setLenis(instance);
    };

    const stop = () => {
      if (!lenis) return;
      if (tick) gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33); // restore GSAP defaults
      lenis.destroy();
      lenis = null;
      tick = null;
      setLenis(null);
    };

    const sync = () => (mq.matches ? stop() : start());

    sync();
    mq.addEventListener("change", sync);

    return () => {
      mq.removeEventListener("change", sync);
      stop();
    };
  }, []);

  return <>{children}</>;
}
