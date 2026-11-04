export default function HeroIntro() {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-4xl md:text-6xl leading-tight">
        Hi, I&apos;m{" "}
        <span className="bg-clip-text bg-linear-to-r from-primary to-purple-500 text-transparent">
          Polas
        </span>
      </h1>

      <h2 className="font-semibold text-muted-foreground text-2xl md:text-4xl">
        Full Stack Developer
      </h2>

      <p className="max-w-xl text-muted-foreground text-lg leading-relaxed">
        I&apos;m a passionate Full Stack Web Developer who enjoys building
        modern, scalable, and user-focused web applications. I love turning
        ideas into real-world products using React, Next.js, Node.js,
        PostgreSQL, and MongoDB while continuously learning new technologies.
      </p>
    </div>
  )
}
