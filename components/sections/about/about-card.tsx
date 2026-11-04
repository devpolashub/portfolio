"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Variants, motion } from "motion/react"

interface CardPropInterface {
  id: number
  cardTitle: string
  firstPart: string
  secondPart: string
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier
    },
  }),
}

export default function AboutCard({ content }: { content: CardPropInterface }) {
  return (
    <motion.div
      custom={content.id}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Card className="glass-morphism rounded-md border transition-all duration-300 hover:-translate-y-1 hover:border-primary">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(40,10,60,1)_0%,rgba(10,5,20,1)_100%)] to-muted" />

        <CardHeader>
          <CardTitle className="text-lg font-semibold md:text-xl">
            {content.cardTitle}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p>{content.firstPart}</p>

          <p>{content.secondPart}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
