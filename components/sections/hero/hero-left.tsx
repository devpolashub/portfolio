import { Badge } from "@/components/ui/badge"

import HeroIntro from "./hero-intro"
import HeroCTA from "./hero-cta"
import HeroSocial from "./hero-social"
import HeroStats from "./hero-stats"

export default function HeroLeft() {
  return (
    <div className="mx-auto space-y-8">
      <Badge variant="secondary" className="px-4 py-2 text-sm">
        Available for freelance
      </Badge>

      {/* Intro  */}
      <HeroIntro />

      {/* CTA */}
      <HeroCTA />

      {/* Social */}
      <HeroSocial />

      {/* Stats */}
      <HeroStats />
    </div>
  )
}
