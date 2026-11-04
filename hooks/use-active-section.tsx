"use client";

import { scrollState } from "@/utils/scroll-to-section";
import { useEffect, useState } from "react";

export default function useActiveSectionId(offsetRatio = 0.35) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        // While a nav click is scrolling, hold the clicked section as active
        // so the indicator slides once instead of hopping through every section
        if (scrollState.locked) {
          setActiveId((prev) =>
            prev === scrollState.targetId ? prev : scrollState.targetId,
          );
          return;
        }

        const sections = document.querySelectorAll<HTMLElement>("section[id]");
        if (!sections.length) return;

        const activationPoint =
          window.scrollY + window.innerHeight * offsetRatio;
        let currentId = sections[0].id;

        for (const section of sections) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          if (activationPoint >= top) currentId = section.id;
        }

        const atBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2;
        if (atBottom) currentId = sections[sections.length - 1].id;

        setActiveId((prev) => (prev === currentId ? prev : currentId));
      });
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [offsetRatio]);

  return activeId;
}
