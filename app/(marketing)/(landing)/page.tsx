import About from "@/components/sections/about/about";
import Contact from "@/components/sections/contact/contact";
import Education from "@/components/sections/education/education";
import Experience from "@/components/sections/experience/experience";
import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects/projects";
import Skills from "@/components/sections/skills/skills";

export default function page() {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Education />
      {/* <Experience /> */}
      <Contact />
    </div>
  );
}
