import Image from "next/image"

export default function HeroRight() {
  return (
    <div className="relative flex justify-center">
      <div className="relative aspect-square w-80 sm:w-90 md:w-125">
        <div className="absolute inset-1.5 overflow-hidden rounded-4xl bg-background lg:rounded-full">
          <Image
            src="/hero.webp"
            alt="Polas"
            fill
            className="object-cover object-center"
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
      </div>
    </div>
  )
}
