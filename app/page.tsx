import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { FunFact } from "@/components/FunFact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-[150px] my-[150px] overflow-hidden">
      <Hero />
      <Skills />
      <AboutMe />
      <FunFact />
      <Projects />
      <Contact />
    </div>
  );
}
