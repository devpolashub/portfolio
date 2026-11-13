"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { motion, type Variants } from "motion/react";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { skillData } from "./data/data";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

const categories = [
  { key: "frontEnd", label: "Frontend" },
  { key: "backEnd", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "authSystem", label: "Auth" },
  { key: "devopsCloud", label: "DevOps" },
  { key: "tools", label: "Tools" },
] as const;

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function SkillsSection() {
  return (
    <Section id='skills' glow='left'>
      <SectionHeading
        id='skills'
        eyebrow='Tech stack'
        title={
          <>
            Skills & <span className='text-brand'>technologies</span>
          </>
        }
        description='Modern tools and technologies I use to build scalable web applications.'
      />

      <motion.div
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={viewportOnce}
      >
        <Tabs defaultValue='frontEnd' className='w-full'>
          <div className='flex justify-center'>
            <TabsList className='flex-wrap justify-center gap-1 h-auto'>
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.key}
                  value={cat.key}
                  className='px-4 py-2 font-semibold text-sm'
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat.key} value={cat.key} className='mt-8'>
              <motion.ul
                variants={gridVariants}
                initial='hidden'
                animate='visible'
                className='gap-3 lg:gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
              >
                {skillData[cat.key].map((skill) => (
                  <motion.li key={skill.name} variants={itemVariants}>
                    <Card
                      style={
                        {
                          "--skill": skill.color ?? "var(--brand)",
                        } as CSSProperties
                      }
                      className='group flex-row items-center gap-3 rounded-xl border-border/70 bg-card/80 p-3 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--skill) hover:shadow-md sm:p-4'
                    >
                      <Image
                        src={skill.icon}
                        alt=''
                        width={32}
                        height={32}
                        className='size-6 lg:size-8 object-contain shrink-0'
                      />
                      <span className='font-medium text-sm'>{skill.name}</span>
                    </Card>
                  </motion.li>
                ))}
              </motion.ul>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </Section>
  );
}
