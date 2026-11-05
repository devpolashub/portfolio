"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface AboutCardContent {
  id: number;
  eyebrow: string;
  cardTitle: string;
  description: string;
  detail: string;
  icon: ReactNode;
}

interface AboutCardProps {
  content: AboutCardContent;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function AboutCard({ content }: AboutCardProps) {
  return (
    <motion.div variants={cardVariants} className='h-full'>
      <Card className='group relative bg-card/80 shadow-sm hover:shadow-brand/5 hover:shadow-lg border-border/70 hover:border-brand/40 rounded-2xl h-full overflow-hidden transition-all hover:-translate-y-1 duration-300'>
        {/* Subtle decorative accent */}
        <div
          aria-hidden='true'
          className='-top-16 -right-16 absolute bg-brand/5 group-hover:bg-brand/10 blur-3xl rounded-full size-40 transition-colors duration-500 pointer-events-none'
        />

        <CardHeader className='relative space-y-5 p-6 sm:p-7'>
          <div className='flex justify-between items-center gap-4'>
            <div className='flex justify-center items-center bg-brand/10 group-hover:bg-brand border border-brand/15 rounded-xl size-11 text-brand group-hover:text-brand-foreground transition-colors duration-300'>
              {content.icon}
            </div>

            <span className='font-mono tabular-nums text-muted-foreground/70 text-xs'>
              0{content.id}
            </span>
          </div>

          <div className='space-y-2'>
            <p className='font-semibold text-brand text-xs uppercase tracking-[0.16em]'>
              {content.eyebrow}
            </p>

            <CardTitle className='font-semibold text-xl sm:text-2xl tracking-tight'>
              {content.cardTitle}
            </CardTitle>

            <p className='text-muted-foreground text-sm leading-7'>
              {content.description}
            </p>
          </div>
        </CardHeader>

        <CardContent className='relative px-6 sm:px-7 pb-6 sm:pb-7'>
          <div className='pt-4 border-border/70 border-t'>
            <p className='text-muted-foreground text-sm leading-7'>
              {content.detail}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
