import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { PersonalProjects } from "@/components/PersonalProjects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col relative">
      <div className="noise-overlay"></div>
      <Navigation />
      
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <Experience />
        <Projects />
        <PersonalProjects />
        <Skills />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
