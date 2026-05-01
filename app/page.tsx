import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Cta } from "@/components/Cta";
import { FunFact } from "@/components/FunFact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-[150px]">
      <Hero />
      <Skills />
      <About />
      <FunFact />
      <Projects />
      <Cta />
    </div>
  );
}
