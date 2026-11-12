"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  align?: "center" | "left";
  action?: ReactNode;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  action,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.div
      variants={fadeUp}
      initial='hidden'
      whileInView='visible'
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-6 mb-12 sm:mb-16",
        centered
          ? "mx-auto max-w-3xl items-center text-center"
          : "lg:flex-row lg:items-end lg:justify-between",
      )}
    >
      <div className={cn("w-full", centered ? "max-w-3xl" : "max-w-2xl")}>
        <p
          className={cn(
            "inline-flex items-center gap-2 mb-4",
            "rounded-full border border-brand/20",
            "bg-brand/5 px-3 py-1.5",
            "text-xs font-semibold tracking-wide text-brand",
          )}
        >
          <span aria-hidden='true' className='bg-brand rounded-full size-1.5' />
          {eyebrow}
        </p>

        <h2 id={`${id}-heading`} className='font-bold text-section-title'>
          {title}
        </h2>

        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-7",
            "text-muted-foreground sm:text-lg sm:leading-8",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      </div>

      {action && <div className='shrink-0'>{action}</div>}
    </motion.div>
  );
}
